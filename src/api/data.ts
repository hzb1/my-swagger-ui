import type { SwaggerDoc } from '@/api/data.type.ts'

export const data: SwaggerDoc = {
  openapi: '3.1.0',
  info: {
    title: 'PigX Swagger API',
  },
  servers: [
    {
      url: 'http://pigx-gateway:9999/admin',
    },
  ],
  tags: [
    {
      name: '企业管理表管理',
      description: 'company',
    },
    {
      name: '部门管理模块',
      description: 'dept',
    },
    {
      name: '站内信息管理',
      description: 'sysMessage',
    },
    {
      name: '动态路由管理模块',
      description: 'route',
    },
    {
      name: '公共参数配置',
      description: 'param',
    },
    {
      name: '客户端管理模块',
      description: 'client',
    },
    {
      name: '字典管理模块',
      description: 'dict',
    },
    {
      name: '系统表-国际化管理',
      description: 'i18n',
    },
    {
      name: '三方账号管理模块',
      description: 'social',
    },
    {
      name: '岗位信息表管理',
      description: 'post',
    },
    {
      name: '企业微服务管理表-微服务调用接口',
      description: 'companyClient',
    },
    {
      name: '日志管理模块',
      description: 'log',
    },
    {
      name: '敏感词管理',
      description: 'sysSensitiveWord',
    },
    {
      name: '行政区划管理',
      description: 'sysArea',
    },
    {
      name: '系统监控',
      description: 'system',
    },
    {
      name: '推送数据管理',
      description: 'requestLogManage',
    },
    {
      name: '租户管理',
      description: 'tenant',
    },
    {
      name: '菜单管理模块',
      description: 'menu',
    },
    {
      name: '文件管理',
      description: 'sys-file',
    },
    {
      name: '角色管理模块-微服务调用接口',
      description: 'SysRoleClientController',
    },
    {
      name: '审计记录表管理',
      description: 'audit',
    },
    {
      name: '用户管理-微服务调用接口',
      description: 'sysUserClient',
    },
    {
      name: '角色管理模块',
      description: 'role',
    },
    {
      name: '系统配置管理',
      description: 'sysSystemConfig',
    },
    {
      name: '令牌管理模块',
      description: 'token',
    },
    {
      name: '日程管理',
      description: 'schedule',
    },
    {
      name: '开放互联',
      description: 'connect',
    },
    {
      name: '用户管理模块',
      description: 'user',
    },
  ],
  paths: {
    '/user': {
      put: {
        tags: ['用户管理模块'],
        operationId: 'updateUser',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UserDTO',
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
      post: {
        tags: ['用户管理模块'],
        operationId: 'user',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UserDTO',
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
      delete: {
        tags: ['用户管理模块'],
        summary: '删除用户',
        description: '根据ID删除用户',
        operationId: 'userDel',
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
    '/user/personal/password': {
      put: {
        tags: ['用户管理模块'],
        operationId: 'updateUserPassword',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UserDTO',
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
    '/user/personal/edit': {
      put: {
        tags: ['用户管理模块'],
        operationId: 'updateUserInfo',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UserDTO',
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
    '/user/lock/{username}': {
      put: {
        tags: ['用户管理模块'],
        operationId: 'lockUser',
        parameters: [
          {
            name: 'username',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
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
    '/tenant': {
      put: {
        tags: ['租户管理'],
        operationId: 'updateById',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysTenant',
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
      post: {
        tags: ['租户管理'],
        operationId: 'save',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysTenant',
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
      delete: {
        tags: ['租户管理'],
        operationId: 'removeById',
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
    '/tenant/personal/update': {
      put: {
        tags: ['租户管理'],
        operationId: 'updateUserTenant',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UserDTO',
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
    '/system-config': {
      put: {
        tags: ['系统配置管理'],
        summary: '修改系统配置',
        description: '修改系统配置',
        operationId: 'updateById_1',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysSystemConfigEntity',
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
      post: {
        tags: ['系统配置管理'],
        summary: '新增系统配置',
        description: '新增系统配置',
        operationId: 'save_1',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysSystemConfigEntity',
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
      delete: {
        tags: ['系统配置管理'],
        summary: '通过id删除系统配置',
        description: '通过id删除系统配置',
        operationId: 'removeById_1',
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
    '/sysSensitiveWord': {
      put: {
        tags: ['敏感词管理'],
        summary: '修改敏感词',
        description: '修改敏感词',
        operationId: 'updateById_2',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysSensitiveWordEntity',
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
      post: {
        tags: ['敏感词管理'],
        summary: '新增敏感词',
        description: '新增敏感词',
        operationId: 'save_2',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysSensitiveWordEntity',
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
      delete: {
        tags: ['敏感词管理'],
        summary: '通过id删除敏感词',
        description: '通过id删除敏感词',
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
    '/sysMessage': {
      put: {
        tags: ['站内信息管理'],
        summary: '修改站内信息',
        description: '修改站内信息',
        operationId: 'updateById_3',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysMessageVO',
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
      post: {
        tags: ['站内信息管理'],
        summary: '新增站内信息',
        description: '新增站内信息',
        operationId: 'save_3',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysMessageVO',
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
      delete: {
        tags: ['站内信息管理'],
        summary: '通过id删除站内信息',
        description: '通过id删除站内信息',
        operationId: 'removeById_3',
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
    '/sysArea': {
      put: {
        tags: ['行政区划管理'],
        summary: '修改行政区划',
        description: '修改行政区划',
        operationId: 'updateById_4',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysAreaEntity',
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
      post: {
        tags: ['行政区划管理'],
        summary: '新增行政区划',
        description: '新增行政区划',
        operationId: 'save_4',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysAreaEntity',
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
      delete: {
        tags: ['行政区划管理'],
        summary: '通过id删除行政区划',
        description: '通过id删除行政区划',
        operationId: 'removeById_4',
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
    '/sys-file/rename': {
      put: {
        tags: ['文件管理'],
        operationId: 'rename',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysFile',
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
    '/sys-file/group/update': {
      put: {
        tags: ['文件管理'],
        operationId: 'updateGroup',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysFileGroup',
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
    '/sys-file/group/move': {
      put: {
        tags: ['文件管理'],
        operationId: 'moveFileGroup',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysFileGroupDTO',
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
    '/social': {
      put: {
        tags: ['三方账号管理模块'],
        operationId: 'updateById_5',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysSocialDetails',
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
      post: {
        tags: ['三方账号管理模块'],
        operationId: 'save_5',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysSocialDetails',
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
      delete: {
        tags: ['三方账号管理模块'],
        operationId: 'removeById_5',
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
    '/schedule': {
      put: {
        tags: ['日程管理'],
        summary: '修改日程',
        description: '修改日程',
        operationId: 'updateById_6',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysScheduleEntity',
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
      post: {
        tags: ['日程管理'],
        summary: '新增日程',
        description: '新增日程',
        operationId: 'save_6',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysScheduleEntity',
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
      delete: {
        tags: ['日程管理'],
        summary: '通过id删除日程',
        description: '通过id删除日程',
        operationId: 'removeById_6',
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
    '/role': {
      put: {
        tags: ['角色管理模块'],
        operationId: 'update',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysRole',
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
      post: {
        tags: ['角色管理模块'],
        operationId: 'save_7',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysRole',
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
      delete: {
        tags: ['角色管理模块'],
        operationId: 'removeById_7',
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
    '/role/menu': {
      put: {
        tags: ['角色管理模块'],
        operationId: 'saveRoleMenus',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/RoleMenuVO',
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
    '/post': {
      put: {
        tags: ['岗位信息表管理'],
        summary: '修改岗位信息表',
        description: '修改岗位信息表',
        operationId: 'updateById_7',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysPost',
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
      post: {
        tags: ['岗位信息表管理'],
        summary: '新增岗位信息表',
        description: '新增岗位信息表',
        operationId: 'save_8',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysPost',
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
      delete: {
        tags: ['岗位信息表管理'],
        summary: '通过id删除岗位信息表',
        description: '通过id删除岗位信息表',
        operationId: 'removeById_8',
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
    '/param': {
      put: {
        tags: ['公共参数配置'],
        summary: '修改公共参数',
        description: '修改公共参数',
        operationId: 'updateById_8',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysPublicParam',
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
      post: {
        tags: ['公共参数配置'],
        summary: '新增公共参数',
        description: '新增公共参数',
        operationId: 'save_9',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysPublicParam',
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
      delete: {
        tags: ['公共参数配置'],
        summary: '删除公共参数',
        description: '删除公共参数',
        operationId: 'removeById_9',
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
    '/param/sync': {
      put: {
        tags: ['公共参数配置'],
        operationId: 'sync',
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
    '/menu': {
      get: {
        tags: ['菜单管理模块'],
        operationId: 'getUserMenu',
        parameters: [
          {
            name: 'type',
            in: 'query',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'parentId',
            in: 'query',
            required: true,
            schema: {
              type: 'integer',
              format: 'int64',
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
      put: {
        tags: ['菜单管理模块'],
        operationId: 'update_1',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysMenu',
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
      post: {
        tags: ['菜单管理模块'],
        operationId: 'save_10',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysMenu',
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
    '/i18n': {
      put: {
        tags: ['系统表-国际化管理'],
        summary: '修改系统表-国际化',
        description: '修改系统表-国际化',
        operationId: 'updateById_9',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysI18nEntity',
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
      post: {
        tags: ['系统表-国际化管理'],
        summary: '新增系统表-国际化',
        description: '新增系统表-国际化',
        operationId: 'save_11',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysI18nEntity',
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
      delete: {
        tags: ['系统表-国际化管理'],
        summary: '通过id删除系统表-国际化',
        description: '通过id删除系统表-国际化',
        operationId: 'removeById_10',
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
    '/i18n/sync': {
      put: {
        tags: ['系统表-国际化管理'],
        operationId: 'sync_1',
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
    '/dict': {
      put: {
        tags: ['字典管理模块'],
        operationId: 'updateById_10',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysDict',
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
      post: {
        tags: ['字典管理模块'],
        operationId: 'save_12',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysDict',
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
      delete: {
        tags: ['字典管理模块'],
        operationId: 'removeById_11',
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
    '/dict/sync': {
      put: {
        tags: ['字典管理模块'],
        operationId: 'sync_2',
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
    '/dict/item': {
      put: {
        tags: ['字典管理模块'],
        operationId: 'updateById_11',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysDictItem',
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
      post: {
        tags: ['字典管理模块'],
        operationId: 'save_13',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysDictItem',
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
    '/dept': {
      put: {
        tags: ['部门管理模块'],
        operationId: 'update_2',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysDept',
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
      post: {
        tags: ['部门管理模块'],
        operationId: 'save_14',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysDept',
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
    '/client': {
      put: {
        tags: ['客户端管理模块'],
        operationId: 'update_3',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysOauthClientDetailsDTO',
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
      post: {
        tags: ['客户端管理模块'],
        operationId: 'add',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysOauthClientDetailsDTO',
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
      delete: {
        tags: ['客户端管理模块'],
        operationId: 'removeById_12',
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
    '/client/sync': {
      put: {
        tags: ['客户端管理模块'],
        operationId: 'sync_3',
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
    '/user/unbinding': {
      post: {
        tags: ['用户管理模块'],
        operationId: 'unbinding',
        parameters: [
          {
            name: 'type',
            in: 'query',
            required: true,
            schema: {
              type: 'string',
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
    '/user/infoBySearch': {
      post: {
        tags: ['用户管理模块'],
        operationId: 'infoBySearch',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UserDTO',
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
                  $ref: '#/components/schemas/RUserInfo',
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
    '/user/import': {
      post: {
        tags: ['用户管理模块'],
        operationId: 'importUser',
        parameters: [
          {
            name: 'excelVOList',
            in: 'query',
            required: true,
            schema: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/UserExcelVO',
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
    '/user/check': {
      post: {
        tags: ['用户管理模块'],
        operationId: 'check',
        parameters: [
          {
            name: 'password',
            in: 'query',
            required: true,
            schema: {
              type: 'string',
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
    '/tenant/user-tenant': {
      get: {
        tags: ['租户管理'],
        operationId: 'getUserTenant',
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
      post: {
        tags: ['租户管理'],
        operationId: 'addUserTenant',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysTenantUserDTO',
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
    '/sysSensitiveWord/match': {
      post: {
        tags: ['敏感词管理'],
        summary: '查询敏感词',
        description: '查询敏感词',
        operationId: 'match',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysSensitiveWordEntity',
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
    '/sysMessage/send': {
      post: {
        tags: ['站内信息管理'],
        summary: '发送站内信息',
        description: '发送站内信息',
        operationId: 'send',
        parameters: [
          {
            name: 'id',
            in: 'query',
            required: true,
            schema: {
              type: 'integer',
              format: 'int64',
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
    '/sysMessage/send/sms': {
      post: {
        tags: ['站内信息管理'],
        operationId: 'sendSms',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/MessageSmsDTO',
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
    '/sysMessage/send/hook': {
      post: {
        tags: ['站内信息管理'],
        operationId: 'sendWebhook',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/MessageHookDTO',
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
    '/sysMessage/send/email': {
      post: {
        tags: ['站内信息管理'],
        operationId: 'sendEmail',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/MessageEmailDTO',
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
    '/sysMessage/read': {
      post: {
        tags: ['站内信息管理'],
        summary: '读取站内信息',
        description: '读取站内信息',
        operationId: 'read',
        parameters: [
          {
            name: 'id',
            in: 'query',
            required: true,
            schema: {
              type: 'integer',
              format: 'int64',
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
    '/sys-file/upload': {
      post: {
        tags: ['文件管理'],
        operationId: 'upload',
        parameters: [
          {
            name: 'dir',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'groupId',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          {
            name: 'type',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'fileName',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  file: {
                    type: 'string',
                    format: 'binary',
                  },
                },
                required: ['file'],
              },
            },
          },
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
    '/sys-file/inner/upload': {
      post: {
        tags: ['文件管理'],
        operationId: 'innerUpload',
        parameters: [
          {
            name: 'dir',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'groupId',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          {
            name: 'type',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'fileName',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  file: {
                    type: 'string',
                    format: 'binary',
                  },
                },
                required: ['file'],
              },
            },
          },
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
    '/sys-file/group/add': {
      post: {
        tags: ['文件管理'],
        operationId: 'addGroup',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysFileGroup',
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
    '/social/bind': {
      post: {
        tags: ['三方账号管理模块'],
        operationId: 'bindSocial',
        parameters: [
          {
            name: 'state',
            in: 'query',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'code',
            in: 'query',
            required: true,
            schema: {
              type: 'string',
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
    '/route': {
      get: {
        tags: ['动态路由管理模块'],
        operationId: 'listRoutes',
        parameters: [
          {
            name: 'routeId',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
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
      post: {
        tags: ['动态路由管理模块'],
        operationId: 'addOrUpdateRoute',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/JSONObject',
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
    '/route/save': {
      post: {
        tags: ['动态路由管理模块'],
        operationId: 'saveRoute',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysRouteConf',
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
    '/role/import': {
      post: {
        tags: ['角色管理模块'],
        operationId: 'importRole',
        parameters: [
          {
            name: 'excelVOList',
            in: 'query',
            required: true,
            schema: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/RoleExcelVO',
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
    '/role/getRoleList': {
      post: {
        tags: ['角色管理模块'],
        operationId: 'getRoleList',
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
    '/requestLogManage/retry': {
      post: {
        tags: ['推送数据管理'],
        summary: '重新推送',
        description: '重新推送',
        operationId: 'retry',
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
    '/requestLogManage/retryBill': {
      post: {
        tags: ['推送数据管理'],
        summary: '重新推送',
        description: '重新推送',
        operationId: 'retryBill',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/RequestLogManageRetryRemoteReqVO',
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
                  $ref: '#/components/schemas/RString',
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
    '/requestLogManage/retryBillWithBizNo': {
      post: {
        tags: ['推送数据管理'],
        summary: '根据单据编号重新推送',
        description: '根据单据编号重新推送',
        operationId: 'retryBillWithBizNo',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/RequestLogManageRetryWithBizNoReqVO',
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
                  $ref: '#/components/schemas/RString',
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
    '/requestLogManage/retryAll': {
      post: {
        tags: ['推送数据管理'],
        summary: '全部重新推送',
        description: '全部重新推送',
        operationId: 'retryAll',
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
    '/requestLogManage/remote/updateRequestResultType': {
      post: {
        tags: ['推送数据管理'],
        summary: '更新推送数据管理表状态',
        description: '更新推送数据管理表状态',
        operationId: 'updateRequestResultType',
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
                  $ref: '#/components/schemas/RString',
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
    '/requestLogManage/remote/saveSync': {
      post: {
        tags: ['推送数据管理'],
        summary: '同步保存推送数据管理',
        description: '同步保存推送数据管理',
        operationId: 'saveSync',
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
                  $ref: '#/components/schemas/RRequestLogManageEntity',
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
    '/requestLogManage/remote/saveAsync': {
      post: {
        tags: ['推送数据管理'],
        summary: '异步保存推送数据管理',
        description: '异步保存推送数据管理',
        operationId: 'saveAsync',
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
                  $ref: '#/components/schemas/RRequestLogManageEntity',
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
    '/requestLogManage/remote/retry': {
      post: {
        tags: ['推送数据管理'],
        summary: '重新推送（远程）',
        description: '重新推送（远程）',
        operationId: 'remoteRetry',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/RequestLogManageRetryRemoteReqVO',
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
                  $ref: '#/components/schemas/RString',
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
    '/requestLogManage/remote/analysis': {
      post: {
        tags: ['推送数据管理'],
        summary: '处理队列数据',
        description: '处理队列数据',
        operationId: 'analysis',
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
    '/requestLogManage/changeSwitchStatus': {
      post: {
        tags: ['推送数据管理'],
        summary: '数据推送开关修改',
        description: '数据推送开关修改',
        operationId: 'changeSwitchStatus',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'boolean',
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
    '/register/user': {
      post: {
        tags: ['sys-register-controller'],
        operationId: 'registerUser',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/RegisterUserDTO',
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
      },
    },
    '/register/password': {
      post: {
        tags: ['sys-register-controller'],
        operationId: 'resetUserPassword',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/RegisterUserDTO',
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
      },
    },
    '/register/forget/{code}': {
      post: {
        tags: ['sys-register-controller'],
        operationId: 'forgetUserPassword',
        parameters: [
          {
            name: 'code',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/RegisterUserDTO',
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
      },
    },
    '/post/import': {
      post: {
        tags: ['岗位信息表管理'],
        operationId: 'importRole_1',
        parameters: [
          {
            name: 'excelVOList',
            in: 'query',
            required: true,
            schema: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/PostExcelVO',
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
    '/log/save': {
      post: {
        tags: ['日志管理模块'],
        operationId: 'save_15',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysLogDTO',
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
    '/log/logs': {
      post: {
        tags: ['日志管理模块'],
        operationId: 'saveBatchLogs',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/PreLogVO',
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
    '/dept/import': {
      post: {
        tags: ['部门管理模块'],
        operationId: 'importDept',
        parameters: [
          {
            name: 'excelVOList',
            in: 'query',
            required: true,
            schema: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/DeptExcelVO',
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
    '/connect/sync/ding/user': {
      post: {
        tags: ['开放互联'],
        operationId: 'syncUser',
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
    '/connect/sync/ding/dept': {
      post: {
        tags: ['开放互联'],
        operationId: 'syncDept',
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
    '/connect/sync/cp/user': {
      post: {
        tags: ['开放互联'],
        operationId: 'syncCpUser',
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
    '/connect/sync/cp/dept': {
      post: {
        tags: ['开放互联'],
        operationId: 'syncCpDept',
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
    '/company/updateById': {
      post: {
        tags: ['企业管理表管理'],
        summary: '修改企业管理表',
        description: '修改企业管理表',
        operationId: 'updateById_12',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/CompanySaveReqVO',
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
    '/company/save': {
      post: {
        tags: ['企业管理表管理'],
        summary: '新增企业管理表',
        description: '新增企业管理表',
        operationId: 'save_16',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/CompanySaveReqVO',
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
    '/company/removeById': {
      post: {
        tags: ['企业管理表管理'],
        summary: '通过id删除企业管理表',
        description: '通过id删除企业管理表',
        operationId: 'removeById_13',
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
    '/company/getUserCompany': {
      post: {
        tags: ['企业管理表管理'],
        summary: '获得当前用户的公司信息',
        description: '获得当前用户的公司信息',
        operationId: 'getUserCompany',
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/RListSysUserCompanyFullVO',
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
    '/company/changePassword': {
      post: {
        tags: ['企业管理表管理'],
        summary: '修改企业管理员密码',
        description: '修改企业管理员密码',
        operationId: 'changePassword',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/CompanyChangePasswordReqVO',
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
    '/client/user/getOrInsertUser': {
      post: {
        tags: ['用户管理-微服务调用接口'],
        operationId: 'getOrInsertUser',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UserDTO',
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
    '/client/role/removeByCompanyIdAndCapacityType': {
      post: {
        tags: ['角色管理模块-微服务调用接口'],
        operationId: 'removeByCompanyIdAndCapacityType',
        parameters: [
          {
            name: 'companyIdList',
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
          {
            name: 'capacityType',
            in: 'query',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
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
    '/audit': {
      post: {
        tags: ['审计记录表管理'],
        summary: '新增审计记录表',
        description: '新增审计记录表',
        operationId: 'save_17',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/SysAuditLog',
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
    '/ai/chat': {
      post: {
        tags: ['ai-chat-controller'],
        operationId: 'chat',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/AiChatMessageDTO',
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
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/ChatCompletionResponse',
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
      },
    },
    '/user/page': {
      get: {
        tags: ['用户管理模块'],
        operationId: 'getUserPage',
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
            name: 'role',
            in: 'query',
            description: '角色id集合',
            required: false,
            schema: {
              type: 'array',
              description: '角色id集合',
              items: {
                type: 'integer',
                format: 'int64',
                description: '角色id集合',
              },
            },
          },
          {
            name: 'deptId',
            in: 'query',
            description: '部门id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '部门id',
            },
          },
          {
            name: 'post',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              items: {
                type: 'integer',
                format: 'int64',
              },
            },
          },
          {
            name: 'newpassword1',
            in: 'query',
            description: '新密码',
            required: false,
            schema: {
              type: 'string',
              description: '新密码',
            },
          },
          {
            name: 'companyId',
            in: 'query',
            description: '企业id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '企业id',
            },
          },
          {
            name: 'userTypeEnum',
            in: 'query',
            description: '用户类型，普通用户，司机',
            required: false,
            schema: {
              type: 'string',
              description: '用户类型，普通用户，司机',
              enum: ['other', 'driver'],
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
            name: 'userId',
            in: 'query',
            description: '主键id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '主键id',
            },
          },
          {
            name: 'username',
            in: 'query',
            description: '用户名',
            required: false,
            schema: {
              type: 'string',
              description: '用户名',
            },
          },
          {
            name: 'password',
            in: 'query',
            description: '密码',
            required: false,
            schema: {
              type: 'string',
              description: '密码',
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
            name: 'updateBy',
            in: 'query',
            description: '修改人',
            required: false,
            schema: {
              type: 'string',
              description: '修改人',
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
            name: 'updateTime',
            in: 'query',
            description: '修改时间',
            required: false,
            schema: {
              type: 'string',
              format: 'date-time',
              description: '修改时间',
            },
          },
          {
            name: 'delFlag',
            in: 'query',
            description: '删除标记,1:已删除,0:正常',
            required: false,
            schema: {
              type: 'string',
              description: '删除标记,1:已删除,0:正常',
            },
          },
          {
            name: 'lockFlag',
            in: 'query',
            description: '锁定标记',
            required: false,
            schema: {
              type: 'string',
              description: '锁定标记',
            },
          },
          {
            name: 'passwordExpireFlag',
            in: 'query',
            description: '密码过期标记',
            required: false,
            schema: {
              type: 'string',
              description: '密码过期标记',
            },
          },
          {
            name: 'passwordModifyTime',
            in: 'query',
            description: '密码修改时间',
            required: false,
            schema: {
              type: 'string',
              format: 'date-time',
              description: '密码修改时间',
            },
          },
          {
            name: 'phone',
            in: 'query',
            description: '手机号',
            required: false,
            schema: {
              type: 'string',
              description: '手机号',
            },
          },
          {
            name: 'avatar',
            in: 'query',
            description: '头像地址',
            required: false,
            schema: {
              type: 'string',
              description: '头像地址',
            },
          },
          {
            name: 'tenantId',
            in: 'query',
            description: '用户所属租户id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '用户所属租户id',
            },
          },
          {
            name: 'wxOpenid',
            in: 'query',
            description: '微信openid',
            required: false,
            schema: {
              type: 'string',
              description: '微信openid',
            },
          },
          {
            name: 'wxCpUserid',
            in: 'query',
            description: '企微微信 userid',
            required: false,
            schema: {
              type: 'string',
              description: '企微微信 userid',
            },
          },
          {
            name: 'wxDingUserid',
            in: 'query',
            description: '钉钉 userid',
            required: false,
            schema: {
              type: 'string',
              description: '钉钉 userid',
            },
          },
          {
            name: 'miniOpenid',
            in: 'query',
            description: '微信小程序openid',
            required: false,
            schema: {
              type: 'string',
              description: '微信小程序openid',
            },
          },
          {
            name: 'qqOpenid',
            in: 'query',
            description: 'QQ openid',
            required: false,
            schema: {
              type: 'string',
              description: 'QQ openid',
            },
          },
          {
            name: 'giteeLogin',
            in: 'query',
            description: '码云唯一标识',
            required: false,
            schema: {
              type: 'string',
              description: '码云唯一标识',
            },
          },
          {
            name: 'oscId',
            in: 'query',
            description: '开源中国唯一标识',
            required: false,
            schema: {
              type: 'string',
              description: '开源中国唯一标识',
            },
          },
          {
            name: 'nickname',
            in: 'query',
            description: '昵称',
            required: false,
            schema: {
              type: 'string',
              description: '昵称',
            },
          },
          {
            name: 'name',
            in: 'query',
            description: '姓名',
            required: false,
            schema: {
              type: 'string',
              description: '姓名',
            },
          },
          {
            name: 'email',
            in: 'query',
            description: '邮箱',
            required: false,
            schema: {
              type: 'string',
              description: '邮箱',
            },
          },
          {
            name: 'userType',
            in: 'query',
            description: '用户类型',
            required: false,
            schema: {
              type: 'integer',
              format: 'int32',
              description: '用户类型',
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
    '/user/list': {
      get: {
        tags: ['用户管理模块'],
        operationId: 'getUserListByIds',
        parameters: [
          {
            name: 'userIds',
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
                  $ref: '#/components/schemas/RListSysUser',
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
    '/user/info': {
      get: {
        tags: ['用户管理模块'],
        operationId: 'info',
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
    '/user/info/{username}': {
      get: {
        tags: ['用户管理模块'],
        operationId: 'info_1',
        parameters: [
          {
            name: 'username',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
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
    '/user/getUserListByUserName': {
      get: {
        tags: ['用户管理模块'],
        operationId: 'getUserListByUserName',
        parameters: [
          {
            name: 'username',
            in: 'query',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/RListSysUser',
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
    '/user/getUserIdListByRoleIdList': {
      get: {
        tags: ['用户管理模块'],
        operationId: 'getUserIdListByRoleIdList',
        parameters: [
          {
            name: 'roleIdList',
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
                  $ref: '#/components/schemas/RListLong',
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
    '/user/getUserIdListByDeptIdList': {
      get: {
        tags: ['用户管理模块'],
        operationId: 'getUserIdListByDeptIdList',
        parameters: [
          {
            name: 'deptIdList',
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
                  $ref: '#/components/schemas/RListSysUser',
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
    '/user/export': {
      get: {
        tags: ['用户管理模块'],
        operationId: 'export',
        parameters: [
          {
            name: 'userDTO',
            in: 'query',
            required: true,
            schema: {
              $ref: '#/components/schemas/UserDTO',
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
                    type: 'object',
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
    '/user/details': {
      get: {
        tags: ['用户管理模块'],
        operationId: 'getDetails',
        parameters: [
          {
            name: 'userId',
            in: 'query',
            description: '主键id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '主键id',
            },
          },
          {
            name: 'username',
            in: 'query',
            description: '用户名',
            required: false,
            schema: {
              type: 'string',
              description: '用户名',
            },
          },
          {
            name: 'password',
            in: 'query',
            description: '密码',
            required: false,
            schema: {
              type: 'string',
              description: '密码',
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
            name: 'updateBy',
            in: 'query',
            description: '修改人',
            required: false,
            schema: {
              type: 'string',
              description: '修改人',
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
            name: 'updateTime',
            in: 'query',
            description: '修改时间',
            required: false,
            schema: {
              type: 'string',
              format: 'date-time',
              description: '修改时间',
            },
          },
          {
            name: 'delFlag',
            in: 'query',
            description: '删除标记,1:已删除,0:正常',
            required: false,
            schema: {
              type: 'string',
              description: '删除标记,1:已删除,0:正常',
            },
          },
          {
            name: 'lockFlag',
            in: 'query',
            description: '锁定标记',
            required: false,
            schema: {
              type: 'string',
              description: '锁定标记',
            },
          },
          {
            name: 'passwordExpireFlag',
            in: 'query',
            description: '密码过期标记',
            required: false,
            schema: {
              type: 'string',
              description: '密码过期标记',
            },
          },
          {
            name: 'passwordModifyTime',
            in: 'query',
            description: '密码修改时间',
            required: false,
            schema: {
              type: 'string',
              format: 'date-time',
              description: '密码修改时间',
            },
          },
          {
            name: 'phone',
            in: 'query',
            description: '手机号',
            required: false,
            schema: {
              type: 'string',
              description: '手机号',
            },
          },
          {
            name: 'avatar',
            in: 'query',
            description: '头像地址',
            required: false,
            schema: {
              type: 'string',
              description: '头像地址',
            },
          },
          {
            name: 'tenantId',
            in: 'query',
            description: '用户所属租户id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '用户所属租户id',
            },
          },
          {
            name: 'wxOpenid',
            in: 'query',
            description: '微信openid',
            required: false,
            schema: {
              type: 'string',
              description: '微信openid',
            },
          },
          {
            name: 'wxCpUserid',
            in: 'query',
            description: '企微微信 userid',
            required: false,
            schema: {
              type: 'string',
              description: '企微微信 userid',
            },
          },
          {
            name: 'wxDingUserid',
            in: 'query',
            description: '钉钉 userid',
            required: false,
            schema: {
              type: 'string',
              description: '钉钉 userid',
            },
          },
          {
            name: 'miniOpenid',
            in: 'query',
            description: '微信小程序openid',
            required: false,
            schema: {
              type: 'string',
              description: '微信小程序openid',
            },
          },
          {
            name: 'qqOpenid',
            in: 'query',
            description: 'QQ openid',
            required: false,
            schema: {
              type: 'string',
              description: 'QQ openid',
            },
          },
          {
            name: 'giteeLogin',
            in: 'query',
            description: '码云唯一标识',
            required: false,
            schema: {
              type: 'string',
              description: '码云唯一标识',
            },
          },
          {
            name: 'oscId',
            in: 'query',
            description: '开源中国唯一标识',
            required: false,
            schema: {
              type: 'string',
              description: '开源中国唯一标识',
            },
          },
          {
            name: 'nickname',
            in: 'query',
            description: '昵称',
            required: false,
            schema: {
              type: 'string',
              description: '昵称',
            },
          },
          {
            name: 'name',
            in: 'query',
            description: '姓名',
            required: false,
            schema: {
              type: 'string',
              description: '姓名',
            },
          },
          {
            name: 'email',
            in: 'query',
            description: '邮箱',
            required: false,
            schema: {
              type: 'string',
              description: '邮箱',
            },
          },
          {
            name: 'userType',
            in: 'query',
            description: '用户类型',
            required: false,
            schema: {
              type: 'integer',
              format: 'int32',
              description: '用户类型',
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
    '/user/details/{id}': {
      get: {
        tags: ['用户管理模块'],
        operationId: 'user_1',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              type: 'integer',
              format: 'int64',
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
    '/user/ancestor/{username}': {
      get: {
        tags: ['用户管理模块'],
        operationId: 'listAncestorUsers',
        parameters: [
          {
            name: 'username',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
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
    '/tenant/user-tenant/page': {
      get: {
        tags: ['租户管理'],
        operationId: 'getUserTenantPage',
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
            name: 'role',
            in: 'query',
            description: '角色id集合',
            required: false,
            schema: {
              type: 'array',
              description: '角色id集合',
              items: {
                type: 'integer',
                format: 'int64',
                description: '角色id集合',
              },
            },
          },
          {
            name: 'deptId',
            in: 'query',
            description: '部门id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '部门id',
            },
          },
          {
            name: 'post',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              items: {
                type: 'integer',
                format: 'int64',
              },
            },
          },
          {
            name: 'newpassword1',
            in: 'query',
            description: '新密码',
            required: false,
            schema: {
              type: 'string',
              description: '新密码',
            },
          },
          {
            name: 'companyId',
            in: 'query',
            description: '企业id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '企业id',
            },
          },
          {
            name: 'userTypeEnum',
            in: 'query',
            description: '用户类型，普通用户，司机',
            required: false,
            schema: {
              type: 'string',
              description: '用户类型，普通用户，司机',
              enum: ['other', 'driver'],
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
            name: 'userId',
            in: 'query',
            description: '主键id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '主键id',
            },
          },
          {
            name: 'username',
            in: 'query',
            description: '用户名',
            required: false,
            schema: {
              type: 'string',
              description: '用户名',
            },
          },
          {
            name: 'password',
            in: 'query',
            description: '密码',
            required: false,
            schema: {
              type: 'string',
              description: '密码',
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
            name: 'updateBy',
            in: 'query',
            description: '修改人',
            required: false,
            schema: {
              type: 'string',
              description: '修改人',
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
            name: 'updateTime',
            in: 'query',
            description: '修改时间',
            required: false,
            schema: {
              type: 'string',
              format: 'date-time',
              description: '修改时间',
            },
          },
          {
            name: 'delFlag',
            in: 'query',
            description: '删除标记,1:已删除,0:正常',
            required: false,
            schema: {
              type: 'string',
              description: '删除标记,1:已删除,0:正常',
            },
          },
          {
            name: 'lockFlag',
            in: 'query',
            description: '锁定标记',
            required: false,
            schema: {
              type: 'string',
              description: '锁定标记',
            },
          },
          {
            name: 'passwordExpireFlag',
            in: 'query',
            description: '密码过期标记',
            required: false,
            schema: {
              type: 'string',
              description: '密码过期标记',
            },
          },
          {
            name: 'passwordModifyTime',
            in: 'query',
            description: '密码修改时间',
            required: false,
            schema: {
              type: 'string',
              format: 'date-time',
              description: '密码修改时间',
            },
          },
          {
            name: 'phone',
            in: 'query',
            description: '手机号',
            required: false,
            schema: {
              type: 'string',
              description: '手机号',
            },
          },
          {
            name: 'avatar',
            in: 'query',
            description: '头像地址',
            required: false,
            schema: {
              type: 'string',
              description: '头像地址',
            },
          },
          {
            name: 'tenantId',
            in: 'query',
            description: '用户所属租户id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '用户所属租户id',
            },
          },
          {
            name: 'wxOpenid',
            in: 'query',
            description: '微信openid',
            required: false,
            schema: {
              type: 'string',
              description: '微信openid',
            },
          },
          {
            name: 'wxCpUserid',
            in: 'query',
            description: '企微微信 userid',
            required: false,
            schema: {
              type: 'string',
              description: '企微微信 userid',
            },
          },
          {
            name: 'wxDingUserid',
            in: 'query',
            description: '钉钉 userid',
            required: false,
            schema: {
              type: 'string',
              description: '钉钉 userid',
            },
          },
          {
            name: 'miniOpenid',
            in: 'query',
            description: '微信小程序openid',
            required: false,
            schema: {
              type: 'string',
              description: '微信小程序openid',
            },
          },
          {
            name: 'qqOpenid',
            in: 'query',
            description: 'QQ openid',
            required: false,
            schema: {
              type: 'string',
              description: 'QQ openid',
            },
          },
          {
            name: 'giteeLogin',
            in: 'query',
            description: '码云唯一标识',
            required: false,
            schema: {
              type: 'string',
              description: '码云唯一标识',
            },
          },
          {
            name: 'oscId',
            in: 'query',
            description: '开源中国唯一标识',
            required: false,
            schema: {
              type: 'string',
              description: '开源中国唯一标识',
            },
          },
          {
            name: 'nickname',
            in: 'query',
            description: '昵称',
            required: false,
            schema: {
              type: 'string',
              description: '昵称',
            },
          },
          {
            name: 'name',
            in: 'query',
            description: '姓名',
            required: false,
            schema: {
              type: 'string',
              description: '姓名',
            },
          },
          {
            name: 'email',
            in: 'query',
            description: '邮箱',
            required: false,
            schema: {
              type: 'string',
              description: '邮箱',
            },
          },
          {
            name: 'userType',
            in: 'query',
            description: '用户类型',
            required: false,
            schema: {
              type: 'integer',
              format: 'int32',
              description: '用户类型',
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
    '/tenant/tree/menu': {
      get: {
        tags: ['租户管理'],
        operationId: 'getTree',
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
    '/tenant/page': {
      get: {
        tags: ['租户管理'],
        operationId: 'getSysTenantPage',
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
            description: '租户id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '租户id',
            },
          },
          {
            name: 'name',
            in: 'query',
            description: '租户名称',
            required: false,
            schema: {
              type: 'string',
              description: '租户名称',
            },
          },
          {
            name: 'code',
            in: 'query',
            description: '租户编号',
            required: false,
            schema: {
              type: 'string',
              description: '租户编号',
            },
          },
          {
            name: 'tenantDomain',
            in: 'query',
            description: '租户域名',
            required: false,
            schema: {
              type: 'string',
              description: '租户域名',
            },
          },
          {
            name: 'websiteName',
            in: 'query',
            description: '网站名称',
            required: false,
            schema: {
              type: 'string',
              description: '网站名称',
            },
          },
          {
            name: 'logo',
            in: 'query',
            description: 'logo',
            required: false,
            schema: {
              type: 'string',
              description: 'logo',
            },
          },
          {
            name: 'footer',
            in: 'query',
            description: 'footer',
            required: false,
            schema: {
              type: 'string',
              description: 'footer',
            },
          },
          {
            name: 'miniQr',
            in: 'query',
            description: '移动端二维码',
            required: false,
            schema: {
              type: 'string',
              description: '移动端二维码',
            },
          },
          {
            name: 'background',
            in: 'query',
            description: '登录页图片',
            required: false,
            schema: {
              type: 'string',
              description: '登录页图片',
            },
          },
          {
            name: 'startTime',
            in: 'query',
            description: '开始时间',
            required: false,
            schema: {
              type: 'string',
              format: 'date-time',
              description: '开始时间',
            },
          },
          {
            name: 'endTime',
            in: 'query',
            description: '结束时间',
            required: false,
            schema: {
              type: 'string',
              format: 'date-time',
              description: '结束时间',
            },
          },
          {
            name: 'status',
            in: 'query',
            description: '租户冻结标记,9:冻结,0:正常',
            required: false,
            schema: {
              type: 'string',
              description: '租户冻结标记,9:冻结,0:正常',
            },
          },
          {
            name: 'menuId',
            in: 'query',
            description: '租户菜单ID',
            required: false,
            schema: {
              type: 'string',
              description: '租户菜单ID',
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
            name: 'updateBy',
            in: 'query',
            description: '修改人',
            required: false,
            schema: {
              type: 'string',
              description: '修改人',
            },
          },
          {
            name: 'delFlag',
            in: 'query',
            description: '删除标记,1:已删除,0:正常',
            required: false,
            schema: {
              type: 'string',
              description: '删除标记,1:已删除,0:正常',
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
    '/tenant/list': {
      get: {
        tags: ['租户管理'],
        operationId: 'list',
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
    '/tenant/list-users': {
      get: {
        tags: ['租户管理'],
        operationId: 'listTenantUser',
        parameters: [
          {
            name: 'role',
            in: 'query',
            description: '角色id集合',
            required: false,
            schema: {
              type: 'array',
              description: '角色id集合',
              items: {
                type: 'integer',
                format: 'int64',
                description: '角色id集合',
              },
            },
          },
          {
            name: 'deptId',
            in: 'query',
            description: '部门id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '部门id',
            },
          },
          {
            name: 'post',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              items: {
                type: 'integer',
                format: 'int64',
              },
            },
          },
          {
            name: 'newpassword1',
            in: 'query',
            description: '新密码',
            required: false,
            schema: {
              type: 'string',
              description: '新密码',
            },
          },
          {
            name: 'companyId',
            in: 'query',
            description: '企业id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '企业id',
            },
          },
          {
            name: 'userTypeEnum',
            in: 'query',
            description: '用户类型，普通用户，司机',
            required: false,
            schema: {
              type: 'string',
              description: '用户类型，普通用户，司机',
              enum: ['other', 'driver'],
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
            name: 'userId',
            in: 'query',
            description: '主键id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '主键id',
            },
          },
          {
            name: 'username',
            in: 'query',
            description: '用户名',
            required: false,
            schema: {
              type: 'string',
              description: '用户名',
            },
          },
          {
            name: 'password',
            in: 'query',
            description: '密码',
            required: false,
            schema: {
              type: 'string',
              description: '密码',
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
            name: 'updateBy',
            in: 'query',
            description: '修改人',
            required: false,
            schema: {
              type: 'string',
              description: '修改人',
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
            name: 'updateTime',
            in: 'query',
            description: '修改时间',
            required: false,
            schema: {
              type: 'string',
              format: 'date-time',
              description: '修改时间',
            },
          },
          {
            name: 'delFlag',
            in: 'query',
            description: '删除标记,1:已删除,0:正常',
            required: false,
            schema: {
              type: 'string',
              description: '删除标记,1:已删除,0:正常',
            },
          },
          {
            name: 'lockFlag',
            in: 'query',
            description: '锁定标记',
            required: false,
            schema: {
              type: 'string',
              description: '锁定标记',
            },
          },
          {
            name: 'passwordExpireFlag',
            in: 'query',
            description: '密码过期标记',
            required: false,
            schema: {
              type: 'string',
              description: '密码过期标记',
            },
          },
          {
            name: 'passwordModifyTime',
            in: 'query',
            description: '密码修改时间',
            required: false,
            schema: {
              type: 'string',
              format: 'date-time',
              description: '密码修改时间',
            },
          },
          {
            name: 'phone',
            in: 'query',
            description: '手机号',
            required: false,
            schema: {
              type: 'string',
              description: '手机号',
            },
          },
          {
            name: 'avatar',
            in: 'query',
            description: '头像地址',
            required: false,
            schema: {
              type: 'string',
              description: '头像地址',
            },
          },
          {
            name: 'tenantId',
            in: 'query',
            description: '用户所属租户id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '用户所属租户id',
            },
          },
          {
            name: 'wxOpenid',
            in: 'query',
            description: '微信openid',
            required: false,
            schema: {
              type: 'string',
              description: '微信openid',
            },
          },
          {
            name: 'wxCpUserid',
            in: 'query',
            description: '企微微信 userid',
            required: false,
            schema: {
              type: 'string',
              description: '企微微信 userid',
            },
          },
          {
            name: 'wxDingUserid',
            in: 'query',
            description: '钉钉 userid',
            required: false,
            schema: {
              type: 'string',
              description: '钉钉 userid',
            },
          },
          {
            name: 'miniOpenid',
            in: 'query',
            description: '微信小程序openid',
            required: false,
            schema: {
              type: 'string',
              description: '微信小程序openid',
            },
          },
          {
            name: 'qqOpenid',
            in: 'query',
            description: 'QQ openid',
            required: false,
            schema: {
              type: 'string',
              description: 'QQ openid',
            },
          },
          {
            name: 'giteeLogin',
            in: 'query',
            description: '码云唯一标识',
            required: false,
            schema: {
              type: 'string',
              description: '码云唯一标识',
            },
          },
          {
            name: 'oscId',
            in: 'query',
            description: '开源中国唯一标识',
            required: false,
            schema: {
              type: 'string',
              description: '开源中国唯一标识',
            },
          },
          {
            name: 'nickname',
            in: 'query',
            description: '昵称',
            required: false,
            schema: {
              type: 'string',
              description: '昵称',
            },
          },
          {
            name: 'name',
            in: 'query',
            description: '姓名',
            required: false,
            schema: {
              type: 'string',
              description: '姓名',
            },
          },
          {
            name: 'email',
            in: 'query',
            description: '邮箱',
            required: false,
            schema: {
              type: 'string',
              description: '邮箱',
            },
          },
          {
            name: 'userType',
            in: 'query',
            description: '用户类型',
            required: false,
            schema: {
              type: 'integer',
              format: 'int32',
              description: '用户类型',
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
    '/tenant/list-org': {
      get: {
        tags: ['租户管理'],
        operationId: 'listTenantOrg',
        parameters: [
          {
            name: 'role',
            in: 'query',
            description: '角色id集合',
            required: false,
            schema: {
              type: 'array',
              description: '角色id集合',
              items: {
                type: 'integer',
                format: 'int64',
                description: '角色id集合',
              },
            },
          },
          {
            name: 'deptId',
            in: 'query',
            description: '部门id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '部门id',
            },
          },
          {
            name: 'post',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              items: {
                type: 'integer',
                format: 'int64',
              },
            },
          },
          {
            name: 'newpassword1',
            in: 'query',
            description: '新密码',
            required: false,
            schema: {
              type: 'string',
              description: '新密码',
            },
          },
          {
            name: 'companyId',
            in: 'query',
            description: '企业id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '企业id',
            },
          },
          {
            name: 'userTypeEnum',
            in: 'query',
            description: '用户类型，普通用户，司机',
            required: false,
            schema: {
              type: 'string',
              description: '用户类型，普通用户，司机',
              enum: ['other', 'driver'],
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
            name: 'userId',
            in: 'query',
            description: '主键id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '主键id',
            },
          },
          {
            name: 'username',
            in: 'query',
            description: '用户名',
            required: false,
            schema: {
              type: 'string',
              description: '用户名',
            },
          },
          {
            name: 'password',
            in: 'query',
            description: '密码',
            required: false,
            schema: {
              type: 'string',
              description: '密码',
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
            name: 'updateBy',
            in: 'query',
            description: '修改人',
            required: false,
            schema: {
              type: 'string',
              description: '修改人',
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
            name: 'updateTime',
            in: 'query',
            description: '修改时间',
            required: false,
            schema: {
              type: 'string',
              format: 'date-time',
              description: '修改时间',
            },
          },
          {
            name: 'delFlag',
            in: 'query',
            description: '删除标记,1:已删除,0:正常',
            required: false,
            schema: {
              type: 'string',
              description: '删除标记,1:已删除,0:正常',
            },
          },
          {
            name: 'lockFlag',
            in: 'query',
            description: '锁定标记',
            required: false,
            schema: {
              type: 'string',
              description: '锁定标记',
            },
          },
          {
            name: 'passwordExpireFlag',
            in: 'query',
            description: '密码过期标记',
            required: false,
            schema: {
              type: 'string',
              description: '密码过期标记',
            },
          },
          {
            name: 'passwordModifyTime',
            in: 'query',
            description: '密码修改时间',
            required: false,
            schema: {
              type: 'string',
              format: 'date-time',
              description: '密码修改时间',
            },
          },
          {
            name: 'phone',
            in: 'query',
            description: '手机号',
            required: false,
            schema: {
              type: 'string',
              description: '手机号',
            },
          },
          {
            name: 'avatar',
            in: 'query',
            description: '头像地址',
            required: false,
            schema: {
              type: 'string',
              description: '头像地址',
            },
          },
          {
            name: 'tenantId',
            in: 'query',
            description: '用户所属租户id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '用户所属租户id',
            },
          },
          {
            name: 'wxOpenid',
            in: 'query',
            description: '微信openid',
            required: false,
            schema: {
              type: 'string',
              description: '微信openid',
            },
          },
          {
            name: 'wxCpUserid',
            in: 'query',
            description: '企微微信 userid',
            required: false,
            schema: {
              type: 'string',
              description: '企微微信 userid',
            },
          },
          {
            name: 'wxDingUserid',
            in: 'query',
            description: '钉钉 userid',
            required: false,
            schema: {
              type: 'string',
              description: '钉钉 userid',
            },
          },
          {
            name: 'miniOpenid',
            in: 'query',
            description: '微信小程序openid',
            required: false,
            schema: {
              type: 'string',
              description: '微信小程序openid',
            },
          },
          {
            name: 'qqOpenid',
            in: 'query',
            description: 'QQ openid',
            required: false,
            schema: {
              type: 'string',
              description: 'QQ openid',
            },
          },
          {
            name: 'giteeLogin',
            in: 'query',
            description: '码云唯一标识',
            required: false,
            schema: {
              type: 'string',
              description: '码云唯一标识',
            },
          },
          {
            name: 'oscId',
            in: 'query',
            description: '开源中国唯一标识',
            required: false,
            schema: {
              type: 'string',
              description: '开源中国唯一标识',
            },
          },
          {
            name: 'nickname',
            in: 'query',
            description: '昵称',
            required: false,
            schema: {
              type: 'string',
              description: '昵称',
            },
          },
          {
            name: 'name',
            in: 'query',
            description: '姓名',
            required: false,
            schema: {
              type: 'string',
              description: '姓名',
            },
          },
          {
            name: 'email',
            in: 'query',
            description: '邮箱',
            required: false,
            schema: {
              type: 'string',
              description: '邮箱',
            },
          },
          {
            name: 'userType',
            in: 'query',
            description: '用户类型',
            required: false,
            schema: {
              type: 'integer',
              format: 'int32',
              description: '用户类型',
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
    '/tenant/export': {
      get: {
        tags: ['租户管理'],
        operationId: 'export_1',
        parameters: [
          {
            name: 'sysTenant',
            in: 'query',
            required: true,
            schema: {
              $ref: '#/components/schemas/SysTenant',
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
                    $ref: '#/components/schemas/SysTenant',
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
    '/tenant/details': {
      get: {
        tags: ['租户管理'],
        operationId: 'getDetails_1',
        parameters: [
          {
            name: 'id',
            in: 'query',
            description: '租户id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '租户id',
            },
          },
          {
            name: 'name',
            in: 'query',
            description: '租户名称',
            required: false,
            schema: {
              type: 'string',
              description: '租户名称',
            },
          },
          {
            name: 'code',
            in: 'query',
            description: '租户编号',
            required: false,
            schema: {
              type: 'string',
              description: '租户编号',
            },
          },
          {
            name: 'tenantDomain',
            in: 'query',
            description: '租户域名',
            required: false,
            schema: {
              type: 'string',
              description: '租户域名',
            },
          },
          {
            name: 'websiteName',
            in: 'query',
            description: '网站名称',
            required: false,
            schema: {
              type: 'string',
              description: '网站名称',
            },
          },
          {
            name: 'logo',
            in: 'query',
            description: 'logo',
            required: false,
            schema: {
              type: 'string',
              description: 'logo',
            },
          },
          {
            name: 'footer',
            in: 'query',
            description: 'footer',
            required: false,
            schema: {
              type: 'string',
              description: 'footer',
            },
          },
          {
            name: 'miniQr',
            in: 'query',
            description: '移动端二维码',
            required: false,
            schema: {
              type: 'string',
              description: '移动端二维码',
            },
          },
          {
            name: 'background',
            in: 'query',
            description: '登录页图片',
            required: false,
            schema: {
              type: 'string',
              description: '登录页图片',
            },
          },
          {
            name: 'startTime',
            in: 'query',
            description: '开始时间',
            required: false,
            schema: {
              type: 'string',
              format: 'date-time',
              description: '开始时间',
            },
          },
          {
            name: 'endTime',
            in: 'query',
            description: '结束时间',
            required: false,
            schema: {
              type: 'string',
              format: 'date-time',
              description: '结束时间',
            },
          },
          {
            name: 'status',
            in: 'query',
            description: '租户冻结标记,9:冻结,0:正常',
            required: false,
            schema: {
              type: 'string',
              description: '租户冻结标记,9:冻结,0:正常',
            },
          },
          {
            name: 'menuId',
            in: 'query',
            description: '租户菜单ID',
            required: false,
            schema: {
              type: 'string',
              description: '租户菜单ID',
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
            name: 'updateBy',
            in: 'query',
            description: '修改人',
            required: false,
            schema: {
              type: 'string',
              description: '修改人',
            },
          },
          {
            name: 'delFlag',
            in: 'query',
            description: '删除标记,1:已删除,0:正常',
            required: false,
            schema: {
              type: 'string',
              description: '删除标记,1:已删除,0:正常',
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
    '/tenant/details/{id}': {
      get: {
        tags: ['租户管理'],
        operationId: 'getById',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              type: 'integer',
              format: 'int64',
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
    '/system/cache': {
      get: {
        tags: ['系统监控'],
        operationId: 'cache',
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
    '/system-config/page': {
      get: {
        tags: ['系统配置管理'],
        summary: '分页查询',
        description: '分页查询',
        operationId: 'getSysSystemConfigPage',
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
            name: 'configType',
            in: 'query',
            description: '配置类型',
            required: false,
            schema: {
              type: 'string',
              description: '配置类型',
            },
          },
          {
            name: 'configName',
            in: 'query',
            description: '配置名称',
            required: false,
            schema: {
              type: 'string',
              description: '配置名称',
            },
          },
          {
            name: 'configKey',
            in: 'query',
            description: '配置标识',
            required: false,
            schema: {
              type: 'string',
              description: '配置标识',
            },
          },
          {
            name: 'configValue',
            in: 'query',
            description: '配置值',
            required: false,
            schema: {
              type: 'string',
              description: '配置值',
            },
          },
          {
            name: 'configStatus',
            in: 'query',
            description: '开启状态',
            required: false,
            schema: {
              type: 'string',
              description: '开启状态',
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
            name: 'updateBy',
            in: 'query',
            description: '修改人',
            required: false,
            schema: {
              type: 'string',
              description: '修改人',
            },
          },
          {
            name: 'updateTime',
            in: 'query',
            description: '修改时间',
            required: false,
            schema: {
              type: 'string',
              format: 'date-time',
              description: '修改时间',
            },
          },
          {
            name: 'delFlag',
            in: 'query',
            description: '删除标记',
            required: false,
            schema: {
              type: 'string',
              description: '删除标记',
            },
          },
          {
            name: 'tenantId',
            in: 'query',
            description: '租户ID',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '租户ID',
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
    '/system-config/export': {
      get: {
        tags: ['系统配置管理'],
        operationId: 'export_2',
        parameters: [
          {
            name: 'sysSystemConfig',
            in: 'query',
            required: true,
            schema: {
              $ref: '#/components/schemas/SysSystemConfigEntity',
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
                    $ref: '#/components/schemas/SysSystemConfigEntity',
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
    '/system-config/details': {
      get: {
        tags: ['系统配置管理'],
        summary: '通过条件查询',
        description: '通过条件查询对象',
        operationId: 'getDetails_2',
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
            name: 'configType',
            in: 'query',
            description: '配置类型',
            required: false,
            schema: {
              type: 'string',
              description: '配置类型',
            },
          },
          {
            name: 'configName',
            in: 'query',
            description: '配置名称',
            required: false,
            schema: {
              type: 'string',
              description: '配置名称',
            },
          },
          {
            name: 'configKey',
            in: 'query',
            description: '配置标识',
            required: false,
            schema: {
              type: 'string',
              description: '配置标识',
            },
          },
          {
            name: 'configValue',
            in: 'query',
            description: '配置值',
            required: false,
            schema: {
              type: 'string',
              description: '配置值',
            },
          },
          {
            name: 'configStatus',
            in: 'query',
            description: '开启状态',
            required: false,
            schema: {
              type: 'string',
              description: '开启状态',
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
            name: 'updateBy',
            in: 'query',
            description: '修改人',
            required: false,
            schema: {
              type: 'string',
              description: '修改人',
            },
          },
          {
            name: 'updateTime',
            in: 'query',
            description: '修改时间',
            required: false,
            schema: {
              type: 'string',
              format: 'date-time',
              description: '修改时间',
            },
          },
          {
            name: 'delFlag',
            in: 'query',
            description: '删除标记',
            required: false,
            schema: {
              type: 'string',
              description: '删除标记',
            },
          },
          {
            name: 'tenantId',
            in: 'query',
            description: '租户ID',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '租户ID',
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
    '/sysSensitiveWord/remote/list/{type}': {
      get: {
        tags: ['敏感词管理'],
        summary: '查询所有敏感词',
        description: '查询所有敏感词',
        operationId: 'list_1',
        parameters: [
          {
            name: 'type',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
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
    '/sysSensitiveWord/refresh': {
      get: {
        tags: ['敏感词管理'],
        summary: '刷新敏感词缓存',
        description: '刷新敏感词缓存',
        operationId: 'refresh',
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
    '/sysSensitiveWord/page': {
      get: {
        tags: ['敏感词管理'],
        summary: '分页查询',
        description: '分页查询',
        operationId: 'getSysSensitiveWordPage',
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
            name: 'sensitiveId',
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
            name: 'sensitiveWord',
            in: 'query',
            description: '敏感词',
            required: false,
            schema: {
              type: 'string',
              description: '敏感词',
            },
          },
          {
            name: 'sensitiveType',
            in: 'query',
            description: '类型',
            required: false,
            schema: {
              type: 'string',
              description: '类型',
            },
          },
          {
            name: 'remark',
            in: 'query',
            description: '备注',
            required: false,
            schema: {
              type: 'string',
              description: '备注',
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
            name: 'updateBy',
            in: 'query',
            description: '修改人',
            required: false,
            schema: {
              type: 'string',
              description: '修改人',
            },
          },
          {
            name: 'updateTime',
            in: 'query',
            description: '修改时间',
            required: false,
            schema: {
              type: 'string',
              format: 'date-time',
              description: '修改时间',
            },
          },
          {
            name: 'delFlag',
            in: 'query',
            description: '删除标记',
            required: false,
            schema: {
              type: 'string',
              description: '删除标记',
            },
          },
          {
            name: 'tenantId',
            in: 'query',
            description: '租户ID',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '租户ID',
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
    '/sysSensitiveWord/export': {
      get: {
        tags: ['敏感词管理'],
        operationId: 'export_3',
        parameters: [
          {
            name: 'sysSensitiveWord',
            in: 'query',
            required: true,
            schema: {
              $ref: '#/components/schemas/SysSensitiveWordEntity',
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
                    $ref: '#/components/schemas/SysSensitiveWordEntity',
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
    '/sysSensitiveWord/details': {
      get: {
        tags: ['敏感词管理'],
        summary: '通过id查询',
        description: '通过id查询',
        operationId: 'getById_1',
        parameters: [
          {
            name: 'sensitiveId',
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
            name: 'sensitiveWord',
            in: 'query',
            description: '敏感词',
            required: false,
            schema: {
              type: 'string',
              description: '敏感词',
            },
          },
          {
            name: 'sensitiveType',
            in: 'query',
            description: '类型',
            required: false,
            schema: {
              type: 'string',
              description: '类型',
            },
          },
          {
            name: 'remark',
            in: 'query',
            description: '备注',
            required: false,
            schema: {
              type: 'string',
              description: '备注',
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
            name: 'updateBy',
            in: 'query',
            description: '修改人',
            required: false,
            schema: {
              type: 'string',
              description: '修改人',
            },
          },
          {
            name: 'updateTime',
            in: 'query',
            description: '修改时间',
            required: false,
            schema: {
              type: 'string',
              format: 'date-time',
              description: '修改时间',
            },
          },
          {
            name: 'delFlag',
            in: 'query',
            description: '删除标记',
            required: false,
            schema: {
              type: 'string',
              description: '删除标记',
            },
          },
          {
            name: 'tenantId',
            in: 'query',
            description: '租户ID',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '租户ID',
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
    '/sysMessage/{id}': {
      get: {
        tags: ['站内信息管理'],
        summary: '通过id查询',
        description: '通过id查询',
        operationId: 'getById_2',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              type: 'integer',
              format: 'int64',
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
    '/sysMessage/user/read/page': {
      get: {
        tags: ['站内信息管理'],
        summary: '查询用户阅读情况',
        description: '查询用户阅读情况',
        operationId: 'getUserMessageList',
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
            name: 'messageId',
            in: 'query',
            required: true,
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          {
            name: 'name',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
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
    '/sysMessage/user/page': {
      get: {
        tags: ['站内信息管理'],
        summary: '查询用户信',
        description: '查询用户信',
        operationId: 'getUserMessageList_1',
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
            name: 'sysMessage',
            in: 'query',
            required: true,
            schema: {
              $ref: '#/components/schemas/SysMessageVO',
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
    '/sysMessage/send/smsCode': {
      get: {
        tags: ['站内信息管理'],
        operationId: 'sendSmsCode',
        parameters: [
          {
            name: 'mobile',
            in: 'query',
            required: true,
            schema: {
              type: 'string',
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
    '/sysMessage/page': {
      get: {
        tags: ['站内信息管理'],
        summary: '分页查询',
        description: '分页查询',
        operationId: 'getSysMessagePage',
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
            name: 'category',
            in: 'query',
            description: '分类 0-公告 1-站内信',
            required: false,
            schema: {
              type: 'string',
              description: '分类 0-公告 1-站内信',
            },
          },
          {
            name: 'title',
            in: 'query',
            description: '标题',
            required: false,
            schema: {
              type: 'string',
              description: '标题',
            },
          },
          {
            name: 'content',
            in: 'query',
            description: '内容',
            required: false,
            schema: {
              type: 'string',
              description: '内容',
            },
          },
          {
            name: 'sendFlag',
            in: 'query',
            description: '是否推送',
            required: false,
            schema: {
              type: 'string',
              description: '是否推送',
            },
          },
          {
            name: 'allFlag',
            in: 'query',
            description: '通知全体',
            required: false,
            schema: {
              type: 'string',
              description: '通知全体',
            },
          },
          {
            name: 'sort',
            in: 'query',
            description: '排序 （越大越在前）',
            required: false,
            schema: {
              type: 'integer',
              format: 'int32',
              description: '排序 （越大越在前）',
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
            description: '删除时间',
            required: false,
            schema: {
              type: 'string',
              description: '删除时间',
            },
          },
          {
            name: 'tenantId',
            in: 'query',
            description: '租户',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '租户',
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
    '/sysMessage/list/hook': {
      get: {
        tags: ['站内信息管理'],
        operationId: 'listHookBizCode',
        parameters: [
          {
            name: 'messageHookDTO',
            in: 'query',
            required: true,
            schema: {
              $ref: '#/components/schemas/MessageHookDTO',
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
    '/sysMessage/export': {
      get: {
        tags: ['站内信息管理'],
        operationId: 'export_4',
        parameters: [
          {
            name: 'sysMessage',
            in: 'query',
            required: true,
            schema: {
              $ref: '#/components/schemas/SysMessageEntity',
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
                    $ref: '#/components/schemas/SysMessageEntity',
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
    '/sysArea/tree': {
      get: {
        tags: ['行政区划管理'],
        summary: '分页查询',
        description: '分页查询',
        operationId: 'getSysAreaTree',
        parameters: [
          {
            name: 'id',
            in: 'query',
            description: '主键ID',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '主键ID',
            },
          },
          {
            name: 'pid',
            in: 'query',
            description: '父ID',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '父ID',
            },
          },
          {
            name: 'name',
            in: 'query',
            description: '地区名称',
            required: false,
            schema: {
              type: 'string',
              description: '地区名称',
            },
          },
          {
            name: 'letter',
            in: 'query',
            description: '地区字母',
            required: false,
            schema: {
              type: 'string',
              description: '地区字母',
            },
          },
          {
            name: 'adcode',
            in: 'query',
            description: '地区code',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '地区code',
            },
          },
          {
            name: 'location',
            in: 'query',
            description: '经纬度',
            required: false,
            schema: {
              type: 'string',
              description: '经纬度',
            },
          },
          {
            name: 'areaSort',
            in: 'query',
            description: '排序值',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '排序值',
            },
          },
          {
            name: 'areaStatus',
            in: 'query',
            description: '0:未生效，1:生效',
            required: false,
            schema: {
              type: 'string',
              description: '0:未生效，1:生效',
            },
          },
          {
            name: 'areaType',
            in: 'query',
            description: '0:国家,1:省,2:城市,3:区县',
            required: false,
            schema: {
              type: 'string',
              description: '0:国家,1:省,2:城市,3:区县',
            },
          },
          {
            name: 'hot',
            in: 'query',
            description: '0:非热门，1:热门',
            required: false,
            schema: {
              type: 'string',
              description: '0:非热门，1:热门',
            },
          },
          {
            name: 'cityCode',
            in: 'query',
            description: '城市编码',
            required: false,
            schema: {
              type: 'string',
              description: '城市编码',
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
            name: 'updateBy',
            in: 'query',
            description: '更新时间',
            required: false,
            schema: {
              type: 'string',
              description: '更新时间',
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
            description: '删除标记',
            required: false,
            schema: {
              type: 'string',
              description: '删除标记',
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
    '/sysArea/page': {
      get: {
        tags: ['行政区划管理'],
        summary: '分页查询',
        description: '分页查询',
        operationId: 'getSysAreaPage',
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
            description: '主键ID',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '主键ID',
            },
          },
          {
            name: 'pid',
            in: 'query',
            description: '父ID',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '父ID',
            },
          },
          {
            name: 'name',
            in: 'query',
            description: '地区名称',
            required: false,
            schema: {
              type: 'string',
              description: '地区名称',
            },
          },
          {
            name: 'letter',
            in: 'query',
            description: '地区字母',
            required: false,
            schema: {
              type: 'string',
              description: '地区字母',
            },
          },
          {
            name: 'adcode',
            in: 'query',
            description: '地区code',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '地区code',
            },
          },
          {
            name: 'location',
            in: 'query',
            description: '经纬度',
            required: false,
            schema: {
              type: 'string',
              description: '经纬度',
            },
          },
          {
            name: 'areaSort',
            in: 'query',
            description: '排序值',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '排序值',
            },
          },
          {
            name: 'areaStatus',
            in: 'query',
            description: '0:未生效，1:生效',
            required: false,
            schema: {
              type: 'string',
              description: '0:未生效，1:生效',
            },
          },
          {
            name: 'areaType',
            in: 'query',
            description: '0:国家,1:省,2:城市,3:区县',
            required: false,
            schema: {
              type: 'string',
              description: '0:国家,1:省,2:城市,3:区县',
            },
          },
          {
            name: 'hot',
            in: 'query',
            description: '0:非热门，1:热门',
            required: false,
            schema: {
              type: 'string',
              description: '0:非热门，1:热门',
            },
          },
          {
            name: 'cityCode',
            in: 'query',
            description: '城市编码',
            required: false,
            schema: {
              type: 'string',
              description: '城市编码',
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
            name: 'updateBy',
            in: 'query',
            description: '更新时间',
            required: false,
            schema: {
              type: 'string',
              description: '更新时间',
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
            description: '删除标记',
            required: false,
            schema: {
              type: 'string',
              description: '删除标记',
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
    '/sysArea/export': {
      get: {
        tags: ['行政区划管理'],
        operationId: 'export_5',
        parameters: [
          {
            name: 'sysArea',
            in: 'query',
            required: true,
            schema: {
              $ref: '#/components/schemas/SysAreaEntity',
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
                    $ref: '#/components/schemas/SysAreaEntity',
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
    '/sysArea/details': {
      get: {
        tags: ['行政区划管理'],
        summary: '获取详细信息',
        description: '获取详细信息',
        operationId: 'getDetails_3',
        parameters: [
          {
            name: 'id',
            in: 'query',
            description: '主键ID',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '主键ID',
            },
          },
          {
            name: 'pid',
            in: 'query',
            description: '父ID',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '父ID',
            },
          },
          {
            name: 'name',
            in: 'query',
            description: '地区名称',
            required: false,
            schema: {
              type: 'string',
              description: '地区名称',
            },
          },
          {
            name: 'letter',
            in: 'query',
            description: '地区字母',
            required: false,
            schema: {
              type: 'string',
              description: '地区字母',
            },
          },
          {
            name: 'adcode',
            in: 'query',
            description: '地区code',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '地区code',
            },
          },
          {
            name: 'location',
            in: 'query',
            description: '经纬度',
            required: false,
            schema: {
              type: 'string',
              description: '经纬度',
            },
          },
          {
            name: 'areaSort',
            in: 'query',
            description: '排序值',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '排序值',
            },
          },
          {
            name: 'areaStatus',
            in: 'query',
            description: '0:未生效，1:生效',
            required: false,
            schema: {
              type: 'string',
              description: '0:未生效，1:生效',
            },
          },
          {
            name: 'areaType',
            in: 'query',
            description: '0:国家,1:省,2:城市,3:区县',
            required: false,
            schema: {
              type: 'string',
              description: '0:国家,1:省,2:城市,3:区县',
            },
          },
          {
            name: 'hot',
            in: 'query',
            description: '0:非热门，1:热门',
            required: false,
            schema: {
              type: 'string',
              description: '0:非热门，1:热门',
            },
          },
          {
            name: 'cityCode',
            in: 'query',
            description: '城市编码',
            required: false,
            schema: {
              type: 'string',
              description: '城市编码',
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
            name: 'updateBy',
            in: 'query',
            description: '更新时间',
            required: false,
            schema: {
              type: 'string',
              description: '更新时间',
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
            description: '删除标记',
            required: false,
            schema: {
              type: 'string',
              description: '删除标记',
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
    '/sys-file/page': {
      get: {
        tags: ['文件管理'],
        summary: '分页查询',
        description: '分页查询',
        operationId: 'getSysFilePage',
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
            description: '文件编号',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '文件编号',
            },
          },
          {
            name: 'fileName',
            in: 'query',
            description: '文件名',
            required: false,
            schema: {
              type: 'string',
              description: '文件名',
            },
          },
          {
            name: 'original',
            in: 'query',
            description: '原始文件名',
            required: false,
            schema: {
              type: 'string',
              description: '原始文件名',
            },
          },
          {
            name: 'bucketName',
            in: 'query',
            description: '存储桶名称',
            required: false,
            schema: {
              type: 'string',
              description: '存储桶名称',
            },
          },
          {
            name: 'dir',
            in: 'query',
            description: '文件夹',
            required: false,
            schema: {
              type: 'string',
              description: '文件夹',
            },
          },
          {
            name: 'type',
            in: 'query',
            description: '文件类型',
            required: false,
            schema: {
              type: 'string',
              description: '文件类型',
            },
          },
          {
            name: 'groupId',
            in: 'query',
            description: '文件组',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '文件组',
            },
          },
          {
            name: 'fileSize',
            in: 'query',
            description: '文件大小',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '文件大小',
            },
          },
          {
            name: 'hash',
            in: 'query',
            description: '文件hash',
            required: false,
            schema: {
              type: 'string',
              description: '文件hash',
            },
          },
          {
            name: 'createBy',
            in: 'query',
            description: '创建者',
            required: false,
            schema: {
              type: 'string',
              description: '创建者',
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
            name: 'updateBy',
            in: 'query',
            description: '更新者',
            required: false,
            schema: {
              type: 'string',
              description: '更新者',
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
            description: '删除标记,1:已删除,0:正常',
            required: false,
            schema: {
              type: 'string',
              description: '删除标记,1:已删除,0:正常',
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
    '/sys-file/oss/file': {
      get: {
        tags: ['文件管理'],
        operationId: 'file',
        parameters: [
          {
            name: 'fileName',
            in: 'query',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
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
    '/sys-file/local/file/{fileName}': {
      get: {
        tags: ['文件管理'],
        operationId: 'localFile',
        parameters: [
          {
            name: 'fileName',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
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
    '/sys-file/group/list': {
      get: {
        tags: ['文件管理'],
        operationId: 'listGroup',
        parameters: [
          {
            name: 'fileGroup',
            in: 'query',
            required: true,
            schema: {
              $ref: '#/components/schemas/SysFileGroup',
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
    '/social/{type}': {
      get: {
        tags: ['三方账号管理模块'],
        operationId: 'getByType',
        parameters: [
          {
            name: 'type',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
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
    '/social/page': {
      get: {
        tags: ['三方账号管理模块'],
        operationId: 'getSocialDetailsPage',
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
            name: 'type',
            in: 'query',
            description: '账号类型',
            required: true,
            schema: {
              type: 'string',
              description: '账号类型',
            },
          },
          {
            name: 'remark',
            in: 'query',
            description: '描述',
            required: false,
            schema: {
              type: 'string',
              description: '描述',
            },
          },
          {
            name: 'appId',
            in: 'query',
            description: 'appId',
            required: true,
            schema: {
              type: 'string',
              description: 'appId',
            },
          },
          {
            name: 'appSecret',
            in: 'query',
            description: 'app secret',
            required: true,
            schema: {
              type: 'string',
              description: 'app secret',
            },
          },
          {
            name: 'redirectUrl',
            in: 'query',
            description: '回调地址',
            required: false,
            schema: {
              type: 'string',
              description: '回调地址',
            },
          },
          {
            name: 'ext',
            in: 'query',
            description: '拓展字段',
            required: false,
            schema: {
              type: 'string',
              description: '拓展字段',
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
            name: 'updateBy',
            in: 'query',
            description: '修改人',
            required: false,
            schema: {
              type: 'string',
              description: '修改人',
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
            description: '删除标记,1:已删除,0:正常',
            required: false,
            schema: {
              type: 'string',
              description: '删除标记,1:已删除,0:正常',
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
    '/social/info/{inStr}': {
      get: {
        tags: ['三方账号管理模块'],
        operationId: 'getUserInfo',
        parameters: [
          {
            name: 'inStr',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
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
    '/social/getLoginAppList': {
      get: {
        tags: ['三方账号管理模块'],
        operationId: 'getLoginAppList',
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
    '/social/getById/{id}': {
      get: {
        tags: ['三方账号管理模块'],
        operationId: 'info_2',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              type: 'integer',
              format: 'int64',
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
    '/social/export': {
      get: {
        tags: ['三方账号管理模块'],
        operationId: 'export_6',
        parameters: [
          {
            name: 'sysSocialDetails',
            in: 'query',
            required: true,
            schema: {
              $ref: '#/components/schemas/SysSocialDetails',
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
                    $ref: '#/components/schemas/SysSocialDetails',
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
    '/schedule/{id}': {
      get: {
        tags: ['日程管理'],
        summary: '通过id查询',
        description: '通过id查询',
        operationId: 'getById_3',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              type: 'integer',
              format: 'int64',
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
    '/schedule/page': {
      get: {
        tags: ['日程管理'],
        summary: '分页查询',
        description: '分页查询',
        operationId: 'getSchedulePage',
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
            description: 'id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: 'id',
            },
          },
          {
            name: 'title',
            in: 'query',
            description: '标题',
            required: false,
            schema: {
              type: 'string',
              description: '标题',
            },
          },
          {
            name: 'scheduleType',
            in: 'query',
            description: '日程类型',
            required: false,
            schema: {
              type: 'string',
              description: '日程类型',
            },
          },
          {
            name: 'scheduleState',
            in: 'query',
            description: '状态',
            required: false,
            schema: {
              type: 'string',
              description: '状态',
            },
          },
          {
            name: 'content',
            in: 'query',
            description: '内容',
            required: false,
            schema: {
              type: 'string',
              description: '内容',
            },
          },
          {
            name: 'scheduleTime',
            in: 'query',
            description: '时间',
            required: false,
            schema: {
              type: 'string',
              format: 'date-time',
              description: '时间',
            },
          },
          {
            name: 'scheduleDate',
            in: 'query',
            description: '日期',
            required: false,
            schema: {
              type: 'string',
              format: 'date',
              description: '日期',
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
            name: 'updateBy',
            in: 'query',
            description: '修改人',
            required: false,
            schema: {
              type: 'string',
              description: '修改人',
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
            description: '删除标记',
            required: false,
            schema: {
              type: 'string',
              description: '删除标记',
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
    '/schedule/list': {
      get: {
        tags: ['日程管理'],
        summary: '列表查询',
        description: '列表查询',
        operationId: 'list_2',
        parameters: [
          {
            name: 'startDate',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              format: 'date',
            },
          },
          {
            name: 'endDate',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              format: 'date',
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
    '/schedule/export': {
      get: {
        tags: ['日程管理'],
        operationId: 'export_7',
        parameters: [
          {
            name: 'sysSchedule',
            in: 'query',
            required: true,
            schema: {
              $ref: '#/components/schemas/SysScheduleEntity',
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
                    $ref: '#/components/schemas/SysScheduleEntity',
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
    '/role/page': {
      get: {
        tags: ['角色管理模块'],
        operationId: 'getRolePage',
        parameters: [
          {
            name: 'page',
            in: 'query',
            required: true,
            schema: {
              $ref: '#/components/schemas/Page',
            },
          },
          {
            name: 'role',
            in: 'query',
            required: true,
            schema: {
              $ref: '#/components/schemas/SysRole',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/RIPageSysRoleWithCompanyVO',
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
    '/role/list': {
      get: {
        tags: ['角色管理模块'],
        operationId: 'listRoles',
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
    '/role/export': {
      get: {
        tags: ['角色管理模块'],
        operationId: 'export_8',
        parameters: [
          {
            name: 'sysRole',
            in: 'query',
            required: true,
            schema: {
              $ref: '#/components/schemas/SysRole',
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
                    $ref: '#/components/schemas/RoleExcelVO',
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
    '/role/details': {
      get: {
        tags: ['角色管理模块'],
        operationId: 'getDetails_4',
        parameters: [
          {
            name: 'roleId',
            in: 'query',
            description: '角色编号',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '角色编号',
            },
          },
          {
            name: 'roleName',
            in: 'query',
            description: '角色名称',
            required: true,
            schema: {
              type: 'string',
              description: '角色名称',
            },
          },
          {
            name: 'roleCode',
            in: 'query',
            description: '角色标识',
            required: true,
            schema: {
              type: 'string',
              description: '角色标识',
            },
          },
          {
            name: 'roleDesc',
            in: 'query',
            description: '角色描述',
            required: false,
            schema: {
              type: 'string',
              description: '角色描述',
            },
          },
          {
            name: 'companyId',
            in: 'query',
            description: '所属企业id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '所属企业id',
            },
          },
          {
            name: 'capacityType',
            in: 'query',
            description: '身份标识',
            required: false,
            schema: {
              type: 'string',
              description: '身份标识',
            },
          },
          {
            name: 'dsType',
            in: 'query',
            description: '数据权限类型',
            required: true,
            schema: {
              type: 'integer',
              format: 'int32',
              description: '数据权限类型',
            },
          },
          {
            name: 'dsScope',
            in: 'query',
            description: '数据权限作用范围',
            required: false,
            schema: {
              type: 'string',
              description: '数据权限作用范围',
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
            name: 'updateBy',
            in: 'query',
            description: '修改人',
            required: false,
            schema: {
              type: 'string',
              description: '修改人',
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
            name: 'updateTime',
            in: 'query',
            description: '修改时间',
            required: false,
            schema: {
              type: 'string',
              format: 'date-time',
              description: '修改时间',
            },
          },
          {
            name: 'delFlag',
            in: 'query',
            description: '删除标记,1:已删除,0:正常',
            required: false,
            schema: {
              type: 'string',
              description: '删除标记,1:已删除,0:正常',
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
    '/role/details/{id}': {
      get: {
        tags: ['角色管理模块'],
        operationId: 'getById_4',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              type: 'integer',
              format: 'int64',
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
    '/requestLogManage/page': {
      get: {
        tags: ['推送数据管理'],
        summary: '推送数据管理查询列表',
        description: '推送数据管理查询列表',
        operationId: 'page',
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
            name: 'minCreateTime',
            in: 'query',
            description: '制单日期范围开始时间',
            required: false,
            schema: {
              type: 'string',
              format: 'date-time',
              description: '制单日期范围开始时间',
            },
          },
          {
            name: 'maxCreateTime',
            in: 'query',
            description: '制单日期范围结束时间',
            required: false,
            schema: {
              type: 'string',
              format: 'date-time',
              description: '制单日期范围结束时间',
            },
          },
          {
            name: 'bizNo',
            in: 'query',
            description: '单据编号',
            required: false,
            schema: {
              type: 'string',
              description: '单据编号',
            },
          },
          {
            name: 'bizName',
            in: 'query',
            description: '单据名称',
            required: false,
            schema: {
              type: 'string',
              description: '单据名称',
            },
          },
          {
            name: 'requestResultType',
            in: 'query',
            description: '推送状态',
            required: false,
            schema: {
              type: 'integer',
              format: 'int32',
              description: '推送状态',
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
            name: 'createRecordCompany',
            in: 'query',
            description: '制单人公司',
            required: false,
            schema: {
              type: 'string',
              description: '制单人公司',
            },
          },
          {
            name: 'requestParams',
            in: 'query',
            description: '请求参数',
            required: false,
            schema: {
              type: 'string',
              description: '请求参数',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/RIPageRequestLogManagePageResVO',
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
    '/requestLogManage/getSwitchStatus': {
      get: {
        tags: ['推送数据管理'],
        summary: '获得数据推送开关',
        description: '获得数据推送开关',
        operationId: 'getSwitchStatus',
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
    '/post/page': {
      get: {
        tags: ['岗位信息表管理'],
        summary: '分页查询',
        description: '分页查询',
        operationId: 'getSysPostPage',
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
            name: 'postId',
            in: 'query',
            description: '岗位ID',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '岗位ID',
            },
          },
          {
            name: 'postCode',
            in: 'query',
            description: '岗位编码',
            required: true,
            schema: {
              type: 'string',
              description: '岗位编码',
            },
          },
          {
            name: 'postName',
            in: 'query',
            description: '岗位名称',
            required: true,
            schema: {
              type: 'string',
              description: '岗位名称',
            },
          },
          {
            name: 'postSort',
            in: 'query',
            description: '岗位排序',
            required: true,
            schema: {
              type: 'integer',
              format: 'int32',
              description: '岗位排序',
            },
          },
          {
            name: 'remark',
            in: 'query',
            description: '岗位描述',
            required: false,
            schema: {
              type: 'string',
              description: '岗位描述',
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
            name: 'updateBy',
            in: 'query',
            description: '修改人',
            required: false,
            schema: {
              type: 'string',
              description: '修改人',
            },
          },
          {
            name: 'delFlag',
            in: 'query',
            description: '是否删除  -1：已删除  0：正常',
            required: false,
            schema: {
              type: 'string',
              description: '是否删除  -1：已删除  0：正常',
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
    '/post/list': {
      get: {
        tags: ['岗位信息表管理'],
        operationId: 'listPosts',
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/RListSysPost',
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
    '/post/export': {
      get: {
        tags: ['岗位信息表管理'],
        operationId: 'export_9',
        parameters: [
          {
            name: 'post',
            in: 'query',
            required: true,
            schema: {
              $ref: '#/components/schemas/SysPost',
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
                    $ref: '#/components/schemas/PostExcelVO',
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
    '/post/details': {
      get: {
        tags: ['岗位信息表管理'],
        summary: '查询角色信息',
        description: '查询角色信息',
        operationId: 'getDetails_5',
        parameters: [
          {
            name: 'postId',
            in: 'query',
            description: '岗位ID',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '岗位ID',
            },
          },
          {
            name: 'postCode',
            in: 'query',
            description: '岗位编码',
            required: true,
            schema: {
              type: 'string',
              description: '岗位编码',
            },
          },
          {
            name: 'postName',
            in: 'query',
            description: '岗位名称',
            required: true,
            schema: {
              type: 'string',
              description: '岗位名称',
            },
          },
          {
            name: 'postSort',
            in: 'query',
            description: '岗位排序',
            required: true,
            schema: {
              type: 'integer',
              format: 'int32',
              description: '岗位排序',
            },
          },
          {
            name: 'remark',
            in: 'query',
            description: '岗位描述',
            required: false,
            schema: {
              type: 'string',
              description: '岗位描述',
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
            name: 'updateBy',
            in: 'query',
            description: '修改人',
            required: false,
            schema: {
              type: 'string',
              description: '修改人',
            },
          },
          {
            name: 'delFlag',
            in: 'query',
            description: '是否删除  -1：已删除  0：正常',
            required: false,
            schema: {
              type: 'string',
              description: '是否删除  -1：已删除  0：正常',
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
    '/post/details/{postId}': {
      get: {
        tags: ['岗位信息表管理'],
        summary: '通过id查询',
        description: '通过id查询',
        operationId: 'getById_5',
        parameters: [
          {
            name: 'postId',
            in: 'path',
            required: true,
            schema: {
              type: 'integer',
              format: 'int64',
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
    '/param/publicValues': {
      get: {
        tags: ['公共参数配置'],
        summary: '根据key查询公共参数值',
        description: '查询公共参数值',
        operationId: 'publicKeys',
        parameters: [
          {
            name: 'keys',
            in: 'query',
            required: true,
            schema: {
              type: 'array',
              items: {
                type: 'string',
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
    '/param/publicValue/{publicKey}': {
      get: {
        tags: ['公共参数配置'],
        summary: '根据key查询公共参数值',
        description: '查询公共参数值',
        operationId: 'publicKey',
        parameters: [
          {
            name: 'publicKey',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
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
    '/param/page': {
      get: {
        tags: ['公共参数配置'],
        summary: '分页查询',
        description: '分页查询',
        operationId: 'getSysPublicParamPage',
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
            name: 'publicId',
            in: 'query',
            description: '公共参数编号',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '公共参数编号',
            },
          },
          {
            name: 'publicName',
            in: 'query',
            description: '公共参数名称',
            required: true,
            schema: {
              type: 'string',
              description: '公共参数名称',
              example: '公共参数名称',
            },
            example: '公共参数名称',
          },
          {
            name: 'publicKey',
            in: 'query',
            description: '键[英文大写+下划线]',
            required: true,
            schema: {
              type: 'string',
              description: '键[英文大写+下划线]',
              example: 'PIGX_PUBLIC_KEY',
            },
            example: 'PIGX_PUBLIC_KEY',
          },
          {
            name: 'publicValue',
            in: 'query',
            description: '值',
            required: true,
            schema: {
              type: 'string',
              description: '值',
              example: '999',
            },
            example: 999,
          },
          {
            name: 'status',
            in: 'query',
            description: '标识[1有效；2无效]',
            required: false,
            schema: {
              type: 'string',
              description: '标识[1有效；2无效]',
              example: '1',
            },
            example: 1,
          },
          {
            name: 'validateCode',
            in: 'query',
            description: '编码',
            required: false,
            schema: {
              type: 'string',
              description: '编码',
              example: '^(PIG|PIGX)$',
            },
            example: '^(PIG|PIGX)$',
          },
          {
            name: 'systemFlag',
            in: 'query',
            description: '是否是系统内置',
            required: false,
            schema: {
              type: 'string',
              description: '是否是系统内置',
            },
          },
          {
            name: 'publicType',
            in: 'query',
            description: '类型[1-检索；2-原文...]',
            required: false,
            schema: {
              type: 'string',
              description: '类型[1-检索；2-原文...]',
              example: '1',
            },
            example: 1,
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
            name: 'updateBy',
            in: 'query',
            description: '修改人',
            required: false,
            schema: {
              type: 'string',
              description: '修改人',
            },
          },
          {
            name: 'delFlag',
            in: 'query',
            description: '删除标记,1:已删除,0:正常',
            required: false,
            schema: {
              type: 'string',
              description: '删除标记,1:已删除,0:正常',
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
    '/param/export': {
      get: {
        tags: ['公共参数配置'],
        operationId: 'export_10',
        parameters: [
          {
            name: 'param',
            in: 'query',
            required: true,
            schema: {
              $ref: '#/components/schemas/SysPublicParam',
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
                    $ref: '#/components/schemas/SysPublicParam',
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
    '/param/details': {
      get: {
        tags: ['公共参数配置'],
        operationId: 'getDetail',
        parameters: [
          {
            name: 'publicId',
            in: 'query',
            description: '公共参数编号',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '公共参数编号',
            },
          },
          {
            name: 'publicName',
            in: 'query',
            description: '公共参数名称',
            required: true,
            schema: {
              type: 'string',
              description: '公共参数名称',
              example: '公共参数名称',
            },
            example: '公共参数名称',
          },
          {
            name: 'publicKey',
            in: 'query',
            description: '键[英文大写+下划线]',
            required: true,
            schema: {
              type: 'string',
              description: '键[英文大写+下划线]',
              example: 'PIGX_PUBLIC_KEY',
            },
            example: 'PIGX_PUBLIC_KEY',
          },
          {
            name: 'publicValue',
            in: 'query',
            description: '值',
            required: true,
            schema: {
              type: 'string',
              description: '值',
              example: '999',
            },
            example: 999,
          },
          {
            name: 'status',
            in: 'query',
            description: '标识[1有效；2无效]',
            required: false,
            schema: {
              type: 'string',
              description: '标识[1有效；2无效]',
              example: '1',
            },
            example: 1,
          },
          {
            name: 'validateCode',
            in: 'query',
            description: '编码',
            required: false,
            schema: {
              type: 'string',
              description: '编码',
              example: '^(PIG|PIGX)$',
            },
            example: '^(PIG|PIGX)$',
          },
          {
            name: 'systemFlag',
            in: 'query',
            description: '是否是系统内置',
            required: false,
            schema: {
              type: 'string',
              description: '是否是系统内置',
            },
          },
          {
            name: 'publicType',
            in: 'query',
            description: '类型[1-检索；2-原文...]',
            required: false,
            schema: {
              type: 'string',
              description: '类型[1-检索；2-原文...]',
              example: '1',
            },
            example: 1,
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
            name: 'updateBy',
            in: 'query',
            description: '修改人',
            required: false,
            schema: {
              type: 'string',
              description: '修改人',
            },
          },
          {
            name: 'delFlag',
            in: 'query',
            description: '删除标记,1:已删除,0:正常',
            required: false,
            schema: {
              type: 'string',
              description: '删除标记,1:已删除,0:正常',
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
    '/param/details/{publicId}': {
      get: {
        tags: ['公共参数配置'],
        summary: '通过id查询公共参数',
        description: '通过id查询公共参数',
        operationId: 'getById_6',
        parameters: [
          {
            name: 'publicId',
            in: 'path',
            required: true,
            schema: {
              type: 'integer',
              format: 'int64',
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
    '/menu/tree': {
      get: {
        tags: ['菜单管理模块'],
        operationId: 'getTree_1',
        parameters: [
          {
            name: 'parentId',
            in: 'query',
            required: true,
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          {
            name: 'menuName',
            in: 'query',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'type',
            in: 'query',
            required: true,
            schema: {
              type: 'string',
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
    '/menu/tree/{roleId}': {
      get: {
        tags: ['菜单管理模块'],
        operationId: 'getRoleTree',
        parameters: [
          {
            name: 'roleId',
            in: 'path',
            required: true,
            schema: {
              type: 'integer',
              format: 'int64',
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
    '/menu/details': {
      get: {
        tags: ['菜单管理模块'],
        operationId: 'getDetails_6',
        parameters: [
          {
            name: 'menuId',
            in: 'query',
            description: '菜单id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '菜单id',
            },
          },
          {
            name: 'name',
            in: 'query',
            description: '菜单名称',
            required: true,
            schema: {
              type: 'string',
              description: '菜单名称',
            },
          },
          {
            name: 'code',
            in: 'query',
            description: '菜单编码',
            required: false,
            schema: {
              type: 'string',
              description: '菜单编码',
            },
          },
          {
            name: 'permission',
            in: 'query',
            description: '菜单权限标识',
            required: false,
            schema: {
              type: 'string',
              description: '菜单权限标识',
            },
          },
          {
            name: 'parentId',
            in: 'query',
            description: '菜单父id',
            required: true,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '菜单父id',
            },
          },
          {
            name: 'icon',
            in: 'query',
            description: '菜单图标',
            required: false,
            schema: {
              type: 'string',
              description: '菜单图标',
            },
          },
          {
            name: 'path',
            in: 'query',
            description: '前端路由标识路径',
            required: false,
            schema: {
              type: 'string',
              description: '前端路由标识路径',
            },
          },
          {
            name: 'component',
            in: 'query',
            description: '前端组件',
            required: false,
            schema: {
              type: 'string',
              description: '前端组件',
            },
          },
          {
            name: 'visible',
            in: 'query',
            description: '菜单是否显示',
            required: false,
            schema: {
              type: 'string',
              description: '菜单是否显示',
            },
          },
          {
            name: 'sortOrder',
            in: 'query',
            description: '排序值',
            required: false,
            schema: {
              type: 'integer',
              format: 'int32',
              description: '排序值',
            },
          },
          {
            name: 'menuType',
            in: 'query',
            description: '菜单类型,0:菜单 1:按钮',
            required: true,
            schema: {
              type: 'string',
              description: '菜单类型,0:菜单 1:按钮',
            },
          },
          {
            name: 'keepAlive',
            in: 'query',
            description: '路由缓冲',
            required: false,
            schema: {
              type: 'string',
              description: '路由缓冲',
            },
          },
          {
            name: 'embedded',
            in: 'query',
            description: '菜单是否内嵌',
            required: false,
            schema: {
              type: 'string',
              description: '菜单是否内嵌',
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
            name: 'updateBy',
            in: 'query',
            description: '修改人',
            required: false,
            schema: {
              type: 'string',
              description: '修改人',
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
            description: '删除标记,1:已删除,0:正常',
            required: false,
            schema: {
              type: 'string',
              description: '删除标记,1:已删除,0:正常',
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
    '/log/sum': {
      get: {
        tags: ['日志管理模块'],
        operationId: 'getLogSum',
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
    '/log/page': {
      get: {
        tags: ['日志管理模块'],
        operationId: 'getLogPage',
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
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          {
            name: 'logType',
            in: 'query',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'title',
            in: 'query',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'createBy',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'updateTime',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              format: 'date-time',
            },
          },
          {
            name: 'remoteAddr',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'userAgent',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'requestUri',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'method',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'params',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'body',
            in: 'query',
            required: false,
            schema: {
              type: 'object',
            },
          },
          {
            name: 'time',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          {
            name: 'exception',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'serviceId',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'createTime',
            in: 'query',
            required: false,
            schema: {
              type: 'array',
              items: {
                type: 'string',
                format: 'date-time',
              },
            },
          },
          {
            name: 'tenantId',
            in: 'query',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
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
    '/log/export': {
      get: {
        tags: ['日志管理模块'],
        operationId: 'export_11',
        parameters: [
          {
            name: 'sysLog',
            in: 'query',
            required: true,
            schema: {
              $ref: '#/components/schemas/SysLog',
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
                    $ref: '#/components/schemas/SysLog',
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
    '/i18n/page': {
      get: {
        tags: ['系统表-国际化管理'],
        summary: '分页查询',
        description: '分页查询',
        operationId: 'getsysI18nPage',
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
            description: 'id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: 'id',
            },
          },
          {
            name: 'name',
            in: 'query',
            description: 'name',
            required: false,
            schema: {
              type: 'string',
              description: 'name',
            },
          },
          {
            name: 'zhCn',
            in: 'query',
            description: '中文',
            required: false,
            schema: {
              type: 'string',
              description: '中文',
            },
          },
          {
            name: 'en',
            in: 'query',
            description: '英文',
            required: false,
            schema: {
              type: 'string',
              description: '英文',
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
            name: 'updateBy',
            in: 'query',
            description: '修改人',
            required: false,
            schema: {
              type: 'string',
              description: '修改人',
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
            description: '删除标记',
            required: false,
            schema: {
              type: 'string',
              description: '删除标记',
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
    '/i18n/info': {
      get: {
        tags: ['系统表-国际化管理'],
        summary: '获取系统配置-国际化',
        description: '获取系统配置-国际化',
        operationId: 'list_3',
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
    '/i18n/export': {
      get: {
        tags: ['系统表-国际化管理'],
        operationId: 'export_12',
        parameters: [
          {
            name: 'sysI18n',
            in: 'query',
            required: true,
            schema: {
              $ref: '#/components/schemas/SysI18nEntity',
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
                    $ref: '#/components/schemas/SysI18nEntity',
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
    '/i18n/details': {
      get: {
        tags: ['系统表-国际化管理'],
        operationId: 'getDetails_7',
        parameters: [
          {
            name: 'id',
            in: 'query',
            description: 'id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: 'id',
            },
          },
          {
            name: 'name',
            in: 'query',
            description: 'name',
            required: false,
            schema: {
              type: 'string',
              description: 'name',
            },
          },
          {
            name: 'zhCn',
            in: 'query',
            description: '中文',
            required: false,
            schema: {
              type: 'string',
              description: '中文',
            },
          },
          {
            name: 'en',
            in: 'query',
            description: '英文',
            required: false,
            schema: {
              type: 'string',
              description: '英文',
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
            name: 'updateBy',
            in: 'query',
            description: '修改人',
            required: false,
            schema: {
              type: 'string',
              description: '修改人',
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
            description: '删除标记',
            required: false,
            schema: {
              type: 'string',
              description: '删除标记',
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
    '/i18n/details/{id}': {
      get: {
        tags: ['系统表-国际化管理'],
        summary: '通过id查询',
        description: '通过id查询',
        operationId: 'getById_7',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              type: 'integer',
              format: 'int64',
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
    '/dict/type/{type}': {
      get: {
        tags: ['字典管理模块'],
        operationId: 'getDictByType',
        parameters: [
          {
            name: 'type',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/RListSysDictItem',
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
    '/dict/page': {
      get: {
        tags: ['字典管理模块'],
        operationId: 'getDictPage',
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
            description: '字典编号',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '字典编号',
            },
          },
          {
            name: 'dictType',
            in: 'query',
            description: '字典类型',
            required: false,
            schema: {
              type: 'string',
              description: '字典类型',
            },
          },
          {
            name: 'description',
            in: 'query',
            description: '字典描述',
            required: false,
            schema: {
              type: 'string',
              description: '字典描述',
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
            name: 'systemFlag',
            in: 'query',
            description: '是否系统内置',
            required: false,
            schema: {
              type: 'string',
              description: '是否系统内置',
            },
          },
          {
            name: 'remarks',
            in: 'query',
            description: '备注信息',
            required: false,
            schema: {
              type: 'string',
              description: '备注信息',
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
            name: 'updateBy',
            in: 'query',
            description: '修改人',
            required: false,
            schema: {
              type: 'string',
              description: '修改人',
            },
          },
          {
            name: 'delFlag',
            in: 'query',
            description: '删除标记,1:已删除,0:正常',
            required: false,
            schema: {
              type: 'string',
              description: '删除标记,1:已删除,0:正常',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/RIPage',
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
    '/dict/list': {
      get: {
        tags: ['字典管理模块'],
        operationId: 'getDictList',
        parameters: [
          {
            name: 'name',
            in: 'query',
            required: true,
            schema: {
              type: 'string',
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
    '/dict/item/page': {
      get: {
        tags: ['字典管理模块'],
        operationId: 'getSysDictItemPage',
        parameters: [
          {
            name: 'page',
            in: 'query',
            required: true,
            schema: {
              $ref: '#/components/schemas/Page',
            },
          },
          {
            name: 'sysDictItem',
            in: 'query',
            required: true,
            schema: {
              $ref: '#/components/schemas/SysDictItem',
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
    '/dict/item/details': {
      get: {
        tags: ['字典管理模块'],
        operationId: 'getDictItemDetails',
        parameters: [
          {
            name: 'query',
            in: 'query',
            required: true,
            schema: {
              $ref: '#/components/schemas/SysDictItem',
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
    '/dict/item/details/{id}': {
      get: {
        tags: ['字典管理模块'],
        operationId: 'getDictItemById',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              type: 'integer',
              format: 'int64',
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
    '/dict/export': {
      get: {
        tags: ['字典管理模块'],
        operationId: 'export_13',
        parameters: [
          {
            name: 'sysDictItem',
            in: 'query',
            required: true,
            schema: {
              $ref: '#/components/schemas/SysDictItem',
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
                    $ref: '#/components/schemas/SysDictItem',
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
    '/dict/details': {
      get: {
        tags: ['字典管理模块'],
        operationId: 'getDetails_8',
        parameters: [
          {
            name: 'id',
            in: 'query',
            description: '字典编号',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '字典编号',
            },
          },
          {
            name: 'dictType',
            in: 'query',
            description: '字典类型',
            required: false,
            schema: {
              type: 'string',
              description: '字典类型',
            },
          },
          {
            name: 'description',
            in: 'query',
            description: '字典描述',
            required: false,
            schema: {
              type: 'string',
              description: '字典描述',
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
            name: 'systemFlag',
            in: 'query',
            description: '是否系统内置',
            required: false,
            schema: {
              type: 'string',
              description: '是否系统内置',
            },
          },
          {
            name: 'remarks',
            in: 'query',
            description: '备注信息',
            required: false,
            schema: {
              type: 'string',
              description: '备注信息',
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
            name: 'updateBy',
            in: 'query',
            description: '修改人',
            required: false,
            schema: {
              type: 'string',
              description: '修改人',
            },
          },
          {
            name: 'delFlag',
            in: 'query',
            description: '删除标记,1:已删除,0:正常',
            required: false,
            schema: {
              type: 'string',
              description: '删除标记,1:已删除,0:正常',
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
    '/dict/details/{id}': {
      get: {
        tags: ['字典管理模块'],
        operationId: 'getById_8',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              type: 'integer',
              format: 'int64',
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
    '/dict/batch': {
      get: {
        tags: ['字典管理模块'],
        operationId: 'batchGetDictByType',
        parameters: [
          {
            name: 'types',
            in: 'query',
            required: true,
            schema: {
              type: 'array',
              items: {
                type: 'string',
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
                  $ref: '#/components/schemas/RMapStringListSysDictItem',
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
    '/dept/{id}': {
      get: {
        tags: ['部门管理模块'],
        operationId: 'getById_9',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              type: 'integer',
              format: 'int64',
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
      delete: {
        tags: ['部门管理模块'],
        operationId: 'removeById_14',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              type: 'integer',
              format: 'int64',
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
    '/dept/tree': {
      get: {
        tags: ['部门管理模块'],
        operationId: 'getTree_2',
        parameters: [
          {
            name: 'deptName',
            in: 'query',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'parentId',
            in: 'query',
            required: true,
            schema: {
              type: 'integer',
              format: 'int64',
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
    '/dept/org': {
      get: {
        tags: ['部门管理模块'],
        operationId: 'listOrgTree',
        parameters: [
          {
            name: 'parentDeptId',
            in: 'query',
            required: true,
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          {
            name: 'type',
            in: 'query',
            required: true,
            schema: {
              type: 'string',
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
    '/dept/org/user/search': {
      get: {
        tags: ['部门管理模块'],
        operationId: 'getOrgTreeUser',
        parameters: [
          {
            name: 'username',
            in: 'query',
            required: true,
            schema: {
              type: 'string',
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
    '/dept/list': {
      get: {
        tags: ['部门管理模块'],
        operationId: 'list_4',
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
    '/dept/leader/{deptId}': {
      get: {
        tags: ['部门管理模块'],
        operationId: 'getAllDeptLeader',
        parameters: [
          {
            name: 'deptId',
            in: 'path',
            required: true,
            schema: {
              type: 'integer',
              format: 'int64',
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
    '/dept/getDescendantList/{deptId}': {
      get: {
        tags: ['部门管理模块'],
        operationId: 'getDescendantList',
        parameters: [
          {
            name: 'deptId',
            in: 'path',
            required: true,
            schema: {
              type: 'integer',
              format: 'int64',
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
    '/dept/export': {
      get: {
        tags: ['部门管理模块'],
        operationId: 'export_14',
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/DeptExcelVO',
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
    '/company/page': {
      get: {
        tags: ['企业管理表管理'],
        summary: '企业分页查询',
        description: '企业分页查询',
        operationId: 'getCompanyPage',
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
            name: 'name',
            in: 'query',
            description: '企业名称',
            required: false,
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
                  $ref: '#/components/schemas/RIPageCompanyPageResVO',
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
    '/company/detail': {
      get: {
        tags: ['企业管理表管理'],
        summary: '企业详情查询',
        description: '企业详情查询',
        operationId: 'detail',
        parameters: [
          {
            name: 'id',
            in: 'query',
            description: '企业管理表id',
            required: true,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '企业管理表id',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/RCompanyDetailResVO',
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
    '/client/{clientId}': {
      get: {
        tags: ['客户端管理模块'],
        operationId: 'getByClientId',
        parameters: [
          {
            name: 'clientId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
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
    '/client/page': {
      get: {
        tags: ['客户端管理模块'],
        operationId: 'getOauthClientDetailsPage',
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
            description: 'id',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: 'id',
            },
          },
          {
            name: 'clientId',
            in: 'query',
            description: '客户端id',
            required: true,
            schema: {
              type: 'string',
              description: '客户端id',
            },
          },
          {
            name: 'clientSecret',
            in: 'query',
            description: '客户端密钥',
            required: true,
            schema: {
              type: 'string',
              description: '客户端密钥',
            },
          },
          {
            name: 'resourceIds',
            in: 'query',
            description: '资源id列表',
            required: false,
            schema: {
              type: 'string',
              description: '资源id列表',
            },
          },
          {
            name: 'scope',
            in: 'query',
            description: '作用域',
            required: true,
            schema: {
              type: 'string',
              description: '作用域',
            },
          },
          {
            name: 'authorizedGrantTypes',
            in: 'query',
            description: '授权方式',
            required: false,
            schema: {
              type: 'array',
              description: '授权方式',
              items: {
                type: 'string',
                description: '授权方式',
              },
            },
          },
          {
            name: 'webServerRedirectUri',
            in: 'query',
            description: '回调地址',
            required: false,
            schema: {
              type: 'string',
              description: '回调地址',
            },
          },
          {
            name: 'authorities',
            in: 'query',
            description: '权限列表',
            required: false,
            schema: {
              type: 'string',
              description: '权限列表',
            },
          },
          {
            name: 'accessTokenValidity',
            in: 'query',
            description: '请求令牌有效时间',
            required: false,
            schema: {
              type: 'integer',
              format: 'int32',
              description: '请求令牌有效时间',
            },
          },
          {
            name: 'refreshTokenValidity',
            in: 'query',
            description: '刷新令牌有效时间',
            required: false,
            schema: {
              type: 'integer',
              format: 'int32',
              description: '刷新令牌有效时间',
            },
          },
          {
            name: 'additionalInformation',
            in: 'query',
            description: '扩展信息',
            required: false,
            schema: {
              type: 'string',
              description: '扩展信息',
            },
          },
          {
            name: 'autoapprove',
            in: 'query',
            description: '是否自动放行',
            required: false,
            schema: {
              type: 'string',
              description: '是否自动放行',
            },
          },
          {
            name: 'delFlag',
            in: 'query',
            description: '删除标记,1:已删除,0:正常',
            required: false,
            schema: {
              type: 'string',
              description: '删除标记,1:已删除,0:正常',
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
            name: 'updateBy',
            in: 'query',
            description: '修改人',
            required: false,
            schema: {
              type: 'string',
              description: '修改人',
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
    '/client/list': {
      get: {
        tags: ['客户端管理模块'],
        operationId: 'listClients',
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
    '/client/getClientDetailsById/{clientId}': {
      get: {
        tags: ['客户端管理模块'],
        operationId: 'getClientDetailsById',
        parameters: [
          {
            name: 'clientId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
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
    '/client/export': {
      get: {
        tags: ['客户端管理模块'],
        operationId: 'export_15',
        parameters: [
          {
            name: 'sysOauthClientDetails',
            in: 'query',
            required: true,
            schema: {
              $ref: '#/components/schemas/SysOauthClientDetails',
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
                    $ref: '#/components/schemas/SysOauthClientDetails',
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
    '/client/company/updateUserLastLoginTime': {
      get: {
        tags: ['企业微服务管理表-微服务调用接口'],
        operationId: 'updateUserLastLoginTime',
        parameters: [
          {
            name: 'companyId',
            in: 'query',
            required: true,
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          {
            name: 'capacityType',
            in: 'query',
            required: true,
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
        ],
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
    '/client/company/saveCompanyCapacityType': {
      get: {
        tags: ['企业微服务管理表-微服务调用接口'],
        operationId: 'saveCompanyCapacityType',
        parameters: [
          {
            name: 'companyId',
            in: 'query',
            required: true,
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          {
            name: 'capacityType',
            in: 'query',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
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
    '/client/company/getCompany': {
      get: {
        tags: ['企业微服务管理表-微服务调用接口'],
        operationId: 'getCompany',
        parameters: [
          {
            name: 'id',
            in: 'query',
            required: true,
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/RCompanyDetailResVO',
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
    '/audit/{id}': {
      get: {
        tags: ['审计记录表管理'],
        summary: '通过id查询',
        description: '通过id查询',
        operationId: 'getById_10',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              type: 'integer',
              format: 'int64',
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
    '/audit/page': {
      get: {
        tags: ['审计记录表管理'],
        summary: '分页查询',
        description: '分页查询',
        operationId: 'getsysAuditLogPage',
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
            name: 'auditName',
            in: 'query',
            description: '审计名称',
            required: false,
            schema: {
              type: 'string',
              description: '审计名称',
            },
          },
          {
            name: 'auditField',
            in: 'query',
            description: '字段名称',
            required: false,
            schema: {
              type: 'string',
              description: '字段名称',
            },
          },
          {
            name: 'beforeVal',
            in: 'query',
            description: '变更前值',
            required: false,
            schema: {
              type: 'string',
              description: '变更前值',
            },
          },
          {
            name: 'afterVal',
            in: 'query',
            description: '变更后值',
            required: false,
            schema: {
              type: 'string',
              description: '变更后值',
            },
          },
          {
            name: 'createBy',
            in: 'query',
            description: '操作人',
            required: false,
            schema: {
              type: 'string',
              description: '操作人',
            },
          },
          {
            name: 'createTime',
            in: 'query',
            description: '操作时间',
            required: false,
            schema: {
              type: 'string',
              format: 'date-time',
              description: '操作时间',
            },
          },
          {
            name: 'delFlag',
            in: 'query',
            description: '删除标记',
            required: false,
            schema: {
              type: 'string',
              description: '删除标记',
            },
          },
          {
            name: 'tenantId',
            in: 'query',
            description: '租户ID',
            required: false,
            schema: {
              type: 'integer',
              format: 'int64',
              description: '租户ID',
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
    '/audit/export': {
      get: {
        tags: ['审计记录表管理'],
        operationId: 'export_16',
        parameters: [
          {
            name: 'sysAuditLog',
            in: 'query',
            required: true,
            schema: {
              $ref: '#/components/schemas/SysAuditLog',
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
                    $ref: '#/components/schemas/SysAuditLog',
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
    '/tenant/remove-users': {
      delete: {
        tags: ['租户管理'],
        operationId: 'removeUserTenantById',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SysTenantUserDTO',
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
    '/sys-token/delete': {
      delete: {
        tags: ['令牌管理模块'],
        operationId: 'removeById_15',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  type: 'string',
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
    '/sys-file': {
      delete: {
        tags: ['文件管理'],
        summary: '通过id删除文件管理',
        description: '通过id删除文件管理',
        operationId: 'removeById_16',
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
    '/sys-file/group/delete/{id}': {
      delete: {
        tags: ['文件管理'],
        operationId: 'updateGroup_1',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              type: 'integer',
              format: 'int64',
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
    '/route/{routeId}': {
      delete: {
        tags: ['动态路由管理模块'],
        operationId: 'deleteRoute',
        parameters: [
          {
            name: 'routeId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
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
    '/menu/{id}': {
      delete: {
        tags: ['菜单管理模块'],
        operationId: 'removeById_17',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              type: 'integer',
              format: 'int64',
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
    '/log': {
      delete: {
        tags: ['日志管理模块'],
        operationId: 'removeByIds',
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
    '/dict/item/{id}': {
      delete: {
        tags: ['字典管理模块'],
        operationId: 'removeDictItemById',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              type: 'integer',
              format: 'int64',
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
    '/audit/delete': {
      delete: {
        tags: ['审计记录表管理'],
        summary: '通过id删除审计记录表',
        description: '通过id删除审计记录表',
        operationId: 'removeById_18',
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
    '/sys-token/page': {
      get: {
        tags: ['令牌管理模块'],
        operationId: 'getTokenPage',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                additionalProperties: {
                  type: 'object',
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
      put: {
        tags: ['令牌管理模块'],
        operationId: 'getTokenPage_2',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                additionalProperties: {
                  type: 'object',
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
      post: {
        tags: ['令牌管理模块'],
        operationId: 'getTokenPage_1',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                additionalProperties: {
                  type: 'object',
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
      delete: {
        tags: ['令牌管理模块'],
        operationId: 'getTokenPage_3',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                additionalProperties: {
                  type: 'object',
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
      options: {
        tags: ['令牌管理模块'],
        operationId: 'getTokenPage_6',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                additionalProperties: {
                  type: 'object',
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
      head: {
        tags: ['令牌管理模块'],
        operationId: 'getTokenPage_5',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                additionalProperties: {
                  type: 'object',
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
      patch: {
        tags: ['令牌管理模块'],
        operationId: 'getTokenPage_4',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                additionalProperties: {
                  type: 'object',
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
    '/sse/info': {
      get: {
        tags: ['sse-emitter-endpoint'],
        operationId: 'info_3',
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/SseEmitter',
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
      },
      put: {
        tags: ['sse-emitter-endpoint'],
        operationId: 'info_5',
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/SseEmitter',
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
      },
      post: {
        tags: ['sse-emitter-endpoint'],
        operationId: 'info_4',
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/SseEmitter',
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
      },
      delete: {
        tags: ['sse-emitter-endpoint'],
        operationId: 'info_6',
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/SseEmitter',
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
      },
      options: {
        tags: ['sse-emitter-endpoint'],
        operationId: 'info_9',
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/SseEmitter',
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
      },
      head: {
        tags: ['sse-emitter-endpoint'],
        operationId: 'info_8',
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/SseEmitter',
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
      },
      patch: {
        tags: ['sse-emitter-endpoint'],
        operationId: 'info_7',
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/SseEmitter',
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
          expandMap: {
            type: 'object',
            additionalProperties: {
              type: 'object',
            },
            description: '数据',
          },
          ok: {
            type: 'boolean',
            readOnly: true,
          },
        },
      },
      UserDTO: {
        type: 'object',
        description: '系统用户传输对象',
        properties: {
          userId: {
            type: 'integer',
            format: 'int64',
            description: '主键id',
          },
          username: {
            type: 'string',
            description: '用户名',
          },
          password: {
            type: 'string',
            description: '密码',
          },
          createBy: {
            type: 'string',
            description: '创建人',
          },
          updateBy: {
            type: 'string',
            description: '修改人',
          },
          createTime: {
            type: 'string',
            format: 'date-time',
            description: '创建时间',
          },
          updateTime: {
            type: 'string',
            format: 'date-time',
            description: '修改时间',
          },
          delFlag: {
            type: 'string',
            description: '删除标记,1:已删除,0:正常',
          },
          lockFlag: {
            type: 'string',
            description: '锁定标记',
          },
          passwordExpireFlag: {
            type: 'string',
            description: '密码过期标记',
          },
          passwordModifyTime: {
            type: 'string',
            format: 'date-time',
            description: '密码修改时间',
          },
          phone: {
            type: 'string',
            description: '手机号',
          },
          avatar: {
            type: 'string',
            description: '头像地址',
          },
          tenantId: {
            type: 'integer',
            format: 'int64',
            description: '用户所属租户id',
          },
          wxOpenid: {
            type: 'string',
            description: '微信openid',
          },
          wxCpUserid: {
            type: 'string',
            description: '企微微信 userid',
          },
          wxDingUserid: {
            type: 'string',
            description: '钉钉 userid',
          },
          miniOpenid: {
            type: 'string',
            description: '微信小程序openid',
          },
          qqOpenid: {
            type: 'string',
            description: 'QQ openid',
          },
          giteeLogin: {
            type: 'string',
            description: '码云唯一标识',
          },
          oscId: {
            type: 'string',
            description: '开源中国唯一标识',
          },
          nickname: {
            type: 'string',
            description: '昵称',
          },
          name: {
            type: 'string',
            description: '姓名',
          },
          email: {
            type: 'string',
            description: '邮箱',
          },
          userType: {
            type: 'integer',
            format: 'int32',
            description: '用户类型',
          },
          role: {
            type: 'array',
            description: '角色id集合',
            items: {
              type: 'integer',
              format: 'int64',
            },
          },
          deptId: {
            type: 'integer',
            format: 'int64',
            description: '部门id',
          },
          post: {
            type: 'array',
            items: {
              type: 'integer',
              format: 'int64',
            },
          },
          newpassword1: {
            type: 'string',
            description: '新密码',
          },
          companyId: {
            type: 'integer',
            format: 'int64',
            description: '企业id',
          },
          userTypeEnum: {
            type: 'string',
            description: '用户类型，普通用户，司机',
            enum: ['other', 'driver'],
          },
          companyName: {
            type: 'string',
            description: '企业名称',
          },
        },
      },
      SysTenant: {
        type: 'object',
        description: '租户信息',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
            description: '租户id',
          },
          name: {
            type: 'string',
            description: '租户名称',
          },
          code: {
            type: 'string',
            description: '租户编号',
          },
          tenantDomain: {
            type: 'string',
            description: '租户域名',
          },
          websiteName: {
            type: 'string',
            description: '网站名称',
          },
          logo: {
            type: 'string',
            description: 'logo',
          },
          footer: {
            type: 'string',
            description: 'footer',
          },
          miniQr: {
            type: 'string',
            description: '移动端二维码',
          },
          background: {
            type: 'string',
            description: '登录页图片',
          },
          startTime: {
            type: 'string',
            format: 'date-time',
            description: '开始时间',
          },
          endTime: {
            type: 'string',
            format: 'date-time',
            description: '结束时间',
          },
          status: {
            type: 'string',
            description: '租户冻结标记,9:冻结,0:正常',
          },
          menuId: {
            type: 'string',
            description: '租户菜单ID',
          },
          createBy: {
            type: 'string',
            description: '创建人',
          },
          updateBy: {
            type: 'string',
            description: '修改人',
          },
          delFlag: {
            type: 'string',
            description: '删除标记,1:已删除,0:正常',
          },
          createTime: {
            type: 'string',
            format: 'date-time',
            description: '创建时间',
          },
          updateTime: {
            type: 'string',
            format: 'date-time',
            description: '更新时间',
          },
        },
      },
      SysSystemConfigEntity: {
        type: 'object',
        description: '系统配置',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
            description: '主键',
          },
          configType: {
            type: 'string',
            description: '配置类型',
          },
          configName: {
            type: 'string',
            description: '配置名称',
          },
          configKey: {
            type: 'string',
            description: '配置标识',
          },
          configValue: {
            type: 'string',
            description: '配置值',
          },
          configStatus: {
            type: 'string',
            description: '开启状态',
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
          updateBy: {
            type: 'string',
            description: '修改人',
          },
          updateTime: {
            type: 'string',
            format: 'date-time',
            description: '修改时间',
          },
          delFlag: {
            type: 'string',
            description: '删除标记',
          },
          tenantId: {
            type: 'integer',
            format: 'int64',
            description: '租户ID',
          },
        },
      },
      SysSensitiveWordEntity: {
        type: 'object',
        description: '敏感词',
        properties: {
          sensitiveId: {
            type: 'integer',
            format: 'int64',
            description: '主键',
          },
          sensitiveWord: {
            type: 'string',
            description: '敏感词',
          },
          sensitiveType: {
            type: 'string',
            description: '类型',
          },
          remark: {
            type: 'string',
            description: '备注',
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
          updateBy: {
            type: 'string',
            description: '修改人',
          },
          updateTime: {
            type: 'string',
            format: 'date-time',
            description: '修改时间',
          },
          delFlag: {
            type: 'string',
            description: '删除标记',
          },
          tenantId: {
            type: 'integer',
            format: 'int64',
            description: '租户ID',
          },
        },
      },
      OrgTreeVO: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
          },
          name: {
            type: 'string',
          },
          type: {
            type: 'string',
          },
          selected: {
            type: 'boolean',
          },
          avatar: {
            type: 'string',
          },
        },
      },
      SysMessageVO: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
            description: '主键',
          },
          category: {
            type: 'string',
            description: '分类 0-公告 1-站内信',
          },
          title: {
            type: 'string',
            description: '标题',
          },
          content: {
            type: 'string',
            description: '内容',
          },
          sendFlag: {
            type: 'string',
            description: '是否推送',
          },
          allFlag: {
            type: 'string',
            description: '通知全体',
          },
          sort: {
            type: 'integer',
            format: 'int32',
            description: '排序 （越大越在前）',
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
            description: '删除时间',
          },
          tenantId: {
            type: 'integer',
            format: 'int64',
            description: '租户',
          },
          readFlag: {
            type: 'string',
          },
          userList: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/OrgTreeVO',
            },
          },
        },
      },
      SysAreaEntity: {
        type: 'object',
        description: '行政区划表',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
            description: '主键ID',
          },
          pid: {
            type: 'integer',
            format: 'int64',
            description: '父ID',
          },
          name: {
            type: 'string',
            description: '地区名称',
          },
          letter: {
            type: 'string',
            description: '地区字母',
          },
          adcode: {
            type: 'integer',
            format: 'int64',
            description: '地区code',
          },
          location: {
            type: 'string',
            description: '经纬度',
          },
          areaSort: {
            type: 'integer',
            format: 'int64',
            description: '排序值',
          },
          areaStatus: {
            type: 'string',
            description: '0:未生效，1:生效',
          },
          areaType: {
            type: 'string',
            description: '0:国家,1:省,2:城市,3:区县',
          },
          hot: {
            type: 'string',
            description: '0:非热门，1:热门',
          },
          cityCode: {
            type: 'string',
            description: '城市编码',
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
          updateBy: {
            type: 'string',
            description: '更新时间',
          },
          updateTime: {
            type: 'string',
            format: 'date-time',
            description: '更新时间',
          },
          delFlag: {
            type: 'string',
            description: '删除标记',
          },
        },
      },
      SysFile: {
        type: 'object',
        description: '文件',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
            description: '文件编号',
          },
          fileName: {
            type: 'string',
            description: '文件名',
          },
          original: {
            type: 'string',
            description: '原始文件名',
          },
          bucketName: {
            type: 'string',
            description: '存储桶名称',
          },
          dir: {
            type: 'string',
            description: '文件夹',
          },
          type: {
            type: 'string',
            description: '文件类型',
          },
          groupId: {
            type: 'integer',
            format: 'int64',
            description: '文件组',
          },
          fileSize: {
            type: 'integer',
            format: 'int64',
            description: '文件大小',
          },
          hash: {
            type: 'string',
            description: '文件hash',
          },
          createBy: {
            type: 'string',
            description: '创建者',
          },
          createTime: {
            type: 'string',
            format: 'date-time',
            description: '创建时间',
          },
          updateBy: {
            type: 'string',
            description: '更新者',
          },
          updateTime: {
            type: 'string',
            format: 'date-time',
            description: '更新时间',
          },
          delFlag: {
            type: 'string',
            description: '删除标记,1:已删除,0:正常',
          },
        },
      },
      SysFileGroup: {
        type: 'object',
        description: '文件',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
            description: '主键ID',
          },
          pid: {
            type: 'integer',
            format: 'int64',
            description: '父级ID',
          },
          type: {
            type: 'integer',
            format: 'int64',
            description: '分类类型: [10=图片,20=视频]',
          },
          name: {
            type: 'string',
            description: '分类名称',
          },
          createBy: {
            type: 'string',
            description: '创建者',
          },
          createTime: {
            type: 'string',
            format: 'date-time',
            description: '创建时间',
          },
          updateBy: {
            type: 'string',
            description: '更新者',
          },
          updateTime: {
            type: 'string',
            format: 'date-time',
            description: '更新时间',
          },
          delFlag: {
            type: 'string',
            description: '删除标记,1:已删除,0:正常',
          },
        },
      },
      SysFileGroupDTO: {
        type: 'object',
        properties: {
          groupId: {
            type: 'integer',
            format: 'int64',
          },
          ids: {
            type: 'array',
            items: {
              type: 'integer',
              format: 'int64',
            },
          },
        },
      },
      SysSocialDetails: {
        type: 'object',
        description: '第三方账号信息',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
            description: '主键',
          },
          type: {
            type: 'string',
            description: '账号类型',
          },
          remark: {
            type: 'string',
            description: '描述',
          },
          appId: {
            type: 'string',
            description: 'appId',
          },
          appSecret: {
            type: 'string',
            description: 'app secret',
          },
          redirectUrl: {
            type: 'string',
            description: '回调地址',
          },
          ext: {
            type: 'string',
            description: '拓展字段',
          },
          createBy: {
            type: 'string',
            description: '创建人',
          },
          updateBy: {
            type: 'string',
            description: '修改人',
          },
          createTime: {
            type: 'string',
            format: 'date-time',
            description: '创建时间',
          },
          updateTime: {
            type: 'string',
            format: 'date-time',
            description: '更新时间',
          },
          delFlag: {
            type: 'string',
            description: '删除标记,1:已删除,0:正常',
          },
        },
        required: ['appId', 'appSecret', 'type'],
      },
      LocalTime: {
        type: 'object',
        properties: {
          hour: {
            type: 'integer',
            format: 'int32',
          },
          minute: {
            type: 'integer',
            format: 'int32',
          },
          second: {
            type: 'integer',
            format: 'int32',
          },
          nano: {
            type: 'integer',
            format: 'int32',
          },
        },
      },
      SysScheduleEntity: {
        type: 'object',
        description: '日程',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
            description: 'id',
          },
          title: {
            type: 'string',
            description: '标题',
          },
          scheduleType: {
            type: 'string',
            description: '日程类型',
          },
          scheduleState: {
            type: 'string',
            description: '状态',
          },
          content: {
            type: 'string',
            description: '内容',
          },
          scheduleTime: {
            $ref: '#/components/schemas/LocalTime',
            description: '时间',
          },
          scheduleDate: {
            type: 'string',
            format: 'date',
            description: '日期',
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
          updateBy: {
            type: 'string',
            description: '修改人',
          },
          updateTime: {
            type: 'string',
            format: 'date-time',
            description: '更新时间',
          },
          delFlag: {
            type: 'string',
            description: '删除标记',
          },
        },
      },
      SysRole: {
        type: 'object',
        description: '角色',
        properties: {
          roleId: {
            type: 'integer',
            format: 'int64',
            description: '角色编号',
          },
          roleName: {
            type: 'string',
            description: '角色名称',
          },
          roleCode: {
            type: 'string',
            description: '角色标识',
          },
          roleDesc: {
            type: 'string',
            description: '角色描述',
          },
          companyId: {
            type: 'integer',
            format: 'int64',
            description: '所属企业id',
          },
          capacityType: {
            type: 'string',
            description: '身份标识',
          },
          dsType: {
            type: 'integer',
            format: 'int32',
            description: '数据权限类型',
          },
          dsScope: {
            type: 'string',
            description: '数据权限作用范围',
          },
          createBy: {
            type: 'string',
            description: '创建人',
          },
          updateBy: {
            type: 'string',
            description: '修改人',
          },
          createTime: {
            type: 'string',
            format: 'date-time',
            description: '创建时间',
          },
          updateTime: {
            type: 'string',
            format: 'date-time',
            description: '修改时间',
          },
          delFlag: {
            type: 'string',
            description: '删除标记,1:已删除,0:正常',
          },
        },
        required: ['dsType', 'roleCode', 'roleName'],
      },
      RoleMenuVO: {
        type: 'object',
        description: '前端角色展示对象',
        properties: {
          roleId: {
            type: 'integer',
            format: 'int64',
          },
          menuIds: {
            type: 'string',
          },
        },
      },
      SysPost: {
        type: 'object',
        description: '岗位信息表',
        properties: {
          postId: {
            type: 'integer',
            format: 'int64',
            description: '岗位ID',
          },
          postCode: {
            type: 'string',
            description: '岗位编码',
          },
          postName: {
            type: 'string',
            description: '岗位名称',
          },
          postSort: {
            type: 'integer',
            format: 'int32',
            description: '岗位排序',
          },
          remark: {
            type: 'string',
            description: '岗位描述',
          },
          createBy: {
            type: 'string',
            description: '创建人',
          },
          updateBy: {
            type: 'string',
            description: '修改人',
          },
          delFlag: {
            type: 'string',
            description: '是否删除  -1：已删除  0：正常',
          },
          createTime: {
            type: 'string',
            format: 'date-time',
            description: '创建时间',
          },
          updateTime: {
            type: 'string',
            format: 'date-time',
            description: '更新时间',
          },
        },
        required: ['postCode', 'postName', 'postSort'],
      },
      SysPublicParam: {
        type: 'object',
        description: '公共参数',
        properties: {
          publicId: {
            type: 'integer',
            format: 'int64',
            description: '公共参数编号',
          },
          publicName: {
            type: 'string',
            description: '公共参数名称',
            example: '公共参数名称',
          },
          publicKey: {
            type: 'string',
            description: '键[英文大写+下划线]',
            example: 'PIGX_PUBLIC_KEY',
          },
          publicValue: {
            type: 'string',
            description: '值',
            example: 999,
          },
          status: {
            type: 'string',
            description: '标识[1有效；2无效]',
            example: 1,
          },
          validateCode: {
            type: 'string',
            description: '编码',
            example: '^(PIG|PIGX)$',
          },
          systemFlag: {
            type: 'string',
            description: '是否是系统内置',
          },
          publicType: {
            type: 'string',
            description: '类型[1-检索；2-原文...]',
            example: 1,
          },
          createBy: {
            type: 'string',
            description: '创建人',
          },
          updateBy: {
            type: 'string',
            description: '修改人',
          },
          delFlag: {
            type: 'string',
            description: '删除标记,1:已删除,0:正常',
          },
          createTime: {
            type: 'string',
            format: 'date-time',
            description: '创建时间',
          },
          updateTime: {
            type: 'string',
            format: 'date-time',
            description: '更新时间',
          },
        },
        required: ['publicKey', 'publicName', 'publicValue'],
      },
      SysMenu: {
        type: 'object',
        description: '菜单',
        properties: {
          menuId: {
            type: 'integer',
            format: 'int64',
            description: '菜单id',
          },
          name: {
            type: 'string',
            description: '菜单名称',
          },
          code: {
            type: 'string',
            description: '菜单编码',
          },
          permission: {
            type: 'string',
            description: '菜单权限标识',
          },
          parentId: {
            type: 'integer',
            format: 'int64',
            description: '菜单父id',
          },
          icon: {
            type: 'string',
            description: '菜单图标',
          },
          path: {
            type: 'string',
            description: '前端路由标识路径',
          },
          component: {
            type: 'string',
            description: '前端组件',
          },
          visible: {
            type: 'string',
            description: '菜单是否显示',
          },
          sortOrder: {
            type: 'integer',
            format: 'int32',
            description: '排序值',
          },
          menuType: {
            type: 'string',
            description: '菜单类型,0:菜单 1:按钮',
          },
          keepAlive: {
            type: 'string',
            description: '路由缓冲',
          },
          embedded: {
            type: 'string',
            description: '菜单是否内嵌',
          },
          createBy: {
            type: 'string',
            description: '创建人',
          },
          updateBy: {
            type: 'string',
            description: '修改人',
          },
          createTime: {
            type: 'string',
            format: 'date-time',
            description: '创建时间',
          },
          updateTime: {
            type: 'string',
            format: 'date-time',
            description: '更新时间',
          },
          delFlag: {
            type: 'string',
            description: '删除标记,1:已删除,0:正常',
          },
        },
        required: ['menuType', 'name', 'parentId'],
      },
      SysI18nEntity: {
        type: 'object',
        description: '系统表-国际化',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
            description: 'id',
          },
          name: {
            type: 'string',
            description: 'name',
          },
          zhCn: {
            type: 'string',
            description: '中文',
          },
          en: {
            type: 'string',
            description: '英文',
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
          updateBy: {
            type: 'string',
            description: '修改人',
          },
          updateTime: {
            type: 'string',
            format: 'date-time',
            description: '更新时间',
          },
          delFlag: {
            type: 'string',
            description: '删除标记',
          },
        },
      },
      SysDict: {
        type: 'object',
        description: '字典类型',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
            description: '字典编号',
          },
          dictType: {
            type: 'string',
            description: '字典类型',
          },
          description: {
            type: 'string',
            description: '字典描述',
          },
          createTime: {
            type: 'string',
            format: 'date-time',
            description: '创建时间',
          },
          updateTime: {
            type: 'string',
            format: 'date-time',
            description: '更新时间',
          },
          systemFlag: {
            type: 'string',
            description: '是否系统内置',
          },
          remarks: {
            type: 'string',
            description: '备注信息',
          },
          createBy: {
            type: 'string',
            description: '创建人',
          },
          updateBy: {
            type: 'string',
            description: '修改人',
          },
          delFlag: {
            type: 'string',
            description: '删除标记,1:已删除,0:正常',
          },
        },
      },
      SysDictItem: {
        type: 'object',
        description: '字典项',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
            description: '字典项id',
          },
          dictId: {
            type: 'integer',
            format: 'int64',
            description: '所属字典类id',
          },
          label: {
            type: 'string',
            description: '标签名',
          },
          dictType: {
            type: 'string',
            description: '类型',
          },
          description: {
            type: 'string',
            description: '描述',
          },
          sortOrder: {
            type: 'integer',
            format: 'int32',
            description: '排序值，默认升序',
          },
          createBy: {
            type: 'string',
            description: '创建人',
          },
          updateBy: {
            type: 'string',
            description: '修改人',
          },
          createTime: {
            type: 'string',
            format: 'date-time',
            description: '创建时间',
          },
          updateTime: {
            type: 'string',
            format: 'date-time',
            description: '更新时间',
          },
          remarks: {
            type: 'string',
            description: '备注信息',
          },
          delFlag: {
            type: 'string',
            description: '删除标记,1:已删除,0:正常',
          },
          value: {
            type: 'string',
            description: '数据值',
          },
        },
      },
      SysDept: {
        type: 'object',
        description: '部门',
        properties: {
          deptId: {
            type: 'integer',
            format: 'int64',
            description: '部门id',
          },
          name: {
            type: 'string',
            description: '部门名称',
          },
          sortOrder: {
            type: 'integer',
            format: 'int32',
            description: '排序值',
          },
          createBy: {
            type: 'string',
            description: '创建人',
          },
          updateBy: {
            type: 'string',
            description: '修改人',
          },
          createTime: {
            type: 'string',
            format: 'date-time',
            description: '创建时间',
          },
          updateTime: {
            type: 'string',
            format: 'date-time',
            description: '修改时间',
          },
          parentId: {
            type: 'integer',
            format: 'int64',
            description: '父级部门id',
          },
          delFlag: {
            type: 'string',
            description: '删除标记,1:已删除,0:正常',
          },
        },
        required: ['name', 'sortOrder'],
      },
      SysOauthClientDetailsDTO: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
            description: 'id',
          },
          clientId: {
            type: 'string',
            description: '客户端id',
          },
          clientSecret: {
            type: 'string',
            description: '客户端密钥',
          },
          resourceIds: {
            type: 'string',
            description: '资源id列表',
          },
          scope: {
            type: 'string',
            description: '作用域',
          },
          authorizedGrantTypes: {
            type: 'array',
            description: '授权方式',
            items: {
              type: 'string',
            },
          },
          webServerRedirectUri: {
            type: 'string',
            description: '回调地址',
          },
          authorities: {
            type: 'string',
            description: '权限列表',
          },
          accessTokenValidity: {
            type: 'integer',
            format: 'int32',
            description: '请求令牌有效时间',
          },
          refreshTokenValidity: {
            type: 'integer',
            format: 'int32',
            description: '刷新令牌有效时间',
          },
          additionalInformation: {
            type: 'string',
            description: '扩展信息',
          },
          autoapprove: {
            type: 'string',
            description: '是否自动放行',
          },
          delFlag: {
            type: 'string',
            description: '删除标记,1:已删除,0:正常',
          },
          createBy: {
            type: 'string',
            description: '创建人',
          },
          updateBy: {
            type: 'string',
            description: '修改人',
          },
          createTime: {
            type: 'string',
            format: 'date-time',
            description: '创建时间',
          },
          updateTime: {
            type: 'string',
            format: 'date-time',
            description: '更新时间',
          },
          captchaFlag: {
            type: 'string',
          },
          encFlag: {
            type: 'string',
          },
          onlineQuantity: {
            type: 'string',
          },
        },
        required: ['clientId', 'clientSecret', 'scope'],
      },
      RUserInfo: {
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
            $ref: '#/components/schemas/UserInfo',
            description: '数据',
          },
          expandMap: {
            type: 'object',
            additionalProperties: {
              type: 'object',
            },
            description: '数据',
          },
          ok: {
            type: 'boolean',
            readOnly: true,
          },
        },
      },
      UserInfo: {
        type: 'object',
        description: '用户信息',
        properties: {
          userId: {
            type: 'integer',
            format: 'int64',
            description: '主键',
          },
          username: {
            type: 'string',
            description: '用户名',
          },
          password: {
            type: 'string',
          },
          salt: {
            type: 'string',
          },
          wxOpenid: {
            type: 'string',
            description: '微信open id',
          },
          qqOpenid: {
            type: 'string',
            description: 'qq open id',
          },
          giteeOpenId: {
            type: 'string',
            description: 'gitee open id',
          },
          oscOpenId: {
            type: 'string',
            description: '开源中国 open id',
          },
          wxCpUserid: {
            type: 'string',
            description: '企微微信 userid',
          },
          wxDingUserid: {
            type: 'string',
            description: '钉钉 userid',
          },
          createTime: {
            type: 'string',
            format: 'date-time',
            description: '创建时间',
          },
          updateTime: {
            type: 'string',
            format: 'date-time',
            description: '修改时间',
          },
          delFlag: {
            type: 'string',
            description: '删除标记,1:已删除,0:正常',
          },
          lockFlag: {
            type: 'string',
            description: '锁定标记,0:正常,9:已锁定',
          },
          passwordExpireFlag: {
            type: 'string',
            description: '密码过期标记',
          },
          passwordModifyTime: {
            type: 'string',
            format: 'date-time',
            description: '密码修改时间',
          },
          phone: {
            type: 'string',
            description: '手机号',
          },
          avatar: {
            type: 'string',
            description: '头像',
          },
          tenantId: {
            type: 'integer',
            format: 'int64',
            description: '所属租户',
          },
          deptList: {
            type: 'array',
            description: '所属部门名称',
            items: {
              $ref: '#/components/schemas/SysDept',
            },
          },
          roleList: {
            type: 'array',
            description: '拥有的角色列表',
            items: {
              $ref: '#/components/schemas/SysRole',
            },
          },
          postList: {
            type: 'array',
            description: '拥有的岗位列表',
            items: {
              $ref: '#/components/schemas/SysPost',
            },
          },
          nickname: {
            type: 'string',
            description: '昵称',
          },
          name: {
            type: 'string',
            description: '姓名',
          },
          email: {
            type: 'string',
            description: '邮箱',
          },
          companyId: {
            type: 'integer',
            format: 'int64',
            description: '企业id',
          },
          companyName: {
            type: 'string',
            description: '企业名称',
          },
          allCompanyId: {
            type: 'string',
            description: '用户所在所有企业ID',
          },
          userPermissions: {
            type: 'integer',
            format: 'int32',
            description: '用户各端权限',
          },
          capacityType: {
            type: 'string',
            description: '身份',
          },
          permissions: {
            type: 'array',
            description: '权限标识集合',
            items: {
              type: 'string',
            },
          },
        },
      },
      UserExcelVO: {
        type: 'object',
        properties: {
          lineNum: {
            type: 'integer',
            format: 'int64',
          },
          userId: {
            type: 'integer',
            format: 'int64',
          },
          username: {
            type: 'string',
          },
          phone: {
            type: 'string',
          },
          nickname: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          email: {
            type: 'string',
          },
          deptNameList: {
            type: 'string',
          },
          roleNameList: {
            type: 'string',
          },
          postNameList: {
            type: 'string',
          },
          lockFlag: {
            type: 'string',
          },
          createTime: {
            type: 'string',
            format: 'date-time',
          },
        },
        required: [
          'deptNameList',
          'email',
          'name',
          'nickname',
          'phone',
          'postNameList',
          'roleNameList',
          'username',
        ],
      },
      SysTenantUserDTO: {
        type: 'object',
        properties: {
          tenantId: {
            type: 'integer',
            format: 'int64',
          },
          userIds: {
            type: 'array',
            items: {
              type: 'integer',
              format: 'int64',
            },
          },
          roleId: {
            type: 'integer',
            format: 'int64',
          },
          postId: {
            type: 'integer',
            format: 'int64',
          },
          deptId: {
            type: 'integer',
            format: 'int64',
          },
        },
      },
      MessageSmsDTO: {
        type: 'object',
        properties: {
          mobiles: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          bizCode: {
            type: 'string',
          },
          params: {
            type: 'object',
            additionalProperties: {
              type: 'string',
            },
          },
        },
        required: ['mobiles'],
      },
      MessageHookDTO: {
        type: 'object',
        properties: {
          bizCode: {
            type: 'string',
          },
          phoneList: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          noticeAll: {
            type: 'boolean',
          },
          messageType: {
            type: 'string',
          },
          messageContent: {
            type: 'string',
          },
          messageTitle: {
            type: 'string',
          },
          messageUrl: {
            type: 'string',
          },
          picUrl: {
            type: 'string',
          },
        },
      },
      MessageEmailDTO: {
        type: 'object',
        properties: {
          mailAddress: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          title: {
            type: 'string',
          },
          body: {
            type: 'string',
          },
          html: {
            type: 'string',
          },
          htmlValues: {
            type: 'object',
            additionalProperties: {
              type: 'string',
            },
          },
          ccList: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          bccList: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          attachmentList: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          zipName: {
            type: 'string',
          },
          bizCode: {
            type: 'string',
          },
        },
        required: ['mailAddress', 'title'],
      },
      JSONConfig: {
        type: 'object',
        properties: {
          keyComparator: {
            type: 'object',
          },
          ignoreError: {
            type: 'boolean',
          },
          ignoreCase: {
            type: 'boolean',
          },
          dateFormat: {
            type: 'string',
          },
          ignoreNullValue: {
            type: 'boolean',
          },
          transientSupport: {
            type: 'boolean',
          },
          stripTrailingZeros: {
            type: 'boolean',
          },
          checkDuplicate: {
            type: 'boolean',
          },
          writeLongAsString: {
            type: 'boolean',
          },
          order: {
            type: 'boolean',
            deprecated: true,
          },
        },
      },
      JSONObject: {
        type: 'object',
        additionalProperties: {
          type: 'object',
        },
        properties: {
          raw: {
            type: 'object',
            additionalProperties: {
              type: 'object',
            },
          },
          config: {
            $ref: '#/components/schemas/JSONConfig',
          },
          empty: {
            type: 'boolean',
          },
        },
      },
      SysRouteConf: {
        type: 'object',
        description: '网关路由信息',
        properties: {
          routeId: {
            type: 'string',
            description: '路由id',
          },
          routeName: {
            type: 'string',
            description: '路由名称',
          },
          predicates: {
            type: 'string',
            description: '断言',
          },
          filters: {
            type: 'string',
            description: '过滤器',
          },
          uri: {
            type: 'string',
            description: '请求uri',
          },
          sortOrder: {
            type: 'integer',
            format: 'int32',
            description: '排序值',
          },
          metadata: {
            type: 'string',
            description: '元数据',
          },
          createBy: {
            type: 'string',
            description: '创建人',
          },
          updateBy: {
            type: 'string',
            description: '修改人',
          },
          createTime: {
            type: 'string',
            format: 'date-time',
            description: '创建时间',
          },
          updateTime: {
            type: 'string',
            format: 'date-time',
            description: '修改时间',
          },
          delFlag: {
            type: 'string',
            description: '删除标记,1:已删除,0:正常',
          },
        },
      },
      RoleExcelVO: {
        type: 'object',
        properties: {
          lineNum: {
            type: 'integer',
            format: 'int64',
          },
          roleId: {
            type: 'integer',
            format: 'int64',
          },
          roleName: {
            type: 'string',
          },
          roleCode: {
            type: 'string',
          },
          roleDesc: {
            type: 'string',
          },
          createTime: {
            type: 'string',
            format: 'date-time',
          },
        },
        required: ['roleCode', 'roleDesc', 'roleName'],
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
      RequestLogManageRetryRemoteReqVO: {
        type: 'object',
        description: '推送数据重新推送（远程）请求参数',
        properties: {
          bizId: {
            type: 'integer',
            format: 'int64',
            description: '业务ID',
          },
          bizType: {
            type: 'string',
            description: '单据类型',
            enum: ['COMPANY_SAVE'],
          },
        },
        required: ['bizId', 'bizType'],
      },
      RString: {
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
            type: 'string',
            description: '数据',
          },
          expandMap: {
            type: 'object',
            additionalProperties: {
              type: 'object',
            },
            description: '数据',
          },
          ok: {
            type: 'boolean',
            readOnly: true,
          },
        },
      },
      RequestLogManageRetryWithBizNoReqVO: {
        type: 'object',
        description: '根据单据编号重新推送单据请求参数',
        properties: {
          bizNo: {
            type: 'string',
            description: '单据编号',
          },
        },
        required: ['bizNo'],
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
      RRequestLogManageEntity: {
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
            $ref: '#/components/schemas/RequestLogManageEntity',
            description: '数据',
          },
          expandMap: {
            type: 'object',
            additionalProperties: {
              type: 'object',
            },
            description: '数据',
          },
          ok: {
            type: 'boolean',
            readOnly: true,
          },
        },
      },
      RequestLogManageEntity: {
        type: 'object',
        description: '推送数据管理表',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
            description: '主键id',
          },
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
          creator: {
            type: 'integer',
            format: 'int64',
            description: '制单人id',
          },
          createBy: {
            type: 'string',
            description: '制单人',
          },
          createTime: {
            type: 'string',
            format: 'date-time',
            description: '制单时间',
          },
          updateBy: {
            type: 'string',
            description: '更新人账户',
          },
          updater: {
            type: 'integer',
            format: 'int64',
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
          sysType: {
            type: 'string',
            description: '所属模块',
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
          },
          bizNo: {
            type: 'string',
            description: '单据编号',
          },
          requestSys: {
            type: 'string',
            description: '第三方系统',
          },
          requestApiType: {
            type: 'string',
            description: '调用接口类型',
          },
          requestName: {
            type: 'string',
            description: '调用接口名称',
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
            type: 'integer',
            format: 'int32',
            description: '推送状态',
          },
          requestTime: {
            type: 'string',
            format: 'date-time',
            description: '推送时间',
          },
          remoteSaveType: {
            type: 'string',
            description: '第三方请求远程保存类型',
          },
          realRequestUrl: {
            type: 'string',
            description: '最新实际调用第三方系统的请求路径',
          },
          realRequestParams: {
            type: 'string',
            description: '最新实际发生给第三方系统的请求参数',
          },
          realRequestResult: {
            type: 'string',
            description: '最新第三方系统返回结果',
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
          expandMap: {
            type: 'object',
            additionalProperties: {
              type: 'object',
            },
            description: '数据',
          },
          ok: {
            type: 'boolean',
            readOnly: true,
          },
        },
      },
      RegisterUserDTO: {
        type: 'object',
        properties: {
          username: {
            type: 'string',
          },
          password: {
            type: 'string',
          },
          newpassword1: {
            type: 'string',
          },
          phone: {
            type: 'string',
          },
          tenantId: {
            type: 'integer',
            format: 'int64',
          },
        },
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
          expandMap: {
            type: 'object',
            additionalProperties: {
              type: 'object',
            },
            description: '数据',
          },
          ok: {
            type: 'boolean',
            readOnly: true,
          },
        },
      },
      PostExcelVO: {
        type: 'object',
        properties: {
          lineNum: {
            type: 'integer',
            format: 'int64',
          },
          postId: {
            type: 'integer',
            format: 'int64',
          },
          postName: {
            type: 'string',
          },
          postCode: {
            type: 'string',
          },
          postSort: {
            type: 'integer',
            format: 'int32',
          },
          remark: {
            type: 'string',
          },
          createTime: {
            type: 'string',
            format: 'date-time',
          },
        },
        required: ['postCode', 'postName', 'postSort', 'remark'],
      },
      SysLogDTO: {
        type: 'object',
        description: '日志查询对象',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
          },
          logType: {
            type: 'string',
          },
          title: {
            type: 'string',
          },
          createBy: {
            type: 'string',
          },
          updateTime: {
            type: 'string',
            format: 'date-time',
          },
          remoteAddr: {
            type: 'string',
          },
          userAgent: {
            type: 'string',
          },
          requestUri: {
            type: 'string',
          },
          method: {
            type: 'string',
          },
          params: {
            type: 'string',
          },
          body: {
            type: 'object',
          },
          time: {
            type: 'integer',
            format: 'int64',
          },
          exception: {
            type: 'string',
          },
          serviceId: {
            type: 'string',
          },
          createTime: {
            type: 'array',
            items: {
              type: 'string',
              format: 'date-time',
            },
          },
          tenantId: {
            type: 'integer',
            format: 'int64',
          },
        },
        required: ['logType', 'title'],
      },
      PreLogVO: {
        type: 'object',
        description: '前端日志展示对象',
        properties: {
          url: {
            type: 'string',
            description: '请求url',
          },
          time: {
            type: 'string',
            description: '请求耗时',
          },
          user: {
            type: 'string',
            description: '请求用户',
          },
          type: {
            type: 'string',
            description: '请求结果0:成功9:失败',
          },
          message: {
            type: 'string',
            description: '请求传递参数',
          },
          stack: {
            type: 'string',
            description: '异常信息',
          },
          info: {
            type: 'string',
            description: '日志标题',
          },
        },
      },
      DeptExcelVO: {
        type: 'object',
        properties: {
          lineNum: {
            type: 'integer',
            format: 'int64',
          },
          parentName: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          sortOrder: {
            type: 'integer',
            format: 'int32',
          },
        },
        required: ['name', 'parentName'],
      },
      CompanySaveReqVO: {
        type: 'object',
        description: '企业管理表保存对象',
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
            description: '企业id',
          },
          name: {
            type: 'string',
            description: '企业名称',
          },
          enterpriseId: {
            type: 'integer',
            format: 'int64',
            description: '广贸系统客商id',
          },
          adminUserId: {
            type: 'integer',
            format: 'int64',
            description: '企业管理员id',
          },
          contactPerson: {
            type: 'string',
            description: '企业联系人',
          },
          contactTelephone: {
            type: 'string',
            description: '企业联系人手机号码',
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
            description: 'email',
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
          username: {
            type: 'string',
            description: '账号',
          },
          password: {
            type: 'string',
            description: '登录密码',
          },
        },
        required: ['name', 'username'],
      },
      RListSysUserCompanyFullVO: {
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
              $ref: '#/components/schemas/SysUserCompanyFullVO',
            },
          },
          expandMap: {
            type: 'object',
            additionalProperties: {
              type: 'object',
            },
            description: '数据',
          },
          ok: {
            type: 'boolean',
            readOnly: true,
          },
        },
      },
      SysUserCompanyFullVO: {
        type: 'object',
        description: '用户所在企业完整数据表',
        properties: {
          userId: {
            type: 'integer',
            format: 'int64',
            description: '用户id',
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
          userType: {
            type: 'string',
            description: '用户类型，1普通用户，0 超级管理员',
          },
          lastLoginTime: {
            type: 'string',
            format: 'date-time',
            description: '最近登录时间，下次登录默认登录最新的',
          },
        },
      },
      CompanyChangePasswordReqVO: {
        type: 'object',
        description: '企业修改密码保存对象',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
            description: '企业id',
          },
          password: {
            type: 'string',
            description: '密码',
          },
        },
        required: ['id', 'password'],
      },
      SysAuditLog: {
        type: 'object',
        description: '审计记录表',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
            description: '主键',
          },
          auditName: {
            type: 'string',
            description: '审计名称',
          },
          auditField: {
            type: 'string',
            description: '字段名称',
          },
          beforeVal: {
            type: 'string',
            description: '变更前值',
          },
          afterVal: {
            type: 'string',
            description: '变更后值',
          },
          createBy: {
            type: 'string',
            description: '操作人',
          },
          createTime: {
            type: 'string',
            format: 'date-time',
            description: '操作时间',
          },
          delFlag: {
            type: 'string',
            description: '删除标记',
          },
          tenantId: {
            type: 'integer',
            format: 'int64',
            description: '租户ID',
          },
        },
      },
      AiChatMessageDTO: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
          },
          webSearch: {
            type: 'boolean',
          },
        },
      },
      AssistantMessage: {
        type: 'object',
        properties: {
          role: {
            type: 'string',
            enum: ['system', 'user', 'assistant', 'tool', 'function'],
          },
          content: {
            type: 'string',
          },
          reasoning_content: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          tool_calls: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/ToolCall',
            },
          },
          refusal: {
            type: 'boolean',
          },
          function_call: {
            $ref: '#/components/schemas/FunctionCall',
            deprecated: true,
          },
        },
      },
      ChatCompletionChoice: {
        type: 'object',
        properties: {
          index: {
            type: 'integer',
            format: 'int32',
          },
          message: {
            $ref: '#/components/schemas/AssistantMessage',
          },
          delta: {
            $ref: '#/components/schemas/Delta',
          },
          finish_reason: {
            type: 'string',
          },
        },
      },
      ChatCompletionResponse: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          created: {
            type: 'integer',
            format: 'int32',
          },
          model: {
            type: 'string',
          },
          choices: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/ChatCompletionChoice',
            },
          },
          usage: {
            $ref: '#/components/schemas/Usage',
          },
          system_fingerprint: {
            type: 'string',
          },
          service_tier: {
            type: 'string',
          },
        },
      },
      CompletionTokensDetails: {
        type: 'object',
        properties: {
          reasoning_tokens: {
            type: 'integer',
            format: 'int32',
          },
        },
      },
      Delta: {
        type: 'object',
        properties: {
          role: {
            type: 'string',
            enum: ['system', 'user', 'assistant', 'tool', 'function'],
          },
          content: {
            type: 'string',
          },
          reasoning_content: {
            type: 'string',
          },
          tool_calls: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/ToolCall',
            },
          },
          function_call: {
            $ref: '#/components/schemas/FunctionCall',
            deprecated: true,
          },
        },
      },
      FunctionCall: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
          arguments: {
            type: 'string',
          },
        },
      },
      PromptTokensDetails: {
        type: 'object',
        properties: {
          cached_tokens: {
            type: 'integer',
            format: 'int32',
          },
        },
      },
      ToolCall: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          index: {
            type: 'integer',
            format: 'int32',
          },
          type: {
            type: 'string',
            enum: ['function'],
          },
          function: {
            $ref: '#/components/schemas/FunctionCall',
          },
        },
      },
      Usage: {
        type: 'object',
        properties: {
          total_tokens: {
            type: 'integer',
            format: 'int32',
          },
          prompt_tokens: {
            type: 'integer',
            format: 'int32',
          },
          prompt_tokens_details: {
            $ref: '#/components/schemas/PromptTokensDetails',
          },
          completion_tokens: {
            type: 'integer',
            format: 'int32',
          },
          completion_tokens_details: {
            $ref: '#/components/schemas/CompletionTokensDetails',
          },
        },
      },
      RListSysUser: {
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
              $ref: '#/components/schemas/SysUser',
            },
          },
          expandMap: {
            type: 'object',
            additionalProperties: {
              type: 'object',
            },
            description: '数据',
          },
          ok: {
            type: 'boolean',
            readOnly: true,
          },
        },
      },
      SysUser: {
        type: 'object',
        description: '用户',
        properties: {
          userId: {
            type: 'integer',
            format: 'int64',
            description: '主键id',
          },
          username: {
            type: 'string',
            description: '用户名',
          },
          password: {
            type: 'string',
            description: '密码',
          },
          createBy: {
            type: 'string',
            description: '创建人',
          },
          updateBy: {
            type: 'string',
            description: '修改人',
          },
          createTime: {
            type: 'string',
            format: 'date-time',
            description: '创建时间',
          },
          updateTime: {
            type: 'string',
            format: 'date-time',
            description: '修改时间',
          },
          delFlag: {
            type: 'string',
            description: '删除标记,1:已删除,0:正常',
          },
          lockFlag: {
            type: 'string',
            description: '锁定标记',
          },
          passwordExpireFlag: {
            type: 'string',
            description: '密码过期标记',
          },
          passwordModifyTime: {
            type: 'string',
            format: 'date-time',
            description: '密码修改时间',
          },
          phone: {
            type: 'string',
            description: '手机号',
          },
          avatar: {
            type: 'string',
            description: '头像地址',
          },
          tenantId: {
            type: 'integer',
            format: 'int64',
            description: '用户所属租户id',
          },
          wxOpenid: {
            type: 'string',
            description: '微信openid',
          },
          wxCpUserid: {
            type: 'string',
            description: '企微微信 userid',
          },
          wxDingUserid: {
            type: 'string',
            description: '钉钉 userid',
          },
          miniOpenid: {
            type: 'string',
            description: '微信小程序openid',
          },
          qqOpenid: {
            type: 'string',
            description: 'QQ openid',
          },
          giteeLogin: {
            type: 'string',
            description: '码云唯一标识',
          },
          oscId: {
            type: 'string',
            description: '开源中国唯一标识',
          },
          nickname: {
            type: 'string',
            description: '昵称',
          },
          name: {
            type: 'string',
            description: '姓名',
          },
          email: {
            type: 'string',
            description: '邮箱',
          },
          userType: {
            type: 'integer',
            format: 'int32',
            description: '用户类型',
          },
        },
      },
      RListLong: {
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
              type: 'integer',
              format: 'int64',
            },
          },
          expandMap: {
            type: 'object',
            additionalProperties: {
              type: 'object',
            },
            description: '数据',
          },
          ok: {
            type: 'boolean',
            readOnly: true,
          },
        },
      },
      SysMessageEntity: {
        type: 'object',
        description: '站内信息',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
            description: '主键',
          },
          category: {
            type: 'string',
            description: '分类 0-公告 1-站内信',
          },
          title: {
            type: 'string',
            description: '标题',
          },
          content: {
            type: 'string',
            description: '内容',
          },
          sendFlag: {
            type: 'string',
            description: '是否推送',
          },
          allFlag: {
            type: 'string',
            description: '通知全体',
          },
          sort: {
            type: 'integer',
            format: 'int32',
            description: '排序 （越大越在前）',
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
            description: '删除时间',
          },
          tenantId: {
            type: 'integer',
            format: 'int64',
            description: '租户',
          },
        },
      },
      OrderItem: {
        type: 'object',
        properties: {
          column: {
            type: 'string',
          },
          asc: {
            type: 'boolean',
          },
        },
      },
      Page: {
        type: 'object',
        properties: {
          records: {
            type: 'array',
            items: {
              type: 'object',
            },
          },
          total: {
            type: 'integer',
            format: 'int64',
          },
          size: {
            type: 'integer',
            format: 'int64',
          },
          current: {
            type: 'integer',
            format: 'int64',
          },
          orders: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/OrderItem',
            },
            writeOnly: true,
          },
          optimizeCountSql: {
            $ref: '#/components/schemas/PageObject',
            writeOnly: true,
          },
          searchCount: {
            $ref: '#/components/schemas/PageObject',
            writeOnly: true,
          },
          optimizeJoinOfCountSql: {
            type: 'boolean',
            writeOnly: true,
          },
          maxLimit: {
            type: 'integer',
            format: 'int64',
            writeOnly: true,
          },
          countId: {
            type: 'string',
            writeOnly: true,
          },
          pages: {
            type: 'integer',
            format: 'int64',
            deprecated: true,
          },
        },
      },
      PageObject: {
        type: 'object',
        properties: {
          records: {
            type: 'array',
            items: {
              type: 'object',
            },
          },
          total: {
            type: 'integer',
            format: 'int64',
          },
          size: {
            type: 'integer',
            format: 'int64',
          },
          current: {
            type: 'integer',
            format: 'int64',
          },
          orders: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/OrderItem',
            },
            writeOnly: true,
          },
          optimizeCountSql: {
            $ref: '#/components/schemas/PageObject',
          },
          searchCount: {
            $ref: '#/components/schemas/PageObject',
          },
          optimizeJoinOfCountSql: {
            type: 'boolean',
            writeOnly: true,
          },
          maxLimit: {
            type: 'integer',
            format: 'int64',
            writeOnly: true,
          },
          countId: {
            type: 'string',
            writeOnly: true,
          },
          pages: {
            type: 'integer',
            format: 'int64',
            deprecated: true,
          },
        },
      },
      IPageSysRoleWithCompanyVO: {
        type: 'object',
        properties: {
          size: {
            type: 'integer',
            format: 'int64',
          },
          records: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/SysRoleWithCompanyVO',
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
      RIPageSysRoleWithCompanyVO: {
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
            $ref: '#/components/schemas/IPageSysRoleWithCompanyVO',
            description: '数据',
          },
          expandMap: {
            type: 'object',
            additionalProperties: {
              type: 'object',
            },
            description: '数据',
          },
          ok: {
            type: 'boolean',
            readOnly: true,
          },
        },
      },
      SysRoleWithCompanyVO: {
        type: 'object',
        description: '角色',
        properties: {
          roleId: {
            type: 'integer',
            format: 'int64',
            description: '角色编号',
          },
          roleName: {
            type: 'string',
            description: '角色名称',
          },
          roleCode: {
            type: 'string',
            description: '角色标识',
          },
          roleDesc: {
            type: 'string',
            description: '角色描述',
          },
          companyId: {
            type: 'integer',
            format: 'int64',
            description: '所属企业id',
          },
          capacityType: {
            type: 'string',
            description: '身份标识',
          },
          dsType: {
            type: 'integer',
            format: 'int32',
            description: '数据权限类型',
          },
          dsScope: {
            type: 'string',
            description: '数据权限作用范围',
          },
          createBy: {
            type: 'string',
            description: '创建人',
          },
          updateBy: {
            type: 'string',
            description: '修改人',
          },
          createTime: {
            type: 'string',
            format: 'date-time',
            description: '创建时间',
          },
          updateTime: {
            type: 'string',
            format: 'date-time',
            description: '修改时间',
          },
          delFlag: {
            type: 'string',
            description: '删除标记,1:已删除,0:正常',
          },
          companyName: {
            type: 'string',
            description: '所属企业名称',
          },
        },
        required: ['dsType', 'roleCode', 'roleName'],
      },
      IPageRequestLogManagePageResVO: {
        type: 'object',
        properties: {
          size: {
            type: 'integer',
            format: 'int64',
          },
          records: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/RequestLogManagePageResVO',
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
      RIPageRequestLogManagePageResVO: {
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
            $ref: '#/components/schemas/IPageRequestLogManagePageResVO',
            description: '数据',
          },
          expandMap: {
            type: 'object',
            additionalProperties: {
              type: 'object',
            },
            description: '数据',
          },
          ok: {
            type: 'boolean',
            readOnly: true,
          },
        },
      },
      RequestLogManagePageResVO: {
        type: 'object',
        description: '推送数据管理列表页面返回对象',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
            description: '主键id',
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
          },
          bizNo: {
            type: 'string',
            description: '单据编号',
          },
          requestName: {
            type: 'string',
            description: '调用接口名称',
          },
          creator: {
            type: 'integer',
            format: 'int64',
            description: '制单人id',
          },
          createBy: {
            type: 'string',
            description: '制单人',
          },
          createTime: {
            type: 'string',
            format: 'date-time',
            description: '制单日期',
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
          requestResultType: {
            type: 'integer',
            format: 'int32',
            description: '推送状态',
          },
          requestTime: {
            type: 'string',
            format: 'date-time',
            description: '更新时间',
          },
          requestResult: {
            type: 'string',
            description: '请求结果',
          },
          requestParams: {
            type: 'string',
            description: '请求参数',
          },
          realRequestParams: {
            type: 'string',
            description: '请求参数',
          },
          realRequestUrl: {
            type: 'string',
            description: '请求路径',
          },
        },
      },
      RListSysPost: {
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
              $ref: '#/components/schemas/SysPost',
            },
          },
          expandMap: {
            type: 'object',
            additionalProperties: {
              type: 'object',
            },
            description: '数据',
          },
          ok: {
            type: 'boolean',
            readOnly: true,
          },
        },
      },
      SysLog: {
        type: 'object',
        description: '日志',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
            description: '日志编号',
          },
          logType: {
            type: 'string',
            description: '日志类型',
          },
          title: {
            type: 'string',
            description: '日志标题',
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
          updateTime: {
            type: 'string',
            format: 'date-time',
            description: '更新时间',
          },
          remoteAddr: {
            type: 'string',
            description: '操作ip地址',
          },
          userAgent: {
            type: 'string',
            description: '用户代理',
          },
          requestUri: {
            type: 'string',
            description: '请求uri',
          },
          method: {
            type: 'string',
            description: '操作方式',
          },
          params: {
            type: 'string',
            description: '提交数据',
          },
          time: {
            type: 'integer',
            format: 'int64',
            description: '方法执行时间',
          },
          exception: {
            type: 'string',
            description: '异常信息',
          },
          serviceId: {
            type: 'string',
            description: '应用标识',
          },
          delFlag: {
            type: 'string',
            description: '删除标记,1:已删除,0:正常',
          },
        },
        required: ['logType', 'title'],
      },
      RListSysDictItem: {
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
              $ref: '#/components/schemas/SysDictItem',
            },
          },
          expandMap: {
            type: 'object',
            additionalProperties: {
              type: 'object',
            },
            description: '数据',
          },
          ok: {
            type: 'boolean',
            readOnly: true,
          },
        },
      },
      IPage: {
        type: 'object',
        properties: {
          size: {
            type: 'integer',
            format: 'int64',
          },
          records: {
            type: 'array',
            items: {
              type: 'object',
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
      RIPage: {
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
            $ref: '#/components/schemas/IPage',
            description: '数据',
          },
          expandMap: {
            type: 'object',
            additionalProperties: {
              type: 'object',
            },
            description: '数据',
          },
          ok: {
            type: 'boolean',
            readOnly: true,
          },
        },
      },
      RMapStringListSysDictItem: {
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
            additionalProperties: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/SysDictItem',
              },
            },
            description: '数据',
          },
          expandMap: {
            type: 'object',
            additionalProperties: {
              type: 'object',
            },
            description: '数据',
          },
          ok: {
            type: 'boolean',
            readOnly: true,
          },
        },
      },
      CompanyPageResVO: {
        type: 'object',
        description: '企业管理表分页查询返回对象',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
            description: '企业id',
          },
          name: {
            type: 'string',
            description: '企业名称',
          },
          username: {
            type: 'string',
            description: '账号',
          },
          contactPerson: {
            type: 'string',
            description: '企业联系人',
          },
          contactTelephone: {
            type: 'string',
            description: '企业联系人手机号码',
          },
        },
      },
      IPageCompanyPageResVO: {
        type: 'object',
        properties: {
          size: {
            type: 'integer',
            format: 'int64',
          },
          records: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/CompanyPageResVO',
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
      RIPageCompanyPageResVO: {
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
            $ref: '#/components/schemas/IPageCompanyPageResVO',
            description: '数据',
          },
          expandMap: {
            type: 'object',
            additionalProperties: {
              type: 'object',
            },
            description: '数据',
          },
          ok: {
            type: 'boolean',
            readOnly: true,
          },
        },
      },
      CompanyDetailResVO: {
        type: 'object',
        description: '企业管理表详情对象',
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
            description: '企业id',
          },
          name: {
            type: 'string',
            description: '企业名称',
          },
          enterpriseId: {
            type: 'integer',
            format: 'int64',
            description: '广贸系统客商id',
          },
          adminUserId: {
            type: 'integer',
            format: 'int64',
            description: '企业管理员id',
          },
          contactPerson: {
            type: 'string',
            description: '企业联系人',
          },
          contactTelephone: {
            type: 'string',
            description: '企业联系人手机号码',
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
            description: 'email',
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
          username: {
            type: 'string',
            description: '账号',
          },
        },
      },
      RCompanyDetailResVO: {
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
            $ref: '#/components/schemas/CompanyDetailResVO',
            description: '数据',
          },
          expandMap: {
            type: 'object',
            additionalProperties: {
              type: 'object',
            },
            description: '数据',
          },
          ok: {
            type: 'boolean',
            readOnly: true,
          },
        },
      },
      SysOauthClientDetails: {
        type: 'object',
        description: '客户端信息',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
            description: 'id',
          },
          clientId: {
            type: 'string',
            description: '客户端id',
          },
          clientSecret: {
            type: 'string',
            description: '客户端密钥',
          },
          resourceIds: {
            type: 'string',
            description: '资源id列表',
          },
          scope: {
            type: 'string',
            description: '作用域',
          },
          authorizedGrantTypes: {
            type: 'array',
            description: '授权方式',
            items: {
              type: 'string',
            },
          },
          webServerRedirectUri: {
            type: 'string',
            description: '回调地址',
          },
          authorities: {
            type: 'string',
            description: '权限列表',
          },
          accessTokenValidity: {
            type: 'integer',
            format: 'int32',
            description: '请求令牌有效时间',
          },
          refreshTokenValidity: {
            type: 'integer',
            format: 'int32',
            description: '刷新令牌有效时间',
          },
          additionalInformation: {
            type: 'string',
            description: '扩展信息',
          },
          autoapprove: {
            type: 'string',
            description: '是否自动放行',
          },
          delFlag: {
            type: 'string',
            description: '删除标记,1:已删除,0:正常',
          },
          createBy: {
            type: 'string',
            description: '创建人',
          },
          updateBy: {
            type: 'string',
            description: '修改人',
          },
          createTime: {
            type: 'string',
            format: 'date-time',
            description: '创建时间',
          },
          updateTime: {
            type: 'string',
            format: 'date-time',
            description: '更新时间',
          },
        },
        required: ['clientId', 'clientSecret', 'scope'],
      },
      SseEmitter: {
        type: 'object',
        properties: {
          timeout: {
            type: 'integer',
            format: 'int64',
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

export const swaggerConfig = {
  configUrl: '/v3/api-docs/swagger-config',
  oauth2RedirectUrl: 'http://172.16.14.27:9999/swagger-ui/oauth2-redirect.html',
  urls: [
    {
      url: '/admin/v3/api-docs',
      name: 'pigx-upms-biz',
    },
    {
      url: '/transport/v3/api-docs',
      name: 'transport-biz',
    },
  ],
  validatorUrl: '',
}
