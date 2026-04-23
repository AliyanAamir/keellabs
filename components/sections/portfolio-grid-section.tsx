"use client"

import type React from "react"

import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import { useState, useRef } from "react"
import Image from "next/image"
import { ArrowUpRight, ExternalLink } from "lucide-react"

const categories = ["All", "n8n", "Go High Level", "Voice AI", "Zapier / Make", "Agentic AI"]

const projects = [
  {
    id: 1,
    title: "n8n Lead Routing Engine",
    category: "n8n",
    description:
      "Multi-source lead capture workflow that scores, routes, and enriches leads from 6 channels into a unified CRM — with Slack alerts for hot prospects.",
    image: "/crm-automation-dashboard.png",
    tags: ["n8n", "HubSpot", "Slack", "OpenAI"],
    color: "from-orange-500/20 to-amber-500/20",
    stats: { leads: "2K+/mo", timeSaved: "40hrs/wk", accuracy: "97%" },
  },
  {
    id: 2,
    title: "GHL Appointment Machine",
    category: "Go High Level",
    description:
      "Full GHL setup for a home services company — online booking, automated SMS reminders, no-show follow-ups, and Google review requests after every job.",
    image: "/ecommerce-automation-workflow.jpg",
    tags: ["Go High Level", "SMS", "Google Reviews"],
    color: "from-blue-500/20 to-cyan-500/20",
    stats: { showRate: "+32%", reviews: "180+ new", revenue: "+$85K" },
  },
  {
    id: 3,
    title: "ElevenLabs Voice Agent",
    category: "Voice AI",
    description:
      "24/7 AI receptionist for a dental clinic that answers inbound calls, handles FAQs, and books appointments directly into the practice calendar.",
    image: "/ai-customer-support-interface.jpg",
    tags: ["Vapi", "ElevenLabs", "GHL", "n8n"],
    color: "from-purple-500/20 to-pink-500/20",
    stats: { calls: "500+/mo", booked: "68% rate", savings: "1 FTE" },
  },
  {
    id: 4,
    title: "E-commerce Automation Stack",
    category: "Zapier / Make",
    description:
      "End-to-end Shopify automation — order confirmation flows, abandoned cart recovery, inventory sync to Airtable, and customer review requests via Klaviyo.",
    image: "/email-automation-dashboard.jpg",
    tags: ["Make", "Shopify", "Klaviyo", "Airtable"],
    color: "from-amber-500/20 to-yellow-500/20",
    stats: { recovery: "+22%", timeSaved: "25hrs/wk", orders: "3K+/mo" },
  },
  {
    id: 5,
    title: "AI Research & Outreach Agent",
    category: "Agentic AI",
    description:
      "Autonomous GPT-4 agent that researches target prospects, writes personalized cold emails, and queues them into an outbound sequence — entirely hands-free.",
    image: "/document-processing-ai-interface.jpg",
    tags: ["n8n", "GPT-4", "Apollo", "Instantly"],
    color: "from-green-500/20 to-emerald-500/20",
    stats: { prospects: "1K+/wk", replyRate: "8.4%", meetings: "+14/mo" },
  },
  {
    id: 6,
    title: "GHL Real Estate Lead System",
    category: "Go High Level",
    description:
      "Full pipeline for a real estate team — Facebook/Google lead capture, instant SMS follow-up within 60 seconds, nurture sequences, and deal tracking in GHL CRM.",
    image: "/automated-report-generation.jpg",
    tags: ["Go High Level", "Facebook Ads", "Zapier"],
    color: "from-red-500/20 to-orange-500/20",
    stats: { leads: "300+/mo", speed: "60s reply", closings: "+8/mo" },
  },
]

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const brightness = useMotionValue(1)

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 })
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 })
  const springBrightness = useSpring(brightness, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    rotateX.set((y - 0.5) * -20)
    rotateY.set((x - 0.5) * 20)
    brightness.set(1.1)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
    brightness.set(1)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        filter: `brightness(${springBrightness.get()})`,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function PortfolioGridSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-orange-950/5 to-background" />

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"
            style={{
              top: `${20 + i * 20}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Real <span className="text-orange-500">Automation Projects</span>
          </motion.h2>
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full mx-auto mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            n8n workflows, GHL systems, voice AI agents, and agentic automations we&apos;ve built for real businesses
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden ${
                activeCategory === category
                  ? "text-white"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-orange-500 rounded-full shadow-lg shadow-orange-500/25"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative"
              >
                <TiltCard>
                  <div
                    className={`relative bg-card rounded-2xl overflow-hidden border border-border/50 transition-all duration-500 ${
                      hoveredProject === project.id ? "border-orange-500/50 shadow-2xl shadow-orange-500/20" : ""
                    }`}
                  >
                    <motion.div
                      className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-orange-500 rounded-tl-2xl"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0,
                        scale: hoveredProject === project.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-blue-500 rounded-br-2xl"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0,
                        scale: hoveredProject === project.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 mix-blend-multiply`}
                      />

                      <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"
                        initial={{ y: "-100%" }}
                        animate={{ y: hoveredProject === project.id ? "100%" : "-100%" }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      />

                      {/* Overlay on Hover */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                        className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4"
                      >
                        <motion.button
                          initial={{ scale: 0.8, opacity: 0, y: 20 }}
                          animate={{
                            scale: hoveredProject === project.id ? 1 : 0.8,
                            opacity: hoveredProject === project.id ? 1 : 0,
                            y: hoveredProject === project.id ? 0 : 20,
                          }}
                          transition={{ delay: 0.1 }}
                          className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-full font-medium"
                        >
                          View Project <ArrowUpRight className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                          initial={{ scale: 0.8, opacity: 0, y: 20 }}
                          animate={{
                            scale: hoveredProject === project.id ? 1 : 0.8,
                            opacity: hoveredProject === project.id ? 1 : 0,
                            y: hoveredProject === project.id ? 0 : 20,
                          }}
                          transition={{ delay: 0.2 }}
                          className="p-3 bg-muted/50 backdrop-blur-sm rounded-full"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.button>
                      </motion.div>

                      {/* Category Badge */}
                      <motion.div
                        className="absolute top-4 left-4 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        {project.category}
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <motion.h3
                        className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                      {/* Tags with stagger animation */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <motion.span
                            key={tag}
                            className="px-2 py-1 bg-muted/50 rounded-md text-xs text-muted-foreground"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: tagIndex * 0.05 }}
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(234,88,12,0.2)" }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>

                      {/* Stats - Expandable */}
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: hoveredProject === project.id ? "auto" : 0,
                          opacity: hoveredProject === project.id ? 1 : 0,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="flex justify-between pt-4 border-t border-border/50">
                          {Object.entries(project.stats).map(([key, value], statIndex) => (
                            <motion.div
                              key={key}
                              className="text-center"
                              initial={{ y: 20, opacity: 0 }}
                              animate={{
                                y: hoveredProject === project.id ? 0 : 20,
                                opacity: hoveredProject === project.id ? 1 : 0,
                              }}
                              transition={{ delay: statIndex * 0.1 }}
                            >
                              <div className="text-lg font-bold text-orange-500">{value}</div>
                              <div className="text-xs text-muted-foreground capitalize">{key}</div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 rounded-xl font-semibold overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-500"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              style={{ backgroundSize: "200% 200%" }}
            />
            <span className="relative z-10 text-white flex items-center gap-2">
              Load More Projects
              <motion.span animate={{ y: [0, 3, 0] }} transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}>
                ↓
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
