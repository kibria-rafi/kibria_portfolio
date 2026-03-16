/*
  Footer.jsx — Site footer with navigation and personal social links
*/

import { motion } from 'framer-motion'
import { FiHeart, FiCode, FiArrowUp } from 'react-icons/fi'
import { BsGithub, BsLinkedin, BsTwitterX, BsFacebook } from 'react-icons/bs'
import { scrollToSection } from '../utils/helpers'

const SOCIALS = [
  { icon: BsGithub, href: 'https://github.com/kibria-Rafi', label: 'GitHub' },
  { icon: BsLinkedin, href: 'https://www.linkedin.com/in/kibria-rafi/', label: 'LinkedIn' },
  { icon: BsTwitterX, href: 'https://x.com/KibriaRafi3', label: 'X' },
  { icon: BsFacebook, href: 'https://www.facebook.com/kibriarafi6540/', label: 'Facebook' },
]

const NAV_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Contact', id: 'contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5 bg-[#050816]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <button onClick={() => scrollToSection('hero')} className="flex items-center gap-2 mb-4 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-600 to-violet-600 flex items-center justify-center shadow-glow-sm group-hover:shadow-glow transition">
                <FiCode size={16} className="text-white" />
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                Kibria<span className="gradient-text">.</span>
              </span>
            </button>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Software Engineer | MERN Stack Developer | Data Science Enthusiast
            </p>

            <div className="flex gap-3 mt-5">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 bg-white/5 border border-white/10 hover:text-white hover:border-primary-500/40 transition-all"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">Navigation</p>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
              {NAV_LINKS.map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">Contact</p>
            <div className="space-y-2">
              <a
                href="mailto:kibriarafi.bd.natore@gmail.com"
                className="block text-sm text-slate-400 hover:text-cyan-400 transition-colors break-all"
              >
                kibriarafi.bd.natore@gmail.com
              </a>
              <a
                href="tel:+8801407638740"
                className="block text-sm text-slate-400 hover:text-white transition-colors"
              >
                +8801407638740
              </a>
              <a
                href="https://github.com/kibria-Rafi"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-slate-400 hover:text-white transition-colors"
              >
                github.com/kibria-Rafi
              </a>
            </div>

            <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
              </span>
              Open to opportunities
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
          <p className="text-sm text-slate-500 flex items-center gap-1.5">
            © {year} G M Kibria Rafi. Built with <FiHeart size={12} className="text-red-400 animate-pulse" /> using React & Tailwind CSS.
          </p>

          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 text-xs text-slate-500 hover:text-primary-400 transition-colors font-mono"
          >
            Back to top <FiArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  )
}
