// 仅保留常用字段，可根据需要再扩展
export type SwaggerPathMethod = PostClass

export interface SwaggerSchema {
  type?: string
  description?: string
  properties?: Record<string, SwaggerSchema>
  items?: SwaggerSchema
  required?: string[]
  $ref?: string
}

export interface SwaggerDoc {
  openapi: string
  info: Info
  servers: Server[]
  tags: Tag[]
  paths: Paths
  components: Components
}

export interface Components {
  schemas: Schemas
  securitySchemes: SecuritySchemes
}

export interface Schemas {
  R: R
  RequestLogManageDTO: RequestLogManageDTO
  RRequestLogManageDTO: RiPageLogisticsCargoOwnerResVo
  LogisticsCarrierDriverVehicleVO: LogisticsCarrierDriverVehicleVO
  LogisticsDriverSaveReqVO: LogisticsDriverSaveReqVO
  LogisticsDriverEntity: LogisticsDriverEntity
  LogisticsCarrierSaveReqVO: LogisticsCarerSaveReqVo
  RLong: RLong
  IdListVO: IDListVO
  RBoolean: R
  LogisticsCarrierChangeStateReqVO: LogisticsCarerChangeStateReqVo
  LogisticsCargoOwnerSaveReqVO: LogisticsCarerSaveReqVo
  LogisticsCargoOwnerChangeStateReqVO: LogisticsCarerChangeStateReqVo
  EnterpriseInfoApiVO: EnterpriseInfoAPIVO
  RListEnterpriseInfoApiVO: RListEnterpriseInfoAPIVO
  IPageLogisticsCarrierResVO: IPageResVo
  LogisticsCarrierResVO: LogisticsCarerResVo
  RIPageLogisticsCarrierResVO: RiPageLogisticsCargoOwnerResVo
  IdVO: IDVO
  RLogisticsCarrierResVO: RiPageLogisticsCargoOwnerResVo
  IPageLogisticsCargoOwnerResVO: IPageResVo
  LogisticsCargoOwnerResVO: LogisticsCarerResVo
  RIPageLogisticsCargoOwnerResVO: RiPageLogisticsCargoOwnerResVo
  RLogisticsCargoOwnerResVO: RiPageLogisticsCargoOwnerResVo
  IPageWaybillOrderPageResVO: IPageResVo
  RIPageWaybillOrderPageResVO: RiPageLogisticsCargoOwnerResVo
  WaybillOrderPageResVO: WaybillOrderPageResVO
}

export interface EnterpriseInfoAPIVO {
  type: ActualCapitalType
  description: string
  properties: EnterpriseInfoAPIVOProperties
}

export interface EnterpriseInfoAPIVOProperties {
  enterpriseId: EnterpriseID
  enterpriseName: ActualCapital
  realAddress: ActualCapital
  contactPerson: ActualCapital
  contactTelephone: ActualCapital
  legalPerson: ActualCapital
  creditCode: ActualCapital
  email: ActualCapital
  telephone: ActualCapital
  subscribedCapital: ActualCapital
  actualCapital: ActualCapital
  businessScope: ActualCapital
}

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

export interface IPageResVo {
  type: ActualCapitalType
  properties: IPageLogisticsCargoOwnerResVOProperties
}

export interface IPageLogisticsCargoOwnerResVOProperties {
  size: Current
  records: Records
  current: Current
  total: Current
  pages: Pages
}

export interface Current {
  type: EnterpriseIDType
  format: Format
}

export interface Pages {
  type: EnterpriseIDType
  format: Format
  deprecated: boolean
}

export interface Records {
  type: EnterpriseIDType
  items: Items
}

export interface Items {
  $ref: string
}

export interface IDListVO {
  type: ActualCapitalType
  description: string
  properties: IDListVOProperties
  required: string[]
}

export interface IDListVOProperties {
  ids: IDS
}

export interface IDS {
  type: EnterpriseIDType
  items: Current
}

export interface IDVO {
  type: ActualCapitalType
  description: string
  properties: IDVOProperties
  required: string[]
}

export interface IDVOProperties {
  id: EnterpriseID
}

export interface LogisticsCarerChangeStateReqVo {
  type: ActualCapitalType
  description: string
  properties: LogisticsCargoOwnerChangeStateReqVOProperties
  required: string[]
}

export interface LogisticsCargoOwnerChangeStateReqVOProperties {
  id: EnterpriseID
  state: ActualCapital
}

export interface LogisticsCarerResVo {
  type: ActualCapitalType
  description: string
  properties: LogisticsCargoOwnerResVOProperties
}

export interface LogisticsCargoOwnerResVOProperties {
  createRecordCompanyId: EnterpriseID
  createRecordCompany: ActualCapital
  creator: EnterpriseID
  createBy: ActualCapital
  createTime: EnterpriseID
  updater: EnterpriseID
  updateBy: ActualCapital
  updateTime: EnterpriseID
  delFlag: ActualCapital
  id: EnterpriseID
  companyId: EnterpriseID
  companyName: ActualCapital
  username: ActualCapital
  contactPerson: ActualCapital
  contactTelephone: ActualCapital
  state: ActualCapital
}

