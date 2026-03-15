/*
  ScrollToTop.jsx — Floating scroll-to-top button
  Appears when the user scrolls past 400px, smoothly fades in/out.
*/

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={scrollUp}
          aria-label="Scroll to top"
          className="
            fixed bottom-8 right-6 z-50
            w-11 h-11 rounded-full
            bg-gradient-to-br from-primary-600 to-violet-600
            text-white shadow-glow
            flex items-center justify-center
            hover:shadow-glow-lg hover:scale-110
            transition-all duration-200 active:scale-95
          "
        >
          <FiArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
