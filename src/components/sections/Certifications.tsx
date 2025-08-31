import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, Building2, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Cybersecurity Fundamentals",
      issuer: "IBM",
      date: "2024",
      type: "certification",
      skills: ["Network Security", "Risk Management", "Incident Response"],
      description: "Comprehensive cybersecurity fundamentals covering threat detection and response strategies.",
      link: "#" // Add actual link if available
    },
    {
      title: "Cloud Security Specialist",
      issuer: "AWS",
      date: "2024",
      type: "certification", 
      skills: ["AWS Security", "Cloud Architecture", "Identity Management"],
      description: "Advanced cloud security practices and AWS security services implementation.",
      link: "#"
    },
    {
      title: "Web Development Bootcamp",
      issuer: "freeCodeCamp",
      date: "2023",
      type: "certification",
      skills: ["React", "Node.js", "Full Stack Development"],
      description: "Complete web development certification covering modern frameworks and technologies.",
      link: "#"
    },
    {
      title: "Penetration Testing Simulation",
      issuer: "TryHackMe",
      date: "2024",
      type: "simulation",
      skills: ["Ethical Hacking", "Vulnerability Assessment", "OWASP"],
      description: "Hands-on penetration testing simulation with real-world scenarios.",
      link: "#"
    },
    {
      title: "Incident Response Simulation",
      issuer: "CyberDefenders",
      date: "2024",
      type: "simulation",
      skills: ["Digital Forensics", "Malware Analysis", "SIEM"],
      description: "Advanced incident response simulation handling real cyber attack scenarios.",
      link: "#"
    }
  ];

  const getIcon = (type: string) => {
    return type === "certification" ? <Award className="h-5 w-5" /> : <Building2 className="h-5 w-5" />;
  };

  const getTypeColor = (type: string) => {
    return type === "certification" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary";
  };

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Certifications & Simulations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and hands-on job simulations that validate my expertise
            in cybersecurity, web development, and cloud technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {getIcon(cert.type)}
                    <Badge className={getTypeColor(cert.type)}>
                      {cert.type === "certification" ? "Certification" : "Job Simulation"}
                    </Badge>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {cert.date}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-accent font-medium mb-3">{cert.issuer}</p>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className="text-xs border-primary/20 text-primary"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                {cert.link && (
                  <div className="flex items-center justify-end">
                    <a 
                      href={cert.link}
                      className="text-primary hover:text-primary/80 transition-colors text-sm flex items-center space-x-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>View Certificate</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            🏆 More certifications in progress • Always learning and growing
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;