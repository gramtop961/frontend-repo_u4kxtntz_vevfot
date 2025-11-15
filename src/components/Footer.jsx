export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-black/5 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>© {year} Your Name. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a href="https://github.com" className="hover:text-gray-900">GitHub</a>
          <a href="https://twitter.com" className="hover:text-gray-900">Twitter/X</a>
          <a href="mailto:you@example.com" className="hover:text-gray-900">Email</a>
        </div>
      </div>
    </footer>
  )
}
