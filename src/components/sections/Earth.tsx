import EarthCanvas from "@/components/3d/Earth";

const EarthSection = () => {
  return (
    <section id="earth" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">
            Our Beautiful Planet
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Exploring technology to protect and understand our world
          </p>
        </div>
        
        <div className="h-96 w-full">
          <EarthCanvas />
        </div>
      </div>
    </section>
  );
};

export default EarthSection;