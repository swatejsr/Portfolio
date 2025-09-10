import { useEffect, useState } from 'react';

const SimpleStarfield = () => {
  const [stars, setStars] = useState<Array<{ id: number; left: number; top: number; animationDelay: number; size: number }>>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 200; i++) {
        newStars.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          animationDelay: Math.random() * 3,
          size: Math.random() * 3 + 1,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 z-[-10] overflow-hidden bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-cyan-400 animate-pulse"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.animationDelay}s`,
            boxShadow: `0 0 ${star.size * 2}px rgba(0, 255, 255, 0.5)`,
          }}
        />
      ))}
      
      {/* Moving shooting stars */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `shootingStar 3s linear infinite ${i * 2}s`,
            }}
          />
        ))}
      </div>
      
      {/* Nebula effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse transform -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
};

export default SimpleStarfield;