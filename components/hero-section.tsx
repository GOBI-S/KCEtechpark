"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Building2, Users, Zap } from "lucide-react"
import { WorkspaceDropdown } from "./workspace-dropdown"
import { QuoteForm } from "./quote-form"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedWorkspace, setSelectedWorkspace] = useState<string | null>(null)
  const [showQuoteForm, setShowQuoteForm] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleGetQuote = () => {
    if (selectedWorkspace) {
      setShowQuoteForm(true)
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-scale" : "opacity-0"}`}>
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-6xl font-bold mb-4 sm:mb-6 mt-20 font-sans leading-snug">
  <span className="gradient-text text-balance">Welcome to the Future of</span>
  <br />
  <span className="text-foreground text-balance">Technology Innovation</span>
</h1>


          <p className="text-md sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto text-pretty">
            Kathir Tech Park offers premium office spaces designed for the next generation of technology companies.
            Experience world-class infrastructure in a collaborative ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12">
            <WorkspaceDropdown onWorkspaceSelect={setSelectedWorkspace} selectedWorkspace={selectedWorkspace} />
            <Button
              size="lg"
              className="text-lg px-6 py-3 sm:px-8 sm:py-4 animate-pulse-glow"
              onClick={handleGetQuote}
              disabled={!selectedWorkspace}
            >
              Get Quote
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {[
              { icon: Building2, value: "50+", label: "Premium Offices" },
              { icon: Users, value: "200+", label: "Tech Companies" },
              { icon: Zap, value: "99.9%", label: "Uptime Guarantee" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2 sm:mb-4" />
                <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1 sm:mb-2 font-[family-name:var(--font-space-grotesk)]">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-9 sm:w-6 sm:h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-primary rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>

      <QuoteForm isOpen={showQuoteForm} onClose={() => setShowQuoteForm(false)} selectedWorkspace={selectedWorkspace} />
    </section>
  )
}
