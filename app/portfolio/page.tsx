import { Navigation } from "@/components/navigation"
import { SmoothScroll } from "@/components/smooth-scroll"
import { FooterSection } from "@/components/sections/footer-section"
import { PortfolioHeroSection } from "@/components/sections/portfolio-hero-section"
import { PortfolioGridSection } from "@/components/sections/portfolio-grid-section"
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section"
import { PortfolioStatsSection } from "@/components/sections/portfolio-stats-section"
import { PortfolioTestimonialsSection } from "@/components/sections/portfolio-testimonials-section"
import { PortfolioCTASection } from "@/components/sections/portfolio-cta-section"

export default function PortfolioPage() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-background">
        <Navigation />
        <main>
          <PortfolioHeroSection />
          <PortfolioGridSection />
          <PortfolioShowcaseSection />
          <PortfolioStatsSection />
          <PortfolioTestimonialsSection />
          <PortfolioCTASection />
        </main>
        <FooterSection />
      </div>
    </SmoothScroll>
  )
}
