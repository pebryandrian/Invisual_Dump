"use client";

import { useEffect, useState } from "react";
import SidebarCategories from "./sidebar-categories";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showCategories, setShowCategories] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowCategories(false);
      } else {
        setShowCategories(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="flex flex-col md:flex-row mt-4 pt-6 pb-12">
      {/* Mobile: kategori auto hide saat scroll */}
      <div
        className={`block md:hidden fixed top-14 left-0 right-0 z-30 
          bg-black/90 backdrop-blur-md px-4 py-2 overflow-x-auto
          transition-all duration-500 ease-in-out
          ${showCategories ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `}
      >
        <SidebarCategories layout="horizontal" />
      </div>

      {/* Spacer biar konten ga ketiban kategori */}
      <div className="block md:hidden h-14" />

      {/* Desktop: sidebar sticky mentok kiri */}
      <div className="hidden md:block w-56 shrink-0 sticky top-20 self-start pl-4">
    <SidebarCategories layout="vertical" />
  </div>

      {/* Konten utama lebih lebar */}
      <div className="flex-1 px-4 md:px-8">
    {children}
  </div>
</div>
  );
}
