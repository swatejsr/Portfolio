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
    <div className="fixed inset-0 z-[-10] overflow-hidden">
      {/* Deep space gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900" />
      
      {/* Animated stars with multiple layers */}
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full ${
            star.layer === 1 ? 'bg-cyan-200' : 
            star.layer === 2 ? 'bg-blue-200' : 'bg-white'
          }`}
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.animationDelay}s`,
            boxShadow: `0 0 ${star.size * 3}px ${
              star.layer === 1 ? 'rgba(0, 255, 255, 0.8)' : 
              star.layer === 2 ? 'rgba(100, 149, 237, 0.6)' : 'rgba(255, 255, 255, 0.4)'
            }`,
            animation: `twinkle ${star.speed}s linear infinite, float ${star.speed * 2}s ease-in-out infinite`,
          }}
        />
      ))}
      
      {/* Multiple shooting stars */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`shooting-${i}`}
          className="absolute w-2 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent opacity-0"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `shootingStar ${3 + Math.random() * 2}s linear infinite ${i * 1.5}s`,
            transform: 'rotate(45deg)',
          }}
        />
      ))}
      
      {/* Floating particles */}
      {[...Array(50)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-cyan-300/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `drift ${20 + Math.random() * 30}s linear infinite ${Math.random() * 10}s`,
          }}
        />
      ))}
      
      {/* Large nebula clouds with rotation */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute top-0 left-0 w-[800px] h-[800px] bg-purple-500/20 rounded-full blur-3xl"
          style={{
            animation: 'rotate-slow 60s linear infinite, pulse 8s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl"
          style={{
            animation: 'rotate-slow 80s linear infinite reverse, pulse 6s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-3xl"
          style={{
            animation: 'rotate-slow 100s linear infinite, pulse 10s ease-in-out infinite',
          }}
        />
      </div>
      
      {/* Cosmic dust layers */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={`dust-${i}`}
            className="absolute bg-gradient-to-r from-cyan-200/10 to-purple-200/10 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${50 + Math.random() * 100}px`,
              height: `${20 + Math.random() * 40}px`,
              animation: `drift ${40 + Math.random() * 20}s linear infinite ${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SimpleStarfield;