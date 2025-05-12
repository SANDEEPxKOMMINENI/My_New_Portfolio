
import { Briefcase, Brain, Cloud, Building } from "lucide-react";
import SectionContainer from "@/components/SectionContainer";

interface ExperienceItem {
  icon: React.ReactNode;
  role: string;
  company: string;
  period: string;
  description: string;
}

const ExperienceSection = () => {
  const experiences: ExperienceItem[] = [
    {
      icon: <Brain size={18} className="text-primary" />,
      role: "Full-Stack AI Developer Intern",
      company: "Isoft Technologies",
      period: "2025–Present",
      description: "Building end-to-end AI solutions integrating large language models with web applications. Developed an intelligent document processing system that extracts key information from unstructured text."
    },
    {
      icon: <Building size={18} className="text-primary" />,
      role: "AI-ML Intern",
      company: "Google for Developers",
      period: "2025",
      description: "Contributed to open-source AI projects and participated in model fine-tuning workshops. Implemented multimodal AI features for community tools and documentation systems."
    },
    {
      icon: <Cloud size={18} className="text-primary" />,
      role: "Cloud Engineer Intern",
      company: "AWS Academy",
      period: "2024",
      description: "Designed and deployed scalable cloud infrastructure for ML workloads. Created automated CI/CD pipelines for model training and deployment, reducing deployment time by 40%."
    }
  ];

  return (
    <SectionContainer id="experience" className="bg-muted/30">
      <div className="flex items-center space-x-2 mb-10">
        <Briefcase size={22} className="text-primary" />
        <h2 className="section-title">Experience</h2>
      </div>

      <div className="relative pl-0 md:pl-4">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="glass-card p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <div className="flex items-center mb-2 md:mb-0">
                  <span className="mr-2">{exp.icon}</span>
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                </div>
                <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {exp.period}
                </span>
              </div>
              <p className="text-lg font-medium mb-3">{exp.company}</p>
              <p className="text-muted-foreground">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default ExperienceSection;
