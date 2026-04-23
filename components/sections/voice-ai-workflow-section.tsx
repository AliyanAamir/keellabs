"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    number: "01",
    title: "Map Your Call Flows",
    description:
      "We analyze your inbound call patterns, common questions, and escalation paths to understand exactly how your phone lines should work.",
  },
  {
    number: "02",
    title: "Build the Voice Agent",
    description:
      "We configure your agent on Vapi — selecting the right voice, personality, knowledge base, and conversation logic to match your brand.",
  },
  {
    number: "03",
    title: "Connect Your Stack",
    description:
      "We integrate your voice agent with your CRM, calendar, SMS, email, and escalation workflows so every call drives real action.",
  },
  {
    number: "04",
    title: "Launch & Optimize",
    description:
      "We go live on your phone number, monitor call performance, and continuously tune the agent based on real conversation data.",
  },
]

const StepIcons = [
  ({ isInView }: { isInView: boolean }) => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="voiceGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <motion.circle cx="60" cy="60" r="35" fill="none" stroke="url(#voiceGrad1)" strokeWidth="2"
        initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 1.5 }} />
      <motion.path d="M50 45 L50 75 M70 45 L70 75 M50 60 L70 60" stroke="url(#voiceGrad1)" strokeWidth="2.5"
        fill="none" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 1, delay: 0.5 }} />
      {[0, 72, 144, 216, 288].map((angle, i) => {
        const x = 60 + 45 * Math.cos((angle * Math.PI) / 180)
        const y = 60 + 45 * Math.sin((angle * Math.PI) / 180)
        return (
          <motion.circle key={i} cx={x} cy={y} r="4" fill="#0a0a0a" stroke="#f97316" strokeWidth="1.5"
            initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ delay: 0.8 + i * 0.1 }} />
        )
      })}
      <motion.circle cx="60" cy="60" r="4" fill="#f97316"
        animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }} />
    </svg>
  ),

  ({ isInView }: { isInView: boolean }) => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="voiceGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      {/* Phone shape */}
      <motion.rect x="40" y="25" width="40" height="70" rx="8" fill="none" stroke="url(#voiceGrad2)" strokeWidth="2"
        initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 1.2 }} />
      <motion.circle cx="60" cy="82" r="4" fill="none" stroke="url(#voiceGrad2)" strokeWidth="1.5"
        initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ delay: 0.8 }} />
      {/* Sound waves */}
      {[14, 22, 30].map((r, i) => (
        <motion.path key={i} d={`M${85 + i * 4} 50 A${r} ${r} 0 0 1 ${85 + i * 4} ${50 + r * 1.2}`}
          stroke="#a855f7" strokeWidth="1.5" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }} animate={isInView ? { pathLength: 1, opacity: 0.7 - i * 0.15 } : {}}
          transition={{ duration: 0.6, delay: 1 + i * 0.2 }} />
      ))}
      <motion.circle cx="60" cy="50" r="3" fill="#f97316"
        animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }} />
    </svg>
  ),

  ({ isInView }: { isInView: boolean }) => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="voiceGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      {/* Center hub */}
      <motion.circle cx="60" cy="60" r="12" fill="#0a0a0a" stroke="url(#voiceGrad3)" strokeWidth="2"
        initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ duration: 0.6 }} />
      {/* Outer nodes */}
      {[[30, 30], [90, 30], [30, 90], [90, 90], [60, 15], [60, 105]].map(([cx, cy], i) => (
        <g key={i}>
          <motion.line x1={60} y1={60} x2={cx} y2={cy} stroke="url(#voiceGrad3)" strokeWidth="1.5" strokeOpacity="0.5"
            initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ delay: 0.3 + i * 0.1 }} />
          <motion.circle cx={cx} cy={cy} r="8" fill="#0a0a0a" stroke="url(#voiceGrad3)" strokeWidth="1.5"
            initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ delay: 0.6 + i * 0.1 }} />
        </g>
      ))}
      <motion.circle cx="60" cy="60" r="5" fill="#f97316"
        animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }} />
      <motion.circle cx="30" cy="30" r="3" fill="#a855f7"
        animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }} />
    </svg>
  ),

  ({ isInView }: { isInView: boolean }) => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="voiceGrad4" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      {/* Rising chart line */}
      <motion.path d="M20 90 L40 70 L55 75 L70 50 L85 35 L100 25"
        stroke="url(#voiceGrad4)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 2, delay: 0.2 }} />
      {/* Arrow tip */}
      <motion.path d="M92 20 L100 25 L95 33"
        stroke="#f97316" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 0.6, delay: 2 }} />
      {/* Baseline */}
      <motion.line x1="15" y1="95" x2="105" y2="95" stroke="url(#voiceGrad4)" strokeWidth="1" strokeOpacity="0.3"
        initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 1 }} />
      {/* Pulse dot */}
      <motion.circle cx="100" cy="25" r="4" fill="#f97316"
        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }} />
    </svg>
  ),
]

export function VoiceAIWorkflowSection() {
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
        <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
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
            How We Build Your <span className="text-primary">Voice AI Agent</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-purple-500"
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
