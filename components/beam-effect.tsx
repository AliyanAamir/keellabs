"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState, useCallback } from "react"
import { useDevice } from "@/lib/use-device"

export function BeamEffect() {
  const { isTouchDevice, isReady } = useDevice()
  const [beams, setBeams] = useState<{ id: number; x: number; y: number }[]>([])
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { damping: 20, stiffness: 150 })
  const springY = useSpring(mouseY, { damping: 20, stiffness: 150 })
  console.log("1")
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    },
    [mouseX, mouseY],
  )

  useEffect(() => {
    // Skip mouse tracking on touch devices
    if (isTouchDevice) return
    
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [handleMouseMove, isTouchDevice])

  useEffect(() => {
    // Create random beams periodically
    const interval = setInterval(() => {
      const newBeam = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }
      setBeams((prev) => [...prev.slice(-5), newBeam])
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Only render ambient beams on touch devices (skip mouse-following beams)
  if (isReady && isTouchDevice) {
    return (
      <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
        {/* Ambient light beams only */}
        {beams.map((beam) => (
          <motion.div
            key={beam.id}
            className="absolute w-[2px] bg-gradient-to-b from-primary/40 via-primary/20 to-transparent"
            style={{
              left: beam.x,
              top: 0,
              height: "100vh",
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
            }}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: [0, 1, 0], scaleY: [0, 1, 0] }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {/* Ambient light beams */}
      {beams.map((beam) => (
        <motion.div
          key={beam.id}
          className="absolute w-[2px] bg-gradient-to-b from-primary/40 via-primary/20 to-transparent"
          style={{
            left: beam.x,
            top: 0,
            height: "100vh",
          }}
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: [0, 1, 0], scaleY: [0, 1, 0] }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      ))}

      {/* Mouse-following highlight beam */}
      <motion.div
        className="absolute w-[1px] h-screen bg-gradient-to-b from-transparent via-primary/30 to-transparent"
        style={{ left: springX, top: 0 }}
      />
      <motion.div
        className="absolute h-[1px] w-screen bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        style={{ top: springY, left: 0 }}
      />
    </div>
  )
}
