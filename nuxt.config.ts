// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';
export default defineNuxtConfig({
  alias: { assets: '/<rootDir>/assets' },
  devtools: { enabled: true },
  css: ['~/assets/main.scss'],
  postcss: { plugins: { tailwindcss: {}, autoprefixer: {} } },
  modules: ['@nuxt/content', '@pinia/nuxt', 'nuxt-swiper'],
  ssr: false
});
