import HomeSection from "./_sections/home";
import ServicesSection from "./_sections/services";
import ProjectsSection from "./_sections/projects";
import CompanySection from "./_sections/company";
import Footer from "./_sections/footer";

export default function Page() {
  return (
    <div className="flex flex-col gap-16 lg:gap-32">
      <HomeSection />
      <ServicesSection />
      <ProjectsSection />
      <CompanySection />
    </div>
  );
}
