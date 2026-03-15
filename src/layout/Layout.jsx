/*
  Layout.jsx — Main page wrapper
  Wraps all sections with the global dark background, the Navbar,
  a ScrollToTop button, and any shared decorative layers.
*/

import Navbar from '../components/Navbar'
import ScrollToTop from '../components/ScrollToTop'

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-[#050816] text-slate-200 overflow-x-hidden">
      {/* ── Global ambient glows (non-interactive decoration) ── */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        {/* Top-left violet blob */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-600/20 rounded-full blur-[120px]" />
        {/* Bottom-right cyan blob */}
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-600/15 rounded-full blur-[120px]" />
        {/* Center faint glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-900/5 rounded-full blur-[100px]" />
      </div>

      {/* ── Sticky navigation ── */}
      <Navbar />

      {/* ── Page content ── */}
      <main className="relative z-10">
        {children}
      </main>

      {/* ── Floating scroll-to-top button ── */}
      <ScrollToTop />
    </div>
  )
}
