<script setup lang="ts">
const { t, locale } = useI18n()
const locales = ref([
  { title: 'de' },
])
</script>

<template>
  <div>
    <form>
      <label>{{ t('language') }} {{ $i18n.locale }}</label>
      <select v-model="locale">
        <option value="en">
          en
        </option>
        <option value="de">
          de
        </option>
      </select>
    </form>
    <p>{{ t('hello') }}</p>
  </div>
</template>

<i18n lang="yaml">
de:
  locale: Deutsch
  language: Sprache
  hello: 'Hallo, Welt!'
en:
  locale: English
  language: Language
  hello: 'hello, world!'
</i18n>
