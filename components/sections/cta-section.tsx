"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/magnetic-button"
import { TextReveal } from "@/components/text-reveal"
import { SectionAnimator } from "@/components/section-animator"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} id="contact" className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(234, 88, 12, 0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <SectionAnimator animation="parallax-fade" className="relative z-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          {/* Badge - Added bounce-in animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3, y: 50 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Start Free Today</span>
          </motion.div>

          {/* Title */}
          <TextReveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Ready to transform
              <span className="block text-primary mt-2">your workflows?</span>
            </h2>
          </TextReveal>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Join thousands of companies using Keel Lab to automate repetitive tasks and boost productivity. Start your
            free trial today—no credit card required.
          </motion.p>

          {/* CTA Buttons - Added staggered scale animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
            >
              <Link href="/contact">
                <MagneticButton>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Get Started Free
                      <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }}>
                        <ArrowRight className="w-5 h-5" />
                      </motion.span>
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-accent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </MagneticButton>
              </Link>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.85, type: "spring", stiffness: 200 }}
            >
              <Link href="/contact">
                <MagneticButton>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 py-6 text-lg border-border hover:border-primary bg-transparent"
                  >
                    Schedule Demo
                  </Button>
                </MagneticButton>
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust Indicators - Added staggered fade animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-muted-foreground"
          >
            {[{ text: "14-day free trial" }, { text: "No credit card required" }, { text: "Cancel anytime" }].map(
              (item, index) => (
                <motion.span
                  key={item.text}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <motion.span
                    className="w-2 h-2 bg-green-500 rounded-full"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 1.1 + index * 0.1, type: "spring" }}
                  />
                  {item.text}
                </motion.span>
              ),
            )}
          </motion.div>
        </div>
      </SectionAnimator>
    </section>
  )
}
