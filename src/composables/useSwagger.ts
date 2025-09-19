import { ref } from 'vue'
import type { ApiGroup } from '@/types/swagger'
import type { SwaggerDoc } from '@/api/data.type.ts'
import { mockApi, getApiDocs } from '@/api/swagger.ts'
import { comment } from 'postcss'

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
    return Object.values(groups)
  }

  return { swaggerDoc, loading, error, fetchSwagger, groupByTags }
}
