import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter } from "lucide-react"

export function Leadership() {
  const leaders = [
    {
      name: "Dr. G.S.K. Velu",
      role: "Chairman & Managing Director",
      company: "Trivitron Healthcare",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Forbes-recognized serial entrepreneur who has led Trivitron to global prominence across 80+ countries. Visionary leader with three decades of experience in medical technology.",
      achievements: ["Forbes Recognition", "80+ Countries Presence", "30+ Years Experience", "Medical Tech Pioneer"],
    },
    {
      name: "Dr. Vas Metupalle",
      role: "Co-Founder & Board Member",
      company: "ResoHealth",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Visionary healthtech leader pioneering AI and digital transformation across emerging markets. Expert in scaling healthcare technology solutions in MENA region.",
      achievements: ["AI Healthcare Expert", "MENA Market Leader", "Digital Health Pioneer", "Emerging Markets Focus"],
    },
    {
      name: "Jason",
      role: "Co-Founder & Board Member",
      company: "ResoHealth",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Visionary healthtech leader pioneering AI and digital transformation across emerging markets. Expert in scaling healthcare technology solutions in MENA region.",
      achievements: ["AI Healthcare Expert", "MENA Market Leader", "Digital Health Pioneer", "Emerging Markets Focus"],
    },
    {
      name: "Keerthi Varma Nuthalapati",
      role: "Chief Executive Officer",
      company: "Trivitron Digital",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Strategic leader driving the joint venture vision with expertise in healthcare technology and emerging market expansion.",
      achievements: ["Strategic Leadership", "Healthcare Tech", "Market Expansion", "Joint Venture Expert"],
    },
    {
      name: "TBD",
      role: "Chief Technology Officer",
      company: "Trivitron Digital",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Technology visionary leading product development and AI innovation. Expert in healthcare software architecture and IoT integration.",
      achievements: ["AI Innovation", "Product Development", "IoT Integration", "Healthcare Software"],
    },
  ]

  const advisors = [
    {
      name: "Raghu",
      role: "Chief Financial Officer",
      expertise: "Financial Planning & Risk Management",
    },
    {
      name: "Ramkee",
      role: "Head of Product Integration",
      expertise: "Hardware-Software Integration & Pilots",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Our management blends Trivitron's healthcare expertise with ResoHealth's technology acumen, bringing decades
            of experience in scaling healthcare solutions globally.
          </p>
        </div>

        {/* Key Leaders */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {leaders.map((leader, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square overflow-hidden">
                <img
                  src={leader.image || "/placeholder.svg"}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                <p className="text-blue-600 font-medium mb-1">{leader.role}</p>
                <p className="text-sm text-gray-600 mb-4">{leader.company}</p>
                <p className="text-sm text-gray-700 mb-4 line-clamp-3">{leader.bio}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {leader.achievements.map((achievement, achIndex) => (
                    <Badge key={achIndex} variant="secondary" className="text-xs">
                      {achievement}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <button className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </button>
                  <button className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors">
                    <Twitter className="h-4 w-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Advisory Team */}
        <div className="bg-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Advisory & Key Positions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {advisors.map((advisor, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{advisor.name}</h4>
                  <p className="text-blue-600 font-medium mb-2">{advisor.role}</p>
                  <p className="text-sm text-gray-600">{advisor.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Growth */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Growing Team, Global Impact</h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                <p className="text-gray-700">Team Members by 2025</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">40+</div>
                <p className="text-gray-700">Projected Team by 2026</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">80+</div>
                <p className="text-gray-700">Countries Reach</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
