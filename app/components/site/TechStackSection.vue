<script setup lang="ts">
import { techStack } from "~/data/tech-stack";
</script>

<template>
  <section id="tech" class="scroll-mt-20 bg-elevated/40 py-24">
    <UContainer>
      <SiteSectionHeading
        eyebrow="Tech Stack"
        title="우리가 쓰는 기술"
        description="프론트엔드부터 백엔드, 인프라까지 다양한 스택을 다룹니다."
      />

      <div class="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
        <div
          v-for="group in techStack"
          :key="group.category"
          class="rounded-xl border border-default bg-default p-5"
        >
          <h3 class="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">
            {{ group.category }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="item in group.items"
              :key="item"
              color="neutral"
              variant="subtle"
              size="md"
              :label="item"
            />
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
