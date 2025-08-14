"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = [
  "home",
  "services",
  "projects",
  "company",
  "contact",
] as const;
export type SectionId = (typeof SECTION_IDS)[number];

export function useActiveSection(threshold = 0.3) {
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(id);
          });
        },
        { threshold }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [threshold]);

  return { active, ids: SECTION_IDS };
}
