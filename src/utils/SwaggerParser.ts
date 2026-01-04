import type { OpenAPI } from 'openapi-types'

export interface TemplateContext {
  method: string
  path: string
  url: string
  functionName: string
  hasQuery: boolean
  hasBody: boolean
  queryParamsType: string
  requestBodyType: string
  responseDataType: string
  summary?: string
  operationId?: string
}

export interface GeneratorOptions {
  indent?: number
  useInterface?: boolean
  addExport?: boolean
  semicolon?: boolean
  typeNameMapper?: (rawName: string) => string
  int64ToString?: boolean
  requestTemplate?: (ctx: TemplateContext) => string
  showExample?: boolean
}

export interface GeneratedTypes {
  queryParams: string
  requestBody: string
  responseData: string
  models: string
  requestFunction: string
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
      semicolon: options.semicolon ?? true,
      typeNameMapper: options.typeNameMapper ?? ((name) => name),
      int64ToString: options.int64ToString ?? true,
      requestTemplate: options.requestTemplate as any,
      showExample: options.showExample ?? true, // 默认开启
    }
  }

  private get semi() {
    return this.options.semicolon ? ';' : ''
  }
  private get exp() {
    return this.options.addExport ? 'export ' : ''
  }

  private resolveRef(ref: string) {
    // 1. 处理路径：移除开头的 #/
    const path = ref.replace(/^#\//, '')
    const parts = path.split('/')
    const rawName = parts[parts.length - 1]
    const mappedName = this.options.typeNameMapper(rawName)

    // 2. 深度查找定义
    let current: any = this.doc
    for (const part of parts) {
      current = current?.[part]
    }

    // 3. 记录已使用的定义（用于生成 models）
    if (current && !this.usedDefinitions.has(mappedName)) {
      this.usedDefinitions.set(mappedName, current)
      // 递归解析内部可能存在的其他引用，确保它们也被加入 usedDefinitions
      this.getTSType(current)
    }

    return { schema: current, name: mappedName }
  }

  private formatJSDoc(
    doc: { summary?: string; description?: string; example?: any },
    indentDepth = 0,
  ): string {
    const lines: string[] = []
    const indent = ' '.repeat(this.options.indent * indentDepth)

    if (doc.summary) lines.push(`${doc.summary}`)
    if (doc.description) lines.push(`${doc.description}`)

    // 根据配置决定是否展示示例
    if (this.options.showExample && doc.example) {
      const exampleStr = typeof doc.example === 'object' ? JSON.stringify(doc.example) : doc.example
      lines.push(`@example ${exampleStr}`)
    }

    if (lines.length === 0) return ''

    if (lines.length === 1) {
      return `${indent}/** ${lines[0]} */\n`
    }

    const content = lines.map((line) => `${indent} * ${line}`).join('\n')
    return `${indent}/**\n${content}\n${indent} */\n`
  }

  private getTSType(schema: any, depth = 1): string {
    if (!schema) return 'any'
    if (schema.$ref) return this.resolveRef(schema.$ref).name
    if (schema.enum)
      return schema.enum.map((v: any) => (typeof v === 'string' ? `'${v}'` : v)).join(' | ')
    if (schema.type === 'array') return `${this.getTSType(schema.items, depth)}[]`
    if (schema.type === 'object' || schema.properties) {
      const props = Object.entries(schema.properties || {})
      if (props.length === 0) return 'Record<string, any>'
      let objStr = '{\n'
      props.forEach(([key, prop]: [string, any]) => {
        const isRequired = schema.required?.includes(key)
        const indent = ' '.repeat(this.options.indent * depth)

        // --- 注入属性注释 ---
        objStr += this.formatJSDoc(prop, depth)

        objStr += `${indent}${key}${isRequired ? '' : '?'}: ${this.getTSType(prop, depth + 1)}${this.semi}\n`
      })
      return objStr + ' '.repeat(this.options.indent * (depth - 1)) + '}'
    }
    if (schema.type === 'integer' || schema.type === 'number') {
      // 优先级 1: int64ToString 开启且格式匹配，转 string
      if (this.options.int64ToString && schema.format === 'int64') {
        return 'string'
      }
      // 优先级 2: integerToNumber 开启，转 number
      return 'number'
    }
    return schema.type || 'any'
  }

  private extractRawType(typeStr: string): string {
    if (!typeStr || typeStr.startsWith('//')) return 'any'

    // 匹配：export type ResponseData = { ... } 或 export type ResponseData = UserVO;
    // 使用正则匹配等号后面的所有内容，直到末尾或分号
    const match = typeStr.match(/=\s+([\s\S]+?)(;|$)/)

    if (match && match[1]) {
      const res = match[1].trim()
      return res || 'any'
    }

    return 'any'
  }

  public getStructuredTypes(path: string, method: string): GeneratedTypes {
    this.usedDefinitions.clear()
    const op = (this.doc.paths as any)[path][method.toLowerCase()]

    const queryParams = this.generateQueryParams(op)
    const requestBody = this.generateRequestBody(op)
    const responseData = this.generateResponse(op)

    // Debug 打印：看看生成的字符串是什么样的
    // console.log('Generated Response String:', responseData, op)

    let models = ''
    this.usedDefinitions.forEach((schema, name) => {
      // 注入 Model 顶层注释
      models += this.formatJSDoc(schema)
      models += `${this.exp}${this.options.useInterface ? 'interface' : 'type'} ${name} ${this.getTSType(schema)}\n\n`
    })

    // 构造请求函数的 JSDoc
    const functionJSDoc = this.formatJSDoc({
      summary: op.summary,
      description: op.description,
    })

    const ctx: TemplateContext = {
      method: method.toLowerCase(),
      path,
      url: path.replace(/\{(\w+)\}/g, '${queryParams.$1}'),
      functionName: op.operationId || 'apiFunc',
      hasQuery: queryParams !== '// 无查询参数',
      hasBody: requestBody !== '// 无 Request Body',
      queryParamsType: this.extractRawType(queryParams),
      requestBodyType: this.extractRawType(requestBody),
      responseDataType: this.extractRawType(responseData),
      summary: op.summary,
      operationId: op.operationId,
    }

    // 在模板前拼接注释
    const rawFunction = this.options.requestTemplate ? this.options.requestTemplate(ctx) : ''
    const requestFunctionWithDoc = functionJSDoc + rawFunction

    return {
      queryParams,
      requestBody,
      responseData,
      models,
      requestFunction: requestFunctionWithDoc,
    }
  }

  private generateQueryParams(op: any) {
    const params = op.parameters?.filter((p: any) => p.in !== 'body') || []
    if (!params.length) return '// 无查询参数'
    let code = `${this.exp}interface QueryParams {\n`
    params.forEach((p: any) => {
      code += `  ${p.name}${p.required ? '' : '?'}: ${this.getTSType(p.schema || p, 2)}${this.semi}\n`
    })
    return code + '}'
  }

  private generateRequestBody(op: any) {
    const schema =
      op.requestBody?.content?.['application/json']?.schema ||
      op.parameters?.find((p: any) => p.in === 'body')?.schema
    return schema
      ? `${this.exp}type RequestBody = ${this.getTSType(schema)}${this.semi}`
      : '// 无 Request Body'
  }

  private generateResponse(op: any) {
    // 1. 获取 200 或默认响应
    const res = op.responses?.['200'] || op.responses?.['201'] || op.responses?.default
    if (!res) return `${this.exp}type ResponseData = any${this.semi}`

    // 2. 这里的逻辑做了增强：
    //    - 优先匹配 'application/json'
    //    - 其次匹配 '*/*'
    //    - 如果都没有，取 content 下的第一个定义的 schema (OpenAPI 3.0)
    //    - 最后降级兼容 Swagger 2.0 的 res.schema
    let schema = null

    if (res.content) {
      schema =
        res.content['application/json']?.schema ||
        res.content['*/*']?.schema ||
        Object.values(res.content)[0]?.['schema']
    } else {
      schema = res.schema
    }

    if (!schema) {
      return `${this.exp}type ResponseData = any${this.semi}`
    }

    // 3. 解析类型
    const typeStr = this.getTSType(schema)
    return `${this.exp}type ResponseData = ${typeStr}${this.semi}`
  }
}
