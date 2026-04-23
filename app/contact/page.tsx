import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { SmoothScroll } from "@/components/smooth-scroll"
import { FooterSection } from "@/components/sections/footer-section"
import { ContactSection } from "@/components/sections/contact-section"

export const metadata: Metadata = {
  title: "Contact Us | Keel Lab",
  description:
    "Get in touch with Keel Lab. Tell us what you're building and we'll reply within 24 hours with a clear plan.",
}

export default function ContactPage() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-background">
        <Navigation />
        <main>
          <ContactSection />
        </main>
        <FooterSection />
      </div>
    </SmoothScroll>
  )
}
