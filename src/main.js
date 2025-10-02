import { createApp } from 'vue'
import AppRouter from './AppRouter.vue'
import router from './router'
import './style.css'

createApp(AppRouter).use(router).mount('#app')