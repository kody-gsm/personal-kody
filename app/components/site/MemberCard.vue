<script setup lang="ts">
import type { Member } from "~/data/members";

defineProps<{ member: Member; compact?: boolean }>();
</script>

<template>
  <ULink
    :to="`https://github.com/${member.githubId}`"
    target="_blank"
    class="group flex flex-col items-center rounded-xl border border-default bg-default p-5 text-center transition hover:border-primary hover:shadow-md"
  >
    <UAvatar
      :src="`https://github.com/${member.githubId}.png`"
      :alt="member.name"
      :size="compact ? 'xl' : '2xl'"
      class="ring-2 ring-default group-hover:ring-primary"
    />
    <p class="mt-3 font-semibold">
      {{ member.name }}
    </p>
    <p class="text-sm text-muted">
      {{ member.position }}
    </p>
    <UBadge
      color="neutral"
      variant="subtle"
      size="sm"
      class="mt-2"
      :label="member.cohort"
    />
  </ULink>
</template>
