import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import VueI18n from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return {
    server: {
      port: process.env.VITE_PORT,
    },
    plugins: [
      vue(),
      Pages(),
      Layouts(),
      AutoImport({
        dts: 'src/auto-imports.d.ts',
        imports: [
          'vue',
          'vue-i18n',
          '@vueuse/head',
        ],
      }),
      VueI18n(),
    ],
  }
})
