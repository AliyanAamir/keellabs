"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion"
import { useDevice } from "@/lib/use-device"

export function SpotlightCursor() {
  const { isTouchDevice, isReady } = useDevice()
  const [isVisible, setIsVisible] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 200 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  // Create proper motion transforms for the gradient backgrounds
  const mainGradient = useTransform(
    [cursorXSpring, cursorYSpring],
    ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(255, 120, 50, 0.15), transparent 40%)`
  )
  
  const innerGradient = useTransform(
    [cursorXSpring, cursorYSpring],
    ([x, y]) => `radial-gradient(300px circle at ${x}px ${y}px, rgba(255, 150, 80, 0.1), transparent 40%)`
  )

  const moveCursor = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    },
    [cursorX, cursorY],
  )

  useEffect(() => {
    // Don't add mouse events on touch devices
    if (isTouchDevice) return
    
    setIsVisible(true)
    window.addEventListener("mousemove", moveCursor)
    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }
  }, [moveCursor, isTouchDevice])

  // Don't render on touch devices
  if (isReady && isTouchDevice) return null
  if (!isVisible) return null

  return (
    <>
      {/* Main spotlight gradient */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 opacity-70"
        style={{
          background: mainGradient,
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
        }}
      />
      {/* Inner glow */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 opacity-50"
        style={{
          background: innerGradient,
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
        }}
      />
      {/* Cursor dot */}
      <motion.div
        className="pointer-events-none fixed z-50 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary mix-blend-difference"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
        }}
      />
      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed z-50 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/50"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
        }}
      />
    </>
  )
}
