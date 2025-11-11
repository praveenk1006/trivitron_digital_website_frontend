"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Award, Globe } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { HeroLogo } from "@/components/trivitron-logo"

export function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-6 max-w-7xl py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-1 lg:order-1 text-left">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Transforming{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                  Healthcare Operations
                </span>{" "}
                Globally
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {"Ambient Ai enabled and task driven Hospital information system platform. Data driven with cloud Lab Information System and Radiology Imaging Platform integrated. Wide global reach together with our medical device parent company distributing in 180+ countries. "}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                <Link href="/auth/signup">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 bg-transparent"
                onClick={() => setIsVideoPlaying(true)}
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center justify-start space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                180+ Countries Served
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                25+ Years Experience
              </div>
            </div>
          </div>

          <div className="space-y-8 order-2 lg:order-2">
            <div className="flex justify-center lg:justify-center">
              <HeroLogo />
            </div>

            <div className="flex justify-center">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  <Award className="h-4 w-4 mr-2" />🚀 Joint Venture: Trivitron Healthcare × ResoHealth
                </div>
                <div className="flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                  <Globe className="h-4 w-4 mr-2" />
                  180+ Countries
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-full opacity-20"></div>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Hospital Management</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm font-medium">Laboratory Information System</span>
                      <span className="text-sm text-blue-600 font-semibold">Integrated</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm font-medium">Radiology Information System</span>
                      <span className="text-sm text-green-600 font-semibold">Cloud-Based</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <span className="text-sm font-medium">Hospital Information System</span>
                      <span className="text-sm text-purple-600 font-semibold">Complete</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Operational Efficiency</span>
                      <span className="text-2xl font-bold text-green-600">+40%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-green-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
    </section>
  )
}
