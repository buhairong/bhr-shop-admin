import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import productRoutes from './modules/product'
import orderRoutes from './modules/order'
import permissionRoutes from './modules/permission'
import mediaRoutes from './modules/media'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { store } from '@/store'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/home/index.vue'),
        meta: {
          title: '首页',
          requiresAuth: true
        }
      },
      ...productRoutes,
      ...orderRoutes,
      ...mediaRoutes,
      ...permissionRoutes
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from) => {
  nprogress.start()
  if (to.meta.requiresAuth && !store.state.user) {
    return {
      name: 'login',
      query: {
        redirect: to.fullPath
      }
    }
  }
})

router.afterEach(() => {
  nprogress.done()
})

export default router
