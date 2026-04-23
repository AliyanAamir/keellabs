"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Users, Layout, MessageSquare, Calendar, Star, BarChart3, ArrowRight } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "CRM & Pipeline Management",
    description:
      "Full CRM setup with custom pipelines, lead stages, tags, and automated follow-up sequences so no opportunity falls through the cracks.",
    color: "from-orange-500/20 to-orange-600/5",
  },
  {
    icon: Layout,
    title: "Funnel & Landing Page Build",
    description:
      "High-converting funnels and landing pages built inside GHL — from opt-in pages to full sales funnels with upsells and thank-you flows.",
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    icon: MessageSquare,
    title: "SMS & Email Automation",
    description:
      "Multi-channel campaigns that automatically follow up with leads via SMS, email, and voicemail drops based on their behavior and stage.",
    color: "from-green-500/20 to-green-600/5",
  },
  {
    icon: Calendar,
    title: "Appointment Booking Flows",
    description:
      "Automated appointment booking with reminders, confirmations, and no-show follow-ups — all synced to your calendar without any manual work.",
    color: "from-purple-500/20 to-purple-600/5",
  },
  {
    icon: Star,
    title: "Reputation Management",
    description:
      "Automated review request sequences that go out after every job or purchase — growing your Google reviews on complete autopilot.",
    color: "from-pink-500/20 to-pink-600/5",
  },
  {
    icon: BarChart3,
    title: "Reporting & Attribution",
    description:
      "Custom dashboards that show your lead sources, pipeline value, appointment show rates, and campaign ROI — all in one place.",
    color: "from-cyan-500/20 to-cyan-600/5",
  },
]

export function GHLFeaturesSection() {
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
            GHL Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What We Build in <span className="text-primary">Go High Level</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We configure GHL from scratch or optimize your existing account — building systems that generate and close
            leads without constant manual effort.
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
                href="#"
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
