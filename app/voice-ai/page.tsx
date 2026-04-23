import { Navigation } from "@/components/navigation"
import { SmoothScroll } from "@/components/smooth-scroll"
import { FooterSection } from "@/components/sections/footer-section"
import { VoiceAIHeroSection } from "@/components/sections/voice-ai-hero-section"
import { VoiceAIFeaturesSection } from "@/components/sections/voice-ai-features-section"
import { VoiceAIWorkflowSection } from "@/components/sections/voice-ai-workflow-section"
import { VoiceAIUseCasesSection } from "@/components/sections/voice-ai-use-cases-section"
import { VoiceAICTASection } from "@/components/sections/voice-ai-cta-section"

export const metadata = {
  title: "Voice AI Agents | Keel Lab",
  description:
    "We build AI-powered voice agents that answer calls 24/7, qualify leads, book appointments, and handle customer service — so you never miss a call again.",
}

export default function VoiceAIPage() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-background">
        <Navigation />
        <main>
          <VoiceAIHeroSection />
          <VoiceAIFeaturesSection />
          <VoiceAIWorkflowSection />
          <VoiceAIUseCasesSection />
          <VoiceAICTASection />
        </main>
        <FooterSection />
      </div>
    </SmoothScroll>
  )
}
