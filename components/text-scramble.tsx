"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

interface TextScrambleProps {
  text: string
  className?: string
  delay?: number
}

const chars = "!<>-_\\/[]{}—=+*^?#________"

export function TextScramble({ text, className = "", delay = 0 }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState("")
  const [isAnimating, setIsAnimating] = useState(false)
  const frameRef = useRef(0)
  const frameRequestRef = useRef<number>()

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(true)
      let iteration = 0
      const maxIterations = text.length * 3

      const scramble = () => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (index < iteration / 3) {
                return text[index]
              }
              return chars[Math.floor(Math.random() * chars.length)]
            })
            .join(""),
        )

        iteration++

        if (iteration < maxIterations) {
          frameRequestRef.current = requestAnimationFrame(scramble)
        } else {
          setDisplayText(text)
          setIsAnimating(false)
        }
      }

      frameRequestRef.current = requestAnimationFrame(scramble)
    }, delay * 1000)

    return () => {
      clearTimeout(timeout)
      if (frameRequestRef.current) {
        cancelAnimationFrame(frameRequestRef.current)
      }
    }
  }, [text, delay])

  return (
    <motion.span
      className={`font-mono ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      {displayText || text}
    </motion.span>
  )
}
