"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/magnetic-button"
import { ArrowRight, Play, Zap, ChevronDown } from "lucide-react"
import { GridPattern } from "@/components/grid-pattern"
import { FloatingParticles } from "@/components/floating-particles"
import { MorphingText } from "@/components/morphing-text"
import { TypewriterText } from "@/components/typewriter-text"
import { AnimatedBorder } from "@/components/animated-border"

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const titleLetters = "REDEFINE".split("")

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video background for hero section */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FINAL-RckYxzdjcqsFiFTseB2aY3s4UBhBE5.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70" />
        <div
          className="absolute inset-x-0 bottom-0 h-64 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(234, 88, 12, 0.08) 50%, rgba(234, 88, 12, 0.15) 100%)",
          }}
        />
      </div>

      {/* Background layers */}
      <GridPattern />
      <FloatingParticles count={40} />

      {/* Vignette effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* Main content */}
      <motion.div style={{ y, opacity, scale }} className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Animated badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={isLoaded ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AnimatedBorder className="inline-block mb-12">
            <div className="flex items-center gap-3 px-6 py-3 bg-secondary/50 backdrop-blur-xl">
              <motion.div
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
              <span className="text-sm text-muted-foreground">Next Generation Platform</span>
              <ArrowRight className="w-4 h-4 text-primary" />
            </div>
          </AnimatedBorder>
        </motion.div>

        {/* Main title with letter animation */}
        <div className="mb-8">
          <motion.p
            className="text-lg md:text-xl text-muted-foreground tracking-[0.3em] uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <TypewriterText text="THE FUTURE OF AUTOMATION" delay={500} speed={40} />
          </motion.p>

          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-bold tracking-tighter leading-[0.85] mb-6"></h1>

          {/* Morphing subtitle */}
          <motion.div
            className="text-3xl md:text-5xl font-light text-primary"
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <MorphingText texts={["YOUR WORKFLOWS", "YOUR LEADS", "YOUR REVENUE", "YOUR GROWTH"]} interval={2500} />
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-14 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          We build <span className="text-primary font-medium">AI automation systems</span> using n8n, Go High Level, Vapi, and more —
          so your business runs <span className="text-foreground font-medium">without you in the loop</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <MagneticButton>
            <Button
              size="lg"
              className="relative bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-7 text-lg font-medium overflow-hidden group"
            >
              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                animate={{ translateX: ["−100%", "200%"] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
              />
              <span className="relative flex items-center gap-3">
                <Zap className="w-5 h-5" />
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </MagneticButton>

          <MagneticButton>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-10 py-7 text-lg border-border/50 hover:border-primary/50 hover:bg-primary/5 group bg-background/50 backdrop-blur-sm"
            >
              <Play className="w-5 h-5 mr-2 text-primary" />
              <span>Watch Demo</span>
            </Button>
          </MagneticButton>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mt-24 pt-12 border-t border-border/20"
          initial={{ opacity: 0, y: 40 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
        >
          {[
            { value: "80+", label: "Workflows Built" },
            { value: "10K+", label: "Hours Saved" },
            { value: "100%", label: "Done-For-You" },
            { value: "9+", label: "Platforms" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 2.2 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-300"
                whileHover={{
                  textShadow: "0 0 30px rgba(255,120,50,0.4)",
                }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 cursor-pointer group"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          onClick={() => {
            document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary transition-colors">
            Scroll
          </span>
          <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </motion.div>
      </motion.div>

      {/* Decorative corner elements */}
      <motion.div
        className="absolute top-20 left-20 w-px h-32 bg-gradient-to-b from-primary/50 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.div
        className="absolute top-20 left-20 w-32 h-px bg-gradient-to-r from-primary/50 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-px h-32 bg-gradient-to-t from-primary/50 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-32 h-px bg-gradient-to-l from-primary/50 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      />
    </section>
  )
}
