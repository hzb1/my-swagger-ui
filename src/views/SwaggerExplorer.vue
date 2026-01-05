<template>
  <div class="api-explorer">
    <header class="navbar">
      <div class="logo">
        <span class="icon">⚡</span>
        TS API Generator
      </div>

      <div class="nav-tools">
        <div class="service-selector" v-if="config?.urls?.length">
          <select
            :value="currentServiceUrl"
            @change="(e) => handleServiceChange((e.target as HTMLSelectElement).value)"
            class="nav-select"
          >
            <option v-for="u in config.urls" :key="u.url" :value="u.url">
              {{ u.name }}
            </option>
          </select>
        </div>

        <div class="search-box">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="搜索路径/名称/类名..."
            class="search-input"
            @keyup.enter="saveHistory(searchQuery)"
          />
          <div v-if="searchHistory.length && !searchQuery" class="history-popover">
            <div class="popover-header">
              <span>最近搜索</span>
              <button @click="clearHistory">清空</button>
            </div>
            <div class="history-list">
              <span v-for="h in searchHistory" :key="h" @click="searchQuery = h" class="h-tag">
                {{ h }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="main-body">
      <aside class="sidebar">
        <div class="api-tree" v-if="!loading">
          <div v-for="(apis, tag) in filteredGroupedApis" :key="tag" class="tag-group">
            <div class="tag-title">{{ tag }}</div>
            <div
              v-for="api in apis"
              :key="api.path + api.method"
              :class="[
                'api-item',
                { active: selectedApi?.path === api.path && selectedApi?.method === api.method },
              ]"
              @click="handleSelectApi(api)"
            >
              <div class="api-item-top">
                <span :class="['m-badge', api.method.toLowerCase()]">{{ api.method }}</span>
                <span v-if="api.matchType" class="match-tag">{{ api.matchType }}匹配</span>
              </div>
              <div class="api-item-path">{{ api.path }}</div>
              <div class="api-item-summary">{{ api.summary || '未命名接口' }}</div>
            </div>
          </div>
        </div>
        <div v-else class="loading-side">加载中...</div>
      </aside>

      <main class="content-area">
        <div v-if="selectedApi" class="code-viewer">
          <div class="api-detail-header">
            <div class="title-row">
              <h2>{{ selectedApi.summary }}</h2>
              <button class="copy-all-btn" @click="copyFullFile">复制全量代码</button>
            </div>
            <div class="api-info-line">
              <code class="method-code">{{ selectedApi.method }}</code>
              <code class="path-code">{{ selectedApi.path }}</code>
            </div>
          </div>

          <div class="section-card request-card" v-if="tsCodeParts">
            <div class="block-header">
              <span class="block-title">🚀 Request Function</span>
              <button @click="copy(tsCodeParts['Request Function'])">复制</button>
            </div>
            <pre><code class="hljs" v-html="highlight(tsCodeParts['Request Function'])"></code></pre>
          </div>

          <div v-for="(code, title) in tsCodeParts" :key="title">
            <div
              v-if="title !== 'Request Function' && code && !code.includes('//')"
              class="section-card"
            >
              <div class="block-header">
                <span class="block-title">{{ title }}</span>
                <button @click="copy(code)">复制</button>
              </div>
              <pre><code class="hljs" v-html="highlight(code)"></code></pre>
            </div>
          </div>
        </div>
        <div v-else class="empty-state">
          <div class="empty-icon">📂</div>
          <p>请从左侧选择一个接口</p>
        </div>
      </main>

      <aside class="config-sidebar">
        <div class="config-section">
          <div class="section-h">请求函数模板 (JS)</div>
          <textarea
            v-model="configState.requestTemplateRaw"
            class="template-editor"
            spellcheck="false"
          ></textarea>
          <button class="reset-btn" @click="resetTemplate">重置模板</button>
        </div>

        <div class="config-section">
          <div class="section-h">生成选项</div>
          <div class="c-item">
            <label>命名映射</label>
            <select v-model="configState.namingStrategy">
              <option value="none">保持原样</option>
              <option value="removeVO">移除 VO 后缀</option>
              <option value="removeDTO">移除 DTO 后缀</option>
              <option value="prefixI">增加 I 前缀</option>
            </select>
          </div>

          <div class="c-grid">
            <label class="check-item">
              <input type="checkbox" v-model="configState.showExample" />
              展示 Example
            </label>
            <label class="check-item"
              ><input type="checkbox" v-model="configState.int64ToString" /> Int64转String</label
            >
            <label class="check-item"
              ><input type="checkbox" v-model="configState.useInterface" /> Interface</label
            >
            <label class="check-item"
              ><input type="checkbox" v-model="configState.addExport" /> Export</label
            >
            <label class="check-item"
              ><input type="checkbox" v-model="configState.semicolon" /> 分号</label
            >
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import hljs from 'highlight.js/lib/core'
import typescript from 'highlight.js/lib/languages/typescript'
import 'highlight.js/styles/atom-one-dark.css'

