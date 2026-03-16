/*
  Hero.jsx — Full-viewport landing section
  Features:
  - Animated background orbs
  - Profile image + personal branding
  - CTA buttons with smooth section scrolling
  - Social links with React Icons
*/

import { motion } from 'framer-motion'
import { FiArrowDown, FiDownload } from 'react-icons/fi'
import { BsGithub, BsLinkedin, BsTwitterX, BsFacebook } from 'react-icons/bs'
import { scrollToSection } from '../utils/helpers'
import me from '../assets/me.png'

const SOCIALS = [
  {
    icon: BsGithub,
    href: 'https://github.com/kibria-Rafi',
    label: 'GitHub',
    color: 'hover:text-white',
  },
  {
    icon: BsLinkedin,
    href: 'https://www.linkedin.com/in/kibria-rafi/',
    label: 'LinkedIn',
    color: 'hover:text-[#0A66C2]',
  },
  {
    icon: BsTwitterX,
    href: 'https://x.com/KibriaRafi3',
    label: 'X',
    color: 'hover:text-white',
  },
  {
    icon: BsFacebook,
    href: 'https://www.facebook.com/kibriarafi6540/',
    label: 'Facebook',
    color: 'hover:text-[#1877F2]',
  },
]

function FloatingOrb({ size, color, x, y, delay, duration }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${color}`}
      style={{ width: size, height: size, left: x, top: y }}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
        opacity: [0.4, 0.6, 0.4],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

export default function Hero() {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 cyber-bg opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_40%,#050816_100%)]" />

        <FloatingOrb size={500} color="bg-primary-600/20" x="60%" y="10%" delay={0} duration={8} />
        <FloatingOrb size={400} color="bg-cyan-600/15" x="-5%" y="30%" delay={1.5} duration={10} />
        <FloatingOrb size={300} color="bg-violet-600/20" x="75%" y="55%" delay={3} duration={9} />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="section-container relative z-10 flex flex-col items-center text-center py-28 lg:py-40"
      >
        <motion.div variants={item} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Available for opportunities
          </span>
        </motion.div>

        <motion.div variants={item} className="mb-6">
          <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full p-[3px] bg-gradient-to-r from-primary-500 via-cyan-400 to-violet-500 shadow-glow">
            <img
              src={me}
              alt="G M Kibria Rafi"
              className="w-full h-full rounded-full object-cover bg-[#050816]"
            />
          </div>
        </motion.div>

        <motion.p variants={item} className="text-base font-mono text-slate-400 mb-2">
          Hello World! I&apos;m
        </motion.p>

        <motion.h1
          variants={item}
          className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-4"
        >
          G M Kibria <span className="gradient-text">Rafi</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-200 mb-6"
        >
          Software Engineer | MERN Stack Developer | Data Science Enthusiast
        </motion.p>

        <motion.p
          variants={item}
          className="max-w-2xl text-base sm:text-lg text-slate-400 leading-relaxed mb-10"
        >
          Building scalable full-stack web applications and data-driven solutions with
          modern JavaScript, Python, and machine learning tools.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <motion.button
            onClick={() => scrollToSection('skills')}
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(99,102,241,0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-violet-600 text-white font-semibold text-sm shadow-glow flex items-center gap-2"
          >
            <span>View Skills</span>
            <FiArrowDown size={16} className="rotate-[-45deg]" />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-7 py-3.5 rounded-xl border border-primary-500/50 text-primary-300 bg-transparent font-semibold text-sm hover:border-primary-400 hover:text-white hover:bg-primary-500/10 transition-all duration-300"
          >
            Contact Me
          </motion.button>

          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-7 py-3.5 rounded-xl border border-cyan-500/40 text-cyan-300 bg-transparent font-semibold text-sm hover:border-cyan-400 hover:text-white hover:bg-cyan-500/10 transition-all duration-300 flex items-center gap-2"
          >
            <FiDownload size={15} />
            Resume
          </motion.a>
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-4">
          {SOCIALS.map(({ icon: Icon, href, label, color }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className={`w-11 h-11 rounded-xl flex items-center justify-center text-slate-400 bg-white/5 border border-white/10 transition-all duration-200 ${color} hover:border-white/20 hover:bg-white/10`}
            >
              <Icon size={19} />
            </motion.a>
          ))}

          <div className="h-px w-12 bg-white/10" />
          <span className="text-xs font-mono text-slate-500">Connect</span>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={() => scrollToSection('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-primary-400 transition-colors"
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
          <FiArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  )
}
