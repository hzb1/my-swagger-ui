<script setup lang="ts" name="SideBar">
// const props = withDefaults(defineProps<{}>(), {});
// const emit = defineEmits<{}>();
import { computed, ref } from 'vue'
import ApiItem from '@/components/ApiItem.vue'
import CollapseItem from '@/components/CollapseItem.vue'
import { type TagGroup, type TagGroupItem, useAppStore } from '@/stores/useAppStore.ts'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
// const props = defineProps<{ groups: TagGroup[] }>()
// const emit = defineEmits<{
// (e: 'select', item: TagGroup['groups'][number]): void
// (e: 'serviceChange', url: string): void
// }>()

const appStore = useAppStore()

const { serviceList, currentServiceUrl, tagsGroupData, selected } = storeToRefs(appStore)

const keyword = ref('')
const filtered = computed(() => {
  const v = keyword.value.toLowerCase().trim()
  if (!v) {
    return tagsGroupData.value
  }

  return tagsGroupData.value
    .map((g) => ({
      ...g,
      groups: g.groups.filter(
        (a) =>
          a.path.toLowerCase().includes(v) ||
          a.item.summary?.toLowerCase().includes(v) ||
          a.item.description?.toLowerCase().includes(v),
      ),
    }))
    .filter((g) => g.groups.length > 0)
})

// 切换服务时
const onCurrentServiceUrlChange = async (e: Event) => {
  const v = (e.target as HTMLSelectElement).value
  await router.push({
    query: {
      service: v,
    },
  })
  await appStore.loadDocData()
}

const onSelect = (item: TagGroupItem) => {
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
  <div class="side-bar">
    <!--    {{ tagsGroupData }}-->
    <div class="header" style="display: flex; flex-direction: column">
      <select v-model="currentServiceUrl" @change="onCurrentServiceUrlChange">
        <option v-for="item in serviceList" :key="item.url" :value="item.url">
          {{ item.name }}
        </option>
      </select>
      <input v-model="keyword" placeholder="搜索接口" clearable class="input" />
    </div>
    <div class="main">
      <CollapseItem
        v-for="group in filtered"
        :key="group.description"
        :title="group.name"
        :expanded="true"
      >
        <ApiItem
          class="item"
          v-for="item in group.groups"
          :key="item.path"
          :item="item"
          @click="() => onSelect(item)"
        />
      </CollapseItem>
    </div>
  </div>
</template>

<style scoped>
.side-bar {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .header {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 8px;
    gap: 8px;
  }
  .main {
    padding: 12px;
    box-sizing: border-box;
    flex: 1;
    overflow: auto;
  }
}
</style>
