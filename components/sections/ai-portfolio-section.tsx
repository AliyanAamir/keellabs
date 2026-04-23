"use client"

import type React from "react"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowUpRight, Play, Pause, ExternalLink } from "lucide-react"
import Link from "next/link"

const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Automation Suite",
    category: "Retail",
    description:
      "Automated inventory management, order processing, and customer support for a leading online retailer.",
    stats: { efficiency: "340%", timeSaved: "120hrs/week", roi: "5.2x" },
    tags: ["Inventory", "Orders", "Support"],
    color: "from-orange-500 to-amber-500",
    preview: "/ecommerce-dashboard-automation-interface.jpg",
  },
  {
    id: 2,
    title: "Healthcare Data Pipeline",
    category: "Healthcare",
    description: "HIPAA-compliant data processing automation for patient records and appointment scheduling.",
    stats: { efficiency: "280%", timeSaved: "80hrs/week", roi: "4.1x" },
    tags: ["HIPAA", "Records", "Scheduling"],
    color: "from-blue-500 to-cyan-500",
    preview: "/healthcare-data-pipeline-dashboard-interface.jpg",
  },
  {
    id: 3,
    title: "Financial Report Generator",
    category: "Finance",
    description: "Automated financial reporting and compliance documentation for enterprise clients.",
    stats: { efficiency: "420%", timeSaved: "200hrs/week", roi: "7.8x" },
    tags: ["Reports", "Compliance", "Analytics"],
    color: "from-emerald-500 to-green-500",
    preview: "/financial-analytics-dashboard-reporting-interface.jpg",
  },
  {
    id: 4,
    title: "Marketing Campaign Orchestrator",
    category: "Marketing",
    description: "Multi-channel campaign automation with AI-powered content generation and optimization.",
    stats: { efficiency: "510%", timeSaved: "150hrs/week", roi: "6.3x" },
    tags: ["Campaigns", "AI Content", "Multi-channel"],
    color: "from-purple-500 to-pink-500",
    preview: "/marketing-campaign-dashboard-automation-interface.jpg",
  },
  {
    id: 5,
    title: "Supply Chain Optimizer",
    category: "Logistics",
    description: "End-to-end supply chain automation with predictive analytics and real-time tracking.",
    stats: { efficiency: "290%", timeSaved: "100hrs/week", roi: "4.5x" },
    tags: ["Logistics", "Tracking", "Predictive"],
    color: "from-orange-500 to-red-500",
    preview: "/supply-chain-logistics-dashboard-tracking-interfac.jpg",
  },
  {
    id: 6,
    title: "HR Onboarding System",
    category: "Human Resources",
    description: "Streamlined employee onboarding with automated document processing and training workflows.",
    stats: { efficiency: "380%", timeSaved: "90hrs/week", roi: "5.9x" },
    tags: ["Onboarding", "Documents", "Training"],
    color: "from-blue-500 to-indigo-500",
    preview: "/hr-onboarding-system-dashboard-interface.jpg",
  },
]

const categories = ["All", "Retail", "Healthcare", "Finance", "Marketing", "Logistics", "Human Resources"]

