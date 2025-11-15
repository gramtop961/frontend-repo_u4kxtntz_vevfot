import { motion } from 'framer-motion'

const items = [
  { title: 'Senior Frontend Engineer', org: 'Acme Inc.', period: '2022 — Present', points: ['Led design system', '3D experiences with R3F', 'Perf improvements 40%'] },
  { title: 'Frontend Engineer', org: 'Beta Labs', period: '2020 — 2022', points: ['Built SPA dashboards', 'DX tooling', 'Accessibility champion'] },
  { title: 'B.S. Computer Science', org: 'Tech University', period: '2016 — 2020', points: ['Graphics track', 'OpenGL/Three.js', 'Research assistant'] },
]

export default function ExperienceTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-3 top-0 bottom-0 w-px bg-emerald-900/50" />
      <ul className="space-y-8">
        {items.map((it, i) => (
          <motion.li key={it.title} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="relative pl-10">
            <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.2)]" />
            <h3 className="text-emerald-200 font-semibold">{it.title}</h3>
            <p className="text-emerald-300/80">{it.org} • {it.period}</p>
            <ul className="mt-2 text-emerald-100/80 list-disc list-inside space-y-1">
              {it.points.map(p => <li key={p}>{p}</li>)}
            </ul>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
