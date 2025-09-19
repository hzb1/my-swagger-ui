import { getSwaggerConfig } from '@/api/swagger.ts'
import { type Ref, ref } from 'vue'

export const useSwaggerConfig = (setCurrentServiceUrl: (url: string) => void) => {
  const swaggerConfig = ref()

  const loading = ref(false)

  // 是否已加载
  const isLoaded = ref(false)

  // loadData 的 Promise
  let loadDataPromise: Promise<void> | null = null

  const loadData = async () => {
    if (isLoaded.value) return
    if (loadDataPromise) return loadDataPromise
    loadDataPromise = new Promise<void>((resolve, reject) => {
      loading.value = true
      getSwaggerConfig()
        .then((res) => {
          swaggerConfig.value = res
          isLoaded.value = true
          // 初始化 currentServiceUrl
          if (res?.urls?.length) {
            setCurrentServiceUrl(res.urls[0].url)
          }
          resolve()
        })
        .catch((e) => {
          console.error('load swagger config failed', e)
          reject(e)
        })
        .finally(() => {
          loading.value = false
          loadDataPromise = null
        })
    })
  }

  if (!loading.value && !isLoaded.value) {
    loadData()
  }

  return { swaggerConfig, loading, loadData }
}
