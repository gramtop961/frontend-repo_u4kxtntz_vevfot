import Navbar from './components/Navbar'
import ThreeHero from './components/ThreeHero'
import Section from './components/Section'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'
import SceneCanvas from './components/three/SceneCanvas'
import SkillsRing from './components/three/SkillsRing'
import ExperienceTimeline from './components/three/ExperienceTimeline'
import PaperPlane from './components/three/PaperPlane'

export default function App() {
  const projects = [
    {
      title: 'Interactive 3D Portfolio',
      description: 'A premium site powered by Three.js, R3F, and Framer Motion.',
      tags: ['React', 'Three.js', 'R3F', 'Framer'],
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
    <div className="min-h-screen bg-black text-emerald-50">
      <Navbar />
      <main>
        <ThreeHero />

        <Section id="about" eyebrow="About" title="Hi, I’m Your Name">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2 text-lg leading-relaxed text-emerald-100/90">
              <p>
                I’m a frontend engineer and creative coder focused on expressive, performant interfaces. I blend React, WebGL, and motion design to craft experiences that feel alive.
              </p>
              <p className="mt-4">
                My toolbox: React, TypeScript, Tailwind, Three.js/React Three Fiber, and Framer Motion. I care about accessibility, performance, and polish.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-900/40 bg-emerald-900/10 p-3">
              <SceneCanvas controls="orbit" camera={{ position: [0, 0.8, 4], fov: 45 }} className="h-64 w-full rounded-xl overflow-hidden">
                <SkillsRing />
              </SceneCanvas>
              <p className="mt-3 text-sm text-emerald-300/80">Rotating skills ring • Hover to explore</p>
            </div>
          </div>
        </Section>

        <Section id="projects" eyebrow="Work" title="Selected Projects">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="Background" title="Experience & Education">
          <div className="grid md:grid-cols-2 gap-10">
            <ExperienceTimeline />
            <div className="rounded-2xl border border-emerald-900/40 bg-emerald-900/10 p-3">
              <SceneCanvas controls="orbit" camera={{ position: [0, 0.8, 4], fov: 45 }} className="h-64 w-full rounded-xl overflow-hidden">
                <PaperPlane />
              </SceneCanvas>
              <p className="mt-3 text-sm text-emerald-300/80">A playful paper plane hovering in 3D</p>
            </div>
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let’s build something">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-lg text-emerald-100/90">
              <p>
                I’m open to freelance, collaborations, and full-time roles. Share a few details about your project and I’ll get back to you.
              </p>
              <p className="mt-4">
                Prefer email? Reach me at <a href="mailto:you@example.com" className="underline decoration-emerald-500">you@example.com</a>.
              </p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="bg-emerald-950/40 border border-emerald-900/40 rounded-2xl p-6 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-emerald-300/80">Name</label>
                  <input required className="mt-1 w-full rounded-md border border-emerald-800/60 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/30" />
                </div>
                <div>
                  <label className="block text-sm text-emerald-300/80">Email</label>
                  <input type="email" required className="mt-1 w-full rounded-md border border-emerald-800/60 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/30" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-emerald-300/80">Message</label>
                  <textarea rows="4" required className="mt-1 w-full rounded-md border border-emerald-800/60 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/30" />
                </div>
              </div>
              <button className="mt-4 inline-flex items-center justify-center w-full sm:w-auto px-5 py-3 rounded-md bg-emerald-500 text-black font-semibold hover:bg-emerald-400">
                Send message
              </button>
              <p className="mt-2 text-xs text-emerald-400/70">This demo form doesn’t send yet.</p>
            </form>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
