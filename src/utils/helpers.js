/*
  helpers.js — General utility functions
*/

/**
 * Smooth-scroll to a section by its element ID.
 * @param {string} id — the target section's HTML id attribute
 */
export function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

/**
 * Clamp a number between min and max.
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

/**
 * Format a number with K/M suffix (e.g. 135000 → "135K")
 * @param {number} num
 */
export function formatNumber(num) {
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`
  if (num >= 1_000) return `${(num / 1_000).toFixed(0)}K`
  return String(num)
}

/**
 * Truncate a string to maxLen characters, appending "…" if needed.
 */
export function truncate(str, maxLen = 120) {
  if (!str || str.length <= maxLen) return str
  return str.slice(0, maxLen).trimEnd() + '…'
}

/**
 * Map a skill level (0–100) to a proficiency label.
 */
export function proficiencyLabel(level) {
  if (level >= 90) return 'Expert'
  if (level >= 80) return 'Advanced'
  if (level >= 65) return 'Proficient'
  return 'Familiar'
}

/**
 * Generate a random integer between min (inclusive) and max (exclusive).
 */
export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

/**
 * Debounce a function call.
 * @param {Function} fn
 * @param {number}   delay  in milliseconds
 */
export function debounce(fn, delay) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

/**
 * Check if the user prefers reduced motion (accessibility).
 */
export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
