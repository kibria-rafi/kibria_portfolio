/*
  Button.jsx — Reusable button component
  Variants: 'primary' | 'outline' | 'ghost' | 'cyan'

  Props:
    variant   {string}   — visual style
    size      {string}   — 'sm' | 'md' | 'lg'
    href      {string?}  — if set, renders as <a> tag
    external  {boolean}  — opens in new tab (used with href)
    icon      {ReactNode?} — icon rendered before children
    iconRight {ReactNode?} — icon rendered after children
    className {string?}  — extra class overrides
    ...rest   — forwarded to underlying button/a element
*/

import { motion } from 'framer-motion'

const variantStyles = {
  primary:
    'bg-gradient-to-r from-primary-600 to-violet-600 text-white shadow-glow ' +
    'hover:from-primary-500 hover:to-violet-500 hover:shadow-glow-lg border border-primary-500/30',
  outline:
    'border border-primary-500/60 text-primary-300 bg-transparent ' +
    'hover:border-primary-400 hover:text-white hover:bg-primary-500/10',
  ghost:
    'text-slate-300 bg-transparent hover:text-white hover:bg-white/5 border border-transparent',
  cyan:
    'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-glow-cyan ' +
    'hover:from-cyan-500 hover:to-teal-500 border border-cyan-500/30',
}

const sizeStyles = {
  sm: 'px-4 py-2 text-sm rounded-lg gap-1.5',
  md: 'px-6 py-3 text-sm rounded-xl gap-2',
  lg: 'px-8 py-4 text-base rounded-xl gap-2.5',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  icon,
  iconRight,
  className = '',
  children,
  ...rest
}) {
  const baseClasses = `
    inline-flex items-center font-semibold
    transition-all duration-300 hover:scale-105 active:scale-95
    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500
    ${variantStyles[variant] ?? variantStyles.primary}
    ${sizeStyles[size] ?? sizeStyles.md}
    ${className}
  `

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
      {iconRight && <span className="flex-shrink-0">{iconRight}</span>}
    </>
  )

  // Render as anchor when href is provided
  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={baseClasses}
        whileTap={{ scale: 0.95 }}
        {...rest}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={baseClasses}
      whileTap={{ scale: 0.95 }}
      {...rest}
    >
      {content}
    </motion.button>
  )
}
