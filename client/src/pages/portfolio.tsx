import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import EducationSection from "@/components/education-section";
import ResumeSection from "@/components/resume-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Portfolio() {
  return (
    <div className="bg-slate-900 text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
