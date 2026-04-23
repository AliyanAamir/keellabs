"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Users, Megaphone, Calendar, Star, Home, Wrench } from "lucide-react"

const useCases = [
  {
    id: "lead-nurture",
    icon: Users,
    title: "Lead Nurture Campaigns",
    description:
      "Multi-touch follow-up sequences across SMS, email, and voicemail that automatically nurture leads until they book or reply — without lifting a finger.",
    highlight: "70% of leads need 5+ touchpoints to convert",
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Marketing Campaigns",
    description:
      "Set up broadcast campaigns, drip sequences, and triggered messages for promotions, launches, and seasonal offers — all scheduled in advance.",
    highlight: "Send to your whole list in one click",
  },
  {
    id: "appointments",
    icon: Calendar,
    title: "Appointment Booking & Reminders",
    description:
      "Online booking pages connected to your calendar, with automated confirmation texts, reminder sequences, and no-show follow-ups built in.",
    highlight: "Cut no-shows by up to 50%",
  },
  {
    id: "reviews",
    icon: Star,
    title: "Review Generation",
    description:
      "After every job or purchase, GHL automatically sends review request messages — growing your Google and Facebook ratings on complete autopilot.",
    highlight: "More 5-star reviews, zero manual asks",
  },
  {
    id: "realestate",
    icon: Home,
    title: "Real Estate & Property",
    description:
      "Automated lead qualification, property follow-ups, open house reminders, and drip campaigns — all inside your GHL CRM for realtors and investors.",
    highlight: "Never lose a buyer or seller lead again",
  },
  {
    id: "service",
    icon: Wrench,
    title: "Service Business Automation",
    description:
      "From the first inbound call or form fill to job completion and review request — full service business automation for HVAC, plumbing, cleaning, and more.",
    highlight: "End-to-end job lifecycle automation",
  },
]

export function GHLUseCasesSection() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [activeCase, setActiveCase] = useState(useCases[0])

  return (
    <section ref={containerRef} className="relative py-32 bg-secondary/30 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">Use Cases</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Who We Build <span className="text-primary">GHL Systems For</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From local service businesses to national agencies — we configure GHL for any business that needs a
            reliable, automated sales and marketing machine.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-3"
          >
            {useCases.map((useCase, index) => (
              <motion.button
                key={useCase.id}
                onClick={() => setActiveCase(useCase)}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all ${
                  activeCase.id === useCase.id
                    ? "bg-primary/10 border border-primary/30"
                    : "bg-card border border-border hover:border-primary/20"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    activeCase.id === useCase.id ? "bg-primary text-primary-foreground" : "bg-secondary"
                  }`}
                >
                  <useCase.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">{useCase.description}</p>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Detail Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="sticky top-24"
          >
            <motion.div
              key={activeCase.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl border border-border bg-card p-8 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                  <activeCase.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{activeCase.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{activeCase.description}</p>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm text-primary font-medium">{activeCase.highlight}</span>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Want this built for your business?{" "}
                    <a href="#" className="text-primary hover:underline font-medium">
                      Let&apos;s talk →
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
