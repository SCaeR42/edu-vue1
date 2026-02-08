import { createRouter, createWebHashHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Info from './components/Info.vue'

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/info', component: Info }
]

const router = createRouter({
  // Hash-режим — идеален для статических хостингов типа GitHub Pages
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
