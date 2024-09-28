export default defineNuxtConfig({
    modules: ['nuxt-swiper'],
    plugins: [
      { src: '~/plugins/flowbite', mode: 'client' }
    ],
    typescript: {
      typeCheck: true,
      strict: true,
    },
    css: ['~/assets/css/main.css', "~/assets/styles/scss/custom.scss","~/assets/styles/scss/animate/animate.css",],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  })