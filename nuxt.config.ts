// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 7777,
  },
  devtools: {
    enabled: true
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/eslint-module'
  ],
  i18n: {
    vueI18n: './locales/index.ts',
  },
  compatibilityDate: '2024-09-16',
});
