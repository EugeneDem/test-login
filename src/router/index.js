import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/views/layout/Layout'

export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    meta: { title: 'Главная' },
    hidden: true,
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: 'Главная' }
      }
    ]
  },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
  linkActiveClass: 'is-active',
  linkExactActiveClass: 'exact-active',
  mode: 'history'
})
