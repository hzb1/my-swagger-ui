<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ApiGroup } from '@/types/swagger'
import ApiItem from '@/components/ApiItem.vue'

const props = defineProps<{ groups: ApiGroup[] }>()
const emit = defineEmits<{ (e: 'select', path: string, method: string): void }>()

const keyword = ref('')
const filtered = computed(() =>
  props.groups
    .map((g) => ({
      ...g,
      apis: g.apis.filter(
        (a) =>
          a.path.toLowerCase().includes(keyword.value.toLowerCase()) ||
          a.item.summary?.toLowerCase().includes(keyword.value.toLowerCase()),
      ),
    }))
    .filter((g) => g.apis.length > 0),
)
</script>

<template>
  <div class="aside-menu">
    <div class="header">
      <slot name="header-top" />
      <el-input v-model="keyword" placeholder="搜索接口" clearable class="mb-3" />
    </div>

    <el-scrollbar class="main">
      <div>
        <el-collapse>
          <el-collapse-item v-for="group in filtered" :key="group.tag" :title="group.tag">
            <ApiItem
              class="item"
              v-for="item in group.apis"
              :key="item.path"
              :item="item"
              @click="emit('select', item.path, item.method)"
            />
            <!--            <el-table :data="group.apis" border stripe size="small">-->
            <!--              <el-table-column prop="method" label="Method" width="68">-->
            <!--                <template #default="{ row }">-->
            <!--                  <el-tag type="primary" size="small"> {{ row.method }}</el-tag>-->
            <!--                </template>-->
            <!--              </el-table-column>-->
            <!--              <el-table-column prop="path" label="Path">-->
            <!--                <template #default="{ row }">-->
            <!--                  <div style="font-size: 10px">{{ row.path }}</div>-->
            <!--                </template>-->
            <!--              </el-table-column>-->
            <!--              <el-table-column label="Summary">-->
            <!--                <template #default="scope">-->
            <!--                  <el-link-->
            <!--                    type="primary"-->
            <!--                    @click="emit('select', scope.row.path, scope.row.method)"-->
            <!--                    style="font-size: 12px"-->
            <!--                  >-->
            <!--                    {{ scope.row.item.summary || '查看详情' }}-->
            <!--                  </el-link>-->
            <!--                </template>-->
            <!--              </el-table-column>-->
            <!--            </el-table>-->
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-scrollbar>
  </div>
</template>

<style scoped>
.aside-menu {
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 12px;
  .header {
    flex-shrink: 0;
    margin-bottom: 12px;
  }
  .main {
    flex: 1;
  }
}
</style>
