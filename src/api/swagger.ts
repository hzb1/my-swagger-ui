import { data, swaggerConfig } from '@/api/data.ts'
import type { SwaggerConfig, SwaggerDoc } from '@/api/data.type.ts'
import { useAppStore } from '@/stores/useAppStore.ts'

// export const apiDocsUrl = '/api-proxy/transport/v3/api-docs'
const swaggerConfigUrl = '/api-proxy/v3/api-docs/swagger-config'

export async function mockApi() {
  return new Promise<SwaggerDoc>((resolve, reject) => {
    resolve(data)
  })
}

export async function mockSwaggerConfigApi() {
  return new Promise<SwaggerConfig>((resolve, reject) => {
    setTimeout(() => {
      resolve(swaggerConfig)
    }, 1000)
  })
}

export async function getApiDocs() {
  // 开发阶段可改为 `${vite.config.ts}` 里配置的 /api-proxy
  // return mockApi()
  try {
    const { getCurrentServiceUrl } = useAppStore()
    const currentServiceUrl = await getCurrentServiceUrl()
    const res = await fetch(`/api-proxy${currentServiceUrl}`)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return await res.json()
  } catch (e) {
    return mockApi()
  }
}

export async function getSwaggerConfig() {
  // return mockSwaggerConfigApi()
  try {
    const res = await fetch(swaggerConfigUrl)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return (await res.json()) as { urls: { url: string; name: string }[] }
  } catch (e) {
    return mockSwaggerConfigApi()
  }
}
