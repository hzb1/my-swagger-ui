<script setup lang="ts" name="ApiItem">
import { computed } from 'vue'
import type { TagGroupItem } from '@/stores/useAppStore.ts'

const props = withDefaults(
  defineProps<{
    item: TagGroupItem
    active: boolean
  }>(),
  {},
)
// const emit = defineEmits<{}>();

// 最后的/路径
const lastPath = computed(() => {
  const { path } = props.item
  const lastItem = path.split('/').pop() || ''
  return lastItem ? `/${lastItem}` : ''
})

const name = computed(() => {
  // return props.item.item.description
  const {
    item: { summary, description },
  } = props.item
  return summary || description || lastPath.value
})
</script>
<template>
  <a class="api-item" :class="{ active: active }">
    <span class="method" :class="[item.method]">{{ item.method }}</span>
    <span class="name">{{ name }}</span>
  </a>
</template>

<style scoped>
.api-item {
  display: flex;
  align-items: center;
  padding: 6px 12px 6px 18px;
  color: var(--el-color-primary);
  font-weight: 600;
  border-radius: 12px;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: rgb(79 82 87 / 5%);
  }

  .method {
    margin-right: 8px;
    font-size: 14px;
    line-height: 1.25;
    padding: 2px 6px;
    border-radius: 6px;
    &.get {
      color: rgb(21 128 61);
      background-color: rgb(21 128 61 / 20%);
    }
    &.post {
      color: rgb(121, 187, 255);
      background-color: rgb(121 187 255 / 20%);
    }
    &.put {
      color: rgb(245 158 11);
      background-color: rgb(245 158 11 / 20%);
    }
    &.delete {
      color: rgb(220 38 38);
      background-color: rgb(220 38 38 / 20%);
    }
  }
  .name {
    color: var(--el-text-color-primary);
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
  }

  &.active {
    background-color: rgb(0 96 255 / 0.1);
    .name {
      font-weight: 600;
    }
  }
}
</style>
