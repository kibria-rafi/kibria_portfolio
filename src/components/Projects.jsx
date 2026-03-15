/*
  Projects.jsx — Projects showcase section
  Features:
  - Category filter tabs
  - Animated project cards with hover overlay
  - GitHub & live demo links
  - Featured badge for highlighted projects
*/

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiStar, FiFolder } from 'react-icons/fi'
import SectionTitle from './ui/SectionTitle'
import Badge from './ui/Badge'
import { useScrollAnimation, staggerContainerVariants, staggerItemVariants } from '../hooks/useScrollAnimation'
import { projects, projectCategories } from '../data/projects'

/* ── Filter tab button ── */
function FilterTab({ category, active, onClick, count }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className={`
        relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200
        flex items-center gap-2
        ${active
          ? 'text-white'
          : 'text-slate-400 hover:text-white hover:bg-white/5'}
      `}
    >
      {active && (
        <motion.span
          layoutId="project-filter"
          className="absolute inset-0 rounded-xl bg-primary-500/20 border border-primary-500/40"
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
      )}
      <span className="relative">{category.label}</span>
      <span className={`relative text-[10px] font-mono px-1.5 py-0.5 rounded-full ${active ? 'bg-primary-500/30 text-primary-300' : 'bg-white/5 text-slate-500'}`}>
        {count}
      </span>
    </motion.button>
  )
}

/* ── Single project card ── */
function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      variants={staggerItemVariants}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative group flex flex-col rounded-2xl bg-white/5 border border-white/10 overflow-hidden transition-all duration-300 hover:border-primary-500/50 hover:shadow-card-hover hover:-translate-y-1"
    >
      {/* Card top gradient strip */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.color}`} />

      {/* Card header */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Icon + featured badge */}
        <div className="flex items-start justify-between mb-4">
          <div className={`
            w-12 h-12 rounded-xl flex items-center justify-center text-2xl
            bg-gradient-to-br ${project.color} bg-opacity-20
          `}
            style={{ background: 'rgba(255,255,255,0.06)' }}
          >
            {project.icon}
          </div>
          <div className="flex items-center gap-2">
            {project.featured && (
              <Badge variant="cyan" size="sm">
                <FiStar size={9} /> Featured
              </Badge>
            )}
            <Badge variant="default" size="sm">{project.categoryLabel}</Badge>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 5).map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-white/5 border border-white/10 text-slate-400">
              +{project.tech.length - 5}
            </span>
          )}
        </div>

        {/* Action links */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/8">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors group/link"
          >
            <FiGithub size={14} />
            <span>Code</span>
            <motion.span
              className="opacity-0 group-hover/link:opacity-100"
              animate={hovered ? {} : {}}
            >
              ↗
            </motion.span>
          </a>

          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <FiExternalLink size={14} />
              <span>Live Demo</span>
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-xs text-slate-600 cursor-default">
              <FiFolder size={14} />
              <span>Private / In Progress</span>
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}

/* ── Main Projects Component ── */
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const { ref, controls } = useScrollAnimation({ threshold: 0.05 })

  // Filter projects by selected category
  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  // Count per category for badge display
  const countFor = (catId) =>
    catId === 'all' ? projects.length : projects.filter((p) => p.category === catId).length

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-violet-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        <SectionTitle
          overline="What I've Built"
          title="Featured "
          highlight="Projects"
          subtitle="Real-world projects spanning full-stack web development, machine learning, NLP, and IoT — each solving a meaningful problem."
          center
        />

        {/* ── Filter Tabs ── */}
        <div className="flex flex-wrap justify-center gap-1 mb-10 p-1 rounded-2xl bg-white/3 border border-white/8 w-fit mx-auto">
          {projectCategories.map((cat) => (
            <FilterTab
              key={cat.id}
              category={cat}
              active={activeFilter === cat.id}
              onClick={() => setActiveFilter(cat.id)}
              count={countFor(cat.id)}
            />
          ))}
        </div>

        {/* ── Project Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            ref={ref}
            variants={staggerContainerVariants}
            initial="hidden"
            animate={controls}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-slate-500"
          >
            <p className="text-4xl mb-3">🔍</p>
            <p>No projects in this category yet.</p>
          </motion.div>
        )}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-slate-400 mb-4 text-sm">Want to see more of my work?</p>
          <motion.a
            href="https://github.com/kibria-Rafi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white bg-white/5 hover:bg-white/10 hover:border-primary-500/50 transition-all duration-300 text-sm font-medium"
          >
            <FiGithub size={16} />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
