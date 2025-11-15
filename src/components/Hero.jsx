import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/90" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 z-10 grid md:grid-cols-2 gap-8 w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="py-28 md:py-40">
          <p className="text-sm uppercase tracking-widest text-gray-600">Designer • Developer • Creator</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Building playful, modern web experiences
          </h1>
          <p className="mt-4 text-gray-700 text-lg md:text-xl max-w-xl">
            I craft interactive products with thoughtful design, clean code, and delightful motion.
          </p>
          <div className="mt-8 pointer-events-auto flex items-center gap-3">
            <a href="#projects" className="inline-flex items-center px-5 py-3 rounded-full bg-gray-900 text-white hover:bg-black transition-colors">View Work</a>
            <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-full border border-gray-300 hover:border-gray-400 bg-white/80 backdrop-blur">Get in touch</a>
          </div>
        </motion.div>

        <div className="hidden md:block" />
      </div>
    </section>
  )
}
