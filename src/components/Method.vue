<script setup lang="ts" name="Method">
const props = withDefaults(
  defineProps<{
    name: string
  }>(),
  {},
)
// const emit = defineEmits<{}>();
</script>

<template>
  <span class="method" :class="[name]">
    {{ name }}
  </span>
</template>

<style scoped lang="less">
.method {
  //margin-right: 8px;
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
</style>
