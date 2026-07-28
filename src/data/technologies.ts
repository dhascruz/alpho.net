export type TechGroup = {
  category: string;
  items: string[];
};

export const technologyGroups: TechGroup[] = [
  {
    category: "Frontend",
    items: ["Next.js 15", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    category: "Backend",
    items: ["Laravel 12", "NestJS", "Node.js"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MySQL", "Redis"],
  },
  {
    category: "Authentication",
    items: ["OAuth", "JWT", "Sanctum"],
  },
  {
    category: "Cloud",
    items: ["AWS", "Azure"],
  },
  {
    category: "CI/CD",
    items: ["GitHub Actions", "Docker"],
  },
];
