"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedBorderProps {
  children: ReactNode
  className?: string
}

export function AnimatedBorder({ children, className = "" }: AnimatedBorderProps) {
  return (
    <div className={`relative group ${className}`}>
      {/* Animated border gradient */}
      <motion.div
        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,120,50,0.5), transparent)",
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: ["200% 0", "-200% 0"],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Content */}
      <div className="relative bg-card rounded-2xl overflow-hidden">{children}</div>
    </div>
  )
}
