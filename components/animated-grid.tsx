"use client"

import { motion } from "framer-motion"

export function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Horizontal lines */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"
          style={{ top: `${(i + 1) * 5}%` }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: i * 0.05, duration: 1 }}
        />
      ))}
      {/* Vertical lines */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent"
          style={{ left: `${(i + 1) * 5}%` }}
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ delay: i * 0.05, duration: 1 }}
        />
      ))}
      {/* Animated pulse at intersections */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute h-1 w-1 rounded-full bg-primary"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  )
}
