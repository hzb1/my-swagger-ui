<script setup lang="ts" name="Detail">
import type { TagGroup } from '@/composables/useSwagger.ts'
import { computed } from 'vue'
import HighlightCode from '@/components/HighlightCode.vue'
import { getSchemaByRef, schemaToTsCode } from '@/utils/swaggerToTs.ts'
import type { SwaggerDoc } from '@/api/data.type.ts'

type TItem = TagGroup['groups'][number]
const props = withDefaults(
  defineProps<{
    data: TItem
    swaggerDoc: SwaggerDoc
  }>(),
  {},
)
// const emit = defineEmits<{}>();
console.log('data', props.data)

// 接口名称
const nameText = computed(() => props.data.item.summary || props.data.item.description)

// 请求方法
const methodText = computed(() => props.data?.method.toUpperCase())

const requestTypes = computed(() => {
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
  return schemaToTsCode(schema, props.swaggerDoc)
})
</script>
<template>
  <div class="detail">
    <div class="header">
      <div class="name">{{ nameText }}</div>
      <div>
        <div class="method">{{ methodText }}</div>
        <div class="path" style="margin-left: 12px">{{ data.path }}</div>
      </div>
    </div>

    <div class="request-types">
      <div class="title">QueryParams</div>
      <div class="types">
        <HighlightCode :content="requestTypes" v-if="queryParams" />
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
  padding: 0 12px 24px;
  .header {
  }
}
</style>
