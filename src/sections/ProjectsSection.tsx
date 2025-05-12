
import { useState } from "react";
import { Code, X, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionContainer from "@/components/SectionContainer";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";

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
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const projects: Project[] = [
    {
      title: "URL Redirection Service",
      description: "A modern, secure URL shortening service using AWS serverless architecture.",
      tags: ["AWS", "React", "TypeScript", "Serverless"],
      image: "/images/projects/url-redirection.jpg",
      detailedDescription: "This modern URL shortener provides instant URL shortening with unique identifiers and secure redirection powered by AWS Lambda, DynamoDB, and API Gateway.",
      technologies: ["React", "TypeScript", "AWS Lambda", "DynamoDB", "API Gateway"],
      links: {
        github: "https://github.com/SANDEEPxKOMMINENI/url-redirection-using-aws-lambda-dynamodb-and-apigateway",
      }
    },
    {
      title: "San Vortex AI",
      description: "A modern ChatGPT clone with multi-model support and advanced features.",
      tags: ["AI", "React", "TypeScript", "Supabase"],
      image: "/images/projects/san-vortex-ai.jpg",
      detailedDescription: "A feature-rich ChatGPT clone supporting multiple AI models via OpenRouter, user authentication, chat organization, and responsive design with theme customization.",
      technologies: ["React", "TypeScript", "Supabase", "AI Integration", "OpenRouter"],
      links: {
        github: "https://github.com/SANDEEPxKOMMINENI/San_Vortex_Ai",
      }
    },
    {
      title: "IIT-Guwahati AIML Challenge",
      description: "Email time-slot optimization using neural networks and focal loss.",
      tags: ["Machine Learning", "Neural Networks", "Data Analysis"],
      image: "/placeholder.svg",
      detailedDescription: "A machine learning project that predicts optimal email sending times across 28 possible slots to maximize open rates, utilizing neural networks with focal loss to handle class imbalance.",
      technologies: ["Python", "Machine Learning", "Neural Networks", "Data Analysis"],
      links: {
        github: "https://github.com/SANDEEPxKOMMINENI/IIT-Guwahati-AIML-Second-Round",
      }
    },
    {
      title: "AI-LinguaSync",
      description: "AI-powered real-time translation platform with speaker recognition.",
      tags: ["AI", "Translation", "Speech Processing"],
      image: "/placeholder.svg",
      detailedDescription: "A powerful translation platform offering real-time voice translation across multiple languages, high-quality text-to-speech output, and speaker recognition capabilities.",
      technologies: ["AI", "Natural Language Processing", "Speech Recognition", "Real-time Processing"],
      links: {
        github: "https://github.com/SANDEEPxKOMMINENI/AI-LinguaSync",
      }
    },
    {
      title: "LinkedIn Auto-Applier",
      description: "Automated job application tool for LinkedIn positions.",
      tags: ["Automation", "Web Scraping", "Productivity"],
      image: "/placeholder.svg",
      technologies: ["Python", "Selenium", "Automation"],
      links: {
        github: "https://github.com/SANDEEPxKOMMINENI/LinkedIn-Applier",
      }
    },
    {
      title: "Doc-Conv",
      description: "Document conversion utility for transforming between various formats.",
      tags: ["Utility", "Document Processing"],
      image: "/placeholder.svg",
      technologies: ["Python", "Document Processing"],
      links: {
        github: "https://github.com/SANDEEPxKOMMINENI/Doc-Conv",
      }
    },
    {
      title: "MoveLogic Form",
      description: "Dynamic form system for logistics and moving services.",
      tags: ["Forms", "UI/UX", "Web App"],
      image: "/placeholder.svg",
      technologies: ["React", "Form Management"],
      links: {
        github: "https://github.com/SANDEEPxKOMMINENI/movelogic-form",
      }
    },
    {
      title: "AskDocs AI",
      description: "AI-powered document question answering system.",
      tags: ["AI", "NLP", "Document Processing"],
      image: "/placeholder.svg",
      technologies: ["Python", "NLP", "AI Models"],
      links: {
        github: "https://github.com/SANDEEPxKOMMINENI/askdocs-ai",
      }
    },
    {
      title: "Anime Rador",
      description: "Intelligent anime recommendation engine with personalized discovery.",
      tags: ["AI", "Recommender System", "Web App"],
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "Machine Learning", "API Integration"],
      links: {
        github: "https://github.com/SANDEEPxKOMMINENI/AnimeRador",
      }
    },
    {
      title: "Amazon ML Challenge 2024",
      description: "Entity value extraction model achieving 90% accuracy using ML/NLP.",
      tags: ["Machine Learning", "NLP", "Data Analysis"],
      image: "/placeholder.svg",
      technologies: ["Python", "Machine Learning", "NLP", "Data Analysis"],
      links: {
        github: "https://github.com/SANDEEPxKOMMINENI/amazon_ml_2024-challenge",
      }
    },
    {
      title: "Sustainable Living Education",
      description: "A platform promoting eco-friendly living through education & community features.",
      tags: ["Web App", "Education", "Sustainability"],
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MySQL", "Express"],
      links: {
        github: "https://github.com/SANDEEPxKOMMINENI/Sustainable-Living-Education",
      }
    }
  ];

  // Calculate total pages
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  
  // Get current projects
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <SectionContainer id="projects">
      <div className="flex items-center space-x-2 mb-6">
        <Code size={22} className="text-primary" />
        <h2 className="section-title">Featured Projects</h2>
      </div>
      
      <p className="text-muted-foreground mb-10 max-w-3xl">
        Showcasing <span className="font-bold text-primary">20+</span> projects leveraging various technologies including AI, machine learning, 
        cloud architecture, and web development. Below are highlights from my portfolio.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProjects.map((project, index) => (
          <div 
            key={index}
            className="glass-card overflow-hidden group transition-all hover:shadow-lg flex flex-col"
          >
            <div className="h-48 bg-muted overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-secondary/50 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4 mt-auto">
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

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination className="mt-10">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
            
            {[...Array(totalPages)].map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink 
                  isActive={currentPage === i + 1}
                  onClick={() => paginate(i + 1)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            
            <PaginationItem>
              <PaginationNext 
                onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}

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
