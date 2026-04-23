"use client"

import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import type { JSX } from "react/jsx-runtime"

const stats = [
  { value: 80, suffix: "+", label: "Automations Delivered", icon: "rocket" },
  { value: 10000, suffix: "+", label: "Hours Automated", icon: "users" },
  { value: 98, suffix: "%", label: "Client Satisfaction", icon: "heart" },
  { value: 9, suffix: "+", label: "Platforms Mastered", icon: "trophy" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000 })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, motionValue, value])

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest))
    })
    return unsubscribe
  }, [springValue])

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  )
}

function StatIcon({ icon, isHovered }: { icon: string; isHovered: boolean }) {
  const iconPaths: Record<string, JSX.Element> = {
    rocket: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <motion.path
          d="M12 2L12 12M12 2L8 6M12 2L16 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isHovered ? 1 : 0.5 }}
          transition={{ duration: 0.5 }}
        />
        <motion.path
          d="M5 22L12 15L19 22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isHovered ? 1 : 0.7 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.circle
          cx="12"
          cy="12"
          r="3"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        />
      </svg>
    ),
    users: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <motion.circle
          cx="9"
          cy="7"
          r="4"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.circle
          cx="17"
          cy="7"
          r="3"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: isHovered ? 1.1 : 0.9 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        />
        <motion.path
          d="M2 21V18C2 15.79 5.58 14 9 14C12.42 14 16 15.79 16 18V21"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.5 }}
        />
      </svg>
    ),
    heart: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <motion.path
          d="M12 21C12 21 3 13.5 3 8.5C3 5.42 5.42 3 8.5 3C10.24 3 11.91 3.81 12 5C12.09 3.81 13.76 3 15.5 3C18.58 3 21 5.42 21 8.5C21 13.5 12 21 12 21Z"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ scale: 1 }}
          animate={{ scale: isHovered ? [1, 1.2, 1] : 1 }}
          transition={{ duration: 0.5, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
        />
      </svg>
    ),
    trophy: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <motion.path
          d="M8 21H16M12 17V21M6 4H18V8C18 11.31 15.31 14 12 14C8.69 14 6 11.31 6 8V4Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.path
          d="M6 4H4V6C4 7.1 4.9 8 6 8M18 4H20V6C20 7.1 19.1 8 18 8"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0.7 }}
          transition={{ duration: 0.3 }}
        />
        <motion.circle
          cx="12"
          cy="8"
          r="2"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </svg>
    ),
  }

  return iconPaths[icon] || null
}

export function PortfolioStatsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, rgba(234,88,12,0.1) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.line
          x1="25%"
          y1="50%"
          x2="50%"
          y2="50%"
          stroke="url(#stat-gradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.line
          x1="50%"
          y1="50%"
          x2="75%"
          y2="50%"
          stroke="url(#stat-gradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        />
        <defs>
          <linearGradient id="stat-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ea580c" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${i % 2 === 0 ? "bg-orange-500/50" : "bg-blue-500/50"}`}
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            className="text-orange-500 text-sm font-medium tracking-wider uppercase mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Impact
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Automation Results That <span className="text-orange-500">Matter</span>
          </h2>
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full mx-auto mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-muted-foreground max-w-xl mx-auto">Our track record speaks for itself</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, rotateX: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
              onMouseEnter={() => setHoveredStat(index)}
              onMouseLeave={() => setHoveredStat(null)}
              className="relative group perspective-1000"
            >
              <motion.div
                className={`relative p-8 rounded-2xl border transition-all duration-500 ${
                  hoveredStat === index
                    ? "bg-gradient-to-br from-orange-500/10 to-blue-500/10 border-orange-500/50"
                    : "bg-card/50 border-border/50"
                }`}
                whileHover={{ y: -10, rotateY: 5 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-orange-500"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: hoveredStat === index ? [0.8, 1.1, 1] : 0.8,
                    opacity: hoveredStat === index ? [0, 0.5, 0] : 0,
                  }}
                  transition={{ duration: 0.6 }}
                />

                {/* Icon */}
                <motion.div
                  className={`mb-4 transition-colors duration-300 ${
                    hoveredStat === index ? "text-orange-500" : "text-muted-foreground"
                  }`}
                  animate={{
                    rotateY: hoveredStat === index ? [0, 360] : 0,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <StatIcon icon={stat.icon} isHovered={hoveredStat === index} />
                </motion.div>

                {/* Value */}
                <motion.div
                  className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/80"
                  animate={{
                    scale: hoveredStat === index ? [1, 1.1, 1] : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </motion.div>

                {/* Label */}
                <motion.div
                  className="text-sm text-muted-foreground"
                  animate={{
                    color: hoveredStat === index ? "rgb(234,88,12)" : "rgb(161,161,170)",
                  }}
                >
                  {stat.label}
                </motion.div>

                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/20 to-blue-500/20 blur-xl -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredStat === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {hoveredStat === index && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-orange-500 rounded-full"
                        initial={{
                          x: "50%",
                          y: "50%",
                          scale: 0,
                          opacity: 1,
                        }}
                        animate={{
                          x: `${50 + (Math.random() - 0.5) * 100}%`,
                          y: `${50 + (Math.random() - 0.5) * 100}%`,
                          scale: [0, 1, 0],
                          opacity: [1, 1, 0],
                        }}
                        transition={{ duration: 0.6, delay: i * 0.05 }}
                      />
                    ))}
                  </>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
