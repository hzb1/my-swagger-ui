<template>
  <div class="api-explorer">
    <header class="navbar">
      <div class="logo">API Type Explorer</div>
      <div class="nav-tools">
        <select
          v-if="config"
          :value="currentServiceUrl"
          @change="(e) => loadDoc((e.target as HTMLSelectElement).value)"
        >
          <option v-for="u in config.urls" :key="u.url" :value="u.url">{{ u.name }}</option>
        </select>

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
              <span v-for="h in searchHistory" :key="h" @click="searchQuery = h" class="h-tag">{{
                h
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="main-body">
      <aside class="sidebar">
        <div class="api-tree">
          <div v-for="(apis, tag) in filteredGroupedApis" :key="tag" class="tag-section">
            <div class="tag-title">{{ tag }}</div>
            <div
              v-for="api in apis"
              :key="api.path + api.method"
              :class="['api-card', { active: selectedApi === api }]"
              @click="handleSelectApi(api)"
            >
              <div class="api-card-top">
                <span :class="['m-badge', api.method.toLowerCase()]">{{ api.method }}</span>
                <span v-if="api.matchType" class="match-indicator">{{ api.matchType }}匹配</span>
              </div>
              <div class="api-card-path">{{ api.path }}</div>
              <div class="api-card-summary">{{ api.summary || '未命名接口' }}</div>
            </div>
          </div>
        </div>
      </aside>

      <main class="content-area">
        <div v-if="selectedApi" class="code-container">
          <div class="code-header">
            <h2>{{ selectedApi.summary }}</h2>
            <div class="api-url">
              <code>{{ selectedApi.method }}</code> {{ selectedApi.path }}
            </div>
          </div>

          <div v-for="(code, title) in tsCodeParts" :key="title" class="code-section">
            <div v-if="code && !code.includes('//')" class="section-card">
              <div class="section-header">
                <span class="section-tag">{{ title }}</span>
                <button @click="copy(code)">复制代码</button>
              </div>
              <pre><code class="hljs" v-html="highlight(code)"></code></pre>
            </div>
          </div>
        </div>
        <div v-else class="empty-view">请从左侧列表选择接口</div>
      </main>

      <aside class="config-panel">
        <div class="panel-h">配置</div>

        <div class="c-group">
          <label>缩进</label>
          <select v-model="genOptions.indent">
            <option :value="2">2 个空格</option>
            <option :value="4">4 个空格</option>
          </select>
        </div>

        <div class="c-group">
          <label>数组风格</label>
          <select v-model="genOptions.arrayType">
            <option value="bracket">any[]</option>
            <option value="generic">Array&lt;any&gt;</option>
          </select>
        </div>

        <div class="c-group">
          <label>命名映射器 (后缀转换)</label>
          <select v-model="namingState.strategy">
            <option value="none">保持原样</option>
            <option value="removeVO">移除 VO 后缀</option>
            <option value="removeDTO">移除 DTO 后缀</option>
            <option value="prefixI">增加 I 前缀</option>
          </select>
        </div>

        <div class="c-checks">
          <label><input type="checkbox" v-model="genOptions.addExport" /> 导出(export)</label>
          <label><input type="checkbox" v-model="genOptions.semicolon" /> 使用分号</label>
          <label><input type="checkbox" v-model="genOptions.includeComment" /> 包含注释</label>
          <label><input type="checkbox" v-model="genOptions.useInterface" /> 优先 Interface</label>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'
import hljs from 'highlight.js/lib/core'
import typescript from 'highlight.js/lib/languages/typescript'
import 'highlight.js/styles/atom-one-dark.css'
import { useSwagger } from '../composables/useSwagger'
import { SwaggerToTS, type GeneratorOptions } from '@/utils/SwaggerParser.ts'
import { swaggerConfigUrl } from '@/api/swagger.ts'

hljs.registerLanguage('typescript', typescript)

const {
  config,
  document,
  currentServiceUrl,
  searchQuery,
  searchHistory,
  filteredGroupedApis,
  init,
  loadDoc,
  saveHistory,
  clearHistory,
} = useSwagger()

const selectedApi = ref<any>(null)

// 命名策略管理
const namingState = reactive({ strategy: 'removeVO' })
const applyNaming = (name: string) => {
  if (namingState.strategy === 'removeVO') return name.replace(/VO$/i, '')
  if (namingState.strategy === 'removeDTO') return name.replace(/DTO$/i, '')
  if (namingState.strategy === 'prefixI') return 'I' + name
  return name
}

const genOptions = reactive<GeneratorOptions>({
  indent: 2,
  useInterface: true,
  addExport: true,
  includeComment: true,
  optionalStyle: 'question',
  semicolon: true,
  arrayType: 'bracket',
  typeNameMapper: applyNaming,
})

onMounted(() => init(swaggerConfigUrl))

const handleSelectApi = (api: any) => {
  selectedApi.value = api
  if (searchQuery.value) saveHistory(searchQuery.value)
}

const tsCodeParts = computed(() => {
  if (!document.value || !selectedApi.value) return null
  const parser = new SwaggerToTS(document.value, genOptions)
  const res = parser.getStructuredTypes(selectedApi.value.path, selectedApi.value.method)
  return {
    '依赖模型 (Models)': res.models,
    '查询参数 (Query)': res.queryParams,
    '请求体 (Body)': res.requestBody,
    '响应数据 (Response)': res.responseData,
  }
})

const highlight = (code: string) => hljs.highlight(code, { language: 'typescript' }).value
const copy = (c: string) => {
  navigator.clipboard.writeText(c)
  alert('已复制')
}
</script>

<style scoped>
/* 核心布局 */
.api-explorer {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: sans-serif;
  background: #fff;
}
.navbar {
  height: 50px;
  background: #24292e;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
.nav-tools {
  display: flex;
  gap: 15px;
  align-items: center;
}
.search-box {
  position: relative;
}
.search-input {
  width: 280px;
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  background: #444d56;
  color: white;
  outline: none;
}

/* 搜索历史 */
.history-popover {
  position: absolute;
  top: 38px;
  left: 0;
  width: 300px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  z-index: 99;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 10px;
}
.popover-header {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
}
.popover-header button {
  border: none;
  background: none;
  color: #0366d6;
  cursor: pointer;
}
.history-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.h-tag {
  background: #f1f3f5;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 11px;
  cursor: pointer;
  color: #333;
}
.h-tag:hover {
  background: #e1e4e8;
}

.main-body {
  display: flex;
  flex: 1;
  overflow: hidden;
}

/* 侧边栏 */
.sidebar {
  width: 320px;
  border-right: 1px solid #e1e4e8;
  overflow-y: auto;
  background: #fafbfc;
}
.tag-title {
  background: #f1f3f5;
  padding: 8px 15px;
  font-size: 12px;
  font-weight: bold;
  color: #586069;
  border-bottom: 1px solid #e1e4e8;
}
.api-card {
  padding: 12px 15px;
  border-bottom: 1px solid #f1f1f1;
  cursor: pointer;
  transition: 0.2s;
}
.api-card:hover {
  background: #fff;
}
.api-card.active {
  background: #e6f7ff;
  border-right: 4px solid #1890ff;
}
.api-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
}
.m-badge {
  font-size: 10px;
  font-weight: bold;
  padding: 1px 4px;
  border-radius: 3px;
  color: white;
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
.match-indicator {
  font-size: 10px;
  color: #ff4d4f;
  border: 1px solid #ffa39e;
  padding: 0 3px;
  border-radius: 2px;
}
.api-card-path {
  font-size: 13px;
  font-family: monospace;
  font-weight: bold;
  color: #333;
  word-break: break-all;
}
.api-card-summary {
  font-size: 12px;
  color: #666;
  margin-top: 4px;
}

/* 内容区 */
.content-area {
  flex: 1;
  overflow-y: auto;
  padding: 30px;
  background: #fff;
}
.code-header {
  margin-bottom: 30px;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
}
.api-url code {
  background: #f1f3f5;
  color: #d73a49;
  padding: 2px 6px;
  border-radius: 4px;
}
.section-card {
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  margin-bottom: 25px;
  overflow: hidden;
}
.section-header {
  background: #f6f8fa;
  padding: 8px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e1e4e8;
}
.section-tag {
  font-size: 12px;
  font-weight: bold;
  color: #24292e;
}
.section-header button {
  font-size: 12px;
  color: #0366d6;
  border: 1px solid #d1d5da;
  background: white;
  padding: 2px 8px;
  border-radius: 3px;
  cursor: pointer;
}
code.hljs {
  padding: 15px;
  font-family: 'Fira Code', monospace;
  font-size: 12px;
  line-height: 1.5;
}

/* 配置栏 */
.config-panel {
  width: 260px;
  border-left: 1px solid #e1e4e8;
  background: #fafbfc;
  padding: 20px;
}
.panel-h {
  font-weight: bold;
  margin-bottom: 15px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 8px;
}
.c-group {
  margin-bottom: 15px;
}
.c-group label {
  display: block;
  font-size: 12px;
  color: #666;
  margin-bottom: 5px;
}
.c-group select {
  width: 100%;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
}
.c-checks {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}
.c-checks label {
  font-size: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
}
</style>
