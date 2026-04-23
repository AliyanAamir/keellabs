import { Navigation } from "@/components/navigation"
import { SmoothScroll } from "@/components/smooth-scroll"
import { FooterSection } from "@/components/sections/footer-section"
import { ChatbotsHeroSection } from "@/components/sections/chatbots-hero-section"
import { ChatbotsFeaturesSection } from "@/components/sections/chatbots-features-section"
import { ChatbotsWorkflowSection } from "@/components/sections/chatbots-workflow-section"
import { ChatbotsUseCasesSection } from "@/components/sections/chatbots-use-cases-section"
import { ChatbotsCTASection } from "@/components/sections/chatbots-cta-section"

export const metadata = {
  title: "AI Chatbots | Keellab",
  description: "Custom AI chatbots that handle customer DMs, qualify leads, answer FAQs, and provide 24/7 support across all your messaging channels.",
}

export default function AIChatbotsPage() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-background">
        <Navigation />
        <main>
          <ChatbotsHeroSection />
          <ChatbotsFeaturesSection />
          <ChatbotsWorkflowSection />
          <ChatbotsUseCasesSection />
          <ChatbotsCTASection />
        </main>
        <FooterSection />
      </div>
    </SmoothScroll>
  )
}
