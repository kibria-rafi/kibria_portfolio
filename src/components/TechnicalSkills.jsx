import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiJavascript,
  SiCplusplus,
  SiArduino,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiGit,
  SiGithub,
  SiMysql,
  SiFirebase,
  SiFigma,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { FiCode, FiCpu, FiDatabase, FiServer, FiShield, FiBarChart2 } from 'react-icons/fi'
import SectionTitle from './ui/SectionTitle'
import { technicalSkillTabs } from '../data/skills'

const TAB_ICON_MAP = {
  stack: <SiReact className="text-cyan-300" />,
  code: <FiCode className="text-violet-300" />,
  chart: <FiBarChart2 className="text-teal-300" />,
  tools: <SiGit className="text-orange-300" />,
  iot: <SiArduino className="text-emerald-300" />,
}

const SKILL_ICON_MAP = {
  mongodb: <SiMongodb className="text-green-400" />,
  express: <SiExpress className="text-slate-100" />,
  react: <SiReact className="text-cyan-300" />,
  node: <SiNodedotjs className="text-green-500" />,
  rest: <FiServer className="text-blue-300" />,
  jwt: <FiShield className="text-violet-300" />,
  python: <SiPython className="text-blue-300" />,
  javascript: <SiJavascript className="text-yellow-300" />,
  c: <FiCode className="text-slate-200" />,
  cplusplus: <SiCplusplus className="text-blue-400" />,
  java: <FaJava className="text-orange-400" />,
  arduino: <SiArduino className="text-cyan-400" />,
  numpy: <SiNumpy className="text-sky-300" />,
  pandas: <SiPandas className="text-indigo-300" />,
  matplotlib: <FiBarChart2 className="text-cyan-300" />,
  sklearn: <SiScikitlearn className="text-orange-300" />,
  ml: <FiCpu className="text-teal-300" />,
  analysis: <FiBarChart2 className="text-violet-300" />,
  git: <SiGit className="text-orange-400" />,
  github: <SiGithub className="text-slate-100" />,
  mysql: <SiMysql className="text-blue-300" />,
  sql: <FiDatabase className="text-cyan-300" />,
  firebase: <SiFirebase className="text-yellow-300" />,
  figma: <SiFigma className="text-pink-300" />,
  vscode: <FiCode className="text-sky-300" />,
  esp32: <FiCpu className="text-emerald-300" />,
  automation: <FiCpu className="text-teal-300" />,
  sensors: <FiCpu className="text-cyan-300" />,
}

const panelMotion = {
  initial: { opacity: 0, y: 18, scale: 0.99 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -14, scale: 0.99 },
  transition: { duration: 0.32, ease: 'easeOut' },
}

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.06,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.24, ease: 'easeOut' },
  },
}

export default function TechnicalSkills() {
  const [activeTab, setActiveTab] = useState(technicalSkillTabs[0]?.id ?? 'mern')
  const activeCategory = technicalSkillTabs.find((tab) => tab.id === activeTab) ?? technicalSkillTabs[0]

  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[760px] h-[380px] bg-primary-600/12 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[620px] h-[300px] bg-cyan-500/8 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        <SectionTitle
          overline="What I Know"
          title="Technical "
          highlight="Skills"
          subtitle="A modern skill matrix with focused stacks, tools, and hardware capabilities."
          center
        />

        <div className="mb-10 flex justify-center">
          <div className="w-full max-w-6xl rounded-2xl border border-white/10 bg-slate-950/50 backdrop-blur-md p-2">
            <div role="tablist" aria-label="Technical skill categories" className="grid grid-cols-5 gap-2">
              {technicalSkillTabs.map((tab) => {
                const isActive = activeTab === tab.id

                return (
                  <motion.button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`skills-panel-${tab.id}`}
                    onClick={() => setActiveTab(tab.id)}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className={`
                      flex items-center justify-center gap-2 rounded-xl px-2 sm:px-3 py-2.5
                      text-sm font-semibold transition-all duration-300
                      ${isActive
                        ? 'bg-gradient-to-r from-primary-600 via-violet-600 to-purple-600 text-white shadow-glow'
                        : 'bg-slate-900/70 text-slate-400 hover:bg-slate-800 hover:text-slate-200'}
                    `}
                  >
                    <span className="text-base sm:text-sm">{TAB_ICON_MAP[tab.tabIcon] ?? <FiCode />}</span>
                    <span className="hidden sm:inline text-xs md:text-sm">{tab.label}</span>
                    <span className="sm:hidden sr-only">{tab.label}</span>
                  </motion.button>
                )
              })}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {activeCategory && (
              <motion.div
                key={activeCategory.id}
                {...panelMotion}
                id={`skills-panel-${activeCategory.id}`}
                role="tabpanel"
                className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5 sm:p-7"
              >
                <div className="mb-6 sm:mb-8 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">{activeCategory.label}</h3>
                    <p className="mt-1.5 text-sm text-slate-400 max-w-2xl">{activeCategory.description}</p>
                  </div>
                  <div className={`hidden sm:block h-1.5 w-20 rounded-full bg-gradient-to-r ${activeCategory.accent}`} />
                </div>

                <motion.div
                  variants={gridVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4"
                >
                  {activeCategory.skills.map((skill) => (
                    <motion.article
                      key={`${activeCategory.id}-${skill.name}`}
                      variants={cardVariants}
                      whileHover={{ y: -4 }}
                      className={`group rounded-2xl p-[1px] bg-gradient-to-br ${activeCategory.accent}`}
                    >
                      <div className="h-full rounded-2xl border border-white/10 bg-slate-950/75 px-4 py-4 backdrop-blur-md transition-colors duration-300 group-hover:bg-slate-900/80">
                        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/80 ring-1 ring-white/10 text-lg">
                          {SKILL_ICON_MAP[skill.icon] ?? <FiCode className="text-slate-200" />}
                        </div>
                        <h4 className="text-sm sm:text-base font-semibold text-slate-100 leading-tight">{skill.name}</h4>
                        <p className="mt-1 text-xs text-slate-400">{skill.note}</p>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
