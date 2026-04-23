import { Navigation } from "@/components/navigation"
import { SmoothScroll } from "@/components/smooth-scroll"
import { FooterSection } from "@/components/sections/footer-section"
import { SocialHeroSection } from "@/components/sections/social-hero-section"
import { SocialFeaturesSection } from "@/components/sections/social-features-section"
import { SocialWorkflowSection } from "@/components/sections/social-workflow-section"
import { SocialUseCasesSection } from "@/components/sections/social-use-cases-section"
import { SocialCTASection } from "@/components/sections/social-cta-section"

export const metadata = {
  title: "Social Media Automation | Keel Lab",
  description: "AI-powered social media content engines that create, schedule, and post across all your platforms — consistent brand voice, zero manual work.",
}

export default function SocialMediaPage() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-background">
        <Navigation />
        <main>
          <SocialHeroSection />
          <SocialFeaturesSection />
          <SocialWorkflowSection />
          <SocialUseCasesSection />
          <SocialCTASection />
        </main>
        <FooterSection />
      </div>
    </SmoothScroll>
  )
}
