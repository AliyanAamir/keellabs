"use client"

import { motion } from "framer-motion"
import { useDevice } from "@/lib/use-device"

export function AuroraBackground() {
  const { isIOS, isMobile } = useDevice()
  
  // Use smaller blur values on iOS/mobile for better performance
  const blurPrimary = isIOS || isMobile ? 40 : 80
  const blurSecondary = isIOS || isMobile ? 50 : 100
  const blurTertiary = isIOS || isMobile ? 30 : 60

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Primary aurora blob */}
      <motion.div
        className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,120,50,0.4) 0%, rgba(200,80,30,0.2) 40%, transparent 70%)",
          filter: `blur(${blurPrimary}px)`,
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
        animate={{
          x: [0, 100, 50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.2, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Secondary aurora blob */}
      <motion.div
        className="absolute -bottom-[30%] -right-[20%] w-[60%] h-[60%] rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(180,100,60,0.4) 0%, rgba(140,60,30,0.2) 40%, transparent 70%)",
          filter: `blur(${blurSecondary}px)`,
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
        animate={{
          x: [0, -80, -40, 0],
          y: [0, -60, -100, 0],
          scale: [1, 1.3, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Tertiary accent blob */}
      <motion.div
        className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full opacity-20"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,150,80,0.3) 0%, transparent 60%)",
          filter: `blur(${blurTertiary}px)`,
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 80, 40, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
