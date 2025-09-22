<script setup lang="ts" name="Detail">
import type { TagGroup } from '@/composables/useSwagger.ts'
import { computed } from 'vue'

type TItem = TagGroup['groups'][number]
const props = withDefaults(
  defineProps<{
    data: TItem
  }>(),
  {},
)
// const emit = defineEmits<{}>();
console.log('data', props.data)

// 接口名称
const nameText = computed(() => props.data.item.summary || props.data.item.description)

// 请求方法
const methodText = computed(() => props.data?.method.toUpperCase())
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
  </div>
</template>

<style scoped>
.detail {
  .header {
  }
}
</style>
