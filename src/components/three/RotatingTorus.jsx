import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function RotatingTorus({ color = '#14b8a6' }) {
  const ref = useRef()
  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.2
    ref.current.rotation.y += delta * 0.3
  })
  return (
    <mesh ref={ref} castShadow position={[0, 0, 0]}>
      <torusKnotGeometry args={[1, 0.3, 256, 64]} />
      <meshStandardMaterial color={color} metalness={0.6} roughness={0.2} />
    </mesh>
  )
}
