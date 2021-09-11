import { createApp } from 'vue'
import 'tailwindcss/tailwind.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
//import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes[],
})

app.use(router)
//app.use(MotionPlugin)
app.mount('#app')
