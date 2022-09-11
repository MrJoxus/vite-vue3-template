<script setup lang="ts">
import { NButton, NButtonGroup, NCard, NH1, NSelect, NText } from 'naive-ui'
import { Laptop16Regular, WeatherMoon16Filled, WeatherSunny16Regular } from '@vicons/fluent'
import { useThemeStore } from '../stores/themes'
import { useI18nStore } from '../stores/i18n'

const router = useRouter()

const i18nStore = useI18nStore()
const { t } = useI18n()

const themeStore = useThemeStore()
const themeOptions = ref([
  { title: t('theme.light'), icon: markRaw(WeatherSunny16Regular), action: themeStore.setLightTheme },
  { title: t('theme.dark'), icon: markRaw(WeatherMoon16Filled), action: themeStore.setDarkTheme },
  { title: t('theme.os'), icon: markRaw(Laptop16Regular), action: themeStore.setOsTheme },
])
</script>

<template>
  <div class="banner">
    <NH1 class="tw-pt-12 tw-pb-6">
      vite-vue3-template
    </NH1>
    <NCard>
      <p>
        <NText>{{ t('theme.title') }}</NText>
      </p>
      <NButtonGroup>
        <NButton v-for="themeOption in themeOptions" :key="themeOption.title" @click="themeOption.action">
          <template #icon>
            <component :is="themeOption.icon" />
          </template>
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

<style lang="scss" scoped>
  .banner{
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    height: 100vh;
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
  links:
    packagesUsed: used packages
</i18n>
