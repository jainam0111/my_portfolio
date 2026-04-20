'use client'

import styles from './Services.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const rotatingWords = ['Build', 'Design', 'Automate', 'Elevate', 'Engineer']

const services = [
  {
    num: '01',
    title: 'Built for Intelligence',
    skills: ['React.js', 'Next.js', 'Three.js', 'WebGL', 'Framer Motion', 'GSAP'],
    desc: 'Interfaces that feel alive. From shader-driven visuals to AI-powered interactions — crafted at the boundary of art and engineering.',
  },
  {
    num: '02',
    title: 'Designed with Purpose',
    skills: ['UI/UX Design', 'Motion Design', 'Brand Identity', 'Figma', 'Prototyping'],
    desc: 'Every pixel intentional. Clean, structured design that communicates trust and drives action without noise.',
  },
  {
    num: '03',
    title: 'Engineered for Scale',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'Docker', 'Microservices'],
    desc: 'Backend systems and APIs built to handle growth — designed for reliability, security, and long-term performance.',
  },
  {
    num: '04',
    title: 'Automated to Perform',
    skills: ['N8N', 'LangChain', 'OpenAI API', 'Voice AI', 'Agent Systems', 'ML Pipelines'],
    desc: 'Intelligent workflows and AI agents that reduce friction, save time, and amplify what your business can do.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

const drawLine = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
}

export default function Services() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length)
    }, 2000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className={styles.services}>
      <div className={styles.container}>

        {/* ── Headline block ─────────────────────────── */}
        <motion.div
          className={styles.headline}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.span className={styles.label} variants={fadeUp} custom={0}>
            What I do
          </motion.span>

          <div className={styles.headingStack}>
            <motion.p className={styles.headingLine} variants={fadeUp} custom={0.08}>
              I'll help you
            </motion.p>

            <motion.div className={styles.rotatingRow} variants={fadeUp} custom={0.16}>
              <div className={styles.rotatingWrapper}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingWords[wordIndex]}
                    className={styles.rotatingWord}
                    initial={{ y: '110%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    exit={{ y: '-110%', opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {rotatingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.p className={styles.headingLine} variants={fadeUp} custom={0.24}>
              your vision.
            </motion.p>
          </div>

          <motion.p className={styles.sub} variants={fadeUp} custom={0.32}>
            Where intelligence meets craft — built for performance,
            designed to stand out, engineered to last.
          </motion.p>
        </motion.div>

        {/* ── Service rows ───────────────────────────── */}
        {services.map((s) => (
          <div key={s.num}>
            <motion.div
              className={styles.divider}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={drawLine}
            />

            <motion.div
              className={styles.row}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <motion.span className={styles.num} variants={fadeUp} custom={0}>
                {s.num}
              </motion.span>

              <div className={styles.rowBody}>
                <motion.h3 className={styles.rowTitle} variants={fadeUp} custom={0.05}>
                  {s.title}
                </motion.h3>
                <motion.p className={styles.rowSkills} variants={fadeUp} custom={0.12}>
                  {s.skills.join(' ; ')}
                </motion.p>
                <motion.p className={styles.rowDesc} variants={fadeUp} custom={0.2}>
                  {s.desc}
                </motion.p>
              </div>
            </motion.div>
          </div>
        ))}

        <motion.div
          className={styles.divider}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={drawLine}
        />

      </div>
    </section>
  )
}
