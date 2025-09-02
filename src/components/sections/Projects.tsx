import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Calendar, Building2 } from "lucide-react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      title: "Text2QR",
      category: "web",
      description: "⚡ Instantly generate QR codes for any text input! 📝 Enter any text → 📷 Get a scannable QR code → 📲 Share or download! 💡 Built with simplicity, speed, and usability in mind.",
      technologies: ["HTML", "CSS", "JavaScript", "QR API"],
      status: "Completed",
      period: "2024",
      features: [
        "Instant QR code generation",
        "Text input to QR conversion",
        "Download functionality",
        "Share options"
      ],
      github: "#",
      live: "#"
    },
    {
      title: "Narrato",
      category: "web",
      description: "Easily convert 📄 text into 🎤 different language speech. Perfect for accessibility, e-learning, and content creation! Just enter your text and listen instantly.",
      technologies: ["HTML", "CSS", "JavaScript", "Speech API"],
      status: "Completed",
      period: "2024",
      features: [
        "Text to speech conversion",
        "Multiple language support",
        "Accessibility features",
        "Instant playback"
      ],
      github: "#",
      live: "#"
    },
    {
      title: "ResQ - Emergency Response System",
      category: "major",
      description: "A comprehensive emergency response platform integrating multiple functionalities for quick disaster response and coordination.",
      technologies: ["React", "Firebase", "Node.js", "Google Maps API"],
      status: "Major Project",
      period: "2024",
      features: [
        "Real-time emergency alerts",
        "Location-based services",
        "Multi-user coordination",
        "Resource management"
      ],
      github: "#",
      live: "#"
    },
    {
      title: "Trash Trade Marketplace",
      category: "web",
      description: "A one-stop solution platform for buying and selling waste materials, connecting companies and customers for sustainable waste management.",
      technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
      status: "Completed",
      period: "2024",
      features: [
        "User authentication",
        "Product listings",
        "Transaction management",
        "Sustainability tracking"
      ],
      github: "#",
      live: "#"
    },
    {
      title: "Tech Nation E-commerce",
      category: "web",
      description: "A modern e-commerce website featuring product catalogs, shopping cart functionality, and secure payment integration.",
      technologies: ["React", "CSS3", "Firebase", "Stripe API"],
      status: "Completed",
      period: "2024",
      features: [
        "Product catalog",
        "Shopping cart",
        "Payment integration",
        "User profiles"
      ],
      github: "#",
      live: "#"
    },
    {
      title: "Simple Calculator",
      category: "internship",
      description: "A clean and functional calculator application built during my internship at Codsoft, featuring basic arithmetic operations.",
      technologies: ["HTML", "CSS", "JavaScript"],
      status: "Internship Project",
      period: "April-May 2025",
      features: [
        "Basic arithmetic operations",
        "Responsive design",
        "Clean UI/UX",
        "Keyboard support"
      ],
      github: "#",
      live: "#"
    },
    {
      title: "Tribute Page",
      category: "internship",
      description: "A responsive tribute page showcasing web design skills with modern layout techniques and engaging visual elements.",
      technologies: ["HTML", "CSS", "Responsive Design"],
      status: "Internship Project",
      period: "April-May 2025",
      features: [
        "Responsive layout",
        "Modern CSS techniques",
        "Accessibility features",
        "Visual storytelling"
      ],
      github: "#",
      live: "#"
    },
    {
      title: "Landing Page Design",
      category: "internship",
      description: "A professional landing page demonstrating modern web design principles with focus on conversion optimization.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      status: "Internship Project",
      period: "April-May 2025",
      features: [
        "Modern design",
        "Call-to-action optimization",
        "Mobile responsiveness",
        "Performance optimization"
      ],
      github: "#",
      live: "#"
    }
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "major", label: "Major Projects" },
    { id: "web", label: "Web Development" },
    { id: "internship", label: "Internship Projects" }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            My <span className="text-gradient-accent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work spanning web development, cybersecurity applications, 
            and innovative solutions built during my learning journey.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`transition-spring card-3d magnetic-hover ${
                selectedCategory === category.id
                  ? "bg-accent text-accent-foreground shadow-glow pulse-glow"
                  : "border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="shadow-card border-0 gradient-card transition-spring hover:shadow-elegant card-3d hover-3d floating-3d animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg font-semibold text-foreground tilt-effect">
                    {project.title}
                  </CardTitle>
                  <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 pulse-glow">
                    {project.status}
                  </Badge>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2 wiggle-effect" />
                  {project.period}
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs border-accent/30 text-accent hover-3d transition-spring"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center hover-3d transition-spring">
                        <div className="w-1 h-1 bg-accent rounded-full mr-2 pulse-glow"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground card-3d magnetic-hover transition-spring"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1 bg-accent hover:bg-accent-glow text-accent-foreground card-3d magnetic-hover transition-spring"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Internship Highlight */}
        <div className="mt-16 animate-fade-in">
          <Card className="shadow-elegant border-0 bg-gradient-accent/5 card-3d hover-3d">
            <CardContent className="p-8 text-center">
              <Building2 className="h-12 w-12 text-accent mx-auto mb-4 floating-3d" />
              <h3 className="text-2xl font-bold text-foreground mb-4 tilt-effect">
                Codsoft Internship Experience
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                During my internship at Codsoft (April-May 2025), I developed three key projects 
                that enhanced my front-end development skills and understanding of modern web technologies. 
                This experience provided valuable industry exposure and practical application of my learning.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;