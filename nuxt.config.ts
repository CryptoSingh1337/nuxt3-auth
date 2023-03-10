import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=500, initial-scale=1',
      title: 'Nuxt Authentication',
      meta: [
        { name: 'description', content: 'My amazing site.' }
      ],
      link: [
        { rel: 'icon', href: '/images/logo.svg' }
      ]
    }
  },
  typescript: {
    shim: false
  },
  modules: [
    '@sidebase/nuxt-auth',
    // @ts-ignore
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(vuetify()))
    }
  ],
  css: ['vuetify/styles'],
  vite: {
    ssr: {
      noExternal: ['vuetify']
    }
  },
  auth: {
    origin: process.env.ORIGIN,
    enableGlobalAppMiddleware: true
  }
})
