<script setup lang="ts" name="SideBar">
// const props = withDefaults(defineProps<{}>(), {});
// const emit = defineEmits<{}>();

import type { ApiGroup } from '@/types/swagger.ts'
import { computed, ref } from 'vue'
import ApiItem from '@/components/ApiItem.vue'
import CollapseItem from '@/components/CollapseItem.vue'
import type { TagGroup } from '@/composables/useSwagger.ts'

const props = defineProps<{ groups: TagGroup[] }>()
const emit = defineEmits<{ (e: 'select', item: TagGroup['groups'][number]): void }>()

const keyword = ref('')
const filtered = computed(() =>
  props.groups
    .map((g) => ({
      ...g,
      groups: g.groups.filter(
        (a) =>
          a.path.toLowerCase().includes(keyword.value.toLowerCase()) ||
          a.item.summary?.toLowerCase().includes(keyword.value.toLowerCase()),
      ),
    }))
    .filter((g) => g.groups.length > 0),
)
</script>
<template>
  <div class="side-bar">
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
          @click="() => emit('select', item)"
        />
      </CollapseItem>
    </div>
  </div>
</template>

<style scoped>
.side-bar {
}
</style>
