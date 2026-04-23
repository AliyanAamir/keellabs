import { Navigation } from "@/components/navigation"
import { SmoothScroll } from "@/components/smooth-scroll"
import { FooterSection } from "@/components/sections/footer-section"
import { GHLHeroSection } from "@/components/sections/ghl-hero-section"
import { GHLFeaturesSection } from "@/components/sections/ghl-features-section"
import { GHLWorkflowSection } from "@/components/sections/ghl-workflow-section"
import { GHLUseCasesSection } from "@/components/sections/ghl-use-cases-section"
import { GHLCTASection } from "@/components/sections/ghl-cta-section"

export const metadata = {
  title: "Go High Level Automation | Keellab",
  description:
    "We set up and automate Go High Level for your business — CRM, funnels, SMS & email campaigns, appointment booking, and reputation management. All done for you.",
}

export default function GoHighLevelPage() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-background">
        <Navigation />
        <main>
          <GHLHeroSection />
          <GHLFeaturesSection />
          <GHLWorkflowSection />
          <GHLUseCasesSection />
          <GHLCTASection />
        </main>
        <FooterSection />
      </div>
    </SmoothScroll>
  )
}
