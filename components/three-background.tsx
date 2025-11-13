"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
  })

  return (
    <mesh ref={meshRef} position={[-2, 0, 0]}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#3b82f6"
        wireframe
        emissive="#3b82f6"
        emissiveIntensity={0.5}
      />
    </mesh>
  )
}

function AnimatedTorus() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15
    meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.25
  })

  return (
    <mesh ref={meshRef} position={[2, 0, 0]}>
      <torusGeometry args={[1, 0.3, 16, 100]} />
      <meshStandardMaterial
        color="#06b6d4"
        wireframe
        emissive="#06b6d4"
        emissiveIntensity={0.5}
      />
    </mesh>
  )
}

export function ThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10 opacity-40">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
        
        <Stars
          radius={100}
          depth={50}
          count={3000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        
        <AnimatedSphere />
        <AnimatedTorus />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}
