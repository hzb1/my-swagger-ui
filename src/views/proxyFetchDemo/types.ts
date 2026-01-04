export interface SwaggerApi {
  path: string
  method: string
  summary?: string
  parameters?: SwaggerParameter[]
  requestBody?: any
}

export interface SwaggerParameter {
  name: string
  in: 'query' | 'path' | 'header' | 'cookie'
  required: boolean
  schema?: { type: string }
}
