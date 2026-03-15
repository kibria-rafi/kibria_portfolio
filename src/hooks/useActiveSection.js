/*
  useActiveSection.js — Tracks which section is currently in the viewport
  Used by the Navbar to highlight the active navigation link.

  Returns the id string of the section currently most visible.

  Usage:
    const activeSection = useActiveSection(['hero', 'about', 'skills', ...])
*/

import { useState, useEffect } from 'react'

/**
 * @param {string[]} sectionIds — array of section element IDs to observe
 * @param {number}   offset     — rootMargin top offset in px (should match navbar height)
 * @returns {string} id of the currently active section
 */
export function useActiveSection(sectionIds, offset = 100) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    // Build one IntersectionObserver per section to track visibility ratios
    const visibilityMap = {}

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap[entry.target.id] = entry.intersectionRatio
        })

        // Pick the section with the highest visible ratio
        let maxRatio = 0
        let mostVisible = activeSection

        Object.entries(visibilityMap).forEach(([id, ratio]) => {
          if (ratio > maxRatio) {
            maxRatio = ratio
            mostVisible = id
          }
        })

        if (maxRatio > 0) {
          setActiveSection(mostVisible)
        }
      },
      {
        // The root margin pushes the trigger point below the navbar
        rootMargin: `-${offset}px 0px -40% 0px`,
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
      }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) {
        observer.observe(el)
        visibilityMap[id] = 0
      }
    })

    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(',')])

  return activeSection
}
