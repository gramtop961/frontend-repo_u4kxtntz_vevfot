import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export default function ProjectCard({ title, description, tags = [], href }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group block p-6 rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
      whileHover={{ scale: 1.01 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-950">{title}</h3>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
        <ExternalLink className="text-gray-400 group-hover:text-gray-700" size={18} />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">{t}</span>
        ))}
      </div>
    </motion.a>
  )
}
