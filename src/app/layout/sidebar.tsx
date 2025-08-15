// src/components/common/sidebar.tsx
"use client";

import Link from "next/link";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { Separator } from "@/components/ui/separator";
=======
import type { SectionId } from "@/hooks/use-active-section";
import Image from "next/image"; // Import Image dari next/image
import oldLogo from "@/assets/logo2.png"; // Import logo lama Anda

const NAV = [
    { href: "#home", id: "home", label: "Home" },
    { href: "#services", id: "services", label: "Our Services" },
    { href: "#projects", id: "projects", label: "Projects" },
    { href: "#company", id: "company", label: "Company" },
    { href: "#contact", id: "contact", label: "Contact" },
] as const;
>>>>>>> dummy

export default function Sidebar({
    open,
    setOpen,
}: {
    open: boolean;
    setOpen: (v: boolean) => void;
}) {
    return (
        <Sheet open={open} onOpenChange={setOpen}>
<<<<<<< HEAD
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        INVISUAL
                    </SheetTitle>
                    <SheetDescription className="sr-only">
                        Sidebar navigation for main sections of the website
                    </SheetDescription>
                </SheetHeader>
                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                    <div className="grid gap-3">
                        <Link href="#home">Home</Link>
                    </div>
                    <Separator />
                    <div className="grid gap-3">
                        <Link href="#services">Services</Link>
                    </div>
                    <Separator />
                    <div className="grid gap-3">
                        <Link href="#projects">Projects</Link>
                    </div>
                    <Separator />
                    <div className="grid gap-3">
                        <Link href="#company">Company</Link>
                    </div>
                    <Separator />
                </div>
                <SheetFooter>
                    <Button type="submit">Get Started</Button>
                    <SheetClose asChild>
                        <Button variant="outline">Close</Button>
                    </SheetClose>
                </SheetFooter>
=======
            <SheetContent side="left" className="w-[85vw] sm:w-80 flex flex-col justify-between">
                <div>
                    <SheetHeader className="mb-4 flex flex-col items-center gap-4">
                        {/* Logo Lama di Header Sidebar */}
                        <Image src={oldLogo} alt="Old Logo" width={50} height={50} />
                        <SheetTitle className="text-base font-semibold">
                            <span className="text-[#0457ff]">Invisual</span>
                        </SheetTitle>
                    </SheetHeader>

                    <nav className="flex flex-col gap-2">
                        {NAV.map((item) => {
                            const isActive = active === item.id;
                            return (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className={`flex items-center justify-between rounded-md px-3 py-2 text-sm
                                ${isActive ? "ring-1 ring-[#0457ff]/40" : "ring-1 ring-transparent"}
                                `}
                                >
                                    <span className={`${isActive ? "text-[#0457ff]" : "text-foreground/80"}`}>{item.label}</span>
                                    <span className={`h-2 w-2 rounded-full ${isActive ? "bg-[#0457ff]" : "bg-foreground/20"}`} />
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="mt-6">
                        <Button className="w-full bg-[#0457ff] hover:bg-[#034bdb] text-white">Get Started</Button>
                    </div>

                    <div className="mt-6 border-t pt-4 text-xs text-muted-foreground">
                        <p className="leading-relaxed">
                            Crafted for design teams. Clean, fast, and delightful.
                        </p>
                    </div>
                </div>

                {/* Tautan media sosial di bagian bawah sidebar */}
                <div className="flex justify-center gap-8 border-t pt-4">
                    <Link href="#" className="text-xs hover:text-[#0457ff] transition-colors">IG</Link>
                    <Link href="#" className="text-xs hover:text-[#0457ff] transition-colors">LI</Link>
                    <Link href="#" className="text-xs hover:text-[#0457ff] transition-colors">BE</Link>
                </div>

>>>>>>> dummy
            </SheetContent>
        </Sheet>
    );
}