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
    <section id="home" className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-bounce-gentle"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-rotate-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-left">
            <div className="relative group">
              <Avatar className="w-80 h-80 ring-4 ring-primary/30 shadow-elegant hover-glow pulse-glow transition-spring">
                <AvatarImage 
                  src={profileImage} 
                  alt="Swatej Singh - Cybersecurity Specialist & Web Developer" 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <AvatarFallback className="text-6xl font-bold bg-primary text-primary-foreground">
                  SS
                </AvatarFallback>
              </Avatar>
              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent/30 rounded-full blur-lg animate-bounce-gentle"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-primary/30 rounded-full blur-md animate-float"></div>
              <div className="absolute top-1/2 -right-12 w-6 h-6 bg-accent rounded-full animate-bounce-gentle opacity-60"></div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left animate-slide-in-right">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-scale-in">
              Hi, I'm{" "}
              <span className="text-gradient-accent text-shimmer bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient-shift" style={{backgroundSize: '200% 200%'}}>
                Swatej Singh
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Aspiring Cybersecurity Specialist & Web Developer
            </p>
            
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl animate-fade-in" style={{animationDelay: '0.4s'}}>
              I belong to Unnao, completed my 10+2 from Lucknow Public School, currently pursuing B.Tech in CS with a specialization in Cybersecurity. I love learning new things, traveling, and exploring hidden geographical facts.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <Button
                onClick={handleDownloadCV}
                className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow hover-lift magnetic-hover transition-spring group"
              >
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:animate-bounce-gentle" />
                Download CV
              </Button>
              
              <Button
                variant="outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground hover-lift magnetic-hover transition-spring"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 animate-fade-in" style={{animationDelay: '0.8s'}}>
              {socialLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground transition-spring shadow-card hover-glow magnetic-hover animate-scale-in"
                  style={{animationDelay: `${0.8 + index * 0.1}s`}}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;