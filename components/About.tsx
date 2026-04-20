'use client'

import styles from './About.module.css'
import { motion } from 'framer-motion'

const disciplines = [
  {
    num: '01',
    title: 'Creative Development',
    skills: ['React.js', 'Next.js', 'Three.js', 'WebGL', 'GLSL', 'Framer Motion', 'GSAP'],
    desc: '3D interactive interfaces, shader-driven visuals, glitch-themed motion design, and immersive web experiences built at the boundary of art and code.',
  },
  {
    num: '02',
    title: 'Backend & Systems',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'Docker', 'REST APIs', 'Microservices'],
    desc: 'Distributed architectures, fail-safe automations, robust APIs, data pipelines, and high-reliability engineering designed for scale.',
  },
  {
    num: '03',
    title: 'AI & Automation',
    skills: ['N8N', 'LangChain', 'OpenAI API', 'Voice AI', 'NLP', 'Agent Systems', 'ML Pipelines'],
    desc: 'Intelligent agents, NLP-driven systems, workflow automation, and real-time decision engines that reduce friction and amplify capability.',
  },
  {
    num: '04',
    title: 'Cybersecurity',
    skills: ['Threat Intel', 'Dark Web Monitoring', 'Risk Scoring', 'Secure Pipelines', 'Cipher Systems'],
    desc: 'Dark web intelligence tools, automated threat detection, risk scoring systems, and secure data architectures built for adversarial environments.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
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

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>

        {/* ── Intro ─────────────────────────────────── */}
        <motion.div
          className={styles.intro}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.span className={styles.label} variants={fadeUp} custom={0}>
            About
          </motion.span>
          <motion.p className={styles.statement} variants={fadeUp} custom={0.1}>
            I build at the intersection of{' '}
            <span className={styles.accent}>design</span>,{' '}
            <span className={styles.accent}>intelligence</span>, and{' '}
            <span className={styles.accent}>engineering</span> — crafting
            experiences where technology feels intuitive and every detail is deliberate.
          </motion.p>
        </motion.div>

        {/* ── Discipline blocks ─────────────────────── */}
        {disciplines.map((d) => (
          <div key={d.num}>
            <motion.div
              className={styles.divider}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={drawLine}
            />

            <motion.div
              className={styles.block}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <motion.span className={styles.num} variants={fadeUp} custom={0}>
                {d.num}
              </motion.span>

              <div className={styles.blockBody}>
                <motion.h3 className={styles.blockTitle} variants={fadeUp} custom={0.05}>
                  {d.title}
                </motion.h3>

                <motion.p className={styles.skills} variants={fadeUp} custom={0.12}>
                  {d.skills.join(' ; ')}
                </motion.p>

                <motion.p className={styles.desc} variants={fadeUp} custom={0.2}>
                  {d.desc}
                </motion.p>
              </div>
            </motion.div>
          </div>
        ))}

        {/* Final rule */}
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
