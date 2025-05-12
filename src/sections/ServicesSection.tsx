
import { Sparkles, Bot, Cloud, Database } from "lucide-react";
import SectionContainer from "@/components/SectionContainer";

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description }) => {
  return (
    <div className="glass-card p-6 transition-all hover:shadow-lg hover:border-primary/30">
      <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const services: ServiceProps[] = [
    {
      icon: <Sparkles size={24} className="text-primary" />,
      title: "Full-Stack AI Solutions",
      description: "End-to-end AI solutions from data processing and model development to frontend integration and deployment."
    },
    {
      icon: <Bot size={24} className="text-primary" />,
      title: "Custom LLM Chatbots",
      description: "Specialized conversational AI systems with domain-specific knowledge fine-tuning and seamless integration."
    },
    {
      icon: <Cloud size={24} className="text-primary" />,
      title: "Scalable Cloud Deployments",
      description: "Robust AI deployments optimized for performance, cost and scalability across major cloud platforms."
    },
    {
      icon: <Database size={24} className="text-primary" />,
      title: "Data Science & ML Pipelines",
      description: "Automated data processing, feature engineering, and model training pipelines for production environments."
    }
  ];

  return (
    <SectionContainer id="services">
      <div className="flex items-center space-x-2 mb-10">
        <Sparkles size={22} className="text-primary" />
        <h2 className="section-title">Services</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default ServicesSection;
