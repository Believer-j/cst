// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/index.css'],
  modules: [
    '@vant/nuxt', 
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['legacy-js-api']
        }
      }
    }
  }
})
