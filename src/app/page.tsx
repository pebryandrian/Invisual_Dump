import HomeSection from "./_sections/home";
import ServicesSection from "./_sections/services";
import ProjectsSection from "./_sections/projects";
import CompanySection from "./_sections/company";
import Footer from "./_sections/footer";

export default function Page() {
  return (
    <>
      <HomeSection />
      <ServicesSection />
      <ProjectsSection />
      <CompanySection />
      <Footer />
    </>
  );
}
