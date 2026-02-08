import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080
  },

  // Ниже — закомментированные примеры часто используемых опций Vite.
  /*
  // Общие параметры
  root: '.', // корень проекта
  base: '/', // базовый путь для сборки
  mode: 'development', // или 'production'

  // Глобальные определения, заменяются на этапе сборки
  define: {
    __APP_VERSION__: '"1.0.0"'
  },

  // Плагины (кроме уже подключённого Vue)
  plugins: [vue(),  otherPlugins() ],

  // Разрешения импорта и алиасы
  resolve: {
    alias: {
      '@': '/src',
      'components': '/src/components'
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },

  // Настройки CSS (препроцессоры, CSS-модули)
  css: {
    preprocessorOptions: {
      scss: { additionalData: "$injectedColor: orange;" }
    },
    modules: { scopeBehaviour: 'local' }
  },

  // Настройки сборки
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      input: '/index.html',
      output: {}
    }
  },

  // Оптимизация зависимостей (pre-bundle)
  optimizeDeps: {
    include: ['vue', 'vue-router'],
    exclude: ['some-large-lib']
  },

  // Опции для preview после сборки
  preview: {
    host: 'localhost',
    port: 5000,
    strictPort: true
  },

  // Кеш, логирование и публичная директория
  cacheDir: 'node_modules/.vite',
  logLevel: 'info',
  publicDir: 'public',
  clearScreen: true,

  // Примеры продвинутых опций (esbuild, worker, ssr и т.д.)
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    drop: ['console', 'debugger']
  },

  worker: {
    format: 'es',
    plugins: []
  },

  ssr: {
    noExternal: []
  }
    */
  
})
