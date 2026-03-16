import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionTitle from './ui/SectionTitle'
import MernSkills from './skills/MernSkills'
import ProgrammingSkills from './skills/ProgrammingSkills'
import DataScienceSkills from './skills/DataScienceSkills'
import ToolsSkills from './skills/ToolsSkills'

const tabs = [
  { id: 'mern', label: 'MERN Stack' },
  { id: 'languages', label: 'Programming Languages' },
  { id: 'datascience', label: 'Data Science & ML' },
  { id: 'tools', label: 'Tools & Platforms' },
]

const panelMotion = {
  initial: { opacity: 0, y: 16, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -12, scale: 0.98 },
  transition: { duration: 0.3, ease: 'easeOut' },
}

export default function TechnicalSkills() {
  const [activeTab, setActiveTab] = useState('mern')

  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-violet-600/10 rounded-full blur-[130px]" />
      </div>

      <div className="section-container relative z-10">
        <SectionTitle
          overline="What I Know"
          title="Technical "
          highlight="Skills"
          subtitle="Stack-focused skills grouped by role so you can quickly explore what I build with day to day."
          center
        />

        <div className="mb-10 flex justify-center">
          <div className="w-full max-w-5xl rounded-2xl border border-white/10 bg-slate-900/40 p-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300
                      ${isActive
                        ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-glow'
                        : 'bg-slate-900/70 text-slate-400 hover:bg-slate-800 hover:text-slate-200'}
                    `}
                  >
                    {tab.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'mern' && (
              <motion.div key="mern" {...panelMotion}>
                <MernSkills />
              </motion.div>
            )}

            {activeTab === 'languages' && (
              <motion.div key="languages" {...panelMotion}>
                <ProgrammingSkills />
              </motion.div>
            )}

            {activeTab === 'datascience' && (
              <motion.div key="datascience" {...panelMotion}>
                <DataScienceSkills />
              </motion.div>
            )}

            {activeTab === 'tools' && (
              <motion.div key="tools" {...panelMotion}>
                <ToolsSkills />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
