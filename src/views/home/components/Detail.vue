<script setup lang="ts" name="Detail">
import { computed } from 'vue'
import HighlightCode from '@/components/HighlightCode.vue'
import { schemaToTsCode } from '@/utils/swaggerToTs.ts'
import { type TagGroup, useAppStore } from '@/stores/useAppStore.ts'
import Method from '@/components/Method.vue'

type TItem = TagGroup['groups'][number]
const props = withDefaults(
  defineProps<{
    data: TItem
    // swaggerDoc: SwaggerDoc
  }>(),
  {},
)
// const emit = defineEmits<{}>();
console.log('data', props.data)

const appStore = useAppStore()
const swaggerDoc = computed(() => appStore.swaggerDoc)

// 接口名称
const nameText = computed(() => props.data.item.summary || props.data.item.description)

// 请求方法
const methodText = computed(() => props.data?.method)

const requestTypes = computed(() => {
  if (!props.data?.item?.parameters) return '// 无参数'
  const params = `
/** 司机管理分页返回数据 */
export interface Parameters {
${props.data?.item?.parameters
  ?.map((p) => {
    const desc = p.description ? `/** ${p.description} */\n` : ''
    return `${desc}${p.name}${p.required ? '' : '?'}: ${p.schema?.type || 'any'}`
  })
  .join(';\n')}
}
    `
  return params
})

// 提取查询参数
const queryParams = computed(() => {
  return props.data?.item?.parameters?.filter((p) => p.in === 'query') || []
})

// 提取body参数
// const bodyRef = computed(() => {
//   return props.data?.item?.requestBody?.content?.['application/json']?.schema?.$ref
// })

// 提取body参数
// const bodyParams = computed(() => {
//   if (!bodyRef.value) return undefined
//   return getSchemaByRef(bodyRef.value, props.swaggerDoc)
// })

// 把body参数转成ts代码
const bodyParamsTsCode = computed(() => {
  const schema = props.data?.item?.requestBody?.content?.['application/json']?.schema
  return schemaToTsCode(schema, swaggerDoc.value!)
})
</script>
<template>
  <div class="detail">
    <div class="header">
      <div class="name">{{ nameText }}</div>
      <div class="method-path">
        <Method class="method" :name="methodText" />
        <div class="path">{{ data.path }}</div>
      </div>
    </div>

    <div class="request-types">
      <div class="title">QueryParams</div>
      <div class="types">
        <HighlightCode :content="requestTypes" />
      </div>
    </div>

    <div class="request-types">
      <div class="title">Body</div>
      <div class="types">
        <HighlightCode :content="bodyParamsTsCode" v-if="bodyParamsTsCode" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail {
  padding: 24px;
  .header {
    .name {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 12px;
    }
    .method-path {
      display: flex;
      align-items: baseline;
      margin-bottom: 12px;
      .method {
        font-size: 16px;
        padding: 4px 8px;
      }
      .path {
        font-size: 16px;
        margin-left: 6px;
      }
    }
  }
}
</style>
