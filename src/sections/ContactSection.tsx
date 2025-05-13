import { useState } from "react";
import { MapPin, Mail, Phone, ExternalLink, Send, Github, Linkedin, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from '@/lib/emailjs';
import SectionContainer from "@/components/SectionContainer";

// EmailJS configuration
const EMAILJS_SERVICE_ID = "default_service"; // Replace with your actual service ID
const EMAILJS_TEMPLATE_ID = "template_contact"; // Replace with your actual template ID
const EMAILJS_USER_ID = "YOUR_ACTUAL_USER_ID"; // Replace with your actual user ID

const ContactSection = () => {
  const { toast } = useToast();
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

  const validateForm = () => {
    // Email regex validation pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.name.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your name",
        variant: "destructive",
      });
      return false;
    }
    
    if (!formData.email.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return false;
    }
    
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return false;
    }
    
    if (!formData.message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your message",
        variant: "destructive",
      });
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }
    
    setFormState({ isSubmitting: true, isSubmitted: false, error: null });
    
    try {
      // The EmailJS template should be configured to send to all three email addresses
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email_1: "sandeep.kommineni@yahoo.com",
        to_email_2: "kvkkbabu@gmail.com",
        to_email_3: "2200031970cser@gmail.com",
      };
      
      const result = await sendEmail(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );
      
      if (!result.success) {
        throw new Error("Failed to send message");
      }
      
      console.log("Message sent successfully!");
      
      // Show success toast notification
      toast({
        title: "Message Sent!",
        description: "Your message has been delivered successfully.",
      });
      
      setFormState({
        isSubmitting: false,
        isSubmitted: true,
        error: null,
      });
      
      // Reset form after submission
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success state after a delay
      setTimeout(() => {
        setFormState((prev) => ({ ...prev, isSubmitted: false }));
      }, 5000);
      
    } catch (error) {
      console.error("Error sending message:", error);
      
      setFormState({
        isSubmitting: false,
        isSubmitted: false,
        error: "Failed to send message. Please try again later.",
      });
      
      // Show error toast notification
      toast({
        title: "Message Failed",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    }
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
        
        <div className="glass-card p-6 shadow-md rounded-lg">
          <h3 className="text-xl font-bold mb-6">Send a Message</h3>
          
          {formState.isSubmitted ? (
            <div className="p-4 bg-primary/10 text-primary rounded-md flex items-center">
              <Send size={18} className="mr-2" />
              <span>Thank you! Your message has been sent.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Name <span className="text-primary">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full focus:ring-2 focus:ring-primary/30"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-primary">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  className="w-full focus:ring-2 focus:ring-primary/30"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">
                  Message <span className="text-primary">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full resize-y focus:ring-2 focus:ring-primary/30"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={formState.isSubmitting}
              >
                {formState.isSubmitting ? (
                  <>
                    <span className="inline-block animate-spin mr-2">
                      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-1" /> Send Message
                  </>
                )}
              </Button>
              
              {formState.error && (
                <p className="text-destructive text-sm mt-2">{formState.error}</p>
              )}
            </form>
          )}
          
          <div className="mt-4 text-xs text-muted-foreground">
            <p>* Required fields</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
