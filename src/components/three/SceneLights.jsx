import { useMemo } from 'react'
import { useThree } from '@react-three/fiber'

export default function SceneLights({ intensity = 1 }) {
  const { viewport } = useThree()
  const lightIntensity = useMemo(() => intensity, [intensity])

  return (
    <>
      <ambientLight intensity={0.4 * lightIntensity} />
      <directionalLight position={[5, 8, 5]} intensity={0.8 * lightIntensity} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      <pointLight position={[-6, 4, -2]} intensity={0.6 * lightIntensity} />
      <spotLight position={[0, 10, 10]} angle={0.3} penumbra={0.5} intensity={0.7 * lightIntensity} castShadow />
    </>
  )
}
