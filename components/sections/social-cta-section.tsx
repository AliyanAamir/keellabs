"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/magnetic-button"
import { ArrowRight, Share2 } from "lucide-react"

export function SocialCTASection() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-pink-500/5" />

      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/30 mb-8"
          >
            <Share2 className="w-10 h-10 text-primary" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Put Your Social Media{" "}
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              on Autopilot?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Tell us about your brand and we&apos;ll build a content engine that posts consistently, sounds exactly like
            you, and keeps your audience growing — without you touching it every week.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <MagneticButton>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 h-14 text-lg group"
              >
                Get Your Content Engine
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-10 h-14 text-lg border-border hover:border-primary hover:text-primary bg-transparent"
              >
                Book a Free Discovery Call
              </Button>
            </MagneticButton>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            Free consultation • Custom brand voice • First month content included
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
