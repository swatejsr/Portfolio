import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D, Center, OrbitControls } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

const Card3D = ({ text, isHovered }: { text: string, isHovered: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.1;
    }
    if (groupRef.current) {
      groupRef.current.scale.setScalar(isHovered ? 1.1 : 1);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Card Background */}
        <mesh ref={meshRef} position={[0, 0, -0.1]}>
          <boxGeometry args={[4, 2.5, 0.2]} />
          <meshPhongMaterial 
            color="hsl(var(--primary))" 
            transparent 
            opacity={0.8}
          />
        </mesh>
        
        {/* 3D Text */}
        <Center>
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={0.3}
            height={0.1}
            curveSegments={12}
          >
            {text}
            <meshPhongMaterial color="white" />
          </Text3D>
        </Center>
      </Float>
    </group>
  );
};

interface InteractiveCard3DProps {
  text: string;
  className?: string;
  children?: React.ReactNode;
}

const InteractiveCard3D = ({ text, className = "", children }: InteractiveCard3DProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} />
          
          <Card3D text={text} isHovered={isHovered} />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            enableRotate={false}
          />
        </Canvas>
      </div>
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default InteractiveCard3D;