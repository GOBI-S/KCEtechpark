"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function AmenitiesSection() {
  const [activeTab, setActiveTab] = useState("workspace")

  const amenityCategories = {
    workspace: {
      title: "Workspace Solutions",
      items: [
        {
          name: "Private Offices",
          description: "Fully furnished private offices for 1-50 people",
          image: "/modern-private-office-space.jpg",
          features: ["Ergonomic furniture", "Natural lighting", "Climate control", "High-speed internet"],
        },
        {
          name: "Open Workspaces",
          description: "Collaborative open areas with flexible seating",
          image: "/modern-open-office-workspace.jpg",
          features: ["Hot desks", "Standing desks", "Collaboration zones", "Phone booths"],
        },
        {
          name: "Meeting Rooms",
          description: "State-of-the-art conference and meeting facilities",
          image: "/modern-conference-room.png",
          features: ["Video conferencing", "Smart boards", "Presentation systems", "Catering service"],
        },
      ],
    },
    lifestyle: {
      title: "Lifestyle Amenities",
      items: [
        {
          name: "Fitness Center",
          description: "24/7 access to premium fitness facilities",
          image: "/modern-corporate-gym.jpg",
          features: ["Cardio equipment", "Weight training", "Yoga studio", "Personal trainers"],
        },
        {
          name: "Rooftop Garden",
          description: "Relaxing outdoor spaces with city views",
          image: "/rooftop-garden-office-building.jpg",
          features: ["Green spaces", "Seating areas", "Event space", "City skyline views"],
        },
        {
          name: "Wellness Center",
          description: "Health and wellness facilities for work-life balance",
          image: "/corporate-wellness-center.jpg",
          features: ["Meditation rooms", "Massage therapy", "Health screenings", "Wellness programs"],
        },
      ],
    },
    dining: {
      title: "Dining & Social",
      items: [
        {
          name: "Premium Cafeteria",
          description: "Gourmet dining with international cuisine",
          image: "/modern-corporate-cafeteria.jpg",
          features: ["Fresh ingredients", "Multiple cuisines", "Healthy options", "Grab & go"],
        },
        {
          name: "Coffee Lounges",
          description: "Artisan coffee bars throughout the campus",
          image: "/modern-office-coffee-lounge.jpg",
          features: ["Specialty coffee", "Comfortable seating", "WiFi zones", "Meeting spaces"],
        },
        {
          name: "Event Spaces",
          description: "Versatile venues for corporate events and networking",
          image: "/corporate-event-space.png",
          features: ["Flexible layouts", "AV equipment", "Catering kitchen", "Outdoor terraces"],
        },
      ],
    },
  }

  const tabs = [
    { id: "workspace", label: "Workspace" },
    { id: "lifestyle", label: "Lifestyle" },
    { id: "dining", label: "Dining & Social" },
  ]

  return (
    <section id="amenities" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
            <span className="gradient-text text-balance">Premium Amenities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Experience unparalleled comfort and convenience designed to enhance productivity and well-being
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted rounded-lg p-1 inline-flex">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                onClick={() => setActiveTab(tab.id)}
                className="px-6 py-2 transition-all duration-300"
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="animate-fade-in-scale">
          <h3 className="text-2xl font-bold text-center mb-8 font-[family-name:var(--font-space-grotesk)]">
            {amenityCategories[activeTab as keyof typeof amenityCategories].title}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenityCategories[activeTab as keyof typeof amenityCategories].items.map((item, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border-border/50 hover:border-primary/50"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3 font-[family-name:var(--font-space-grotesk)]">
                    {item.name}
                  </h4>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
