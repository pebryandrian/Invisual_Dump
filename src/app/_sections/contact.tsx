"use client";

import { motion } from "framer-motion";
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactSection({ id }: { id?: string }) {
    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <section id="contact" className="border-t">
            <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                    {/* Bagian Informasi Kontak Kiri */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={itemVariants}
                    >
                        <h3 className="text-2xl font-semibold text-primary">Reach Us</h3>
                        
                        <div className="mt-8 flex flex-col gap-6">
                            <div>
                                <h4 className="text-lg font-semibold">Bandung Office</h4>
                                <p className="text-sm text-muted-foreground">Antapani Residence, Jl.Malangbong Raya Blok C10</p>
                                <p className="text-sm text-muted-foreground">Jl. Tubagus Ismail Raya No. 40</p>
                                <p className="text-sm text-muted-foreground">Bandung 40134, Indonesia</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold">+6282225555114</h4>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bagian Pertanyaan Kanan */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={itemVariants}
                    >
                        <h3 className="text-2xl font-semibold text-primary">Inquiries</h3>
                        
                        <div className="mt-8 flex flex-col gap-8">
                            <div>
                                <h4 className="text-lg font-semibold">General & Business</h4>
                                <p className="text-sm text-muted-foreground mt-2">
                                    For new business inquiries, send your project brief to the email below and we will get back to you soon.
                                </p>
                                <Link href="mailto:info@invisual.com" className="text-sm text-primary hover:underline">info@invisual.com</Link>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold">Jobs</h4>
                                <p className="text-sm text-muted-foreground mt-2">
                                    We are a close-knit team of fathers and mothers, bassists, singers, artists, home grown chef, strategists, developers, and writers.
                                </p>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Mail your portfolio to the email below.
                                </p>
                                <Link href="mailto:jobs@invisual.com" className="text-sm text-primary hover:underline">jobs@invisual.com</Link>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold">Internship</h4>
                                <p className="text-sm text-muted-foreground mt-2">
                                    For a minimum course of 3 months, you will be expected to finish a series of internship curriculums.
                                </p>
                                <Link href="mailto:interns@invisual.com" className="text-sm text-primary hover:underline">interns@invisual.com</Link>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold">Talks & Workshop</h4>
                                <p className="text-sm text-muted-foreground mt-2">
                                    We&apos;re not the type who keep the good things to ourselves. We give classes and workshops outside of the studio.
                                </p>
                                <Link href="mailto:talks@invisual.com" className="text-sm text-primary hover:underline">talks@invisual.com</Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
