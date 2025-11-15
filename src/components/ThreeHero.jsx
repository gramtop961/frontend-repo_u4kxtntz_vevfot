import { motion } from 'framer-motion'
import SceneCanvas from './three/SceneCanvas'
import RotatingTorus from './three/RotatingTorus'
import Particles from './three/Particles'
import ParallaxScroll from './three/ParallaxScroll'

export default function ThreeHero() {
  return (
    <section id="home" className="relative pt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="py-10">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-sm uppercase tracking-widest text-emerald-400">
            React • Three.js • Framer Motion
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }} className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Premium 3D Portfolio
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-4 text-emerald-100/90 text-lg md:text-xl max-w-xl">
            Animated hero, particles, parallax scroll, glowing neon accents, and silky-smooth interactions.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="mt-8 flex items-center gap-3">
            <a href="/resume.pdf" className="inline-flex items-center px-5 py-3 rounded-full bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition-colors">Download Resume</a>
            <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-full border border-emerald-300/40 hover:border-emerald-200/60 text-emerald-100">Contact</a>
          </motion.div>
        </div>
        <ParallaxScroll factor={-0.05}>
          <SceneCanvas>
            <Particles />
            <RotatingTorus />
          </SceneCanvas>
        </ParallaxScroll>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-emerald-950 via-gray-950 to-black" />
    </section>
  )
}
