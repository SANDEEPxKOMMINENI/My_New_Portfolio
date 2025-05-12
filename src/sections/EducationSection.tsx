
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import SectionContainer from "@/components/SectionContainer";

interface Education {
  institution: string;
  degree: string;
  field: string;
  location: string;
  period: string;
  achievements: string[];
}

const EducationSection = () => {
  const educations: Education[] = [
    {
      institution: "K L University",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science and Engineering (Artificial Intelligence & Machine Learning)",
      location: "Vaddeswaram, Andhra Pradesh, India",
      period: "2022 - 2026",
      achievements: [
        "Pursuing an in-depth curriculum focused on AI, machine learning, and software development",
        "Engaged in hands-on projects and research to develop innovative solutions in the field of AI"
      ]
    },
    {
      institution: "Sri Chaitanya Junior College",
      degree: "Intermediate Education (Class 11 & 12)",
      field: "MPC (Mathematics, Physics, Chemistry)",
      location: "Lakshmipuram, 2nd Line, Guntur, Andhra Pradesh, India",
      period: "2021 - 2022",
      achievements: [
        "Achieved a strong foundation in core science subjects"
      ]
    },
    {
      institution: "Bhashyam High School",
      degree: "Secondary Education (Class 10)",
      field: "",
      location: "Lakshmipuram, 4th Line, Guntur, Andhra Pradesh, India",
      period: "2020",
      achievements: [
        "Secured a perfect 10 CGPA in Class 10 examinations"
      ]
    }
  ];

  return (
    <SectionContainer id="education">
      <div className="flex items-center space-x-2 mb-10">
        <GraduationCap size={22} className="text-primary" />
        <h2 className="section-title">Education</h2>
      </div>

      <div className="relative pl-0 md:pl-4">
        {educations.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="glass-card p-6">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold mb-2">{edu.institution}</h3>
                  <p className="text-lg font-medium">{edu.degree}</p>
                  {edu.field && <p className="text-muted-foreground mb-2">{edu.field}</p>}
                </div>
                <div className="md:text-right">
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {edu.period}
                  </span>
                </div>
              </div>
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <MapPin size={16} className="mr-1" />
                <span>{edu.location}</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                {edu.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default EducationSection;
