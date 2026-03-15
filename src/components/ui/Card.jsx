/*
  Card.jsx — Reusable glassmorphism card wrapper

  Props:
    hover    {boolean} — enable lift/glow on hover
    padding  {string}  — 'sm' | 'md' | 'lg'
    className {string}
    onClick  {fn?}
*/

import { motion } from 'framer-motion'

const paddingMap = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export default function Card({
  hover = true,
  padding = 'md',
  className = '',
  onClick,
  children,
}) {
  const base = `
    relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl
    transition-all duration-300
    ${paddingMap[padding] ?? paddingMap.md}
    ${hover ? 'hover:bg-white/8 hover:border-primary-500/40 hover:shadow-card-hover cursor-default' : ''}
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
  `

  if (hover) {
    return (
      <motion.div
        className={base}
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        onClick={onClick}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className={base} onClick={onClick}>
      {children}
    </div>
  )
}
