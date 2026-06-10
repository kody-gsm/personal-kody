// 랜딩 페이지 Repositories 섹션에 노출할 저장소 큐레이션 목록.
// 서버 라우트(server/api/repos.get.ts)와 클라이언트 양쪽에서 import 한다.
// 실제 노출 목록은 자유롭게 추가/삭제하세요.

export const ORG = "kody-gsm";

export interface FeaturedRepo {
  /** GitHub 저장소 이름 (kody-gsm/<name>) */
  name: string;
  /** 카드에 표시할 이름 (없으면 name 사용) */
  label?: string;
  /** 프로젝트 묶음 (같은 서비스 계열 그룹핑용) */
  category?: string;
}

/** server/api/repos 가 반환하는 정규화된 저장소 정보 */
export interface RepoSummary {
  name: string;
  label: string;
  category?: string;
  description: string | null;
  htmlUrl: string;
  stars: number;
  language: string | null;
  topics: string[];
  updatedAt: string | null;
}

export const featuredRepos: FeaturedRepo[] = [
  { name: "personal-kody", label: "Kody 홈페이지", category: "ourhome" },
  { name: "ourhome-07", label: "ourhome v7", category: "ourhome" },
  { name: "ourhome-07-back", label: "ourhome v7 (Back)", category: "ourhome" },
  { name: "Kiwi-Server", category: "Kiwi" },
  { name: "kiwi-front.v1", label: "Kiwi Front", category: "Kiwi" },
  { name: "kiwi-backend", category: "Kiwi" },
  { name: "Insam_Front", category: "Insam" },
  { name: "Insam_FastAPI", category: "Insam" },
  { name: "Jobdam_BackEnd", category: "Jobdam" },
  { name: "Jobdom_Fromt", label: "Jobdam Front", category: "Jobdam" },
  { name: "PSR_Platform", category: "PSR" },
  { name: "Gni-client", category: "Gni" },
];
