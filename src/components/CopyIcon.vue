<script setup lang="ts" name="CopyIcon">
// const props = withDefaults(defineProps<{}>(), {});
// const emit = defineEmits<{}>();
</script>
<template>
  <a class="copy-icon">
    <el-tooltip content="Copy" :effect="'light'" placement="top">
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="copy-icon"
      >
        <path
          d="M14.25 5.25H7.25C6.14543 5.25 5.25 6.14543 5.25 7.25V14.25C5.25 15.3546 6.14543 16.25 7.25 16.25H14.25C15.3546 16.25 16.25 15.3546 16.25 14.25V7.25C16.25 6.14543 15.3546 5.25 14.25 5.25Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M2.80103 11.998L1.77203 5.07397C1.61003 3.98097 2.36403 2.96397 3.45603 2.80197L10.38 1.77297C11.313 1.63397 12.19 2.16297 12.528 3.00097"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </el-tooltip>
  </a>
</template>

<style scoped lang="less">
.copy-icon {
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 0.6;
  }
}
</style>
