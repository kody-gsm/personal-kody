import { ORG, featuredRepos, type RepoSummary } from "~~/shared/featured-repos";

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  topics?: string[];
  updated_at: string;
}

/**
 * kody-gsm 조직의 큐레이션된 저장소 정보를 GitHub API로 조회해 정규화한다.
 * - PAT 토큰(NUXT_GITHUB_TOKEN)이 있으면 인증(5000회/시간), 없으면 비인증(60회/시간).
 * - 응답을 1시간 캐싱해 rate limit을 완화한다.
 * - 개별 저장소 조회가 실패해도 전체가 깨지지 않도록 graceful 하게 건너뛴다.
 */
export default defineCachedEventHandler(
  async (): Promise<RepoSummary[]> => {
    const token = useRuntimeConfig().githubToken;

    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "kody-gsm-promotion",
    };
    if (token) headers.Authorization = `Bearer ${token}`;

    const results = await Promise.allSettled(
      featuredRepos.map((repo) =>
        $fetch<GitHubRepo>(
          `https://api.github.com/repos/${ORG}/${repo.name}`,
          { headers },
        ),
      ),
    );

    return results.flatMap((result, i) => {
      const featured = featuredRepos[i]!;
      if (result.status !== "fulfilled") return [];
      const data = result.value;
      return [
        {
          name: data.name,
          label: featured.label ?? data.name,
          category: featured.category,
          description: data.description,
          htmlUrl: data.html_url,
          stars: data.stargazers_count,
          language: data.language,
          topics: data.topics ?? [],
          updatedAt: data.updated_at,
        },
      ];
    });
  },
  {
    maxAge: 60 * 60, // 1시간 캐싱
    name: "kody-repos",
    getKey: () => "all",
  },
);
