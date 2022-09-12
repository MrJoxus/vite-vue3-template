import { defineStore } from 'pinia'
import { darkTheme, lightTheme, useOsTheme } from 'naive-ui'

import type { GlobalTheme } from 'naive-ui'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<GlobalTheme | null>(null)

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
    setThemeToLocalStore('os')
  }

  function setThemeToLocalStore(value: string) {
    localStorage.setItem('theme', value)
  }

  function getThemeFromLocalStore() {
    theme.value = getThemeType(localStorage.getItem('theme'))
  }

  function getThemeType(value: string | null): GlobalTheme {
    switch (value) {
      case 'light':
        return lightTheme
      case 'dark':
        return darkTheme
      case 'os':
        return useOsTheme().value === 'dark' ? darkTheme : lightTheme
      default:
        return lightTheme
    }
  }

  return { theme, setDarkTheme, setLightTheme, setOsTheme, getThemeFromLocalStore }
})
