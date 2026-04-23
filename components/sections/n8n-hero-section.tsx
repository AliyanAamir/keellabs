"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/magnetic-button"
import { Workflow, Zap, GitBranch } from "lucide-react"
import Link from "next/link"
import { BackgroundBeamsWithCollision } from "@/components/background-beams-with-collision"
import { AceterityAurora } from "@/components/aceternity-aurora"

export function N8NHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <AceterityAurora className="min-h-screen" showRadialGradient={true}>
      <div className="absolute inset-0 z-[1]">
        <BackgroundBeamsWithCollision className="h-full bg-transparent">
          <div />
        </BackgroundBeamsWithCollision>
      </div>

      <motion.div
        ref={containerRef}
        style={{ y, opacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
        >
          <GitBranch className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary">n8n Workflow Automation</span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9]">
            <span className="block text-foreground">Build</span>
            <span className="block bg-gradient-to-r from-primary via-orange-400 to-blue-500 bg-clip-text text-transparent">
              Powerful Flows
            </span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          We build n8n workflows that connect your apps, automate repetitive tasks, and run complex multi-step processes
          — no code required, full control when you need it.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/contact">
            <MagneticButton>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-14 text-lg group"
              >
                <Workflow className="w-5 h-5 mr-2" />
                Get Your n8n Workflow
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  →
                </motion.span>
              </Button>
            </MagneticButton>
          </Link>
          <Link href="/portfolio">
            <MagneticButton>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-14 text-lg border-border hover:border-primary hover:text-primary bg-transparent"
              >
                <Zap className="w-5 h-5 mr-2" />
                See Examples
              </Button>
            </MagneticButton>
          </Link>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: "400+", label: "App Integrations" },
            { value: "100%", label: "Visual Builder" },
            { value: "Self-Host", label: "Or Cloud Deploy" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </AceterityAurora>
  )
}
