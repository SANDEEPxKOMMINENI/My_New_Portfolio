import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import SkillsSection from "@/sections/SkillsSection";
import ExperienceSection from "@/sections/ExperienceSection";
import ProjectsSection from "@/sections/ProjectsSection";
import CertificationsSection from "@/sections/CertificationsSection";
import EducationSection from "@/sections/EducationSection";
import ResumeSection from "@/sections/ResumeSection";
import ContactSection from "@/sections/ContactSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import HobbiesSection from "@/sections/HobbiesSection";
import ServicesSection from "@/sections/ServicesSection";

const Index = () => {
  // Update the title of the page - moved inside component
  useEffect(() => {
    document.title = "Sandeep Kommineni | AI Engineer";
  }, []);
  
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
        <SkillsSection />
        <ServicesSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <EducationSection />
        <ResumeSection />
        <ContactSection />
        <TestimonialsSection />
        <HobbiesSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
