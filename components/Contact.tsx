'use client'

import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.contactTitle}>Let's Build Something Extraordinary</h2>
      <a href="mailto:bhavsarjainam@outlook.com" className={styles.contactBtn}>
        <span>Get in Touch</span>
      </a>
    </section>
  )
}
