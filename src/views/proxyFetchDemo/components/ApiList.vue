<template>
  <div>
    <h3>接口列表</h3>
    <ul>
      <li
        v-for="api in apis"
        :key="api.method + api.path"
        @click="$emit('select', api)"
        style="cursor: pointer; margin: 5px 0"
      >
        <strong>{{ api.method }}</strong> {{ api.path }} - {{ api.summary }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { SwaggerApi } from '../types'

const props = defineProps<{ apis: SwaggerApi[] }>()
const emit = defineEmits<{
  (e: 'select', api: SwaggerApi): void
}>()
</script>
