

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/supabase',
    'nuxt-windicss'
  ],
  css: ["~/assets/css/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});