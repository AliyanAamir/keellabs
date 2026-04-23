"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/magnetic-button"
import Link from "next/link"

const navItems = [
  { name: "Home", href: "/" },
  { name: "AI Automations", href: "/ai-automations" },
  { name: "n8n", href: "/n8n" },
  { name: "Go High Level", href: "/go-high-level" },
  { name: "Voice AI", href: "/voice-ai" },
  { name: "AI Chatbots", href: "/ai-chatbots" },
  { name: "Social Media", href: "/social-media" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <motion.div
                className="flex items-center gap-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative w-8 h-8">
                  <motion.div
                    className="absolute inset-0 bg-primary rounded-full"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(234, 88, 12, 0.5)",
                        "0 0 40px rgba(234, 88, 12, 0.3)",
                        "0 0 20px rgba(234, 88, 12, 0.5)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <div className="absolute inset-1 bg-background rounded-full" />
                  <div className="absolute inset-2 bg-primary rounded-full" />
                </div>
                <span className="text-xl font-bold tracking-tight">
                  Keel <span className="text-primary">lab</span>
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <Link key={item.name} href={item.href}>
                  <motion.span
                    className="relative text-sm text-muted-foreground hover:text-foreground transition-colors group cursor-pointer"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    whileHover={{ y: -2 }}
                  >
                    {item.name}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <MagneticButton>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 group overflow-hidden relative">
                  <span className="relative z-10">Book a Demo</span>
                  <motion.div
                    className="absolute inset-0 bg-accent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span className="ml-2 relative z-10" initial={{ x: 0 }} whileHover={{ x: 5 }}>
                    →
                  </motion.span>
                </Button>
              </MagneticButton>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-foreground p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden pt-20"
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {navItems.map((item, index) => (
                <Link key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                  <motion.span
                    className="text-2xl font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              ))}
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg mt-4">
                Book a Demo →
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
