"use client"

import type React from "react"

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { useRef, useState, useEffect } from "react"

function ScrambleText({ text, isHovered }: { text: string; isHovered: boolean }) {
  const [displayText, setDisplayText] = useState(text)
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"

  useEffect(() => {
    if (!isHovered) {
      setDisplayText(text)
      return
    }

    let iteration = 0
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " "
            if (index < iteration) return text[index]
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join(""),
      )
      iteration += 1 / 3
      if (iteration >= text.length) clearInterval(interval)
    }, 30)

    return () => clearInterval(interval)
  }, [isHovered, text])

  return <span>{displayText}</span>
}

function MagneticButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.3)
    y.set((e.clientY - centerY) * 0.3)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.button>
  )
}

export function PortfolioHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const layer1Y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const layer2Y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const layer3Y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 15])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (rect) {
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      })
    }
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(234,88,12,0.3) 0%, transparent 50%)`,
        }}
      />

      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-20">
          <defs>
            <pattern id="portfolio-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-orange-500/30"
              />
            </pattern>
            <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(234,88,12)" stopOpacity="0.3">
                <animate attributeName="stop-opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="rgb(59,130,246)" stopOpacity="0.3">
                <animate
                  attributeName="stop-opacity"
                  values="0.3;0.6;0.3"
                  dur="3s"
                  repeatCount="indefinite"
                  begin="1.5s"
                />
              </stop>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#portfolio-grid)" />
        </svg>
      </div>

      <motion.div style={{ y: layer1Y }} className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`layer1-${i}`}
            className="absolute"
            style={{
              left: `${10 + i * 25}%`,
              top: `${15 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              y: { duration: 4 + i, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              rotate: { duration: 20 + i * 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            }}
          >
            <div className="w-20 h-20 border border-orange-500/20 rounded-lg" />
          </motion.div>
        ))}
      </motion.div>

      <motion.div style={{ y: layer2Y }} className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`layer2-${i}`}
            className="absolute"
            style={{
              left: `${5 + i * 20}%`,
              top: `${25 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full" />
          </motion.div>
        ))}
      </motion.div>

      <motion.div style={{ y: layer3Y }} className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`layer3-${i}`}
            className="absolute"
            style={{
              left: `${8 + i * 15}%`,
              top: `${10 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 6 + i,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            <div className="w-2 h-2 bg-orange-500/50 rounded-full" />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 opacity-20"
        animate={{
          borderRadius: [
            "30% 70% 70% 30% / 30% 30% 70% 70%",
            "70% 30% 30% 70% / 70% 70% 30% 30%",
            "30% 70% 70% 30% / 30% 30% 70% 70%",
          ],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        style={{ background: "linear-gradient(135deg, rgba(234,88,12,0.3), rgba(59,130,246,0.3))" }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 opacity-20"
        animate={{
          borderRadius: [
            "70% 30% 30% 70% / 70% 70% 30% 30%",
            "30% 70% 70% 30% / 30% 30% 70% 70%",
            "70% 30% 30% 70% / 70% 70% 30% 30%",
          ],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
        style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.3), rgba(234,88,12,0.3))" }}
      />

      {/* Main Content */}
      <motion.div style={{ y, opacity, scale }} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8"
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-orange-500"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
          <span className="text-sm text-orange-400">Our Work Speaks for Itself</span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.span
            className="block text-foreground"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ScrambleText text="Creative" isHovered={isHovered} />
          </motion.span>
          <motion.span
            className="block mt-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-blue-500">
              <ScrambleText text="Portfolio" isHovered={isHovered} />
            </span>
          </motion.span>
        </motion.h1>

        <motion.div
          className="h-1 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full mx-auto mb-8"
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 1, delay: 0.8 }}
        />

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Real automation systems we&apos;ve built — n8n workflows, Go High Level setups, voice AI agents, and agentic
          pipelines delivering measurable results for real businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <MagneticButton className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold shadow-lg shadow-orange-500/25 group">
            <span className="flex items-center gap-2">
              Explore Projects
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                →
              </motion.span>
            </span>
          </MagneticButton>

          <MagneticButton className="px-8 py-4 bg-muted/50 backdrop-blur-sm text-foreground rounded-xl font-semibold border border-border/50 hover:bg-muted transition-colors">
            Contact Us
          </MagneticButton>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm text-muted-foreground">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 rounded-full border-2 border-orange-500/50 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="w-1.5 h-1.5 rounded-full bg-orange-500"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
