
import { Award } from "lucide-react";
import SectionContainer from "@/components/SectionContainer";

interface Certification {
  title: string;
  organization: string;
  date: string;
  description: string;
  image: string;
}

const CertificationsSection = () => {
  const certifications: Certification[] = [
    {
      title: "AWS Certified Machine Learning – Specialty",
      organization: "Amazon Web Services",
      date: "2025",
      description: "Advanced certification validating expertise in designing, implementing, and maintaining machine learning solutions.",
      image: "/placeholder.svg"
    },
    {
      title: "Oracle Cloud AI Foundations Associate",
      organization: "Oracle",
      date: "2024",
      description: "Comprehensive certification covering Oracle AI Cloud services and implementation practices.",
      image: "/placeholder.svg"
    },
    {
      title: "Salesforce AI Associate",
      organization: "Salesforce",
      date: "2024",
      description: "Certification for AI implementation and best practices within Salesforce ecosystem.",
      image: "/placeholder.svg"
    },
    {
      title: "Automation Anywhere Certification",
      organization: "Automation Anywhere",
      date: "2023",
      description: "Professional certification in automation and RPA with AI integration capabilities.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <SectionContainer id="certifications">
      <div className="flex items-center space-x-2 mb-10">
        <Award size={22} className="text-primary" />
        <h2 className="section-title">Certifications</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((cert, index) => (
          <div 
            key={index}
            className="glass-card overflow-hidden group transition-all hover:shadow-lg hover:border-primary/30"
          >
            <div className="h-40 bg-muted overflow-hidden">
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">{cert.title}</h3>
                <span className="text-xs text-primary font-medium">{cert.date}</span>
              </div>
              <p className="text-sm font-medium mb-1">{cert.organization}</p>
              <p className="text-xs text-muted-foreground">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default CertificationsSection;