import { useSwagger } from '../composables/useSwagger'
import { useOptions } from '../composables/useOptions'
import { SwaggerToTS } from '../utils/SwaggerParser.ts'
import { swaggerConfigUrl } from '@/api/swagger.ts'

hljs.registerLanguage('typescript', typescript)

// 1. 调用 Swagger 业务逻辑
const {
  config,
  document,
  currentServiceUrl,
  loading,
  searchQuery,
  searchHistory,
  filteredGroupedApis,
  init,
  loadDoc,
  saveHistory,
  clearHistory,
} = useSwagger()

// 2. 调用配置持久化逻辑
const { configState, generatorOptions, resetTemplate } = useOptions()

const selectedApi = ref<any>(null)

// 从 URL 获取参数
const getUrlParams = () => {
  const params = new URLSearchParams(window.location.search)
  return {
    service: params.get('service'), // 服务 URL
    path: params.get('path'), // 接口路径
    method: params.get('method'), // 接口方法
  }
}

// 更新 URL 参数 (不触发刷新)
const updateUrl = (service: string, api?: any) => {
  const newUrl = new URL(window.location.href)
  newUrl.searchParams.set('service', service)
  if (api) {
    newUrl.searchParams.set('path', api.path)
    newUrl.searchParams.set('method', api.method)
  } else {
    newUrl.searchParams.delete('path')
    newUrl.searchParams.delete('method')
  }
  window.history.replaceState({}, '', newUrl.toString())
}

onMounted(async () => {
  const urlParams = getUrlParams()
  init(swaggerConfigUrl)

  // 2. 如果 URL 有指定服务，优先加载该服务；否则加载第一个
  const targetService = urlParams.service || config.value?.urls[0]?.url
  if (targetService) {
    await loadDoc(targetService)

    // 3. 服务加载完成后，尝试匹配接口
    if (urlParams.path && urlParams.method) {
      // 在 document 加载完后的接口列表中寻找
      const allApis = Object.entries(document.value?.paths!).flatMap(([path, methods]: any) =>
        Object.keys(methods).map((method) => ({ path, method, ...methods[method] })),
      )
      const match = allApis.find(
        (a) =>
          a.path === urlParams.path && a.method.toLowerCase() === urlParams.method?.toLowerCase(),
      )
      if (match) {
        selectedApi.value = match
      }
    }
  }
})

// 3. 计算最终生成的代码
const tsCodeParts = computed(() => {
  if (!document.value || !selectedApi.value) return null
  // 使用 useOptions 提供的 generatorOptions
  const parser = new SwaggerToTS(document.value, generatorOptions.value)
  const res = parser.getStructuredTypes(selectedApi.value.path, selectedApi.value.method)
  return {
    'Request Function': res.requestFunction,
    Models: res.models,
    'Query Params': res.queryParams,
    'Request Body': res.requestBody,
    'Response Data': res.responseData,
  }
})

