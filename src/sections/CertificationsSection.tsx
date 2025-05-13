
import { Award, ExternalLink } from "lucide-react";
import SectionContainer from "@/components/SectionContainer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

interface Certification {
  title: string;
  organization: string;
  date: string;
  validPeriod?: string;
  credentialId?: string;
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
      credentialId: "24c2f8352aea450692202d01411d46ea",
      verifyLink: "https://aws.amazon.com/verification",
      image: "/lovable-uploads/288f2ce3-6894-4e78-bf78-098d7b9ca7bd.png"
    },
    {
      title: "Oracle Certified AI Foundations Associate",
      organization: "Oracle",
      date: "Feb 2025",
      credentialId: "317851681OCI24AICFA",
      verifyLink: "#",
      image: "/lovable-uploads/d52c9d41-1640-46d8-8246-a0f58bfb6589.png"
    },
    {
      title: "Salesforce Certified AI Associate",
      organization: "Salesforce",
      date: "Oct 2024",
      credentialId: "CS2478",
      verifyLink: "#",
      image: "/lovable-uploads/9e317631-ba9f-4b87-b75d-0a7032aa7406.png"
    },
    {
      title: "Automation Anywhere Essentials",
      organization: "Automation Anywhere",
      date: "April 2025",
      credentialId: "AAESSE2024A360-138733939",
      verifyLink: "#",
      image: "/lovable-uploads/e1f4b6be-5e25-45cc-9feb-e24f6c12a05c.png"
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
            <div className="relative">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="h-60 bg-muted overflow-hidden cursor-pointer">
                    <AspectRatio ratio={16/10} className="bg-muted">
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                    </AspectRatio>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 p-0 border-none">
                  <AspectRatio ratio={4/3}>
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-full object-contain"
                    />
                  </AspectRatio>
                </HoverCardContent>
              </HoverCard>
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
                {cert.credentialId && (
                  <span className="text-muted-foreground">Credential ID: {cert.credentialId}</span>
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
