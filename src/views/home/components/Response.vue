<script setup lang="ts" name="Response">
import type { TagGroup } from '@/composables/useSwagger.ts'
import { computed, ref } from 'vue'
import { schemaToTs } from '@/utils/swaggerToTs.ts'
import type { SwaggerDoc } from '@/api/data.type.ts'
import HighlightCode from '@/components/HighlightCode.vue'

type TItem = TagGroup['groups'][number]
const props = withDefaults(
  defineProps<{
    data: TItem
    swaggerDoc: SwaggerDoc
  }>(),
  {},
)
// const emit = defineEmits<{}>();

const tabs = computed(() => {
  const responses = Object.entries(props.data?.item.responses || {})
  return (
    responses.map(([key, item]) => {
      const schema = item?.content?.['*/*']?.schema
      const content = schema
        ? schemaToTs(schema, props.swaggerDoc.components.schemas, 'ResponseData')
        : 'any'
      return {
        name: key,
        key: key,
        content,
      }
    }) || []
  )
})

const activeTab = ref(tabs.value[0]?.key || '')
</script>
<template>
  <div class="response">
    <div class="tabs-card">
      <div class="tabs">
        <div class="tab-head">
          <div
            class="tab"
            v-for="tab in tabs"
            :key="tab.key"
            :class="{
              active: activeTab === tab.key,
            }"
          >
            {{ tab.name }}
          </div>
        </div>
      </div>
      <div class="tab-content">
        <div v-for="tab in tabs" :key="tab.key">
          <HighlightCode :content="tab.content" v-if="tab.key === activeTab" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.response {
  padding: 24px;
  display: flex;
  height: 100%;
  width: 100%;
  overflow: auto;
  .tabs-card {
    flex: 1;
    background-color: wheat;
    .tab-head {
      display: flex;
      .tab {
        flex: 1;
        text-align: center;
        padding: 12px 0;
        cursor: pointer;
        &.active {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
