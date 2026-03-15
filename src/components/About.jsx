/*
  About.jsx — About section
  Includes professional summary, key stats, education, and quick facts.
*/

import { motion } from 'framer-motion'
import {
  FiMapPin, FiMail, FiPhone, FiCalendar, FiCode, FiAward,
} from 'react-icons/fi'
import { BsGithub, BsLinkedin, BsTwitterX, BsFacebook } from 'react-icons/bs'
import SectionTitle from './ui/SectionTitle'
import Card from './ui/Card'
import {
  useScrollAnimation,
  slideInLeftVariants,
  slideInRightVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from '../hooks/useScrollAnimation'
import { stats } from '../data/experience'
import { education } from '../data/achievements'
import { topSkills } from '../data/skills'
import me from '../assets/me.png'

const SUMMARY = 'Motivated and detail-oriented Software Engineer with strong expertise in Data Science and MERN stack development. Experienced in building scalable web applications using MongoDB, Express.js, React, and Node.js. Skilled in Python data analysis with NumPy, Pandas, Matplotlib, and Scikit-Learn. Passionate about solving real-world problems using technology.'

function StatCard({ stat }) {
  return (
    <motion.div
      variants={staggerItemVariants}
      className="flex flex-col items-center p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-primary-500/40 hover:bg-white/8 transition-all duration-300 group"
    >
      <span className="text-2xl mb-2">{stat.icon}</span>
      <span className="text-3xl font-black gradient-text">{stat.value}</span>
      <span className="text-xs text-slate-400 text-center mt-1">{stat.label}</span>
    </motion.div>
  )
}

export default function About() {
  const { ref: leftRef, controls: leftControls } = useScrollAnimation()
  const { ref: rightRef, controls: rightControls } = useScrollAnimation()
  const { ref: statsRef, controls: statsControls } = useScrollAnimation()

  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        <SectionTitle
          overline="Who I Am"
          title="About "
          highlight="Me"
          subtitle="Software engineer focused on modern full-stack web development and practical data science solutions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            ref={leftRef}
            initial="hidden"
            animate={leftControls}
            variants={slideInLeftVariants}
          >
            <div className="relative mb-8">
              <div className="flex items-start gap-5">
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl p-[2px] bg-gradient-to-r from-primary-500 via-cyan-400 to-violet-500 shadow-glow-sm">
                    <img src={me} alt="G M Kibria Rafi" className="w-full h-full rounded-2xl object-cover" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#050816] flex items-center justify-center">
                    <span className="block w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-0.5">G M Kibria Rafi</h3>
                  <p className="text-sm text-primary-300 font-mono mb-2">@kibriarafi</p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <FiMapPin size={11} className="text-cyan-400" />
                      Bangladesh
                    </span>
                    <span className="text-slate-600">·</span>
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <FiCalendar size={11} className="text-violet-400" />
                      Software Engineer
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-slate-400 leading-relaxed mb-8">
              <p>{SUMMARY}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: FiMail, label: 'Email', value: 'kibriarafi.bd.natore@gmail.com', href: 'mailto:kibriarafi.bd.natore@gmail.com', color: 'text-cyan-400' },
                { icon: FiPhone, label: 'Phone / WhatsApp', value: '+8801407638740', href: 'tel:+8801407638740', color: 'text-violet-400' },
                { icon: FiMapPin, label: 'Location', value: 'Bangladesh', href: '', color: 'text-emerald-400' },
                { icon: FiCode, label: 'Focus', value: 'MERN + Data Science', href: '', color: 'text-primary-400' },
              ].map(({ icon: Icon, label, value, href, color }) => (
                <div key={label} className="flex items-center gap-3 p-3 rounded-xl bg-white/3 border border-white/8">
                  <Icon size={15} className={color} />
                  <div className="min-w-0">
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm text-slate-300 font-medium hover:text-white break-all">{value}</a>
                    ) : (
                      <p className="text-sm text-slate-300 font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <a href="https://github.com/kibria-Rafi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-primary-500/40 text-sm transition-all duration-200">
                <BsGithub size={15} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/kibria-rafi/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-[#0A66C2] hover:border-blue-500/40 text-sm transition-all duration-200">
                <BsLinkedin size={15} /> LinkedIn
              </a>
              <a href="https://x.com/KibriaRafi3" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-white/40 text-sm transition-all duration-200">
                <BsTwitterX size={15} /> X
              </a>
              <a href="https://www.facebook.com/kibriarafi6540/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-[#1877F2] hover:border-blue-500/40 text-sm transition-all duration-200">
                <BsFacebook size={15} /> Facebook
              </a>
            </div>
          </motion.div>

          <motion.div
            ref={rightRef}
            initial="hidden"
            animate={rightControls}
            variants={slideInRightVariants}
            className="space-y-6"
          >
            <motion.div
              ref={statsRef}
              initial="hidden"
              animate={statsControls}
              variants={staggerContainerVariants}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat) => (
                <StatCard key={stat.label} stat={stat} />
              ))}
            </motion.div>

            {education.map((edu) => (
              <Card key={edu.id} hover padding="lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 bg-gradient-to-br ${edu.color} opacity-90`}>
                    {edu.icon}
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Education</span>
                    <h4 className="text-base font-bold text-white leading-snug mt-0.5">{edu.degree}</h4>
                    <p className="text-sm text-primary-300 font-medium">{edu.institution}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                  <span className="flex items-center gap-1"><FiCalendar size={11} />{edu.duration}</span>
                  <span className="flex items-center gap-1"><FiMapPin size={11} />{edu.location}</span>
                </div>

                <p className="text-sm text-slate-400 mb-4 leading-relaxed">{edu.description}</p>

                <div>
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">Key Courses</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((c) => (
                      <span key={c} className="px-2 py-0.5 text-xs rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 font-mono">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}

            <Card hover={false} padding="md">
              <div className="flex items-center gap-2 mb-3">
                <FiAward size={14} className="text-cyan-400" />
                <span className="text-sm font-semibold text-white">Top Technologies</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {topSkills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.08 }}
                    className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-slate-300 hover:border-primary-500/50 hover:text-primary-300 cursor-default transition"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
