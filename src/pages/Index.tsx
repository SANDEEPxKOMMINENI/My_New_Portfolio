
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import SkillsSection from "@/sections/SkillsSection";
import ServicesSection from "@/sections/ServicesSection";
import ExperienceSection from "@/sections/ExperienceSection";
import ProjectsSection from "@/sections/ProjectsSection";
import CertificationsSection from "@/sections/CertificationsSection";
import ResumeSection from "@/sections/ResumeSection";
import ContactSection from "@/sections/ContactSection";
import EducationSection from "@/sections/EducationSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import HobbiesSection from "@/sections/HobbiesSection";

// Update the title of the page
document.title = "Sandeep Kommineni | AI Engineer";

const Index = () => {
  // Scroll to section if hash is present in URL
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ServicesSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <HobbiesSection />
        <TestimonialsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
