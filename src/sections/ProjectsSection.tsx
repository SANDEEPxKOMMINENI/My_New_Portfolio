
import { useState } from "react";
import { Code, X, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionContainer from "@/components/SectionContainer";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  detailedDescription: string;
  technologies: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "AnimeRadar",
      description: "AI-based anime recommender system using NLP and image recognition",
      tags: ["NLP", "Computer Vision", "Recommender System"],
      image: "/placeholder.svg",
      detailedDescription: "AnimeRadar is a sophisticated recommendation engine that combines natural language processing and computer vision to analyze anime content and provide personalized recommendations. The system processes both visual elements and text descriptions to understand themes, styles, and narrative patterns.",
      technologies: ["PyTorch", "TensorFlow", "FastAPI", "React", "AWS"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "SanVortex AI Chat",
      description: "Custom LLM-based chatbot with domain-specific fine-tuning",
      tags: ["LLM", "Fine-tuning", "Conversational AI"],
      image: "/placeholder.svg",
      detailedDescription: "SanVortex AI Chat is an advanced conversational agent built on top of large language models with custom fine-tuning for specific domains. The system features context-aware responses, memory of conversation history, and integration capabilities with external knowledge bases.",
      technologies: ["Hugging Face", "PyTorch", "Next.js", "Docker", "Redis"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "AI-LinguaSync",
      description: "Real-time multilingual translator using Whisper and SpeechT5",
      tags: ["Speech Recognition", "Translation", "Real-time"],
      image: "/placeholder.svg",
      detailedDescription: "AI-LinguaSync is a real-time speech translation system that can translate between multiple languages on-the-fly. Built with OpenAI's Whisper for speech recognition and fine-tuned SpeechT5 models for high-quality translation and voice synthesis, it maintains speaker characteristics across languages.",
      technologies: ["Whisper", "SpeechT5", "WebRTC", "TensorFlow", "Firebase"],
      links: {
        demo: "#",
        github: "#"
      }
    }
  ];

  return (
    <SectionContainer id="projects">
      <div className="flex items-center space-x-2 mb-10">
        <Code size={22} className="text-primary" />
        <h2 className="section-title">Projects</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="glass-card overflow-hidden group cursor-pointer transition-all hover:shadow-lg"
            onClick={() => setSelectedProject(project)}
          >
            <div className="h-48 bg-muted overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-secondary/50 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background border border-border max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-lg animate-fade-in">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-1 rounded-full hover:bg-muted"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="mb-6 h-64 bg-muted rounded-lg overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              <div className="space-y-4">
                <p>{selectedProject.detailedDescription}</p>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} className="skill-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  {selectedProject.links.demo && (
                    <Button asChild>
                      <a href={selectedProject.links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={18} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  
                  {selectedProject.links.github && (
                    <Button variant="outline" asChild>
                      <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer">
                        <Github size={18} className="mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </SectionContainer>
  );
};

export default ProjectsSection;
