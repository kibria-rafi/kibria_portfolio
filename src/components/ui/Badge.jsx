/*
  Badge.jsx — Small label/tag chip component
  Used for: skill tags, project categories, status labels.

  Props:
    variant  {string}  — 'primary' | 'cyan' | 'violet' | 'green' | 'orange' | 'default'
    size     {string}  — 'sm' | 'md'
    dot      {boolean} — show a pulsing status dot
    className {string}
*/

const variantMap = {
  primary: 'bg-primary-500/15 border-primary-500/40 text-primary-300',
  cyan:    'bg-cyan-500/15 border-cyan-500/40 text-cyan-300',
  violet:  'bg-violet-500/15 border-violet-500/40 text-violet-300',
  green:   'bg-emerald-500/15 border-emerald-500/40 text-emerald-300',
  orange:  'bg-orange-500/15 border-orange-500/40 text-orange-300',
  default: 'bg-white/5 border-white/15 text-slate-300',
}

const dotColorMap = {
  primary: 'bg-primary-400',
  cyan:    'bg-cyan-400',
  violet:  'bg-violet-400',
  green:   'bg-emerald-400',
  orange:  'bg-orange-400',
  default: 'bg-slate-400',
}

export default function Badge({
  variant = 'default',
  size = 'md',
  dot = false,
  className = '',
  children,
}) {
  const sizeClass = size === 'sm'
    ? 'px-2 py-0.5 text-xs'
    : 'px-3 py-1 text-xs'

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 font-mono font-medium
        border rounded-full transition-colors duration-200
        ${variantMap[variant] ?? variantMap.default}
        ${sizeClass}
        ${className}
      `}
    >
      {/* Optional pulsing status dot */}
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          <span
            className={`
              animate-ping absolute inline-flex h-full w-full rounded-full opacity-75
              ${dotColorMap[variant] ?? dotColorMap.default}
            `}
          />
          <span
            className={`
              relative inline-flex rounded-full h-1.5 w-1.5
              ${dotColorMap[variant] ?? dotColorMap.default}
            `}
          />
        </span>
      )}
      {children}
    </span>
  )
}
