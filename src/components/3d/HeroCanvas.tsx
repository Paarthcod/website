import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Points, PointMaterial, Text } from '@react-three/drei';
import * as THREE from 'three';
import { playClickSound } from '../../utils/audio';

// 1. Floating Holographic Code Interface Screen
interface HoloScreenProps {
  mousePos: React.MutableRefObject<{ x: number; y: number }>;
  isPopped: boolean;
  onPop: () => void;
}

const HoloCodeScreen: React.FC<HoloScreenProps> = ({ mousePos, isPopped, onPop }) => {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (groupRef.current && !isPopped) {
      const targetRotX = mousePos.current.y * 0.25;
      const targetRotY = mousePos.current.x * 0.25;

      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, delta * 1.5);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, delta * 1.5);
      groupRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.02;
    }
  });

  if (isPopped) return null;

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.5}>
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
        position={[0.6, 0.2, 0]}
      >
        {/* Holographic Smoked Glass Screen Frame */}
        <mesh ref={meshRef}>
          <boxGeometry args={[4.2, 2.6, 0.08]} />
          <meshPhysicalMaterial
            transmission={0.88}
            roughness={0.12}
            metalness={0.6}
            ior={1.45}
            thickness={0.6}
            color="#171717"
            specularIntensity={1.8}
            transparent
            opacity={0.94}
            clearcoat={1.0}
            clearcoatRoughness={0.08}
            emissive="#B7A98F"
            emissiveIntensity={0.15}
          />
        </mesh>

        {/* Outer Bezel Wireframe Glow */}
        <mesh position={[0, 0, -0.01]}>
          <boxGeometry args={[4.28, 2.68, 0.02]} />
          <meshStandardMaterial
            color="#B7A98F"
            emissive="#B7A98F"
            emissiveIntensity={0.6}
            wireframe
          />
        </mesh>

        {/* Header Bar */}
        <group position={[-1.8, 1.05, 0.06]}>
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[0.04, 12, 12]} />
            <meshBasicMaterial color="#171717" />
          </mesh>
          <mesh position={[0.15, 0, 0]}>
            <sphereGeometry args={[0.04, 12, 12]} />
            <meshBasicMaterial color="#B7A98F" />
          </mesh>
          <mesh position={[0.3, 0, 0]}>
            <sphereGeometry args={[0.04, 12, 12]} />
            <meshBasicMaterial color="#6F6F6A" />
          </mesh>
          <Text
            position={[1.2, 0, 0]}
            fontSize={0.09}
            color="#B7A98F"
            font="https://fonts.gstatic.com/s/jetbrainsmono/v18/tB3g57-wACB2abwb72r12b_E5C-Q.woff"
          >
            src/engine/studio.ts — KINETIX
          </Text>
        </group>

        {/* Code Snippets Text Lines */}
        <group position={[-1.8, 0.65, 0.06]}>
          <Text
            position={[0, 0, 0]}
            fontSize={0.1}
            color="#B7A98F"
            anchorX="left"
            font="https://fonts.gstatic.com/s/jetbrainsmono/v18/tB3g57-wACB2abwb72r12b_E5C-Q.woff"
          >
            import {"{"} WebGL, AI, Automation {"}"} from "@kinetix/studio";
          </Text>
          <Text
            position={[0, -0.25, 0]}
            fontSize={0.1}
            color="#F5F3EE"
            anchorX="left"
            font="https://fonts.gstatic.com/s/jetbrainsmono/v18/tB3g57-wACB2abwb72r12b_E5C-Q.woff"
          >
            export const engine = new WebGLArchitecture({"{"}
          </Text>
          <Text
            position={[0.2, -0.5, 0]}
            fontSize={0.1}
            color="#E5B89B"
            anchorX="left"
            font="https://fonts.gstatic.com/s/jetbrainsmono/v18/tB3g57-wACB2abwb72r12b_E5C-Q.woff"
          >
            performance: "60 FPS", mode: "LUXURY_ENTERPRISE"
          </Text>
          <Text
            position={[0, -0.75, 0]}
            fontSize={0.1}
            color="#F5F3EE"
            anchorX="left"
            font="https://fonts.gstatic.com/s/jetbrainsmono/v18/tB3g57-wACB2abwb72r12b_E5C-Q.woff"
          >
            {"}"});
          </Text>
          <Text
            position={[0, -1.05, 0]}
            fontSize={0.1}
            color="#B7A98F"
            anchorX="left"
            font="https://fonts.gstatic.com/s/jetbrainsmono/v18/tB3g57-wACB2abwb72r12b_E5C-Q.woff"
          >
            await engine.deploySystem({"{"} target: "GLOBAL_FLAGSHIP" {"}"});
          </Text>
          <Text
            position={[0, -1.35, 0]}
            fontSize={0.09}
            color="#D4AF37"
            anchorX="left"
            font="https://fonts.gstatic.com/s/jetbrainsmono/v18/tB3g57-wACB2abwb72r12b_E5C-Q.woff"
          >
            ✔ SYSTEM DEPLOYED — LATENCY: 11ms | REALTIME PIPELINE
          </Text>
        </group>
      </group>
    </Float>
  );
};

