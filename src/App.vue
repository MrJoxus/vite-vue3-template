<script setup lang="ts">
import { NConfigProvider, NLayout } from 'naive-ui'
import { useThemeStore } from './stores/themes'

const themeStore = useThemeStore()
onMounted(() => {
  themeStore.getThemeFromLocalStore()
})

useHead({
  title: 'vite-vue3-template',
  meta: [
    { name: 'description', content: 'vite-vue3-template description' },
    { property: 'og:title', content: 'vite-vue3-template' },
    { property: 'og:description', content: 'vite-vue3-template description' },
    { property: 'og:image', content: undefined },
    { property: 'og:image:secure_url', content: undefined },
    { property: 'og:image:type', content: 'image/jpeg' },
    { property: 'og:image:alt', content: undefined },
  ],
})
</script>

<template>
  <NConfigProvider :theme="themeStore.theme">
    <NLayout>
      <router-view />
    </NLayout>
  </NConfigProvider>
</template>

