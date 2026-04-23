"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useState } from "react"

interface TypewriterTextProps {
  text: string
  className?: string
  delay?: number
  speed?: number
}

export function TypewriterText({ text, className = "", delay = 0, speed = 50 }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [isComplete, setIsComplete] = useState(false)
  const cursorOpacity = useMotionValue(1)

  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(interval)
          setIsComplete(true)
        }
      }, speed)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, delay, speed])

  useEffect(() => {
    const blink = animate(cursorOpacity, [1, 0, 1], {
      duration: 1,
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear",
    })
    return () => blink.stop()
  }, [cursorOpacity])

  const cursorOpacityValue = useTransform(cursorOpacity, (v) => v)

  return (
    <span className={className}>
      {displayText}
      <motion.span
        className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
        style={{ opacity: isComplete ? 0 : cursorOpacityValue }}
      />
    </span>
  )
}
