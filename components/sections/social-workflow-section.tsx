"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    number: "01",
    title: "Define Your Brand Voice",
    description:
      "We define your content pillars, tone of voice, target audience, and do's and don'ts — so every post sounds like you wrote it yourself.",
  },
  {
    number: "02",
    title: "Build the Content Engine",
    description:
      "We set up AI-powered content generation trained on your brand voice, complete with a hook library and proven post frameworks.",
  },
  {
    number: "03",
    title: "Automate Scheduling",
    description:
      "We build your content calendar with cross-platform posting automation and optimal timing based on when your audience is most active.",
  },
  {
    number: "04",
    title: "Analyze & Scale",
    description:
      "We set up performance tracking, content optimization loops, and scaling strategies — doubling down on what works, cutting what doesn't.",
  },
]

const StepIcons = [
  ({ isInView }: { isInView: boolean }) => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="socialGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <motion.circle cx="60" cy="60" r="30" fill="none" stroke="url(#socialGrad1)" strokeWidth="2"
        initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 1.5 }} />
      {[0, 72, 144, 216, 288].map((angle, i) => {
        const x = 60 + 30 * Math.cos((angle * Math.PI) / 180)
        const y = 60 + 30 * Math.sin((angle * Math.PI) / 180)
        return (
          <motion.circle key={i} cx={x} cy={y} r="5" fill="#0a0a0a" stroke="#f97316" strokeWidth="2"
            initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ delay: 0.5 + i * 0.1 }} />
        )
      })}
      <motion.circle cx="60" cy="60" r="6" fill="#f97316"
        animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }} />
    </svg>
  ),

  ({ isInView }: { isInView: boolean }) => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="socialGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      {[
        ["M30 40 L60 40", 0],
        ["M60 40 L90 40", 0.3],
        ["M30 60 L60 60", 0.6],
        ["M60 60 L90 60", 0.9],
        ["M30 80 L60 80", 1.2],
      ].map(([d, delay], i) => (
        <motion.path key={i} d={d as string} stroke="url(#socialGrad2)" strokeWidth="2" fill="none"
          strokeLinecap="round" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 0.8, delay: delay as number }} />
      ))}
      {[[30, 40], [60, 40], [90, 40], [30, 60], [60, 60], [90, 60], [30, 80], [60, 80]].map(([cx, cy], i) => (
        <motion.rect key={i} x={cx - 6} y={cy - 6} width="12" height="12" rx="3"
          fill="#0a0a0a" stroke="url(#socialGrad2)" strokeWidth="2"
          initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: 1 + i * 0.08 }} />
      ))}
      <motion.circle r="3" fill="#f97316"
        animate={{ cx: [30, 60, 90, 60, 30], cy: [40, 40, 60, 60, 80] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }} />
    </svg>
  ),

  ({ isInView }: { isInView: boolean }) => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="socialGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <motion.circle cx="60" cy="60" r="40" fill="none" stroke="url(#socialGrad3)" strokeWidth="2"
        initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 1.5 }} />
      <motion.line x1="60" y1="60" x2="60" y2="35" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 0.6, delay: 1 }} />
      <motion.line x1="60" y1="60" x2="78" y2="60" stroke="#ec4899" strokeWidth="2" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 0.6, delay: 1.3 }} />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
        const x1 = 60 + 36 * Math.cos((angle * Math.PI) / 180)
        const y1 = 60 + 36 * Math.sin((angle * Math.PI) / 180)
        const x2 = 60 + 40 * Math.cos((angle * Math.PI) / 180)
        const y2 = 60 + 40 * Math.sin((angle * Math.PI) / 180)
        return (
          <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#socialGrad3)" strokeWidth="1.5"
            initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.8 + i * 0.05 }} />
        )
      })}
      <motion.circle cx="60" cy="60" r="3" fill="#f97316"
        animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }} />
    </svg>
  ),

  ({ isInView }: { isInView: boolean }) => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="socialGrad4" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <motion.path d="M20 90 L35 70 L50 75 L65 50 L80 55 L95 30"
        stroke="url(#socialGrad4)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 2, delay: 0.2 }} />
      <motion.path d="M85 25 L95 30 L90 40"
        stroke="#f97316" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 0.6, delay: 2 }} />
      {[[20, 90], [35, 70], [50, 75], [65, 50], [80, 55], [95, 30]].map(([cx, cy], i) => (
        <motion.circle key={i} cx={cx} cy={cy} r="3" fill="#0a0a0a" stroke="url(#socialGrad4)" strokeWidth="2"
          initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ delay: 0.5 + i * 0.15 }} />
      ))}
      <motion.circle cx="60" cy="100" r="3" fill="#f97316"
        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }} />
    </svg>
  ),
]

export function SocialWorkflowSection() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"])

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">Our Process</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How We Build Your <span className="text-primary">Content Engine</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-pink-500"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-24">
            {steps.map((step, index) => {
              const IconComponent = StepIcons[index]
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 pl-20 md:pl-0 ${index % 2 === 0 ? "md:text-right md:pr-20" : "md:text-left md:pl-20"}`}
                  >
                    <span className="text-6xl font-bold text-primary/20 block mb-2">{step.number}</span>
                    <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/30"
                  />

                  <div
                    className={`hidden md:flex flex-1 ${index % 2 === 0 ? "justify-start pl-20" : "justify-end pr-20"}`}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                      className="w-32 h-32 p-4 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm"
                    >
                      <IconComponent isInView={isInView} />
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
