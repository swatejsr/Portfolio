import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import PracticePlatforms from "@/components/sections/PracticePlatforms";
import Certifications from "@/components/sections/Certifications";
import JobSimulations from "@/components/sections/JobSimulations";
import Projects from "@/components/sections/Projects";
import EarthSection from "@/components/sections/Earth";
import Contact from "@/components/sections/Contact";
import SimpleStarfield from "@/components/3d/SimpleStarfield";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <SimpleStarfield />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <PracticePlatforms />
        <Certifications />
        <JobSimulations />
        <Projects />
        <EarthSection />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-primary/5 border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              © 2025 Swatej Singh. Built with passion for technology and cybersecurity.
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              Designed & Developed with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
