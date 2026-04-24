'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import LiquidEther from '@/components/LiquidEther'
import Hero from '@/components/Hero'
import Identity from '@/components/Identity'
import Work from '@/components/Work'
import About from '@/components/About'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'
import { usePerformanceTier } from '@/lib/usePerformanceTier'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const tier = usePerformanceTier()

  // Track mobile so we can avoid mounting WebGL/heavy components on phones
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // WebGL is desktop-only. Low-tier desktops are also excluded.
  const showWebGL = !loading && !isMobile && tier !== 'low'

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      <main className={`main-content ${!loading ? 'visible' : ''}`}>
        {showWebGL && (
          <LiquidEther pixelRatioCap={tier === 'high' ? 1.5 : 1.0} />
        )}
        <Hero />
        <Identity />
        <Work />
        <About />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
