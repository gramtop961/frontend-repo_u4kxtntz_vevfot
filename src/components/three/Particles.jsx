import { useMemo, useRef } from 'react'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import { useFrame } from '@react-three/fiber'

export default function Particles({ count = 3000 }) {
  const ref = useRef()
  const sphere = useMemo(() => random.inSphere(new Float32Array(count * 3), { radius: 2.5 }), [count])

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial transparent color="#9ae6b4" size={0.01} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  )
}
