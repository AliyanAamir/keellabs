"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { TextReveal } from "@/components/text-reveal"
import { SectionAnimator } from "@/components/section-animator"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const tools = [
  {
    name: "n8n",
    category: "Workflow Automation",
    description: "Open-source workflow automation with 400+ app integrations, visual canvas, and custom code nodes.",
    color: "from-orange-500/20 to-orange-600/5",
    borderHover: "hover:border-orange-500/40",
    badge: "Core Platform",
    href: "/n8n",
  },
  {
    name: "Go High Level",
    category: "CRM & Marketing",
    description: "All-in-one sales and marketing platform for CRM, funnels, SMS/email campaigns, and booking.",
    color: "from-blue-500/20 to-blue-600/5",
    borderHover: "hover:border-blue-500/40",
    badge: "Core Platform",
    href: "/go-high-level",
  },
  {
    name: "Vapi",
    category: "Voice AI",
    description: "Build and deploy AI phone call agents that handle inbound and outbound calls at scale.",
    color: "from-purple-500/20 to-purple-600/5",
    borderHover: "hover:border-purple-500/40",
    badge: "Voice AI",
    href: "/ai-automations",
  },
  {
    name: "ElevenLabs",
    category: "Voice Synthesis",
    description: "Ultra-realistic AI voice generation for phone agents, content, and interactive voice experiences.",
    color: "from-pink-500/20 to-pink-600/5",
    borderHover: "hover:border-pink-500/40",
    badge: "Voice AI",
    href: "/ai-automations",
  },
  {
    name: "Retell AI",
    category: "Conversational AI",
    description: "Build lifelike conversational voice agents with low latency and natural dialogue flows.",
    color: "from-cyan-500/20 to-cyan-600/5",
    borderHover: "hover:border-cyan-500/40",
    badge: "Voice AI",
    href: "/ai-automations",
  },
  {
    name: "Zapier",
    category: "No-Code Automation",
    description: "Connect 6,000+ apps with simple trigger-action automations for fast, reliable workflows.",
    color: "from-amber-500/20 to-amber-600/5",
    borderHover: "hover:border-amber-500/40",
    badge: "Integration",
    href: "/ai-automations",
  },
  {
    name: "Make",
    category: "Visual Automation",
    description: "Advanced visual workflow builder (formerly Integromat) for complex, multi-step automations.",
    color: "from-violet-500/20 to-violet-600/5",
    borderHover: "hover:border-violet-500/40",
    badge: "Integration",
    href: "/ai-automations",
  },
  {
    name: "OpenAI / GPT",
    category: "AI Processing",
    description: "GPT-4 and other LLMs embedded directly in your automations for writing, reasoning, and decisions.",
    color: "from-green-500/20 to-green-600/5",
    borderHover: "hover:border-green-500/40",
    badge: "AI Core",
    href: "/ai-automations",
  },
  {
    name: "Airtable",
    category: "Database & Ops",
    description: "Smart database used as automation backbone — storing, organizing, and triggering workflows from data.",
    color: "from-teal-500/20 to-teal-600/5",
    borderHover: "hover:border-teal-500/40",
    badge: "Data Layer",
    href: "/ai-automations",
  },
]

const badgeColors: Record<string, string> = {
  "Core Platform": "bg-primary/10 text-primary border-primary/20",
  "Voice AI": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Integration: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "AI Core": "bg-green-500/10 text-green-400 border-green-500/20",
  "Data Layer": "bg-teal-500/10 text-teal-400 border-teal-500/20",
}

export function DashboardSection() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} id="dashboard" className="relative py-32 overflow-hidden">
      <SectionAnimator animation="scale-rotate" className="relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6"
            >
              <span className="text-sm text-muted-foreground">Tech Stack</span>
            </motion.div>

            <TextReveal>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Platforms we master
                <span className="block text-primary mt-2">so you don&apos;t have to</span>
              </h2>
            </TextReveal>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Every tool below is something we use daily — not just something we&apos;ve read the docs on. You get
              specialists, not generalists.
            </motion.p>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{
                  delay: index * 0.08 + 0.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
              >
                <Link href={tool.href}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.2 }}
                    className={`group relative p-6 rounded-2xl border border-border ${tool.borderHover} bg-card overflow-hidden h-full cursor-pointer transition-all duration-300`}
                  >
                    {/* Gradient on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    <div className="relative">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{tool.name}</h3>
                          <p className="text-xs text-muted-foreground mt-0.5">{tool.category}</p>
                        </div>
                        <span
                          className={`text-xs font-medium px-2.5 py-1 rounded-full border ${badgeColors[tool.badge]}`}
                        >
                          {tool.badge}
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{tool.description}</p>

                      <motion.div
                        className="inline-flex items-center text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ x: 4 }}
                      >
                        Learn more <ArrowRight className="w-3 h-3 ml-1" />
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionAnimator>
    </section>
  )
}
