import HomeSection from "./_sections/home";
import ServicesSection from "./_sections/services";
import ProjectsSection from "./_sections/projects";
import CompanySection from "./_sections/company";
import ContactSection from "./_sections/contact";
import Footer from "./_sections/footer";

export default function Page() {
    return (
        <>
            <HomeSection id="home" />
            <ServicesSection id="services" />
            <ProjectsSection id="projects" />
            <CompanySection id="company" />
            <ContactSection id="contact" />
            
        </>
    );
}
