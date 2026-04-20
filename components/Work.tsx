'use client'

import styles from './Work.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface WorkItemData {
  title: string
  category: string
  year: string
  description: string
  tags: string[]
  color: string
  url?: string
}

const workData: WorkItemData[] = [
  {
    title: 'Cipher Vault',
    category: 'Security System',
    year: '2024 – 2025',
    description: 'A robust password security tool built with advanced encryption architecture. Protects credentials with military-grade cipher systems and zero-knowledge design.',
    tags: ['Encryption', 'Zero-Knowledge', 'Security'],
    color: '#eab308',
  },
  {
    title: 'Skate Labs',
    category: 'Web Development',
    year: '2024 – 2025',
    description: 'A modern, high-performance website for Skate Labs India. Built for visual impact, speed, and a seamless experience that represents the brand authentically.',
    tags: ['Next.js', 'Motion', 'Branding'],
    color: '#a0a0a0',
    url: 'https://skate-labs-india.vercel.app/',
  },
  {
    title: 'N8N Automation',
    category: 'AI Automation',
    year: '2025 – 2026',
    description: 'Advanced automation workflows orchestrated with N8N. Connecting APIs, AI services, and business logic into seamless, intelligent pipelines that run 24/7.',
    tags: ['N8N', 'AI Agents', 'Pipelines'],
    color: '#3b82f6',
  },
  {
    title: 'Go Parking',
    category: 'Web Development',
    year: '2024 – 2025',
    description: 'A high-credibility web presence designed for investors and enterprise clients. Trust-driven structure, modern typography, and clean visual hierarchy.',
    tags: ['Next.js', 'UI/UX', 'Enterprise'],
    color: '#22c55e',
  },
]

const variants = {
  enter: { opacity: 0, y: 24 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 },
}

export default function Work() {
  const [current, setCurrent] = useState(0)
  const item = workData[current]

  const prev = () => setCurrent((c) => (c - 1 + workData.length) % workData.length)
  const next = () => setCurrent((c) => (c + 1) % workData.length)

  return (
    <section className={styles.workSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>WORK</h2>
      </div>

      <div className={styles.cardWrap}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className={styles.card}
            style={{ '--card-color': item.color } as React.CSSProperties}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Left panel */}
            <div className={styles.cardLeft}>
              <div className={styles.cardMeta}>
                <span className={styles.cardNum}>0{current + 1}</span>
                <span className={styles.cardSlash}>/</span>
                <span className={styles.cardTotal}>0{workData.length}</span>
              </div>

              <p className={styles.cardCategoryYear}>
                {item.category}&nbsp;&nbsp;/&nbsp;&nbsp;{item.year}
              </p>

              <h3 className={styles.cardTitle}>{item.title}</h3>

              <div className={styles.cardTags}>
                {item.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>

              <p className={styles.cardDesc}>{item.description}</p>

              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardLink}
                >
                  View Project <span className={styles.linkArrow}>↗</span>
                </a>
              )}
            </div>

            {/* Right panel */}
            <div className={styles.cardRight}>
              <div className={styles.cardVisual} />
              <div className={styles.visualGrid} />
              <span className={styles.visualNum}>0{current + 1}</span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className={styles.nav}>
          <button className={styles.navBtn} onClick={prev} aria-label="Previous">←</button>
          <button className={styles.navBtn} onClick={next} aria-label="Next">→</button>
        </div>

        {/* Dots */}
        <div className={styles.dots}>
          {workData.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
