
import { Award, ExternalLink } from "lucide-react";
import SectionContainer from "@/components/SectionContainer";

interface Certification {
  title: string;
  organization: string;
  date: string;
  validPeriod?: string;
  verifyLink?: string;
  image: string;
}

const CertificationsSection = () => {
  const certifications: Certification[] = [
    {
      title: "AWS Cloud Practitioner",
      organization: "Amazon Web Services",
      date: "May 2024",
      validPeriod: "Valid: May 2024 – May 2027",
      verifyLink: "#",
      image: "/placeholder.svg"
    },
    {
      title: "Salesforce Certified AI Associate",
      organization: "Salesforce",
      date: "May 2024",
      verifyLink: "#",
      image: "/placeholder.svg"
    }
  ];

  return (
    <SectionContainer id="certifications">
      <div className="flex items-center space-x-2 mb-10">
        <Award size={22} className="text-primary" />
        <h2 className="section-title">Certifications & Achievements</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <div className="mb-2">
                <h3 className="text-lg font-semibold">{cert.title}</h3>
                <p className="text-sm font-medium">{cert.organization}</p>
              </div>
              <div className="flex flex-col text-sm space-y-1">
                <span className="text-primary font-medium">{cert.date}</span>
                {cert.validPeriod && (
                  <span className="text-muted-foreground">{cert.validPeriod}</span>
                )}
              </div>
              
              {cert.verifyLink && (
                <div className="mt-3">
                  <a 
                    href={cert.verifyLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary hover:underline"
                  >
                    <ExternalLink size={14} className="mr-1" />
                    Verify Certificate
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default CertificationsSection;
