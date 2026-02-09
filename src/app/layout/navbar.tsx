// src/components/common/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
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
import { DarkmodeToggle } from "@/components/common/darkmode-toggle";
import Image from "next/image";
import logo3 from "@/assets/logo3.png";

const NAV_ITEMS = [
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
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle hash + scroll
  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShowNavbar(!(currentScroll > lastScrollY && currentScroll > 80));
      setLastScrollY(currentScroll);
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("scroll", handleScroll);

    setHash(window.location.hash); // initial load

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b bg-background/70 backdrop-blur-md 
        shadow-sm transition-all duration-500 ease-in-out 
        ${showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={logo3} alt="Invisual Logo" width={120} height={30} priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {NAV_ITEMS.map(({ id, href, label }) => {
                const isActive =
                  (pathname.startsWith("/projects") && id === "projects") ||
                  (pathname === "/" && hash === "#projects" && id === "projects") ||
                  (pathname === "/" && active === id);

                return (
                  <NavigationMenuItem key={id}>
                    <NavigationMenuLink asChild>
                      <a
                        href={href}
                        aria-current={isActive ? "page" : undefined}
                        className="group relative rounded-md px-3 py-2 text-sm font-medium transition-colors"
                      >
                        <span
                          className={`relative transition-colors
                            after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0
                            after:bg-gradient-to-r after:from-[#0457ff] after:to-[#0099ff]
                            after:rounded-full after:transition-all after:duration-300
                            group-hover:after:w-full
                            ${isActive ? "text-[#0457ff] after:w-full" : "text-foreground/80"}`}
                        >
                          {label}
                        </span>
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* CTA + Mobile */}
        <div className="flex items-center gap-3">
          <DarkmodeToggle />
          <Button
            variant="outline"
            className="hidden md:flex border border-[#0457ff] text-[#0457ff] 
              hover:bg-[#0457ff]/10 hover:shadow-md transition-all"
          >
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#0457ff] to-[#0099ff] mr-2" />
            Get Started
          </Button>
          <button
            className="md:hidden p-2 rounded-md hover:rotate-90 transition-transform"
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
