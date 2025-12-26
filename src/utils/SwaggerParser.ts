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
    }
  }

  private get semi() {
    return this.options.semicolon ? ';' : ''
  }
  private get exp() {
    return this.options.addExport ? 'export ' : ''
  }

  private resolveRef(ref: string) {
    const parts = ref.replace('#/', '').split('/')
    const rawName = parts[parts.length - 1]
    const mappedName = this.options.typeNameMapper(rawName)
    let current: any = this.doc
    for (const part of parts) current = current?.[part]
    if (!this.usedDefinitions.has(mappedName) && current) {
      this.usedDefinitions.set(mappedName, current)
    }
    return { schema: current, name: mappedName }
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
        objStr += `${indent}${key}${isRequired ? '' : '?'}: ${this.getTSType(prop, depth + 1)}${this.semi}\n`
      })
      return objStr + ' '.repeat(this.options.indent * (depth - 1)) + '}'
    }
    if (schema.type === 'integer' || schema.type === 'number') {
      return this.options.int64ToString && schema.format === 'int64' ? 'string' : 'number'
    }
    return schema.type || 'any'
  }

  private extractRawType(typeStr: string): string {
    if (!typeStr || typeStr.startsWith('//')) return 'any'
    const index = typeStr.indexOf('=')
    if (index === -1) return 'any'
    const res = typeStr.substring(index + 1).trim()
    return res.endsWith(';') ? res.slice(0, -1) : res
  }

  public getStructuredTypes(path: string, method: string): GeneratedTypes {
    this.usedDefinitions.clear()
    const op = (this.doc.paths as any)[path][method.toLowerCase()]

    const queryParams = this.generateQueryParams(op)
    const requestBody = this.generateRequestBody(op)
    const responseData = this.generateResponse(op)

    let models = ''
    this.usedDefinitions.forEach((schema, name) => {
      models += `${this.exp}${this.options.useInterface ? 'interface' : 'type'} ${name} ${this.getTSType(schema)}\n\n`
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

    return {
      queryParams,
      requestBody,
      responseData,
      models,
      requestFunction: this.options.requestTemplate ? this.options.requestTemplate(ctx) : '',
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
    const res = op.responses?.['200'] || op.responses?.default
    const schema = res?.schema || res?.content?.['application/json']?.schema
    return schema
      ? `${this.exp}type ResponseData = ${this.getTSType(schema)}${this.semi}`
      : `${this.exp}type ResponseData = any${this.semi}`
  }
}
