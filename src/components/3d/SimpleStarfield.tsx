import { useEffect, useState } from 'react';

const SimpleStarfield = () => {
  const [stars, setStars] = useState<Array<{ id: number; left: number; top: number; animationDelay: number; size: number; speed: number; layer: number }>>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      // Generate more stars for a fuller effect
      for (let i = 0; i < 800; i++) {
        newStars.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          animationDelay: Math.random() * 10,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 50 + 20, // Animation duration
          layer: Math.floor(Math.random() * 3) + 1, // 3 layers for depth
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
      {/* Deeper Space Background - Much darker */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-slate-950"></div>
      
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full animate-twinkle ${
            star.layer === 1 ? 'bg-blue-300 shadow-[0_0_6px_#93c5fd]' : 
            star.layer === 2 ? 'bg-white shadow-[0_0_4px_#ffffff]' : 'bg-yellow-200 shadow-[0_0_5px_#fef08a]'
          }`}
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.animationDelay}s`,
            animationDuration: `${star.speed}s`,
          }}
        />
      ))}

      {/* Solar System Planets */}
      <div className="absolute w-8 h-8 rounded-full bg-orange-400 shadow-[0_0_20px_#fb923c] animate-drift planet-mercury" 
           style={{ left: '15%', top: '30%', animationDelay: '0s', animationDuration: '25s' }}></div>
      
      <div className="absolute w-12 h-12 rounded-full bg-yellow-300 shadow-[0_0_25px_#fde047] animate-drift planet-venus" 
           style={{ left: '75%', top: '20%', animationDelay: '5s', animationDuration: '35s' }}></div>
      
      <div className="absolute w-14 h-14 rounded-full bg-blue-500 shadow-[0_0_30px_#3b82f6] animate-drift planet-earth" 
           style={{ left: '25%', top: '70%', animationDelay: '10s', animationDuration: '40s' }}></div>
      
      <div className="absolute w-10 h-10 rounded-full bg-red-500 shadow-[0_0_22px_#ef4444] animate-drift planet-mars" 
           style={{ left: '80%', top: '60%', animationDelay: '15s', animationDuration: '30s' }}></div>
      
      <div className="absolute w-20 h-20 rounded-full bg-yellow-600 shadow-[0_0_40px_#ca8a04] animate-drift planet-jupiter" 
           style={{ left: '10%', top: '10%', animationDelay: '20s', animationDuration: '50s' }}></div>
      
      <div className="absolute w-18 h-18 rounded-full bg-yellow-500 shadow-[0_0_35px_#eab308] animate-drift planet-saturn" 
           style={{ left: '60%', top: '80%', animationDelay: '25s', animationDuration: '45s' }}>
        <div className="absolute inset-0 rounded-full border-2 border-yellow-400/50 scale-150"></div>
      </div>
      
      <div className="absolute w-16 h-16 rounded-full bg-cyan-400 shadow-[0_0_32px_#22d3ee] animate-drift planet-uranus" 
           style={{ left: '85%', top: '15%', animationDelay: '30s', animationDuration: '55s' }}></div>
      
      <div className="absolute w-15 h-15 rounded-full bg-blue-600 shadow-[0_0_28px_#2563eb] animate-drift planet-neptune" 
           style={{ left: '35%', top: '5%', animationDelay: '35s', animationDuration: '60s' }}></div>

      {/* Shooting Stars */}
      <div className="shooting-star animate-shootingStar"></div>
      <div className="shooting-star animate-shootingStar" style={{ animationDelay: '3s', top: '20%' }}></div>
      <div className="shooting-star animate-shootingStar" style={{ animationDelay: '6s', top: '60%' }}></div>
      <div className="shooting-star animate-shootingStar" style={{ animationDelay: '9s', top: '80%' }}></div>
      <div className="shooting-star animate-shootingStar" style={{ animationDelay: '12s', top: '30%' }}></div>
      <div className="shooting-star animate-shootingStar" style={{ animationDelay: '15s', top: '70%' }}></div>
      <div className="shooting-star animate-shootingStar" style={{ animationDelay: '18s', top: '10%' }}></div>
      <div className="shooting-star animate-shootingStar" style={{ animationDelay: '21s', top: '90%' }}></div>

      {/* Floating Particles */}
      <div className="floating-particle animate-float" style={{ left: '10%', top: '20%', animationDelay: '0s' }}></div>
      <div className="floating-particle animate-float" style={{ left: '30%', top: '40%', animationDelay: '2s' }}></div>
      <div className="floating-particle animate-float" style={{ left: '60%', top: '10%', animationDelay: '4s' }}></div>
      <div className="floating-particle animate-float" style={{ left: '80%', top: '70%', animationDelay: '6s' }}></div>
      <div className="floating-particle animate-float" style={{ left: '20%', top: '80%', animationDelay: '8s' }}></div>

      {/* Large Nebula Clouds */}
      <div className="nebula-cloud animate-drift" style={{ left: '-10%', top: '20%', animationDelay: '0s' }}></div>
      <div className="nebula-cloud animate-drift" style={{ left: '70%', top: '50%', animationDelay: '10s' }}></div>
      <div className="nebula-cloud animate-drift" style={{ left: '30%', top: '10%', animationDelay: '20s' }}></div>

      {/* Cosmic Dust Layers */}
      <div className="cosmic-dust animate-drift" style={{ left: '0%', top: '40%', animationDelay: '5s' }}></div>
      <div className="cosmic-dust animate-drift" style={{ left: '50%', top: '70%', animationDelay: '15s' }}></div>
    </div>
  );
};

export default SimpleStarfield;