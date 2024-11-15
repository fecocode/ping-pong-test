// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  telemetry: false,
  app: {
    baseURL: '/'
  },
  runtimeConfig: {
    MESSAGE: process.env.MESSAGE || 'Default message (Please, follow README.md steps to set a message for test)',
  }
})