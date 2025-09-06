import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, Building2, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Google Cybersecurity",
      issuer: "Google",
      date: "Oct 22, 2024",
      type: "certification",
      skills: ["Network Security", "Risk Management", "Incident Response"],
      description:"Comprehensive cybersecurity fundamentals covering threat detection and response strategies.",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/Y440VZX13V8U",
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "AWS",
      date: "July 20, 2025",
      type: "certification",
      skills: ["AWS Security", "Cloud Architecture", "Identity Management"],
      description:"Basic cloud security practices and AWS security services implementation.",
      link: "https://drive.google.com/file/d/1KLcB-XuDBRvVA37omV99tow6QX0I1WMb/view?usp=drive_link",
    },
    {
      title: "Introduction to Front-End Development",
      issuer: "Meta",
      date: "Feb 5, 2024",
      type: "certification",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      description:"Complete front-end development certification covering modern frameworks and technologies.",
      link: "https://coursera.org/verify/QVTHQTDHS73H",
    },
    {
      title:
        "Introduction to Computers and Operating Systems and Security",
      issuer: "Microsoft",
      date: "Sep 12, 2023",
      type: "certification",
      skills: ["Operating System", "Computer Security", "OS Security"],
      description:"Fundamentals of computer systems, operating systems, and security principles.",
      link: "https://www.coursera.org/account/accomplishments/verify/TJ2QUH8VGJYM",
    },
    {
      title: "Python",
      issuer: "Udemy",
      date: "Sep 10, 2023",
      type: "certification",
      skills: ["Basics of Python", "Libraries"],
      description: "Learned Python basics and its implementation.",
      link: "https://drive.google.com/file/d/1m5EDJCBHHBDlUFvIhV4dx8sUmTrgTZyZ/view?usp=sharing",
    },
    {
      title: "Public Speaking",
      issuer: "Udemy",
      date: "Sep 8, 2023",
      type: "certification",
      skills: ["Public Speaking", "Communication Skills"],
      description:"Learned the art of public speaking and effective communication.",
      link: "https://drive.google.com/file/d/1s04S1x9HYoUss3i6jZaGgIJy0eFwX37_/view?usp=drive_link",
    },
    {
      title: "Introduction to Networking and Cloud Computing",
      issuer: "Microsoft",
      date: "Sep 22, 2023",
      type: "certification",
      skills: ["Networking", "Cloud Computing", "Azure"],
      description:"Basics of networking and cloud computing with a focus on Microsoft Azure.",
      link: "https://coursera.org/verify/MUBQNFR29S84",
    },
    {
      title: "Cybersecurity Solutions and Microsoft Defender",
      issuer: "Microsoft",
      date: "Dec 31, 2023",
      type: "certification",
      skills: ["Cybersecurity", "Microsoft Defender", "Threat Protection"],
      description:"Understanding cybersecurity solutions and implementing Microsoft Defender for threat protection.",
      link: "https://coursera.org/verify/2ELZE93C5CC8",
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "TryHackMe",
      date: "Sep 7, 2024",
      type: "certification",
      skills: ["Cybersecurity", "Network Security", "Threat Analysis"],
      description:"Fundamentals of cybersecurity, including threat identification and mitigation strategies.",
      link: "https://drive.google.com/file/d/1b6YpQwUpM4-4Vm8eS8V63dc-lbqOR5uW/view?usp=drive_link",
    },
    {
      title: "Pre Security",
      issuer: "TryHackMe",
      date: "Sep 14, 2024",
      type: "certification",
      skills: ["Cybersecurity Basics", "Network Fundamentals", "Security Principles"],
      description:"Introduction to cybersecurity concepts, network fundamentals, and basic security principles.",
      link: "https://drive.google.com/file/d/1NmM9Mb7y6u22pcipqK1-n8S8HANiLVfO/view?usp=drive_link",
    },
    {
      title: "SQL (Basics)",
      issuer: "HackerRank",
      date: "Apr 21, 2025",
      type: "certification",
      skills: ["SQL", "Database Management", "Data Retrieval"],
      description:"Learned SQL basics including database management and data retrieval techniques.",
      link: "https://drive.google.com/file/d/1huMORMF0nc_VQz1qAlQ--t4GC8boTvzQ/view?usp=drive_link",
    },
  ];

  const getIcon = (type: string) =>
    type === "certification" ? (
      <Award className="h-5 w-5 text-primary" />
    ) : (
      <Building2 className="h-5 w-5 text-secondary" />
    );

  const getTypeColor = (type: string) =>
    type === "certification"
      ? "bg-primary/10 text-primary"
      : "bg-secondary/10 text-secondary";

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Certifications & Certificates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and skill-based certificates that validate
            my expertise in cybersecurity, web development, and cloud technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {getIcon(cert.type)}
                    <Badge className={getTypeColor(cert.type)}>
                      {cert.type === "certification"
                        ? "Certification"
                        : "Certificate"}
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