// 2. Floating 3D Laptop Workstation Model
const FloatingLaptop: React.FC<{ mousePos: React.MutableRefObject<{ x: number; y: number }> }> = ({ mousePos }) => {
  const laptopGroupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (laptopGroupRef.current) {
      const targetRotY = -0.4 + mousePos.current.x * 0.15;
      const targetRotX = 0.2 + mousePos.current.y * 0.15;

      laptopGroupRef.current.rotation.y = THREE.MathUtils.lerp(laptopGroupRef.current.rotation.y, targetRotY, delta * 1.2);
      laptopGroupRef.current.rotation.x = THREE.MathUtils.lerp(laptopGroupRef.current.rotation.x, targetRotX, delta * 1.2);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.4}>
      <group ref={laptopGroupRef} position={[-2.2, -0.6, 0.4]} scale={0.75}>
        {/* Laptop Base Body */}
        <mesh position={[0, -0.05, 0]}>
          <boxGeometry args={[2.2, 0.08, 1.5]} />
          <meshStandardMaterial color="#171717" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* Trackpad */}
        <mesh position={[0, 0.001, 0.4]}>
          <boxGeometry args={[0.7, 0.002, 0.5]} />
          <meshStandardMaterial color="#26272B" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Keyboard Surface */}
        <mesh position={[0, 0.001, -0.2]}>
          <boxGeometry args={[1.8, 0.002, 0.7]} />
          <meshStandardMaterial color="#26272B" metalness={0.7} roughness={0.3} emissive="#B7A98F" emissiveIntensity={0.2} />
        </mesh>

        {/* Laptop Screen Lid */}
        <group position={[0, 0.04, -0.72]} rotation={[-0.45, 0, 0]}>
          {/* Lid Back */}
          <mesh position={[0, 0.75, 0]}>
            <boxGeometry args={[2.2, 1.5, 0.04]} />
            <meshStandardMaterial color="#171717" metalness={0.95} roughness={0.15} />
          </mesh>

          {/* Screen Display */}
          <mesh position={[0, 0.75, 0.025]}>
            <planeGeometry args={[2.0, 1.3]} />
            <meshBasicMaterial color="#111214" />
          </mesh>

          {/* Code Text on Laptop Screen */}
          <Text
            position={[-0.9, 1.2, 0.03]}
            fontSize={0.06}
            color="#B7A98F"
            anchorX="left"
            font="https://fonts.gstatic.com/s/jetbrainsmono/v18/tB3g57-wACB2abwb72r12b_E5C-Q.woff"
          >
            {"const app = initApp();"}
          </Text>
          <Text
            position={[-0.9, 1.0, 0.03]}
            fontSize={0.06}
            color="#E5B89B"
            anchorX="left"
            font="https://fonts.gstatic.com/s/jetbrainsmono/v18/tB3g57-wACB2abwb72r12b_E5C-Q.woff"
          >
            {"app.connect({ 3D_WEBGL: true });"}
          </Text>
          <Text
            position={[-0.9, 0.8, 0.03]}
            fontSize={0.06}
            color="#6F6F6A"
            anchorX="left"
            font="https://fonts.gstatic.com/s/jetbrainsmono/v18/tB3g57-wACB2abwb72r12b_E5C-Q.woff"
          >
            {"// 60 FPS Locked Architecture"}
          </Text>
        </group>
      </group>
    </Float>
  );
};

// 3. Floating 3D Code Symbols (< />, { }, 01, #)
const FloatingCodeSymbols: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* < /> Symbol */}
      <Float speed={2.0} floatIntensity={0.8}>
        <Text
          position={[-3.2, 1.8, -1.0]}
          fontSize={0.45}
          color="#171717"
          font="https://fonts.gstatic.com/s/jetbrainsmono/v18/tB3g57-wACB2abwb72r12b_E5C-Q.woff"
        >
          {"< />"}
        </Text>
      </Float>

      {/* { } Symbol */}
      <Float speed={1.7} floatIntensity={0.7}>
        <Text
          position={[3.0, 2.0, -1.2]}
          fontSize={0.5}
          color="#B7A98F"
          font="https://fonts.gstatic.com/s/jetbrainsmono/v18/tB3g57-wACB2abwb72r12b_E5C-Q.woff"
        >
          {"{ }"}
        </Text>
      </Float>

      {/* 01 Binary */}
      <Float speed={1.9} floatIntensity={0.6}>
        <Text
          position={[3.2, -1.5, -0.8]}
          fontSize={0.35}
          color="#171717"
          font="https://fonts.gstatic.com/s/jetbrainsmono/v18/tB3g57-wACB2abwb72r12b_E5C-Q.woff"
        >
          {"01"}
        </Text>
      </Float>

      {/* # Symbol */}
      <Float speed={1.6} floatIntensity={0.9}>
        <Text
          position={[-3.0, -1.8, -0.5]}
          fontSize={0.4}
          color="#B7A98F"
          font="https://fonts.gstatic.com/s/jetbrainsmono/v18/tB3g57-wACB2abwb72r12b_E5C-Q.woff"
        >
          {"#"}
        </Text>
      </Float>
    </group>
  );
};

