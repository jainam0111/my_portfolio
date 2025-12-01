'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'

export default function Navbar() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLinks}>
        {!isHomePage && <Link href="/" className={styles.navLink}>Home</Link>}
        <Link href="/work" className={styles.navLink}>Work</Link>
      </div>
    </nav>
  )
}
