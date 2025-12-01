'use client'

import styles from './Work.module.css'

const projects = [
  { title: 'Neural Vision System', desc: 'Computer vision & deep learning', tag: 'AI/ML' },
  { title: 'Interactive Experience', desc: 'WebGL shaders & animations', tag: 'WEB' },
  { title: 'Intelligent Chatbot', desc: 'NLP & conversational AI', tag: 'AI' },
  { title: 'Generative Art Engine', desc: 'Algorithmic design & creativity', tag: 'CREATIVE' },
  { title: 'Smart Automation Suite', desc: 'Event tech & IoT integration', tag: 'TECH' },
]

export default function Work() {
  return (
    <section id="work" className={styles.work}>
      <h2 className={styles.sectionTitle}>Featured Work</h2>
      <div className={styles.workGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.workCard}>
            <div className={styles.workImage}>
              <div className={styles.workPlaceholder}>{project.tag}</div>
            </div>
            <h3 className={styles.workTitle}>{project.title}</h3>
            <p className={styles.workDesc}>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
