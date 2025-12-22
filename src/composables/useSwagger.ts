import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import type { OpenAPI } from 'openapi-types'
import { apiProxyPrefix } from '@/config.ts'

export function useSwagger() {
  const config = ref<{ urls: { name: string; url: string }[] } | null>(null)
  const document = ref<OpenAPI.Document | null>(null)
  const currentServiceUrl = ref('')
  const loading = ref(false)
  const error = ref<string | null>(null)

  // 搜索相关
  const searchQuery = ref('')
  const searchHistory = ref<string[]>([])
  const MAX_HISTORY = 12

  // 初始化历史记录
  onMounted(() => {
    const saved = localStorage.getItem('swagger_search_history')
    if (saved) searchHistory.value = JSON.parse(saved)
  })

  // 加载 Swagger 配置
  const init = async (configUrl: string) => {
    loading.value = true
    try {
      const res = await axios.get(configUrl)
      config.value = res.data
      if (res.data.urls?.length) await loadDoc(res.data.urls[0].url)
    } catch (err: any) {
      error.value = '配置加载失败'
    } finally {
      loading.value = false
    }
  }

  // 加载具体的 Swagger JSON 文档
  const loadDoc = async (url: string) => {
    loading.value = true
    currentServiceUrl.value = url
    try {
      const res = await axios.get(`${apiProxyPrefix}${url}`)
      document.value = res.data
    } catch (err: any) {
      error.value = '文档加载失败'
    } finally {
      loading.value = false
    }
  }

  // 保存搜索历史
  const saveHistory = (text: string) => {
    const val = text.trim()
    if (!val) return
    const index = searchHistory.value.indexOf(val)
    if (index !== -1) searchHistory.value.splice(index, 1)
    searchHistory.value.unshift(val)
    if (searchHistory.value.length > MAX_HISTORY) searchHistory.value.pop()
    localStorage.setItem('swagger_search_history', JSON.stringify(searchHistory.value))
  }

  const clearHistory = () => {
    searchHistory.value = []
    localStorage.removeItem('swagger_search_history')
  }

  /**
   * 核心搜索逻辑：多维度扫描
   */
  const filteredGroupedApis = computed(() => {
    if (!document.value?.paths) return {}
    const groups: Record<string, any[]> = {}
    const query = searchQuery.value.toLowerCase().trim()

    Object.entries(document.value.paths).forEach(([path, pathItem]: [string, any]) => {
      ;['get', 'post', 'put', 'delete', 'patch'].forEach((method) => {
        const op = pathItem[method]
        if (!op) return

        let matchType = ''
        if (path.toLowerCase().includes(query)) matchType = '路径'
        else if (op.summary?.toLowerCase().includes(query)) matchType = '名称'
        else {
          // 扫描整个接口定义中是否包含该类名 ($ref)
          const opStr = JSON.stringify(op).toLowerCase()
          if (opStr.includes(query)) matchType = '类名'
        }

        if (!query || matchType) {
          const tag = op.tags?.[0] || 'Default'
          if (!groups[tag]) groups[tag] = []
          groups[tag].push({
            path,
            method: method.toUpperCase(),
            matchType: query ? matchType : '',
            ...op,
          })
        }
      })
    })
    return groups
  })

  return {
    config,
    document,
    currentServiceUrl,
    loading,
    error,
    searchQuery,
    searchHistory,
    filteredGroupedApis,
    init,
    loadDoc,
    saveHistory,
    clearHistory,
  }
}
