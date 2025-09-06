import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Text } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

const Orb = ({ skill, isHovered }: { skill: string, isHovered: boolean }) => {
  const orbRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (orbRef.current) {
      orbRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      orbRef.current.rotation.y = state.clock.elapsedTime * 0.2;

      // Always pulsing slightly + extra scale on hover/tap
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      orbRef.current.scale.setScalar(pulse + (isHovered ? 0.3 : 0));
    }
    if (textRef.current) {
      textRef.current.lookAt(state.camera.position);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      {/* Main Orb */}
      <Sphere ref={orbRef} args={[1, 32, 32]}>
        <meshPhongMaterial 
          color="hsl(var(--primary))" 
          transparent 
          opacity={0.7}
          emissive="hsl(var(--primary-glow))"
          emissiveIntensity={0.2}
        />
      </Sphere>

      {/* Outer Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.5, 0.05, 16, 32]} />
        <meshPhongMaterial 
          color="hsl(var(--accent))" 
          transparent 
          opacity={0.6}
        />
      </mesh>

      {/* Skill Text */}
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
    </Float>
  );
};

interface SkillOrb3DProps {
  skill: string;
  className?: string;
}

const SkillOrb3D = ({ skill, className = "" }: SkillOrb3DProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative w-24 h-24 sm:w-32 sm:h-32 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="hsl(var(--accent))" />
        
        <Orb skill={skill} isHovered={isHovered} />
      </Canvas>
    </div>
  );
};

export default SkillOrb3D;
