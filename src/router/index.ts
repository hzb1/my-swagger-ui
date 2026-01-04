import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeViews',
      component: () => import('@/views/home/HomeViews.vue'),
    },
    {
      path: '/explorer',
      name: 'SwaggerExplorer',
      component: () => import('@/views/SwaggerExplorer.vue'),
    },
    {
      path: '/proxyFetchDemo',
      name: 'ProxyFetchDemo',
      component: () => import('../views/proxyFetchDemo/ProxyFetchDemoView.vue'),
    },
  ],
})

export default router
