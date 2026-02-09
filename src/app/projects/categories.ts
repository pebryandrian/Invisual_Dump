// src/app/projects/categories.ts
import { Category } from "@prisma/client";

export type CategorySlug =
  | "branding"
  | "social-media"
  | "visual"
  | "web"
  | "seo"
  | "ads";

export const categories: { slug: CategorySlug; name: string; value: Category }[] = [
  { slug: "branding", name: "Branding", value: Category.BRANDING },
  { slug: "social-media", name: "Social Media", value: Category.SOCIAL_MEDIA },
  { slug: "visual", name: "Visual Content", value: Category.VISUAL },
  { slug: "web", name: "Web", value: Category.WEB },
  { slug: "seo", name: "SEO", value: Category.SEO },
  { slug: "ads", name: "Advertising", value: Category.ADS },
];

// ✅ convert slug ke enum Prisma
export const getCategoryValue = (slug: string): Category | null => {
  const match = categories.find((c) => c.slug === slug.toLowerCase());
  return match ? match.value : null;
};

export const getCategoryName = (category: Category): string => {
  const match = categories.find((c) => c.value === category);
  return match ? match.name : category;
};
