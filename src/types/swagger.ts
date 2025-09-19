import type { SwaggerPathMethod } from '@/api/data.type.ts'

export interface ApiItem {
  path: string
  method: string
  detail: SwaggerPathMethod
}

export interface SwaggerParameter {
  name: string
  in: string
  description?: string
  required: boolean
  schema?: {
    type?: string
    format?: string
    $ref?: string
  }
}

export interface SwaggerResponse {
  description: string
  content?: Record<
    string,
    {
      schema?: {
        $ref?: string
        type?: string
      }
    }
  >
}

export interface SwaggerPathItem {
  summary?: string
  description?: string
  tags?: string[]
  parameters?: SwaggerParameter[]
  responses?: Record<string, SwaggerResponse>
}

export interface ApiGroup {
  tag: string
  apis: {
    method: string
    path: string
    item: SwaggerPathItem
  }[]
}
