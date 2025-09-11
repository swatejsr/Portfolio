import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "./CanvasLoader";

const Earth = () => {
  const earthRef = useRef<THREE.Group>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.2;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <group ref={earthRef} scale={2.5} position-y={0}>
      {/* Earth Surface - Ocean Blue */}
      <mesh>
        <sphereGeometry args={[1, 64, 32]} />
        <meshStandardMaterial 
          color="#1a365d"
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>
      
      {/* Continents - Realistic Green/Brown */}
      <mesh scale={1.002}>
        <sphereGeometry args={[1, 48, 24]} />
        <meshStandardMaterial 
          color="#2d5016"
          transparent
          opacity={0.95}
          roughness={0.9}
        />
      </mesh>
      
      {/* Ice Caps */}
      <mesh position={[0, 0.9, 0]} scale={0.3}>
        <sphereGeometry args={[1, 16, 8]} />
        <meshStandardMaterial 
          color="#f0f8ff"
          transparent
          opacity={0.8}
          roughness={0.2}
        />
      </mesh>
      <mesh position={[0, -0.9, 0]} scale={0.25}>
        <sphereGeometry args={[1, 16, 8]} />
        <meshStandardMaterial 
          color="#f0f8ff"
          transparent
          opacity={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Atmosphere Glow */}
      <mesh scale={1.08}>
        <sphereGeometry args={[1, 32, 16]} />
        <meshStandardMaterial 
          color="#4a90e2"
          transparent
          opacity={0.15}
          roughness={0.1}
        />
      </mesh>
      
      {/* Dynamic Clouds */}
      <mesh ref={cloudsRef} scale={1.01}>
        <sphereGeometry args={[1, 32, 16]} />
        <meshStandardMaterial 
          color="#ffffff"
          transparent
          opacity={0.3}
          roughness={0.9}
        />
      </mesh>
    </group>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;