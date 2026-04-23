"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GitBranch, Webhook, Code2, RefreshCw, Lock, ArrowRight } from "lucide-react"

const features = [
  {
    icon: GitBranch,
    title: "Visual Workflow Builder",
    description: "Drag-and-drop canvas to design complex multi-step automations with branches, loops, and conditions.",
    color: "from-orange-500/20 to-orange-600/5",
  },
  {
    icon: Webhook,
    title: "Webhook Triggers",
    description: "Instantly react to real-time events from any app using HTTP webhooks and event-based triggers.",
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    icon: Code2,
    title: "Custom Code Nodes",
    description: "Drop in JavaScript or Python when you need logic beyond what pre-built nodes offer.",
    color: "from-green-500/20 to-green-600/5",
  },
  {
    icon: RefreshCw,
    title: "Scheduled Automation",
    description: "Run workflows on a cron schedule — hourly, daily, weekly, or any custom interval you define.",
    color: "from-purple-500/20 to-purple-600/5",
  },
  {
    icon: Lock,
    title: "Self-Hosted or Cloud",
    description: "Deploy on your own infrastructure for full data ownership, or use n8n Cloud for instant setup.",
    color: "from-pink-500/20 to-pink-600/5",
  },
  {
    icon: GitBranch,
    title: "Error Handling & Retry",
    description: "Built-in error workflows, retry logic, and execution logs so nothing silently fails.",
    color: "from-cyan-500/20 to-cyan-600/5",
  },
]

export function N8NFeaturesSection() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            n8n Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What We Build with <span className="text-primary">n8n</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From simple app connections to complex data pipelines — we configure n8n to handle it all.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative p-8 rounded-2xl border border-border bg-card overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                className="relative w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6"
              >
                <feature.icon className="w-7 h-7 text-primary" />
              </motion.div>

              <h3 className="relative text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="relative text-muted-foreground text-sm leading-relaxed mb-4">{feature.description}</p>

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
