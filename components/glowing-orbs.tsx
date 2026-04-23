"use client"

import { motion } from "framer-motion"
import { useDevice } from "@/lib/use-device"

export function GlowingOrbs() {
  const { isIOS, isMobile } = useDevice()
  
  // Reduce blur intensity on iOS/mobile for better performance
  const isLowPerf = isIOS || isMobile
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Large primary orb */}
      <motion.div
        className={`absolute -left-48 top-1/4 h-[600px] w-[600px] rounded-full bg-primary/20 ${isLowPerf ? 'blur-[60px]' : 'blur-[120px]'}`}
        style={{
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      {/* Secondary accent orb */}
      <motion.div
        className={`absolute -right-48 bottom-1/4 h-[500px] w-[500px] rounded-full bg-accent/15 ${isLowPerf ? 'blur-[50px]' : 'blur-[100px]'}`}
        style={{
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      {/* Center highlight */}
      <motion.div
        className={`absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 ${isLowPerf ? 'blur-[40px]' : 'blur-[80px]'}`}
        style={{
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      {/* Small floating orbs - reduce count on low performance devices */}
      {[...Array(isLowPerf ? 3 : 6)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute h-32 w-32 rounded-full bg-primary/30 ${isLowPerf ? 'blur-[20px]' : 'blur-[40px]'}`}
          style={{
            left: `${15 + i * (isLowPerf ? 30 : 15)}%`,
            top: `${20 + (i % 3) * 25}%`,
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
            transform: "translateZ(0)",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, i % 2 === 0 ? 20 : -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5 + i,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  )
}
