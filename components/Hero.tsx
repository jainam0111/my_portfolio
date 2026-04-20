'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import styles from './Hero.module.css'

// Dynamically import TextPressure to avoid hydration issues
const TextPressure = dynamic(() => import('./TextPressure'), {
  ssr: false,
  loading: () => <h1 className={styles.heroTitleFallback}>Jainam Bhavsar</h1>
})

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroTitleWrapper}>
          {mounted ? (
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
