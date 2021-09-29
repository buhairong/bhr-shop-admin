import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/product',
    name: 'product',
    component: RouterView,
    meta: {
      title: '商品'
    },
    children: [
      {
        path: 'list',
        name: 'product_list',
        component: () => import('@/views/product/list/index.vue'),
        meta: {
          title: '商品列表'
        }
      },
      {
        path: 'classify',
        name: 'product_classify',
        component: () => import('@/views/product/classify/index.vue'),
        meta: {
          title: '商品分类'
        }
      },
      {
        path: 'attr',
        name: 'product_attr',
        component: () => import('@/views/product/attr/index.vue'),
        meta: {
          title: '商品属性'
        }
      },
      {
        path: 'reply',
        name: 'product_reply',
        component: () => import('@/views/product/reply/index.vue'),
        meta: {
          title: '商品评论'
        }
      }
    ]
  }
]

export default routes
