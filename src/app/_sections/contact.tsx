// src/app/_sections/contact.tsx
"use client";

import React from "react";

export default function ContactSection() {
    return (
        <section id="contact" className="border-t">
            <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold md:text-3xl">Contact Us</h2>
                    <p className="mt-4 text-base text-muted-foreground">
                        Feel free to get in touch with us for any inquiries or collaborations.
                        <br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold">Address</h3>
                            <p className="text-sm text-muted-foreground mt-2">
                                123 Design Street, Creative City, 12345
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Email</h3>
                            <p className="text-sm text-muted-foreground mt-2">
                                hello@invisual.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
