import { LandingNavbar } from "@/components/landing/navbar"
import { LandingHero } from "@/components/landing/hero"
import { LandingProblems } from "@/components/landing/problems"
import { LandingFeatures } from "@/components/landing/features"
import { LandingHowItWorks } from "@/components/landing/how-it-works"
import { LandingTestimonials } from "@/components/landing/testimonials"
import { LandingPricing } from "@/components/landing/pricing"
import { LandingFooter } from "@/components/landing/footer"

export default function Home() {
  return (
    <div className="bg-surface-50 text-slate-900 font-sans antialiased overflow-x-hidden">
      <LandingNavbar />
      <main>
        <LandingHero />
        <LandingProblems />
        <LandingFeatures />
        <LandingHowItWorks />
        <LandingTestimonials />
        <LandingPricing />
      </main>
      <LandingFooter />
    </div>
  )
}
