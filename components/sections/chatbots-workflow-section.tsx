"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    number: "01",
    title: "Audit Your Conversations",
    description:
      "We analyze your DM patterns, most-asked questions, response gaps, and customer pain points to identify where an AI chatbot will have the biggest impact.",
  },
  {
    number: "02",
    title: "Build the Knowledge Base",
    description:
      "We compile your policies, pricing, FAQs, product details, and brand voice into a structured knowledge base your chatbot draws from for every answer.",
  },
  {
    number: "03",
    title: "Deploy Across Channels",
    description:
      "We deploy your chatbot to Facebook Messenger, Instagram DMs, your website, SMS, and any other channel — all managed from one place.",
  },
  {
    number: "04",
    title: "Monitor & Improve",
    description:
      "We review real conversations, tune responses, expand coverage for new questions, and continuously improve resolution rates over time.",
  },
]

const StepIcons = [
  ({ isInView }: { isInView: boolean }) => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="chatGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      {/* Chat bubbles representing conversation audit */}
      <motion.rect x="15" y="25" width="50" height="25" rx="6" fill="none" stroke="url(#chatGrad1)" strokeWidth="2"
        initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 1.2 }} />
      <motion.rect x="55" y="55" width="50" height="25" rx="6" fill="none" stroke="url(#chatGrad1)" strokeWidth="2"
        initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 1.2, delay: 0.3 }} />
      <motion.rect x="20" y="85" width="40" height="20" rx="5" fill="none" stroke="url(#chatGrad1)" strokeWidth="2"
        initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 1.2, delay: 0.6 }} />
      {/* Scanning dot */}
      <motion.circle cx="40" cy="37" r="4" fill="#f97316"
        animate={{ cx: [25, 55, 80, 40], cy: [37, 37, 67, 95], opacity: [1, 0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }} />
    </svg>
  ),

  ({ isInView }: { isInView: boolean }) => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="chatGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      {/* Book / knowledge base icon */}
      <motion.path d="M30 20 L30 95 L90 95 L90 20 Z" fill="none" stroke="url(#chatGrad2)" strokeWidth="2"
        initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 1.5 }} />
      <motion.line x1="60" y1="20" x2="60" y2="95" stroke="url(#chatGrad2)" strokeWidth="2"
        initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 0.8, delay: 0.5 }} />
      {/* Text lines */}
      {[35, 45, 55, 65, 75].map((y, i) => (
        <motion.line key={i} x1="36" y1={y} x2="54" y2={y} stroke="url(#chatGrad2)" strokeWidth="1.5" strokeOpacity="0.6"
          initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ delay: 0.8 + i * 0.1 }} />
      ))}
      {[35, 45, 55, 65, 75].map((y, i) => (
        <motion.line key={i} x1="66" y1={y} x2="84" y2={y} stroke="url(#chatGrad2)" strokeWidth="1.5" strokeOpacity="0.6"
          initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ delay: 1 + i * 0.1 }} />
      ))}
      <motion.circle cx="60" cy="57" r="3" fill="#10b981"
        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }} />
    </svg>
  ),

  ({ isInView }: { isInView: boolean }) => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="chatGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      {/* Central bot node */}
      <motion.circle cx="60" cy="60" r="14" fill="#0a0a0a" stroke="url(#chatGrad3)" strokeWidth="2"
        initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ duration: 0.6 }} />
      {/* Channel nodes around */}
      {[0, 72, 144, 216, 288].map((angle, i) => {
        const x = 60 + 38 * Math.cos((angle * Math.PI) / 180)
        const y = 60 + 38 * Math.sin((angle * Math.PI) / 180)
        return (
          <g key={i}>
            <motion.line x1="60" y1="60" x2={x} y2={y} stroke="url(#chatGrad3)" strokeWidth="1.5" strokeOpacity="0.5"
              initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ delay: 0.6 + i * 0.15 }} />
            <motion.rect x={x - 8} y={y - 8} width="16" height="16" rx="4" fill="#0a0a0a" stroke="url(#chatGrad3)" strokeWidth="2"
              initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ delay: 0.8 + i * 0.15 }} />
          </g>
        )
      })}
      {/* Pulsing center */}
      <motion.circle cx="60" cy="60" r="6" fill="#f97316"
        animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }} />
    </svg>
  ),

  ({ isInView }: { isInView: boolean }) => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="chatGrad4" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      {/* Upward trending chart */}
      <motion.path d="M20 90 L40 70 L55 75 L70 50 L85 45 L100 25"
        stroke="url(#chatGrad4)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 2, delay: 0.2 }} />
      {/* Arrow at the end */}
      <motion.path d="M92 20 L100 25 L95 33"
        stroke="#10b981" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 0.6, delay: 2 }} />
      {/* Data points */}
      {[[40, 70], [55, 75], [70, 50], [85, 45]].map(([cx, cy], i) => (
        <motion.circle key={i} cx={cx} cy={cy} r="4" fill="#0a0a0a" stroke="url(#chatGrad4)" strokeWidth="2"
          initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ delay: 1.2 + i * 0.15 }} />
      ))}
      <motion.circle cx="60" cy="100" r="3" fill="#10b981"
        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }} />
    </svg>
  ),
]

export function ChatbotsWorkflowSection() {
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
        <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
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
            How We Build Your <span className="text-primary">AI Chatbot</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-emerald-500"
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
