import { useEffect, useState } from 'react'

export default function ParallaxScroll({ factor = 0.15, children }) {
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * factor)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [factor])

  return (
    <div style={{ transform: `translateY(${offset}px)` }}>
      {children}
    </div>
  )
}
