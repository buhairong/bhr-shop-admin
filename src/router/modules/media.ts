import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/media',
    name: 'media',
    component: () => import('@/views/media/index.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

export default routes
