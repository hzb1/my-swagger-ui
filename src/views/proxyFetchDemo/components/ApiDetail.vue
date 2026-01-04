<template>
  <div v-if="api">
    <h3>接口详情</h3>
    <div>
      <strong>{{ api.method }}</strong> {{ api.path }}
    </div>

    <div v-if="api.parameters?.length">
      <h4>参数</h4>
      <div v-for="param in api.parameters" :key="param.name">
        <label>{{ param.name }} ({{ param.in }})</label>
        <input v-model="form[param.name]" :placeholder="param.schema?.type || 'string'" />
      </div>
    </div>

    <div v-if="api.requestBody">
      <h4>请求 Body</h4>
      <textarea v-model="bodyText" rows="5" style="width: 100%"></textarea>
    </div>

    <button @click="callApi">调用接口</button>

    <h4>返回结果：</h4>
    <pre>{{ resultText }}</pre>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import type { SwaggerApi } from '../types'
import { request } from '@/utils/proxySdk.ts'

const props = defineProps<{ api: SwaggerApi | null }>()

const form = ref<Record<string, any>>({})
const bodyText = ref('')
const resultText = ref('')

watch(
  () => props.api,
  (api) => {
    form.value = {}
    bodyText.value = api?.requestBody ? JSON.stringify(api.requestBody, null, 2) : ''
    resultText.value = ''
  },
  { immediate: true },
)

async function callApi() {
  if (!props.api) return
  resultText.value = '请求中...'

  try {
    let url = props.api.path
    // path 参数替换
    if (props.api.parameters) {
      props.api.parameters.forEach((p) => {
        if (p.in === 'path' && form.value[p.name]) {
          url = url.replace(`{${p.name}}`, encodeURIComponent(form.value[p.name]))
        }
      })
    }

    // query 参数
    let queryStr = ''
    if (props.api.parameters) {
      const queryParams = props.api.parameters
        .filter((p) => p.in === 'query' && form.value[p.name] !== undefined)
        .map((p) => `${encodeURIComponent(p.name)}=${encodeURIComponent(form.value[p.name])}`)
        .join('&')
      if (queryParams) queryStr = '?' + queryParams
    }

    const fullUrl = url + queryStr

    let res
    if (props.api.method.toUpperCase() === 'GET') {
      res = await request(fullUrl)
    } else {
      const body = bodyText.value ? JSON.parse(bodyText.value) : {}
      res = await request(fullUrl, {
        method: props.api.method,
        body,
      })
    }

    resultText.value = JSON.stringify(res, null, 2)
  } catch (err: any) {
    resultText.value = '错误：' + err.message
  }
}
</script>
