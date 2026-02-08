<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Info from './components/Info.vue'

const path = ref(window.location.pathname)

function onPop() { path.value = window.location.pathname }

onMounted(() => window.addEventListener('popstate', onPop))
onBeforeUnmount(() => window.removeEventListener('popstate', onPop))

// В секции <script setup>
const baseUrl = import.meta.env.BASE_URL; // Вернет '/edu-vue1/'


import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Vite сам подставит '/edu-vue1/'
  routes: [
    { path: '/', component: HelloWorld },
    { path: '/info', component: Info },
  ]
})

</script>


<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <nav style="margin: 1rem 0;">
    <router-link to="/">Главная</router-link> | 
      <router-link to="/info">О проекте</router-link>
  </nav>

  <div>
    <router-view />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

nav a { margin-right: 0.5rem; color: #3eaf7c; text-decoration: none }
</style>
