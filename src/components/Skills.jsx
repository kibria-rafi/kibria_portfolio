/*
  Skills.jsx — Skills section
  Displays categorized skill sets with animated progress bars and tech icons.
*/

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  SiReact, SiNodedotjs, SiExpress, SiMongodb,
  SiJavascript, SiPython, SiCplusplus,
  SiNumpy, SiPandas, SiScikitlearn, SiJupyter,
  SiGit, SiMysql, SiFigma, SiFirebase,
  SiTailwindcss, SiGithub, SiHtml5,
} from 'react-icons/si'
import { FaJava, FaCss3Alt } from 'react-icons/fa'
import { FiCpu, FiDatabase, FiCode, FiBarChart2 } from 'react-icons/fi'
import SectionTitle from './ui/SectionTitle'
import {
  useScrollAnimation,
  staggerContainerVariants,
  staggerItemVariants,
  fadeUpVariants,
} from '../hooks/useScrollAnimation'
import { skillCategories } from '../data/skills'

/* ── Icon mapping: skill name → react-icon component ── */
const ICON_MAP = {
  react:    <SiReact className="text-[#61dafb]" />,
  nodejs:   <SiNodedotjs className="text-[#68a063]" />,
  express:  <SiExpress className="text-slate-300" />,
  mongodb:  <SiMongodb className="text-[#4ea94b]" />,
  api:      <FiDatabase className="text-cyan-400" />,
  security: <FiCpu className="text-violet-400" />,
  js:       <SiJavascript className="text-[#f0db4f]" />,
  python:   <SiPython className="text-[#4584b6]" />,
  cpp:      <SiCplusplus className="text-[#659bd3]" />,
  java:     <FaJava className="text-[#e76f00]" />,
  html:     <SiHtml5 className="text-[#e44d26]" />,
  sql:      <FiDatabase className="text-blue-400" />,
  numpy:    <SiNumpy className="text-[#4dabcf]" />,
  pandas:   <SiPandas className="text-[#150458]" />,
  chart:    <FiBarChart2 className="text-cyan-400" />,
  sklearn:  <SiScikitlearn className="text-[#f89939]" />,
  nlp:      <FiCode className="text-violet-400" />,
  jupyter:  <SiJupyter className="text-[#f37626]" />,
  git:      <SiGit className="text-[#f05032]" />,
  vscode:   <FiCode className="text-[#007ACC]" />,
  mysql:    <SiMysql className="text-[#4479a1]" />,
  figma:    <SiFigma className="text-[#f24e1e]" />,
  firebase: <SiFirebase className="text-[#ffca28]" />,
  tailwind: <SiTailwindcss className="text-[#38bdf8]" />,
}

/* ── Single skill row with animated progress bar ── */
function SkillBar({ skill, delay = 0 }) {
  const { ref, isInView } = useScrollAnimation()

  const label =
    skill.level >= 90 ? 'Expert' :
    skill.level >= 80 ? 'Advanced' :
    skill.level >= 65 ? 'Proficient' : 'Familiar'

  return (
    <motion.div
      ref={ref}
      variants={staggerItemVariants}
      className="group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className="text-base">{ICON_MAP[skill.icon] ?? <FiCode className="text-slate-400" />}</span>
          <span className="text-sm font-medium text-slate-200">{skill.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-slate-500 group-hover:text-slate-400 transition">{label}</span>
          <span className="text-xs font-mono text-primary-400">{skill.level}%</span>
        </div>
      </div>

      {/* Progress track */}
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary-500 via-cyan-400 to-violet-500"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  )
}

/* ── Category tab selector ── */
function CategoryTab({ category, active, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className={`
        relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
        ${active
          ? 'text-white'
          : 'text-slate-400 hover:text-white hover:bg-white/5'}
      `}
    >
      {active && (
        <motion.span
          layoutId="skill-tab"
          className="absolute inset-0 rounded-xl bg-primary-500/20 border border-primary-500/40"
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
      )}
      <span className="relative flex items-center gap-2">
        <span>{category.icon}</span>
        <span className="hidden sm:inline">{category.title}</span>
      </span>
    </motion.button>
  )
}

/* ── Main Skills Component ── */
export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id)
  const { ref: containerRef, controls } = useScrollAnimation()
  const { ref: iconRowRef, controls: iconRowControls } = useScrollAnimation()

  const current = skillCategories.find((c) => c.id === activeCategory) ?? skillCategories[0]

  return (
    <section id="skills" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-primary-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        <SectionTitle
          overline="What I Know"
          title="Technical "
          highlight="Skills"
          subtitle="A curated stack of technologies I use daily — from full-stack web development to data science and machine learning."
          center
        />

        {/* ── Category Tabs ── */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-1 p-1 rounded-2xl bg-white/5 border border-white/10">
            {skillCategories.map((cat) => (
              <CategoryTab
                key={cat.id}
                category={cat}
                active={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
              />
            ))}
          </div>
        </div>

        {/* ── Skills Display ── */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          {/* Category header */}
          <div className={`
            flex items-center gap-3 p-5 rounded-2xl mb-8
            bg-gradient-to-r ${current.color} opacity-90
            bg-opacity-10
          `}
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <span className="text-4xl">{current.icon}</span>
            <div>
              <h3 className="text-lg font-bold text-white">{current.title}</h3>
              <p className="text-sm text-slate-400">{current.skills.length} technologies</p>
            </div>
            <div className="ml-auto">
              <div className={`h-px w-20 bg-gradient-to-r ${current.color}`} />
            </div>
          </div>

          {/* Skill bars grid */}
          <motion.div
            ref={containerRef}
            variants={staggerContainerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5"
          >
            {current.skills.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} delay={i * 0.08} />
            ))}
          </motion.div>
        </motion.div>

        {/* ── All Tech Icons Row (decorative) ── */}
        <motion.div
          ref={iconRowRef}
          initial="hidden"
          animate={iconRowControls}
          variants={fadeUpVariants}
          className="mt-16 pt-10 border-t border-white/5"
        >
          <p className="text-center text-xs font-mono text-slate-500 uppercase tracking-widest mb-6">
            Also familiar with
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: <SiGithub />, name: 'GitHub' },
              { icon: <SiHtml5 />, name: 'HTML5' },
              { icon: <FaCss3Alt className="text-blue-400" />, name: 'CSS3' },
              { icon: <SiTailwindcss className="text-cyan-400" />, name: 'Tailwind' },
              { icon: <SiFirebase className="text-yellow-400" />, name: 'Firebase' },
              { icon: <SiMysql className="text-blue-400" />, name: 'MySQL' },
              { icon: <SiFigma className="text-pink-400" />, name: 'Figma' },
            ].map(({ icon, name }) => (
              <motion.div
                key={name}
                whileHover={{ scale: 1.15, y: -3 }}
                className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-white transition cursor-default"
              >
                <span className="text-2xl">{icon}</span>
                <span className="text-[10px] font-mono">{name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
