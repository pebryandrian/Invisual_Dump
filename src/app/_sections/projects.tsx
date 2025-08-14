export default function ProjectsSection() {
    const list = Array.from({ length: 6 }).map((_, i) => ({
        title: `Project ${i + 1}`,
        tag: "Branding / UI",
    }));

    return (
        <section id="projects" className="border-t">
            <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
                <div className="mb-10 flex items-center justify-between">
                    <h2 className="text-2xl font-semibold md:text-3xl">Selected Projects</h2>
                </div>
            </div>
        </section>
    );
}
