// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/a11y",
    "@nuxt/ui",
  ],
  postcss: {
    plugins: {
      "@tailwindcss/postcss": {},
    },
  },
  devtools: { enabled: true },
  compatibilityDate: "2024-04-03",
});
