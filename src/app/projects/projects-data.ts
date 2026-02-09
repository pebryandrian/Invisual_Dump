import { Category } from "@prisma/client";
import type { CategorySlug } from "./categories";

export type ProjectId =
  | "BrandA" | "BrandB"
  | "SosA" | "SosB"
  | "ConA" | "ConB";

export interface ProjectDetail {
  id: ProjectId;
  title: string;
  description: string;
  image: string;
  discipline: string;
  creativeDirector: string;
  artDirector: string;
  graphicDesigner: string;
  photographer: string;
  projectCollaborator: string;
  copywriter: string;
  environmentalGraphicDesign: string;
  accountExecutive: string;
  category: Category; // langsung pakai enum dari Prisma
  year?: string;
}

const dummy: ProjectDetail = {
  id: "BrandA",
  title: "Coming Soon",
  description: "Detail coming soon",
  image: "/projects/placeholder.webp",
  discipline: "-",
  creativeDirector: "-",
  artDirector: "-",
  graphicDesigner: "-",
  photographer: "-",
  projectCollaborator: "-",
  copywriter: "-",
  environmentalGraphicDesign: "-",
  accountExecutive: "-",
  category: Category.BRANDING, // ✅ pakai Enum
  year: "—",
};

export const PROJECT_DETAILS: Record<ProjectId, ProjectDetail> = {
  // Branding
  BrandA: { ...dummy, id: "BrandA", title: "Brand A", discipline: "Branding", category: Category.BRANDING, year: "2023" },
  BrandB: { ...dummy, id: "BrandB", title: "Brand B", discipline: "Branding", category: Category.BRANDING, year: "2023" },

  // Social Media
  SosA: { ...dummy, id: "SosA", title: "Social Media A", discipline: "Social Media", category: Category.SOCIAL_MEDIA, year: "2024" },
  SosB: { ...dummy, id: "SosB", title: "Social Media B", discipline: "Social Media", category: Category.SOCIAL_MEDIA, year: "2024" },

  // Visual Content
  ConA: { ...dummy, id: "ConA", title: "Content A", discipline: "Content", category: Category.VISUAL, year: "2025" },
  ConB: { ...dummy, id: "ConB", title: "Content B", discipline: "Content", category: Category.VISUAL, year: "2025" },
};
