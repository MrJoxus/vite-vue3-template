import { defineStore } from 'pinia'
import { darkTheme, lightTheme, useOsTheme } from 'naive-ui'

import type { GlobalTheme } from 'naive-ui'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<GlobalTheme | null>(null)
  const themePreference = ref(getThemePreference())

  function setLightTheme() {
    theme.value = lightTheme
    setThemeToLocalStore('light')
  }

  function setDarkTheme() {
    theme.value = darkTheme
    setThemeToLocalStore('dark')
  }

  function setOsTheme() {
    theme.value = getThemeType(useOsTheme().value)
    setThemeToLocalStore('os')
  }

  function cycleTheme() {
    switch (themePreference.value) {
      case 'light':
        setDarkTheme()
        break
      case 'dark':
        setOsTheme()
        break
      case 'os':
      default:
        setLightTheme()
        break
    }
  }

  function setThemeToLocalStore(value: string) {
    localStorage.setItem('theme', value)
    themePreference.value = value
  }

  function setThemeFromLocalStore() {
    theme.value = getThemeType(localStorage.getItem('theme'))
  }

  function getThemePreference() {
    return localStorage.getItem('theme') || 'light'
  }

  function getThemeType(value: string | null): GlobalTheme {
    switch (value) {
      case 'dark':
        return darkTheme
      case 'os':
        return useOsTheme().value === 'dark' ? darkTheme : lightTheme
      case 'light':
      default:
        return lightTheme
    }
  }

  return {
    theme,
    themePreference,
    setDarkTheme,
    setLightTheme,
    setOsTheme,
    setThemeFromLocalStore,
    getThemePreference,
    cycleTheme,
  }
})
