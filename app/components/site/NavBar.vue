<script setup lang="ts">
const orgUrl = "https://github.com/kody-gsm";
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-default/60 bg-default/80 backdrop-blur"
  >
    <UContainer
      class="flex h-16 items-center justify-between"
    >
      <NuxtLink to="/" class="flex items-center gap-2.5">
        <img
          src="/kody.png"
          alt="Kody 로고"
          class="size-9 rounded-full"
          width="36"
          height="36"
        >
        <span class="text-lg font-semibold tracking-tight">Kody</span>
      </NuxtLink>

      <nav class="flex items-center gap-1">
        <UButton
          variant="ghost"
          color="neutral"
          label="Projects"
          to="#projects"
        />
        <UButton
          variant="ghost"
          color="neutral"
          label="Tech"
          to="#tech"
        />
        <UButton
          variant="ghost"
          color="neutral"
          label="Team"
          to="#team"
        />
        <UButton
          icon="i-simple-icons-github"
          color="neutral"
          variant="solid"
          :to="orgUrl"
          target="_blank"
          label="GitHub"
        />
      </nav>
    </UContainer>
  </header>
</template>
