import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Code, Shield, Trophy } from "lucide-react";

const PracticePlatforms = () => {
  const platforms = [
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/2201641720133_2B",
      icon: <Code className="w-8 h-8 text-accent" />,
      description: "Algorithmic problem solving and programming challenges",
      category: "Coding Practice",
      bgColor: "bg-emerald-500/10"
    },
    {
      name: "LeetCode", 
      url: "https://leetcode.com/u/Swatej/",
      icon: <Trophy className="w-8 h-8 text-accent" />,
      description: "Technical interview preparation and data structures",
      category: "Problem Solving",
      bgColor: "bg-orange-500/10"
    },
    {
      name: "TryHackMe",
      url: "https://tryhackme.com/p/Swatej",
      icon: <Shield className="w-8 h-8 text-accent" />,
      description: "Cybersecurity challenges and penetration testing",
      category: "Cybersecurity",
      bgColor: "bg-red-500/10"
    }
  ];

  return (
    <section id="practice" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Practice Platforms
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and skill development through coding challenges and cybersecurity practice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform) => (
            <Card key={platform.name} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className={`w-16 h-16 rounded-xl ${platform.bgColor} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {platform.icon}
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {platform.name}
                  </h3>
                  
                  <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm rounded-full mb-3">
                    {platform.category}
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {platform.description}
                  </p>
                  
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
                  >
                    View Profile
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticePlatforms;