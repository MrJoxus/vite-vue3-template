import { defineStore } from 'pinia'

export const useI18nStore = defineStore('i18n', () => {
  const { locale } = useI18n<any>({ useScope: 'global' })
  const localeOptions = ref([
    { label: 'DE', value: 'de' },
    { label: 'EN', value: 'en' },
  ])

  function setLocale(value: string) {
    localStorage.setItem('lang', value)
    locale.value = value
  }
  return { locale, localeOptions, setLocale }
})
