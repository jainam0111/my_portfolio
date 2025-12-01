'use client'

import { useEffect, useState } from 'react'
import styles from './LoadingScreen.module.css'

interface LoadingScreenProps {
  isVisible: boolean
}

export default function LoadingScreen({ isVisible }: LoadingScreenProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Ease out quart
      const eased = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(eased * 100)
      
      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  }, [isVisible])

  return (
    <div className={`${styles.loadingScreen} ${!isVisible ? styles.hidden : ''}`}>
      <div className={styles.loadingContent}>
        <span className={styles.countUp}>{count}</span>
        <span className={styles.countLabel}>%</span>
      </div>
    </div>
  )
}
