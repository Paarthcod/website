import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

const GlassArtifact: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.08;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.15) * 0.08;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
      <Octahedron ref={meshRef} args={[1.6, 2]} scale={1}>
        <meshPhysicalMaterial
          transmission={0.92}
          roughness={0.18}
          metalness={0.05}
          ior={1.35}
          thickness={0.5}
          color="#FAF8F5"
          transparent
          opacity={0.9}
        />
      </Octahedron>
    </Float>
  );
};

export const ContactCanvas: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.25]}>
        <ambientLight intensity={0.9} color="#FFFDF9" />
        <directionalLight position={[5, 10, 5]} intensity={1.5} color="#B7A98F" />
        <GlassArtifact />
      </Canvas>
    </div>
  );
};
