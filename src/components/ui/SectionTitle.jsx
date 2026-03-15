/*
  SectionTitle.jsx — Reusable section heading component
  Displays: overline label, main heading with gradient accent, and optional subtitle.

  Props:
    overline  {string}   — small uppercase label above the heading
    title     {string}   — main heading (can include <br/> for line breaks)
    highlight {string}   — portion of the title rendered with gradient
    subtitle  {string?}  — optional paragraph below
    center    {boolean}  — center-align text (default: false)
*/

import { motion } from 'framer-motion'
import { useScrollAnimation, fadeUpVariants } from '../../hooks/useScrollAnimation'

export default function SectionTitle({ overline, title, highlight, subtitle, center = false }) {
  const { ref, controls } = useScrollAnimation()

  // Build the heading with an optionally highlighted word/phrase
  const renderTitle = () => {
    if (!highlight) return title
    const parts = title.split(highlight)
    return (
      <>
        {parts[0]}
        <span className="gradient-text">{highlight}</span>
        {parts[1]}
      </>
    )
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeUpVariants}
      className={`mb-14 ${center ? 'text-center' : ''}`}
    >
      {/* Overline label */}
      {overline && (
        <div className={`flex items-center gap-3 mb-4 ${center ? 'justify-center' : ''}`}>
          <span className="h-px w-8 bg-gradient-to-r from-primary-500 to-cyan-500 rounded" />
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-cyan-400">
            {overline}
          </span>
          <span className="h-px w-8 bg-gradient-to-r from-cyan-500 to-primary-500 rounded" />
        </div>
      )}

      {/* Main heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
        {renderTitle()}
      </h2>

      {/* Bottom accent bar */}
      <div className={`flex mt-4 ${center ? 'justify-center' : ''}`}>
        <div className="h-1 w-16 rounded-full bg-gradient-to-r from-primary-500 via-cyan-500 to-violet-500" />
      </div>

      {/* Optional subtitle */}
      {subtitle && (
        <p className="mt-5 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
