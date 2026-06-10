<script setup lang="ts">
const orgUrl = "https://github.com/kody-gsm";
</script>

<template>
  <section class="relative overflow-hidden">
    <!-- 은은한 배경 그라데이션 -->
    <div
      class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,theme(colors.zinc.200/40),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,theme(colors.zinc.800/40),transparent_60%)]"
    />

    <UContainer class="flex flex-col items-center py-24 text-center sm:py-32">
      <img
        src="/kody.png"
        alt="Kody 로고"
        class="mb-8 size-24 rounded-full shadow-sm"
        width="96"
        height="96"
      >

      <UBadge
        color="neutral"
        variant="subtle"
        size="lg"
        class="mb-5"
        label="전공 동아리"
      />

      <h1
        class="max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-6xl"
      >
        학생들이 만드는<br>
        전공 동아리 <span class="text-primary">Kody</span>
      </h1>

      <p class="mt-6 max-w-xl text-pretty text-lg text-muted">
        직접 기획하고 개발한 프로젝트들을 한곳에서 만나보세요.
      </p>

      <div class="mt-10 flex flex-wrap items-center justify-center gap-3">
        <UButton
          size="xl"
          color="neutral"
          icon="i-simple-icons-github"
          :to="orgUrl"
          target="_blank"
          label="GitHub 조직 보기"
        />
        <UButton
          size="xl"
          color="neutral"
          variant="outline"
          trailing-icon="i-lucide-arrow-down"
          to="#projects"
          label="프로젝트 둘러보기"
        />
      </div>
    </UContainer>
  </section>
</template>
