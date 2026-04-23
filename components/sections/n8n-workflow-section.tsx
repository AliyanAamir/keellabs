"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    number: "01",
    title: "Discover Your Bottlenecks",
    description:
      "We audit your existing tools and manual processes to identify exactly where time is being lost and where automation will have the highest impact.",
  },
  {
    number: "02",
    title: "Design the Workflow",
    description:
      "We map out the logic — triggers, conditions, data transformations, and outputs — before touching a single node in n8n.",
  },
  {
    number: "03",
    title: "Build & Connect",
    description:
      "We build your workflow in n8n, connecting all your apps with the right nodes, error handling, and retry logic in place.",
  },
  {
    number: "04",
    title: "Test, Deploy & Hand Off",
    description:
      "We test with real data, deploy to your environment (self-hosted or cloud), and provide clear documentation so your team owns it.",
  },
]

const StepIcons = [
  ({ isInView }: { isInView: boolean }) => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="n8nGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <motion.circle cx="60" cy="60" r="30" fill="none" stroke="url(#n8nGrad1)" strokeWidth="2"
        initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 1.5 }} />
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
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
        <linearGradient id="n8nGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      {[
        ["M20 30 L60 30", 0],
        ["M60 30 L60 60", 0.3],
        ["M60 60 L40 80", 0.6],
        ["M60 60 L80 80", 0.9],
      ].map(([d, delay], i) => (
        <motion.path key={i} d={d as string} stroke="url(#n8nGrad2)" strokeWidth="2" fill="none"
          strokeLinecap="round" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 0.8, delay: delay as number }} />
      ))}
      {[[20, 30], [60, 30], [60, 60], [40, 80], [80, 80]].map(([cx, cy], i) => (
        <motion.rect key={i} x={cx - 8} y={cy - 8} width="16" height="16" rx="3"
          fill="#0a0a0a" stroke="url(#n8nGrad2)" strokeWidth="2"
          initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: 1 + i * 0.1 }} />
      ))}
      <motion.circle r="4" fill="#f97316"
        animate={{ cx: [20, 60, 60, 80], cy: [30, 30, 60, 80] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }} />
    </svg>
  ),

  ({ isInView }: { isInView: boolean }) => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="n8nGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      {[[20, 30], [60, 30], [100, 30], [20, 60], [60, 60], [100, 60], [20, 90], [60, 90], [100, 90]].map(([cx, cy], i) => (
        <motion.circle key={i} cx={cx} cy={cy} r="6" fill="#0a0a0a" stroke="url(#n8nGrad3)" strokeWidth="2"
          initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ delay: i * 0.08 }} />
      ))}
      {[[20, 30, 60, 30], [60, 30, 100, 30], [20, 60, 60, 60], [60, 60, 100, 60],
        [20, 90, 60, 90], [60, 90, 100, 90], [20, 30, 20, 60], [60, 30, 60, 60],
        [100, 30, 100, 60], [20, 60, 20, 90], [60, 60, 60, 90], [100, 60, 100, 90]].map(([x1, y1, x2, y2], i) => (
        <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#n8nGrad3)" strokeWidth="1" strokeOpacity="0.4"
          initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ delay: 0.8 + i * 0.03 }} />
      ))}
      <motion.circle cx="20" cy="30" r="3" fill="#f97316"
        animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0 }} />
      <motion.circle cx="60" cy="60" r="3" fill="#3b82f6"
        animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }} />
    </svg>
  ),

  ({ isInView }: { isInView: boolean }) => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="n8nGrad4" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <motion.path d="M30 90 L30 50 L50 50 L50 70 L70 70 L70 40 L90 40 L90 90"
        stroke="url(#n8nGrad4)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 2, delay: 0.2 }} />
      <motion.path d="M75 35 L90 40 L85 55"
        stroke="#f97316" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 0.6, delay: 2 }} />
      <motion.circle cx="60" cy="100" r="3" fill="#f97316"
        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }} />
    </svg>
  ),
]

export function N8NWorkflowSection() {
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
            How We Deliver Your <span className="text-primary">n8n Automation</span>
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
