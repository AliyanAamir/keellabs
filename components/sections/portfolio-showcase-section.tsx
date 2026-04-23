"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { Play, Pause, Volume2, Maximize2 } from "lucide-react"

const showcaseProjects = [
  {
    id: 1,
    title: "n8n Multi-Channel Automation Hub",
    subtitle: "End-to-End Business Automation for an E-commerce Brand",
    description:
      "We built a central n8n automation hub connecting Shopify, Klaviyo, HubSpot, Airtable, Slack, and a custom warehouse API. Every order, refund, review, and support ticket now triggers the right automated action — no manual intervention required. The system handles 3,000+ events per day.",
    image: "/crm-automation-dashboard.png",
    video: null,
    features: ["15 App Integrations", "Order Lifecycle Automation", "Custom Error Handling", "Real-time Slack Alerts"],
    metrics: [
      { label: "Daily Events Processed", value: "3,000+" },
      { label: "Hours Saved Per Week", value: "55hrs" },
      { label: "Manual Errors Eliminated", value: "100%" },
    ],
  },
  {
    id: 2,
    title: "GHL Lead Machine for Real Estate",
    subtitle: "Full Go High Level Sales System for a Regional Real Estate Team",
    description:
      "A complete GHL rebuild for a 12-agent real estate team — Facebook and Google lead capture feeding directly into GHL pipelines, instant SMS follow-up within 60 seconds of a lead opting in, a 21-day nurture sequence, appointment booking with calendar sync, and automated review requests post-closing. The team went from 2-hour average response time to under 1 minute.",
    image: "/ecommerce-automation-workflow.jpg",
    video: null,
    features: ["Instant SMS Follow-Up", "21-Day Nurture Sequence", "Calendar Booking Automation", "Review Request Flow"],
    metrics: [
      { label: "Lead Response Time", value: "<60 sec" },
      { label: "Appointments Booked/mo", value: "+34" },
      { label: "New Google Reviews", value: "220+" },
    ],
  },
]

export function PortfolioShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeShowcase, setActiveShowcase] = useState(0)

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-orange-500 text-sm font-medium tracking-wider uppercase mb-4 block">Deep Dives</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Inside Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500">
              Best Work
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A closer look at two of our most impactful automation builds — the problem, the solution, and the results.
          </p>
        </motion.div>

        {/* Showcase Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {showcaseProjects.map((project, index) => (
            <motion.button
              key={project.id}
              onClick={() => setActiveShowcase(index)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeShowcase === index
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg"
                  : "bg-muted/30 text-muted-foreground hover:bg-muted/50"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {project.title}
            </motion.button>
          ))}
        </div>

        {/* Showcase Content */}
        <AnimatedShowcase project={showcaseProjects[activeShowcase]} />
      </div>
    </section>
  )
}

function AnimatedShowcase({ project }: { project: (typeof showcaseProjects)[0] }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    })
  }

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="grid lg:grid-cols-2 gap-12 items-center"
    >
      {/* Image/Video Container */}
      <div className="relative group">
        <motion.div
          className="relative aspect-video rounded-2xl overflow-hidden border border-border/50"
          style={{
            transform: `perspective(1000px) rotateY(${(mousePosition.x - 0.5) * 5}deg) rotateX(${(mousePosition.y - 0.5) * -5}deg)`,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />

          {/* Play Overlay */}
          <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center shadow-xl shadow-orange-500/30"
            >
              {isPlaying ? <Pause className="w-8 h-8 text-white" /> : <Play className="w-8 h-8 text-white ml-1" />}
            </motion.button>
          </div>

          {/* Video Controls */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-orange-500"
                initial={{ width: "0%" }}
                animate={{ width: isPlaying ? "100%" : "0%" }}
                transition={{ duration: 30, ease: "linear" }}
              />
            </div>
            <button className="text-white/70 hover:text-white">
              <Volume2 className="w-5 h-5" />
            </button>
            <button className="text-white/70 hover:text-white">
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-50 -z-10" />
      </div>

      {/* Content */}
      <div className="space-y-8">
        <div>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-orange-500 font-medium"
          >
            {project.subtitle}
          </motion.span>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mt-2"
          >
            {project.title}
          </motion.h3>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg leading-relaxed"
        >
          {project.description}
        </motion.p>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-3"
        >
          {project.features.map((feature, index) => (
            <motion.span
              key={feature}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="px-4 py-2 bg-muted/50 rounded-lg text-sm font-medium border border-border/50"
            >
              {feature}
            </motion.span>
          ))}
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-3 gap-6 pt-6 border-t border-border/50"
        >
          {project.metrics.map((metric, index) => (
            <div key={metric.label} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400"
              >
                {metric.value}
              </motion.div>
              <div className="text-sm text-muted-foreground mt-1">{metric.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-medium shadow-lg shadow-orange-500/25 flex items-center gap-2 group"
        >
          View Full Case Study
          <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
            →
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  )
}
