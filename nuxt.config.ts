// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/assets/scss/global.scss'],
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "@/assets/scss/vars.scss" as *; @use "@/assets/scss/mixins.scss" as *;',
        },
      },
    },
  },
  modules: [
    '@nuxt/image',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'PT Sans': {
            wght: [400, 700],
          },
          'PT Serif': {
            wght: [400, 700],
            ital: [400],
          },
        },
      },
    ],
  ],
})
