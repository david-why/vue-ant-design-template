import { createRouter, createWebHashHistory } from 'vue-router'

import { HomeOutlined } from '@ant-design/icons-vue'

import HomeView from './views/HomeView.vue'

export const routes = [{ path: '/', name: 'Home', component: HomeView, icon: HomeOutlined }]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
