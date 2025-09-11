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
      {/* Earth Surface */}
      <mesh>
        <sphereGeometry args={[1, 64, 32]} />
        <meshStandardMaterial 
          color="#1e40af"
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>
      
      {/* Continents */}
      <mesh scale={1.005}>
        <sphereGeometry args={[1, 32, 16]} />
        <meshStandardMaterial 
          color="#059669"
          transparent
          opacity={0.9}
          roughness={0.9}
        />
      </mesh>
      
      {/* Atmosphere */}
      <mesh scale={1.1}>
        <sphereGeometry args={[1, 32, 16]} />
        <meshStandardMaterial 
          color="#87ceeb"
          transparent
          opacity={0.2}
          roughness={0.1}
        />
      </mesh>
      
      {/* Clouds */}
      <mesh ref={cloudsRef} scale={1.02}>
        <sphereGeometry args={[1, 32, 16]} />
        <meshStandardMaterial 
          color="#ffffff"
          transparent
          opacity={0.4}
          roughness={0.8}
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