# personal-kody

전공 동아리 **Kody**의 프로젝트 소개 페이지입니다. (이전 소개 페이지 `ourhome`을 계승하는 프로젝트)

GitHub 조직([kody-gsm](https://github.com/kody-gsm))의 저장소를 실시간으로 불러와 보여주는 단일 랜딩 페이지이며, 추후 멀티페이지로 확장 가능하도록 Nuxt Content를 함께 사용합니다.

## 스택

- Nuxt 4 (SSR)
- Nuxt UI 4 + Tailwind CSS 4
- Nuxt Content
- 배포: Vercel

## 구조

- `app/pages/index.vue` — 랜딩 페이지 (섹션 조합)
- `app/components/site/` — 섹션 컴포넌트 (NavBar, Hero, Repositories, TechStack, Team, Footer)
- `server/api/repos.get.ts` — GitHub API 프록시 (저장소 정보 실시간 조회 + 캐싱)
- `shared/featured-repos.ts` — 노출할 저장소 큐레이션 목록
- `app/data/members.ts` — 동아리 멤버 데이터 (기수·역할)
- `app/data/tech-stack.ts` — 기술 스택 데이터

## 환경 변수

GitHub API rate limit 완화를 위해 Personal Access Token을 설정하세요(선택).

```bash
cp .env.example .env
# .env 에 NUXT_GITHUB_TOKEN 입력
```

## 개발

```bash
bun install
bun run dev   # http://localhost:3000
```

## 빌드 / 프리뷰

```bash
bun run build
bun run preview
```
