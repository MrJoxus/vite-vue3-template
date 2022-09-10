import { defineStore } from 'pinia'
import { darkTheme, lightTheme, useOsTheme } from 'naive-ui'

import type { GlobalTheme } from 'naive-ui'

export const useThemeStore = defineStore('theme', () => {
  const theme: GlobalTheme | null = ref(null)

  function setDarkTheme() {
    theme.value = darkTheme
    setThemeToLocalStore('dark')
  }

  function setLightTheme() {
    theme.value = lightTheme
    setThemeToLocalStore('light')
  }

  function setOsTheme() {
    theme.value = getThemeType(useOsTheme().value)
    setThemeToLocalStore(useOsTheme().value || '')
  }

  function setThemeToLocalStore(value: string) {
    window.localStorage.setItem('theme', value)
  }

  function getThemeFromLocalStore() {
    const localStoreTheme = localStorage.getItem('theme')
    theme.value = getThemeType(localStoreTheme)
  }

  function getThemeType(value: string | null) {
    return value === 'dark' ? darkTheme : lightTheme
  }

  return { theme, setDarkTheme, setLightTheme, setOsTheme, getThemeFromLocalStore }
})
