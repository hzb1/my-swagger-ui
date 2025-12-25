import type { OpenAPI } from 'openapi-types'

/** 自定义请求模板的上下文参数 */
export interface TemplateContext {
  method: string // 请求方法: get, post, put...
  path: string // 原始路径: /user/{id}
  url: string // 转换后的路径: /user/${queryParams.id}
  functionName: string // 生成的函数名
  hasQuery: boolean // 是否存在查询参数
  hasBody: boolean // 是否存在请求体
  queryParamsType: string // 查询参数类型名 (默认 QueryParams)
  requestBodyType: string // 请求体类型名 (默认 RequestBody)
  responseDataType: string // 响应数据类型名 (默认 ResponseData)
  summary?: string // 接口中文描述
  operationId?: string // Swagger 定义的唯一 ID
}

/** 生成器配置项 */
export interface GeneratorOptions {
  indent?: number
  useInterface?: boolean
  addExport?: boolean
  includeComment?: boolean
  optionalStyle?: 'question' | 'undefined'
  semicolon?: boolean
  arrayType?: 'bracket' | 'generic'
  typeNameMapper?: (rawName: string) => string
  int64ToString?: boolean // 处理长整型精度问题
  requestTemplate?: (ctx: TemplateContext) => string // 用户自定义函数模板
}

/** 结构化返回结果 */
export interface GeneratedTypes {
  queryParams: string
  requestBody: string
  responseData: string
  models: string // 收集到的依赖类 (如 UserVO)
  requestFunction: string // 最终生成的请求函数
}

export class SwaggerToTS {
  private doc: OpenAPI.Document
  private options: Required<GeneratorOptions>
  // 核心：收集接口中引用到的所有 Schema
  private usedDefinitions = new Map<string, any>()

  constructor(doc: OpenAPI.Document, options: GeneratorOptions = {}) {
    this.doc = doc
    this.options = {
      indent: options.indent ?? 2,
      useInterface: options.useInterface ?? true,
      addExport: options.addExport ?? true,
      includeComment: options.includeComment ?? true,
      optionalStyle: options.optionalStyle ?? 'question',
      semicolon: options.semicolon ?? true,
      arrayType: options.arrayType ?? 'bracket',
      typeNameMapper: options.typeNameMapper ?? ((name) => name),
      int64ToString: options.int64ToString ?? false,
      requestTemplate: options.requestTemplate as any,
    }
  }

  private get semi() {
    return this.options.semicolon ? ';' : ''
  }
  private get exp() {
    return this.options.addExport ? 'export ' : ''
  }

  /**
   * 解析 $ref 并注册到依赖收集器
   */
  private resolveRef(ref: string): { schema: any; name: string } {
    const parts = ref.replace('#/', '').split('/')
    const rawName = parts[parts.length - 1]
    const mappedName = this.options.typeNameMapper(rawName)

    let current: any = this.doc
    for (const part of parts) {
      current = current?.[part]
    }

    // 避免死循环并收集依赖
    if (!this.usedDefinitions.has(mappedName) && current) {
      this.usedDefinitions.set(mappedName, current)
    }

    return { schema: current, name: mappedName }
  }

  /**
   * 递归将 Swagger Schema 转换为 TS 类型字符串
   */
  private getTSType(schema: any, depth = 1): string {
    if (!schema) return 'any'

    // 1. 处理引用
    if (schema.$ref) {
      const { name } = this.resolveRef(schema.$ref)
      return name
    }

    // 2. 处理枚举
    if (schema.enum) {
      return schema.enum.map((v: any) => (typeof v === 'string' ? `'${v}'` : v)).join(' | ')
    }

    // 3. 处理数组
    if (schema.type === 'array') {
      const itemType = this.getTSType(schema.items, depth)
      if (this.options.arrayType === 'bracket') {
        const needsParen = itemType.includes('|') || itemType.includes(' ')
        return needsParen ? `(${itemType})[]` : `${itemType}[]`
      }
      return `Array<${itemType}>`
    }

    // 4. 处理对象
    if (schema.type === 'object' || schema.properties) {
      const props = Object.entries(schema.properties || {})
      if (props.length === 0) return 'Record<string, any>'

      const parentIndent = ' '.repeat(this.options.indent * (depth - 1))
      let objStr = '{\n'
      props.forEach(([key, prop]: [string, any]) => {
        const isRequired = schema.required?.includes(key)
        objStr += this.formatField(
          key,
          this.getTSType(prop, depth + 1),
          !!isRequired,
          prop.description,
          depth,
        )
      })
      return objStr + `${parentIndent}}`
    }

    // 5. 基础类型映射
    if (schema.type === 'integer' || schema.type === 'number') {
      return this.options.int64ToString && schema.format === 'int64' ? 'string' : 'number'
    }

    const typeMap: Record<string, string> = {
      string: 'string',
      boolean: 'boolean',
      file: 'File',
    }

    return typeMap[schema.type] || 'any'
  }

