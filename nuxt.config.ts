export default defineNuxtConfig({
    // other options ...
    plugins: [
      { src: '~/plugins/flowbite', mode: 'client' }
    ],
    typescript: {
      typeCheck: true,
      strict: true,
    },
    css: ['~/assets/css/main.css', "@/assets/styles/scss/custom.scss"],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  })