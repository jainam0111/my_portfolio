'use client'

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSocial}>
          <a href="https://github.com/jainam0111/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            GitHub
          </a>
          <a href="#" className={styles.socialLink}>LinkedIn</a>
        </div>
        <div className={styles.footerCopy}>© 2025 All rights reserved</div>
      </div>
      <div className={styles.footerGlow}></div>
    </footer>
  )
}
