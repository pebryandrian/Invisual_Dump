"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/app/projects/categories";

interface SidebarCategoriesProps {
  layout?: "horizontal" | "vertical";
}

export default function SidebarCategories({ layout = "vertical" }: SidebarCategoriesProps) {
  const pathname = usePathname();
  const activeCategory = pathname.split("/projects/")[1] || "";

  return (
    <div
      className={
        layout === "horizontal"
          ? "flex gap-3"
          : "flex flex-col space-y-2"
      }
    >
      {/* All */}
      <Link
        href="/projects"
        className={`px-3 py-2 rounded-md whitespace-nowrap transition ${
          !activeCategory
            ? "bg-blue-600 text-white font-semibold"
            : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
        }`}
      >
        All
      </Link>

      {categories.map((cat) => {
        const slug = cat.slug.toLowerCase();
        const isActive = activeCategory === slug;

        // 👉 pengecualian khusus Services
        if (slug === "services") {
          return (
            <Link
              key={cat.slug}
              href="/#services"
              className="px-3 py-2 rounded-md whitespace-nowrap transition text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {cat.name}
            </Link>
          );
        }

        return (
          <Link
            key={cat.slug}
            href={`/projects/${slug}`}
            className={`px-3 py-2 rounded-md whitespace-nowrap transition ${
              isActive
                ? "bg-blue-600 text-white font-semibold"
                : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {cat.name}
          </Link>
        );
      })}
    </div>
  );
}
