
import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from '@/lib/emailjs';

// EmailJS configuration
const EMAILJS_SERVICE_ID = "service_ezxa8w9";
const EMAILJS_TEMPLATE_ID = "template_contact";
const EMAILJS_PUBLIC_KEY = "aYlE2Ptd6BxBu1qDa";

const ContactForm = () => {
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
        EMAILJS_PUBLIC_KEY
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
  );
};

export default ContactForm;
