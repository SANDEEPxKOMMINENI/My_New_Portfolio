
import { useState } from "react";
import { MapPin, Mail, Phone, ExternalLink, Send, Github, Linkedin, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionContainer from "@/components/SectionContainer";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null as string | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ isSubmitting: true, isSubmitted: false, error: null });
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setFormState({
        isSubmitting: false,
        isSubmitted: true,
        error: null,
      });
      
      // Reset form after submission
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after a delay
      setTimeout(() => {
        setFormState((prev) => ({ ...prev, isSubmitted: false }));
      }, 5000);
    }, 1500);
  };

  return (
    <SectionContainer id="contact" className="bg-muted/30">
      <div className="flex items-center space-x-2 mb-10">
        <MessageSquare size={22} className="text-primary" />
        <h2 className="section-title">Contact Me</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
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
                <a href="#" target="_blank" rel="noreferrer" className="flex items-center hover:text-primary transition-colors gap-2">
                  <Github size={18} />
                  GitHub
                </a>
                <a href="#" target="_blank" rel="noreferrer" className="flex items-center hover:text-primary transition-colors gap-2">
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="glass-card p-6">
          <h3 className="text-xl font-bold mb-6">Send a Message</h3>
          
          {formState.isSubmitted ? (
            <div className="p-4 bg-primary/10 text-primary rounded-md flex items-center">
              <Send size={18} className="mr-2" />
              <span>Thank you! Your message has been sent.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={formState.isSubmitting}
              >
                {formState.isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              
              {formState.error && (
                <p className="text-destructive text-sm mt-2">{formState.error}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
