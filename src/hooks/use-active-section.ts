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
        observersRef.current.forEach(obs => obs.disconnect());
        observersRef.current = [];

        const sections = document.querySelectorAll("section[id]");
        if (sections.length === 0) return;

        const obs = new IntersectionObserver(
            (entries) => {
                let maxRatio = 0;
                let mostVisibleId: SectionId = active;
                let topReached = false; // Flag untuk mendeteksi bagian atas halaman

                // Periksa apakah bagian atas halaman terlihat
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

                // Jika di bagian atas, selalu aktifkan home
                if (topReached) {
                    setActive("home");
                } else if (mostVisibleId !== active) {
                    setActive(mostVisibleId);
                }
            },
            { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0] }
        );

        sections.forEach((el) => obs.observe(el));
        observersRef.current.push(obs);

        return () => observersRef.current.forEach((o) => o.disconnect());
    }, [threshold]);

    return { active, ids: SECTION_IDS };
}
