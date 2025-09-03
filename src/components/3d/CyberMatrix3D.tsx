import { Canvas, useFrame, extend } from '@react-three/fiber';
import { Float, OrbitControls, Line } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const DataNode = ({ position, color, scale = 1 }: { 
  position: [number, number, number]; 
  color: string; 
  scale?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.scale.setScalar(scale + Math.sin(state.clock.elapsedTime) * 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <octahedronGeometry args={[0.3, 0]} />
        <meshPhongMaterial 
          color={color}
          transparent
          opacity={0.8}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
};

const DataConnection = ({ start, end }: { 
  start: [number, number, number]; 
  end: [number, number, number]; 
}) => {
  const lineRef = useRef<any>(null);
  
  const points = useMemo(() => [
    new THREE.Vector3(...start), 
    new THREE.Vector3(...end)
  ], [start, end]);

  useFrame((state) => {
    if (lineRef.current?.material) {
      lineRef.current.material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <Line
      ref={lineRef}
      points={points}
      color="#06B6D4"
      lineWidth={2}
      transparent
      opacity={0.5}
    />
  );
};

const CyberGrid = () => {
  const gridRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  const gridLines = useMemo(() => {
    const lines = [];
    const size = 8;
    const divisions = 20;
    
    for (let i = 0; i <= divisions; i++) {
      const alpha = i / divisions;
      const coord = (alpha - 0.5) * size;
      
      // Horizontal lines
      lines.push(
        <DataConnection
          key={`h-${i}`}
          start={[-size/2, 0, coord]}
          end={[size/2, 0, coord]}
        />
      );
      
      // Vertical lines
      lines.push(
        <DataConnection
          key={`v-${i}`}
          start={[coord, 0, -size/2]}
          end={[coord, 0, size/2]}
        />
      );
    }
    
    return lines;
  }, []);

  return (
    <group ref={gridRef} position={[0, -3, 0]}>
      {gridLines}
    </group>
  );
};

const CyberMatrix3D = ({ className = "" }: { className?: string }) => {
  const nodes = useMemo(() => [
    { position: [0, 0, 0] as [number, number, number], color: "#06B6D4", scale: 1.5 },
    { position: [-2, 1, -1] as [number, number, number], color: "#9333EA", scale: 1 },
    { position: [2, -1, 1] as [number, number, number], color: "#22D3EE", scale: 1 },
    { position: [1, 2, -2] as [number, number, number], color: "#9333EA", scale: 0.8 },
    { position: [-1, -2, 2] as [number, number, number], color: "#06B6D4", scale: 0.8 },
    { position: [3, 0, 0] as [number, number, number], color: "#22D3EE", scale: 0.6 },
    { position: [-3, 0.5, -0.5] as [number, number, number], color: "#9333EA", scale: 0.6 },
  ], []);

  const connections = useMemo(() => [
    { start: [0, 0, 0] as [number, number, number], end: [-2, 1, -1] as [number, number, number] },
    { start: [0, 0, 0] as [number, number, number], end: [2, -1, 1] as [number, number, number] },
    { start: [0, 0, 0] as [number, number, number], end: [1, 2, -2] as [number, number, number] },
    { start: [0, 0, 0] as [number, number, number], end: [-1, -2, 2] as [number, number, number] },
    { start: [-2, 1, -1] as [number, number, number], end: [1, 2, -2] as [number, number, number] },
    { start: [2, -1, 1] as [number, number, number], end: [-1, -2, 2] as [number, number, number] },
  ], []);

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [5, 5, 5], fov: 60 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#06B6D4" />
        <pointLight position={[-10, -10, -10]} intensity={0.6} color="#9333EA" />
        
        <CyberGrid />
        
        {nodes.map((node, index) => (
          <DataNode
            key={index}
            position={node.position}
            color={node.color}
            scale={node.scale}
          />
        ))}
        
        {connections.map((connection, index) => (
          <DataConnection
            key={index}
            start={connection.start}
            end={connection.end}
          />
        ))}
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default CyberMatrix3D;