"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-background border-t py-16 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm text-muted-foreground">
                {/* Column 1: Branding */}
                <div>
                    <Image src="/logo.svg" alt="Invisual Logo" width={40} height={40} />
                    <p className="mt-4 text-foreground font-medium">Invisual Studio</p>
                    <p className="mt-1">Creative minds, clear impact.</p>
                    <p className="mt-4 text-xs text-muted-foreground">© {new Date().getFullYear()} Invisual Studio. All rights reserved.</p>
                </div>

                {/* Column 2: Navigation */}
                <div>
                    <h4 className="text-foreground font-semibold mb-3">Navigation</h4>
                    <ul className="space-y-2">
                        <li><Link href="#home" className="hover:text-primary">Home</Link></li>
                        <li><Link href="#services" className="hover:text-primary">Services</Link></li>
                        <li><Link href="#projects" className="hover:text-primary">Projects</Link></li>
                        <li><Link href="#company" className="hover:text-primary">Company</Link></li>
                    </ul>
                </div>

                {/* Column 3: Social Media */}
                <div>
                    <h4 className="text-foreground font-semibold mb-3">Connect With Us</h4>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                            <Instagram className="h-4 w-4 text-primary" />
                            <a href="https://www.instagram.com/invisual_id" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                                Instagram
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Linkedin className="h-4 w-4 text-primary" />
                            <a href="https://www.linkedin.com/company/invisualid/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Column 4: Contact & Location */}
                <div>
                    <h4 className="text-foreground font-semibold mb-3">Contact</h4>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                            <Mail className="h-4 w-4 mt-1 text-primary" />
                            <a href="mailto:invisual.id@gmail.com" className="hover:text-primary">invisual.id@gmail.com</a>
                        </li>
                        <li className="flex items-start gap-2">
                            <Phone className="h-4 w-4 mt-1 text-primary" />
                            <a href="tel:+6281234567890" className="hover:text-primary">+62 822-2555-5114</a>
                        </li>
                        <li className="flex items-start gap-2">
                            <MapPin className="h-4 w-4 mt-1 text-primary" />
                            <span className="text-sm">
                                Antapani Residence.
                                <br />
                                Jl.Malangbong Raya Blok C10
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <Separator className="my-10" />

            {/* Bottom Credit */}
            <div className="text-xs text-center text-muted-foreground">
                Built with love using Next.js & ShadCN • Crafted by Invisual Studio 💙
            </div>
        </footer>
    );
}