// 4. Central Digital Core & Circuit Lines
const DigitalCore: React.FC = () => {
  const coreRef = useRef<THREE.Mesh>(null);
  const circuitRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.4;
      coreRef.current.rotation.x += delta * 0.2;
    }
    if (circuitRef.current) {
      circuitRef.current.rotation.z -= delta * 0.15;
    }
  });

  return (
    <group position={[0, 0, -1.5]}>
      {/* Central Glowing Core */}
      <mesh ref={coreRef} scale={1.1}>
        <icosahedronGeometry args={[1.2, 2]} />
        <meshStandardMaterial
          color="#171717"
          emissive="#B7A98F"
          emissiveIntensity={1.0}
          wireframe
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Circuit Energy Line Rings */}
      <group ref={circuitRef}>
        <mesh scale={1.8}>
          <torusGeometry args={[1.5, 0.015, 16, 80]} />
          <meshBasicMaterial color="#B7A98F" transparent opacity={0.6} />
        </mesh>
        <mesh scale={2.4} rotation={[1.2, 0, 0]}>
          <torusGeometry args={[1.5, 0.012, 16, 80]} />
          <meshBasicMaterial color="#E5B89B" transparent opacity={0.4} />
        </mesh>
      </group>
    </group>
  );
};

// 5. Holographic Data Burst Stream on Overclock Trigger
interface CodeBurstProps {
  active: boolean;
}

const CodeBurst: React.FC<CodeBurstProps> = ({ active }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 200;

  const [positions, velocities, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const palette = [
      new THREE.Color('#B7A98F'),
      new THREE.Color('#171717'),
      new THREE.Color('#E5B89B'),
      new THREE.Color('#D4AF37'),
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 0.4;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 0.4;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 0.4;

      const dir = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      ).normalize();

      const speed = 3.0 + Math.random() * 5.0;
      vel[i * 3] = dir.x * speed;
      vel[i * 3 + 1] = dir.y * speed;
      vel[i * 3 + 2] = dir.z * speed;

      const chosenColor = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }

    return [pos, vel, col];
  }, [count]);

  const currentPos = useRef(positions.slice());

  useFrame((_, delta) => {
    if (active && pointsRef.current) {
      const posAttr = pointsRef.current.geometry.attributes.position;
      const array = posAttr.array as Float32Array;

      for (let i = 0; i < count; i++) {
        array[i * 3] += velocities[i * 3] * delta;
        array[i * 3 + 1] += velocities[i * 3 + 1] * delta;
        array[i * 3 + 2] += velocities[i * 3 + 2] * delta;
      }

      posAttr.needsUpdate = true;
    }
  });

  if (!active) return null;

  return (
    <Points ref={pointsRef} positions={currentPos.current} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.14}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.9}
      />
    </Points>
  );
};

// 6. Ambient Data Particles & Node Grid
const AmbientDataNodes: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 80;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.02) * 0.04;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#B7A98F"
        size={0.06}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
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
    <div className="w-full h-full absolute inset-0 pointer-events-auto z-0 opacity-95">
      <Canvas
        camera={{ position: [0, 0, 7.0], fov: 42 }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
      >
        {/* Soft Warm Luxury Studio Lighting */}
        <ambientLight intensity={1.2} color="#FFFDF9" />
        <directionalLight position={[10, 15, 10]} intensity={2.6} color="#FFFDF9" />
        <directionalLight position={[-10, -8, -5]} intensity={1.3} color="#E8E3DA" />
        <pointLight position={[3, -4, 4]} intensity={1.5} color="#B7A98F" />
        <pointLight position={[-3, 4, -2]} intensity={1.0} color="#A8B4B8" />

        <HoloCodeScreen mousePos={mousePos} isPopped={isPopped} onPop={onPop} />
        <FloatingLaptop mousePos={mousePos} />
        <FloatingCodeSymbols />
        <DigitalCore />
        <CodeBurst active={isPopped} />
        <AmbientDataNodes />
      </Canvas>
    </div>
  );
};
