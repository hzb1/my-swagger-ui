<script setup lang="ts">
import { useAppStore } from '@/stores/useAppStore.ts'
import { storeToRefs } from 'pinia'
import SideBar from '@/views/home/components/SideBar.vue'
import Detail from '@/views/home/components/Detail.vue'
import Response from '@/views/home/components/Response.vue'

const appStore = useAppStore()

const { swaggerDoc, selected } = storeToRefs(appStore)
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
        <SideBar />
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

<style scoped lang="less">
.home-view {
  .home-container {
    max-width: 1400px;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  .sidebar {
    height: 100vh;
    /* prettier-ignore*/
    width: 300px;
    overflow: auto;
    flex-shrink: 0;
    max-height: 100vh;
  }
  .response {
    height: calc(100vh - 48px);
    flex-shrink: 0;
    width: 520px;
    overflow: auto;
    max-height: 100vh;
  }
  .main {
    // margin-left: 300px;
    // margin-right: 600px;
    flex: 1;
    overflow: auto;
    max-height: 100vh;
  }
}
</style>
