import type { SwaggerDoc } from '@/types/swagger.ts'

export const data: SwaggerDoc = {
  openapi: '3.1.0',
  info: {
    title: 'PigX Swagger API',
  },
  servers: [
    {
      url: 'http://pigx-gateway:9999/transport',
    },
  ],
  tags: [
    {
      name: '第三方系统请求处理微服务',
      description: 'thirdSysRequestController',
    },
    {
      name: '平台端-物流运单表管理',
      description: 'waybillOrder',
    },
    {
      name: '司机信息管理',
      description: 'logisticsDriver',
    },
    {
      name: '货主账号管理表管理',
      description: 'logisticsCargoOwner',
    },
    {
      name: '承运商账号管理表管理',
      description: 'logisticsCarrier',
    },
  ],
  paths: {
    '/thirdSysRequest/remote/retryDeal': {
      post: {
        tags: ['第三方系统请求处理微服务'],
        summary: '重新处理请求数据',
        description: '重新处理请求数据',
        operationId: 'retryDeal',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/RequestLogManageDTO',
              },
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/RRequestLogManageDTO',
                },
              },
            },
          },
          '403': {
            description: 'Forbidden',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
        },
        security: [
          {
            Authorization: [],
          },
        ],
      },
    },
    '/thirdSysRequest/remote/asyncPush': {
      post: {
        tags: ['第三方系统请求处理微服务'],
        summary: '异步调用接口情况处理',
        description: '异步调用接口情况处理',
        operationId: 'asyncPush',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/RequestLogManageDTO',
              },
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/RRequestLogManageDTO',
                },
              },
            },
          },
          '403': {
            description: 'Forbidden',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
        },
        security: [
          {
            Authorization: [],
          },
        ],
      },
    },
    '/logisticsDriver/updateById': {
      post: {
        tags: ['司机信息管理'],
        summary: '修改司机信息',
        description: '修改司机信息',
        operationId: 'updateById',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/LogisticsDriverSaveReqVO',
              },
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
          '403': {
            description: 'Forbidden',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
        },
        security: [
          {
            Authorization: [],
          },
        ],
      },
    },
    '/logisticsDriver/save': {
      post: {
        tags: ['司机信息管理'],
        summary: '新增司机信息',
        description: '新增司机信息',
        operationId: 'save',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/LogisticsDriverSaveReqVO',
              },
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
          '403': {
            description: 'Forbidden',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
        },
        security: [
          {
            Authorization: [],
          },
        ],
      },
    },
    '/logisticsDriver/import': {
      post: {
        tags: ['司机信息管理'],
        operationId: 'importExcel',
        parameters: [
          {
            name: 'logisticsDriverList',
            in: 'query',
            required: true,
            schema: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/LogisticsDriverEntity',
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
          '403': {
            description: 'Forbidden',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
        },
        security: [
          {
            Authorization: [],
          },
        ],
      },
    },
    '/logisticsCarrier/updateById': {
      post: {
        tags: ['承运商账号管理表管理'],
        summary: '编辑承运商账号',
        description: '编辑承运商账号',
        operationId: 'updateById_1',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/LogisticsCarrierSaveReqVO',
              },
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/RLong',
                },
              },
            },
          },
          '403': {
            description: 'Forbidden',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
        },
        security: [
          {
            Authorization: [],
          },
        ],
      },
    },
    '/logisticsCarrier/storage': {
      post: {
        tags: ['承运商账号管理表管理'],
        summary: '暂存承运商账号',
        description: '暂存承运商账号',
        operationId: 'storage',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/LogisticsCarrierSaveReqVO',
              },
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/RLong',
                },
              },
            },
          },
          '403': {
            description: 'Forbidden',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
        },
        security: [
          {
            Authorization: [],
          },
        ],
      },
    },
    '/logisticsCarrier/save': {
      post: {
        tags: ['承运商账号管理表管理'],
        summary: '新增承运商账号',
        description: '新增承运商账号',
        operationId: 'save_1',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/LogisticsCarrierSaveReqVO',
              },
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/RLong',
                },
              },
            },
          },
          '403': {
            description: 'Forbidden',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
        },
        security: [
          {
            Authorization: [],
          },
        ],
      },
    },
    '/logisticsCarrier/delete': {
      post: {
        tags: ['承运商账号管理表管理'],
        summary: '通过id删除承运商账号',
        description: '通过id删除承运商账号',
        operationId: 'removeById',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/IdListVO',
              },
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/RBoolean',
                },
              },
            },
          },
          '403': {
            description: 'Forbidden',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
        },
        security: [
          {
            Authorization: [],
          },
        ],
      },
    },
    '/logisticsCarrier/changeState': {
      post: {
        tags: ['承运商账号管理表管理'],
        summary: '更新承运商账号状态',
        description: '更新承运商账号状态',
        operationId: 'changeState',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/LogisticsCarrierChangeStateReqVO',
              },
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/RBoolean',
                },
              },
            },
          },
          '403': {
            description: 'Forbidden',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
        },
        security: [
          {
            Authorization: [],
          },
        ],
      },
    },
    '/logisticsCargoOwner/updateById': {
      post: {
        tags: ['货主账号管理表管理'],
        summary: '编辑货主账号',
        description: '编辑货主账号',
        operationId: 'updateById_2',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/LogisticsCargoOwnerSaveReqVO',
              },
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/RLong',
                },
              },
            },
          },
          '403': {
            description: 'Forbidden',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
        },
        security: [
          {
            Authorization: [],
          },
        ],
      },
    },
    '/logisticsCargoOwner/storage': {
      post: {
        tags: ['货主账号管理表管理'],
        summary: '暂存货主账号',
        description: '暂存货主账号',
        operationId: 'storage_1',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/LogisticsCargoOwnerSaveReqVO',
              },
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/RLong',
                },
              },
            },
          },
          '403': {
            description: 'Forbidden',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
        },
        security: [
          {
            Authorization: [],
          },
        ],
      },
    },
    '/logisticsCargoOwner/save': {
      post: {
        tags: ['货主账号管理表管理'],
        summary: '新增货主账号',
        description: '新增货主账号',
        operationId: 'save_2',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/LogisticsCargoOwnerSaveReqVO',
              },
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/RLong',
                },
              },
            },
          },
          '403': {
            description: 'Forbidden',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
        },
        security: [
          {
            Authorization: [],
          },
        ],
      },
    },
    '/logisticsCargoOwner/delete': {
      post: {
        tags: ['货主账号管理表管理'],
        summary: '通过id删除货主账号',
        description: '通过id删除货主账号',
        operationId: 'removeById_1',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/IdListVO',
              },
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/RBoolean',
                },
              },
            },
          },
          '403': {
            description: 'Forbidden',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
        },
        security: [
          {
            Authorization: [],
          },
        ],
      },
    },
    '/logisticsCargoOwner/changeState': {
      post: {
        tags: ['货主账号管理表管理'],
        summary: '更新货主账号状态',
        description: '更新货主账号状态',
        operationId: 'changeState_1',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/LogisticsCargoOwnerChangeStateReqVO',
              },
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/RBoolean',
                },
              },
            },
          },
          '403': {
            description: 'Forbidden',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
        },
        security: [
          {
            Authorization: [],
          },
        ],
      },
    },
    '/thirdSysRequest/getEnterpriseInfoList': {
      get: {
        tags: ['第三方系统请求处理微服务'],
        summary: '获取客商资料',
        description: '获取客商资料',
        operationId: 'getEnterpriseInfoList',
        parameters: [
          {
            name: 'enterpriseName',
            in: 'query',
            description: '企业名称',
            required: true,
            schema: {
              type: 'string',
              description: '企业名称',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/RListEnterpriseInfoApiVO',
                },
              },
            },
          },
          '403': {
            description: 'Forbidden',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
        },
        security: [
          {
            Authorization: [],
          },
        ],
      },
    },
    '/logisticsDriver/page': {
      get: {
        tags: ['司机信息管理'],
        summary: '分页查询',
        description: '分页查询',
        operationId: 'getLogisticsDriverPage',
        parameters: [
          {
            name: 'records',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              items: {
                type: 'object',
              },
            },
          },
          {
            name: 'total',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          {
            name: 'size',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          {
            name: 'current',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          {
            name: 'id',
            in: 'query',
            description: '主键',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '主键',
            },
          },
          {
            name: 'userId',
            in: 'query',
            description: '用户ID',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '用户ID',
            },
          },
          {
            name: 'driverName',
            in: 'query',
            description: '司机姓名',
            required: false,
            schema: {
              type: 'string',
              description: '司机姓名',
            },
          },
          {
            name: 'phone',
            in: 'query',
            description: '手机号（登录账号）',
            required: false,
            schema: {
              type: 'string',
              description: '手机号（登录账号）',
            },
          },
          {
            name: 'state',
            in: 'query',
            description: '启用状态： 0-禁用 1-启用',
            required: false,
            schema: {
              type: 'string',
              description: '启用状态： 0-禁用 1-启用',
            },
          },
          {
            name: 'createRecordCompanyId',
            in: 'query',
            description: '制单人企业id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '制单人企业id',
            },
          },
          {
            name: 'createRecordCompany',
            in: 'query',
            description: '制单人企业',
            required: false,
            schema: {
              type: 'string',
              description: '制单人企业',
            },
          },
          {
            name: 'creator',
            in: 'query',
            description: '创建人id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '创建人id',
            },
          },
          {
            name: 'createBy',
            in: 'query',
            description: '创建人',
            required: false,
            schema: {
              type: 'string',
              description: '创建人',
            },
          },
          {
            name: 'createTime',
            in: 'query',
            description: '创建时间',
            required: false,
            schema: {
              type: 'string',
              format: 'date-time',
              description: '创建时间',
            },
          },
          {
            name: 'updater',
            in: 'query',
            description: '更新人id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '更新人id',
            },
          },
          {
            name: 'updateBy',
            in: 'query',
            description: '更新人',
            required: false,
            schema: {
              type: 'string',
              description: '更新人',
            },
          },
          {
            name: 'updateTime',
            in: 'query',
            description: '更新时间',
            required: false,
            schema: {
              type: 'string',
              format: 'date-time',
              description: '更新时间',
            },
          },
          {
            name: 'delFlag',
            in: 'query',
            description: '删除标识（0-正常,1-删除）',
            required: false,
            schema: {
              type: 'string',
              description: '删除标识（0-正常,1-删除）',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
          '403': {
            description: 'Forbidden',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
        },
        security: [
          {
            Authorization: [],
          },
        ],
      },
    },
    '/logisticsDriver/export': {
      get: {
        tags: ['司机信息管理'],
        operationId: 'exportExcel',
        parameters: [
          {
            name: 'logisticsDriver',
            in: 'query',
            required: true,
            schema: {
              $ref: '#/components/schemas/LogisticsDriverEntity',
            },
          },
          {
            name: 'ids',
            in: 'query',
            required: true,
            schema: {
              type: 'array',
              items: {
                type: 'integer',
                format: 'int64',
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/LogisticsDriverEntity',
                  },
                },
              },
            },
          },
          '403': {
            description: 'Forbidden',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
        },
        security: [
          {
            Authorization: [],
          },
        ],
      },
    },
    '/logisticsDriver/details': {
      get: {
        tags: ['司机信息管理'],
        summary: '通过条件查询',
        description: '通过条件查询对象',
        operationId: 'getDetails',
        parameters: [
          {
            name: 'id',
            in: 'query',
            description: '主键',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '主键',
            },
          },
          {
            name: 'userId',
            in: 'query',
            description: '用户ID',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '用户ID',
            },
          },
          {
            name: 'driverName',
            in: 'query',
            description: '司机姓名',
            required: false,
            schema: {
              type: 'string',
              description: '司机姓名',
            },
          },
          {
            name: 'phone',
            in: 'query',
            description: '手机号（登录账号）',
            required: false,
            schema: {
              type: 'string',
              description: '手机号（登录账号）',
            },
          },
          {
            name: 'state',
            in: 'query',
            description: '启用状态： 0-禁用 1-启用',
            required: false,
            schema: {
              type: 'string',
              description: '启用状态： 0-禁用 1-启用',
            },
          },
          {
            name: 'createRecordCompanyId',
            in: 'query',
            description: '制单人企业id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '制单人企业id',
            },
          },
          {
            name: 'createRecordCompany',
            in: 'query',
            description: '制单人企业',
            required: false,
            schema: {
              type: 'string',
              description: '制单人企业',
            },
          },
          {
            name: 'creator',
            in: 'query',
            description: '创建人id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '创建人id',
            },
          },
          {
            name: 'createBy',
            in: 'query',
            description: '创建人',
            required: false,
            schema: {
              type: 'string',
              description: '创建人',
            },
          },
          {
            name: 'createTime',
            in: 'query',
            description: '创建时间',
            required: false,
            schema: {
              type: 'string',
              format: 'date-time',
              description: '创建时间',
            },
          },
          {
            name: 'updater',
            in: 'query',
            description: '更新人id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '更新人id',
            },
          },
          {
            name: 'updateBy',
            in: 'query',
            description: '更新人',
            required: false,
            schema: {
              type: 'string',
              description: '更新人',
            },
          },
          {
            name: 'updateTime',
            in: 'query',
            description: '更新时间',
            required: false,
            schema: {
              type: 'string',
              format: 'date-time',
              description: '更新时间',
            },
          },
          {
            name: 'delFlag',
            in: 'query',
            description: '删除标识（0-正常,1-删除）',
            required: false,
            schema: {
              type: 'string',
              description: '删除标识（0-正常,1-删除）',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
          '403': {
            description: 'Forbidden',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
        },
        security: [
          {
            Authorization: [],
          },
        ],
      },
    },
    '/logisticsCarrier/page': {
      get: {
        tags: ['承运商账号管理表管理'],
        summary: '承运商账号分页查询',
        description: '承运商账号分页查询',
        operationId: 'getLogisticsCarrierPage',
        parameters: [
          {
            name: 'records',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              items: {
                type: 'object',
              },
            },
          },
          {
            name: 'total',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          {
            name: 'size',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          {
            name: 'current',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          {
            name: 'companyName',
            in: 'query',
            description: '企业名称',
            required: false,
            schema: {
              type: 'string',
              description: '企业名称',
            },
          },
          {
            name: 'username',
            in: 'query',
            description: '登录账号',
            required: false,
            schema: {
              type: 'string',
              description: '登录账号',
            },
          },
          {
            name: 'contactPerson',
            in: 'query',
            description: '企业联系人',
            required: false,
            schema: {
              type: 'string',
              description: '企业联系人',
            },
          },
          {
            name: 'contactTelephone',
            in: 'query',
            description: '企业联系人手机号码',
            required: false,
            schema: {
              type: 'string',
              description: '企业联系人手机号码',
            },
          },
          {
            name: 'state',
            in: 'query',
            description: '账号状态，1正常，0禁用',
            required: false,
            schema: {
              type: 'string',
              description: '账号状态，1正常，0禁用',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/RIPageLogisticsCarrierResVO',
                },
              },
            },
          },
          '403': {
            description: 'Forbidden',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
        },
        security: [
          {
            Authorization: [],
          },
        ],
      },
    },
    '/logisticsCarrier/detail': {
      get: {
        tags: ['承运商账号管理表管理'],
        summary: '承运商账号详情查询',
        description: '承运商账号详情查询',
        operationId: 'detail',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/IdVO',
              },
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/RLogisticsCarrierResVO',
                },
              },
            },
          },
          '403': {
            description: 'Forbidden',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
        },
        security: [
          {
            Authorization: [],
          },
        ],
      },
    },
    '/logisticsCargoOwner/page': {
      get: {
        tags: ['货主账号管理表管理'],
        summary: '货主账号分页查询',
        description: '货主账号分页查询',
        operationId: 'getLogisticsCargoOwnerPage',
        parameters: [
          {
            name: 'records',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              items: {
                type: 'object',
              },
            },
          },
          {
            name: 'total',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          {
            name: 'size',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          {
            name: 'current',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          {
            name: 'companyName',
            in: 'query',
            description: '企业名称',
            required: false,
            schema: {
              type: 'string',
              description: '企业名称',
            },
          },
          {
            name: 'username',
            in: 'query',
            description: '登录账号',
            required: false,
            schema: {
              type: 'string',
              description: '登录账号',
            },
          },
          {
            name: 'contactPerson',
            in: 'query',
            description: '企业联系人',
            required: false,
            schema: {
              type: 'string',
              description: '企业联系人',
            },
          },
          {
            name: 'contactTelephone',
            in: 'query',
            description: '企业联系人手机号码',
            required: false,
            schema: {
              type: 'string',
              description: '企业联系人手机号码',
            },
          },
          {
            name: 'state',
            in: 'query',
            description: '账号状态，1正常，0禁用',
            required: false,
            schema: {
              type: 'string',
              description: '账号状态，1正常，0禁用',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/RIPageLogisticsCargoOwnerResVO',
                },
              },
            },
          },
          '403': {
            description: 'Forbidden',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
        },
        security: [
          {
            Authorization: [],
          },
        ],
      },
    },
    '/logisticsCargoOwner/detail': {
      get: {
        tags: ['货主账号管理表管理'],
        summary: '货主账号详情查询',
        description: '货主账号详情查询',
        operationId: 'detail_1',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/IdVO',
              },
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/RLogisticsCargoOwnerResVO',
                },
              },
            },
          },
          '403': {
            description: 'Forbidden',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
        },
        security: [
          {
            Authorization: [],
          },
        ],
      },
    },
    '/admin/waybill/order/page': {
      get: {
        tags: ['平台端-物流运单表管理'],
        summary: '分页查询',
        description: '分页查询',
        operationId: 'adminPageQuery',
        parameters: [
          {
            name: 'records',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              items: {
                type: 'object',
              },
            },
          },
          {
            name: 'total',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          {
            name: 'size',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          {
            name: 'current',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          {
            name: 'createBy',
            in: 'query',
            description: '制单人',
            required: false,
            schema: {
              type: 'string',
              description: '制单人',
            },
          },
          {
            name: 'waybillNo',
            in: 'query',
            description: '运单编号',
            required: false,
            schema: {
              type: 'string',
              description: '运单编号',
            },
          },
          {
            name: 'logisticsNo',
            in: 'query',
            description: '物流单编号',
            required: false,
            schema: {
              type: 'string',
              description: '物流单编号',
            },
          },
          {
            name: 'waybillStatus',
            in: 'query',
            description: '运单状态：分配司机 到达提货点 已装货 到达卸货点 已签收 已完成',
            required: false,
            schema: {
              type: 'string',
              description: '运单状态：分配司机 到达提货点 已装货 到达卸货点 已签收 已完成',
            },
          },
          {
            name: 'carrierName',
            in: 'query',
            description: '承运商名称',
            required: false,
            schema: {
              type: 'string',
              description: '承运商名称',
            },
          },
          {
            name: 'cargoOwnerName',
            in: 'query',
            description: '货主名称',
            required: false,
            schema: {
              type: 'string',
              description: '货主名称',
            },
          },
          {
            name: 'projectNo',
            in: 'query',
            description: '项目编号',
            required: false,
            schema: {
              type: 'string',
              description: '项目编号',
            },
          },
          {
            name: 'createTimeStart',
            in: 'query',
            description: '制单日期-开始',
            required: false,
            schema: {
              type: 'string',
              format: 'date-time',
              description: '制单日期-开始',
            },
          },
          {
            name: 'createTimeEnd',
            in: 'query',
            description: '制单日期-结束',
            required: false,
            schema: {
              type: 'string',
              format: 'date-time',
              description: '制单日期-结束',
            },
          },
          {
            name: 'waybillStatusList',
            in: 'query',
            description: '微信搜索-运单状态：分配司机 到达提货点 已装货 到达卸货点 已签收 已完成',
            required: false,
            schema: {
              type: 'array',
              description: '微信搜索-运单状态：分配司机 到达提货点 已装货 到达卸货点 已签收 已完成',
              items: {
                type: 'string',
                description:
                  '微信搜索-运单状态：分配司机 到达提货点 已装货 到达卸货点 已签收 已完成',
              },
            },
          },
          {
            name: 'materialName',
            in: 'query',
            description: '微信搜索-物料名称',
            required: false,
            schema: {
              type: 'string',
              description: '微信搜索-物料名称',
            },
          },
          {
            name: 'updateType',
            in: 'query',
            description: '业务交接标识',
            required: false,
            schema: {
              type: 'boolean',
              description: '业务交接标识',
            },
          },
          {
            name: 'currentUserId',
            in: 'query',
            description: '当前用户id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '当前用户id',
            },
          },
          {
            name: 'currentUserDeptId',
            in: 'query',
            description: '当前用户部门id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '当前用户部门id',
            },
          },
          {
            name: 'currentUserCompanyId',
            in: 'query',
            description: '当前用户公司id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '当前用户公司id',
            },
          },
          {
            name: 'carrierId',
            in: 'query',
            description: '承运商id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '承运商id',
            },
          },
          {
            name: 'driverId',
            in: 'query',
            description: '司机id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '司机id',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/RIPageWaybillOrderPageResVO',
                },
              },
            },
          },
          '403': {
            description: 'Forbidden',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
        },
        security: [
          {
            Authorization: [],
          },
        ],
      },
    },
    '/logisticsDriver': {
      delete: {
        tags: ['司机信息管理'],
        summary: '通过id删除司机信息',
        description: '通过id删除司机信息',
        operationId: 'removeById_2',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  type: 'integer',
                  format: 'int64',
                },
              },
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
          '403': {
            description: 'Forbidden',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/R',
                },
              },
            },
          },
        },
        security: [
          {
            Authorization: [],
          },
        ],
      },
    },
  },
  components: {
    schemas: {
      R: {
        type: 'object',
        description: '响应信息主体',
        properties: {
          code: {
            type: 'integer',
            format: 'int32',
            description: '返回标记：成功标记=0，失败标记=1',
          },
          msg: {
            type: 'string',
            description: '返回信息',
          },
          data: {
            type: 'object',
            description: '数据',
          },
          ok: {
            type: 'boolean',
            readOnly: true,
          },
        },
      },
      RequestLogManageDTO: {
        type: 'object',
        description: '推送数据管理表',
        properties: {
          createRecordDeptId: {
            type: 'integer',
            format: 'int64',
            description: '制单人部门id',
          },
          createRecordDept: {
            type: 'string',
            description: '制单人部门',
          },
          createRecordCompanyId: {
            type: 'integer',
            format: 'int64',
            description: '制单人公司id',
          },
          createRecordCompany: {
            type: 'string',
            description: '制单人公司',
          },
          userId: {
            type: 'integer',
            format: 'int64',
            description: '制单人id',
          },
          user: {
            type: 'string',
            description: '制单人',
          },
          sysTypeEnum: {
            type: 'string',
            description: '所属模块',
            enum: ['TRANSPORT'],
          },
          bizId: {
            type: 'integer',
            format: 'int64',
            description: '单据id',
          },
          bizName: {
            type: 'string',
            description: '单据名称',
          },
          bizType: {
            type: 'string',
            description: '单据类型',
            enum: ['COMPANY_SAVE'],
          },
          bizNo: {
            type: 'string',
            description: '单据编号',
          },
          isVisit: {
            type: 'boolean',
            description: '是否为我方调用,0:不是;1:是',
          },
          requestSys: {
            type: 'string',
            description: '第三方系统',
          },
          requestApiType: {
            type: 'string',
            description: '调用接口类型',
            enum: ['TRADE_SYS_ENTERPRISE_DETAIL'],
          },
          requestUrl: {
            type: 'string',
            description: '请求路径',
          },
          requestMethod: {
            type: 'string',
            description: '请求方法',
          },
          requestHeader: {
            type: 'string',
            description: '请求头部',
          },
          requestParams: {
            type: 'string',
            description: '请求参数',
          },
          requestResultType: {
            type: 'string',
            description: '推送状态',
            enum: ['SUCCESS', 'FAIL', 'WAIT', 'SLEEP'],
          },
          requestResult: {
            type: 'string',
            description: '请求结果',
          },
          requestTime: {
            type: 'string',
            format: 'date-time',
            description: '推送时间',
          },
          expand: {
            type: 'object',
            additionalProperties: {
              type: 'string',
            },
            description: '说明',
          },
          requestLogManageId: {
            type: 'integer',
            format: 'int64',
            description: '请求调用管理表id',
          },
          remoteSaveType: {
            type: 'string',
            description: '第三方请求远程保存类型',
            enum: ['MANAGE', 'ONLY_MANAGE', 'ONLY_LOG'],
          },
          errorMsg: {
            type: 'string',
            description: '错误信息',
          },
        },
      },
      RRequestLogManageDTO: {
        type: 'object',
        description: '响应信息主体',
        properties: {
          code: {
            type: 'integer',
            format: 'int32',
            description: '返回标记：成功标记=0，失败标记=1',
          },
          msg: {
            type: 'string',
            description: '返回信息',
          },
          data: {
            $ref: '#/components/schemas/RequestLogManageDTO',
            description: '数据',
          },
          ok: {
            type: 'boolean',
            readOnly: true,
          },
        },
      },
      LogisticsCarrierDriverVehicleVO: {
        type: 'object',
        description: '承运商-司机-交通工具关联数据',
        properties: {
          driverId: {
            type: 'integer',
            format: 'int64',
            description: '司机id',
          },
          driverName: {
            type: 'string',
            description: '司机姓名',
          },
          carrierId: {
            type: 'integer',
            format: 'int64',
            description: '承运商id',
          },
          carrierName: {
            type: 'string',
            description: '承运商名称',
          },
          vehicleId: {
            type: 'integer',
            format: 'int64',
            description: '交通id',
          },
          vehicleLicense: {
            type: 'string',
            description: '交通工具牌照',
          },
        },
        required: ['carrierId', 'vehicleId'],
      },
      LogisticsDriverSaveReqVO: {
        type: 'object',
        description: '司机管理保存请求参数',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
            description: '主键',
          },
          driverName: {
            type: 'string',
            description: '司机姓名',
          },
          phone: {
            type: 'string',
            description: '手机号（登录账号）',
            pattern: '^1[3-9]\\d{9}$',
          },
          password: {
            type: 'string',
            description: '登录密码',
          },
          carrierVehicleList: {
            type: 'array',
            description: '承运商司机关联信息',
            items: {
              $ref: '#/components/schemas/LogisticsCarrierDriverVehicleVO',
            },
          },
        },
        required: ['driverName', 'id', 'password', 'phone'],
      },
      LogisticsDriverEntity: {
        type: 'object',
        description: '司机信息',
        properties: {
          createRecordCompanyId: {
            type: 'integer',
            format: 'int64',
            description: '制单人企业id',
          },
          createRecordCompany: {
            type: 'string',
            description: '制单人企业',
          },
          creator: {
            type: 'integer',
            format: 'int64',
            description: '创建人id',
          },
          createBy: {
            type: 'string',
            description: '创建人',
          },
          createTime: {
            type: 'string',
            format: 'date-time',
            description: '创建时间',
          },
          updater: {
            type: 'integer',
            format: 'int64',
            description: '更新人id',
          },
          updateBy: {
            type: 'string',
            description: '更新人',
          },
          updateTime: {
            type: 'string',
            format: 'date-time',
            description: '更新时间',
          },
          delFlag: {
            type: 'string',
            description: '删除标识（0-正常,1-删除）',
          },
          id: {
            type: 'integer',
            format: 'int64',
            description: '主键',
          },
          userId: {
            type: 'integer',
            format: 'int64',
            description: '用户ID',
          },
          driverName: {
            type: 'string',
            description: '司机姓名',
          },
          phone: {
            type: 'string',
            description: '手机号（登录账号）',
          },
          state: {
            type: 'string',
            description: '启用状态： 0-禁用 1-启用',
          },
        },
      },
      LogisticsCarrierSaveReqVO: {
        type: 'object',
        description: '承运商账号保存请求参数',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
            description: '承运商ID',
          },
          companyId: {
            type: 'integer',
            format: 'int64',
            description: '企业id',
          },
        },
        required: ['companyId', 'id'],
      },
      RLong: {
        type: 'object',
        description: '响应信息主体',
        properties: {
          code: {
            type: 'integer',
            format: 'int32',
            description: '返回标记：成功标记=0，失败标记=1',
          },
          msg: {
            type: 'string',
            description: '返回信息',
          },
          data: {
            type: 'integer',
            format: 'int64',
            description: '数据',
          },
          ok: {
            type: 'boolean',
            readOnly: true,
          },
        },
      },
      IdListVO: {
        type: 'object',
        description: 'id集合VO',
        properties: {
          ids: {
            type: 'array',
            items: {
              type: 'integer',
              format: 'int64',
            },
          },
        },
        required: ['ids'],
      },
      RBoolean: {
        type: 'object',
        description: '响应信息主体',
        properties: {
          code: {
            type: 'integer',
            format: 'int32',
            description: '返回标记：成功标记=0，失败标记=1',
          },
          msg: {
            type: 'string',
            description: '返回信息',
          },
          data: {
            type: 'boolean',
            description: '数据',
          },
          ok: {
            type: 'boolean',
            readOnly: true,
          },
        },
      },
      LogisticsCarrierChangeStateReqVO: {
        type: 'object',
        description: '承运商账号状态更新请求参数',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
            description: '承运商ID',
          },
          state: {
            type: 'string',
            description: '账号状态，1正常，0禁用，2暂存',
          },
        },
        required: ['id', 'state'],
      },
      LogisticsCargoOwnerSaveReqVO: {
        type: 'object',
        description: '货主账号保存请求参数',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
            description: '货主ID',
          },
          companyId: {
            type: 'integer',
            format: 'int64',
            description: '企业id',
          },
        },
        required: ['companyId', 'id'],
      },
      LogisticsCargoOwnerChangeStateReqVO: {
        type: 'object',
        description: '货主账号状态更新请求参数',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
            description: '货主ID',
          },
          state: {
            type: 'string',
            description: '账号状态，1正常，0禁用，2暂存',
          },
        },
        required: ['id', 'state'],
      },
      EnterpriseInfoApiVO: {
        type: 'object',
        description: '广贸系统客商信息对象',
        properties: {
          enterpriseId: {
            type: 'integer',
            format: 'int64',
            description: '客商主数据ID',
          },
          enterpriseName: {
            type: 'string',
            description: '企业名称',
          },
          realAddress: {
            type: 'string',
            description: '实际地址',
          },
          contactPerson: {
            type: 'string',
            description: '联系人',
          },
          contactTelephone: {
            type: 'string',
            description: '联系人电话',
          },
          legalPerson: {
            type: 'string',
            description: '法定代表人',
          },
          creditCode: {
            type: 'string',
            description: '统一社会信用代码',
          },
          email: {
            type: 'string',
            description: 'Email',
          },
          telephone: {
            type: 'string',
            description: '电话',
          },
          subscribedCapital: {
            type: 'number',
            description: '注册资本',
          },
          actualCapital: {
            type: 'number',
            description: '实缴资本',
          },
          businessScope: {
            type: 'string',
            description: '经营范围',
          },
        },
      },
      RListEnterpriseInfoApiVO: {
        type: 'object',
        description: '响应信息主体',
        properties: {
          code: {
            type: 'integer',
            format: 'int32',
            description: '返回标记：成功标记=0，失败标记=1',
          },
          msg: {
            type: 'string',
            description: '返回信息',
          },
          data: {
            type: 'array',
            description: '数据',
            items: {
              $ref: '#/components/schemas/EnterpriseInfoApiVO',
            },
          },
          ok: {
            type: 'boolean',
            readOnly: true,
          },
        },
      },
      IPageLogisticsCarrierResVO: {
        type: 'object',
        properties: {
          size: {
            type: 'integer',
            format: 'int64',
          },
          records: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/LogisticsCarrierResVO',
            },
          },
          current: {
            type: 'integer',
            format: 'int64',
          },
          total: {
            type: 'integer',
            format: 'int64',
          },
          pages: {
            type: 'integer',
            format: 'int64',
            deprecated: true,
          },
        },
      },
      LogisticsCarrierResVO: {
        type: 'object',
        description: '承运商账号管理表',
        properties: {
          createRecordCompanyId: {
            type: 'integer',
            format: 'int64',
            description: '制单人企业id',
          },
          createRecordCompany: {
            type: 'string',
            description: '制单人企业',
          },
          creator: {
            type: 'integer',
            format: 'int64',
            description: '创建人id',
          },
          createBy: {
            type: 'string',
            description: '创建人',
          },
          createTime: {
            type: 'string',
            format: 'date-time',
            description: '创建时间',
          },
          updater: {
            type: 'integer',
            format: 'int64',
            description: '更新人id',
          },
          updateBy: {
            type: 'string',
            description: '更新人',
          },
          updateTime: {
            type: 'string',
            format: 'date-time',
            description: '更新时间',
          },
          delFlag: {
            type: 'string',
            description: '删除标识（0-正常,1-删除）',
          },
          id: {
            type: 'integer',
            format: 'int64',
            description: '承运商ID',
          },
          companyId: {
            type: 'integer',
            format: 'int64',
            description: '所属企业id',
          },
          companyName: {
            type: 'string',
            description: '企业名称',
          },
          username: {
            type: 'string',
            description: '登录账号',
          },
          contactPerson: {
            type: 'string',
            description: '企业联系人',
          },
          contactTelephone: {
            type: 'string',
            description: '企业联系人手机号码',
          },
          state: {
            type: 'string',
            description: '启用状态，1启用，0禁用',
          },
        },
      },
      RIPageLogisticsCarrierResVO: {
        type: 'object',
        description: '响应信息主体',
        properties: {
          code: {
            type: 'integer',
            format: 'int32',
            description: '返回标记：成功标记=0，失败标记=1',
          },
          msg: {
            type: 'string',
            description: '返回信息',
          },
          data: {
            $ref: '#/components/schemas/IPageLogisticsCarrierResVO',
            description: '数据',
          },
          ok: {
            type: 'boolean',
            readOnly: true,
          },
        },
      },
      IdVO: {
        type: 'object',
        description: 'Id类',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
            description: 'id值',
          },
        },
        required: ['id'],
      },
      RLogisticsCarrierResVO: {
        type: 'object',
        description: '响应信息主体',
        properties: {
          code: {
            type: 'integer',
            format: 'int32',
            description: '返回标记：成功标记=0，失败标记=1',
          },
          msg: {
            type: 'string',
            description: '返回信息',
          },
          data: {
            $ref: '#/components/schemas/LogisticsCarrierResVO',
            description: '数据',
          },
          ok: {
            type: 'boolean',
            readOnly: true,
          },
        },
      },
      IPageLogisticsCargoOwnerResVO: {
        type: 'object',
        properties: {
          size: {
            type: 'integer',
            format: 'int64',
          },
          records: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/LogisticsCargoOwnerResVO',
            },
          },
          current: {
            type: 'integer',
            format: 'int64',
          },
          total: {
            type: 'integer',
            format: 'int64',
          },
          pages: {
            type: 'integer',
            format: 'int64',
            deprecated: true,
          },
        },
      },
      LogisticsCargoOwnerResVO: {
        type: 'object',
        description: '货主账号管理表',
        properties: {
          createRecordCompanyId: {
            type: 'integer',
            format: 'int64',
            description: '制单人企业id',
          },
          createRecordCompany: {
            type: 'string',
            description: '制单人企业',
          },
          creator: {
            type: 'integer',
            format: 'int64',
            description: '创建人id',
          },
          createBy: {
            type: 'string',
            description: '创建人',
          },
          createTime: {
            type: 'string',
            format: 'date-time',
            description: '创建时间',
          },
          updater: {
            type: 'integer',
            format: 'int64',
            description: '更新人id',
          },
          updateBy: {
            type: 'string',
            description: '更新人',
          },
          updateTime: {
            type: 'string',
            format: 'date-time',
            description: '更新时间',
          },
          delFlag: {
            type: 'string',
            description: '删除标识（0-正常,1-删除）',
          },
          id: {
            type: 'integer',
            format: 'int64',
            description: '货主ID',
          },
          companyId: {
            type: 'integer',
            format: 'int64',
            description: '所属企业id',
          },
          companyName: {
            type: 'string',
            description: '企业名称',
          },
          username: {
            type: 'string',
            description: '登录账号',
          },
          contactPerson: {
            type: 'string',
            description: '企业联系人',
          },
          contactTelephone: {
            type: 'string',
            description: '企业联系人手机号码',
          },
          state: {
            type: 'string',
            description: '账号状态，1正常，0禁用，2暂存',
          },
        },
      },
      RIPageLogisticsCargoOwnerResVO: {
        type: 'object',
        description: '响应信息主体',
        properties: {
          code: {
            type: 'integer',
            format: 'int32',
            description: '返回标记：成功标记=0，失败标记=1',
          },
          msg: {
            type: 'string',
            description: '返回信息',
          },
          data: {
            $ref: '#/components/schemas/IPageLogisticsCargoOwnerResVO',
            description: '数据',
          },
          ok: {
            type: 'boolean',
            readOnly: true,
          },
        },
      },
      RLogisticsCargoOwnerResVO: {
        type: 'object',
        description: '响应信息主体',
        properties: {
          code: {
            type: 'integer',
            format: 'int32',
            description: '返回标记：成功标记=0，失败标记=1',
          },
          msg: {
            type: 'string',
            description: '返回信息',
          },
          data: {
            $ref: '#/components/schemas/LogisticsCargoOwnerResVO',
            description: '数据',
          },
          ok: {
            type: 'boolean',
            readOnly: true,
          },
        },
      },
      IPageWaybillOrderPageResVO: {
        type: 'object',
        properties: {
          size: {
            type: 'integer',
            format: 'int64',
          },
          records: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/WaybillOrderPageResVO',
            },
          },
          current: {
            type: 'integer',
            format: 'int64',
          },
          total: {
            type: 'integer',
            format: 'int64',
          },
          pages: {
            type: 'integer',
            format: 'int64',
            deprecated: true,
          },
        },
      },
      RIPageWaybillOrderPageResVO: {
        type: 'object',
        description: '响应信息主体',
        properties: {
          code: {
            type: 'integer',
            format: 'int32',
            description: '返回标记：成功标记=0，失败标记=1',
          },
          msg: {
            type: 'string',
            description: '返回信息',
          },
          data: {
            $ref: '#/components/schemas/IPageWaybillOrderPageResVO',
            description: '数据',
          },
          ok: {
            type: 'boolean',
            readOnly: true,
          },
        },
      },
      WaybillOrderPageResVO: {
        type: 'object',
        description: '派车进度分页',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
            description: '主键',
          },
          logisticsNo: {
            type: 'string',
            description: '物流订单编号',
          },
          contractNo: {
            type: 'string',
            description: '合同编码',
          },
          waybillNo: {
            type: 'string',
            description: '运单编号',
          },
          waybillStatus: {
            type: 'string',
            description: '运单状态：分配司机 到达提货点 已装货 到达卸货点 已签收 已完成',
          },
          waybillStatusName: {
            type: 'string',
            description: '运单状态-名称',
          },
          carrierName: {
            type: 'string',
            description: '承运商名称',
          },
          cargoOwnerName: {
            type: 'string',
            description: '货主名称',
          },
          materials: {
            type: 'string',
            description: '物料名称',
          },
          deliveryInfo: {
            type: 'string',
            description: '提货信息',
          },
          receiveInfo: {
            type: 'string',
            description: '收货信息',
          },
          driverName: {
            type: 'string',
            description: '司机姓名',
          },
          vehicleLicenseNo: {
            type: 'string',
            description: '交通工具牌照编号',
          },
          startingPlace: {
            type: 'string',
            description: '起始地',
          },
          destination: {
            type: 'string',
            description: '目的地',
          },
          transportAmount: {
            type: 'number',
            description: '运单运费（元）',
          },
          loadCardTime: {
            type: 'string',
            format: 'date-time',
            description: '装车时间',
          },
          signTime: {
            type: 'string',
            format: 'date-time',
            description: '签收时间',
          },
          remark: {
            type: 'string',
            description: '备注',
          },
          createTime: {
            type: 'string',
            format: 'date-time',
            description: '制单日期',
          },
          createBy: {
            type: 'string',
            description: '制单人',
          },
          kilometres: {
            type: 'number',
            description: '公里数',
          },
        },
      },
    },
    securitySchemes: {
      Authorization: {
        type: 'oauth2',
        flows: {
          password: {
            tokenUrl: 'http://pigx-gateway:9999/auth/oauth2/token',
            scopes: {
              server: 'server',
            },
          },
        },
      },
    },
  },
}
