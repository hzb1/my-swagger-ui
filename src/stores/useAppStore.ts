import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { getApiDocs, getSwaggerConfig } from '@/api/swagger.ts'
import { useRoute } from 'vue-router'
import type { SwaggerDoc } from '@/api/data.type.ts'
import type { ApiGroup } from '@/types/swagger.ts'
import type { OpenAPIV3 } from 'openapi-types'

type SwaggerConfig = {
  urls: {
    url: string
    name: string
  }[]
}

export const useAppStore = defineStore('appStore', () => {
  const route = useRoute()
  // 从路由参数中获取当前服务
  const currentServiceUrl = ref<string | undefined>(route.query.service as string)

  // Swagger 配置
  const swaggerConfig = ref<SwaggerConfig>()

  const swaggerConfigLoading = ref(false)

  // 是否已加载
  const isLoaded = ref(false)

  // loadData 的 Promise
  let loadDataPromise: Promise<void> | null = null

  const loadData = async () => {
    if (isLoaded.value) return
    if (loadDataPromise) return loadDataPromise
    loadDataPromise = new Promise<void>((resolve, reject) => {
      swaggerConfigLoading.value = true
      getSwaggerConfig()
        .then((res) => {
          swaggerConfig.value = res
          isLoaded.value = true
          // 初始化 currentServiceUrl
          if (!currentServiceUrl.value && res?.urls?.length) {
            currentServiceUrl.value = res.urls[0]?.url
          }
          if (!swaggerDoc.value) loadDocData()
          resolve()
        })
        .catch((e) => {
          console.error('load swagger config failed', e)
          reject(e)
        })
        .finally(() => {
          swaggerConfigLoading.value = false
          loadDataPromise = null
        })
    })
  }

  if (!swaggerConfigLoading.value && !isLoaded.value) {
    loadData()
  }

  // Swagger 文档
  const swaggerDoc = ref<SwaggerDoc | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  // 加载 Swagger 文档数据
  async function loadDocData() {
    loading.value = true
    error.value = null
    try {
      const res = await getApiDocs()
      // const json = await mockApi()
      console.log('swaggerDoc', res)
      swaggerDoc.value = res!
      // localStorage.setItem('swagger_last_url', url)
      setDefaultSelected()
    } catch (e: any) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }

  loadDocData()

  // 服务列表
  const serviceList = computed(() => {
    return swaggerConfig.value?.urls || []
  })

  // 获取当前服务地址
  async function getCurrentServiceUrl() {
    if (currentServiceUrl.value) {
      return currentServiceUrl.value
    }
    await getSwaggerConfig()
    return currentServiceUrl.value
  }

  function groupByTags(): ApiGroup[] {
    if (!swaggerDoc.value) return []
    const groups: Record<string, ApiGroup> = {}
    Object.entries(swaggerDoc.value.paths).forEach(([path, methods]) => {
      Object.entries(methods).forEach(([method, item]) => {
        const tags = item?.tags?.length ? item.tags : ['default']
        tags.forEach((tag: string) => {
          if (!groups[tag]) groups[tag] = { tag, apis: [] }
          groups[tag].apis.push({ method: method.toUpperCase(), path, item })
        })
      })
    })
    console.log('groupByTags', Object.values(groups))
    return Object.values(groups)
  }

  const groupData = computed(() => {
    return groupByTags()
  })

  // 获取接口最前面的路径
  const getApiPrefix = (path: string) => {
    return path.split('/')[1]
  }

  type PathMap = Record<string, { method: string; path: string; item: OpenAPIV3.OperationObject }[]>
  const pathMaps = computed(() => {
    return Object.entries(swaggerDoc.value?.paths || []).reduce<PathMap>((pre, cur) => {
      const [path, methods] = cur
      Object.entries(methods as string).forEach(([method, item]) => {
        const tags = item.tags?.length ? item.tags : ['default']
        tags.forEach((tag) => {
          if (!pre[tag]) pre[tag] = []
          pre[tag].push({
            method: method,
            path,
            item,
          })
        })
      })
      return pre
    }, {})
  })

  const tagsGroupData = computed<TagGroup[]>(() => {
    console.log('pathMaps.value', pathMaps.value)
    return (
      swaggerDoc.value?.tags?.map((item) => {
        // 接口前缀
        const apiPrefix = `/${item.description}`
        return {
          name: item.name,
          description: item.description,
          apiPrefix,
          groups: pathMaps.value[item.name] || [],
        }
      }) || []
    )
  })

  const selected = ref<TagGroup['groups'][number]>()

  // 设置默认选中的接口
  function setDefaultSelected() {
    const { path, method } = route.query
    if (!path || !method) return
    let findItem: OpenAPIV3.OperationObject | null = null
    tagsGroupData.value.forEach((d) => {
      d.groups.forEach((i) => {
        if (i.method === method && i.path === path) {
          findItem = i.item
        }
      })
    })
    if (!findItem) return
    selected.value = {
      method: method as string,
      path: path as string,
      item: findItem!,
    }
  }

  return {
    getCurrentServiceUrl,
    currentServiceUrl,
    serviceList,
    swaggerConfigLoading,
    swaggerDoc,
    loading,
    error,
    groupData,
    tagsGroupData,
    loadDocData,
    selected,
  }
})

export type TagGroup = {
  name: string
  description: string
  apiPrefix: string
  groups: { method: string; path: string; item: OpenAPIV3.OperationObject }[]
}

export type TagGroupItem = TagGroup['groups'][number]
