export default function ServicesSection() {
    const services = [
        { title: "Brand Identity", desc: "Logo, guideline, brand system" },
        { title: "UI/UX Design", desc: "Web/app interface & prototyping" },
        { title: "Illustration", desc: "Editorial, mascot, assets" },
        { title: "Social Media Design", desc: "Campaign & content kit" },
    ];
    return (
        <section id="services" className="border-t">
            <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
                <div className="mb-10 flex items-center justify-between">
                    <h2 className="text-2xl font-semibold md:text-3xl">Our Services</h2>
                    <div className="h-[2px] w-16 rounded-full bg-[#0457ff]" />
                </div>
            </div>
        </section>
    );
}
