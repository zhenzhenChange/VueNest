import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Main from '@/views/Main.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      { name: 'Home', path: '/', component: () => import('@/views/Home.vue') },
      {
        name: 'CourseCrud',
        path: '/:resource/list',
        props: true,
        component: () => import('@/components/ResourceCurd.vue'),
      },
    ],
  },
];

const router = new VueRouter({ routes });

export default router;
