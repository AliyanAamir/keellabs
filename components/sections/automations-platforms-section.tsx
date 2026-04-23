"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/magnetic-button"
import { GitBranch, Target, ArrowRight, Webhook, Code2, RefreshCw, Users, Megaphone, Calendar, Check } from "lucide-react"
import Link from "next/link"

const platforms = [
  {
    id: "n8n",
    icon: GitBranch,
    name: "n8n",
    tagline: "Technical Workflow Automation",
    description:
      "Connect any app, automate any process. n8n is an open-source workflow automation tool with a visual builder, 400+ integrations, and the ability to run custom code when you need it.",
    color: "from-orange-500/20 to-orange-600/5",
    borderColor: "border-primary/30",
    highlightColor: "text-primary",
    badgeColor: "bg-primary/10 border-primary/20 text-primary",
    href: "/n8n",
    features: [
      { icon: GitBranch, text: "Visual node-based workflow builder" },
      { icon: Webhook, text: "Webhook & event-based triggers" },
      { icon: Code2, text: "Custom JavaScript / Python nodes" },
      { icon: RefreshCw, text: "Scheduled & recurring automations" },
    ],
    bestFor: ["API & app integrations", "Data pipelines & ETL", "Cross-platform sync", "Backend automations"],
    ctaText: "Explore n8n Services",
  },
  {
    id: "ghl",
    icon: Target,
    name: "Go High Level",
    tagline: "Sales & Marketing Automation",
    description:
      "An all-in-one CRM and marketing platform built to capture leads, nurture them automatically, and close more business — with funnels, SMS, email, and appointment booking built in.",
    color: "from-blue-500/20 to-blue-600/5",
    borderColor: "border-blue-500/30",
    highlightColor: "text-blue-400",
    badgeColor: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    href: "/go-high-level",
    features: [
      { icon: Users, text: "Full CRM with custom pipelines" },
      { icon: Megaphone, text: "SMS, email & voicemail campaigns" },
      { icon: Calendar, text: "Appointment booking automation" },
      { icon: Target, text: "Funnel & landing page builder" },
    ],
    bestFor: ["Lead nurture & follow-up", "Marketing campaigns", "Appointment booking", "Reputation management"],
    ctaText: "Explore GHL Services",
  },
]

export function AutomationsPlatformsSection() {
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
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">Our Platforms</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Two Platforms. <span className="text-primary">Total Automation.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We go deep on two specialist tools so you get expert-level results — not a jack-of-all-trades approach.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`group relative p-8 rounded-2xl border ${platform.borderColor} bg-card overflow-hidden`}
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-4 ${platform.badgeColor}`}
                    >
                      <platform.icon className="w-3 h-3" />
                      {platform.tagline}
                    </div>
                    <h3 className={`text-3xl font-bold ${platform.highlightColor}`}>{platform.name}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8">{platform.description}</p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {platform.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.2 + i * 0.08 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Best For */}
                <div className="mb-8">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Best for</p>
                  <div className="flex flex-wrap gap-2">
                    {platform.bestFor.map((item) => (
                      <div key={item} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Check className="w-3 h-3 text-primary flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link href={platform.href}>
                  <MagneticButton>
                    <Button
                      className={`w-full rounded-xl h-12 group ${
                        platform.id === "n8n"
                          ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                          : "bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30"
                      }`}
                    >
                      {platform.ctaText}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </MagneticButton>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom comparison note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center p-6 rounded-2xl border border-border bg-card/50"
        >
          <p className="text-muted-foreground">
            <span className="text-foreground font-medium">Not sure which platform you need?</span> Many of our clients
            use both — n8n for backend data workflows and GHL for their customer-facing sales and marketing automation.{" "}
            <a href="/contact" className="text-primary hover:underline font-medium">
              Book a free call and we&apos;ll map it out for you →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
