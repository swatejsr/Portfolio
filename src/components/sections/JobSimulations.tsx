import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building2, ExternalLink } from "lucide-react";

const JobSimulations = () => {
  const jobSimulations = [
    {
      title: "Cybersecurity Analyst",
      company: "Tata Group",
      platform: "Forage",
      date: "Apr 27,2025",
      skills: ["Threat Detection", "Risk Assessment", "Security Analysis", "Incident Response"],
      description: "Comprehensive cybersecurity simulation focusing on threat analysis and security protocols.",
      link: "https://drive.google.com/file/d/1P7fEwy6H2JBJuey_uSegfhftpPzWby79/view?usp=sharing"
    },
    {
      title: "Shield Up: Cybersecurity",
      company: "AIG",
      platform: "Forage", 
      date: "2024",
      skills: ["Risk Management", "Security Framework", "Compliance", "Vulnerability Assessment"],
      description: "Advanced cybersecurity risk management simulation with real-world business scenarios.",
      link: "https://drive.google.com/file/d/1lbmltivcmLWkO-ueU11Qyf_3Bqsngcs6/view?usp=drive_link"
    },
    {
      title: "Software Engineering",
      company: "Electronic Arts",
      platform: "Forage",
      date: "Apr 27,2025",
      skills: ["Game Development", "Software Engineering", "Python", "Problem Solving"],
      description: "Software engineering simulation in the gaming industry with hands-on development tasks.",
      link: "https://drive.google.com/file/d/14kQWsgFNb8YR8uRDLbTE7jj2PWBr5dqZ/view?usp=drive_link"
    }
  ];

  return (
    <section id="job-simulations" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Job Simulations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on job simulations from leading companies, providing real-world 
            experience in cybersecurity, software engineering, and business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobSimulations.map((simulation, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    <Badge className="bg-accent/10 text-accent">
                      Job Simulation
                    </Badge>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {simulation.date}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {simulation.title}
                </h3>
                
                <div className="mb-3">
                  <p className="text-primary font-medium">{simulation.company}</p>
                  <p className="text-muted-foreground text-sm">via {simulation.platform}</p>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {simulation.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {simulation.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className="text-xs border-primary/20 text-primary"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                {simulation.link && (
                  <div className="flex items-center justify-end">
                    <a 
                      href={simulation.link}
                      className="text-primary hover:text-primary/80 transition-colors text-sm flex items-center space-x-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>View Details</span>
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
            💼 More job simulations in progress • Gaining real-world experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default JobSimulations;