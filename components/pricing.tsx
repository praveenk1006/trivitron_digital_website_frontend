"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"
import { useState } from "react"

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")

  const plans = [
    {
      name: "Basic",
      price: billingCycle === "monthly" ? "₹10,000" : "₹1,00,000",
      period: billingCycle === "monthly" ? "/month" : "/year",
      description: "Perfect for small clinics and diagnostic centers",
      badge: "Free 6 months",
      badgeColor: "bg-green-100 text-green-800",
      features: [
        "Patient Health Record (PHR)",
        "AI Agents on WhatsApp & Web",
        "Basic Report Delivery",
        "Email & SMS Notifications",
        "Up to 100 patients/month",
        "Basic Analytics Dashboard",
        "Standard Support",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Standard",
      price: billingCycle === "monthly" ? "₹25,000" : "₹2,50,000",
      period: billingCycle === "monthly" ? "/month" : "/year",
      description: "Ideal for medium-sized hospitals and multi-specialty clinics",
      badge: "Most Popular",
      badgeColor: "bg-blue-100 text-blue-800",
      features: [
        "Everything in Basic",
        "LIS Comprehensive Suite",
        "Barcode Sample Tracking",
        "Automated Result Entry",
        "Advanced AI Analytics",
        "Up to 500 patients/month",
        "Priority Support",
        "Custom Report Templates",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Premium",
      price: billingCycle === "monthly" ? "₹45,000" : "₹4,50,000",
      period: billingCycle === "monthly" ? "/month" : "/year",
      description: "Complete solution for large hospitals and healthcare networks",
      badge: "Enterprise",
      badgeColor: "bg-purple-100 text-purple-800",
      features: [
        "Everything in Standard",
        "webPACs DICOM Viewer",
        "IoT Device Integration",
        "Multi-location Support",
        "Advanced AI Diagnostics",
        "Unlimited patients",
        "24/7 Dedicated Support",
        "Custom Integrations",
        "Compliance Reporting",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  const usagePricing = [
    {
      type: "Per Patient Processing",
      price: "₹200",
      description: "For cloud-based patient data processing and AI analysis",
    },
    {
      type: "Claim Fee Percentage",
      price: "5%",
      description: "Alternative pricing based on patient claim processing",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Flexible Pricing for Every Healthcare Provider
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your hospital's needs. All plans include our core AI-powered features with
            scalable pricing as you grow.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                billingCycle === "monthly" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                billingCycle === "annual" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Annual
              <Badge className="ml-2 bg-green-100 text-green-800 text-xs">Save 17%</Badge>
            </button>
          </div>
        </div>

        {/* Subscription Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${
                plan.popular ? "ring-2 ring-blue-500 scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-green-500 text-white text-center py-2 text-sm font-medium">
                  <Star className="inline h-4 w-4 mr-1" />
                  Most Popular Choice
                </div>
              )}

              <CardHeader className={`text-center ${plan.popular ? "pt-12" : "pt-6"}`}>
                <div className="flex justify-center mb-4">
                  <Badge className={plan.badgeColor}>{plan.badge}</Badge>
                </div>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <p className="text-gray-600 text-sm">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-900 hover:bg-gray-800"
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Usage-Based Pricing */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Usage-Based Pricing Options</h3>
            <p className="text-gray-600">
              For high-volume hospitals, we also offer flexible usage-based pricing models
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {usagePricing.map((option, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{option.type}</h4>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{option.price}</div>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-600 mb-4">
              Need a custom solution? We offer enterprise packages for hospital networks and government contracts.
            </p>
            <Button variant="outline" size="lg">
              Contact for Custom Pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
