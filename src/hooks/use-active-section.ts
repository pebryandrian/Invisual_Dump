"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

const SECTION_IDS = ["home", "services", "projects", "company", "contact"] as const;
export type SectionId = (typeof SECTION_IDS)[number];

export function useActiveSection(threshold = 0.3) {
  const [active, setActive] = useState<SectionId>("home");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Kalau bukan halaman utama, set active berdasarkan URL saja
    if (pathname && pathname !== "/") {
      const matched = SECTION_IDS.find((id) => pathname.includes(id));
      if (matched) {
        setActive(matched);
      }
      // Jangan bikin observer di halaman selain "/"
      return;
    }

    // Disconnect observer lama
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisibleId = active;
        let maxRatio = 0;

        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleId = entry.target.id as SectionId;
          }
        }

        if (mostVisibleId !== active) {
          setActive(mostVisibleId);
        }
      },
      {
        threshold: Array.from({ length: 11 }, (_, i) => i / 10),
      }
    );

    sections.forEach((section) => observer.observe(section));
    observerRef.current = observer;

    return () => {
      observer.disconnect();
    };
  }, [threshold, pathname]);

  return { active, ids: SECTION_IDS };
}
