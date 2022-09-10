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
    {
      name: 'description',
      content: 'vite-vue3-template description',
    },
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

