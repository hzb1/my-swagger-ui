import { type OpenAPIV3 } from 'openapi-types'

// 仅保留常用字段，可根据需要再扩展
export type SwaggerPathMethod = OpenAPIV3.OperationObject

export type SwaggerSchema = OpenAPIV3.SchemaObject

export type SwaggerDoc = OpenAPIV3.Document

export interface ActualCapital {
  type: ActualCapitalType
  description?: string
}

export type ActualCapitalType = 'number' | 'string' | 'object' | 'boolean'

export interface EnterpriseID {
  type: EnterpriseIDType
  format?: Format
  description?: string
  items?: ActualCapital
}

export type Format = 'int64' | 'date-time' | 'int32'

export type EnterpriseIDType = 'integer' | 'string' | 'array' | 'boolean'

export interface Current {
  type: EnterpriseIDType
  format: Format
}

export interface Items {
  $ref: string
}

export interface R {
  type: ActualCapitalType
  description: string
  properties: RProperties
}

export interface RProperties {
  code: EnterpriseID
  msg: ActualCapital
  data: ActualCapital
  ok: Ok
}

export interface Ok {
  type: ActualCapitalType
  readOnly: boolean
}

export interface RLong {
  type: ActualCapitalType
  description: string
  properties: RLongProperties
}

export interface RLongProperties {
  code: EnterpriseID
  msg: ActualCapital
  data: EnterpriseID
  ok: Ok
}

export interface RequestLogManageDTO {
  type: ActualCapitalType
  description: string
  properties: RequestLogManageDTOProperties
}

export interface RequestLogManageDTOProperties {
  createRecordDeptId: EnterpriseID
  createRecordDept: ActualCapital
  createRecordCompanyId: EnterpriseID
  createRecordCompany: ActualCapital
  userId: EnterpriseID
  user: ActualCapital
  sysTypeEnum: BizType
  bizId: EnterpriseID
  bizName: ActualCapital
  bizType: BizType
  bizNo: ActualCapital
  isVisit: ActualCapital
  requestSys: ActualCapital
  requestApiType: BizType
  requestUrl: ActualCapital
  requestMethod: ActualCapital
  requestHeader: ActualCapital
  requestParams: ActualCapital
  requestResultType: BizType
  requestResult: ActualCapital
  requestTime: EnterpriseID
  expand: Expand
  requestLogManageId: EnterpriseID
  remoteSaveType: BizType
  errorMsg: ActualCapital
}

export interface BizType {
  type: ActualCapitalType
  description: string
  enum: string[]
}

export interface Expand {
  type: ActualCapitalType
  additionalProperties: AdditionalProperties
  description: string
}

export interface AdditionalProperties {
  type: ActualCapitalType
}

export interface Authorization {
  type: string
  flows: Flows
}

export interface Flows {
  password: Password
}

export interface Password {
  tokenUrl: string
  scopes: Scopes
}

export interface Scopes {
  server: string
}

export interface PostClass {
  tags: string[]
  summary: string
  description: string
  operationId: string
  parameters?: DeleteParameter[]
  responses: { [key: string]: PostResponse }
  security: Security[]
  requestBody?: RequestBody
}

export interface DeleteParameter {
  name: string
  in: In
  required: boolean
  schema: EnterpriseID
  description?: string
}

export type In = 'query'

export interface RequestBody {
  content: RequestBodyContent
  required: boolean
}

export interface RequestBodyContent {
  'application/json': ApplicationJSON
}

export interface ApplicationJSON {
  schema: ApplicationJSONSchema
}

export interface ApplicationJSONSchema {
  $ref?: string
  type?: EnterpriseIDType
  items?: Current
}

export interface PostResponse {
  description: Description
  content: PurpleContent
}

export interface PurpleContent {
  '*/*': Purple
}

export interface Purple {
  schema: Items
}

export type Description = 'OK' | 'Forbidden' | 'Internal Server Error'

export interface Security {
  Authorization: any[]
}

export interface Server {
  url: string
}

export interface SwaggerConfig {
  configUrl: string
  oauth2RedirectUrl: string
  urls: {
    url: string
    name: string
  }[]
  validatorUrl: string
}
