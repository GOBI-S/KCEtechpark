"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Wifi, Shield, Car, Coffee, Zap, Building, Users, Headphones, Globe, Server } from "lucide-react"

export function FeaturesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll("[data-card-index]")
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index])
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "Dedicated fiber optic connections with 1Gbps speeds and 99.9% uptime guarantee.",
      color: "text-blue-500",
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Advanced security systems with biometric access and round-the-clock surveillance.",
      color: "text-green-500",
    },
    {
      icon: Car,
      title: "Smart Parking",
      description: "Automated parking systems with EV charging stations and reserved spaces.",
      color: "text-purple-500",
    },
    {
      icon: Coffee,
      title: "Premium Amenities",
      description: "Modern cafeterias, recreational areas, and wellness facilities for your team.",
      color: "text-orange-500",
    },
    {
      icon: Zap,
      title: "Sustainable Energy",
      description: "Solar-powered infrastructure with backup generators and energy-efficient systems.",
      color: "text-yellow-500",
    },
    {
      icon: Building,
      title: "Flexible Spaces",
      description: "Customizable office layouts from startups to enterprise-level requirements.",
      color: "text-indigo-500",
    },
    {
      icon: Users,
      title: "Community Hub",
      description: "Networking events, workshops, and collaborative spaces to grow your business.",
      color: "text-pink-500",
    },
    {
      icon: Headphones,
      title: "Tech Support",
      description: "Dedicated IT support team available 24/7 for all your technical needs.",
      color: "text-red-500",
    },
    {
      icon: Globe,
      title: "Global Connectivity",
      description: "International business center with video conferencing and global partnerships.",
      color: "text-teal-500",
    },
    {
      icon: Server,
      title: "Data Center",
      description: "On-site data center with cloud integration and enterprise-grade infrastructure.",
      color: "text-cyan-500",
    },
  ]

  return (
    <section id="features" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
            <span className="gradient-text text-balance">World-Class Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Everything your technology company needs to thrive in one premium location
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              data-card-index={index}
              className={`group hover:shadow-xl transition-all duration-500 hover:scale-105 border-border/50 hover:border-primary/50 ${
                visibleCards.includes(index) ? "animate-slide-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-space-grotesk)]">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
