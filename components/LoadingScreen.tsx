'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './LoadingScreen.module.css'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [step, setStep] = useState(0) // 0: Namaste, 1: Welcome, 2: Counter
  const [count, setCount] = useState(0)

  useEffect(() => {
    const isMobile = window.innerWidth <= 768
    const t = isMobile ? 0.45 : 0.75   // time multiplier — mobile is faster

    const sequence = async () => {
      // Step 0: Namaste
      await new Promise(r => setTimeout(r, 1000 * t))
      setStep(1)

      // Step 1: Welcome
      await new Promise(r => setTimeout(r, 900 * t))
      setStep(2)

      // Step 2: Counter (0-100) — capped at 60 fps
      const duration = 1400 * t
      const startTime = performance.now()
      const frameInterval = 1000 / 60
      let lastFrame = 0

      const animateCount = (now: number) => {
        if (now - lastFrame < frameInterval) {
          requestAnimationFrame(animateCount)
          return
        }
        lastFrame = now

        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 4)
        setCount(Math.floor(eased * 100))

        if (progress < 1) {
          requestAnimationFrame(animateCount)
        } else {
          setTimeout(onComplete, 200)
        }
      }

      requestAnimationFrame(animateCount)
    }

    sequence()
  }, [onComplete])

  return (
    <motion.div
      className={styles.loadingScreen}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="namaste"
            className={styles.greetingContainer}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className={styles.hindiGreeting}>नमस्ते</h1>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="welcome"
            className={styles.greetingContainer}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className={styles.welcomeGreeting}>Welcome</h1>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="counter"
            className={styles.counterContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.loadingContent}>
              <span className={styles.countUp}>{count}</span>
              <span className={styles.countLabel}>%</span>
            </div>
            <div className={styles.progressBar}>
              <motion.div
                className={styles.progressFill}
                style={{ width: `${count}%` }}
              />
            </div>
            <p className={styles.tagline}>Designed. Coded. and Loved By Jainam Bhavsar</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
