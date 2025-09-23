import { computed, ref } from 'vue'
import type { ApiGroup } from '@/types/swagger'
import type { PostClass, SwaggerDoc } from '@/api/data.type.ts'
import { getApiDocs } from '@/api/swagger.ts'

export function useSwagger() {
  const swaggerDoc = ref<SwaggerDoc | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchSwagger(url?: string) {
    loading.value = true
    error.value = null
    try {
      const res = await getApiDocs()
      // const json = await mockApi()
      console.log('swaggerDoc', res)
      swaggerDoc.value = res
      // localStorage.setItem('swagger_last_url', url)
    } catch (e: any) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }

  // const definitions = comment(swaggerDoc.value?.definitions)

  fetchSwagger()

  function groupByTags(): ApiGroup[] {
    if (!swaggerDoc.value) return []
    const groups: Record<string, ApiGroup> = {}
    Object.entries(swaggerDoc.value.paths).forEach(([path, methods]) => {
      Object.entries(methods).forEach(([method, item]) => {
        const tags = item.tags?.length ? item.tags : ['default']
        tags.forEach((tag) => {
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

  type PathMap = Record<string, { method: string; path: string; item: PostClass }[]>
  const pathMaps = computed(() => {
    return Object.entries(swaggerDoc.value?.paths || []).reduce<PathMap>((pre, cur) => {
      const [path, methods] = cur
      Object.entries(methods).forEach(([method, item]) => {
        const tags = item.tags?.length ? item.tags : ['default']
        tags.forEach((tag) => {
          if (!pre[tag]) pre[tag] = []
          pre[tag].push({
            method: method,
            path,
            item,
          })
        })
        // if (!Array.isArray(pre[apiPrefix])) pre[apiPrefix] = []
        // pre[apiPrefix].push({
        //   method: method,
        //   path,
        //   item,
        // })
      })
      return pre
    }, {})
  })

  const tagsGroupData = computed<TagGroup[]>(() => {
    console.log('pathMaps', pathMaps.value)
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

  return { swaggerDoc, loading, error, fetchSwagger, groupByTags, groupData, tagsGroupData }
}

export type TagGroup = {
  name: string
  description: string
  apiPrefix: string
  groups: { method: string; path: string; item: PostClass }[]
}
