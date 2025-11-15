import { Suspense } from 'react'
import { Html, useGLTF } from '@react-three/drei'

export function GLTFModel({ url, ...props }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} {...props} />
}

export default function ModelLoader({ url, children, ...props }) {
  return (
    <Suspense fallback={<Html center>Loading 3D…</Html>}>
      {url ? <GLTFModel url={url} {...props} /> : children}
    </Suspense>
  )
}

useGLTF.preload('/models/avatar.glb')
