<script setup lang="ts">
import type { RepoSummary } from "~~/shared/featured-repos";

const { data: repos, pending } = await useFetch<RepoSummary[]>("/api/repos", {
  default: () => [],
});

useHead({
  title: "Kody — 전공 동아리",
  meta: [
    {
      name: "description",
      content: "전공 동아리 Kody의 프로젝트와 팀을 소개합니다.",
    },
  ],
});
</script>

<template>
  <div>
    <SiteNavBar />
    <main>
      <SiteHeroSection />
      <SiteRepositoriesSection :repos="repos" :pending="pending" />
      <SiteTechStackSection />
      <SiteTeamSection />
    </main>
    <SiteFooterSection />
  </div>
</template>
