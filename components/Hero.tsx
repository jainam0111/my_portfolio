'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import styles from './Hero.module.css'

// Dynamically import TextPressure to avoid hydration issues + skip its bundle on mobile
const TextPressure = dynamic(() => import('./TextPressure'), {
  ssr: false,
  loading: () => <h1 className={styles.heroTitleFallback}>Jainam Bhavsar</h1>
})

export default function Hero() {
  // Only enable TextPressure on devices with a real pointer (desktop/laptop)
  // Mobile uses the static fallback — no infinite RAF loop, no per-frame layout reads.
  const [enableInteractiveTitle, setEnableInteractiveTitle] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const isMobile = window.innerWidth <= 768
    const hasFinePointer = window.matchMedia?.('(pointer: fine)').matches ?? true
    if (!isMobile && hasFinePointer) {
      setEnableInteractiveTitle(true)
    }
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroTitleWrapper}>
          {enableInteractiveTitle ? (
            <TextPressure
              text="Jainam Bhavsar"
              textColor="#FFFFFF"
              width={true}
              weight={true}
              italic={false}
              alpha={false}
              flex={true}
              stroke={false}
              scale={false}
              minFontSize={48}
            />
          ) : (
            <h1 className={styles.heroTitleFallback}>Jainam Bhavsar</h1>
          )}
        </div>
        <p className={styles.heroSubtitle}>
          <span>Creative Developer</span>
          <span>Backend Engineer</span>
          <span>AI/ML Builder</span>
        </p>

      </div>
      <div className={styles.heroLocation}>Based in India</div>
    </section>
  )
}
