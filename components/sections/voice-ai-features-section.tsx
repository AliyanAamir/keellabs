"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Phone, MessageSquare, UserCheck, Calendar, PhoneForwarded, Globe, ArrowRight } from "lucide-react"

const features = [
  {
    icon: Phone,
    title: "24/7 Call Handling",
    description: "Your AI voice agent picks up every call — day or night, weekends and holidays — so no lead or customer ever goes to voicemail.",
    color: "from-orange-500/20 to-orange-600/5",
  },
  {
    icon: MessageSquare,
    title: "Natural Conversations",
    description: "Powered by advanced LLMs and premium voice models from ElevenLabs, your agent sounds human and handles complex dialogue naturally.",
    color: "from-purple-500/20 to-purple-600/5",
  },
  {
    icon: UserCheck,
    title: "Lead Qualification",
    description: "Your voice agent asks the right questions, scores leads in real time, and routes hot prospects directly to your sales team.",
    color: "from-green-500/20 to-green-600/5",
  },
  {
    icon: Calendar,
    title: "Appointment Booking",
    description: "Integrated with your calendar, the agent checks availability and books meetings on the spot — no back-and-forth needed.",
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    icon: PhoneForwarded,
    title: "Call Transfer & Escalation",
    description: "When a caller needs a human, the agent warm-transfers to the right team member with full context of the conversation.",
    color: "from-pink-500/20 to-pink-600/5",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Serve callers in multiple languages with natural-sounding voices, expanding your reach without hiring multilingual staff.",
    color: "from-cyan-500/20 to-cyan-600/5",
  },
]

export function VoiceAIFeaturesSection() {
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
            Voice AI Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Your <span className="text-primary">Voice Agent</span> Can Do
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From answering simple FAQs to qualifying leads and booking appointments — your AI agent handles it all over the phone.
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
