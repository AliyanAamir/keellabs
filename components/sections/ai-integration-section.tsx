"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const integrations = [
  { name: "Slack", logo: "/slack-logo.png" },
  { name: "Salesforce", logo: "/salesforce-logo.png" },
  { name: "HubSpot", logo: "/hubspot-logo.png" },
  { name: "Notion", logo: "/notion-logo.png" },
  { name: "Stripe", logo: "/stripe-logo.png" },
  { name: "Shopify", logo: "/shopify-logo.png" },
  { name: "Zendesk", logo: "/zendesk-logo.png" },
  { name: "Jira", logo: "/jira-logo.png" },
  { name: "Google", logo: "/google-logo.png" },
  { name: "Microsoft", logo: "/microsoft-logo.png" },
  { name: "Dropbox", logo: "/dropbox-logo.png" },
  { name: "Twilio", logo: "/twilio-logo.png" },
]

export function AIIntegrationSection() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">Integrations</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Connect with <span className="text-primary">500+ Apps</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Seamlessly integrate with the tools your team already uses.
          </p>
        </motion.div>

        {/* Hexagon Grid of Integrations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
              whileHover={{
                scale: 1.1,
                y: -5,
                boxShadow: "0 20px 40px rgba(255,120,50,0.15)",
              }}
              className="aspect-square rounded-2xl bg-card border border-border p-4 flex flex-col items-center justify-center gap-2 group hover:border-primary/50 transition-colors"
            >
              <img
                src={integration.logo || "/placeholder.svg"}
                alt={integration.name}
                className="w-10 h-10 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                {integration.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center text-muted-foreground mt-12"
        >
          And hundreds more... Can&apos;t find your app?{" "}
          <a href="#" className="text-primary hover:underline">
            Request an integration
          </a>
        </motion.p>
      </div>
    </section>
  )
}
