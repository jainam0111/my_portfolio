'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence } from 'framer-motion'
import LiquidEther from '@/components/LiquidEther'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'
import styles from './work.module.css'

const projects = [
  {
    num: '01',
    title: 'Cipher Vault',
    category: 'Security System',
    description: 'A robust password security tool built with advanced encryption architecture. Protects credentials with military-grade cipher systems and zero-knowledge design.',
    color: '#eab308',
    link: null,
  },
  {
    num: '02',
    title: 'Skate Labs',
    category: 'Web Development',
    description: 'A modern, high-performance website for Skate Labs India. Built for visual impact, speed, and a seamless experience that represents the brand authentically.',
    color: '#a0a0a0',
    link: 'https://skate-labs-india.vercel.app/',
  },
  {
    num: '03',
    title: 'N8N Automation',
    category: 'AI Automation',
    description: 'Advanced automation workflows orchestrated with N8N. Connecting APIs, AI services, and business logic into seamless, intelligent pipelines that run 24/7.',
    color: '#3b82f6',
    link: null,
  },
  {
    num: '04',
    title: 'Go Parking',
    category: 'Web Development',
    description: 'A high-credibility web presence designed for investors and enterprise clients. Trust-driven structure, modern typography, and clean visual hierarchy.',
    color: '#22c55e',
    link: null,
  },
]

export default function WorkPage() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <main className={`main-content ${!loading ? 'visible' : ''}`}>
        <LiquidEther />

        <Link href="/" className={styles.backLink}>← Back</Link>

        <section className={styles.workPage}>
          <div className={styles.pageHeader}>
            <span className={styles.label}>Selected Work</span>
            <h1 className={styles.pageTitle}>PROJECTS</h1>
          </div>

          <div className={styles.projectList}>
            {projects.map((project) => (
              <div
                key={project.num}
                className={styles.projectRow}
                style={{ '--row-color': project.color } as React.CSSProperties}
              >
                <div className={styles.rowRule} />
                <div className={styles.rowInner}>
                  <span className={styles.rowNum}>{project.num}</span>
                  <div className={styles.rowBody}>
                    <div className={styles.rowTop}>
                      <span className={styles.rowCategory}>{project.category}</span>
                    </div>
                    <h2 className={styles.rowTitle}>{project.title}</h2>
                    <p className={styles.rowDesc}>{project.description}</p>
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.rowLink}
                      >
                        <span>View Project</span>
                        <span className={styles.rowArrow}>↗</span>
                      </a>
                    ) : (
                      <div className={styles.rowAccent} />
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div className={styles.rowRule} />
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
