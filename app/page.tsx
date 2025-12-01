'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import LiquidEther from '@/components/LiquidEther'
import Hero from '@/components/Hero'
import Identity from '@/components/Identity'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

// Dynamically import LoadingScreen to avoid hydration issues
const LoadingScreen = dynamic(() => import('@/components/LoadingScreen'), {
  ssr: false
})

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null
  }

  return (
    <>
      <LoadingScreen isVisible={loading} />
      
      <main className={`main-content ${!loading ? 'visible' : ''}`}>
        <LiquidEther />
        <Hero />
        <Identity />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
