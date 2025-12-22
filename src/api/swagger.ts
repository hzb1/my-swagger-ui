import type { SwaggerConfig, SwaggerDoc } from '@/api/data.type.ts'
import { useAppStore } from '@/stores/useAppStore.ts'

// export const apiDocsUrl = '/api-proxy/transport/v3/api-docs'
export const swaggerConfigUrl = '/api-proxy/v3/api-docs/swagger-config'

const isMock: boolean = import.meta.env.VITE_MOCK === 'true'
console.warn('VITE_MOCK', isMock, import.meta.env.VITE_MOCK)

export async function mockApi(url: string) {
  const a = url.split('/').filter(Boolean)
  const s = a[0]
  // return fetch(`/data/${s}.json`).then((res) => res.json() as Promise<SwaggerDoc>)
  return fetch(`/data/gm/${s}.json`).then((res) => res.json() as Promise<SwaggerDoc>)
}

export async function mockSwaggerConfigApi() {
  // return fetch('/data/swagger-config.json').then((res) => res.json() as Promise<SwaggerConfig>)
  return fetch('/data/gm/swagger-config.json').then((res) => res.json() as Promise<SwaggerConfig>)
}

export async function getApiDocs(currentServiceUrl: string) {
  // const { getCurrentServiceUrl } = useAppStore()
  // const currentServiceUrl = await getCurrentServiceUrl()
  if (isMock) return mockApi(currentServiceUrl!)
  console.warn('currentServiceUrl', currentServiceUrl)
  const res = await fetch(`/api-proxy${currentServiceUrl}`)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return (await res.json()) as SwaggerDoc
}

export async function getSwaggerConfig() {
  if (isMock) return mockSwaggerConfigApi()

  const res = await fetch(swaggerConfigUrl)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return (await res.json()) as { urls: { url: string; name: string }[] }
}
