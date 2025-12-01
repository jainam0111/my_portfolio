'use client'

import { useEffect, useState } from 'react'
import styles from './Identity.module.css'

const texts = [
  "Building intelligent experiences with creativity, precision, and emotion.",
  "Crafting AI solutions that blend technology with human touch.",
  "Creating seamless digital experiences through innovation and design."
]

export default function Identity() {
  const [mounted, setMounted] = useState(false)
  const [displayText, setDisplayText] = useState(texts[0])
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const currentText = texts[textIndex]
    const typingSpeed = isDeleting ? 30 : 50
    const pauseDuration = 3000

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setDisplayText(currentText.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentText.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setTextIndex((textIndex + 1) % texts.length)
      }
    }, isDeleting ? typingSpeed : (charIndex === currentText.length ? pauseDuration : typingSpeed))

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, textIndex, mounted])

  return (
    <section className={styles.identity}>
      <p className={styles.identityText}>
        {displayText}
        <span className={styles.cursor}>|</span>
      </p>
    </section>
  )
}