  private formatField(
    name: string,
    type: string,
    isRequired: boolean,
    comment?: string,
    depth = 1,
  ): string {
    let line = ''
    const currentIndent = ' '.repeat(this.options.indent * depth)
    if (this.options.includeComment && comment) {
      line += `${currentIndent}/** ${comment.replace(/\n/g, ' ')} */\n`
    }
    const isOpt = !isRequired
    const key = isOpt && this.options.optionalStyle === 'question' ? `${name}?` : name
    const finalType =
      isOpt && this.options.optionalStyle === 'undefined' ? `${type} | undefined` : type
    line += `${currentIndent}${key}: ${finalType}${this.semi}\n`
    return line
  }

  /**
   * 渲染请求代码
   */
  private renderRequest(path: string, method: string, op: any, types: GeneratedTypes): string {
    const ctx: TemplateContext = {
      method: method.toLowerCase(),
      path: path,
      url: path.replace(/\{(\w+)\}/g, '${queryParams.$1}'),
      functionName: op.operationId || 'apiFunction',
      hasQuery: types.queryParams !== '// 无查询参数',
      hasBody: types.requestBody !== '// 无 Request Body',
      queryParamsType: 'QueryParams',
      requestBodyType: 'RequestBody',
      responseDataType: 'ResponseData',
      summary: op.summary,
      operationId: op.operationId,
    }

    if (this.options.requestTemplate) {
      return this.options.requestTemplate(ctx)
    }

    // 默认兜底模板 (Axios 风格)
    const args = []
    if (ctx.hasQuery) args.push(`queryParams: ${ctx.queryParamsType}`)
    if (ctx.hasBody) args.push(`data: ${ctx.requestBodyType}`)

    return (
      `${this.exp}async function ${ctx.functionName}(${args.join(', ')}) {\n` +
      `  return axios.${ctx.method}<${ctx.responseDataType}>(\`${ctx.url}\`${ctx.hasBody ? ', data' : ''}${ctx.hasQuery ? ', { params: queryParams }' : ''})${this.semi}\n` +
      `}`
    )
  }

  /**
   * 对外主方法
   */
  public getStructuredTypes(path: string, method: string): GeneratedTypes {
    this.usedDefinitions.clear() // 关键：每次生成新接口前清空，确保按需收集

    const pathItem = (this.doc.paths as any)[path]
    const op = pathItem ? pathItem[method.toLowerCase()] : null
    if (!op)
      return { queryParams: '', requestBody: '', responseData: '', models: '', requestFunction: '' }

    // 1. 生成基础类型 (会自动触发依赖收集)
    const queryParams = this.generateQueryParams(op)
    const requestBody = this.generateRequestBody(op)
    const responseData = this.generateResponse(op)

    // 2. 生成收集到的所有实体类代码
    let modelsCode = ''
    this.usedDefinitions.forEach((schema, name) => {
      const comment = schema.description ? `/** ${schema.description} */\n` : ''
      if (this.options.useInterface && (schema.type === 'object' || schema.properties)) {
        modelsCode += `${comment}${this.exp}interface ${name} ${this.getTSType(schema, 1)}\n\n`
      } else {
        modelsCode += `${comment}${this.exp}type ${name} = ${this.getTSType(schema, 1)}${this.semi}\n\n`
      }
    })

    const result: GeneratedTypes = {
      queryParams,
      requestBody,
      responseData,
      models: modelsCode,
      requestFunction: '',
    }

    // 3. 生成请求函数代码
    result.requestFunction = this.renderRequest(path, method, op, result)

    return result
  }

  private generateQueryParams(op: any): string {
    const params = op.parameters?.filter((p: any) => p.in !== 'body') || []
    if (params.length === 0) return '// 无查询参数'
    let code = `${this.exp}interface QueryParams {\n`
    params.forEach((p: any) => {
      const paramSchema = p.$ref ? this.resolveRef(p.$ref).schema : p.schema || p
      code += this.formatField(
        p.name || paramSchema.name,
        this.getTSType(paramSchema),
        p.required,
        p.description,
      )
    })
    return code + `}`
  }

  private generateRequestBody(op: any): string {
    const v3Body = op.requestBody?.content?.['application/json']?.schema
    const v2Body = op.parameters?.find((p: any) => p.in === 'body')?.schema
    const schema = v3Body || v2Body
    if (!schema) return '// 无 Request Body'
    return `${this.exp}type RequestBody = ${this.getTSType(schema)}${this.semi}`
  }

  private generateResponse(op: any): string {
    // 兼容 200/201/default
    const successRes = op.responses?.['200'] || op.responses?.['201'] || op.responses?.default
    if (!successRes) return `${this.exp}type ResponseData = any${this.semi}`

    // 兼容 OpenAPI 3.0 (content) 和 Swagger 2.0 (schema)
    let schema = successRes.schema
    if (!schema && successRes.content) {
      const content = successRes.content['application/json'] || Object.values(successRes.content)[0]
      schema = (content as any)?.schema
    }

    if (!schema) return `${this.exp}type ResponseData = any${this.semi}`
    return `${this.exp}type ResponseData = ${this.getTSType(schema)}${this.semi}`
  }
}
