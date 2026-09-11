import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Points, PointMaterial, Text } from '@react-three/drei';
import * as THREE from 'three';
import { playClickSound } from '../../utils/audio';

interface HeroSculptureProps {
  mousePos: React.MutableRefObject<{ x: number; y: number }>;
  isPopped: boolean;
  onPop: () => void;
}

// 3D Architectural Art Installation (Prompt Section 06)
const QuietLuxurySculpture: React.FC<HeroSculptureProps> = ({ mousePos, isPopped, onPop }) => {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (groupRef.current && !isPopped) {
      const targetRotX = mousePos.current.y * 0.35;
      const targetRotY = mousePos.current.x * 0.35;

      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, delta * 1.8);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, delta * 1.8);
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.2;
    }
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 1.2) * 0.15;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.6}>
      <group
        ref={groupRef}
        onClick={(e) => {
          e.stopPropagation();
          playClickSound();
          onPop();
        }}
        onPointerOver={() => {
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          document.body.style.cursor = 'auto';
        }}
        position={[0.8, 0.1, 0]}
      >
        {/* 1. Main Smoked Glass Pane */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3.8, 2.6, 0.06]} />
          <meshPhysicalMaterial
            transmission={0.85}
            roughness={0.15}
            metalness={0.2}
            ior={1.48}
            thickness={0.5}
            color="#242321"
            specularIntensity={1.2}
            transparent
            opacity={0.92}
            clearcoat={0.9}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* 2. Aged Bronze Frame Border */}
        <mesh position={[0, 0, -0.01]}>
          <boxGeometry args={[3.86, 2.66, 0.02]} />
          <meshStandardMaterial color="#9A8064" metalness={0.8} roughness={0.3} />
        </mesh>

        {/* 3. Matte Travertine Sphere Inside */}
        <mesh ref={sphereRef} position={[-0.9, 0.2, 0.4]}>
          <sphereGeometry args={[0.55, 64, 64]} />
          <meshStandardMaterial color="#E5E1D8" roughness={0.7} metalness={0.1} />
        </mesh>

        {/* 4. Aged Bronze Orbital Ring */}
        <mesh ref={ringRef} position={[0.8, -0.1, 0.3]} rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[0.85, 0.04, 32, 100]} />
          <meshStandardMaterial color="#9A8064" metalness={0.85} roughness={0.25} />
        </mesh>

        {/* 5. Minimal Monospace Label Text */}
        <Text
          position={[-1.6, 1.1, 0.05]}
          fontSize={0.08}
          color="#9A8064"
          font="https://fonts.gstatic.com/s/jetbrainsmono/v18/tB3g57-wACB2abwb72r12b_E5C-Q.woff"
        >
          [ARTIFACT.01] // SMOKED GLASS & BRONZE ARCHITECTURE
        </Text>

        <Text
          position={[1.1, -1.1, 0.05]}
          fontSize={0.07}
          color="#918B80"
          font="https://fonts.gstatic.com/s/jetbrainsmono/v18/tB3g57-wACB2abwb72r12b_E5C-Q.woff"
        >
          KINETIX LABS 2026
        </Text>
      </group>
    </Float>
  );
};

// Subtle Dust Particles (Warm Grey / Sand)
const AmbientDustParticles: React.FC = () => {
  const count = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 12;
      pos[i + 1] = (Math.random() - 0.5) * 10;
      pos[i + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.03;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial transparent color="#B8B3A9" size={0.035} sizeAttenuation opacity={0.4} />
    </Points>
  );
};

interface HeroCanvasProps {
  mousePos: React.MutableRefObject<{ x: number; y: number }>;
  isPopped: boolean;
  onPop: () => void;
}

export const HeroCanvas: React.FC<HeroCanvasProps> = ({ mousePos, isPopped, onPop }) => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full"
      >
        {/* Warm Quiet Luxury Lighting */}
        <ambientLight intensity={0.7} color="#F4F1EA" />
        <directionalLight position={[5, 8, 5]} intensity={1.4} color="#9A8064" />
        <directionalLight position={[-5, -4, -3]} intensity={0.4} color="#737565" />
        <pointLight position={[0, 0, 3]} intensity={0.5} color="#E5E1D8" />

        {/* 3D Art Sculpture */}
        <QuietLuxurySculpture mousePos={mousePos} isPopped={isPopped} onPop={onPop} />

        {/* Ambient Sand Dust Particles */}
        <AmbientDustParticles />
      </Canvas>
    </div>
  );
};
