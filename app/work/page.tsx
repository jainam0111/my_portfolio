'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import LiquidEther from '@/components/LiquidEther'
import Footer from '@/components/Footer'
import styles from './work.module.css'

// Dynamically import LoadingScreen to avoid hydration issues
const LoadingScreen = dynamic(() => import('@/components/LoadingScreen'), {
  ssr: false
})

export default function WorkPage() {
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <LoadingScreen isVisible={loading} />
      
      <main className={`main-content ${!loading ? 'visible' : ''}`}>
        <LiquidEther />
        
        <Link href="/" className={styles.backLink}>
          ← Back
        </Link>
        
        <section className={styles.workPage}>
          <div className={styles.container}>
            <h1 className={styles.title}>Work</h1>
            <p className={styles.subtitle}>Coming Soon</p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
