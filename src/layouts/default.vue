<script setup lang="ts">
import { NConfigProvider, NLayout } from 'naive-ui'
import { useThemeStore } from '../stores/themes'

const themeStore = useThemeStore()

onMounted(() => {
  themeStore.getThemeFromLocalStore()
})
</script>

<template>
  <NConfigProvider :theme="themeStore.theme">
    <NLayout class="main">
      <main>
        <router-view />
      </main>
    </NLayout>
  </NConfigProvider>
</template>

<style lang="scss">
.main{
  min-height: 100vh;
}
</style>
