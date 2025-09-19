<script setup lang="ts">
import ApiList from '@/components/ApiList.vue'
import ApiDetail from '@/components/ApiDetail.vue'
import { useSwagger } from '@/composables/useSwagger'
import { ref } from 'vue'
import { useAppStore } from '@/stores/useAppStore.ts'
import { storeToRefs } from 'pinia'

const appStore = useAppStore()

const { serviceList, swaggerConfigLoading, currentServiceUrl } = storeToRefs(appStore)

const { swaggerDoc, loading, error, fetchSwagger, groupByTags } = useSwagger()
const selected = ref<{ path: string; method: string } | null>(null)

// 切换服务时
const onCurrentServiceUrlChange = async (e) => {
  await fetchSwagger()
}
</script>

<template>
  <el-container class="home-view">
    <el-aside>
      <div style="padding: 12px 12px 0">
        <el-select
          v-if="serviceList.length"
          v-model="currentServiceUrl"
          placeholder="请选择服务"
          :loading="swaggerConfigLoading"
          @change="onCurrentServiceUrlChange"
        >
          <el-option
            v-for="item in serviceList"
            :key="item.url"
            :label="item.name"
            :value="item.url"
          />
        </el-select>
      </div>
      <ApiList :groups="groupByTags()" @select="(p, m) => (selected = { path: p, method: m })" />
    </el-aside>
    <el-container>
      <!--      <el-header>Header</el-header>-->
      <el-main>
        <!--        <el-scrollbar>-->
        <ApiDetail
          v-if="selected"
          :doc="swaggerDoc"
          :path="selected.path"
          :method="selected.method"
        />
        <!--        </el-scrollbar>-->
      </el-main>
    </el-container>
  </el-container>
  <div class="p-4">
    <!--    <UrlInput @fetch="fetchSwagger" />-->

    <!--    <el-alert v-if="error" type="error" :closable="false" class="my-2">{{ error }}</el-alert>-->
    <!--    <el-skeleton v-if="loading" :rows="4" animated />-->
  </div>
</template>

<style scoped>
.home-view {
  height: 100vh;
  overflow: hidden;
}
</style>
