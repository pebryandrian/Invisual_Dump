"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-secondary py-8 px-6">
            <div className="flex flex-col gap-8 px-6 py-8 md:px-12 md:py-12">
                {/* Column 1: Branding */}
                <div className="flex w-2/5 flex-col gap-4 md:w-1/3">
                    <Image src="/logo.svg" alt="Invisual Logo" width={40} height={40} />
                    <p className="mt-4 text-sm leading-relaxed lg:text-base">Invisual Studio</p>
                    <div className="flex gap-1 text-sm text-neutral-300">
                        Antapani Residence, Jl.Malangbong Raya Blok C10
                    </div>
                </div>

                {/* Column 2: Navigation */}
                <div className="flex w-full flex-wrap gap-8 md:w-2/3 md:flex-nowrap">
                    <div className="flex w-2/5 flex-col gap-4 md:w-1/3">
                        <h2 className="mb-2 font-bold">Navigation</h2>
                        <Link href="#home" className="w-fit text-neutral-400 hover:text-primary">Home</Link>
                        <Link href="#services" className="w-fit text-neutral-400 hover:text-primary">Services</Link>
                        <Link href="#projects" className="w-fit text-neutral-400 hover:text-primary">Projects</Link>
                        <Link href="#company" className="w-fit text-neutral-400 hover:text-primary">Company</Link>
                    </div>

                    {/* Column 3: Social Media */}
                    <div className="flex w-2/5 flex-col gap-4 md:w-1/3">
                        <h2 className="mb-2 font-bold">Connect with Us</h2>
                        <Link href="https://www.instagram.com/invisual_id" target="_blank" rel="noopener noreferrer" className="w-fit text-neutral-400 hover:text-primary">
                            Instagram
                        </Link>
                        <Link href="https://www.linkedin.com/company/invisualid/" target="_blank" rel="noopener noreferrer" className="w-fit text-neutral-400 hover:text-primary">
                            LinkedIn
                        </Link>
                    </div>

                    {/* Column 4: Contact & Location */}
                    <div className="flex w-2/5 flex-col gap-4 md:w-1/3">
                        <h2 className="text-foreground font-semibold mb-3">Contact</h2>
                        <Link href="mailto:invisual.id@gmail.com" className="w-fit text-neutral-400 hover:text-primary">invisual.id@gmail.com</Link>
                        <Link href="tel:+6281234567890" className="w-fit text-neutral-400 hover:text-primary">+62 822-2555-5114</Link>
                    </div>
                </div>
            </div>

            <Separator />

            {/* Bottom Credit */}
            <div className="text-xs text-center text-muted-foreground gap-4 pt-4">
                Built with love using Next.js & ShadCN • Crafted by Invisual Studio 💙
            </div>
        </footer>
    );
}
