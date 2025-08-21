// src/components/common/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useActiveSection } from "@/hooks/use-active-section";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Sidebar from "./sidebar";
import { useState, useEffect } from "react";
import { DarkmodeToggle } from "@/components/common/darkmode-toggle";
import Image from "next/image";
import logo3 from "@/assets/logo3.png";

const NAV = [
  { href: "/#services", id: "services", label: "Our Services" },
  { href: "/#projects", id: "projects", label: "Projects" },
  { href: "/#company", id: "company", label: "Company" },
  { href: "/#contact", id: "contact", label: "Contact" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const { active } = useActiveSection();

  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHash(window.location.hash);
      const onHashChange = () => setHash(window.location.hash);
      window.addEventListener("hashchange", onHashChange);
      return () => window.removeEventListener("hashchange", onHashChange);
    }
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 transition-all duration-300 shadow-md`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={logo3}
            alt="Invisual Logo"
            width={120}
            height={30}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {NAV.map((item) => {
                // Logika highlight aktif
                const isActive =
                  (pathname.startsWith("/projects") &&
                    item.id === "projects") || // kalau di detail project
                  (pathname === "/" &&
                    hash === "#projects" &&
                    item.id === "projects") || // kalau kembali dari detail
                  (pathname === "/" && active === item.id); // scroll-based

                return (
                  <NavigationMenuItem key={item.id}>
                    <NavigationMenuLink asChild>
                      <a
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className="group relative rounded-md px-3 py-2 text-sm font-medium transition-colors"
                      >
                        <span
                          className={`transition-colors ${
                            isActive
                              ? "text-[#0457ff]"
                              : "text-foreground/80 group-hover:text-foreground"
                          }`}
                        >
                          {item.label}
                        </span>
                        <span
                          className={`pointer-events-none absolute inset-x-2 -bottom-[6px] h-[2px] origin-center rounded-full transition-[opacity,transform]
                          ${
                            isActive
                              ? "opacity-100 scale-100 bg-[#0457ff]"
                              : "opacity-0 scale-50 bg-[#0457ff]"
                          }`}
                        />
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA + Mobile */}
        <div className="flex items-center gap-3">
          <DarkmodeToggle />
          <Button
            variant="outline"
            className="hidden md:flex border-[#0457ff] text-[#0457ff] hover:bg-[#0457ff]/10"
          >
            <span className="h-2 w-2 rounded-full bg-[#0457ff] mr-2" />
            Get Started
          </Button>
          <button
            className="md:hidden p-2 rounded-md border-none cursor-pointer"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <Sidebar open={open} setOpen={setOpen} />
    </header>
  );
}
    