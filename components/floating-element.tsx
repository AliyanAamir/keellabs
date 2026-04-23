"use client"

import { motion } from "framer-motion"

interface FloatingElementProps {
  className?: string
  delay?: number
}

export function FloatingElement({ className, delay = 0 }: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -20, 0],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
  )
}
