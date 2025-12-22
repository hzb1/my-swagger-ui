import type { OpenAPI } from 'openapi-types'

/** 代码生成配置项 */
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

/** * 完整的结构化生成结果
 * 现在包含了 models，用于存放接口中引用到的 UserVO、OrderVO 等定义
 */
export interface GeneratedTypes {
  queryParams: string
  requestBody: string
  responseData: string
  models: string // 新增：存放所有依赖的实体类定义
}

export class SwaggerToTS {
  private doc: OpenAPI.Document
  private options: Required<GeneratorOptions>
  // 核心：类型收集器，存放映射后的类名及其原始 Schema
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

  /**
   * 解析引用并自动注册到 usedDefinitions 收集器中
   */
  private resolveRef(ref: string): { schema: any; name: string } {
    const parts = ref.replace('#/', '').split('/')
    const rawName = parts[parts.length - 1]
    const mappedName = this.options.typeNameMapper(rawName)

    let current: any = this.doc
    for (const part of parts) {
      current = current?.[part]
    }

    // 如果未收集过，则加入收集器（支持递归收集）
    if (!this.usedDefinitions.has(mappedName)) {
      this.usedDefinitions.set(mappedName, current)
    }

    return { schema: current, name: mappedName }
  }

  /**
   * 递归解析 Schema
   */
  private getTSType(schema: any, depth = 1): string {
    if (!schema) return 'any'

    if (schema.$ref) {
      const { name } = this.resolveRef(schema.$ref)
      return name // 返回映射后的名字，并触发收集
    }

    if (schema.type === 'array') {
      const itemType = this.getTSType(schema.items, depth)
      if (this.options.arrayType === 'bracket') {
        const needsParen = itemType.includes('|') || itemType.includes(' ')
        return needsParen ? `(${itemType})[]` : `${itemType}[]`
      }
      return `Array<${itemType}>`
    }

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

  /**
   * 生成已收集的所有依赖模型的定义代码
   */
  private generateModelsCode(): string {
    let code = ''
    // 遍历收集到的依赖进行生成
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
   * 对外暴露的核心方法：获取分块的 TS 代码
   */
  public getStructuredTypes(path: string, method: string): GeneratedTypes {
    // 每次生成前清空上一次接口的收集记录
    this.usedDefinitions.clear()

    const pathItem = (this.doc.paths as any)[path]
    const op = pathItem ? pathItem[method.toLowerCase()] : null

    if (!op) return { queryParams: '', requestBody: '', responseData: '', models: '' }

    // 1. 先解析主接口（这会通过递归触发 resolveRef 收集依赖）
    const queryParams = this.generateQueryParams(op)
    const requestBody = this.generateRequestBody(op)
    const responseData = this.generateResponse(op)

    // 2. 根据收集到的 usedDefinitions 生成 models 定义
    const models = this.generateModelsCode()

    return {
      queryParams,
      requestBody,
      responseData,
      models,
    }
  }

  private generateQueryParams(op: any): string {
    const params = op.parameters?.filter((p: any) => p.in !== 'body') || []
    if (params.length === 0) return '// 无查询参数'
    let code = `${this.exp}interface QueryParams {\n`
    params.forEach((p: any) => {
      const param = p.$ref ? this.resolveRef(p.$ref).schema : p
      code += this.formatField(
        param.name,
        this.getTSType(param.schema || param),
        param.required,
        param.description,
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
    const successRes = op.responses?.['200'] || op.responses?.default
    const schema = successRes?.schema || successRes?.content?.['application/json']?.schema
    return `${this.exp}type ResponseData = ${schema ? this.getTSType(schema) : 'any'}${this.semi}`
  }
}
