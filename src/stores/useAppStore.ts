import { defineStore } from 'pinia'
import { useSwaggerConfig } from '@/composables/useSwaggerConfig.ts'
import { computed, ref } from 'vue'
import { getSwaggerConfig } from '@/api/swagger.ts'
import { useRoute } from 'vue-router'

type SwaggerConfig = {
  urls: {
    url: string
    name: string
  }[]
}

export const useAppStore = defineStore('appStore', () => {
  const route = useRoute()
  // 从路由参数中获取当前服务
  const currentServiceUrl = computed(() => {
    return route.query.service as string | undefined
  })

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
            currentServiceUrl.value = res.urls[0].url
          }
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

  // const {
  //   swaggerConfig,
  //   loadData: getSwaggerConfig,
  //   loading: swaggerConfigLoading,
  // } = useSwaggerConfig(setCurrentServiceUrl)

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

  return {
    getCurrentServiceUrl,
    currentServiceUrl,
    serviceList,
    swaggerConfigLoading,
  }
})
