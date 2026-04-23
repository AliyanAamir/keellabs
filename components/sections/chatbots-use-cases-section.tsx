"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { UserPlus, Headphones, HelpCircle, Calendar, ShoppingBag, Star } from "lucide-react"

const useCases = [
  {
    id: "lead-qualification",
    icon: UserPlus,
    title: "Pre-Sale Lead Qualification",
    description:
      "Your chatbot asks qualifying questions, scores interest level, and routes hot leads directly to your sales team — so reps only talk to buyers ready to close.",
    highlight: "Qualify leads while you sleep",
  },
  {
    id: "customer-service",
    icon: Headphones,
    title: "Post-Sale Customer Service",
    description:
      "Handle order status inquiries, returns, troubleshooting, and account questions instantly — reducing ticket volume and improving customer satisfaction.",
    highlight: "80% fewer support tickets",
  },
  {
    id: "faq-answers",
    icon: HelpCircle,
    title: "FAQ & Policy Answers",
    description:
      "Train your bot on your entire knowledge base so it answers pricing, shipping, refund policies, and product questions accurately every single time.",
    highlight: "Instant, accurate answers 24/7",
  },
  {
    id: "appointment-booking",
    icon: Calendar,
    title: "Appointment Booking",
    description:
      "Let customers book consultations, demos, or appointments directly through chat — synced with your calendar, with automatic confirmations and reminders.",
    highlight: "Zero back-and-forth scheduling",
  },
  {
    id: "ecommerce-support",
    icon: ShoppingBag,
    title: "E-commerce Support",
    description:
      "Help shoppers find products, check availability, track orders, and process returns — all through conversational AI that feels natural and helpful.",
    highlight: "Boost conversions with instant help",
  },
  {
    id: "review-collection",
    icon: Star,
    title: "Review & Feedback Collection",
    description:
      "Automatically follow up after purchases or service interactions to collect reviews, ratings, and feedback — turning happy customers into social proof.",
    highlight: "Automate your review pipeline",
  },
]

export function ChatbotsUseCasesSection() {
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
            What Your <span className="text-primary">AI Chatbot</span> Handles
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real chatbot solutions built for real businesses. Click any use case to see the details.
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
              {/* Gradient accent */}
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
                    Ready to automate this for your business?{" "}
                    <a href="/contact" className="text-primary hover:underline font-medium">
                      Let&apos;s talk →
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
