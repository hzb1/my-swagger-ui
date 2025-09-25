// openapiTypeGen.ts
import { type OpenAPIV3 } from 'openapi-types'

/** 递归解析 Schema 为 TS */
function schemaToTs(schema: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject): string {
  if ('$ref' in schema) return schema.$ref.split('/').pop() || 'any'

  if (schema.type === 'object' || schema.properties) {
    const props = schema.properties || {}
    const required = schema.required || []
    const fields = Object.entries(props).map(([k, v]) => {
      const optional = required.includes(k) ? '' : '?'
      const desc = (v as OpenAPIV3.SchemaObject).description || ''
      return `  /** ${desc} */\n  ${k}${optional}: ${schemaToTs(v as any)};`
    })
    return `{\n${fields.join('\n')}\n}`
  }

  if (schema.type === 'array' && schema.items) {
    return `${schemaToTs(schema.items)}[]`
  }

  return schema.type || 'any'
}

export interface ApiTsResult {
  requestType: string // 入参类型
  responseType: string // 响应类型
}

/**
 * 获取指定路径+方法的 TS 类型
 * @param spec OpenAPI v3 文档
 * @param path '/user/{id}' 等
 * @param method 'get' | 'post' ...
 */
export function getApiTypes(
  spec: OpenAPIV3.Document,
  path: string,
  method: keyof OpenAPIV3.PathItemObject,
): ApiTsResult {
  const item = spec.paths[path]
  if (!item) throw new Error(`Path ${path} not found`)
  const op = (item as any)[method] as OpenAPIV3.OperationObject
  if (!op) throw new Error(`Method ${method} not found in ${path}`)

  // ---- 1. 请求参数 ----
  const groups: Record<string, OpenAPIV3.ParameterObject[]> = {
    query: [],
    path: [],
    header: [],
    cookie: [],
  }
  ;(op.parameters || []).forEach((p) => {
    const param = p as OpenAPIV3.ParameterObject
    if (param.in && groups[param.in]) groups[param.in].push(param)
  })

  const genParams = (arr: OpenAPIV3.ParameterObject[]) =>
    arr.length
      ? `{\n${arr
          .map(
            (p) =>
              `  /** ${p.description || ''} */\n  ${p.name}${p.required ? '' : '?'}: ${schemaToTs(
                p.schema as any,
              )};`,
          )
          .join('\n')}\n}`
      : 'Record<string, never>'

  const queryTs = genParams(groups.query)
  const pathTs = genParams(groups.path)

  // body / formData
  let bodyTs = 'undefined'
  if (op.requestBody) {
    const rb = op.requestBody as OpenAPIV3.RequestBodyObject
    const media = Object.values(rb.content || {})[0] as OpenAPIV3.MediaTypeObject | undefined
    if (media?.schema) bodyTs = schemaToTs(media.schema)
  }

  const requestType = `{
  query: ${queryTs};
  path: ${pathTs};
  body: ${bodyTs};
}`

  // ---- 2. 响应类型 ----
  let responseType = 'any'
  const res2xx = Object.entries(op.responses || {}).find(([k]) => k.startsWith('2'))
  if (res2xx) {
    const [, res] = res2xx
    const resObj = res as OpenAPIV3.ResponseObject
    const media = resObj.content && (Object.values(resObj.content)[0] as OpenAPIV3.MediaTypeObject)
    if (media?.schema) responseType = schemaToTs(media.schema)
  }

  return { requestType, responseType }
}
