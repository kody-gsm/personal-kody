<script setup lang="ts">
const orgUrl = "https://github.com/kody-gsm";
const year = new Date().getFullYear();
</script>

<template>
  <footer class="border-t border-default py-12">
    <UContainer
      class="flex flex-col items-center justify-between gap-4 sm:flex-row"
    >
      <div class="flex items-center gap-2.5">
        <img
          src="/kody.png"
          alt="Kody 로고"
          class="size-8 rounded-full"
          width="32"
          height="32"
        >
        <span class="font-semibold">Kody</span>
      </div>

      <p class="text-sm text-muted">
        © {{ year }} Kody · 전공 동아리
      </p>

      <UButton
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        :to="orgUrl"
        target="_blank"
        label="kody-gsm"
      />
    </UContainer>
  </footer>
</template>
