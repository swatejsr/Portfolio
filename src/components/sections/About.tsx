import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Heart } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      specialization: "Cybersecurity",
      institution: "PSIT Kanpur",
      period: "2022 - 2026",
      status: "Currently Pursuing",
    },
    {
      degree: "10+2 Education",
      institution: "Lucknow Public School",
      period: "Completed",
      status: "Graduated",
    },
  ];

  const interests = [
    "Cybersecurity Research",
    "Web Development",
    "Technology Innovation",
    "Travel & Exploration",
    "Geography & Hidden Facts",
    "Continuous Learning",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About <span className="text-gradient-accent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate student with a keen interest in cybersecurity and web development,
            always eager to learn and explore new technologies.
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Personal Story */}
          <div className="animate-slide-up">
            <Card className="gradient-card shadow-card border-0 h-full card-3d hover-3d">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MapPin className="h-6 w-6 text-accent mr-3 wiggle-effect" />
                  <h3 className="text-xl font-semibold text-foreground">
                    My Journey
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I belong to Unnao and completed my 10+2 from Lucknow Public School.
                  Currently, I am pursuing a B.Tech in Computer Science with a specialization
                  in Cybersecurity at PSIT Kanpur. My journey has always been driven by a
                  fascination with technology and its power to solve real-world problems.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Alongside my academics, I enjoy learning new things, exploring hidden
                  geographical facts, traveling, trying new cuisines, and watching anime.
                  These interests keep me curious, creative, and open to new
                  perspectives—qualities I also bring into my work as a developer.
                </p>

                {/* Highlighted natural line */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  <strong>
                    A portfolio can never be complete; it reflects an ongoing journey of
                    learning, problem-solving, and experimentation.
                  </strong>
                </p>

                <div className="flex items-center">
                  <Heart className="h-5 w-5 text-accent mr-2 pulse-glow" />
                  <span className="text-sm text-muted-foreground">
                    Based in Unnao, Uttar Pradesh, India
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education & Interests */}
          <div className="space-y-8 animate-slide-up">
            {/* Education */}
            <Card className="gradient-card shadow-card border-0 card-3d hover-3d">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <GraduationCap className="h-6 w-6 text-accent mr-3 floating-3d" />
                  <h3 className="text-xl font-semibold text-foreground">Education</h3>
                </div>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="border-l-2 border-accent/30 pl-4 hover-3d transition-spring"
                    >
                      <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                      {edu.specialization && (
                        <p className="text-accent text-sm font-medium">
                          Specialization: {edu.specialization}
                        </p>
                      )}
                      <p className="text-muted-foreground text-sm">{edu.institution}</p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-muted-foreground text-xs">{edu.period}</span>
                        <span className="text-accent text-xs font-medium">{edu.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="gradient-card shadow-card border-0 card-3d hover-3d">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Interests & Hobbies
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {interests.map((interest, index) => (
                    <div
                      key={index}
                      className="bg-accent/10 text-accent px-3 py-2 rounded-lg text-sm font-medium text-center transition-spring hover:bg-accent/20 card-3d tilt-effect"
                    >
                      {interest}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
