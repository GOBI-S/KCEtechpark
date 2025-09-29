"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Plane, Train, Car, Bus } from "lucide-react"

export function LocationSection() {
  const transportOptions = [
    {
      icon: Car,
      title: "By Car",
      description: "15 minutes from city center",
      details: "Direct highway access with ample parking",
    },
    {
      icon: Train,
      title: "Metro Station",
      description: "5 minutes walk",
      details: "Connected to all major business districts",
    },
    {
      icon: Bus,
      title: "Bus Routes",
      description: "Multiple routes available",
      details: "24/7 connectivity to residential areas",
    },
    {
      icon: Plane,
      title: "Airport",
      description: "30 minutes drive",
      details: "International airport with global connections",
    },
  ]

  const nearbyPlaces = [
    { name: "Tech University", distance: "2 km", type: "Education" },
    { name: "Business District", distance: "5 km", type: "Commercial" },
    { name: "Shopping Mall", distance: "3 km", type: "Retail" },
    { name: "Hospital", distance: "4 km", type: "Healthcare" },
    { name: "Hotels", distance: "1 km", type: "Hospitality" },
    { name: "Restaurants", distance: "500 m", type: "Dining" },
  ]

  return (
    <section id="location" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
            <span className="gradient-text text-balance">Prime Location</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Strategically located in the heart of the technology corridor with excellent connectivity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Interactive Map */}
          <div className="relative">
            <Card className="overflow-hidden h-96 group hover:shadow-xl transition-all duration-500">
              <div className="relative h-full">
                <img
                  src="/tech-park-location-map-aerial-view.jpg"
                  alt="Kathir Tech Park Location"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-secondary" />
                    <span className="font-semibold">Kathir Tech Park</span>
                  </div>
                  <p className="text-sm opacity-90">Technology Corridor, Innovation District</p>
                </div>
                <Button className="absolute top-4 right-4 animate-pulse-glow" size="sm">
                  View on Maps
                </Button>
              </div>
            </Card>
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
                Strategic Advantages
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Business Hours Flexibility</h4>
                    <p className="text-muted-foreground text-sm">24/7 access with flexible working hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Central Location</h4>
                    <p className="text-muted-foreground text-sm">Easy access from all parts of the city</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Transportation */}
            <div>
              <h3 className="text-xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">Transportation</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {transportOptions.map((transport, index) => (
                  <Card
                    key={index}
                    className="p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 hover:border-primary/50"
                  >
                    <div className="flex items-start gap-3">
                      <transport.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-sm">{transport.title}</h4>
                        <p className="text-primary text-xs font-medium">{transport.description}</p>
                        <p className="text-muted-foreground text-xs mt-1">{transport.details}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Nearby Places */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 font-[family-name:var(--font-space-grotesk)]">
            What's Nearby
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {nearbyPlaces.map((place, index) => (
              <Card
                key={index}
                className="p-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 hover:border-primary/50"
              >
                <CardContent className="p-0">
                  <h4 className="font-semibold text-sm mb-1">{place.name}</h4>
                  <p className="text-primary text-xs font-medium mb-1">{place.distance}</p>
                  <p className="text-muted-foreground text-xs">{place.type}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