const handleSelectApi = (api: any) => {
  selectedApi.value = api
  if (searchQuery.value) saveHistory(searchQuery.value)
  updateUrl(currentServiceUrl.value, api)
}

// 切换服务时的处理
const handleServiceChange = async (url: string) => {
  await loadDoc(url)
  selectedApi.value = null // 切换服务清空选中
  updateUrl(url)
}

const highlight = (code: string) => hljs.highlight(code, { language: 'typescript' }).value
const copy = (c: string) => {
  navigator.clipboard.writeText(c)
  alert('已复制')
}

const copyFullFile = () => {
  if (!tsCodeParts.value) return
  const fullCode = Object.values(tsCodeParts.value).join('\n\n')
  copy(fullCode)
}
</script>

<style scoped>
/* 样式部分保持不变，确保 z-index 层级正确 */
.api-explorer {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: -apple-system, sans-serif;
}
.navbar {
  height: 60px;
  background: #1a1a1a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1000;
  position: relative;
}
.nav-tools {
  display: flex;
  align-items: center;
  gap: 20px;
}
.nav-select {
  background: #333;
  color: white;
  border: 1px solid #444;
  padding: 6px 12px;
  border-radius: 4px;
  outline: none;
}

.search-box {
  position: relative;
}
.search-input {
  width: 300px;
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  background: #333;
  color: white;
  outline: none;
}

.history-popover {
  position: absolute;
  top: 42px;
  left: 0;
  width: 100%;
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  z-index: 1100;
  padding: 12px;
  border: 1px solid #eee;
}
.popover-header {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  color: #999;
  margin-bottom: 8px;
}
.popover-header button {
  border: none;
  background: none;
  color: #1890ff;
  cursor: pointer;
}
.history-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.h-tag {
  background: #f0f2f5;
  padding: 2px 10px;
  border-radius: 10px;
  font-size: 12px;
  color: #444;
  cursor: pointer;
}
.h-tag:hover {
  background: #e6f7ff;
  color: #1890ff;
}

.main-body {
  display: flex;
  flex: 1;
  overflow: hidden;
  background: #f4f7f9;
}
.sidebar {
  width: 320px;
  background: #fff;
  border-right: 1px solid #e1e4e8;
  overflow-y: auto;
}
.content-area {
  flex: 1;
  padding: 25px;
  overflow-y: auto;
}
.config-sidebar {
  width: 300px;
  background: white;
  border-left: 1px solid #e1e4e8;
  padding: 20px;
  overflow-y: auto;
}

.tag-title {
  background: #fafafa;
  padding: 10px 15px;
  font-size: 12px;
  font-weight: bold;
  color: #888;
  border-bottom: 1px solid #eee;
}
.api-item {
  padding: 12px 15px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
}
.api-item.active {
  background: #e6f7ff;
  border-right: 4px solid #1890ff;
}
.m-badge {
  font-size: 10px;
  padding: 1px 4px;
  border-radius: 3px;
  color: #fff;
  font-weight: bold;
  margin-right: 8px;
}
.get {
  background: #61affe;
}
.post {
  background: #49cc90;
}
.put {
  background: #fca130;
}
.delete {
  background: #f93e3e;
}

.section-card {
  background: white;
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  margin-bottom: 20px;
  overflow: hidden;
}
.request-card {
  border: 2px solid #1890ff;
}
.block-header {
  background: #f6f8fa;
  padding: 8px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e1e4e8;
}
code.hljs {
  padding: 15px;
  font-size: 13px;
  font-family: 'Fira Code', monospace;
  line-height: 1.5;
}

.template-editor {
  width: 100%;
  height: 260px;
  font-family: monospace;
  font-size: 11px;
  background: #282c34;
  color: #abb2bf;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  resize: vertical;
}
.c-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.check-item {
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}
</style>
