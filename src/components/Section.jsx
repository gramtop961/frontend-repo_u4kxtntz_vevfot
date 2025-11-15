import { motion } from 'framer-motion'

export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.5 }}>
          <p className="text-sm uppercase tracking-widest text-gray-600">{eyebrow}</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-gray-900">{title}</h2>
          <div className="mt-8">
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
