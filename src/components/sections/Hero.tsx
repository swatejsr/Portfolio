import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import profileImage from "@/assets/swatej-profile.jpg";
import FloatingGeometry from "@/components/3d/FloatingGeometry";
import CyberMatrix3D from "@/components/3d/CyberMatrix3D";
import ComputersCanvas from "@/components/3d/Computer";

const Hero = () => {
  const handleViewResume = () => {
    window.open(
      "https://drive.google.com/file/d/1n2EPpwxB82QN_eZGu2dbnFScTX573zFZ/view?usp=drive_link",
      "_blank"
    );
  };

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/swatejsr",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/swatejsingh91/",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:swatejsingh91@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-card via-background to-card/80"
    >
      {/* Professional tech grid background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(190,190,190,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(190,190,190,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Subtle tech accent elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-accent/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/5 rounded-lg blur-sm"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-16">
          {/* Profile Image */}
<div className="flex justify-center items-center animate-slide-in-left w-full lg:w-auto">
  <div className="relative group hover-3d">
    <Avatar className="w-80 h-80 sm:w-96 sm:h-96 ring-4 ring-primary/30 shadow-elegant hover-glow transition-spring relative z-10">
      <AvatarImage
        src={profileImage}
        alt="Swatej Singh - Cybersecurity & Web Development Enthusiast"
        className="w-full h-full object-cover object-center rounded-full transition-transform duration-500 group-hover:scale-110"
      />
      <AvatarFallback className="text-6xl font-bold bg-primary text-primary-foreground rounded-full">
        SS
      </AvatarFallback>
    </Avatar>
  </div>
</div>

          {/* Text Content */}
          <div className="text-center lg:text-left animate-slide-in-right">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-scale-in">
              Hi, I'm{" "}
              <span
                className="text-gradient-accent bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient-shift"
                style={{ backgroundSize: "200% 200%" }}
              >
                Swatej Singh
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-4 animate-fade-in tilt-effect">
              Software Engineer | Cybersecurity & Web Development Enthusiast
            </p>

            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl animate-fade-in">
              Building secure and modern web solutions with a passion for exploring
              cybersecurity and creating user-focused digital experiences.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 animate-fade-in">
              <Button
                onClick={handleViewResume}
                className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow hover-lift magnetic-hover transition-spring group card-3d"
              >
                <FileText className="mr-2 h-4 w-4 transition-transform group-hover:wiggle-effect" />
                View Resume
              </Button>

              <Button
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground hover-lift magnetic-hover transition-spring card-3d"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 animate-fade-in">
              {socialLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-accent/30 text-accent-foreground hover:bg-accent hover:text-accent-foreground transition-spring shadow-card hover-glow card-3d"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
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
