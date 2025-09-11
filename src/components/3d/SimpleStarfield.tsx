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
      {/* Ultra Deep Space Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black animate-space-drift"></div>
      
      {/* Moving Galaxy Arms */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-900/5 to-transparent animate-galaxy-rotation"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-900/5 to-transparent animate-galaxy-rotation" style={{ animationDelay: '10s', animationDirection: 'reverse' }}></div>
      
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


      {/* Shooting Stars */}
      <div className="shooting-star animate-shootingStar"></div>
      <div className="shooting-star animate-shootingStar" style={{ animationDelay: '3s', top: '20%' }}></div>
      <div className="shooting-star animate-shootingStar" style={{ animationDelay: '6s', top: '60%' }}></div>
      <div className="shooting-star animate-shootingStar" style={{ animationDelay: '9s', top: '80%' }}></div>
      <div className="shooting-star animate-shootingStar" style={{ animationDelay: '12s', top: '30%' }}></div>
      <div className="shooting-star animate-shootingStar" style={{ animationDelay: '15s', top: '70%' }}></div>
      <div className="shooting-star animate-shootingStar" style={{ animationDelay: '18s', top: '10%' }}></div>
      <div className="shooting-star animate-shootingStar" style={{ animationDelay: '21s', top: '90%' }}></div>

      {/* Asteroid Belt */}
      <div className="asteroid animate-orbit" style={{ left: '45%', top: '25%', animationDelay: '0s' }}></div>
      <div className="asteroid animate-orbit" style={{ left: '55%', top: '35%', animationDelay: '3s' }}></div>
      <div className="asteroid animate-orbit" style={{ left: '40%', top: '45%', animationDelay: '6s' }}></div>
      <div className="asteroid animate-orbit" style={{ left: '60%', top: '55%', animationDelay: '9s' }}></div>
      <div className="asteroid animate-orbit" style={{ left: '50%', top: '65%', animationDelay: '12s' }}></div>

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