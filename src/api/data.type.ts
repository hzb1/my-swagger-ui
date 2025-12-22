import type { OpenAPIV3, OpenAPIV3_1, OpenAPI } from 'openapi-types'

// 仅保留常用字段，可根据需要再扩展
export type SwaggerPathMethod = OpenAPIV3.OperationObject | OpenAPIV3_1.OperationObject

export type SwaggerSchema = OpenAPIV3.SchemaObject | OpenAPIV3_1.SchemaObject

export type SwaggerDoc = OpenAPIV3.Document | OpenAPIV3_1.Document

export interface SwaggerConfig {
  configUrl: string
  oauth2RedirectUrl: string
  urls: {
    url: string
    name: string
  }[]
  validatorUrl: string
}
