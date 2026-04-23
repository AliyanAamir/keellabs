"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Sparkle {
  id: number
  x: number
  y: number
  size: number
  delay: number
}

export function Sparkles({ count = 50 }: { count?: number }) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles: Sparkle[] = []
      for (let i = 0; i < count; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          delay: Math.random() * 5,
        })
      }
      setSparkles(newSparkles)
    }
    generateSparkles()
  }, [count])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="absolute rounded-full bg-primary"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              width: sparkle.size,
              height: sparkle.size,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: sparkle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
