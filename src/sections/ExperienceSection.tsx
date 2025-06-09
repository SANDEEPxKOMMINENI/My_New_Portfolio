
import { Briefcase, Brain, Cloud, Building } from "lucide-react";
import SectionContainer from "@/components/SectionContainer";

interface ExperienceItem {
  icon: React.ReactNode;
  role: string;
  company: string;
  period: string;
  description: string;
}

const ExperienceSection = () => {  const experiences: ExperienceItem[] = [
    {
      icon: <Brain size={18} className="text-primary" />,
      role: "AI/ML Engineer",
      company: "Dyotta AI Agents Company, Bengaluru, Karnataka, India",
      period: "June 2025–Present",
      description: "Built AI-integrated SaaS platforms using Python, LangChain, MongoDB for intelligent workflows. Developed LLM pipelines with Transformers, Hugging Face for contextual automation. Engineered React.js, Node.js, REST APIs for real-time AI features in web applications."
    },
    {
      icon: <Brain size={18} className="text-primary" />,
      role: "Full-Stack AI Developer",
      company: "Isoft Technologies, Auckland, New Zealand",
      period: "March 2025–June 2025",
      description: "Built AI-driven applications leveraging LLMs, Generative AI, and NLP techniques for advanced automation. Optimized model inference pipelines, reducing latency by 15% to enhance performance. Developed end-to-end solutions integrating AI-powered automation to improve workflow efficiency."
    },    {
      icon: <Building size={18} className="text-primary" />,
      role: "Academic Internship (Virtual) - AI & ML",
      company: "EduSkills Foundation® (backed by Google for Developers)",
      period: "Jan 2025 - Mar 2025",
      description: "Successfully completed a 10-week AI-ML Virtual Internship program backed by Google for Developers and EduSkills. Worked on real-world machine learning use cases, including model development, evaluation, and deployment. Applied theoretical AI concepts in a practical setting to solve challenges and build scalable solutions."
    },    {
      icon: <Cloud size={18} className="text-primary" />,
      role: "Academic Internship (Virtual) - Cloud Computing",
      company: "All India Council for Technical Education (AICTE) (backed by AWS Academy)",
      period: "Jan 2024 - Mar 2024",
      description: "Completed a 10-week hands-on Cloud Virtual Internship supported by AWS Academy through EduSkills. Gained practical experience in cloud computing concepts, architecture, and deployment strategies. Developed and deployed cloud-native applications and services, enhancing expertise in AWS, Azure, Google Cloud, and Oracle services."
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
