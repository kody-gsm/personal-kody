// 동아리 멤버 데이터. GitHub API로는 역할·기수를 알 수 없어 직접 관리한다.
// 아바타는 githubId로 https://github.com/<githubId>.png 에서 가져온다.
// 아래는 예시 데이터이므로 실제 멤버로 교체하세요.

export interface Member {
  /** GitHub 사용자명 (아바타 출처) */
  githubId: string;
  /** 표시 이름 */
  name: string;
  /** 역할/포지션 (예: Frontend, Backend, Embedded) */
  position: string;
  /** 기수 (예: "8기") */
  cohort: string;
}

export const members: Member[] = [
  { githubId: "Dino0204", name: "김준혁", position: "Frontend", cohort: "8기" },
  // TODO: 실제 멤버로 교체/추가하세요.
  { githubId: "octocat", name: "멤버 A", position: "Backend", cohort: "8기" },
  { githubId: "octocat", name: "멤버 B", position: "Frontend", cohort: "9기" },
  { githubId: "octocat", name: "멤버 C", position: "Backend", cohort: "9기" },
  { githubId: "octocat", name: "멤버 D", position: "Embedded", cohort: "10기" },
  { githubId: "octocat", name: "멤버 E", position: "Frontend", cohort: "10기" },
];
