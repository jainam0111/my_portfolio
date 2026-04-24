'use client'

import { useEffect, useState } from 'react'

export type PerformanceTier = 'low' | 'medium' | 'high'

interface NavigatorWithDeviceInfo extends Navigator {
  deviceMemory?: number
  connection?: { effectiveType?: string; saveData?: boolean }
}

/**
 * Detects device capability and returns a performance tier.
 *
 * - low   : skip WebGL, backdrop filters, stacked drop-shadows, and SVG glow.
 * - medium: keep WebGL but at lower pixel-ratio; single drop-shadow; backdrop blur halved.
 * - high  : all effects on.
 *
 * Signals considered (in order):
 *   1. prefers-reduced-motion                 → low
 *   2. Save-Data header / 2g-3g connection    → low
 *   3. deviceMemory < 4 GB OR hardwareConcurrency < 4 → low
 *   4. Mobile width <= 768                    → medium (no webgl anyway)
 *   5. deviceMemory < 8 GB OR concurrency < 8 → medium
 *   6. otherwise                              → high
 */
export function usePerformanceTier(): PerformanceTier {
  // default to 'medium' on server / first paint so we don't ship heavy stuff before the check
  const [tier, setTier] = useState<PerformanceTier>('medium')

  useEffect(() => {
    const compute = (): PerformanceTier => {
      if (typeof window === 'undefined') return 'medium'

      // 1. User preference — reduced motion always wins
      if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
        return 'low'
      }

      const nav = navigator as NavigatorWithDeviceInfo

      // 2. Data-saver / slow network
      if (nav.connection?.saveData) return 'low'
      const effType = nav.connection?.effectiveType
      if (effType === 'slow-2g' || effType === '2g') return 'low'

      const mem = nav.deviceMemory           // GB, chrome/edge only
      const cores = nav.hardwareConcurrency   // CPU threads
      const isMobile = window.innerWidth <= 768

      // 3. Clearly low-end hardware
      if ((mem !== undefined && mem < 4) || (cores !== undefined && cores < 4)) {
        return 'low'
      }

      // 4. Mobile — always medium at best (no webgl, simpler effects)
      if (isMobile) return 'medium'

      // 5. Mid-range hardware
      if ((mem !== undefined && mem < 8) || (cores !== undefined && cores < 8)) {
        return 'medium'
      }

      return 'high'
    }

    setTier(compute())

    // Re-evaluate on resize (mobile rotation or resize from desktop to small)
    const onResize = () => setTier(compute())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return tier
}
