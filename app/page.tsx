import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { AmenitiesSection } from "@/components/amenities-section"
import { LocationSection } from "@/components/location-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ThemeProvider attribute="class" defaultTheme="dark">
      <Navigation />
      <HeroSection />
      <AmenitiesSection />
      <FeaturesSection />
      <LocationSection />
      <ContactSection />
      <Footer />
      </ThemeProvider>
    </main>
  )
}
