import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeViews',
      component: () => import('@/views/HomeViews.vue'),
    },
  ],
})

export default router
