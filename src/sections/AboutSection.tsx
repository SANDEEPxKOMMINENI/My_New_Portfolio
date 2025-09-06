
import { Code, User } from "lucide-react";
import SectionContainer from "@/components/SectionContainer";

const AboutSection = () => {
  return (
    <SectionContainer id="about">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="w-full md:w-1/3">
          <div className="relative mx-auto w-48 h-48 rounded-full overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/sandeep_new_professional.jpg" 
              alt="Sandeep Kommineni - AI Engineer" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        
        <div className="w-full md:w-2/3">
          <div className="flex items-center space-x-2 mb-6">
            <User size={22} className="text-primary" />
            <h2 className="section-title">About Me</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-muted-foreground">
              I'm an AI Engineer based in Guntur, India, passionate about building production-ready AI systems that drive business value. With a strong foundation in both ML fundamentals and software engineering best practices, I bridge the gap between research and real-world applications.
            </p>
            
            <p className="text-muted-foreground">
              My focus is on developing scalable AI solutions, fine-tuning large language models, and creating intuitive interfaces for complex AI systems. I'm particularly interested in multimodal AI and how it can enhance human-computer interaction.
            </p>
            
            <blockquote className="border-l-4 border-primary pl-4 italic my-6">
              <p className="text-foreground">
                "I don't just build AI models, I build AI-powered products."
              </p>
            </blockquote>
            
            <div className="glass-card p-6 mt-6">
              <div className="flex items-center mb-3">
                <Code size={18} className="text-primary mr-2" />
                <h3 className="text-lg font-medium">Technical Philosophy</h3>
              </div>
              
              <p>
                I believe in creating AI systems that are not only technically sound but also ethically responsible and user-centered. My approach combines rigorous methodology with pragmatic engineering—ensuring solutions that are both cutting-edge and production-ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
