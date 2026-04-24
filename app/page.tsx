'use client'

import { useState } from 'react'
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
  const tier = usePerformanceTier()

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      <main className={`main-content ${!loading ? 'visible' : ''}`}>
        {/* WebGL background only on capable devices and only after loading */}
        {!loading && tier !== 'low' && (
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
