"use client";

import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, PerspectiveCamera, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

const gradientMaterial = new THREE.MeshStandardMaterial({
  color: new THREE.Color("#5C6CFF"),
  emissive: new THREE.Color("#1f264f"),
  roughness: 0.35,
  metalness: 0.45,
});

function AuroraSphere() {
  return (
    <mesh scale={[2.2, 2.2, 2.2]} material={gradientMaterial}>
      <icosahedronGeometry args={[1, 1]} />
    </mesh>
  );
}

function RibbonRing() {
  const geometry = useMemo(
    () => new THREE.TorusKnotGeometry(1, 0.22, 120, 16, 2, 3),
    [],
  );

  return (
    <Float
      speed={2}
      rotationIntensity={0.4}
      floatIntensity={0.4}
      floatingRange={[-0.08, 0.08]}
    >
      <mesh geometry={geometry}>
        <meshStandardMaterial
          color="#FF7AE4"
          emissive="#35162f"
          metalness={0.6}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

function DataStream() {
  const points = useMemo(() => {
    const count = 600;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const radius = 1.6 + Math.random() * 0.8;
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 1.2;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = height;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return positions;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach={"attributes-position"}
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        transparent
        opacity={0.75}
        color="#00FFC6"
      />
    </points>
  );
}

export function HeroCanvas() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <Canvas>
        <Suspense fallback={null}>
          <color attach="background" args={["#050510"]} />
          <fog attach="fog" args={["#050510", 5, 18]} />
          <PerspectiveCamera makeDefault position={[0, 0, 7]} />
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[4, 5, 2]}
            intensity={2.2}
            color="#B3C0FF"
          />
          <spotLight
            position={[-5, -5, -3]}
            intensity={0.8}
            color="#FF7AE4"
          />
          <AuroraSphere />
          <RibbonRing />
          <DataStream />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableRotate={false}
            autoRotate
            autoRotateSpeed={0.6}
          />
        </Suspense>
      </Canvas>
    </motion.div>
  );
}
