"use client"

import { motion, useInView, type Variants } from "framer-motion"
import { useRef, useState, useEffect, type ReactNode } from "react"

type AnimationType =
  | "fade-up"
  | "fade-down"
  | "slide-left"
  | "slide-right"
  | "scale-up"
  | "scale-rotate"
  | "blur-in"
  | "flip-up"
  | "bounce-in"
  | "stagger-children"
  | "reveal-mask"
  | "elastic"
  | "parallax-fade"

interface SectionAnimatorProps {
  children: ReactNode
  animation: AnimationType
  className?: string
  delay?: number
  duration?: number
  once?: boolean
}

const getVariants = (animation: AnimationType, isIOS: boolean): Variants => {
  switch (animation) {
    case "fade-up":
      return {
        hidden: { opacity: 0, y: isIOS ? 50 : 100 },
        visible: { opacity: 1, y: 0 },
      }
    case "fade-down":
      return {
        hidden: { opacity: 0, y: isIOS ? -50 : -100 },
        visible: { opacity: 1, y: 0 },
      }
    case "slide-left":
      return {
        hidden: { opacity: 0, x: isIOS ? 100 : 200 },
        visible: { opacity: 1, x: 0 },
      }
    case "slide-right":
      return {
        hidden: { opacity: 0, x: isIOS ? -100 : -200 },
        visible: { opacity: 1, x: 0 },
      }
    case "scale-up":
      return {
        hidden: { opacity: 0, scale: isIOS ? 0.8 : 0.5 },
        visible: { opacity: 1, scale: 1 },
      }
    case "scale-rotate":
      return {
        hidden: { opacity: 0, scale: 0.8, rotate: isIOS ? -5 : -10 },
        visible: { opacity: 1, scale: 1, rotate: 0 },
      }
    case "blur-in":
      // iOS Safari has issues with filter animations, use opacity + scale fallback
      if (isIOS) {
        return {
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1 },
        }
      }
      return {
        hidden: { opacity: 0, filter: "blur(20px)" },
        visible: { opacity: 1, filter: "blur(0px)" },
      }
    case "flip-up":
      // Simplify for iOS to avoid 3D transform issues
      if (isIOS) {
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }
      }
      return {
        hidden: { opacity: 0, rotateX: 90, transformPerspective: 1000 },
        visible: { opacity: 1, rotateX: 0, transformPerspective: 1000 },
      }
    case "bounce-in":
      return {
        hidden: { opacity: 0, scale: isIOS ? 0.5 : 0.3, y: isIOS ? 50 : 100 },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
        },
      }
    case "stagger-children":
      return {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }
    case "reveal-mask":
      return {
        hidden: { clipPath: "inset(0 100% 0 0)" },
        visible: { clipPath: "inset(0 0% 0 0)" },
      }
    case "elastic":
      return {
        hidden: { opacity: 0, scale: isIOS ? 0.5 : 0, y: isIOS ? 25 : 50 },
        visible: { opacity: 1, scale: 1, y: 0 },
      }
    case "parallax-fade":
      return {
        hidden: { opacity: 0, y: isIOS ? 75 : 150, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }
    default:
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
  }
}

const getTransition = (animation: AnimationType, delay: number, duration: number) => {
  const baseTransition = { delay, duration }

  switch (animation) {
    case "bounce-in":
      return {
        ...baseTransition,
        type: "spring",
        stiffness: 200,
        damping: 15,
      }
    case "elastic":
      return {
        ...baseTransition,
        type: "spring",
        stiffness: 100,
        damping: 10,
      }
    case "flip-up":
      return {
        ...baseTransition,
        type: "spring",
        stiffness: 80,
        damping: 20,
      }
    case "scale-rotate":
      return {
        ...baseTransition,
        type: "spring",
        stiffness: 150,
        damping: 20,
      }
    case "blur-in":
      return {
        ...baseTransition,
        duration: duration * 1.2,
        ease: "easeOut",
      }
    case "reveal-mask":
      return {
        ...baseTransition,
        duration: duration * 1.5,
        ease: [0.77, 0, 0.175, 1],
      }
    case "parallax-fade":
      return {
        ...baseTransition,
        duration: duration * 1.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      }
    default:
      return {
        ...baseTransition,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }
  }
}

export function SectionAnimator({
  children,
  animation,
  className = "",
  delay = 0,
  duration = 0.8,
  once = true,
}: SectionAnimatorProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-10%" })
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    const userAgent = navigator.userAgent || ""
    const isiOSDevice = /iPad|iPhone|iPod/.test(userAgent) || 
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
    setIsIOS(isiOSDevice)
  }, [])

  const variants = getVariants(animation, isIOS)
  const transition = getTransition(animation, delay, duration)

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
      className={className}
      style={{
        WebkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
      }}
    >
      {children}
    </motion.div>
  )
}

// Child item component for stagger animations
export function AnimatedChild({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
