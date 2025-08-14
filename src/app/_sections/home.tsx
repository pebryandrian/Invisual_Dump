export default function HomeSection() {
    return (
        <section id="home" className="relative">
            <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
                <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                    <div className="max-w-2xl">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
                            <span className="h-2 w-2 rounded-full bg-[#0457ff]" /> Trusted Design Partner
                        </div>
                        <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
                            Elevate your brand with{" "}
                            <span className="underline decoration-[#0457ff]/50 underline-offset-4">precise design</span>
                        </h1>
                        <p className="mt-4 text-base text-muted-foreground md:text-lg">
                            We craft identity, interfaces, and visuals that move people and grow businesses.
                        </p>
                        <div className="mt-6 flex items-center gap-3">
                            <a
                                href="#projects"
                                className="rounded-md bg-[#0457ff] px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:translate-y-[1px]"
                            >
                                See Projects
                            </a>
                            <a
                                href="#contact"
                                className="rounded-md border px-4 py-2 text-sm font-medium"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>

                    <div className="mt-10 w-full md:mt-0 md:w-[42%]">
                        <div className="aspect-[4/3] w-full rounded-xl border bg-muted/30 p-1">
                            <div className="h-full w-full rounded-lg bg-gradient-to-br from-[#0457ff]/10 via-transparent to-[#0457ff]/20" />
                        </div>
                    </div>
                </div>

                {/* garis aksen tipis */}
                <div className="mt-12 h-[2px] w-24 rounded-full bg-[#0457ff]/70" />
            </div>
        </section>
    );
}
