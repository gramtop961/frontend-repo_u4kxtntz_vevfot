import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'

export default function PaperPlane() {
  const group = useRef()
  useFrame((_, delta) => {
    group.current.rotation.y += delta * 0.3
  })
  return (
    <Float speed={1.5} floatIntensity={0.8} rotationIntensity={0.5}>
      <group ref={group}>
        <mesh position={[0, 0, 0]} castShadow>
          <coneGeometry args={[0.4, 1.2, 12]} />
          <meshStandardMaterial color="#a7f3d0" emissive="#34d399" emissiveIntensity={0.2} metalness={0.1} roughness={0.4} />
        </mesh>
        <mesh position={[0, -0.05, -0.2]} rotation={[0, 0, Math.PI / 2]}>
          <planeGeometry args={[0.9, 0.5]} />
          <meshStandardMaterial color="#ecfeff" transparent opacity={0.9} />
        </mesh>
      </group>
    </Float>
  )
}
