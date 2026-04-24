'use client'

import styles from './Work.module.css'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { projects, type Project } from '@/lib/projects'
import { usePerformanceTier, type PerformanceTier } from '@/lib/usePerformanceTier'

function ProjectCard({
  item,
  index,
  count,
  tier,
}: {
  item: Project
  index: number
  count: number
  tier: PerformanceTier
}) {
  // Apply a tier class so CSS can switch between full/medium/lite styles
  const tierClass =
    tier === 'low' ? styles.cardLite : tier === 'medium' ? styles.cardMid : ''

  return (
    <Link
      href={`/work/${item.slug}`}
      className={`${styles.card} ${tierClass}`}
      style={{ '--card-color': '#a0a0a0' } as React.CSSProperties}
    >

      {/* Left panel — Client / Role / Timeline */}
      <div className={styles.cardLeft}>
        <div className={styles.cardMeta}>
          <span className={styles.cardNum}>0{index + 1}</span>
          <span className={styles.cardSlash}>/</span>
          <span className={styles.cardTotal}>0{count}</span>
        </div>

        <h3 className={styles.cardTitle}>{item.title}</h3>

        <p className={styles.cardDesc}>{item.description}</p>

        <div className={styles.panelMeta}>
          <div className={styles.metaRow}>
            <span className={styles.metaLabel}>Client</span>
            <span className={styles.metaValue}>{item.client}</span>
          </div>
          <div className={styles.metaRow}>
            <span className={styles.metaLabel}>Role</span>
            <span className={styles.metaValue}>{item.role}</span>
          </div>
          <div className={styles.metaRow}>
            <span className={styles.metaLabel}>Timeline</span>
            <span className={styles.metaValue}>{item.timeline}</span>
          </div>
        </div>

        <span className={styles.cardLink}>
          View Project <span className={styles.linkArrow}>↗</span>
        </span>
      </div>

      {/* Right panel — Challenge / Solution / Tech */}
      <div className={styles.cardRight}>
        <div className={styles.cardVisual} />
        <div className={styles.visualGrid} />

        <div className={styles.rightContent}>
          <div className={styles.rightBlock}>
            <span className={styles.blockLabel}>The Challenge</span>
            <p className={styles.blockText}>{item.challenge}</p>
          </div>

          <div className={styles.rightBlock}>
            <span className={styles.blockLabel}>The Solution</span>
            <p className={styles.blockText}>{item.solution}</p>
          </div>

          <div className={styles.rightBlock}>
            <span className={styles.blockLabel}>Tech Used</span>
            <div className={styles.techTags}>
              {item.tech.map((t) => (
                <span key={t} className={styles.techTag}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const tier = usePerformanceTier()
  const count = projects.length

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['0vw', `${-(count - 1) * 100}vw`]
  )

  return (
    <section
      ref={containerRef}
      className={styles.workSection}
      style={isMobile ? undefined : { height: `${(count + 1) * 100}vh` }}
    >
      <div className={styles.stickyContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>WORK</h2>
        </div>

        <motion.div className={styles.track} style={isMobile ? undefined : { x }}>
          {projects.map((item, index) => (
            <div key={item.slug} className={styles.slide}>
              <ProjectCard item={item} index={index} count={count} tier={tier} />
            </div>
          ))}
        </motion.div>

        <motion.div
          className={styles.progressBar}
          style={{ scaleX: scrollYProgress }}
        />
      </div>
    </section>
  )
}
