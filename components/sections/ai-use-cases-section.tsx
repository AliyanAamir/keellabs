"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, FileText, Users, ShoppingCart, BarChart3, MessageSquare } from "lucide-react"

const useCases = [
  {
    id: "email",
    icon: Mail,
    title: "Email Automation",
    description: "Automatically sort, respond, and follow up on emails based on content and priority.",
    image: "/email-automation-dashboard.jpg",
  },
  {
    id: "documents",
    icon: FileText,
    title: "Document Processing",
    description: "Extract data from invoices, contracts, and forms with 99.5% accuracy.",
    image: "/document-processing-ai-interface.jpg",
  },
  {
    id: "crm",
    icon: Users,
    title: "CRM Updates",
    description: "Keep your CRM synchronized across all platforms automatically.",
    image: "/crm-automation-dashboard.png",
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce Flows",
    description: "Automate order processing, inventory updates, and customer notifications.",
    image: "/ecommerce-automation-workflow.jpg",
  },
  {
    id: "reporting",
    icon: BarChart3,
    title: "Report Generation",
    description: "Generate and distribute reports on schedule with real-time data.",
    image: "/automated-report-generation.jpg",
  },
  {
    id: "support",
    icon: MessageSquare,
    title: "Customer Support",
    description: "AI-powered ticket routing, responses, and escalation management.",
    image: "/ai-customer-support-interface.jpg",
  },
]

export function AIUseCasesSection() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [activeCase, setActiveCase] = useState(useCases[0])

  return (
    <section ref={containerRef} className="relative py-32 bg-secondary/30 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">Use Cases</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Automate Any <span className="text-primary">Business Process</span>
          </h2>
        </motion.div>

        {/* Interactive Tabs + Preview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${
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

          {/* Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border bg-card">
              <motion.img
                key={activeCase.id}
                src={activeCase.image}
                alt={activeCase.title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold mb-2">{activeCase.title}</h3>
                <p className="text-muted-foreground">{activeCase.description}</p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
