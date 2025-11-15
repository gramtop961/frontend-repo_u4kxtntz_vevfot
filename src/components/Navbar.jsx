import { useState } from 'react'
import { Menu, X, Download, Mail } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex h-16 items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-gray-900 text-lg">My Portfolio</a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-gray-600 hover:text-gray-900 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-black transition-colors">
            <Mail size={16} /> Contact
          </a>
          <a href="/resume.pdf" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:border-gray-400 hover:bg-gray-50">
            <Download size={16} /> Resume
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-300">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="py-2 text-gray-700" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <a href="#contact" className="flex-1 text-center bg-gray-900 text-white px-4 py-2 rounded-md">Contact</a>
              <a href="/resume.pdf" className="flex-1 text-center px-4 py-2 rounded-md border border-gray-300">Resume</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
