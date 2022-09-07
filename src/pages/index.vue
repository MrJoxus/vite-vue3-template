<template>
  <div>
    <form>
      <label>{{ $t('language') }} {{ $i18n.locale }}</label>
      <select v-model="$i18n.locale">
        <option value="en">
          en
        </option>
        <option value="de">
          de
        </option>
      </select>
    </form>
    <p>{{ $t('hello') }}</p>
  </div>
</template>

<i18n lang="yaml">
de:
  language: Sprache
  hello: 'Hallo, Welt!'
en:
  language: Language
  hello: 'hello, world!'
</i18n>
