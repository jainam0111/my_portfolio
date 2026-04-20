'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
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

export default function Home() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      <main className={`main-content ${!loading ? 'visible' : ''}`}>
        <LiquidEther />
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
