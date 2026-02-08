<script setup>
import readme from '/README.md?raw'
</script>

<template>
  <div class="info">
    <h2>README</h2>
    <pre class="readme" v-text="readme"></pre>
  </div>
</template>

<style scoped>
.readme {
  white-space: pre-wrap;
  background: #436f34;
  padding: 1rem;
  border-radius: 6px;
  max-height: 70vh;
  overflow: auto;
  text-align: left;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, 'Roboto Mono', 'Courier New', monospace;
}

.info h2 { margin: 0 0 0.5rem 0; }
</style>
