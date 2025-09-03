import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Box, Sphere, Line, OrbitControls } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const NetworkNode = ({ position, isCore = false }: { position: [number, number, number], isCore?: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * (isCore ? 0.5 : 0.3);
      meshRef.current.rotation.y = state.clock.elapsedTime * (isCore ? 0.3 : 0.2);
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
      {isCore ? (
        <Sphere ref={meshRef} args={[0.3, 16, 16]} position={position}>
          <meshPhongMaterial 
            color="hsl(var(--primary))" 
            emissive="hsl(var(--primary-glow))"
            emissiveIntensity={0.3}
          />
        </Sphere>
      ) : (
        <Box ref={meshRef} args={[0.2, 0.2, 0.2]} position={position}>
          <meshPhongMaterial 
            color="hsl(var(--accent))" 
            transparent 
            opacity={0.8}
          />
        </Box>
      )}
    </Float>
  );
};

const DataStream = ({ start, end }: { start: [number, number, number], end: [number, number, number] }) => {
  const points = useMemo(() => [
    new THREE.Vector3(...start),
    new THREE.Vector3(...end)
  ], [start, end]);

  return (
    <Line
      points={points}
      color="hsl(var(--primary-glow))"
      lineWidth={2}
      transparent
      opacity={0.6}
    />
  );
};

const Shield = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <cylinderGeometry args={[1.5, 1.8, 0.1, 8]} />
        <meshPhongMaterial 
          color="hsl(var(--accent))" 
          transparent 
          opacity={0.4}
          wireframe
        />
      </mesh>
    </Float>
  );
};

const CyberSecurityScene = () => {
  const networkNodes = useMemo(() => [
    { pos: [0, 0, 0] as [number, number, number], isCore: true },
    { pos: [-2, 1, 1] as [number, number, number], isCore: false },
    { pos: [2, 1, -1] as [number, number, number], isCore: false },
    { pos: [-1, -2, 0] as [number, number, number], isCore: false },
    { pos: [1, -1, 2] as [number, number, number], isCore: false },
    { pos: [0, 2, -2] as [number, number, number], isCore: false },
  ], []);

  const connections = useMemo(() => [
    { start: [0, 0, 0] as [number, number, number], end: [-2, 1, 1] as [number, number, number] },
    { start: [0, 0, 0] as [number, number, number], end: [2, 1, -1] as [number, number, number] },
    { start: [0, 0, 0] as [number, number, number], end: [-1, -2, 0] as [number, number, number] },
    { start: [0, 0, 0] as [number, number, number], end: [1, -1, 2] as [number, number, number] },
    { start: [0, 0, 0] as [number, number, number], end: [0, 2, -2] as [number, number, number] },
  ], []);

  return (
    <div className="absolute inset-0 w-full h-full opacity-30">
      <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="hsl(var(--primary-glow))" />
        
        {/* Network Nodes */}
        {networkNodes.map((node, index) => (
          <NetworkNode key={index} position={node.pos} isCore={node.isCore} />
        ))}
        
        {/* Data Connections */}
        {connections.map((connection, index) => (
          <DataStream key={index} start={connection.start} end={connection.end} />
        ))}
        
        {/* Security Shield */}
        <Shield />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={1}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
};

export default CyberSecurityScene;