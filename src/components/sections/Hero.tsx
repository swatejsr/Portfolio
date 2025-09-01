import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profileImage from "@/assets/swatej-profile.jpg";

const Hero = () => {
  const handleDownloadCV = () => {
    // Placeholder for CV download functionality
    console.log("Download CV clicked");
  };

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/swatejsr",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/swatejsingh91/",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:swatejsingh91@gmail.com",
      label: "Email"
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8">
            <Avatar className="w-32 h-32 mx-auto mb-4 ring-4 ring-accent/20 shadow-xl">
              <AvatarImage 
                src={profileImage} 
                alt="Swatej Singh - Cybersecurity Specialist & Web Developer" 
                className="object-cover"
              />
              <AvatarFallback className="text-2xl font-bold bg-accent text-accent-foreground">
                SS
              </AvatarFallback>
            </Avatar>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Hi, I'm{" "}
            <span className="text-gradient-accent">Swatej Singh</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-primary-foreground/80 mb-4">
            Aspiring Cybersecurity Specialist & Web Developer
          </p>
          
          <p className="text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
            I belong to Unnao, completed my 10+2 from Lucknow Public School, currently pursuing B.Tech in CS with a specialization in Cybersecurity. I love learning new things, traveling, and exploring hidden geographical facts.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              onClick={handleDownloadCV}
              className="bg-accent hover:bg-accent-glow text-accent-foreground shadow-glow transition-smooth"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
            
            <Button
              variant="outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground transition-smooth shadow-card"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;