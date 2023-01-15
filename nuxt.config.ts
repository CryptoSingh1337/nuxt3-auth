export default defineNuxtConfig({
    typescript: {
        shim: false,
    },
    modules: ['@sidebase/nuxt-auth'],
    css: ["vuetify/lib/styles/main.sass", "@mdi/font/css/materialdesignicons.min.css"],
    build: {
        transpile: ["vuetify"],
    },
    auth: {
        origin: 'http://localhost:3000',
        enableGlobalAppMiddleware: true
    }
})
