<script setup lang="ts" name="TabsCard">
import copyToClipboard from '@/utils/copyToClipboard/copyToClipboard.ts'

type Tab = {
  key: string
  name: string
  content: string
}

const props = withDefaults(
  defineProps<{
    tabs: Tab[]
    activeKey: string
  }>(),
  {},
)
// const emit = defineEmits<{}>();
import HighlightCode from '@/components/HighlightCode.vue'
import CopyIcon from '@/components/CopyIcon.vue'

const onCopy = () => {
  const activeTab = props.tabs.find((tab) => tab.key === props.activeKey)
  copyToClipboard(activeTab?.content || '')
}
</script>
<template>
  <div class="tabs-card">
    <div class="tab-head">
      <div
        class="tab"
        v-for="tab in tabs"
        :key="tab.key"
        :class="{
          active: activeKey,
        }"
      >
        {{ tab.name }}
      </div>
      <CopyIcon style="margin-left: auto; margin-right: 15px" @click="onCopy" />
    </div>
    <div class="tab-content">
      <div v-for="tab in tabs" :key="tab.key">
        <HighlightCode :content="tab.content" v-if="tab.key === activeKey" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.tabs-card {
}
</style>
