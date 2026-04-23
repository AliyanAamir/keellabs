"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Database, Bell, RefreshCw, Mail, FileText, ShoppingCart } from "lucide-react"

const useCases = [
  {
    id: "data-sync",
    icon: Database,
    title: "Cross-App Data Sync",
    description:
      "Keep your CRM, database, spreadsheets, and project tools perfectly in sync — automatically, in real time.",
    highlight: "Zero manual copy-paste forever",
  },
  {
    id: "notifications",
    icon: Bell,
    title: "Smart Notifications",
    description:
      "Trigger Slack messages, emails, or SMS based on events in any connected app — new leads, payments, errors, and more.",
    highlight: "Instant alerts, zero missed events",
  },
  {
    id: "etl",
    icon: RefreshCw,
    title: "ETL & Data Pipelines",
    description:
      "Extract data from APIs and databases, transform it with custom logic, and load it into your destination — on schedule or on demand.",
    highlight: "Automate your data pipelines",
  },
  {
    id: "email",
    icon: Mail,
    title: "Email & Follow-Up Sequences",
    description:
      "Build triggered email sequences that fire based on user behavior, form submissions, or time delays — all wired through n8n.",
    highlight: "Personalized at scale",
  },
  {
    id: "documents",
    icon: FileText,
    title: "Document & Report Generation",
    description:
      "Auto-generate PDFs, populate Google Docs templates, and send formatted reports — triggered by any event in your stack.",
    highlight: "Reports that create themselves",
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce Automation",
    description:
      "Connect Shopify, WooCommerce, or your custom store to your fulfillment, CRM, and email tools for end-to-end order automation.",
    highlight: "From order to delivery, automated",
  },
]

export function N8NUseCasesSection() {
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
            What We Automate with <span className="text-primary">n8n</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real workflows built for real businesses. Click any use case to see the details.
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
                    <a href="#" className="text-primary hover:underline font-medium">
                      Let&apos;s talk →
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
