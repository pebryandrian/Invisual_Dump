// src/hooks/use-active-section.ts

import { useEffect, useState } from "react";

const sectionIds = ["home", "services", "projects", "company"] as const;

export function useActiveSection() {
  const [active, setActive] = useState<typeof sectionIds[number]>("home");

  useEffect(() => {
    const handleScroll = () => {
      let currentActive: typeof sectionIds[number] = "home";

      // Cek jika pengguna berada di bagian atas halaman, tandai 'home' sebagai aktif
      if (window.scrollY < 200) { // Menambahkan sedikit margin
        setActive("home");
        return;
      }
      
      // Logika scroll yang ada
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActive = id;
            break;
          }
        }
      }
      
      setActive(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { active, setActive };
}