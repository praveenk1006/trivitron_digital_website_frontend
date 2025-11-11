"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Users, MessageSquare, Calendar } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    role: "",
    hospitalSize: "",
    interest: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your interest! We will contact you within 24 hours.")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const offices = [
    {
      city: "Chennai, India",
      address: "Trivitron Healthcare Campus, Chennai, Tamil Nadu, India",
      phone: "+91 44 0000 0000",
      email: "india@trivitrondigital.com",
      type: "Headquarters",
    },
    {
      city: "Dubai, UAE",
      address: "ResoHealth Office, Dubai Healthcare City, UAE",
      phone: "+971 4 000 0000",
      email: "mena@trivitrondigital.com",
      type: "Regional Office",
    },
  ]

  const quickActions = [
    {
      icon: Calendar,
      title: "Schedule Demo",
      description: "Book a personalized product demonstration",
      action: "Book Demo",
    },
    {
      icon: MessageSquare,
      title: "Start Pilot",
      description: "Begin with a 3-month pilot program",
      action: "Start Pilot",
    },
    {
      icon: Users,
      title: "Partner With Us",
      description: "Explore partnership opportunities",
      action: "Partner Inquiry",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Transform Your Hospital?</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Join 500+ hospitals planning to modernize with Trivitron Digital. Get started with a free consultation and
            pilot program.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Get Started Today</CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and our team will contact you within 24 hours to discuss your hospital's
                  digital transformation needs.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Dr. John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="john.smith@hospital.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Organization *</label>
                      <Input
                        required
                        value={formData.organization}
                        onChange={(e) => handleInputChange("organization", e.target.value)}
                        placeholder="City General Hospital"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Role</label>
                      <Select onValueChange={(value) => handleInputChange("role", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="administrator">Hospital Administrator</SelectItem>
                          <SelectItem value="cio">Chief Information Officer</SelectItem>
                          <SelectItem value="clinical-director">Clinical Director</SelectItem>
                          <SelectItem value="it-head">IT Head</SelectItem>
                          <SelectItem value="pathologist">Pathologist</SelectItem>
                          <SelectItem value="radiologist">Radiologist</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Hospital Size</label>
                      <Select onValueChange={(value) => handleInputChange("hospitalSize", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select hospital size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small (&lt; 50 beds)</SelectItem>
                          <SelectItem value="medium">Medium (50-150 beds)</SelectItem>
                          <SelectItem value="large">Large (150+ beds)</SelectItem>
                          <SelectItem value="network">Hospital Network</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Primary Interest</label>
                    <Select onValueChange={(value) => handleInputChange("interest", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="What are you most interested in?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ai-diagnostics">AI Diagnostic Platforms</SelectItem>
                        <SelectItem value="iot-devices">IoT Smart Devices</SelectItem>
                        <SelectItem value="complete-solution">Complete Digital Transformation</SelectItem>
                        <SelectItem value="pilot-program">Pilot Program</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your hospital's current challenges and how we can help..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions & Contact Info */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {quickActions.map((action, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <action.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{action.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{action.description}</p>
                      <Button size="sm" variant="outline" className="text-xs bg-transparent">
                        {action.action}
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Office Locations */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Our Offices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-gray-900">{office.city}</h4>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{office.type}</span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start">
                        <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{office.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <p className="text-xs text-gray-500">Emergency support available 24/7 for existing customers</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Digital Transformation?</h3>
          <p className="text-xl mb-6 opacity-90">
            Join the 100+ hospitals already planning their modernization with Trivitron Digital
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Schedule Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
