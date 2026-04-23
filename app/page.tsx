import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { DashboardSection } from "@/components/sections/dashboard-section"
import { StatsSection } from "@/components/sections/stats-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CTASection } from "@/components/sections/cta-section"
import { FooterSection } from "@/components/sections/footer-section"
import { Navigation } from "@/components/navigation"
import { SmoothScroll } from "@/components/smooth-scroll"

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <FeaturesSection />
          <DashboardSection />
          <StatsSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <FooterSection />
      </div>
    </SmoothScroll>
  )
}
