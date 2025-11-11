"use client"

import { useEffect, useState } from "react"
import { Pricing } from "@/components/pricing"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lock, User, Building, Shield } from "lucide-react"
import Link from "next/link"

export function PricingAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check authentication status
    const authData = localStorage.getItem("trivitron_auth")
    if (authData) {
      const parsed = JSON.parse(authData)
      if (parsed.isAuthenticated) {
        setIsAuthenticated(true)
        setUser(parsed.user)
      }
    }
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="h-10 w-10 text-blue-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pricing Information Access Required</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                To view detailed pricing information and access our comprehensive healthcare solutions, please sign in
                or create an account.
              </p>
            </div>

            {/* Benefits of Signing Up */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Detailed Pricing</h3>
                  <p className="text-gray-600 text-sm">
                    Access comprehensive pricing for all our AI SaaS platforms and IoT solutions
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <User className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized Quotes</h3>
                  <p className="text-gray-600 text-sm">
                    Get customized pricing based on your hospital size and specific requirements
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Building className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Exclusive Access</h3>
                  <p className="text-gray-600 text-sm">
                    Access to pilot programs, case studies, and exclusive healthcare insights
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Pricing Preview */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-center">What You'll Get Access To</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">LetsGo Basic</h4>
                    <div className="text-2xl font-bold text-blue-600 mb-2">Starting from</div>
                    <div className="text-sm text-gray-600">Patient Health Record + AI Agents</div>
                    <div className="mt-4 text-xs text-gray-500">Free 6 months trial available</div>
                  </div>

                  <div className="text-center p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">LIS Comprehensive</h4>
                    <div className="text-2xl font-bold text-blue-600 mb-2">Most Popular</div>
                    <div className="text-sm text-gray-600">End-to-End Sample Tracking</div>
                    <div className="mt-4 text-xs text-gray-500">Includes barcode tracking & automation</div>
                  </div>

                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">webPACs</h4>
                    <div className="text-2xl font-bold text-blue-600 mb-2">Enterprise</div>
                    <div className="text-sm text-gray-600">Zero-Footprint DICOM Viewer</div>
                    <div className="mt-4 text-xs text-gray-500">Multi-device access & role controls</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Buttons */}
            <div className="text-center space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
                  <Link href="/auth/signup">Create Free Account</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-8 bg-transparent">
                  <Link href="/auth/login">Sign In</Link>
                </Button>
              </div>
              <p className="text-sm text-gray-500">
                Already have an account?{" "}
                <Link href="/auth/login" className="text-blue-600 hover:text-blue-800">
                  Sign in here
                </Link>
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Trusted by Healthcare Professionals</h3>
                <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    HIPAA Compliant
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    GDPR Compliant
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    ISO 13485 Certified
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <div>
      {/* Welcome Message for Authenticated Users */}
      <div className="bg-blue-50 border-b border-blue-200">
        <div className="container mx-auto px-6 max-w-7xl py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-blue-900">Welcome back, {user?.name}!</p>
                <p className="text-xs text-blue-700">{user?.organization}</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                localStorage.removeItem("trivitron_auth")
                setIsAuthenticated(false)
                setUser(null)
              }}
              className="border-blue-300 text-blue-700 hover:bg-blue-100 bg-transparent"
            >
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      <Pricing />
    </div>
  )
}
