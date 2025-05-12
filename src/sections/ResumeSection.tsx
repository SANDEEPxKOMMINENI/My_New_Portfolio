
import { FileDown, File } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionContainer from "@/components/SectionContainer";

const ResumeSection = () => {
  return (
    <SectionContainer id="resume">
      <div className="flex items-center space-x-2 mb-10">
        <File size={22} className="text-primary" />
        <h2 className="section-title">Resume</h2>
      </div>
      
      <div className="glass-card p-8 text-center max-w-xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">Download My Resume</h3>
        <p className="text-muted-foreground mb-6">
          Get a comprehensive overview of my skills, experience, and educational background.
        </p>
        
        <Button size="lg" className="mt-4" asChild>
          <a href="#" download>
            <FileDown size={18} className="mr-2" />
            Download PDF
          </a>
        </Button>
        
        <div className="mt-10 text-left">
          <h4 className="text-lg font-semibold mb-4">Resume Highlights</h4>
          
          <div className="space-y-4">
            <div className="glass-card p-4">
              <span className="text-sm font-medium text-primary">Education</span>
              <p className="font-medium">B.Tech in Computer Science & Engineering</p>
              <p className="text-sm text-muted-foreground">Specialization in Artificial Intelligence and Machine Learning</p>
            </div>
            
            <div className="glass-card p-4">
              <span className="text-sm font-medium text-primary">Core Skills</span>
              <p className="font-medium">AI Development, Full-Stack Engineering, Cloud Architecture</p>
              <p className="text-sm text-muted-foreground">Expert in Python, PyTorch, TensorFlow, and modern web technologies</p>
            </div>
            
            <div className="glass-card p-4">
              <span className="text-sm font-medium text-primary">Languages</span>
              <p className="font-medium">English (Professional), Hindi (Native), Telugu (Native)</p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ResumeSection;
