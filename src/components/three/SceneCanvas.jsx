import { Canvas } from '@react-three/fiber'
import { OrbitControls, PresentationControls, Environment, ContactShadows } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import SceneLights from './SceneLights'

export default function SceneCanvas({ children, controls = 'presentation', camera = { position: [0, 1.2, 6], fov: 42 }, className = 'h-[70vh] w-full rounded-2xl overflow-hidden' }) {
  return (
    <div className={className}>
      <Canvas shadows dpr={[1, 2]} camera={camera} gl={{ antialias: true }}>
        <color attach="background" args={[0x0a0a0a]} />
        <fog attach="fog" args={[0x0a0a0a, 10, 25]} />
        <SceneLights intensity={1} />
        {controls === 'orbit' && <OrbitControls enablePan={false} enableZoom={false} />}
        {controls === 'presentation' && (
          <PresentationControls global polar={[-0.3, 0.3]} azimuth={[-0.6, 0.6]} config={{ mass: 2, tension: 400 }} snap>
            {children}
          </PresentationControls>
        )}
        {controls === 'none' && children}
        <ContactShadows position={[0, -1.2, 0]} opacity={0.45} scale={10} blur={2.4} far={2.5} />
        <Environment preset="city" />
        <EffectComposer>
          <Bloom intensity={0.6} mipmapBlur luminanceThreshold={0.1} luminanceSmoothing={0.9} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
