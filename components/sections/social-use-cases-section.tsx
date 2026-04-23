"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Briefcase, ShoppingBag, Video, Star, Megaphone, Users } from "lucide-react"

const useCases = [
  {
    id: "b2b-authority",
    icon: Briefcase,
    title: "B2B Authority Content",
    description:
      "Position your brand as an industry leader with thought-leadership posts, case studies, and educational content that attracts high-value B2B buyers.",
    highlight: "Become the go-to expert in your niche",
  },
  {
    id: "product-showcase",
    icon: ShoppingBag,
    title: "Product Showcase Posts",
    description:
      "Automated product highlight posts with compelling copy, consistent branding, and calls to action — generated from your inventory or catalog.",
    highlight: "Every product gets its spotlight",
  },
  {
    id: "video-reels",
    icon: Video,
    title: "Video & Reels Strategy",
    description:
      "Short-form video scripts, shot briefs, and caption packages designed for maximum reach on Instagram Reels, TikTok, and Facebook Video.",
    highlight: "Video content that actually converts",
  },
  {
    id: "testimonials",
    icon: Star,
    title: "Review & Testimonial Posts",
    description:
      "Turn your customer reviews into branded social proof posts automatically. Repurpose Google reviews, testimonials, and case study snippets.",
    highlight: "Social proof on autopilot",
  },
  {
    id: "campaigns",
    icon: Megaphone,
    title: "Event & Launch Campaigns",
    description:
      "Full content calendar for product launches, seasonal campaigns, and events — from teaser posts to launch day to follow-up content.",
    highlight: "Launch campaigns that build momentum",
  },
  {
    id: "community",
    icon: Users,
    title: "Community Engagement",
    description:
      "Engagement-first content — polls, questions, behind-the-scenes, and conversation starters that grow your following and boost algorithm reach.",
    highlight: "Build a community, not just a page",
  },
]

export function SocialUseCasesSection() {
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
            What We Create for <span className="text-primary">Your Brand</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real content strategies for real businesses. Click any use case to see the details.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
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
              <div className="absolute top-0 right-0 w-48 h-48 bg-pink-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

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
                    Want this for your brand?{" "}
                    <a href="/contact" className="text-primary hover:underline font-medium">
                      Let&apos;s talk →
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
