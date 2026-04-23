"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MessageCircle, UserCheck, BookOpen, ArrowRightLeft, MessagesSquare, BarChart3, ArrowRight } from "lucide-react"

const features = [
  {
    icon: MessageCircle,
    title: "Instant DM Responses",
    description: "Reply to customer messages in seconds, not hours. Your AI chatbot handles DMs on Instagram, Facebook, and website chat instantly.",
    color: "from-orange-500/20 to-orange-600/5",
  },
  {
    icon: UserCheck,
    title: "Lead Qualification",
    description: "Automatically ask the right questions, score leads, and route hot prospects to your sales team — no manual triage needed.",
    color: "from-emerald-500/20 to-emerald-600/5",
  },
  {
    icon: BookOpen,
    title: "Knowledge Base Powered",
    description: "Train your chatbot on your docs, FAQs, pricing, and policies so it gives accurate, on-brand answers every time.",
    color: "from-green-500/20 to-green-600/5",
  },
  {
    icon: ArrowRightLeft,
    title: "Human Handoff",
    description: "Seamlessly escalate complex conversations to a live agent with full context — no customer has to repeat themselves.",
    color: "from-purple-500/20 to-purple-600/5",
  },
  {
    icon: MessagesSquare,
    title: "Multi-Channel Support",
    description: "One chatbot across Facebook Messenger, Instagram DMs, WhatsApp, website chat, and SMS — unified and consistent.",
    color: "from-pink-500/20 to-pink-600/5",
  },
  {
    icon: BarChart3,
    title: "Conversation Analytics",
    description: "Track resolution rates, response times, common questions, and customer satisfaction to continuously improve your bot.",
    color: "from-cyan-500/20 to-cyan-600/5",
  },
]

export function ChatbotsFeaturesSection() {
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
            Chatbot Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Your <span className="text-primary">AI Chatbot</span> Can Do
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From instant replies to deep analytics — we build chatbots that handle your conversations end to end.
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
