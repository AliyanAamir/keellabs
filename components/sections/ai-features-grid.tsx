"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Workflow, Gauge, Shield, Layers, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Brain,
    title: "Smart Learning",
    description: "AI that learns from your patterns and continuously improves automation accuracy.",
    color: "from-orange-500/20 to-orange-600/5",
  },
  {
    icon: Workflow,
    title: "Visual Builder",
    description: "Drag-and-drop workflow builder with no coding required.",
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    icon: Gauge,
    title: "Real-time Monitoring",
    description: "Monitor automation performance with live dashboards and insights.",
    color: "from-green-500/20 to-green-600/5",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with global security standards.",
    color: "from-purple-500/20 to-purple-600/5",
  },
  {
    icon: Layers,
    title: "Multi-layer Processing",
    description: "Handle complex workflows with parallel and sequential task execution.",
    color: "from-pink-500/20 to-pink-600/5",
  },
  {
    icon: Clock,
    title: "24/7 Automation",
    description: "Your automations run around the clock without human intervention.",
    color: "from-cyan-500/20 to-cyan-600/5",
  },
]

export function AIFeaturesGrid() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features for <span className="text-primary">Modern Teams</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to build, deploy, and scale intelligent automations.
          </p>
        </motion.div>

        {/* Bento-style Grid - Unique layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative p-8 rounded-2xl border border-border bg-card overflow-hidden ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                className="relative w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6"
              >
                <feature.icon className="w-7 h-7 text-primary" />
              </motion.div>

              {/* Content */}
              <h3 className="relative text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="relative text-muted-foreground text-sm leading-relaxed mb-4">{feature.description}</p>

              {/* Learn More Link */}
              <motion.a
                href="/contact"
                className="relative inline-flex items-center text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ x: 5 }}
              >
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
