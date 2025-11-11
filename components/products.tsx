"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import {
  Smartphone,
  Heart,
  Activity,
  Search,
  TrendingUp,
  Database,
  Eye,
  Stethoscope,
  MessageSquare,
  Shield,
  BarChart3,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

function ProductCarousel({ products }: { products: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const renderIcon = (IconComponent: any, className: string) => {
    if (!IconComponent) return null
    return <IconComponent className={className} />
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [products.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
  }

  const previousIndex = (currentIndex - 1 + products.length) % products.length
  const nextIndex = (currentIndex + 1) % products.length

  return (
    <div className="relative w-full">
      <div className="flex items-center">
        <div className="w-16 mr-4 flex-shrink-0">
          <button
            onClick={goToPrevious}
            className="w-full flex flex-col items-center p-2 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-400 transition-colors duration-200 shadow-sm"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 mb-1" />
            <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-indigo-500 rounded flex items-center justify-center">
              {renderIcon(products[previousIndex]?.icon, "h-3 w-3 text-white")}
            </div>
          </button>
        </div>

        {/* Main carousel - now takes remaining space */}
        <div className="flex-1">
          <Card className="bg-white shadow-lg border-2 border-blue-300 aspect-video overflow-hidden">
            <CardContent className="p-0 h-full flex">
              <div className="w-1/2 p-6 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0 mr-3">
                    {renderIcon(products[currentIndex]?.icon, "h-5 w-5 text-white")}
                  </div>
                  <h4 className="text-2xl font-semibold text-gray-900">{products[currentIndex]?.name}</h4>
                </div>

                <div className="mb-4">
                  <h5 className="font-medium text-gray-800 mb-2 text-sm">Key Features:</h5>
                  <ul className="space-y-1">
                    {products[currentIndex]?.features.slice(0, 4).map((feature: string, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-1 h-1 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                        <span className="text-xs text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-50 p-3 rounded-lg">
                  <h5 className="font-medium text-green-800 mb-1 text-xs">AI-Driven Impact:</h5>
                  <p className="text-xs text-green-700">{products[currentIndex]?.impact}</p>
                </div>
              </div>

              <div className="w-1/2 relative">
                <img
                  src={`/Advanced_LIS.png?key=main&height=300&width=400&query=${encodeURIComponent(`realistic ${products[currentIndex]?.name} healthcare technology medical equipment`)}`}
                  alt={products[currentIndex]?.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="w-16 ml-4 flex-shrink-0">
          <button
            onClick={goToNext}
            className="w-full flex flex-col items-center p-2 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-400 transition-colors duration-200 shadow-sm"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 mb-1" />
            <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-indigo-500 rounded flex items-center justify-center">
              {renderIcon(products[nextIndex]?.icon, "h-3 w-3 text-white")}
            </div>
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export { Products }
export default function Products() {
  const mainCategories = [
    {
      id: "advanced-diagnostics",
      name: "Advanced Diagnostics",
      subtitle: "Comprehensive Diagnostic Solutions & Interoperability",
      icon: Search,
      description:
        "Cutting-edge diagnostic tools including cloud-based LIS, web-based PACS, AI-powered ophthalmology solutions, and comprehensive interoperability ecosystems.",
      products: [
        {
          name: "Advanced Lab Information System (LIS)",
          icon: Database,
          features: [
            "Cloud-based LIS (2000+ devices)",
            "Sample tracking",
            "QC workflows",
            "Inventory control",
            "Remote approvals",
            "Billing",
          ],
          impact:
            "AI automation minimizes human errors, speeds up TAT, optimizes inventory, and reduces operational costs.",
        },
        {
          name: "Web-Based PACS Solution",
          icon: Eye,
          features: ["Browser-based PACS", "Zero-footprint DICOM viewing from any modality"],
          impact:
            "AI image enhancement & auto-tagging reduce reporting delays, enable faster collaboration, and improve radiology efficiency.",
        },
        {
          name: "Ophthalmology Diagnostic Solution",
          icon: Eye,
          features: [
            "Detects 13 retinal diseases (DR, AMD, glaucoma, RVO, pathologic myopia, etc.) with AI results in ~10 seconds",
            "High-performance DR module with automated lesion annotation; sensitivity up to 92.96%",
            "Single-image intelligence: flags abnormalities & produces quantitative diagnostic insights",
          ],
          impact:
            "Early disease detection with high accuracy reduces blindness risk. Faster screening at scale, especially for population-level programs. Quicker diagnosis supports same-day treatment initiation.",
        },
        {
          name: "Interoperability Ecosystem",
          icon: Activity,
          features: ["Data Integration Setup - from HIS, EMR, ERP, CRM, and medical devices using HL7/FHIR connectors"],
          impact: "Automating ingestion and unification of integrated data into a secure, standards-based data lake.",
        },
      ],
    },
    {
      id: "personalized-care",
      name: "Personalized Care",
      subtitle: "AI-Driven Patient Care & Journey Management",
      icon: Heart,
      description:
        "Comprehensive personalized care solutions including smart reporting, AI-driven health records, patient journey portals, and preventive care systems.",
      products: [
        {
          name: "Smart Reporting – Chat & Voice",
          icon: MessageSquare,
          features: ["Conversational report generation", "Voice/Chat-based queries"],
          impact:
            "AI addresses patients queries from structured reports instantly, provides advisory that helps saving time and improving their decision speed for consultation.",
        },
        {
          name: "AI-Driven Patient Health Records (ABHA-linked)",
          icon: Heart,
          features: ["Longitudinal health records (lifetime medical history)", "Patient health records"],
          impact:
            "Unified health record improves care coordination, reduces duplicate tests, enables predictive care. AI insights from ePROM personalize treatments.",
        },
        {
          name: "AI-Guided Patient Journey Portal",
          icon: Smartphone,
          features: [
            "Appointments, billing & insurance integration",
            "Teleconsultation",
            "Screening & triage",
            "Medication & treatment tracking",
            "Test orchestration",
            "Patient-reported outcomes (ePROM) sharing",
            "Health advisory",
          ],
          impact:
            "AI enables personalized journeys — faster triage (<10s alerts), better compliance via reminders, reduced hospital readmissions, empowered self-care.",
        },
        {
          name: "Preventive Care (Chat & Voice enabled)",
          icon: Stethoscope,
          features: [
            "WhatsApp/SMS/Voice recovery guidance",
            "Post-op monitoring",
            "Symptom checks & escalation",
            "Telehealth integration",
            "Remote monitoring",
          ],
          impact:
            "AI chatbots & voice assistants scale preventive care, reduce follow-up burden, and improve safety via early symptom alerts.",
        },
        {
          name: "Data Security and Compliance",
          icon: Shield,
          features: ["Compliance-First Data Governance", "AI-driven Risk Validation"],
          impact:
            "AI automated workflows for HIPAA, ABHA, and DPDPR compliance, continuously validate data access, detect anomalies, and predict potential security breaches.",
        },
      ],
    },
    {
      id: "predictive-analytics",
      name: "Predictive Analytics",
      subtitle: "Smart Analytics & Performance Marketing",
      icon: TrendingUp,
      description:
        "Advanced predictive analytics including smart dashboards, data lakes, and digital performance marketing solutions for comprehensive healthcare insights.",
      products: [
        {
          name: "Smart Dashboard – Trends & Analytics",
          icon: BarChart3,
          features: [
            "Health/Clinical/Operational trends based on longitudinal data",
            "Population-level insights",
            "AI-driven clinical decision support",
          ],
          impact:
            "AI predictive analytics helps providers anticipate outbreaks, insurers optimize risk, and governments plan interventions.",
        },
        {
          name: "Data Lake",
          icon: Database,
          features: ["Unified repository for health data", "Secure, scalable storage"],
          impact: "AI-ready infrastructure supports research, predictive modeling, and precision medicine innovation.",
        },
        {
          name: "Digital Performance Marketing",
          icon: TrendingUp,
          features: ["Targeted campaigns", "ROI tracking", "SEO optimization", "Quality lead generation"],
          impact:
            "AI targeting improves patient acquisition, lowers costs, and drives measurable ROI for healthcare providers.",
        },
      ],
    },
  ]

  const roadmapCategories = [
    {
      name: "Clinical Outcomes",
      description: "AI to improve diagnostics, treatment, and preventive care",
      icon: Stethoscope,
      features: [
        "Predictive risk scoring",
        "Computer-aided detection (CAD) in imaging",
        "AI pathology slide analysis",
        "Genomics-informed precision medicine",
      ],
    },
    {
      name: "Patient Experience",
      description: "Advanced AI-powered patient engagement and monitoring",
      icon: Heart,
      features: [
        "Virtual health assistants",
        "Personalized education",
        "AI chatbots on messaging apps for queries, scheduling, and health coaching",
        "24/7 monitoring via wearables with AI algorithms",
        "AI-driven transcription tools for patient-doctor conversations",
      ],
    },
    {
      name: "Operational Efficiency",
      description: "Predictive models and AI assistants for healthcare operations",
      icon: Activity,
      features: [
        "Predictive models for high-demand periods and resource allocation",
        "AI-based digital assistants for document management via NLP",
        "Conversational AI chatbots for routine inquiries and reminders",
        "Automated billing, inventory management, and compliance auditing",
      ],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Healthcare Technology Solutions</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive healthcare technology platform featuring advanced diagnostics, personalized care delivery, and
            predictive analytics powered by AI-driven insights and interoperability.
          </p>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Core Healthcare Platforms</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three integrated platforms delivering comprehensive healthcare solutions with AI-powered automation and
              insights
            </p>
          </div>

          <div className="space-y-12">
            {mainCategories.map((category) => (
              <Card
                key={category.id}
                className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-blue-100"
                style={{
                  backgroundImage: `url(/placeholder.svg?height=600&width=1200&query=${encodeURIComponent(
                    category.id === "advanced-diagnostics"
                      ? "modern medical laboratory with microscopes diagnostic equipment MRI machines CT scanners"
                      : category.id === "personalized-care"
                        ? "healthcare professionals consulting with patients telemedicine digital health records"
                        : "data analytics dashboard with healthcare charts graphs predictive modeling screens",
                  )})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-white bg-opacity-40"></div>

                <div className="relative z-10">
                  <CardHeader className="pb-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <category.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl text-blue-900">{category.name}</CardTitle>
                        <p className="text-blue-700 font-medium">{category.subtitle}</p>
                        <p className="text-gray-700 text-sm mt-2">{category.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ProductCarousel products={category.products} />
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Product Roadmap Section */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Product Roadmap</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Upcoming AI-powered enhancements focusing on clinical outcomes, patient experience, and operational
              efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {roadmapCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full bg-white">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h4>
                      <p className="text-gray-600 mb-4">{category.description}</p>

                      <div className="mb-4">
                        <h5 className="font-medium text-gray-800 mb-2 text-sm">Upcoming Features:</h5>
                        <ul className="space-y-1">
                          {category.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <div className="w-1 h-1 bg-purple-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Complete AI-Powered Healthcare Ecosystem</h4>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Our integrated platform delivers comprehensive healthcare solutions through advanced diagnostics,
              personalized care, and predictive analytics, all powered by AI automation and intelligent insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
