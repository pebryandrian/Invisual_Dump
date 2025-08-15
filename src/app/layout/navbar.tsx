"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useActiveSection } from "@/hooks/use-active-section";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Sidebar from "./sidebar";
import { DarkmodeToggle } from "@/components/common/darkmode-toggle";
import Image from "next/image";
import logo3 from "@/assets/logo3.png"; // Import logo tulisan Anda

const NAV = [
    { href: "#home", label: "Home", id: "home" },
    { href: "#services", label: "Our Services", id: "services" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#company", label: "Company", id: "company" },
] as const;

export default function Navbar() {
    const pathname = usePathname();
    const { active } = useActiveSection(); // useActiveSection() dipanggil di sini, di luar kondisi

    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Sembunyi saat scroll ke bawah
            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setShow(false);
            } else {
                setShow(true);
            }

            // Cek apakah halaman sudah di-scroll
            setHasScrolled(currentScrollY > 0);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <header
            className={`sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 transition-all duration-300
            ${show ? "translate-y-0" : "-translate-y-full"}
            ${hasScrolled ? "shadow-md" : "shadow-none"}
        `}
        >
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
                {/* Logo Utama - Menggunakan logo3.png */}
                <Link href="/" className="flex items-center">
                    <Image src={logo3} alt="Invisual Logo" width={120} height={30} priority />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:block">
                    <NavigationMenu>
                        <NavigationMenuList className="gap-2">
                            {NAV.map((item) => {
                                // Logika untuk menentukan tautan aktif
                                const isActive = pathname === "/" ? active === item.id : pathname === item.href;
                                
                                return (
                                    <NavigationMenuItem key={item.id}>
                                        <NavigationMenuLink asChild>
                                            <a
                                                href={item.href}
                                                // Gunakan aria-current untuk menandai halaman aktif
                                                aria-current={isActive ? "page" : undefined}
                                                className="group relative rounded-md px-3 py-2 text-sm font-medium transition-colors"
                                            >
                                                {/* Perbaikan warna teks */}
                                                <span className={`transition-colors ${isActive ? "text-[#0457ff]" : "text-foreground/80 group-hover:text-foreground"}`}>
                                                    {item.label}
                                                </span>
                                                {/* Perbaikan indikator aktif (garis bawah) */}
                                                <span
                                                    className={`pointer-events-none absolute inset-x-2 -bottom-[6px] h-[2px] origin-center rounded-full transition-[opacity,transform]
                                                    ${isActive ? "opacity-100 scale-100 bg-[#0457ff]" : "opacity-0 scale-50 bg-[#0457ff]"}`}
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