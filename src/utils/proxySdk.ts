import type {
  ProxyRequestMessage,
  ProxyResponseMessage,
  ProxyResult,
  RequestSpec,
  ResponseBody,
} from '../../../extension/src/shared/types'

/**
 * 生成唯一 requestId
 */
function genRequestId(): string {
  return 'req_' + Date.now() + '_' + Math.random().toString(16).slice(2)
}

/**
 * 核心 proxyFetch
 * 调用 Chrome 插件跨域请求
 */
export function proxyFetch(request: RequestSpec): Promise<ProxyResult> {
  console.log('proxyFetch request: ', request)
  return new Promise((resolve) => {

    const requestId = genRequestId()
    const message: ProxyRequestMessage = {
      type: 'PROXY_REQUEST',
      requestId,
      payload: request,
    }

    function handleMessage(event: MessageEvent) {
      const msg = event.data as ProxyResponseMessage
      if (!msg || msg.type !== 'PROXY_RESPONSE') return
      if (msg.requestId !== requestId) return
      window.removeEventListener('message', handleMessage)
      console.log('proxyFetch response: ', msg.result)
      resolve(msg.result)
    }

    window.addEventListener('message', handleMessage)
    window.postMessage(message, '*')
  })
}

/**
 * 构建 fetch 的 Body
 */
function buildBody(body?: any): BodyInit | undefined {
  if (!body) return undefined
  if (body.type === 'json') return JSON.stringify(body.value)
  if (body.type === 'text') return body.value
  if (body.type === 'form') return new URLSearchParams(body.value).toString()
}


/**
 * 插件是否启用
 */
let pluginEnabled: boolean | null = null

/**
 * 检查插件是否启用
 */
export async function checkPluginEnabled(timeout = 500): Promise<boolean> {
  if (pluginEnabled !== null) return pluginEnabled

  return new Promise((resolve) => {
    function handler(event: MessageEvent) {
      if (event.data?.type === 'PLUGIN_PONG') {
        pluginEnabled = true
        resolve(true)
        window.removeEventListener('message', handler)
      }
    }

    window.addEventListener('message', handler)
    window.postMessage({ type: 'PLUGIN_PING' }, '*')

    // 超时认为插件不可用
    setTimeout(() => {
      if (pluginEnabled === null) {
        pluginEnabled = false
        resolve(false)
        window.removeEventListener('message', handler)
      }
    }, timeout)
  })
}


/**
 * 统一请求方法
 * @param url 请求 URL
 * @param options { method, headers, body, timeout }
 */
export async function request(
  url: string,
  options?: {
    method?: string
    headers?: Record<string, string>
    body?: any
    timeout?: number
  },
): Promise<ProxyResult> {
  const method = options?.method?.toUpperCase() || 'GET'
  const headers = options?.headers
  const body = options?.body
  const timeout = options?.timeout


  const isPlugin = await checkPluginEnabled()

  if (isPlugin) {
    // 调用插件
    return proxyFetch({ url, method, headers, body, timeout })
  } else {
    // 浏览器原生 fetch
    try {
      const controller = new AbortController()
      if (timeout) setTimeout(() => controller.abort(), timeout)

      const res = await fetch(url, {
        method,
        headers,
        body: buildBody(body),
        signal: controller.signal,
      })

      const text = await res.text()
      let parsed: ResponseBody
      try {
        parsed = { type: 'json', value: JSON.parse(text) }
      } catch {
        parsed = { type: 'text', value: text }
      }

      return {
        ok: true,
        response: {
          url: res.url,
          status: res.status,
          statusText: res.statusText,
          headers: Object.fromEntries(res.headers.entries()),
          body: parsed,
        },
        timing: { startTime: Date.now(), endTime: Date.now(), duration: 0 },
      }
    } catch (err: any) {
      return { ok: false, error: { type: 'NETWORK_ERROR', message: err.message } }
    }
  }
}
