import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { useScrollspy } from "@/lib/useScrollspy";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Home() {
  const activeSection = useScrollspy();

  // Set page title and description
  useEffect(() => {
    document.title = "Mohamed Nacer Er-ragragy | Full Stack Engineer";
  }, []);

  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900 dark:text-white">
      <Navbar activeSection={activeSection} />
      
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      
      <Footer />
      <BackToTop />
      <ThemeSwitcher />
    </div>
  );
}
