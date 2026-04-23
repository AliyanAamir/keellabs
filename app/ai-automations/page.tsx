import { Navigation } from "@/components/navigation"
import { SmoothScroll } from "@/components/smooth-scroll"
import { FooterSection } from "@/components/sections/footer-section"
import { AutomationsHeroSection } from "@/components/sections/automations-hero-section"
import { AutomationsPlatformsSection } from "@/components/sections/automations-platforms-section"
import { AICTASection } from "@/components/sections/ai-cta-section"

export default function AutomationsPage() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-background">
        <Navigation />
        <main>
          <AutomationsHeroSection />
          <AutomationsPlatformsSection />
          <AICTASection />
        </main>
        <FooterSection />
      </div>
    </SmoothScroll>
  )
}
