"use client";

import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Sidebar from "./sidebar";
import { useState } from "react";
import { DarkmodeToggle } from "@/components/common/darkmode-toggle";
import Image from "next/image";

const NAV = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Our Services" },
    { href: "#projects", label: "Projects" },
    { href: "#company", label: "Company" },
] as const;

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-background">
            <div className="mx-auto flex h-13 max-w-6xl items-center justify-between px-4">
                {/* Logo */}
                <Link href="#" className="flex items-center">
                    <Image src="/logo.svg" alt="Invisual Logo" width={35} height={35} priority />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:block">
                    <NavigationMenu>
                        <NavigationMenuList className="gap-2">
                            {NAV.map((item) => (
                                <NavigationMenuItem key={item.href}>
                                    <NavigationMenuLink asChild>
                                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                            <Link href={item.href}>{item.label}</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </nav>

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

            {/* Mobile Sidebar */}
            <Sidebar open={open} setOpen={setOpen} />
        </header>
    );
}
