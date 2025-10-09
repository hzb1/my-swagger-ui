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
    <div class="home-container">
      <SideBar class="sidebar" />
      <section class="main">
        <Detail v-if="selected" :data="selected" />
        <Response
          class="response"
          v-if="swaggerDoc && selected"
          :data="selected"
          :swaggerDoc="swaggerDoc"
        />
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
    width: 320px;
    overflow: auto;
    flex-shrink: 0;
    max-height: 100vh;
  }
  .main {
    // margin-left: 300px;
    padding-right: calc(520px + 24px);
    flex: 1;
    overflow: auto;
    max-height: 100vh;

    .response {
      flex-shrink: 0;
      width: 520px;
      overflow: auto;
      max-height: 100vh;
      position: absolute;
      top: 24px;
      right: 24px;
      bottom: 24px;
    }
  }
}
</style>
