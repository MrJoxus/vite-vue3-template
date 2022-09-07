import { createApp } from 'vue'
import './style.scss'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

const i18n = createI18n({
  locale: 'de',
})

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
  .use(router)
  .use(i18n)
  .mount('#app')
