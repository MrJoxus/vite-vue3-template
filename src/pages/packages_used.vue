<script setup lang="ts">
import { NButton, NCard, NH1, NTable, NText } from 'naive-ui'
const router = useRouter()
const { t } = useI18n()

const packagesList = ref([
  { title: 'Vue', link: 'https://vuejs.org/' },
  { title: 'Vite', link: 'https://vitejs.dev/' },
  { title: 'Pinia', link: 'https://pinia.vuejs.org/' },
  { title: 'Native Ui', link: 'https://www.naiveui.com/en-US/' },
  { title: 'Tailwindcss', link: 'https://tailwindcss.com/' },
  { title: 'xicons', link: 'https://www.xicons.org/' },
  { title: 'Vue Router', link: 'https://router.vuejs.org/' },
  { title: 'vite-plugin-pages', link: 'https://github.com/hannoeru/vite-plugin-pages' },
  { title: 'vite-plugin-vue-layouts', link: 'https://github.com/JohnCampionJr/vite-plugin-vue-layouts' },
  { title: 'Vue i18n', link: 'https://kazupon.github.io/vue-i18n/' },
  { title: 'Vueuse/head', link: 'https://github.com/vueuse/head' },
  { title: 'unplugin-auto-import', link: 'https://github.com/antfu/unplugin-auto-import' },
])
</script>

<template>
  <div class="banner">
    <NH1 class="tw-pt-12 tw-pb-6">
      {{ t('packagesUsed') }}
    </NH1>
    <NCard class="tw-mb-12">
      <div>
        <p>
          <NText>
            {{ t('onlyImportantPackages') }}
          </NText>
        </p>
      </div>
      <NTable>
        <thead>
          <tr>
            <th>{{ t('package.title') }}</th>
            <th>{{ t('package.link') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="packageItem in packagesList" :key="packageItem.title">
            <td>{{ packageItem.title }}</td>
            <td><a :href="packageItem.link" target="_blank" rel="noopener noreferrer">{{ packageItem.link }}</a></td>
          </tr>
        </tbody>
      </NTable>
      <div>
        <NButton class="button" @click="router.push({ name: 'index' })">
          {{ t('links.index') }}
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
    justify-content: center;
    position: relative;
    text-align: center;
    .button {
      margin-top: 14px;
    }
  }
</style>

<i18n lang="yaml">
de:
  packagesUsed: Verwendete Packages
  package:
    title: Titel
    link: Link
  onlyImportantPackages: Nur die wichtigsten Packages wurden aufgelistet. Für eine komplette Liste siehe packages.json.
  links:
    index: Startseite
en:
  packagesUsed: Used Packages
  package:
    title: Title
    link: Link
  onlyImportantPackages: Only the most important packages are listed. See packages.json for full list.
  links:
    index: Homepage
</i18n>
