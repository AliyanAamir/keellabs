"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { TextReveal } from "@/components/text-reveal"
import { SectionAnimator } from "@/components/section-animator"
import { GitBranch, Target, Mic, Zap, Bot, Workflow, Sparkles } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: GitBranch,
    title: "n8n Workflow Automation",
    description:
      "We build custom n8n workflows that connect your entire app stack — triggering actions, syncing data, and running complex logic automatically, 24/7.",
    gradient: "from-primary to-accent",
    href: "/n8n",
    tags: ["400+ integrations", "Self-hosted", "Custom logic"],
  },
  {
    icon: Target,
    title: "Go High Level Setup",
    description:
      "Full GHL configuration — CRM pipelines, SMS/email campaigns, funnel builds, appointment booking, and reputation management. Done for you.",
    gradient: "from-accent to-primary",
    href: "/go-high-level",
    tags: ["CRM", "Lead nurture", "Funnels"],
  },
  {
    icon: Mic,
    title: "Voice AI Agents",
    description:
      "We build AI phone agents using Vapi, Retell, and ElevenLabs that handle inbound calls, qualify leads, book appointments, and follow up — all without human staff.",
    gradient: "from-primary to-accent",
    href: "/ai-automations",
    tags: ["Vapi", "Retell", "ElevenLabs"],
  },
  {
    icon: Zap,
    title: "Zapier & Make Automation",
    description:
      "Simple, fast automation across hundreds of apps using Zapier and Make (Integromat). Perfect for connecting tools without heavy infrastructure.",
    gradient: "from-accent to-primary",
    href: "/ai-automations",
    tags: ["Zapier", "Make", "No-code"],
  },
  {
    icon: Bot,
    title: "Agentic AI Workflows",
    description:
      "Multi-step AI agents that browse the web, write content, process documents, and make decisions — running fully autonomously on your behalf.",
    gradient: "from-primary to-accent",
    href: "/ai-automations",
    tags: ["GPT-4", "Autonomous", "Multi-step"],
  },
  {
    icon: Workflow,
    title: "AI Chatbots & Assistants",
    description:
      "Custom AI chatbots trained on your business data, embedded in your website or connected to your CRM to handle support, sales, and lead capture.",
    gradient: "from-accent to-primary",
    href: "/ai-automations",
    tags: ["Custom training", "Website embed", "CRM sync"],
  },
]

export function FeaturesSection() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} id="features" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-x-0 top-0 h-96"
          style={{
            background:
              "linear-gradient(to bottom, rgba(234, 88, 12, 0.12) 0%, rgba(234, 88, 12, 0.06) 25%, rgba(59, 130, 246, 0.05) 50%, rgba(59, 130, 246, 0.02) 75%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background" />
      </div>

      <SectionAnimator animation="slide-left" className="relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">What We Build</span>
            </motion.div>

            <TextReveal>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                AI automation services
                <span className="block text-primary mt-2">built for your business</span>
              </h2>
            </TextReveal>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              We go deep on a focused set of platforms so you get expert results — not a surface-level setup that breaks
              in a week.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, rotateX: 90, transformPerspective: 1000 }}
                animate={isInView ? { opacity: 1, rotateX: 0 } : {}}
                transition={{
                  delay: index * 0.15 + 0.3,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 80,
                  damping: 20,
                }}
              >
                <Link href={service.href}>
                  <Card className="group relative p-8 bg-card border-border hover:border-primary/50 transition-all duration-500 overflow-hidden h-full cursor-pointer">
                    {/* Hover Gradient */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at 50% 0%, rgba(234, 88, 12, 0.1) 0%, transparent 50%)`,
                      }}
                    />

                    {/* Icon */}
                    <motion.div
                      className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} p-[1px] mb-6`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-5">{service.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-primary/5 border border-primary/10 rounded-md text-xs text-primary/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Corner Accent */}
                    <motion.div
                      className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={false}
                    />
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionAnimator>
    </section>
  )
}
