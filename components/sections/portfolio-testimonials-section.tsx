"use client"

import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    quote:
      "Working with this team transformed our entire digital infrastructure. The AI automation they built saves us 40 hours per week.",
    author: "Sarah Chen",
    role: "CTO at TechCorp",
    company: "TechCorp Industries",
    image: "/professional-woman-headshot.png",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "The attention to detail and innovative approach exceeded our expectations. Our platform performance improved by 300%.",
    author: "Michael Rodriguez",
    role: "VP Engineering",
    company: "DataFlow Systems",
    image: "/professional-man-headshot.png",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "From concept to deployment, the team delivered a solution that perfectly matched our vision. Highly recommended!",
    author: "Emily Watson",
    role: "Product Director",
    company: "InnovateTech",
    image: "/professional-woman-executive-headshot.png",
    rating: 5,
  },
]

export function PortfolioTestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const constraintsRef = useRef(null)
  const x = useMotionValue(0)
  const opacity = useTransform(x, [-200, 0, 200], [0.5, 1, 0.5])

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const handlePrev = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x > 100) {
      handlePrev()
    } else if (info.offset.x < -100) {
      handleNext()
    }
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? 15 : -15,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      rotateY: direction < 0 ? 15 : -15,
    }),
  }

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full">
          <pattern id="testimonial-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="1" fill="currentColor" className="text-orange-500/30" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#testimonial-pattern)" />
        </svg>
      </div>

      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-orange-500/5"
          style={{
            left: `${10 + i * 20}%`,
            top: `${20 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          <Quote className="w-24 h-24" />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            className="text-orange-500 text-sm font-medium tracking-wider uppercase mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Testimonials
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="text-orange-500">Testimonials</span>
          </h2>
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full mx-auto mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-muted-foreground">What our partners say about working with us</p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative" ref={constraintsRef}>
          {/* Large Quote Icon */}
          <motion.div
            className="absolute -top-8 left-8 text-orange-500/10"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            <Quote className="w-32 h-32" />
          </motion.div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              drag="x"
              dragConstraints={constraintsRef}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              style={{ x, opacity }}
              className="relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border/50 cursor-grab active:cursor-grabbing"
            >
              <motion.div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: "linear-gradient(90deg, rgba(234,88,12,0.3), rgba(59,130,246,0.3), rgba(234,88,12,0.3))",
                  backgroundSize: "200% 100%",
                  padding: "1px",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <motion.svg
                    key={i}
                    className="w-5 h-5 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>

              {/* Quote with typewriter effect */}
              <motion.blockquote
                className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-foreground/90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                &ldquo;{testimonials[activeIndex].quote}&rdquo;
              </motion.blockquote>

              {/* Author Info */}
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-orange-500/50"
                  whileHover={{ scale: 1.1 }}
                  animate={{
                    borderColor: ["rgba(234,88,12,0.5)", "rgba(59,130,246,0.5)", "rgba(234,88,12,0.5)"],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Image
                    src={testimonials[activeIndex].image || "/placeholder.svg"}
                    alt={testimonials[activeIndex].author}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div>
                  <motion.div
                    className="font-semibold text-foreground"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {testimonials[activeIndex].author}
                  </motion.div>
                  <motion.div
                    className="text-sm text-muted-foreground"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {testimonials[activeIndex].role} at{" "}
                    <span className="text-orange-500">{testimonials[activeIndex].company}</span>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-4 right-4 text-xs text-muted-foreground/50 flex items-center gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <motion.span
                  animate={{ x: [-3, 3, -3] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  ←
                </motion.span>
                Drag to navigate
                <motion.span
                  animate={{ x: [3, -3, 3] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  →
                </motion.span>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "rgba(234,88,12,0.2)" }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="p-3 rounded-full bg-muted/50 hover:bg-muted transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots with progress indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1)
                    setActiveIndex(index)
                  }}
                  className="relative h-2 rounded-full overflow-hidden transition-all duration-300"
                  style={{ width: index === activeIndex ? 32 : 8 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <div
                    className={`absolute inset-0 ${index === activeIndex ? "bg-orange-500/30" : "bg-muted-foreground/30"}`}
                  />
                  {index === activeIndex && (
                    <motion.div
                      className="absolute inset-0 bg-orange-500"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 6, ease: "linear" }}
                      key={activeIndex}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "rgba(234,88,12,0.2)" }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="p-3 rounded-full bg-muted/50 hover:bg-muted transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
