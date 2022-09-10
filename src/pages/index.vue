<script setup lang="ts">
import { NButton, NButtonGroup, NCard, NH1, NSelect, NText } from 'naive-ui'
import { useThemeStore } from '../stores/themes'

const themeStore = useThemeStore()
const { t, locale } = useI18n()

const localeOptions = ref([
  {
    label: 'DE',
    value: 'de',
  },
  {
    label: 'EN',
    value: 'en',
  },
])

const themeOptions = ref([
  { title: 'Light', action: themeStore.setLightTheme },
  { title: 'Dark', action: themeStore.setDarkTheme },
  { title: 'OS', action: themeStore.setOsTheme },
])
</script>

<template>
  <div class="banner">
    <NH1>
      vite-vue3-template
    </NH1>
    <NCard>
      <p>
        <NText>{{ t('theme') }}</NText>
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
        <NSelect v-model:value="locale" :options="localeOptions" />
        <p>
          <NText>{{ t('hello') }}</NText>
        </p>
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
  theme: Theme
en:
  locale: English
  choseLanguage: 'Chose Language:'
  hello: 'hello, world!'
  theme: Theme
  </i18n>
