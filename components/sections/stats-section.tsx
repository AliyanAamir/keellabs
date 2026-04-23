"use client"

import { motion, useInView, useSpring } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { SectionAnimator } from "@/components/section-animator"

const stats = [
  { end: 80, suffix: "+", label: "Workflows Delivered" },
  { end: 10000, suffix: "+", label: "Hours Automated" },
  { end: 98, suffix: "%", label: "Client Satisfaction" },
  { end: 9, suffix: "+", label: "Platforms Mastered" },
]

function AnimatedNumber({
  value,
  inView,
  decimals = 0,
}: {
  value: number
  inView: boolean
  decimals?: number
}) {
  const [displayValue, setDisplayValue] = useState(0)

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 2000,
  })

  useEffect(() => {
    if (inView) {
      spring.set(value)
    }
  }, [inView, value, spring])

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplayValue(latest)
    })
    return unsubscribe
  }, [spring])

  return decimals > 0 ? displayValue.toFixed(decimals) : Math.floor(displayValue).toLocaleString()
}

export function StatsSection() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      {/* Animated Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full"
            style={{ top: `${20 + i * 15}%` }}
            initial={{ x: "-100%" }}
            animate={isInView ? { x: "100%" } : {}}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 2,
            }}
          />
        ))}
      </div>

      <SectionAnimator animation="blur-in" duration={1.2} className="relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0, y: 50 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{
                  delay: index * 0.15,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
                className="text-center group"
              >
                <motion.div className="relative inline-block" whileHover={{ scale: 1.05 }}>
                  {/* Glow Effect */}
                  <motion.div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative text-5xl md:text-6xl lg:text-7xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {stat.prefix}
                    <AnimatedNumber value={stat.end} inView={isInView} decimals={stat.decimals} />
                    {stat.suffix}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.15 + 0.3 }}
                  className="text-muted-foreground mt-4 text-sm md:text-base"
                >
                  {stat.label}
                </motion.div>

                {/* Decorative Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: index * 0.15 + 0.5, duration: 0.6 }}
                  className="h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent mt-6 mx-auto w-24"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </SectionAnimator>
    </section>
  )
}