export interface LogisticsCarerSaveReqVo {
  type: ActualCapitalType
  description: string
  properties: LogisticsCargoOwnerSaveReqVOProperties
  required: string[]
}

export interface LogisticsCargoOwnerSaveReqVOProperties {
  id: EnterpriseID
  companyId: EnterpriseID
}

export interface LogisticsCarrierDriverVehicleVO {
  type: ActualCapitalType
  description: string
  properties: LogisticsCarrierDriverVehicleVOProperties
  required: string[]
}

export interface LogisticsCarrierDriverVehicleVOProperties {
  driverId: EnterpriseID
  driverName: ActualCapital
  carrierId: EnterpriseID
  carrierName: ActualCapital
  vehicleId: EnterpriseID
  vehicleLicense: ActualCapital
}

export interface LogisticsDriverEntity {
  type: ActualCapitalType
  description: string
  properties: LogisticsDriverEntityProperties
}

export interface LogisticsDriverEntityProperties {
  createRecordCompanyId: EnterpriseID
  createRecordCompany: ActualCapital
  creator: EnterpriseID
  createBy: ActualCapital
  createTime: EnterpriseID
  updater: EnterpriseID
  updateBy: ActualCapital
  updateTime: EnterpriseID
  delFlag: ActualCapital
  id: EnterpriseID
  userId: EnterpriseID
  driverName: ActualCapital
  phone: ActualCapital
  state: ActualCapital
}

export interface LogisticsDriverSaveReqVO {
  type: ActualCapitalType
  description: string
  properties: LogisticsDriverSaveReqVOProperties
  required: string[]
}

export interface LogisticsDriverSaveReqVOProperties {
  id: EnterpriseID
  driverName: ActualCapital
  phone: Phone
  password: ActualCapital
  carrierVehicleList: CarrierVehicleList
}

export interface CarrierVehicleList {
  type: EnterpriseIDType
  description: string
  items: Items
  maxItems: number
  minItems: number
}

export interface Phone {
  type: ActualCapitalType
  description: string
  pattern: string
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

export interface RiPageLogisticsCargoOwnerResVo {
  type: ActualCapitalType
  description: string
  properties: RIPageLogisticsCargoOwnerResVOProperties
}

export interface RIPageLogisticsCargoOwnerResVOProperties {
  code: EnterpriseID
  msg: ActualCapital
  data: PurpleData
  ok: Ok
}

export interface PurpleData {
  $ref: string
  description: string
}

export interface RListEnterpriseInfoAPIVO {
  type: ActualCapitalType
  description: string
  properties: RListEnterpriseInfoAPIVOProperties
}

export interface RListEnterpriseInfoAPIVOProperties {
  code: EnterpriseID
  msg: ActualCapital
  data: FluffyData
  ok: Ok
}

export interface FluffyData {
  type: EnterpriseIDType
  description: string
  items: Items
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

export interface WaybillOrderPageResVO {
  type: ActualCapitalType
  description: string
  properties: WaybillOrderPageResVOProperties
}

export interface WaybillOrderPageResVOProperties {
  id: EnterpriseID
  logisticsNo: ActualCapital
  contractNo: ActualCapital
  waybillNo: ActualCapital
  waybillStatus: ActualCapital
  waybillStatusName: ActualCapital
  carrierName: ActualCapital
  cargoOwnerName: ActualCapital
  materials: ActualCapital
  deliveryInfo: ActualCapital
  receiveInfo: ActualCapital
  driverName: ActualCapital
  vehicleLicenseNo: ActualCapital
  startingPlace: ActualCapital
  destination: ActualCapital
  transportAmount: ActualCapital
  loadCardTime: EnterpriseID
  signTime: EnterpriseID
  remark: ActualCapital
  createTime: EnterpriseID
  createBy: ActualCapital
  kilometres: ActualCapital
}

export interface SecuritySchemes {
  Authorization: Authorization
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

export interface Info {
  title: string
}

type Method = 'get' | 'post' | 'put' | 'delete'

export interface Paths {
  [path: string]: {
    [k in Method]: PostClass
  }
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

export interface LogisticsCargoOwnerChangeState {
  post: PostClass
}

export interface LogisticsDriver {
  delete: PostClass
}

export interface LogisticsDriverExport {
  get: LogisticsDriverExportGet
}

export interface LogisticsDriverExportGet {
  tags: string[]
  operationId: string
  parameters: PurpleParameter[]
  responses: { [key: string]: PurpleResponse }
  security: Security[]
}

export interface PurpleParameter {
  name: string
  in: In
  required: boolean
  schema: ApplicationJSONSchema
}

export interface PurpleResponse {
  description: Description
  content: FluffyContent
}

export interface FluffyContent {
  '*/*': Fluffy
}

export interface Fluffy {
  schema: Schema
}

export interface Schema {
  type?: EnterpriseIDType
  items?: Items
  $ref?: string
}

export interface LogisticsDriverImport {
  post: Post
}

export interface Post {
  tags: string[]
  operationId: string
  parameters: FluffyParameter[]
  responses: { [key: string]: PostResponse }
  security: Security[]
}

export interface FluffyParameter {
  name: string
  in: In
  required: boolean
  schema: Records
}

export interface Server {
  url: string
}

export interface Tag {
  name: string
  description: string
}
