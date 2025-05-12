
import { useState } from "react";
import { Code, X, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionContainer from "@/components/SectionContainer";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  detailedDescription?: string;
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
      title: "Sustainable Living Education Platform",
      description: "A platform promoting eco-friendly living through education & community features.",
      tags: ["Web App", "Education", "Sustainability"],
      image: "/placeholder.svg",
      technologies: ["MySQL", "React", "Node.js", "Express"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Anime Rador",
      description: "Intelligent anime recommendation engine with personalized discovery.",
      tags: ["AI", "Recommender System", "Web App"],
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "Machine Learning", "API Integration"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Amazon ML Challenge 2024",
      description: "Built a model with 90% accuracy in entity value extraction using ML/NLP.",
      tags: ["Machine Learning", "NLP", "Data Analysis"],
      image: "/placeholder.svg",
      technologies: ["Python", "Machine Learning", "NLP", "Data Analysis"],
      links: {
        github: "#"
      }
    }
  ];

  return (
    <SectionContainer id="projects">
      <div className="flex items-center space-x-2 mb-10">
        <Code size={22} className="text-primary" />
        <h2 className="section-title">Featured Projects</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="glass-card overflow-hidden group transition-all hover:shadow-lg"
          >
            <div className="h-48 bg-muted overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.links.github && (
                  <Button variant="outline" size="sm" asChild className="gap-1">
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      GitHub
                    </a>
                  </Button>
                )}
                {project.links.demo && (
                  <Button size="sm" asChild className="gap-1">
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-secondary/50 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <Button 
                variant="secondary" 
                size="sm" 
                className="w-full mt-2"
                onClick={() => setSelectedProject(project)}
              >
                View Details
              </Button>
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
                <p>{selectedProject.detailedDescription || selectedProject.description}</p>
                
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
