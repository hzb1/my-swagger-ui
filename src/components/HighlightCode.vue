<script setup lang="ts" name="HighlightCode">
import hljs from 'highlight.js/lib/core'
import typescript from 'highlight.js/lib/languages/typescript'
// import 'highlight.js/styles/atom-one-dark.css'
// import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/styles/atom-one-light.css'
import { computed } from 'vue'
import { ElMessage } from 'element-plus'
import copyToClipboard from '@/utils/copyToClipboard/copyToClipboard.ts'
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
  copyToClipboard(props.content)
  ElMessage.success('已复制 TS 类型')
}

defineExpose({
  copyText,
})
</script>
<template>
  <div class="highlight-code">
    <pre v-html="highlightedCode"></pre>
    <!--    <button class="copy-btn" @click="copyText()">-->
    <!--          <svg-->
    <!--            width="18"-->
    <!--            height="18"-->
    <!--            viewBox="0 0 18 18"-->
    <!--            fill="none"-->
    <!--            xmlns="http://www.w3.org/2000/svg"-->
    <!--            class="copy-icon"-->
    <!--          >-->
    <!--            <path-->
    <!--              d="M14.25 5.25H7.25C6.14543 5.25 5.25 6.14543 5.25 7.25V14.25C5.25 15.3546 6.14543 16.25 7.25 16.25H14.25C15.3546 16.25 16.25 15.3546 16.25 14.25V7.25C16.25 6.14543 15.3546 5.25 14.25 5.25Z"-->
    <!--              stroke="currentColor"-->
    <!--              stroke-width="1.5"-->
    <!--              stroke-linecap="round"-->
    <!--              stroke-linejoin="round"-->
    <!--            ></path>-->
    <!--            <path-->
    <!--              d="M2.80103 11.998L1.77203 5.07397C1.61003 3.98097 2.36403 2.96397 3.45603 2.80197L10.38 1.77297C11.313 1.63397 12.19 2.16297 12.528 3.00097"-->
    <!--              stroke="currentColor"-->
    <!--              stroke-width="1.5"-->
    <!--              stroke-linecap="round"-->
    <!--              stroke-linejoin="round"-->
    <!--            ></path>-->
    <!--          </svg>-->
    <!--    </button>-->
  </div>
</template>

<style scoped lang="less">
.highlight-code {
  //background-color: #282c34;
  background-color: #fff;
  padding: 12px;
  border-radius: 12px;
  overflow-x: auto;
  color: #999;
  font-size: 12px;
  .copy-btn {
    display: block;
    position: sticky;
    top: 0;
    right: 0;
  }
}
</style>
