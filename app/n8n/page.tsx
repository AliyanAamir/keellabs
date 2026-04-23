import { Navigation } from "@/components/navigation"
import { SmoothScroll } from "@/components/smooth-scroll"
import { FooterSection } from "@/components/sections/footer-section"
import { N8NHeroSection } from "@/components/sections/n8n-hero-section"
import { N8NFeaturesSection } from "@/components/sections/n8n-features-section"
import { N8NWorkflowSection } from "@/components/sections/n8n-workflow-section"
import { N8NUseCasesSection } from "@/components/sections/n8n-use-cases-section"
import { N8NCTASection } from "@/components/sections/n8n-cta-section"

export const metadata = {
  title: "n8n Workflow Automation | Keel Lab",
  description:
    "We build powerful n8n workflows that connect your apps, automate repetitive tasks, and run complex multi-step processes — done for you.",
}

export default function N8NPage() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-background">
        <Navigation />
        <main>
          <N8NHeroSection />
          <N8NFeaturesSection />
          <N8NWorkflowSection />
          <N8NUseCasesSection />
          <N8NCTASection />
        </main>
        <FooterSection />
      </div>
    </SmoothScroll>
  )
}
