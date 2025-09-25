import { type Ref, ref, watch } from 'vue'
import type { OpenAPIV3_1 } from 'openapi-types'
import type { TagGroup } from '@/composables/useSwagger.ts'

/** 递归 Schema => TS */
function schemaToTs(schema: OpenAPIV3_1.SchemaObject | OpenAPIV3_1.ReferenceObject): string {
  if ('$ref' in schema) return schema.$ref.split('/').pop() || 'any'

  if (schema.type === 'object' || schema.properties) {
    const props = schema.properties || {}
    const required = schema.required || []
    const fields = Object.entries(props).map(([k, v]) => {
      const optional = required.includes(k) ? '' : '?'
      const desc = (v as OpenAPIV3_1.SchemaObject).description || ''
      return `  /** ${desc} */\n  ${k}${optional}: ${schemaToTs(v as any)};`
    })
    return `{\n${fields.join('\n')}\n}`
  }

  if (schema.type === 'array' && schema.items) {
    return `${schemaToTs(schema.items as any)}[]`
  }

  return schema.type || 'any'
}

function genParams(arr: OpenAPIV3_1.ParameterObject[]) {
  return arr.length
    ? `{\n${arr
        .map(
          (p) =>
            `  /** ${p.description || ''} */\n  ${p.name}${p.required ? '' : '?'}: ${schemaToTs(
              p.schema as any,
            )};`,
        )
        .join('\n')}\n}`
    : 'Record<string, never>'
}

/**
 * Vue3 组合函数
 * @param _spec
 * @param _selected
 */
export function useOpenapiTypes(
  // _spec: Ref<OpenAPIV3_1.Document>,
  _selected: Ref<TagGroup['groups'][number] | null>,
  // apiPath: string,
  // method: keyof OpenAPIV3_1.PathItemObject,
) {
  const queryType = ref('') // Query 参数 TS
  const pathType = ref('') // Path 参数 TS
  const headerType = ref('') // Header 参数 TS
  const cookieType = ref('') // Cookie 参数 TS
  const bodyType = ref('') // Body 参数 TS
  const responseType = ref('') // 响应 TS

  watch(
    _selected,
    (selected) => {
      if (!selected?.item) {
        queryType.value = ''
        pathType.value = ''
        headerType.value = ''
        cookieType.value = ''
        bodyType.value = ''
        responseType.value = ''
        return
      }
      const { item: op } = selected
      // spec.paths['xxx']?.$ref
      try {
        // const pathItem = item
        // if (!pathItem) throw new Error(`Path ${apiPath} not found`)

        // console.log('pathItem', pathItem, method)
        // const op = pathItem[method] as OpenAPIV3_1.OperationObject
        // if (!op) throw new Error(`Method ${method} not found in ${apiPath}`)

        const groups: Record<
          'query' | 'path' | 'header' | 'cookie',
          OpenAPIV3_1.ParameterObject[]
        > = {
          query: [],
          path: [],
          header: [],
          cookie: [],
        }
        ;(op.parameters || []).forEach((p) => {
          const param = p as OpenAPIV3_1.ParameterObject
          if (param.in && groups[param.in as keyof typeof groups]) {
            groups[param.in as keyof typeof groups].push(param)
          }
        })

        queryType.value = genParams(groups.query)
        pathType.value = genParams(groups.path)
        headerType.value = genParams(groups.header)
        cookieType.value = genParams(groups.cookie)

        // body / formData
        bodyType.value = 'undefined'
        if (op.requestBody) {
          const rb = op.requestBody as OpenAPIV3_1.RequestBodyObject
          const media = Object.values(rb.content || {})[0] as
            | OpenAPIV3_1.MediaTypeObject
            | undefined
          if (media?.schema) bodyType.value = schemaToTs(media.schema as any)
        }

        // response
        responseType.value = 'any'
        const res2xx = Object.entries(op.responses || {}).find(([k]) => k.startsWith('2'))
        if (res2xx) {
          const [, res] = res2xx
          const r = res as OpenAPIV3_1.ResponseObject
          const media = r.content && (Object.values(r.content)[0] as OpenAPIV3_1.MediaTypeObject)
          if (media?.schema) responseType.value = schemaToTs(media.schema as any)
        }
      } catch (e) {
        console.error(e)
      }
    },
    { immediate: true },
  )

  return {
    queryType,
    pathType,
    headerType,
    cookieType,
    bodyType,
    responseType,
  }
}
