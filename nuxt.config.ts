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
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    // NUXT_GITHUB_TOKEN 환경변수로 주입되는 서버 전용 GitHub PAT
    githubToken: "",
  },
  devtools: { enabled: true },
  compatibilityDate: "2024-04-03",
});
