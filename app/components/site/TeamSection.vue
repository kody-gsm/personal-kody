<script setup lang="ts">
import { members, type Member } from "~/data/members";

// 기수별로 묶고, 기수 숫자 오름차순 정렬
const cohortGroups = computed(() => {
  const map = new Map<string, Member[]>();
  for (const m of members) {
    const list = map.get(m.cohort) ?? [];
    list.push(m);
    map.set(m.cohort, list);
  }
  return [...map.entries()]
    .map(([cohort, list]) => ({ cohort, members: list }))
    .sort((a, b) => parseInt(a.cohort) - parseInt(b.cohort));
});
</script>

<template>
  <section id="team" class="scroll-mt-20 py-24">
    <UContainer>
      <SiteSectionHeading
        eyebrow="Team"
        title="함께하는 사람들"
        :description="`${members.length}명의 멤버가 Kody를 만들어 갑니다.`"
      />

      <div class="space-y-12">
        <div v-for="group in cohortGroups" :key="group.cohort">
          <div class="mb-5 flex items-center gap-3">
            <h3 class="text-xl font-bold">
              {{ group.cohort }}
            </h3>
            <span class="text-sm text-muted">{{ group.members.length }}명</span>
            <div class="h-px grow bg-default" />
          </div>

          <div
            class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
          >
            <SiteMemberCard
              v-for="member in group.members"
              :key="member.githubId + member.name"
              :member="member"
              compact
            />
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
