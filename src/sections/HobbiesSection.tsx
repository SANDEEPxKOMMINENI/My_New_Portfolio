
import { Heart, Code, Github, Chess, Languages } from "lucide-react";
import SectionContainer from "@/components/SectionContainer";

interface Hobby {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const HobbiesSection = () => {
  const hobbies: Hobby[] = [
    {
      icon: <Code size={24} className="text-primary" />,
      title: "Competitive Programming",
      description: "Algorithms & problem-solving"
    },
    {
      icon: <Github size={24} className="text-primary" />,
      title: "Open Source",
      description: "Contributions to OSS"
    },
    {
      icon: <Chess size={24} className="text-primary" />,
      title: "Chess",
      description: "Strategic thinking"
    },
    {
      icon: <Languages size={24} className="text-primary" />,
      title: "Language Learning",
      description: "Intermediate in Japanese"
    }
  ];

  return (
    <SectionContainer id="hobbies">
      <div className="flex items-center space-x-2 mb-10">
        <Heart size={22} className="text-primary" />
        <h2 className="section-title">Hobbies & Interests</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {hobbies.map((hobby, index) => (
          <div 
            key={index}
            className="glass-card p-6 text-center transition-all hover:shadow-lg hover:border-primary/30"
          >
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              {hobby.icon}
            </div>
            <h3 className="text-lg font-semibold mb-1">{hobby.title}</h3>
            <p className="text-sm text-muted-foreground">{hobby.description}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default HobbiesSection;
