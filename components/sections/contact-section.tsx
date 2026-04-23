"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/magnetic-button"
import { Send, CheckCircle, AlertCircle, Mail, Phone, MapPin } from "lucide-react"

const services = [
  "AI Automations",
  "n8n Workflow Automation",
  "Go High Level",
  "Voice AI Agents",
  "AI Chatbots",
  "Social Media Automation",
  "Multiple Services",
  "Not sure yet",
]

const budgets = [
  "Under $2,000",
  "$2,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000 – $20,000",
  "$20,000+",
  "Let's discuss",
]

export function ContactSection() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.")
        setStatus("error")
      } else {
        setStatus("success")
        setForm({ name: "", email: "", company: "", service: "", budget: "", message: "" })
      }
    } catch {
      setErrorMsg("Network error. Please try again.")
      setStatus("error")
    }
  }

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.15, 1, 1.15], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, delay: 4 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">Get In Touch</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Let&apos;s Build Something
            <span className="block text-primary mt-2">That Runs Itself</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tell us what you&apos;re working on. We&apos;ll come back within 24 hours with a clear plan — no fluff,
            no sales pitch.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6">Why teams choose Keel Lab</h2>
              <div className="space-y-6">
                {[
                  { title: "Fast turnaround", desc: "Most projects scoped and started within a week." },
                  { title: "Done-for-you", desc: "We build, deploy, and document everything — you own it." },
                  { title: "No long contracts", desc: "Build engagement + monthly retainer. Cancel anytime." },
                  { title: "Real results", desc: "We track hours saved, leads generated, calls answered." },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">{item.title}</div>
                      <div className="text-sm text-muted-foreground mt-1">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-border space-y-4">
              {[
                { icon: Mail, label: "Email", value: "contact@keellab.com" },
                { icon: Phone, label: "Phone", value: "Available on request" },
                { icon: MapPin, label: "Location", value: "Remote — worldwide" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                    <div className="text-sm font-medium">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="relative rounded-2xl border border-border bg-card p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative flex flex-col items-center justify-center py-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3">Message sent!</h3>
                  <p className="text-muted-foreground max-w-sm">
                    We&apos;ll get back to you within 24 hours. Check your inbox for a confirmation.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-8 rounded-full"
                    onClick={() => setStatus("idle")}
                  >
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="relative space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company or business name"
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Service interested in</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground transition-colors"
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Budget range</label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground transition-colors"
                      >
                        <option value="">Select a range</option>
                        {budgets.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us what you're trying to automate or what problem you're solving..."
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-colors resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      {errorMsg}
                    </motion.div>
                  )}

                  <MagneticButton>
                    <Button
                      type="submit"
                      disabled={status === "loading"}
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-14 text-lg group relative overflow-hidden"
                    >
                      {status === "loading" ? (
                        <span className="flex items-center gap-3">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-3">
                          <Send className="w-5 h-5" />
                          Send Message
                          <motion.span
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                          >
                            →
                          </motion.span>
                        </span>
                      )}
                    </Button>
                  </MagneticButton>

                  <p className="text-xs text-muted-foreground text-center">
                    We reply within 24 hours · No spam · No pressure
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
