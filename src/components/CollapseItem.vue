<script setup lang="ts" name="CollapseItem">
const props = withDefaults(
  defineProps<{
    // 标题
    title: string
    // 是否展开
    expanded: boolean
  }>(),
  {},
)
// const emit = defineEmits<{}>();
</script>
<template>
  <div class="collapse-item">
    <div class="title">{{ title }}</div>
    <div class="content" :class="{ expanded: expanded }">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.collapse-item {
  margin-bottom: 12px;
  .title {
    font-size: 14px;
    font-weight: 600;
    line-height: 2em;
  }
}
</style>
