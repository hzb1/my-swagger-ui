<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import type { SwaggerPathItem } from '@/types/swagger'
import { ElMessage } from 'element-plus'
import type { SwaggerDoc, SwaggerSchema } from '@/api/data.type.ts'
import { schemaToTs } from '@/utils/swaggerToTs.ts'
// Using ES6 import syntax
import hljs from 'highlight.js/lib/core'
import typescript from 'highlight.js/lib/languages/typescript'
// import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/styles/atom-one-dark.css'
// import 'highlight.js/styles/dark.css'
// Then register the languages you need
hljs.registerLanguage('typescript', typescript)

const props = defineProps<{
  doc: SwaggerDoc
  path: string
  method: string
}>()

// 接口名称
const name = computed(() => item.value?.summary || item.value?.description)

// 请求方法
const methodText = computed(() => props.method.toUpperCase())

const item = computed(() => props.doc.paths[props.path]?.[props.method.toLowerCase()] || null)

function copyText(text: string) {
  navigator.clipboard.writeText(text)
  ElMessage.success('已复制 TS 类型')
}

const requestTypes = computed(
  () =>
    item.value?.parameters
      ?.map((p) => {
        const desc = p.description ? `/** ${p.description} */\n` : ''
        return `${desc}${p.name}${p.required ? '' : '?'}: ${p.schema?.type || 'any'}`
      })
      .join(';\n') || '无',
)

// 响应数据
const responseData = computed(() => {
  const resp = item.value?.responses?.['200']
  const schema = resp?.content?.['*/*']?.schema
  return schema ? schemaToTs(schema, props.doc.components.schemas, 'ResponseData') : 'any'
})

const highlightedCode = computed(() => {
  return hljs.highlight(responseData.value, { language: 'typescript' }).value
})
</script>

<template>
  <el-card v-if="item" class="box-card">
    <template #header>
      <h2>{{ name }}</h2>
      <div style="display: flex; align-items: center">
        <el-tag type="primary" size="small">{{ methodText }} </el-tag>
        <div class="text-lg font-bold" style="margin-left: 12px">{{ path }}</div>
      </div>
    </template>

    <!--    <el-descriptions :column="1" border>-->
    <!--      <el-descriptions-item label="说明" label-width="6em">-->
    <!--        {{ item.summary || item.description }}-->
    <!--      </el-descriptions-item>-->
    <!--    </el-descriptions>-->

    <h3>请求参数</h3>
    <el-input type="textarea" :rows="6" readonly :model-value="requestTypes" />
    <el-button type="primary" size="small" class="mt-2" @click="copyText(requestTypes)"
      >复制</el-button
    >

    <h3>响应数据</h3>
    <!--    <el-input type="textarea" :rows="8" readonly :model-value="responseTypes" />-->
    <div class="code-container">
      <pre v-html="highlightedCode"></pre>
    </div>

    <el-button type="primary" size="small" class="mt-2" @click="copyText(responseData)"
      >复制</el-button
    >
  </el-card>
</template>

<style scoped>
.code-container {
  background-color: #282c34;
  padding: 12px;
  border-radius: 12px;
  overflow-x: auto;
  color: #999;
  position: relative;
}
</style>
