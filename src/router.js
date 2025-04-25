import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/views/Home.vue'
import MetaCoinV1 from '@/views/MetaCoinV1.vue'

export const routes = [
    { path: '/',name:'home', component: Home },
    { path: '/v1/metacoin',name:'metacoin', component: MetaCoinV1 },
  ]

  export const router = createRouter({
    history: createWebHistory(),
    routes,
  })





