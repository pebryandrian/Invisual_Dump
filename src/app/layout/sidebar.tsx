"use client";

import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const NAV = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Our Services" },
    { href: "#projects", label: "Projects" },
    { href: "#company", label: "Company" },
    { href: "#contact", label: "Contact" },
] as const;

export default function Sidebar({
    open,
    setOpen,
}: {
    open: boolean;
    setOpen: (v: boolean) => void;
}) {
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent side="left" className="w-[85vw] sm:w-80">
                <SheetHeader className="mb-4">
                    <SheetTitle className="text-base font-semibold text-[#0457ff]">
                        INVISUAL
                    </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col gap-2">
                    {NAV.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="flex items-center justify-between rounded-md px-3 py-2 text-sm ring-1 ring-transparent hover:ring-[#0457ff]/20 transition-colors"
                        >
                            <span className="text-foreground">{item.label}</span>
                            <span className="h-2 w-2 rounded-full bg-foreground/20" />
                        </Link>
                    ))}
                </nav>

                <div className="mt-6">
                    <Button className="w-full bg-[#0457ff] hover:bg-[#034bdb] text-white">
                        Get Started
                    </Button>
                </div>

                <div className="mt-6 border-t pt-4 text-xs text-muted-foreground">
                    <p>Crafted for design teams. Clean, fast, and delightful.</p>
                </div>
            </SheetContent>
        </Sheet>
    );
}
