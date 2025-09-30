<script setup lang="ts" name="HighlightCode">
import hljs from 'highlight.js/lib/core'
import typescript from 'highlight.js/lib/languages/typescript'
// import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/styles/atom-one-dark.css'
import { computed } from 'vue'
import { ElMessage } from 'element-plus'
// import 'highlight.js/styles/dark.css'
// Then register the languages you need
hljs.registerLanguage('typescript', typescript)
const props = withDefaults(
  defineProps<{
    content: string
    language?: string
  }>(),
  {
    language: 'typescript',
  },
)
// const emit = defineEmits<{}>();

const highlightedCode = computed(() => {
  return hljs.highlight(props.content, { language: 'typescript' }).value
})

function copyText() {
  navigator.clipboard.writeText(props.content)
  ElMessage.success('已复制 TS 类型')
}
</script>
<template>
  <div class="highlight-code">
    <pre v-html="highlightedCode"></pre>
    <button class="copy-btn" @click="copyText()">复制</button>
  </div>
</template>

<style scoped>
.highlight-code {
  position: relative;
  background-color: #282c34;
  padding: 12px;
  border-radius: 12px;
  overflow-x: auto;
  color: #999;
  font-size: 12px;
  .copy-btn {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
