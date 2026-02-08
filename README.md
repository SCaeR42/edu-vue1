
# Base Vite + Vue 3 — Шаблон проекта

О проекте

`Base Vite + Vue 3` — минимальный, но расширяемый шаблон для быстрой разработки одностраничных приложений на Vue 3 с использованием Vite. Проект настроен для удобного старта и содержит:

- готовый dev-сервер и сборку через Vite;
- минимальную структуру `src` с корневым компонентом и примером компонента;
- работу со статическими ассетами и простую настройку стилей;
- примеры конфигурации `vite.config.js` для типичных задач.

Шаблон подходит для прототипов, учебных проектов и небольших приложений — его легко масштабировать под более сложные требования.

Технологии

- Vue 3 (SFC, `<script setup>`)
- Vite (быстрая сборка и dev-сервер)
- Простые CSS и статические ассеты

Быстрый старт

1. Установите зависимости:

```bash
npm install
```

2. Запуск режима разработки (локальный сервер):

```bash
npm run dev
```

3. Сборка для продакшна:

```bash
npm run build
```

4. Просмотр собранного приложения локально (опционально):

```bash
npm run preview
```

Структура проекта (важные файлы)

- [index.html](index.html#L1) — HTML-шаблон
- [src/main.js](src/main.js#L1) — точка входа приложения
- [src/App.vue](src/App.vue#L1) — корневой компонент
- [src/components/HelloWorld.vue](src/components/HelloWorld.vue#L1) — пример компонента

Где дальше смотреть

- Изучите `src/App.vue` и компоненты в `src/components` чтобы начать разрабатывать.
- Настройки Vite находятся в `vite.config.js`.

Контрибьюция

Любые правки и улучшения приветствуются. Откройте issue или PR с описанием изменений.

Лицензия

Этот проект создаётся как шаблон — используйте по необходимости.

## Vite: примеры настроек в `vite.config.js`

Ниже приведены часто используемые опции Vite с кратким описанием и примерами. Эти примеры можно вставить в `defineConfig({ ... })` в `vite.config.js` для справки.

- `root` — корень проекта (строка). Пример: `root: '.'`.
- `base` — базовый путь при сборке. Пример: `base: '/my-app/'`.
- `mode` — режим сборки: `development` или `production`.
- `define` — глобальные константы, заменяются во время сборки:

```js
define: { __APP_VERSION__: '"1.0.0"' }
```

- `plugins` — список плагинов (например, `vue()` и другие).
- `resolve.alias` — алиасы для импорта:

```js
resolve: { alias: { '@': '/src', components: '/src/components' } }
```

- `server` — параметры dev-сервера:

```js
server: { port: 8080, host: 'localhost', strictPort: false, open: true, proxy: { '/api': 'http://localhost:3000' } }
```

- `build` — опции сборки:

```js
build: { outDir: 'dist', assetsDir: 'assets', sourcemap: false, minify: 'esbuild' }
```

- `css` — опции для препроцессоров и CSS-модулей:

```js
css: { preprocessorOptions: { scss: { additionalData: "@import 'src/styles/vars.scss';" } }, modules: { scopeBehaviour: 'local' } }
```

- `optimizeDeps` — настройки предсборки зависимостей:

```js
optimizeDeps: { include: ['vue', 'vue-router'], exclude: ['some-big-lib'] }
```

- `preview` — параметры `npm run preview` (локальный сервер для просмотра сборки):

```js
preview: { port: 5000, host: 'localhost', strictPort: true }
```

- `esbuild`, `worker`, `ssr` — дополнительные настройки для esbuild, воркеров и SSR.

Более подробную документацию и полный список опций смотрите в официальном руководстве Vite: https://vitejs.dev/config/
