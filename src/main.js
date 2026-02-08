import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // Импортируем созданный конфиг

// createApp(App).mount('#app')

const app = createApp(App)

app.use(router) // Подключаем роутер
app.mount('#app')
