<script setup lang="ts">
import type { RepoSummary } from "~~/shared/featured-repos";

defineProps<{ repo: RepoSummary }>();

// GitHub 언어 색상(대표 색만)
const langColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Vue: "#41b883",
  Java: "#b07219",
  Python: "#3572A5",
  SCSS: "#c6538c",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Go: "#00ADD8",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
};
</script>

<template>
  <ULink
    :to="repo.htmlUrl"
    target="_blank"
    class="group flex h-full flex-col rounded-xl border border-default bg-default p-5 transition hover:border-primary hover:shadow-md"
  >
    <div class="flex items-start justify-between gap-3">
      <div class="flex items-center gap-2 font-semibold">
        <UIcon name="i-lucide-folder-git-2" class="size-5 text-muted" />
        <span class="group-hover:text-primary">{{ repo.label }}</span>
      </div>
      <span
        v-if="repo.stars > 0"
        class="flex shrink-0 items-center gap-1 text-sm text-muted"
      >
        <UIcon name="i-lucide-star" class="size-4" />
        {{ repo.stars }}
      </span>
    </div>

    <p class="mt-2 line-clamp-2 grow text-sm text-muted">
      {{ repo.description || "설명이 아직 없습니다." }}
    </p>

    <div class="mt-4 flex items-center gap-3 text-sm text-muted">
      <span v-if="repo.language" class="flex items-center gap-1.5">
        <span
          class="size-2.5 rounded-full"
          :style="{ backgroundColor: langColors[repo.language] ?? '#9ca3af' }"
        />
        {{ repo.language }}
      </span>
      <UBadge
        v-if="repo.category"
        color="neutral"
        variant="subtle"
        size="sm"
        :label="repo.category"
      />
    </div>
  </ULink>
</template>
