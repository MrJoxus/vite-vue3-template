<script setup lang="ts">
import { NButton, NButtonGroup, NCard, NH1, NSelect, NText } from 'naive-ui'
import { useThemeStore } from '../stores/themes'
import { useI18nStore } from '../stores/i18n'

const router = useRouter()

const i18nStore = useI18nStore()
const { t } = useI18n()

const themeStore = useThemeStore()
const themeOptions = ref([
  { title: t('theme.light'), action: themeStore.setLightTheme },
  { title: t('theme.dark'), action: themeStore.setDarkTheme },
  { title: t('theme.os'), action: themeStore.setOsTheme },
])
</script>

<template>
  <div class="banner">
    <NH1>
      vite-vue3-template
    </NH1>
    <NCard>
      <p>
        <NText>{{ t('theme.title') }}</NText>
      </p>
      <NButtonGroup>
        <NButton v-for="themeOption in themeOptions" :key="themeOption.title" @click="themeOption.action">
          {{ themeOption.title }}
        </NButton>
      </NButtonGroup>
      <div>
        <p>
          <NText>{{ t('choseLanguage') }}</NText>
        </p>
        <NSelect :value="i18nStore.locale" :options="i18nStore.localeOptions" @update:value="i18nStore.setLocale" />
        <p>
          <NText>{{ t('hello') }}</NText>
        </p>
      </div>
      <div>
        <NButton @click="router.push({ name: 'packages_used' })">
          {{ t('links.packagesUsed') }}
        </NButton>
      </div>
    </NCard>
  </div>
</template>

<style lang="scss">
  .banner{
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 64px);
    justify-content: center;
    position: relative;
    text-align: center;
  }
</style>

<i18n lang="yaml">
de:
  locale: Deutsch
  choseLanguage: 'Sprache wählen:'
  hello: 'Hallo, Welt!'
  theme:
    title: Theme
    light: Light
    dark: Dark
    os: OS
  links:
    packagesUsed: Verwendete Packages
en:
  locale: English
  choseLanguage: 'Chose Language:'
  hello: 'hello, world!'
  theme:
    title: Theme
    light: Light
    dark: Dark
    os: OS
  packagesUsed: used Packages
  links:
    packagesUsed: used packages
</i18n>
