<script setup lang="ts">
import type { RepoSummary } from "~~/shared/featured-repos";

defineProps<{
  repos: RepoSummary[];
  pending?: boolean;
}>();
</script>

<template>
  <section id="projects" class="scroll-mt-20 py-24">
    <UContainer>
      <SiteSectionHeading
        eyebrow="Projects"
        title="Kody의 프로젝트"
        description="동아리에서 만들어 온 서비스들을 GitHub에서 실시간으로 불러옵니다."
      />

      <!-- 로딩 스켈레톤 -->
      <div
        v-if="pending"
        class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        <USkeleton v-for="i in 6" :key="i" class="h-40 rounded-xl" />
      </div>

      <div
        v-else-if="repos.length"
        class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        <SiteRepoCard
          v-for="repo in repos"
          :key="repo.name"
          :repo="repo"
        />
      </div>

      <div v-else class="py-12 text-center text-muted">
        저장소를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.
      </div>
    </UContainer>
  </section>
</template>
