
import { MapPin, Mail, Phone, Github, Linkedin, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactInfo = () => {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <div className="glass-card p-12 rounded-2xl shadow-2xl">
        <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          Get In Touch
        </h3>
        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          Feel free to reach out if you're looking for an <span className="text-primary font-semibold">AI developer</span>, have a question, or just want to connect.
        </p>
        
        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center p-6 bg-muted/20 rounded-xl hover:bg-muted/30 transition-colors">
            <MapPin size={32} className="text-primary mb-4" />
            <h4 className="font-semibold text-lg mb-2">Location</h4>
            <span className="text-muted-foreground text-center">Guntur, Andhra Pradesh, India</span>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-muted/20 rounded-xl hover:bg-muted/30 transition-colors">
            <Mail size={32} className="text-primary mb-4" />
            <h4 className="font-semibold text-lg mb-2">Email</h4>
            <a 
              href="mailto:sandeep.kommineni@yahoo.com" 
              className="text-muted-foreground hover:text-primary transition-colors text-center break-all"
            >
              sandeep.kommineni@yahoo.com
            </a>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-muted/20 rounded-xl hover:bg-muted/30 transition-colors">
            <Phone size={32} className="text-primary mb-4" />
            <h4 className="font-semibold text-lg mb-2">Phone</h4>
            <a 
              href="tel:+919573456001" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              +91-9573456001
            </a>
          </div>
        </div>

        {/* Social Links & Actions */}
        <div className="flex flex-col items-center space-y-8">
          <div className="flex flex-wrap justify-center gap-6">
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="h-14 px-8 text-lg font-semibold hover:scale-105 transition-transform"
            >
              <a 
                href="https://github.com/SANDEEPxKOMMINENI" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-3"
              >
                <Github size={24} />
                View GitHub
              </a>
            </Button>
            
            <Button 
              asChild 
              size="lg" 
              className="h-14 px-8 text-lg font-semibold hover:scale-105 transition-transform bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
            >
              <a 
                href="https://www.linkedin.com/in/sandeep-kommineni-334037259/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-3"
              >
                <Linkedin size={24} />
                Connect on LinkedIn
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="secondary" 
              size="lg" 
              className="h-12 px-6 hover:scale-105 transition-transform"
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </Button>
            
            <Button 
              asChild
              variant="ghost" 
              size="lg" 
              className="h-12 px-6 hover:scale-105 transition-transform"
            >
              <a href="#projects" className="flex items-center">
                <FileText size={20} className="mr-2" />
                View Portfolio
              </a>
            </Button>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="mt-12 p-6 bg-primary/5 rounded-xl border border-primary/20">
          <p className="text-muted-foreground text-lg leading-relaxed">
            <span className="text-primary font-semibold">AI/ML Engineer</span> with expertise in 
            <span className="font-semibold"> Python, LangChain, MongoDB, React.js, Node.js</span>. 
            Specialized in building AI-integrated SaaS platforms and LLM pipelines. 
            <span className="text-primary font-semibold"> Ready to collaborate</span> on your next AI project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
