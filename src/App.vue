<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Info from './components/Info.vue'

const path = ref(window.location.pathname)

function onPop() { path.value = window.location.pathname }

onMounted(() => window.addEventListener('popstate', onPop))
onBeforeUnmount(() => window.removeEventListener('popstate', onPop))
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
    <a href="/">Home</a> |
    <a href="/info">Info (README)</a>
  </nav>

  <div>
    <Info v-if="path === '/info'" />
    <HelloWorld v-else msg="Vite + Vue" />
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
