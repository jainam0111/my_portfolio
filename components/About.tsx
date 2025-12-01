'use client'

import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutVisual}>
          <div className={styles.aboutShape}></div>
        </div>
        <div className={styles.aboutContent}>
          <h2 className={styles.sectionTitle}>About</h2>
          <p className={styles.aboutText}>
            I'm a <strong>Creative Developer</strong>, <strong>Backend Engineer</strong>, and <strong>AI/ML Builder</strong> who thrives at the intersection of design, intelligence, and engineering. I specialise in crafting experiences where technology feels intuitive—interfaces that move with purpose, systems that adapt, and automations that remove friction.
          </p>
          <p className={styles.aboutText}>
            With a background in Computer Science Engineering focused on AI & ML, I build solutions that combine deep thinking with clean execution across multiple domains:
          </p>
          <div className={styles.domainsList}>
            <div className={styles.domain}>
              <h3 className={styles.domainTitle}>Creative Development</h3>
              <p className={styles.domainDesc}>3D interactive interfaces, shader-driven visuals, glitch/code-themed motion design, and immersive web experiences.</p>
            </div>
            <div className={styles.domain}>
              <h3 className={styles.domainTitle}>Backend & Systems</h3>
              <p className={styles.domainDesc}>Distributed architectures, fail-safe automations, robust APIs, data pipelines, and high-reliability engineering.</p>
            </div>
            <div className={styles.domain}>
              <h3 className={styles.domainTitle}>AI & Automation</h3>
              <p className={styles.domainDesc}>Intelligent agents, NLP-driven systems, workflow automation, and real-time decision engines.</p>
            </div>
            <div className={styles.domain}>
              <h3 className={styles.domainTitle}>Cybersecurity & Monitoring</h3>
              <p className={styles.domainDesc}>Dark web intelligence tools, automated threat detection, risk scoring systems, and secure data pipelines.</p>
            </div>
          </div>
          <p className={styles.aboutText}>
            I love solving complex problems, experimenting with futuristic UI concepts, and engineering products that stand out through both beauty and intelligence.
          </p>
        </div>
      </div>
    </section>
  )
}
