// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['@egjs/vue-grid']
  },
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxt/image', 'nuxt-mapbox'],
  colorMode: {
    preference: 'light'
  },
  mapbox: {
    accessToken: 'pk.eyJ1IjoicG1jcCIsImEiOiJjbHduc3hkMGExdzNwMmpteWh2M3c3cHZ3In0.4edOOiqp_E93TDvm-1BxCQ'
  },
  css: ['~/assets/css/main.css'],
  ui: {
    safelistColors: ['black', 'primary', 'secondary']
  },
  // content: {
  //   navigation: {
  //     fields: ['title']
  //   }
  // }
  // content: {
  //   markdown: {
  //     tags: { dispatch: 'dispatch'}
  //   }
  // }
})