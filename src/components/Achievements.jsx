/*
  Achievements.jsx — Extracurricular achievements & activities section
*/

import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import SectionTitle from './ui/SectionTitle'
import Badge from './ui/Badge'
import { useScrollAnimation, staggerContainerVariants, staggerItemVariants } from '../hooks/useScrollAnimation'
import { achievements } from '../data/achievements'

const badgeVariant = {
  Leadership: 'primary',
  Technical:  'cyan',
  Achievement:'orange',
  Research:   'violet',
}

/* ── Single achievement card ── */
function AchievementCard({ item }) {
  return (
    <motion.div
      variants={staggerItemVariants}
      className="relative group flex flex-col rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-primary-500/40 hover:bg-white/8 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
    >
      {/* Gradient border top strip */}
      <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${item.color}`} />

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className={`
          w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0
        `}
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          {item.icon}
        </div>
        <Badge variant={badgeVariant[item.badge] ?? 'default'} size="sm">
          {item.badge}
        </Badge>
      </div>

      {/* Title and organization */}
      <h3 className="text-sm font-bold text-white mb-1 group-hover:text-primary-300 transition-colors leading-snug">
        {item.title}
      </h3>
      <p className="text-xs text-primary-400 font-medium mb-1">{item.organization}</p>
      <p className="text-[11px] text-slate-500 font-mono mb-3">{item.duration}</p>

      {/* Description */}
      <p className="text-xs text-slate-400 leading-relaxed mb-4">{item.description}</p>

      {/* Highlights */}
      <ul className="space-y-1.5 mt-auto">
        {item.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-xs text-slate-400">
            <FiCheckCircle size={11} className="text-emerald-400 mt-0.5 flex-shrink-0" />
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

/* ── Main Achievements Component ── */
export default function Achievements() {
  const { ref, controls } = useScrollAnimation({ threshold: 0.05 })

  return (
    <section id="achievements" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-primary-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        <SectionTitle
          overline="Beyond Code"
          title="Achievements & "
          highlight="Activities"
          subtitle="Leadership, research, and community contributions that shape me as a developer and professional."
          center
        />

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={staggerContainerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {achievements.map((item) => (
            <AchievementCard key={item.id} item={item} />
          ))}
        </motion.div>

        {/* Highlight row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            { icon: '🏆', label: 'Hackathons Organized', value: '3+', color: 'text-yellow-400' },
            { icon: '👨‍🏫', label: 'Developers Mentored', value: '30+', color: 'text-cyan-400' },
            { icon: '📱', label: 'Social Audience Built', value: '135K+', color: 'text-violet-400' },
          ].map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-primary-500/30 transition"
            >
              <span className="text-3xl">{s.icon}</span>
              <div>
                <div className={`text-2xl font-black ${s.color}`}>{s.value}</div>
                <div className="text-xs text-slate-400">{s.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
