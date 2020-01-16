import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Main from '@/views/Main.vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      { name: 'Home', path: '/', component: () => import('@/views/Home.vue') },
      {
        name: 'CourseList',
        path: '/courses/list',
        component: () => import('@/views/Course/CourseList.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
