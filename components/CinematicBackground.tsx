'use client'

import styles from './CinematicBackground.module.css'
import Image from 'next/image'

export default function CinematicBackground() {
    return (
        <div className={styles.backgroundContainer}>
            <Image
                src="/background.png"
                alt="Cinematic Background"
                fill
                quality={100}
                priority
                className={styles.backgroundImage}
            />
            <div className={styles.vignette} />
            <div className={styles.noiseOverlay} />
        </div>
    )
}
