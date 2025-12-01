'use client'

import { useEffect, useRef } from 'react'
import styles from './LiquidEther.module.css'

export default function LiquidEther() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Liquid Ether implementation will go here
    // For now, we'll use a simple gradient background
    console.log('Liquid Ether initialized')
  }, [])

  return (
    <div ref={containerRef} className={styles.liquidEther}>
      {/* Three.js canvas will be injected here */}
    </div>
  )
}
