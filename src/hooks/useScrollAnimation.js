/*
  useScrollAnimation.js — Custom hook for scroll-triggered animations
  Uses Framer Motion's useInView to detect when an element enters the viewport.

  Usage:
    const { ref, controls } = useScrollAnimation()
    <motion.div ref={ref} animate={controls} variants={fadeUpVariants} />
*/

import { useEffect, useRef } from 'react'
import { useInView, useAnimation } from 'framer-motion'

/**
 * @param {Object} options
 * @param {number} options.threshold  — fraction of element visible before triggering (0–1)
 * @param {boolean} options.once      — trigger animation only once
 * @param {string} options.margin     — rootMargin equivalent for inView
 */
export function useScrollAnimation({ threshold = 0.1, once = true, margin = '-50px' } = {}) {
  const ref = useRef(null)
  const controls = useAnimation()

  // useInView returns true when the ref element enters the viewport
  const isInView = useInView(ref, {
    once,
    margin,
    amount: threshold,
  })

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    } else if (!once) {
      controls.start('hidden')
    }
  }, [isInView, controls, once])

  return { ref, controls, isInView }
}

/* ── Pre-defined animation variants reused across sections ── */

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const slideInLeftVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export const slideInRightVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

// Stagger container — children animate one after another
export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}
