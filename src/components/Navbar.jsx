/*
  Navbar.jsx — Sticky responsive navigation bar
  Features:
  - Transparent → frosted-glass blur on scroll
  - Highlights the active section link
  - Mobile hamburger drawer
  - Smooth-scroll on link click
*/

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiCode } from 'react-icons/fi'
import { useActiveSection } from '../hooks/useActiveSection'
import { scrollToSection } from '../utils/helpers'

// All navigation items mapped to section IDs
const navLinks = [
  { label: 'About',        id: 'about' },
  { label: 'Skills',       id: 'skills' },
  { label: 'Experience',   id: 'experience' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Contact',      id: 'contact' },
]

const sectionIds = ['hero', ...navLinks.map((l) => l.id)]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useActiveSection(sectionIds)

  // Add frosted-glass when scrolled past 60px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile drawer on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNavClick = (id) => {
    setMobileOpen(false)
    scrollToSection(id)
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? 'bg-[#050816]/90 backdrop-blur-md border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
            : 'bg-transparent border-b border-transparent'}
        `}
      >
        <nav className="section-container flex items-center justify-between h-16 lg:h-18">
          {/* ── Logo / Brand ── */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2 group"
            aria-label="Go to top"
          >
            <div className="
              w-9 h-9 rounded-lg bg-gradient-to-br from-primary-600 to-violet-600
              flex items-center justify-center shadow-glow-sm
              group-hover:shadow-glow transition-all duration-300
            ">
              <FiCode size={16} className="text-white" />
            </div>
            <span className="font-bold text-base text-white tracking-tight">
              Kibria<span className="gradient-text">.</span>
            </span>
          </button>

          {/* ── Desktop Nav Links ── */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, id }) => (
              <li key={id}>
                <button
                  onClick={() => handleNavClick(id)}
                  className={`
                    relative px-4 py-2 text-sm font-medium rounded-lg
                    transition-all duration-200
                    ${activeSection === id
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'}
                  `}
                >
                  {label}
                  {/* Active indicator pill */}
                  {activeSection === id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg bg-primary-500/15 border border-primary-500/30"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* ── Desktop CTA ── */}
          <div className="hidden md:flex items-center gap-3">
            <motion.button
              onClick={() => handleNavClick('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-primary-600 to-violet-600 text-white shadow-glow-sm hover:shadow-glow transition-all duration-300"
            >
              Hire Me
            </motion.button>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition"
          >
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="
                fixed top-0 right-0 bottom-0 z-50 w-72 md:hidden
                bg-[#080b1a] border-l border-white/10
                flex flex-col pt-20 px-6 pb-8
              "
            >
              {/* Close button */}
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
              >
                <FiX size={20} />
              </button>

              {/* Mobile nav links */}
              <ul className="flex flex-col gap-1 flex-1">
                {navLinks.map(({ label, id }, i) => (
                  <motion.li
                    key={id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  >
                    <button
                      onClick={() => handleNavClick(id)}
                      className={`
                        w-full text-left px-4 py-3 rounded-lg text-sm font-medium
                        transition-all duration-200
                        ${activeSection === id
                          ? 'text-white bg-primary-500/15 border border-primary-500/30'
                          : 'text-slate-400 hover:text-white hover:bg-white/5'}
                      `}
                    >
                      {label}
                    </button>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile CTA */}
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-primary-600 to-violet-600 text-white font-semibold text-sm shadow-glow"
              >
                Hire Me
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
