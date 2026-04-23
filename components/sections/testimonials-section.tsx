"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { TextReveal } from "@/components/text-reveal"
import { SectionAnimator } from "@/components/section-animator"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "They built our entire n8n automation stack in two weeks. Lead data now flows from our website straight into our CRM, Slack, and email sequences without anyone touching it. We've saved 30+ hours a week.",
    author: "Marcus Hill",
    role: "Head of Operations",
    company: "Growlabs Agency",
    avatar: "/professional-man-headshot.png",
  },
  {
    quote:
      "Our Go High Level setup was a mess before Keellab stepped in. They rebuilt our pipelines, automated all our follow-up sequences, and our appointment show rate jumped from 40% to 72% in the first month.",
    author: "Priya Nair",
    role: "Founder",
    company: "Elite Home Services",
    avatar: "/professional-woman-headshot.png",
  },
  {
    quote:
      "The Vapi voice agent they built handles all our inbound calls 24/7. It qualifies leads, answers FAQs, and books consultations directly into our calendar. We added a second sales rep effectively for free.",
    author: "James Kowalski",
    role: "CEO",
    company: "Apex Roofing & Solar",
    avatar: "/professional-woman-executive-headshot.png",
  },
]

const logos = ["n8n", "Go High Level", "Vapi", "ElevenLabs", "Retell AI", "Zapier", "Make", "OpenAI", "Airtable"]

export function TestimonialsSection() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={containerRef} id="pricing" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <SectionAnimator animation="slide-right" className="relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Logos Marquee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <p className="text-center text-sm text-muted-foreground mb-8">Platforms we use to build your automation systems</p>
            <div className="relative overflow-hidden">
              <motion.div
                animate={{ x: [0, -1000] }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="flex gap-12 items-center"
              >
                {[...logos, ...logos].map((logo, index) => (
                  <div
                    key={index}
                    className="text-2xl font-bold text-muted-foreground/50 whitespace-nowrap hover:text-primary transition-colors"
                  >
                    {logo}
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Section Header */}
          <div className="text-center mb-16">
            <TextReveal>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Trusted by
                <span className="text-primary ml-4">industry leaders</span>
              </h2>
            </TextReveal>
          </div>

          {/* Testimonial Carousel - Added flip-up animation for testimonial cards */}
          <div className="relative max-w-4xl mx-auto">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, rotateX: -90, transformPerspective: 1000 }}
              animate={{ opacity: 1, rotateX: 0 }}
              exit={{ opacity: 0, rotateX: 90 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
            >
              <Card className="p-8 md:p-12 bg-card border-border relative overflow-hidden">
                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="absolute top-6 right-6 text-primary/20"
                >
                  <Quote className="w-16 h-16" />
                </motion.div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-8">
                  &ldquo;{testimonials[activeIndex].quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <motion.img
                    src={testimonials[activeIndex].avatar}
                    alt={testimonials[activeIndex].author}
                    className="w-14 h-14 rounded-full border-2 border-primary"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonials[activeIndex].author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                    </div>
                  </div>
                </div>

                {/* Decorative Element */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                />
              </Card>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-secondary border border-border hover:border-primary transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === activeIndex ? "bg-primary" : "bg-muted"
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-secondary border border-border hover:border-primary transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </SectionAnimator>
    </section>
  )
}
