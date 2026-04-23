"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useDevice } from "@/lib/use-device"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  xOffset: number // Pre-calculate random offset to avoid issues with iOS
}

export function FloatingParticles({ count = 50 }: { count?: number }) {
  const { isIOS, isMobile } = useDevice()
  const [particles, setParticles] = useState<Particle[]>([])
  
  // Reduce particle count on iOS/mobile for better performance
  const adjustedCount = isIOS || isMobile ? Math.min(count, 25) : count

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: adjustedCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      xOffset: Math.random() * 20 - 10, // Pre-calculate to avoid render-time randomness
    }))
    setParticles(newParticles)
  }, [adjustedCount])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, rgba(255,150,80,0.8), rgba(255,120,50,0.4))`,
            boxShadow: `0 0 ${particle.size * 2}px rgba(255,120,50,0.3)`,
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
            transform: "translateZ(0)",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, particle.xOffset, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
