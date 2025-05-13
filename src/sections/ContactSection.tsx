
import { MessageSquare } from "lucide-react";
import SectionContainer from "@/components/SectionContainer";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

const ContactSection = () => {
  return (
    <SectionContainer id="contact" className="bg-muted/30">
      <div className="flex items-center space-x-2 mb-10">
        <MessageSquare size={22} className="text-primary" />
        <h2 className="section-title">Contact Me</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <ContactInfo />
        <ContactForm />
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
