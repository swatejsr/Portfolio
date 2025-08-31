import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code2, Shield, Globe, Database, Cloud, Laptop } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="h-6 w-6" />,
      skills: [
        { name: "C++", level: 75, description: "Data structures & algorithms" },
        { name: "Python", level: 60, description: "Basics & scripting" },
        { name: "JavaScript", level: 55, description: "Basic web development" }
      ]
    },
    {
      title: "Web Development",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "HTML/CSS", level: 80, description: "Responsive design" },
        { name: "React Native", level: 45, description: "Currently learning" },
        { name: "Firebase", level: 50, description: "Backend services" }
      ]
    },
    {
      title: "Cybersecurity",
      icon: <Shield className="h-6 w-6" />,
      skills: [
        { name: "Security Fundamentals", level: 70, description: "Core concepts" },
        { name: "Network Security", level: 60, description: "Academic knowledge" },
        { name: "Ethical Hacking", level: 40, description: "Learning basics" }
      ]
    },
    {
      title: "Cloud & Tools",
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        { name: "AWS Basics", level: 35, description: "Cloud fundamentals" },
        { name: "Git/GitHub", level: 65, description: "Version control" },
        { name: "Database Management", level: 45, description: "SQL basics" }
      ]
    }
  ];

  const learningPath = [
    "Advanced React & Next.js Development",
    "Cybersecurity Certifications (CEH, CISSP)",
    "Cloud Computing (AWS, Azure)",
    "DevSecOps Practices",
    "Machine Learning for Security"
  ];

  return (
    <section id="skills" className="py-20 gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & <span className="text-gradient-accent">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and ongoing learning journey 
            in cybersecurity and web development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-card border-0 bg-card animate-slide-up">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-accent font-semibold">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="mb-1" />
                      <p className="text-xs text-muted-foreground">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Path */}
        <div className="animate-fade-in">
          <Card className="shadow-elegant border-0 bg-gradient-accent/5">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Laptop className="h-6 w-6 text-accent mr-3" />
                <h3 className="text-xl font-semibold text-foreground">Currently Learning</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                I'm committed to continuous learning and staying updated with the latest technologies. 
                Here's what's on my learning roadmap:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {learningPath.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-card rounded-lg shadow-card transition-smooth hover:shadow-elegant"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full mr-3 animate-glow"></div>
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;