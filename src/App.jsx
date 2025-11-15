import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'

export default function App() {
  const projects = [
    {
      title: 'Interactive 3D Portfolio',
      description: 'A playful personal site powered by Spline and Framer Motion animations.',
      tags: ['React', 'Spline', 'Framer Motion'],
      href: 'https://example.com'
    },
    {
      title: 'Design System Starter',
      description: 'A modern UI kit using Radix primitives and Tailwind styling.',
      tags: ['Radix', 'Tailwind', 'Design System'],
      href: 'https://example.com'
    },
    {
      title: 'Realtime Collaboration',
      description: 'Websocket-powered multiplayer whiteboard with smooth cursors.',
      tags: ['WebSockets', 'Canvas', 'DX'],
      href: 'https://example.com'
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />

        <Section id="about" eyebrow="About" title="Hi, I’m Your Name">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 text-lg leading-relaxed text-gray-700">
              <p>
                I’m a frontend engineer and product designer focused on building crisp, fast, and expressive interfaces. I love blending design and code to make experiences that feel alive.
              </p>
              <p className="mt-4">
                My toolbox includes React, TypeScript, Tailwind, Framer Motion, and 3D tools like Spline. I care about accessibility, performance, and craft.
              </p>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• 6+ years shipping web products</li>
              <li>• Motion and micro-interactions fan</li>
              <li>• Design systems enthusiast</li>
              <li>• Remote-friendly, async-first</li>
            </ul>
          </div>
        </Section>

        <Section id="projects" eyebrow="Work" title="Selected Projects">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let’s build something">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-lg text-gray-700">
              <p>
                I’m open to freelance, collaborations, and full-time roles. Share a few details about your project and I’ll get back to you.
              </p>
              <p className="mt-4">
                Prefer email? Reach me at <a href="mailto:you@example.com" className="underline">you@example.com</a>.
              </p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="bg-white border border-black/5 rounded-2xl p-6 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600">Name</label>
                  <input required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
                </div>
                <div>
                  <label className="block text-sm text-gray-600">Email</label>
                  <input type="email" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-gray-600">Message</label>
                  <textarea rows="4" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
                </div>
              </div>
              <button className="mt-4 inline-flex items-center justify-center w-full sm:w-auto px-5 py-3 rounded-md bg-gray-900 text-white hover:bg-black">
                Send message
              </button>
              <p className="mt-2 text-xs text-gray-500">This demo form doesn’t send yet.</p>
            </form>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
