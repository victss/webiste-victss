import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { IndustriesSection } from "@/components/industries-section"
import { OdooFeatures } from "@/components/odoo-features"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { ClientsSection } from "@/components/clients-section"
import { OurClientsSection } from "@/components/client"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <IndustriesSection />
      <OdooFeatures />
      <FeaturesSection />
      <TestimonialsSection />
      <OurClientsSection/>
      <CTASection />
    </>
  )
}

