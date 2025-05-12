
import { ArrowDown, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypeWriter from "@/components/TypeWriter";

const HeroSection = () => {
  const specialties = [
    "LLMs",
    "Multimodal AI",
    "Production-Ready Systems",
    "Full-Stack AI Solutions",
    "Neural Networks"
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-16">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-hero-pattern opacity-25 dark:opacity-15 -z-10"></div>
      
      <div className="container px-4 sm:px-6 mx-auto">
        {/* Floating badge */}
        <div className="absolute top-32 right-4 sm:right-10 animate-float">
          <div className="bg-accent/20 text-accent-foreground font-medium py-1.5 px-4 rounded-full text-sm flex items-center shadow-md">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Open to AI Roles
          </div>
        </div>

        <div className="max-w-3xl">
          <div className="space-y-4 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
              <BrainCircuit size={16} />
              <span>AI Engineer</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-foreground">
              Crafting the Future <br />of <span className="text-primary">AI</span>.
            </h1>
            
            <h2 className="text-xl sm:text-2xl text-muted-foreground mt-4">
              AI Engineer | Full-Stack AI Developer | <br className="sm:hidden" />
              <span className="text-foreground font-medium">
                <TypeWriter texts={specialties} />
              </span> Enthusiast
            </h2>
            
            <p className="text-muted-foreground max-w-lg">
              Building intelligent systems that solve real-world problems with cutting-edge AI technology.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg">
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Hire Me</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="text-primary" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