// Animated SVG background pattern
function AnimatedPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="portfolioGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
        </linearGradient>
        <pattern id="gridPattern" width="60" height="60" patternUnits="userSpaceOnUse">
          <motion.circle
            cx="30"
            cy="30"
            r="1"
            fill="url(#portfolioGrad)"
            animate={{ r: [1, 2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#gridPattern)" />
      {/* Animated connecting lines */}
      {[...Array(5)].map((_, i) => (
        <motion.line
          key={i}
          x1={`${10 + i * 20}%`}
          y1="0%"
          x2={`${20 + i * 20}%`}
          y2="100%"
          stroke="url(#portfolioGrad)"
          strokeWidth="0.5"
          strokeDasharray="5,10"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 2, delay: i * 0.2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />
      ))}
    </svg>
  )
}

// Interactive card with 3D tilt effect
function PortfolioCard({
  item,
  index,
  isInView,
}: {
  item: (typeof portfolioItems)[0]
  index: number
  isInView: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMousePosition({ x, y })
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setMousePosition({ x: 0, y: 0 })
      }}
      onMouseMove={handleMouseMove}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateY(${mousePosition.x * 10}deg) rotateX(${-mousePosition.y * 10}deg)`
          : "perspective(1000px) rotateY(0deg) rotateX(0deg)",
        transition: "transform 0.1s ease-out",
      }}
      className="group relative rounded-2xl border border-border bg-card overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      />

      {/* Spotlight effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: isHovered
            ? `radial-gradient(400px circle at ${(mousePosition.x + 0.5) * 100}% ${(mousePosition.y + 0.5) * 100}%, rgba(249, 115, 22, 0.15), transparent 40%)`
            : "none",
        }}
      />

      {/* Preview Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={item.preview}
          alt={item.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />

        {/* Category badge */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.3 }}
          className="absolute top-4 left-4"
        >
          <span
            className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${item.color} text-white shadow-lg`}
          >
            {item.category}
          </span>
        </motion.div>

        {/* View project button */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
          className="absolute top-4 right-4"
        >
          <button className="p-2 rounded-full bg-white/90 text-background hover:bg-white transition-colors">
            <ExternalLink className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{item.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {item.tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.05 }}
              className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
          className="overflow-hidden"
        >
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
            <div className="text-center">
              <motion.span
                initial={{ scale: 0.5 }}
                animate={{ scale: isHovered ? 1 : 0.5 }}
                className={`block text-lg font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
              >
                {item.stats.efficiency}
              </motion.span>
              <span className="text-xs text-muted-foreground">Efficiency</span>
            </div>
            <div className="text-center">
              <motion.span
                initial={{ scale: 0.5 }}
                animate={{ scale: isHovered ? 1 : 0.5 }}
                transition={{ delay: 0.05 }}
                className={`block text-lg font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
              >
                {item.stats.timeSaved}
              </motion.span>
              <span className="text-xs text-muted-foreground">Time Saved</span>
            </div>
            <div className="text-center">
              <motion.span
                initial={{ scale: 0.5 }}
                animate={{ scale: isHovered ? 1 : 0.5 }}
                transition={{ delay: 0.1 }}
                className={`block text-lg font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
              >
                {item.stats.roi}
              </motion.span>
              <span className="text-xs text-muted-foreground">ROI</span>
            </div>
          </div>
        </motion.div>

        {/* Arrow indicator */}
        <motion.div
          className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
          animate={{ x: isHovered ? 5 : 0 }}
        >
          <ArrowUpRight className="w-5 h-5 text-primary" />
        </motion.div>
      </div>
    </motion.div>
  )
}

// Animated counter for stats
function AnimatedStat({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ type: "spring", stiffness: 100, delay: delay + 0.2 }}
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent"
      >
        {value}
      </motion.div>
      <p className="text-muted-foreground mt-2">{label}</p>
    </motion.div>
  )
}

export function AIPortfolioSection() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("All")
  const [isPlaying, setIsPlaying] = useState(true)

  const filteredItems =
    activeCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <AnimatedPattern />
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wider uppercase mb-4 px-4 py-2 rounded-full border border-primary/20 bg-primary/5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Success Stories
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover how we've helped businesses transform their operations with intelligent automation solutions.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm"
        >
          <AnimatedStat value="150+" delay={0} label="Projects Completed" />
          <AnimatedStat value="98%" delay={0.1} label="Client Satisfaction" />
          <AnimatedStat value="$50M+" delay={0.2} label="Revenue Generated" />
          <AnimatedStat value="500K+" delay={0.3} label="Hours Automated" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </motion.button>
          ))}

          {/* Auto-play toggle */}
          <motion.button
            onClick={() => setIsPlaying(!isPlaying)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-full text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 flex items-center gap-2"
          >
            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            {isPlaying ? "Pause" : "Play"}
          </motion.button>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <PortfolioCard item={item} index={index} isInView={isInView} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-blue-500 text-white font-medium shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-shadow"
          >
            View All Case Studies
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              <ArrowUpRight className="w-5 h-5" />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
