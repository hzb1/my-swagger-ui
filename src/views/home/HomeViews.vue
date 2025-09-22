<script setup lang="ts">
import ApiList from '@/components/ApiList.vue'
import ApiDetail from '@/components/ApiDetail.vue'
import { type TagGroup, useSwagger } from '@/composables/useSwagger.ts'
import { ref } from 'vue'
import { useAppStore } from '@/stores/useAppStore.ts'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import SideBar from '@/views/home/components/SideBar.vue'
import Detail from '@/views/home/components/Detail.vue'
import Response from '@/views/home/components/Response.vue'

const appStore = useAppStore()

const { serviceList, swaggerConfigLoading, currentServiceUrl } = storeToRefs(appStore)

type TItem = TagGroup['groups'][number]

const { swaggerDoc, loading, error, fetchSwagger, groupData, tagsGroupData } = useSwagger()

const selected = ref<TItem | null>(null)

const router = useRouter()
const route = useRoute()

// 切换服务时
const onCurrentServiceUrlChange = async (e) => {
  await fetchSwagger()
}

const onSelect = (item: TItem) => {
  selected.value = item
  router.push({
    query: {
      path: item.path,
      method: item.method,
    },
  })
}
</script>

<template>
  <div class="home-view" v-loading="loading">
    <div class="home-container">
      <section class="sidebar">
        <SideBar :groups="tagsGroupData" @select="onSelect" />
      </section>
      <section class="main">
        <Detail v-if="selected" :data="selected" />
      </section>
      <section class="response">
        <Response v-if="swaggerDoc && selected" :data="selected" :swaggerDoc="swaggerDoc" />
      </section>
    </div>
  </div>
</template>

<style scoped>
.home-view {
  .home-container {
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
  }
  .sidebar {
    height: 100%;
    /* prettier-ignore*/
    width: 300px;
    overflow: auto;
    flex-shrink: 0;
  }
  .response {
    height: 100%;
    flex-shrink: 0;
    width: 600px;
    overflow: auto;
  }
  .main {
    flex: 1;
  }
}
</style>
