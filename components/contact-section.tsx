"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    spaceType: "private-office",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email:formData.email,
          mobile: formData.phone,
          workspace: formData.spaceType,
        }),
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.error || "Something went wrong")

      console.log("Form submitted:", data)
      setIsSubmitted(true)
      setDialogOpen(true)
    } catch (error: any) {
      console.error("Error submitting form:", error)
      alert(error.message)
    } finally {
      setIsSubmitting(false)
    }

    // Reset form after 2 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", spaceType: "private-office" })
      setDialogOpen(false)
    }, 2000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const contactInfo = [
    { icon: Phone, title: "Phone", details: ["+91 98765 43210", "+91 98765 43211"], action: "Call Now" },
    { icon: Mail, title: "Email", details: ["info@kathirtechpark.com", "sales@kathirtechpark.com"], action: "Send Email" },
    { icon: MapPin, title: "Address", details: ["Kathir Tech Park", "Innovation District, Tech City"], action: "Get Directions" },
    { icon: Clock, title: "Business Hours", details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"], action: "Schedule Visit" },
  ]

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to join the future of technology? Contact us today to schedule a tour or learn more about our spaces
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground text-sm mb-1">{detail}</p>
                      ))}
                      <Button variant="link" className="p-0 h-auto text-primary text-sm mt-2">{info.action}</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="hover:shadow-xl transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-2xl">Request Information</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required className="mt-1"/>
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required className="mt-1"/>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} className="mt-1"/>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="spaceType">Space Type Interest</Label>
                    <select id="spaceType" name="spaceType" value={formData.spaceType} onChange={handleInputChange} className="mt-1 w-full px-3 py-2 border border-input rounded-md">
                      <option value="private-office">Private Office</option>
                      <option value="open-workspace">Open Workspace</option>
                      <option value="meeting-rooms">Meeting Rooms</option>
                      <option value="virtual-office">Virtual Office</option>
                      <option value="custom">Custom Solution</option>
                    </select>
                  </div>

                  <Button type="submit" size="lg" className="w-full flex items-center justify-center gap-2" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5"/> Get Quote
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={dialogOpen} onOpenChange={() => setDialogOpen(false)}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quote Request Submitted!</h3>
            <p className="text-muted-foreground">
              Thank you for your interest. Our team will contact you shortly.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
