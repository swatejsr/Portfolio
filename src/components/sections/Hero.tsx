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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >

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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 animate-scale-in">
              Hi, I'm{" "}
              <span
                className="text-gradient-primary bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient-shift"
                style={{ backgroundSize: "200% 200%" }}
              >
                Swatej Singh
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-700 mb-4 animate-fade-in tilt-effect">
              Software Engineer | Cybersecurity & Web Development Enthusiast
            </p>

            <p className="text-lg text-slate-600 mb-8 max-w-2xl animate-fade-in">
              Building secure and modern web solutions with a passion for exploring
              cybersecurity and creating user-focused digital experiences.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 animate-fade-in">
              <Button
                onClick={handleViewResume}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg hover:shadow-xl hover-lift transition-spring group px-8 py-3 text-lg font-semibold"
              >
                <FileText className="mr-2 h-5 w-5 transition-transform group-hover:wiggle-effect" />
                View Resume
              </Button>

              <Button
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-2 border-cyan-600 text-cyan-700 hover:bg-cyan-600 hover:text-white hover-lift transition-spring px-8 py-3 text-lg font-semibold shadow-md hover:shadow-lg"
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
                  className="p-3 rounded-full border-2 border-slate-300 text-slate-600 hover:bg-slate-600 hover:text-white hover:border-slate-600 transition-spring shadow-md hover:shadow-lg hover-lift"
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
