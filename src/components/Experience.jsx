/*
  Experience.jsx — Professional experience timeline section
  Animated vertical timeline with role cards.
*/

import { motion } from 'framer-motion'
import { FiExternalLink, FiMapPin, FiCalendar, FiBriefcase, FiCheckCircle } from 'react-icons/fi'
import SectionTitle from './ui/SectionTitle'
import Badge from './ui/Badge'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { experiences } from '../data/experience'

/* ── Single timeline entry ── */
function TimelineCard({ exp, index, isLast }) {
  const { ref, controls } = useScrollAnimation({ threshold: 0.2 })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: isEven ? -50 : 50 },
        visible: {
          opacity: 1, x: 0,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 },
        },
      }}
      className={`relative flex gap-6 md:gap-8 md:w-1/2 ${isEven ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'}`}
    >
      {/* ── Timeline connector dot (mobile: left side; desktop: center) ── */}
      <div className="flex flex-col items-center md:hidden">
        {/* Dot */}
        <div className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${exp.dotColor} shadow-glow-sm`} />
        {/* Vertical line */}
        {!isLast && <div className="w-px flex-1 bg-white/10 mt-1" />}
      </div>

      {/* Card */}
      <div className="flex-1 mb-10">
        <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary-500/40 hover:bg-white/8 hover:shadow-card-hover transition-all duration-300 group">

          {/* Gradient accent bar on left */}
          <div className={`absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-gradient-to-b ${exp.color}`} />

          {/* Header row */}
          <div className="flex flex-wrap items-start justify-between gap-3 mb-4 pl-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">{exp.icon}</span>
              <div>
                <h3 className="text-base font-bold text-white leading-tight group-hover:text-primary-300 transition-colors">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-1 mt-0.5">
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary-400 hover:text-primary-300 transition flex items-center gap-1"
                  >
                    {exp.company}
                    {exp.companyUrl !== '#' && <FiExternalLink size={11} />}
                  </a>
                </div>
              </div>
            </div>

            <Badge variant={exp.type === 'Professional' ? 'primary' : 'cyan'} size="sm">
              {exp.type}
            </Badge>
          </div>

          {/* Meta row */}
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400 mb-4 pl-4">
            <span className="flex items-center gap-1">
              <FiCalendar size={11} className="text-slate-500" />
              {exp.duration}
            </span>
            <span className="flex items-center gap-1">
              <FiMapPin size={11} className="text-slate-500" />
              {exp.location}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-400 leading-relaxed mb-4 pl-4">{exp.description}</p>

          {/* Responsibilities */}
          <ul className="space-y-2 mb-5 pl-4">
            {exp.responsibilities.map((r) => (
              <li key={r} className="flex items-start gap-2 text-sm text-slate-400">
                <FiCheckCircle size={13} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>{r}</span>
              </li>
            ))}
          </ul>

          {/* Skill tags */}
          <div className="flex flex-wrap gap-1.5 pl-4">
            {exp.skills.map((s) => (
              <span
                key={s}
                className="px-2.5 py-0.5 text-[10px] font-mono rounded-full bg-white/5 border border-white/10 text-slate-300 hover:border-primary-500/40 hover:text-primary-300 transition"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Main Experience Component ── */
export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-900/8 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        <SectionTitle
          overline="Where I've Worked"
          title="Work "
          highlight="Experience"
          subtitle="My professional journey across software development, AI, digital strategy, and audience growth."
          center
        />

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Center vertical line — desktop only */}
          <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-white/10 to-transparent" />

          {/* Center dots on the line */}
          {experiences.map((exp, i) => (
            <div
              key={`dot-${exp.id}`}
              className="hidden md:block absolute left-1/2 -translate-x-1/2"
              style={{ top: `${(i / (experiences.length - 1)) * 85 + 5}%` }}
            >
              <div className={`w-4 h-4 rounded-full border-2 border-[#050816] ${exp.dotColor} shadow-glow-sm`} />
            </div>
          ))}

          {/* Experience cards */}
          <div className="space-y-0 md:space-y-6">
            {experiences.map((exp, i) => (
              <TimelineCard
                key={exp.id}
                exp={exp}
                index={i}
                isLast={i === experiences.length - 1}
              />
            ))}
          </div>
        </div>

        {/* CTA — looking for work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10">
            <FiBriefcase size={18} className="text-primary-400" />
            <p className="text-sm text-slate-300">
              Open to <span className="text-primary-300 font-medium">full-time and internship</span> opportunities
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-primary-600 to-violet-600 text-white text-xs font-semibold hover:shadow-glow transition-all"
            >
              Let&apos;s Talk
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
