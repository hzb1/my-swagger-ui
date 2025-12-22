import type { OpenAPI } from 'openapi-types'

export interface GeneratorOptions {
  indent?: number
  useInterface?: boolean
  addExport?: boolean
  includeComment?: boolean
  optionalStyle?: 'question' | 'undefined'
  semicolon?: boolean
  arrayType?: 'bracket' | 'generic'
  typeNameMapper?: (rawName: string) => string
}

export interface GeneratedTypes {
  queryParams: string
  requestBody: string
  responseData: string
  models: string
}

export class SwaggerToTS {
  private doc: OpenAPI.Document
  private options: Required<GeneratorOptions>
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
    }
  }

  private get semi() {
    return this.options.semicolon ? ';' : ''
  }
  private get exp() {
    return this.options.addExport ? 'export ' : ''
  }

  private resolveRef(ref: string): { schema: any; name: string } {
    const parts = ref.replace('#/', '').split('/')
    const rawName = parts[parts.length - 1]
    const mappedName = this.options.typeNameMapper(rawName)

    let current: any = this.doc
    for (const part of parts) {
      current = current?.[part]
    }

    if (!this.usedDefinitions.has(mappedName) && current) {
      this.usedDefinitions.set(mappedName, current)
    }

    return { schema: current, name: mappedName }
  }

  private getTSType(schema: any, depth = 1): string {
    if (!schema) return 'any'

    // 重点：处理引用
    if (schema.$ref) {
      const { name } = this.resolveRef(schema.$ref)
      return name
    }

    // 处理数组
    if (schema.type === 'array') {
      const itemType = this.getTSType(schema.items, depth)
      if (this.options.arrayType === 'bracket') {
        const needsParen = itemType.includes('|') || itemType.includes(' ')
        return needsParen ? `(${itemType})[]` : `${itemType}[]`
      }
      return `Array<${itemType}>`
    }

    // 处理对象
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

    const typeMap: Record<string, string> = {
      integer: 'number',
      number: 'number',
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

  private generateModelsCode(): string {
    let code = ''
    this.usedDefinitions.forEach((schema, name) => {
      const comment = schema.description ? `/** ${schema.description} */\n` : ''
      if (this.options.useInterface && (schema.type === 'object' || schema.properties)) {
        code += `${comment}${this.exp}interface ${name} ${this.getTSType(schema, 1)}\n\n`
      } else {
        code += `${comment}${this.exp}type ${name} = ${this.getTSType(schema, 1)}${this.semi}\n\n`
      }
    })
    return code
  }

  /**
   * 【核心修复点】响应解析逻辑
   */
  private generateResponse(op: any): string {
    // 1. 获取 200 或 default 响应内容
    const successRes = op.responses?.['200'] || op.responses?.['201'] || op.responses?.default
    if (!successRes) return `${this.exp}type ResponseData = any${this.semi}`

    // 2. 深度寻找 Schema (兼容 Swagger 2.0 和 OpenAPI 3.0)
    // v3: content['application/json'].schema
    // v2: schema
    let schema = successRes.schema
    if (!schema && successRes.content) {
      // 优先匹配 json，如果没有则取第一个
      const content = successRes.content['application/json'] || Object.values(successRes.content)[0]
      schema = (content as any)?.schema
    }

    if (!schema) return `${this.exp}type ResponseData = any${this.semi}`

    // 3. 进入递归解析
    return `${this.exp}type ResponseData = ${this.getTSType(schema)}${this.semi}`
  }

  public getStructuredTypes(path: string, method: string): GeneratedTypes {
    this.usedDefinitions.clear()
    const pathItem = (this.doc.paths as any)[path]
    const op = pathItem ? pathItem[method.toLowerCase()] : null

    if (!op) return { queryParams: '', requestBody: '', responseData: '', models: '' }

    // 执行顺序很重要：先解析主类型触发收集，再生成 models
    const queryParams = this.generateQueryParams(op)
    const requestBody = this.generateRequestBody(op)
    const responseData = this.generateResponse(op)
    const models = this.generateModelsCode()

    return { queryParams, requestBody, responseData, models }
  }

  private generateQueryParams(op: any): string {
    const params = op.parameters?.filter((p: any) => p.in !== 'body') || []
    if (params.length === 0) return '// 无查询参数'
    let code = `${this.exp}interface QueryParams {\n`
    params.forEach((p: any) => {
      // 兼容参数直接引用模型
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
    const v3Body =
      op.request_body?.content?.['application/json']?.schema ||
      op.requestBody?.content?.['application/json']?.schema
    const v2Body = op.parameters?.find((p: any) => p.in === 'body')?.schema
    const schema = v3Body || v2Body
    if (!schema) return '// 无 Request Body'
    return `${this.exp}type RequestBody = ${this.getTSType(schema)}${this.semi}`
  }
}
