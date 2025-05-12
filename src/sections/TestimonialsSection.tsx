
import { Quote } from "lucide-react";
import SectionContainer from "@/components/SectionContainer";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  image?: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Sandeep demonstrates exceptional problem-solving abilities and a deep understanding of AI/ML concepts.",
      name: "Dr. Rajesh Kumar",
      title: "Professor, AI/ML Dept., KL University"
    },
    {
      quote: "His dedication to learning and ability to apply theoretical concepts to real-world problems is remarkable.",
      name: "Dr. Sarah Chen",
      title: "Research Mentor, Machine Learning Lab"
    }
  ];

  return (
    <SectionContainer id="testimonials" className="bg-muted/30">
      <div className="flex items-center space-x-2 mb-10">
        <Quote size={22} className="text-primary" />
        <h2 className="section-title">Testimonials</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="glass-card p-6 relative">
            <div className="absolute top-4 right-4 text-primary/20">
              <Quote size={40} />
            </div>
            <div className="relative z-10">
              <p className="text-lg italic mb-6">{testimonial.quote}</p>
              
              <div className="flex items-center">
                {testimonial.image ? (
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary font-medium">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default TestimonialsSection;
