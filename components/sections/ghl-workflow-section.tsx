"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    number: "01",
    title: "Audit Your Current Setup",
    description:
      "We review your existing GHL account (or start from scratch) to understand your business, your leads, and your current gaps — before we build anything.",
  },
  {
    number: "02",
    title: "Map the Customer Journey",
    description:
      "We define every touchpoint — from first opt-in to closed deal — and design the automations, pipelines, and sequences that will move contacts through each stage.",
  },
  {
    number: "03",
    title: "Build & Configure",
    description:
      "We build everything inside your GHL account: funnels, automations, SMS/email sequences, pipelines, calendar integrations, and custom fields.",
  },
  {
    number: "04",
    title: "Test, Launch & Train",
    description:
      "We run live tests with real contacts, launch your system, and walk your team through how to manage, monitor, and expand it over time.",
  },
]

const StepIcons = [
  ({ isInView }: { isInView: boolean }) => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="ghlGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <motion.rect x="25" y="25" width="70" height="70" rx="8" fill="none" stroke="url(#ghlGrad1)" strokeWidth="2"
        initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 1.2 }} />
      {[[35, 45], [60, 45], [85, 45], [35, 60], [60, 60], [85, 60], [35, 75], [60, 75], [85, 75]].map(([cx, cy], i) => (
        <motion.circle key={i} cx={cx} cy={cy} r="4" fill="#0a0a0a" stroke="url(#ghlGrad1)" strokeWidth="1.5"
          initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ delay: 0.8 + i * 0.07 }} />
      ))}
      <motion.path d="M35 45 L85 75" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4 3"
        initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 1, delay: 1.5 }} />
    </svg>
  ),

  ({ isInView }: { isInView: boolean }) => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="ghlGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      {[
        ["M20 60 L40 60", 0],
        ["M40 60 L60 40", 0.3],
        ["M40 60 L60 80", 0.3],
        ["M60 40 L80 40 L80 60", 0.6],
        ["M60 80 L80 80 L80 60", 0.6],
        ["M80 60 L100 60", 0.9],
      ].map(([d, delay], i) => (
        <motion.path key={i} d={d as string} stroke="url(#ghlGrad2)" strokeWidth="2" fill="none"
          strokeLinecap="round" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 0.7, delay: delay as number }} />
      ))}
      {[[20, 60], [60, 40], [60, 80], [100, 60]].map(([cx, cy], i) => (
        <motion.circle key={i} cx={cx} cy={cy} r="7" fill="#0a0a0a" stroke={i === 0 ? "#f97316" : i === 3 ? "#3b82f6" : "url(#ghlGrad2)"} strokeWidth="2"
          initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ delay: 1 + i * 0.15 }} />
      ))}
      <motion.circle r="4" fill="#f97316"
        animate={{ cx: [20, 40, 60, 80, 100], cy: [60, 60, 40, 40, 60] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }} />
    </svg>
  ),

  ({ isInView }: { isInView: boolean }) => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="ghlGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <motion.rect x="20" y="20" width="80" height="80" rx="12" fill="none" stroke="url(#ghlGrad3)" strokeWidth="2"
        initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 1.5 }} />
      {[35, 50, 65, 80].map((y, i) => (
        <motion.line key={i} x1="35" y1={y} x2="85" y2={y} stroke="url(#ghlGrad3)" strokeWidth="1.5" strokeOpacity="0.5"
          strokeLinecap="round" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 + i * 0.15 }} />
      ))}
      <motion.circle cx="35" cy="35" r="4" fill="#f97316"
        animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.2, repeat: Number.POSITIVE_INFINITY, delay: 0 }} />
      <motion.circle cx="35" cy="50" r="4" fill="#3b82f6"
        animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.2, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }} />
      <motion.circle cx="35" cy="65" r="4" fill="#f97316"
        animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.2, repeat: Number.POSITIVE_INFINITY, delay: 0.8 }} />
    </svg>
  ),

  ({ isInView }: { isInView: boolean }) => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="ghlGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <motion.path d="M30 75 L45 60 L60 70 L75 45 L90 50"
        stroke="url(#ghlGrad4)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 2, delay: 0.3 }} />
      {[[30, 75], [45, 60], [60, 70], [75, 45], [90, 50]].map(([cx, cy], i) => (
        <motion.circle key={i} cx={cx} cy={cy} r="5" fill="#0a0a0a" stroke="url(#ghlGrad4)" strokeWidth="2"
          initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ delay: 1.5 + i * 0.15 }} />
      ))}
      <motion.path d="M78 38 L90 50 L78 55"
        stroke="#f97316" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 0.5, delay: 2.3 }} />
    </svg>
  ),
]

export function GHLWorkflowSection() {
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
        <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
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
            How We Build Your <span className="text-primary">GHL System</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-blue-500"
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
