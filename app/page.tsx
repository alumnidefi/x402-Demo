import { HeroSection } from "@/components/hero-section"
import { InfoCardSection } from "@/components/info-card-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { PlatformFeaturesSection } from "@/components/platform-features-section"
import { CompetitiveMoatSection } from "@/components/competitive-moat-section"
import { BenefitsSection } from "@/components/benefits-section"
import { CaseStudySection } from "@/components/case-study-section"
import { MethodologySection } from "@/components/methodology-section"
import { SavingsCalculator } from "@/components/savings-calculator"
import { CTASection } from "@/components/cta-section"
import { Navigation } from "@/components/navigation"
import { AIShiftSection } from "@/components/ai-shift-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <InfoCardSection />
      <AIShiftSection />
      <ProblemSection />
      <SolutionSection />
      <PlatformFeaturesSection />
      <CompetitiveMoatSection />
      <BenefitsSection />
      <CaseStudySection />
      <MethodologySection />
      <SavingsCalculator />
      <CTASection />
    </main>
  )
}
