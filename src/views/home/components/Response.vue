<script setup lang="ts" name="Response">
import { computed, ref } from 'vue'
import { schemaToTs } from '@/utils/swaggerToTs.ts'
import type { SwaggerDoc } from '@/api/data.type.ts'
import HighlightCode from '@/components/HighlightCode.vue'
import type { TagGroupItem } from '@/stores/useAppStore.ts'
import CopyIcon from '@/components/CopyIcon.vue'
import copyToClipboard from '@/utils/copyToClipboard/copyToClipboard.ts'

type TItem = TagGroupItem
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
        ? schemaToTs(schema, props.swaggerDoc.components?.schemas!, 'ResponseData')
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

const onCopy = () => {
  copyToClipboard(tabs.value.find((tab) => tab.key === activeTab.value)?.content || '')
}
</script>
<template>
  <div class="response">
    <div class="tabs-card">
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
        <CopyIcon style="margin-left: auto; margin-right: 15px" @click="onCopy" />
      </div>
      <div class="tab-content">
        <div v-for="tab in tabs" :key="tab.key">
          <HighlightCode :content="tab.content" v-if="tab.key === activeTab" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.response {
  //height: 100%;
  .tabs-card {
    max-height: 100%;
    background-color: #f2f5fa;
    border: 1px solid rgb(10 13 17 / 0.1);
    padding: 0 2px 2px;
    border-radius: 12px;
    position: relative;
    display: flex;
    flex-direction: column;
    .tab-head {
      display: flex;
      height: 34px;
      align-items: center;
      position: sticky;
      z-index: 100;
      top: 0;
      background-color: #f2f5fa;
      flex-shrink: 0;
      .tab {
        text-align: center;
        padding: 0 12px;
        cursor: pointer;
        &.active {
          font-weight: bold;
          color: var(--color-primary);
        }
      }
    }
    .tab-content {
      min-height: 48px;
      border-radius: 12px;
      //width: calc(100% - var(--scrollbar-width));
      overflow: auto;
      position: relative;
      //overflow: overlay;
    }
  }
}
</style>
