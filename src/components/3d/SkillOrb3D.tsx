import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Text } from '@react-three/drei';
import { useRef, useState, Suspense } from 'react';
import * as THREE from 'three';

const Orb = ({ skill, isHovered }: { skill: string; isHovered: boolean }) => {
  const orbRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Mesh>(null);

  // Planet color mapping based on solar system
  const getPlanetColors = (skill: string) => {
    switch (skill) {
      case 'React': // Earth
        return { color: '#4A90E2', emissive: '#2E8B57', glow: '#87CEEB' };
      case 'Python': // Mars
        return { color: '#CD5C5C', emissive: '#A0522D', glow: '#FF4500' };
      case 'Security': // Jupiter
        return { color: '#DAA520', emissive: '#B8860B', glow: '#FFA500' };
      case 'Cloud': // Venus
        return { color: '#FFC649', emissive: '#F0E68C', glow: '#FFFF00' };
      case 'C++': // Mercury
        return { color: '#708090', emissive: '#2F4F4F', glow: '#C0C0C0' };
      case 'Firebase': // Saturn
        return { color: '#F4A460', emissive: '#D2691E', glow: '#FFD700' };
      default:
        return { color: '#4A90E2', emissive: '#2E8B57', glow: '#87CEEB' };
    }
  };

  const planetColors = getPlanetColors(skill);

  useFrame((state) => {
    if (orbRef.current) {
      orbRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      orbRef.current.rotation.y = state.clock.elapsedTime * 0.2;

      const pulse = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      orbRef.current.scale.setScalar(pulse + (isHovered ? 0.3 : 0));
    }
    if (textRef.current) {
      textRef.current.lookAt(state.camera.position);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={orbRef} args={[1, 32, 32]}>
        <meshPhongMaterial
          color={planetColors.color}
          transparent
          opacity={0.9}
          emissive={planetColors.emissive}
          emissiveIntensity={0.3}
        />
      </Sphere>

      {/* Saturn rings for Firebase */}
      {skill === 'Firebase' && (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.5, 0.05, 16, 32]} />
          <meshPhongMaterial color={planetColors.glow} transparent opacity={0.6} />
        </mesh>
      )}

      {/* Orbital rings for other planets */}
      {skill !== 'Firebase' && (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.4, 0.02, 16, 32]} />
          <meshPhongMaterial color={planetColors.glow} transparent opacity={0.4} />
        </mesh>
      )}

      <Suspense fallback={null}>
        <Text
          ref={textRef}
          position={[0, 0, 1.5]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {skill}
        </Text>
      </Suspense>
    </Float>
  );
};

interface SkillOrb3DProps {
  skill: string;
  className?: string;
}

const SkillOrb3D = ({ skill, className = '' }: SkillOrb3DProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* Mobile Fallback */}
      <div
        className={`flex md:hidden items-center justify-center w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg text-white font-bold animate-pulse ${className}`}
      >
        {skill}
      </div>

      {/* Desktop 3D Orb */}
      <div
        className={`relative hidden md:block w-24 h-24 sm:w-32 sm:h-32 ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <pointLight
            position={[-5, -5, -5]}
            intensity={0.5}
            color="hsl(var(--accent))"
          />
          <Orb skill={skill} isHovered={isHovered} />
        </Canvas>
      </div>
    </>
  );
};

export default SkillOrb3D;
