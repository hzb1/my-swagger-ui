<script setup lang="ts">
import ApiList from '@/components/ApiList.vue'
import ApiDetail from '@/components/ApiDetail.vue'
import { type TagGroup, useSwagger } from '@/composables/useSwagger.ts'
import { ref, watchEffect } from 'vue'
import { useAppStore } from '@/stores/useAppStore.ts'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import SideBar from '@/views/home/components/SideBar.vue'
import Detail from '@/views/home/components/Detail.vue'
import Response from '@/views/home/components/Response.vue'
import { getApiTypes } from '@/utils/openapiTypeGen.ts'
import { useOpenapiTypes } from '@/composables/useOpenapiTypes.ts'
// import '@/utils/swagger-to-ts.ts'

const appStore = useAppStore()

const { serviceList, swaggerConfigLoading, currentServiceUrl } = storeToRefs(appStore)

type TItem = TagGroup['groups'][number]

const { swaggerDoc, loading, error, fetchSwagger, groupData, tagsGroupData } = useSwagger()

const selected = ref<TItem | null>(null)

watchEffect(() => {
  // console.log('tagsGroupData', tagsGroupData.value)
  console.log('selected', selected.value)
})

// 获取 /user/{id} 的 GET 方法类型
const { queryType, pathType, headerType, cookieType, bodyType, responseType } =
  useOpenapiTypes(selected)

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
      ...route.query,
      path: item.path,
      method: item.method,
    },
  })
}
</script>

<template>
  <div class="home-view">
    <!--    <pre>-->
    <!--      Query: {{ queryType }}-->
    <!--      Path: {{ pathType }}-->
    <!--      Header: {{ headerType }}-->
    <!--      Cookie: {{ cookieType }}-->
    <!--      Body: {{ bodyType }}-->
    <!--      Response: {{ responseType }}-->
    <!--    </pre>-->
    <div class="home-container">
      <section class="sidebar">
        <SideBar
          :groups="tagsGroupData"
          @select="onSelect"
          @service-change="onCurrentServiceUrlChange"
        />
      </section>
      <section class="main">
        <Detail v-if="selected" :data="selected" :swaggerDoc="swaggerDoc" />
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
    display: flex;
    justify-content: space-between;
  }
  .sidebar {
    height: 100vh;
    /* prettier-ignore*/
    width: 300px;
    overflow: auto;
    flex-shrink: 0;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
  }
  .response {
    height: calc(100vh - 48px);
    flex-shrink: 0;
    width: 600px;
    overflow: auto;
    position: fixed;
    top: 24px;
    right: 24px;
    bottom: 24px;
  }
  .main {
    margin-left: 300px;
    margin-right: 600px;
    flex: 1;
  }
}
</style>
