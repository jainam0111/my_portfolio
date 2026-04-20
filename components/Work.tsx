'use client'

import styles from './Work.module.css'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

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

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [trackWidth, setTrackWidth] = useState(0)
  const count = workData.length

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth <= 768)
      if (trackRef.current) {
        setTrackWidth(trackRef.current.scrollWidth - window.innerWidth)
      }
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, -trackWidth])

  return (
    <section
      ref={containerRef}
      className={styles.workSection}
      style={isMobile ? undefined : { height: `${count * 100}vh` }}
    >
      <div className={styles.stickyContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>WORK</h2>
        </div>

        {/* Scrollable track — desktop: scroll-driven x; mobile: CSS scroll-snap */}
        <motion.div
          ref={trackRef}
          className={styles.track}
          style={isMobile ? undefined : { x }}
        >
          {workData.map((item, index) => (
            <div
              key={index}
              className={styles.slide}
            >
              <div
                className={styles.card}
                style={{ '--card-color': item.color } as React.CSSProperties}
              >
                {/* Left panel */}
                <div className={styles.cardLeft}>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardNum}>0{index + 1}</span>
                    <span className={styles.cardSlash}>/</span>
                    <span className={styles.cardTotal}>0{count}</span>
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
                  <span className={styles.visualNum}>0{index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className={styles.progressBar}
          style={{ scaleX: scrollYProgress }}
        />
      </div>
    </section>
  )
}
