import { createApp } from 'vue'
import './styles/main.scss'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { createI18n } from 'vue-i18n'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import App from './App.vue'

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'de',
})
const head = createHead()
const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: createWebHistory(),
  routes,
})
const pinia = createPinia()

createApp(App)
  .use(router)
  .use(i18n)
  .use(head)
  .use(pinia)
  .mount('#app')
