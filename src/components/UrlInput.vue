<script setup lang="ts">
import { ref, onMounted } from 'vue'

const emit = defineEmits<{ (e: 'fetch', url: string): void }>()

const url = ref('')
onMounted(() => {
  const last = localStorage.getItem('swagger_last_url')
  if (last) url.value = last
})
function submit() {
  if (url.value.trim()) emit('fetch', url.value.trim())
}
</script>

<template>
  <el-form @submit.prevent class="flex items-center gap-2">
    <el-input v-model="url" placeholder="输入 Swagger JSON URL" clearable style="width: 70%" />
    <el-button type="primary" @click="submit">加载</el-button>
  </el-form>
</template>
