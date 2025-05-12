
import { Layers, Cpu, Database, TerminalSquare } from "lucide-react";
import SectionContainer from "@/components/SectionContainer";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "AI & Machine Learning",
      icon: <Cpu size={20} className="text-primary" />,
      skills: ["Python", "PyTorch", "TensorFlow", "Hugging Face", "Scikit-Learn", "LLMs", "Computer Vision", "NLP"]
    },
    {
      title: "Web & Cloud",
      icon: <Database size={20} className="text-primary" />,
      skills: ["Next.js", "FastAPI", "Supabase", "Firebase", "AWS", "Docker", "MLOps", "API Design"]
    },
    {
      title: "Tools & Practices",
      icon: <TerminalSquare size={20} className="text-primary" />,
      skills: ["Git", "GitHub", "VS Code", "Postman", "Linux", "CI/CD", "Testing", "Documentation"]
    }
  ];

  return (
    <SectionContainer id="skills" className="bg-muted/30">
      <div className="flex items-center space-x-2 mb-10">
        <Layers size={22} className="text-primary" />
        <h2 className="section-title">Skills</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="glass-card p-6 transition-transform duration-300 hover:translate-y-[-5px]"
          >
            <div className="flex items-center mb-4">
              {category.icon}
              <h3 className="text-xl font-semibold ml-2">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Skill bars */}
      <div className="mt-16 glass-card p-6">
        <h3 className="text-xl font-semibold mb-6">Proficiency</h3>
        
        <div className="space-y-6">
          {[
            { name: "Deep Learning & NLP", percentage: 90 },
            { name: "Full-Stack Development", percentage: 85 },
            { name: "Cloud Architecture", percentage: 80 },
            { name: "DevOps & MLOps", percentage: 75 }
          ].map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-sm font-medium">{skill.percentage}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default SkillsSection;
