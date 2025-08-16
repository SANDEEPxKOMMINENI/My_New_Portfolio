
import { MessageSquare } from "lucide-react";
import SectionContainer from "@/components/SectionContainer";
import ContactInfo from "@/components/ContactInfo";

const ContactSection = () => {
  return (
    <SectionContainer id="contact" className="bg-muted/30">
      <div className="flex items-center justify-center space-x-2 mb-16">
        <MessageSquare size={28} className="text-primary" />
        <h2 className="section-title text-center">Contact Me</h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <ContactInfo />
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
