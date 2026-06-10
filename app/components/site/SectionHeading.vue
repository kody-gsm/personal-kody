<script setup lang="ts">
defineProps<{
  eyebrow?: string;
  title: string;
  description?: string;
}>();
</script>

<template>
  <div class="mx-auto mb-12 max-w-2xl text-center">
    <p
      v-if="eyebrow"
      class="mb-2 text-sm font-medium uppercase tracking-widest text-primary"
    >
      {{ eyebrow }}
    </p>
    <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
      {{ title }}
    </h2>
    <p v-if="description" class="mt-4 text-pretty text-muted">
      {{ description }}
    </p>
  </div>
</template>
