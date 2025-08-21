// src/hooks/use-active-section.ts
"use client";

import { useEffect, useState, useRef } from "react";

const SECTION_IDS = [
  "home",
  "services",
  "projects",
  "company",
  "contact",
] as const;
export type SectionId = (typeof SECTION_IDS)[number];

export function useActiveSection(threshold = 0.5) {
  const [active, setActive] = useState<SectionId>("home");
  const observersRef = useRef<IntersectionObserver[]>([]);

  useEffect(() => {
    observersRef.current.forEach((obs) => obs.disconnect());
    observersRef.current = [];

    const sections = document.querySelectorAll("section[id]");
    if (sections.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let mostVisibleId: SectionId = active;
        let topReached = false;

        if (window.scrollY < 10) {
          topReached = true;
        }

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.intersectionRatio > maxRatio) {
              maxRatio = entry.intersectionRatio;
              mostVisibleId = entry.target.id as SectionId;
            }
          }
        });

        if (topReached) {
          setActive("home");
        } else if (mostVisibleId !== active) {
          setActive(mostVisibleId);
        }
      },
      {
        threshold: Array.from({ length: 11 }, (_, i) => i / 10),
      }
    );

    sections.forEach((el) => obs.observe(el));
    observersRef.current.push(obs);

    return () => observersRef.current.forEach((o) => o.disconnect());
  }, [threshold]);

  // ✅ Tambahin listener untuk hash change (misalnya klik "Kembali")
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (SECTION_IDS.includes(hash as SectionId)) {
        setActive(hash as SectionId);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // cek pertama kali

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return { active, ids: SECTION_IDS };
}
