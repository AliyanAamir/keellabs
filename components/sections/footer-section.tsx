"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Github, Twitter, Linkedin, Instagram } from "lucide-react"
import { SectionAnimator } from "@/components/section-animator"

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: ["Documentation", "API Reference", "Community", "Support", "Status"],
  Legal: ["Privacy", "Terms", "Security", "Cookies", "Compliance"],
}

const socialLinks = [
  { icon: Twitter, href: "#" },
  { icon: Github, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Instagram, href: "#" },
]

export function FooterSection() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <footer ref={containerRef} className="relative py-20 border-t border-border overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-background" />

      <SectionAnimator animation="fade-up" className="relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Footer Content - Added staggered reveal for columns */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8 }}
              className="col-span-2"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-primary rounded-full" />
                  <div className="absolute inset-1 bg-background rounded-full" />
                  <div className="absolute inset-2 bg-primary rounded-full" />
                </div>
                <span className="text-xl font-bold">
                  Keel <span className="text-primary">Lab</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-6 max-w-xs">
                Next-generation automation platform that transforms your workflows into intelligent processes.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.1 + 0.2, duration: 0.6 }}
              >
                <h3 className="font-semibold mb-4 text-foreground">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <motion.li
                      key={link}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: categoryIndex * 0.1 + linkIndex * 0.05 + 0.4 }}
                    >
                      <motion.a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block"
                        whileHover={{ x: 3 }}
                      >
                        {link}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-4"
          >
            <p className="text-sm text-muted-foreground">© 2025 Keel Lab. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              {["Privacy Policy", "Terms of Service", "Cookies"].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  className="hover:text-primary transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Large Brand Text - Added reveal-mask animation */}
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            animate={isInView ? { opacity: 0.05, clipPath: "inset(0 0% 0 0)" } : {}}
            transition={{ delay: 1, duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
            className="text-center mt-16"
          >
            <span className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold tracking-tighter leading-none text-foreground select-none">
              KEEL LAB
            </span>
          </motion.div>
        </div>
      </SectionAnimator>
    </footer>
  )
}
