"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import type { SectionId } from "@/hooks/use-active-section";

const NAV = [
    { href: "#home", id: "home", label: "Home" },
    { href: "#services", id: "services", label: "Our Services" },
    { href: "#projects", id: "projects", label: "Projects" },
    { href: "#company", id: "company", label: "Company" },
    { href: "#contact", id: "contact", label: "Contact" },
] as const;

export default function Sidebar({
    open,
    setOpen,
    active,
}: {
    open: boolean;
    setOpen: (v: boolean) => void;
    active: SectionId;
}) {
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent side="left" className="w-[85vw] sm:w-80">
                <SheetHeader className="mb-4">
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
            </SheetContent>
        </Sheet>
    );
}
