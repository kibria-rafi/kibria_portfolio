import { motion } from 'framer-motion'

const skills = ['Git', 'GitHub', 'MySQL', 'MongoDB', 'VS Code']

export default function ToolsSkills() {
  return (
    <div className="rounded-2xl border border-violet-500/30 bg-slate-900/40 p-6 sm:p-8">
      <h3 className="text-2xl font-bold text-white">Tools &amp; Platforms</h3>
      <p className="mt-2 text-sm text-slate-400">Daily development tooling for collaboration, versioning, and deployment workflows.</p>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.25 }}
            className="rounded-xl border border-slate-700/70 bg-slate-900/70 px-3 py-2 text-center text-sm font-medium text-slate-200"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
