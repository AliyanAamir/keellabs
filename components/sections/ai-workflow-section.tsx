"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    number: "01",
    title: "Connect Your Apps",
    description: "Link your favorite tools and platforms in seconds with our extensive integration library.",
  },
  {
    number: "02",
    title: "Design Your Workflow",
    description: "Use our visual builder to create custom automation flows tailored to your needs.",
  },
  {
    number: "03",
    title: "Train the AI",
    description: "Let our AI learn from your data and patterns to optimize decision-making.",
  },
  {
    number: "04",
    title: "Deploy & Scale",
    description: "Launch your automations and watch them scale automatically with demand.",
  },
]

const StepIcons = [
  // Connect Apps - Nodes connecting
  ({ isInView }: { isInView: boolean }) => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="connectGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      {/* Connection lines */}
      <motion.path
        d="M30 60 L60 30 L90 60 L60 90 Z"
        fill="none"
        stroke="url(#connectGrad)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.2 }}
      />
      <motion.line
        x1="60"
        y1="30"
        x2="60"
        y2="90"
        stroke="url(#connectGrad)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.line
        x1="30"
        y1="60"
        x2="90"
        y2="60"
        stroke="url(#connectGrad)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : {}}
        transition={{ duration: 1, delay: 0.7 }}
      />
      {/* Nodes */}
      {[
        [60, 30],
        [90, 60],
        [60, 90],
        [30, 60],
        [60, 60],
      ].map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r="8"
          fill="#0a0a0a"
          stroke="url(#connectGrad)"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
        />
      ))}
      {/* Pulsing center */}
      <motion.circle
        cx="60"
        cy="60"
        r="4"
        fill="#f97316"
        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      />
    </svg>
  ),

  // Design Workflow - Flow diagram
  ({ isInView }: { isInView: boolean }) => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      {/* Flow paths */}
      <motion.path
        d="M20 40 L50 40 L50 25 L70 40 L50 55 L50 40"
        fill="none"
        stroke="url(#flowGrad)"
        strokeWidth="2"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : {}}
        transition={{ duration: 1.2 }}
      />
      <motion.path
        d="M70 40 L100 40"
        fill="none"
        stroke="url(#flowGrad)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
      <motion.path
        d="M70 40 L70 80 L100 80"
        fill="none"
        stroke="url(#flowGrad)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : {}}
        transition={{ duration: 0.8, delay: 1 }}
      />
      {/* Boxes */}
      <motion.rect
        x="10"
        y="30"
        width="20"
        height="20"
        rx="4"
        fill="none"
        stroke="#f97316"
        strokeWidth="2"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.2 }}
      />
      <motion.rect
        x="90"
        y="30"
        width="20"
        height="20"
        rx="4"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="2"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 1.2 }}
      />
      <motion.rect
        x="90"
        y="70"
        width="20"
        height="20"
        rx="4"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="2"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 1.5 }}
      />
      {/* Moving dot */}
      <motion.circle
        r="4"
        fill="#f97316"
        animate={{
          cx: [20, 50, 70, 100, 70, 70, 100],
          cy: [40, 40, 40, 40, 40, 80, 80],
        }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
    </svg>
  ),

  // Train AI - Neural network
  ({ isInView }: { isInView: boolean }) => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      {/* Neural connections */}
      {[30, 60, 90].map((y1, i) =>
        [40, 60, 80].map((y2, j) => (
          <motion.line
            key={`l1-${i}-${j}`}
            x1="25"
            y1={y1}
            x2="60"
            y2={y2}
            stroke="url(#neuralGrad)"
            strokeWidth="1"
            strokeOpacity="0.5"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 + j * 0.05 }}
          />
        )),
      )}
      {[40, 60, 80].map((y1, i) =>
        [30, 60, 90].map((y2, j) => (
          <motion.line
            key={`l2-${i}-${j}`}
            x1="60"
            y1={y1}
            x2="95"
            y2={y2}
            stroke="url(#neuralGrad)"
            strokeWidth="1"
            strokeOpacity="0.5"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 + j * 0.05 }}
          />
        )),
      )}
      {/* Input layer */}
      {[30, 60, 90].map((cy, i) => (
        <motion.circle
          key={`in-${i}`}
          cx="25"
          cy={cy}
          r="6"
          fill="#0a0a0a"
          stroke="#f97316"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, delay: i * 0.1 }}
        />
      ))}
      {/* Hidden layer */}
      {[40, 60, 80].map((cy, i) => (
        <motion.circle
          key={`hid-${i}`}
          cx="60"
          cy={cy}
          r="6"
          fill="#0a0a0a"
          stroke="url(#neuralGrad)"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
        />
      ))}
      {/* Output layer */}
      {[30, 60, 90].map((cy, i) => (
        <motion.circle
          key={`out-${i}`}
          cx="95"
          cy={cy}
          r="6"
          fill="#0a0a0a"
          stroke="#3b82f6"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
        />
      ))}
      {/* Pulsing signals */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={`pulse-${i}`}
          r="3"
          fill="#f97316"
          initial={{ cx: 25, cy: 30 + i * 30, opacity: 1 }}
          animate={{
            cx: [25, 60, 95],
            cy: [30 + i * 30, 40 + i * 20, 30 + i * 30],
            opacity: [1, 0.8, 0],
          }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 1,
          }}
        />
      ))}
    </svg>
  ),

  // Deploy & Scale - Rocket with scaling grid
  ({ isInView }: { isInView: boolean }) => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="rocketGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      {/* Grid pattern */}
      {[20, 40, 60, 80, 100].map((x, i) => (
        <motion.line
          key={`vg-${i}`}
          x1={x}
          y1="20"
          x2={x}
          y2="100"
          stroke="#f97316"
          strokeWidth="0.5"
          strokeOpacity="0.2"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 0.5, delay: i * 0.05 }}
        />
      ))}
      {[20, 40, 60, 80, 100].map((y, i) => (
        <motion.line
          key={`hg-${i}`}
          x1="20"
          y1={y}
          x2="100"
          y2={y}
          stroke="#3b82f6"
          strokeWidth="0.5"
          strokeOpacity="0.2"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 0.5, delay: i * 0.05 }}
        />
      ))}
      {/* Rocket */}
      <motion.g
        initial={{ x: 20, y: 20, opacity: 0 }}
        animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.path
          d="M60 25 L70 50 L65 50 L65 65 L55 65 L55 50 L50 50 Z"
          fill="url(#rocketGrad)"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        />
        {/* Flames */}
        <motion.path
          d="M55 65 L60 80 L65 65"
          fill="#f97316"
          animate={{ scaleY: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
          transition={{ duration: 0.3, repeat: Number.POSITIVE_INFINITY }}
        />
      </motion.g>
      {/* Scaling dots */}
      {[
        [40, 60],
        [80, 60],
        [60, 40],
        [60, 80],
        [40, 40],
        [80, 80],
        [40, 80],
        [80, 40],
      ].map(([cx, cy], i) => (
        <motion.circle
          key={`sd-${i}`}
          cx={cx}
          cy={cy}
          r="3"
          fill="url(#rocketGrad)"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: [0, 1.2, 1], opacity: [0, 1, 0.6] } : {}}
          transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
        />
      ))}
      {/* Expanding rings */}
      <motion.circle
        cx="60"
        cy="50"
        r="15"
        fill="none"
        stroke="url(#rocketGrad)"
        strokeWidth="1"
        animate={{ r: [15, 40], opacity: [0.5, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.circle
        cx="60"
        cy="50"
        r="15"
        fill="none"
        stroke="url(#rocketGrad)"
        strokeWidth="1"
        animate={{ r: [15, 40], opacity: [0.5, 0] }}
        transition={{ duration: 2, delay: 1, repeat: Number.POSITIVE_INFINITY }}
      />
    </svg>
  ),
]

export function AIWorkflowSection() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"])

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Four Steps to <span className="text-primary">Full Automation</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-blue-500"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Steps */}
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
                  {/* Content */}
                  <div
                    className={`flex-1 pl-20 md:pl-0 ${index % 2 === 0 ? "md:text-right md:pr-20" : "md:text-left md:pl-20"}`}
                  >
                    <span className="text-6xl font-bold text-primary/20 block mb-2">{step.number}</span>
                    <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>

                  {/* Circle Marker */}
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
