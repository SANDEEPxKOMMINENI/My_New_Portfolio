
import { MapPin, Mail, Phone, ExternalLink, Github, Linkedin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
      <p className="text-muted-foreground mb-8">
        Feel free to reach out if you're looking for an AI developer, have a question, or just want to connect.
      </p>
      
      <div className="space-y-6">
        <div className="flex items-center">
          <MapPin size={20} className="text-primary mr-4" />
          <span>Guntur, Andhra Pradesh, India</span>
        </div>
        
        <div className="flex items-center">
          <Mail size={20} className="text-primary mr-4" />
          <a href="mailto:sandeep.kommineni@yahoo.com" className="hover:text-primary transition-colors">
            sandeep.kommineni@yahoo.com
          </a>
        </div>
        
        <div className="flex items-center">
          <Phone size={20} className="text-primary mr-4" />
          <span>+91-9573456001</span>
        </div>
          <div className="flex items-start">
          <ExternalLink size={20} className="text-primary mr-4 mt-1" />
          <div className="space-y-3">
            <a href="https://github.com/SANDEEPxKOMMINENI" target="_blank" rel="noreferrer" className="flex items-center hover:text-primary transition-colors gap-2">
              <Github size={18} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/sandeep-kommineni-334037259/" target="_blank" rel="noreferrer" className="flex items-center hover:text-primary transition-colors gap-2">
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
