/*
  LoadingScreen.jsx — Initial loading animation
  Renders a full-screen branded loader that hides the page until ready.
  Framer Motion AnimatePresence handles the exit transition.

  Props:
    onComplete {fn} — callback fired when user clicks "skip" or auto-timer ends
*/

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  // Simulate loading progress bar
  useEffect(() => {
    const steps = [10, 30, 55, 75, 90, 100]
    const timers = steps.map((target, i) =>
      setTimeout(() => {
        setProgress(target)
        // When progress hits 100, trigger exit after brief pause
        if (target === 100) {
          setTimeout(() => {
            setVisible(false)
            setTimeout(onComplete, 600)
          }, 400)
        }
      }, 250 + i * 320)
    )
    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050816]"
        >
          {/* Radial glow background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-600/20 rounded-full blur-[100px]" />
            <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-cyan-600/10 rounded-full blur-[80px]" />
          </div>

          {/* Logo / Initials */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-8"
          >
            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 w-24 h-24 rounded-full border-2 border-transparent border-t-primary-500 border-r-cyan-400"
            />
            {/* Initials box */}
            <div className="w-24 h-24 rounded-full border border-primary-500/30 bg-dark-800 flex items-center justify-center">
              <span className="font-bold text-2xl gradient-text font-mono">KR</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl font-bold text-white mb-1"
          >
            G M Kibria Rafi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="text-sm text-slate-400 font-mono mb-10"
          >
            Software Engineer | MERN Stack Developer | Data Science Enthusiast
          </motion.p>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '240px' }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="relative"
          >
            <div className="w-60 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary-500 via-cyan-400 to-violet-500 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </div>
            <div className="mt-2 text-right">
              <span className="text-[10px] font-mono text-slate-500">{progress}%</span>
            </div>
          </motion.div>

          {/* Animated dots */}
          <div className="flex gap-1.5 mt-6">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-primary-500"
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
