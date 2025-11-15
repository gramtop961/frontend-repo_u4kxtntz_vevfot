import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html, Float } from '@react-three/drei'

const skills = [
  { label: 'React', color: '#61dafb' },
  { label: 'Three.js', color: '#8b5cf6' },
  { label: 'Node', color: '#68a063' },
  { label: 'TS', color: '#3178c6' },
  { label: 'Tailwind', color: '#38bdf8' },
  { label: 'Framer', color: '#e11d48' },
]

export default function SkillsRing() {
  const group = useRef()
  useFrame((_, delta) => {
    group.current.rotation.y += delta * 0.2
  })

  return (
    <group ref={group}>
      {skills.map((s, i) => {
        const angle = (i / skills.length) * Math.PI * 2
        const r = 2.2
        const x = Math.cos(angle) * r
        const z = Math.sin(angle) * r
        return (
          <Float key={s.label} speed={1.5} rotationIntensity={0.4} floatIntensity={0.5}>
            <mesh position={[x, 0, z]}>
              <sphereGeometry args={[0.28, 32, 32]} />
              <meshStandardMaterial color={s.color} emissive={s.color} emissiveIntensity={0.2} />
              <Html center distanceFactor={8} wrapperClass="pointer-events-none">
                <span className="text-xs font-semibold text-white drop-shadow">{s.label}</span>
              </Html>
            </mesh>
          </Float>
        )
      })}
    </group>
  )
}
