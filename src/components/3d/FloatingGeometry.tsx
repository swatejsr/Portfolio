import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Sphere, Box, Torus } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AnimatedSphere = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[0.8, 32, 32]} position={position}>
        <meshPhongMaterial color={color} transparent opacity={0.8} />
      </Sphere>
    </Float>
  );
};

const AnimatedBox = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
      <Box ref={meshRef} args={[1, 1, 1]} position={position}>
        <meshPhongMaterial color={color} transparent opacity={0.7} />
      </Box>
    </Float>
  );
};

const AnimatedTorus = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={3}>
      <Torus ref={meshRef} args={[0.6, 0.2, 16, 32]} position={position}>
        <meshPhongMaterial color={color} transparent opacity={0.6} />
      </Torus>
    </Float>
  );
};

const FloatingGeometry = () => {
  return (
    <div className="absolute inset-0 w-full h-full opacity-60">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff6b6b" />
        
        <AnimatedSphere position={[-4, 2, 0]} color="hsl(var(--primary))" />
        <AnimatedBox position={[4, -2, -2]} color="hsl(var(--accent))" />
        <AnimatedTorus position={[2, 3, -1]} color="hsl(var(--primary-glow))" />
        <AnimatedSphere position={[-2, -3, 1]} color="hsl(var(--accent-glow))" />
        <AnimatedBox position={[3, 1, 2]} color="hsl(var(--primary))" />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
};

export default FloatingGeometry;