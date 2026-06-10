// 기술 스택 섹션 데이터. 동아리에서 사용하는 기술을 카테고리별로 정리한다.
// 자유롭게 추가/수정하세요.

export interface TechCategory {
  category: string;
  items: string[];
}

export const techStack: TechCategory[] = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Java", "Python"] },
  { category: "Frontend", items: ["Vue", "Nuxt", "React", "SCSS", "Tailwind CSS"] },
  { category: "Backend", items: ["Spring", "FastAPI", "Node.js"] },
  { category: "Database", items: ["MySQL", "PostgreSQL"] },
  { category: "Infra", items: ["Docker", "Vercel", "GitHub Actions"] },
];
