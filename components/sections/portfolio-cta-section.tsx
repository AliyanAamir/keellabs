"use client"

import type React from "react"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowRight, Sparkles } from "lucide-react"

export function PortfolioCTASection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(springY, [-200, 200], [5, -5])
  const rotateY = useTransform(springX, [-200, 200], [-5, 5])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative perspective-1000"
        >
          {/* Background Card with 3D tilt */}
          <motion.div
            className="relative rounded-3xl overflow-hidden"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Animated Gradient Background */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, #ea580c 0%, #f59e0b 50%, #3b82f6 100%)",
              }}
              animate={{
                backgroundPosition: isHovered ? ["0% 0%", "100% 100%"] : "0% 0%",
              }}
              transition={{ duration: 3, repeat: isHovered ? Number.POSITIVE_INFINITY : 0, repeatType: "reverse" }}
            />

            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
                  radial-gradient(at 40% 20%, rgba(255,255,255,0.3) 0px, transparent 50%),
                  radial-gradient(at 80% 0%, rgba(255,255,255,0.2) 0px, transparent 50%),
                  radial-gradient(at 0% 50%, rgba(255,255,255,0.2) 0px, transparent 50%),
                  radial-gradient(at 80% 50%, rgba(255,255,255,0.1) 0px, transparent 50%),
                  radial-gradient(at 0% 100%, rgba(255,255,255,0.2) 0px, transparent 50%)
                `,
              }}
              animate={{
                backgroundPosition: isHovered
                  ? ["0% 0%, 100% 0%, 0% 100%, 100% 100%, 50% 50%", "100% 100%, 0% 100%, 100% 0%, 0% 0%, 50% 50%"]
                  : "0% 0%, 100% 0%, 0% 100%, 100% 100%, 50% 50%",
              }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            />

            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

            {/* Moving Spotlight */}
            <motion.div
              className="absolute w-96 h-96 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)",
                x: springX,
                y: springY,
                left: "50%",
                top: "50%",
                marginLeft: "-12rem",
                marginTop: "-12rem",
              }}
            />

            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-32 h-32 rounded-full"
                style={{
                  background: `radial-gradient(circle, rgba(255,255,255,${0.1 + i * 0.02}) 0%, transparent 70%)`,
                  left: `${10 + i * 15}%`,
                  top: `${20 + (i % 3) * 30}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, 20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 5 + i,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              />
            ))}

            {/* Content */}
            <div className="relative z-10 p-12 md:p-20 text-center" style={{ transform: "translateZ(50px)" }}>
              {/* Sparkle Icon */}
              <motion.div
                animate={{
                  rotate: isHovered ? 360 : 0,
                  scale: isHovered ? [1, 1.2, 1] : 1,
                }}
                transition={{ duration: 2, ease: "linear" }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-8"
              >
                <Sparkles className="w-8 h-8 text-white" />
              </motion.div>

              <motion.h2
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <motion.span
                  animate={{
                    textShadow: isHovered
                      ? [
                          "0 0 20px rgba(255,255,255,0.5)",
                          "0 0 40px rgba(255,255,255,0.8)",
                          "0 0 20px rgba(255,255,255,0.5)",
                        ]
                      : "0 0 0px rgba(255,255,255,0)",
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  Ready to Build Something
                </motion.span>
                <br />
                <span className="text-white/90">Amazing Together?</span>
              </motion.h2>

              <motion.p
                className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Let&apos;s discuss your project and create something extraordinary that pushes boundaries and delivers
                results.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-8 py-4 bg-white text-orange-600 rounded-xl font-semibold shadow-xl shadow-black/20 flex items-center justify-center gap-2 group overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">Start a Project</span>
                  <motion.span
                    className="relative z-10"
                    animate={{ x: isHovered ? [0, 5, 0] : 0 }}
                    transition={{ duration: 0.5, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.25)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/20 transition-colors"
                >
                  View All Projects
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-white/20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {["150+ Projects", "50+ Clients", "15+ Awards"].map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-2 text-white/80"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1, color: "rgba(255,255,255,1)" }}
                  >
                    <motion.svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                    <span className="font-medium">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
