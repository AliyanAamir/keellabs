"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

interface MorphingTextProps {
  texts: string[]
  className?: string
  interval?: number
}

export function MorphingText({ texts, className = "", interval = 3000 }: MorphingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    }, interval)
    return () => clearInterval(timer)
  }, [texts.length, interval])

  return (
    <div className={`relative h-[1.2em] overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ y: 40, opacity: 0, rotateX: -90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: -40, opacity: 0, rotateX: 90 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
