"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Monitor,
  Database,
  Stethoscope,
  Globe,
  Award,
  Users,
  Building,
  Zap,
  Heart,
  Shield,
  Microscope,
  Cpu,
  Handshake,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export function About() {
  console.log("[v0] About component rendering")

  const [expandedTile, setExpandedTile] = useState<{ category: string; index: number } | null>(null)

  const solutions = [
    {
      icon: Monitor,
      title: "Hospital Information Systems",
      description:
        "Comprehensive HIS solutions for complete hospital management, patient records, and administrative workflows.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Database,
      title: "Laboratory Information Systems",
      description:
        "Advanced LIS platforms for sample tracking, result management, and quality control with seamless integration.",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: Stethoscope,
      title: "Radiology Information Systems",
      description:
        "Complete RIS solutions for imaging workflow management, DICOM integration, and radiology operations.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Globe,
      title: "Global Healthcare Network",
      description: "Serving healthcare providers across 180+ countries with localized solutions and 24/7 support.",
      color: "from-purple-500 to-purple-600",
    },
  ]

  const achievements = [
    { icon: Award, number: "30+", label: "Years Combined Experience", color: "text-blue-600" },
    { icon: Globe, number: "180+", label: "Countries Presence", color: "text-teal-600" },
    { icon: Building, number: "15+", label: "Manufacturing Units", color: "text-green-600" },
    { icon: Users, number: "5000+", label: "Global Workforce", color: "text-purple-600" },
  ]

  const partnerStrengths = [
    {
      company: "Trivitron Healthcare",
      founded: "1997",
      strength: "Medical Technology Leadership",
      description:
        "30+ years of medical technology innovation, serving 180+ countries with comprehensive healthcare solutions.",
      highlights: [
        "Medical Device Manufacturing",
        "Global Distribution Network",
        "Regulatory Expertise",
        "R&D Centers",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      company: "ResoHealth",
      founded: "2018",
      strength: "Digital Health Innovation",
      description:
        "Cutting-edge AI and digital health solutions focused on emerging markets, particularly the MENA region.",
      highlights: ["AI-Powered Analytics", "Digital Health Platforms", "MENA Market Expertise", "Cloud Solutions"],
      color: "from-teal-500 to-teal-600",
    },
  ]

  const businessVerticals = [
    {
      icon: Heart,
      title: "Medical Technology",
      description:
        "Advanced medical devices and equipment for diagnostics, imaging, and patient care across multiple specialties.",
      highlights: ["Radiology & Imaging", "Laboratory Diagnostics", "Critical Care", "Cardiology"],
    },
    {
      icon: Shield,
      title: "Healthcare IT Solutions",
      description:
        "Comprehensive digital health platforms including HIS, LIS, RIS, and AI-powered healthcare analytics.",
      highlights: ["Hospital Management", "Laboratory Systems", "Radiology Information", "Digital Health"],
    },
    {
      icon: Microscope,
      title: "In-Vitro Diagnostics",
      description:
        "Complete range of diagnostic solutions including reagents, analyzers, and point-of-care testing devices.",
      highlights: ["Clinical Chemistry", "Immunoassay", "Hematology", "Molecular Diagnostics"],
    },
    {
      icon: Cpu,
      title: "AI & Innovation",
      description:
        "Cutting-edge artificial intelligence and machine learning solutions for predictive healthcare analytics.",
      highlights: ["Predictive Analytics", "Clinical Decision Support", "Automated Diagnostics", "Smart Healthcare"],
    },
  ]

  const icogCulture = {
    Integrity: [
      {
        title: "Do the Right Thing, the Right Way",
        subtitle: "Be Accountable",
        summary: "Be accountable for your decisions and actions by consistently doing what is right",
        detail:
          "Be accountable for your decisions and actions by consistently doing what is right, upholding integrity, fairness, and compliance. Strive to balance speed, quality, and long-term impact while maintaining ethical behaviour in every interaction.",
        archetype: "The Guardian of Duty – one who upholds righteousness even when faced with personal loss.",
        practicalApplication: [
          "We act responsibly and ethically even when it's difficult or no one is watching. This means prioritizing the long-term interests of the company and stakeholders. By always choosing what is fair and just, we reinforce our integrity foundation and ensure decisions serve the greater good.",
          "Doing the right thing builds trust and provides a clear guardrail: it prevents short-sighted or unethical shortcuts and keeps our focus on sustainable, value-aligned outcomes. Teams that honor this principle make fair, data-driven decisions that benefit customers and the organization.",
        ],
      },
      {
        title: "Be Transparent",
        subtitle: "Act with Honesty",
        summary: "Act with honesty and openness in all interactions",
        detail:
          "Act with honesty and openness in all interactions. Share relevant information clearly, base decisions on facts and data, and communicate proactively to foster collaboration and prevent misunderstandings.",
        archetype: "The Truth Bearer – a leader whose word and action are aligned, inspiring confidence.",
        practicalApplication: [
          "We make decisions with honesty, fairness and the highest ethical standards. Trust and integrity in leadership are fundamental to establishing a transparent, ethical organizational climate and fostering effective decision-making. By consistently choosing fairness and transparency, leaders earn respect and credibility, ensuring a trustworthy culture.",
          "Acting with integrity means our choices are morally sound and based on facts, not convenience. This moral compass ensures all outcomes align with our values, building confidence among customers and teams alike.",
        ],
      },
      {
        title: "Be Self-Critical & Earn Trust",
        subtitle: "Own Mistakes",
        summary: "Acknowledge mistakes openly and take full responsibility",
        detail:
          "Acknowledge mistakes openly and take full responsibility for your actions. Continuously learn from errors, seek feedback, and use these experiences to improve performance, strengthen credibility, and build lasting trust with colleagues, stakeholders and customers.",
        archetype: "The Humble Reformer – one who transforms errors into stepping stones for growth.",
        practicalApplication: [
          "We earn trust by listening attentively, speaking candidly, and treating others with respect. Leaders listen attentively, speak candidly, and treat others respectfully and even are vocally self-critical. By admitting mistakes and seeking feedback, we show humility and build confidence. This openness fosters reliable collaboration and a culture of continuous learning.",
          "Owning our errors and learning from them makes the team stronger. Self-criticism and honesty keep quality high—when issues arise, we fix them so they stay fixed. In this way, building trust and humility leads to better decisions and a more resilient, united organization.",
        ],
      },
      {
        title: "Display Empathy",
        subtitle: "Listen & Understand",
        summary: "Actively listen to others and respond with compassion",
        detail:
          "Actively listen to others, seek to understand their diverse perspectives, and respond with compassion. Demonstrate care and consideration in all interactions that fosters trust, collaboration, and a supportive workplace which values diversity and inclusion, where everyone can thrive.",
        archetype: "The Compassionate Listener – one who bridges divides by understanding deeply.",
        practicalApplication: [
          "We actively listen and try to see situations from others' perspectives. Empathetic leadership improves leader effectiveness and increases trust and collaboration on teams. By understanding colleagues' and customers' needs with compassion, we make people feel valued. This strengthens relationships, drives teamwork, and creates a more innovative culture.",
          "Showing empathy guides decision-making to consider human impact. Empathy serves as a bridge: it ensures diverse ideas are heard and respected, which leads to richer solutions. A team that practices empathy is more motivated and better aligned toward shared goals.",
        ],
      },
    ],
    Collaboration: [
      {
        title: "Influence Without Authority",
        subtitle: "Inspire & Align",
        summary: "Use clear communication, logic, and empathy to persuade",
        detail:
          "Listen actively, value diverse perspectives, and use clear communication, logical reasoning, empathy, and expertise to persuade, align others toward shared goals, and secure buy-in without relying on positional authority.",
        archetype: "The Guiding Flame – one who lights the way for others without force.",
        practicalApplication: [
          "We lead by inspiration, logic and empathy rather than hierarchy. By demonstrating credibility and aligning others around a vision, we gain buy-in across teams. Earning trust through respect and transparency allows our ideas to spread organically.",
          "This principle ensures cross-functional collaboration: when we listen attentively, speak candidly, and treat others respectfully, we build strong relationships. Influencing without formal power lets us move initiatives forward quickly and gain support for change, driving faster, aligned decisions company-wide.",
        ],
      },
      {
        title: "Push Back Assertively",
        subtitle: "Challenge Boldly",
        summary: "Respectfully challenge assumptions and propose alternatives",
        detail:
          "Respectfully challenge assumptions, raise concerns about risks or inefficiencies, and propose well-reasoned alternatives to improve outcomes, while remaining collaborative. When uncertain, disagree thoughtfully but commit fully to the quorum's final decision.",
        archetype: "The Courageous Challenger – one who speaks truth to power for the greater good.",
        practicalApplication: [
          "We encourage constructive challenge of assumptions and decisions. Leaders have an obligation to respectfully challenge decisions when they disagree. By speaking up and questioning the status quo, we expose blind spots and spark innovation. This assertiveness prevents groupthink and drives better solutions.",
          "Once a decision is made, however, we fully commit to it. The disagree and commit model means healthy debate leads to thoughtful choices, after which everyone aligns on execution. This balance of bold challenge and strong commitment helps us innovate while staying focused on agreed goals.",
        ],
      },
      {
        title: "Customer Obsession",
        subtitle: "Serve Relentlessly",
        summary: "Consistently prioritize customer needs with data-driven insights",
        detail:
          "Consistently prioritize customer needs, use data-driven insights to deliver high-quality, timely results, and continuously improve products and services that delight customers.",
        archetype: "The Servant Leader – one who places others' needs at the center of every action.",
        practicalApplication: [
          "We start every initiative by focusing on the customer's needs. Leaders start with the customer and work backwards – we prioritize customer satisfaction over competitors. By obsessing over customers, we design products and services that truly solve customer problems. This focus builds long-term trust and loyalty as we work vigorously to earn and keep customer trust.",
          "Putting the customer at the center drives high-quality, timely outcomes. Using data-driven insights, we ensure decisions deliver maximum value to customers. When customers succeed, our company succeeds, so every priority and goal is aligned around delivering exceptional customer results.",
        ],
      },
      {
        title: "Dealing with Ambiguity",
        subtitle: "Stay Resilient",
        summary: "Stay focused on vision and adapt quickly to uncertainty",
        detail:
          "Stay focused on vision and purpose, remain flexible on details, adapt quickly, seek clarity, and make informed decisions, treating uncertainties as opportunities to learn, innovate, and create impact.",
        archetype: "The Steadfast Navigator – one who keeps direction even in uncharted waters.",
        practicalApplication: [
          "We navigate uncertainty with resilience and clear purpose. In fast-moving environments, it's better to act decisively than to wait for complete certainty. We make the best possible decisions with the information available, then learn and adapt.",
          "By accepting that not all answers are known upfront, we remain agile and solution-oriented. Teams stay focused on objectives, seek clarity when needed, and maintain momentum despite unclear situations. This principle ensures we keep progressing toward outcomes even when the path isn't fully defined.",
        ],
      },
    ],
    "Operational Excellence": [
      {
        title: "Ownership & Accountability",
        subtitle: "Own Outcomes",
        summary: "Take full responsibility for tasks, decisions, and results",
        detail:
          "Take full responsibility for your tasks, decisions, and results by setting clear expectations, tracking progress, providing feedback and coaching, leading by example, following through, and reinforcing accountability through appropriate consequences and rewards—all while empowering decision-making, encouraging transparency, and celebrating successes.",
        archetype: "The Keeper of Promises – one who stands firmly by their word and actions.",
        practicalApplication: [
          "We act like owners of the business and take responsibility for outcomes. Leaders never say 'that's not my job' and think long-term instead of chasing short-term results. By owning our projects and commitments, we ensure tasks are completed with quality and efficiency. If problems occur, we step up to fix them rather than passing them along.",
          "Ownership drives operational excellence: when everyone is accountable, work gets done reliably and on time. It encourages proactivity – we don't wait to be asked to solve problems, and we work across teams for the company's success. In this way, accountability ensures we follow through on our commitments and continuously improve results.",
        ],
      },
      {
        title: "Deliver with Agility",
        subtitle: "Be Nimble",
        summary: "Adapt swiftly and balance speed with quality",
        detail:
          "The ability to adapt swiftly in changing circumstances by focusing on key inputs that drive mission outcomes, making quick and informed decisions, delivering value iteratively, and balancing speed with quality—enabled by adaptability, resilience, decisiveness, collaboration, and continuous learning.",
        archetype: "The Adaptive Warrior – one who thrives amidst change by staying flexible and focused.",
        practicalApplication: [
          "We move fast and adapt quickly without sacrificing quality. The bias for action principle recognizes that speed matters in business and encourages making smart, calculated decisions even under uncertainty. By pushing decisions down and empowering teams, we prioritize being fast (even if only 80% confident) over waiting to be 100% certain. This agility lets us seize opportunities and respond to change rapidly.",
          "Acting with agility means focusing on key inputs and delivering results promptly. Leaders deliver the right quality in a timely fashion, rising to the occasion despite setbacks. In practice, this translates to short feedback loops and iterative improvements: we launch, learn, and adjust, ensuring speedy execution and progress toward goals.",
        ],
      },
      {
        title: "Insist on High Standards",
        subtitle: "Raise the Bar",
        summary: "Uphold accountability and excellence, refusing mediocrity",
        detail:
          "It is not about perfectionism, but about upholding accountability and excellence—refusing mediocrity, setting S.M.A.R.T. data-driven goals, delivering accurate and thoughtful outcomes, continuously improving, and building a lasting legacy through market differentiation and high standards.",
        archetype: "The Standard Bearer – one who inspires others by aiming higher and refusing mediocrity.",
        practicalApplication: [
          "We set and relentlessly raise the bar for quality in everything we do. Relentlessly high standards ensure that teams continually improve and refuse mediocrity. By demanding excellence in products, services, and processes, we catch defects early and prevent errors from reoccurring. High standards ensure that quality is built into our work, not just tested in at the end.",
          "This principle acts as a guardrail for decision-making: it forces us to measure performance and refuse shortcuts. Using data and clear benchmarks, we hold ourselves accountable so that every output meets or exceeds expectations. In turn, customers receive more reliable, superior products and services.",
        ],
      },
      {
        title: "Deep Dive",
        subtitle: "Know the Details",
        summary: "Go beneath the surface with a data-driven mindset",
        detail:
          "Deep Dive is not micromanagement—it is the discipline of going beneath the surface with a probing, data-driven mindset to ground decisions in facts and insights, combining vision with reality to achieve problem-solving excellence, mitigate risks, and deliver purposeful, lasting outcomes.",
        archetype: "The Wise Strategist – one who balances vision with detail to achieve purposeful outcomes.",
        practicalApplication: [
          "We stay close to the details and base decisions on data. Leaders operate at all levels, stay connected to the details and use metrics to verify the real state of things. By thoroughly analyzing problems and data, we make fact-based decisions rather than relying on guesswork. This deep understanding prevents surprises and ensures outcomes are purposeful.",
          "A data-driven approach drives better quality and speed. When we audit frequently and investigate discrepancies between metrics and anecdotes, issues are spotted and resolved quickly. Deep diving reduces errors and aligns the team around shared facts, supporting timely, high-quality results.",
        ],
      },
    ],
    "Growth Mindset": [
      {
        title: "Constantly Evolve",
        subtitle: "Adapt & Improve",
        summary: "Embrace change, persevere, and innovate",
        detail:
          "Embrace change, persevere, and innovate—by staying adaptable, continuously learning, and redefining processes, employees drive innovation, earn customer trust, and ensure the organization remains resilient and competitive.",
        archetype: "The Eternal Learner – one who grows through every challenge and change.",
        practicalApplication: [
          "We embrace change and continuous learning, knowing that leaders are never done learning. Stagnation leads to obsolescence (you rest, you rust), so we regularly seek new knowledge and skills. By adapting and improving our processes and solutions, we stay ahead of the curve and foster innovation.",
          "Constant evolution means we challenge the status quo and refuse to settle. Teams that constantly evolve improve efficiency and find better ways to work. This mindset drives superior innovation and responsiveness: we pivot when needed and continuously raise our own standards.",
        ],
      },
      {
        title: "Inquisitiveness & Learnability",
        subtitle: "Stay Curious",
        summary: "Ask questions, seek knowledge, and explore better ways",
        detail:
          "Ask questions, seek knowledge, and explore better ways of working—curiosity fuels innovation, and by asking 'why not?' and applying new learning, employees uncover smarter approaches, improve outcomes, and drive meaningful impact for the organization and its customers.",
        archetype: "The Curious Explorer – one who ventures into the unknown to discover better paths.",
        practicalApplication: [
          "We remain curious and open-minded at all times. By asking questions and exploring new possibilities, we unlock better solutions. This learning mindset pushes us to acquire skills and insights that directly improve our work and outcomes.",
          "Curiosity fuels innovation: when we actively seek out new ideas (from inside and outside the company), we avoid complacency. Applying learning to our challenges leads to smarter, more data-driven decisions. A culture of inquisitiveness ensures we continuously improve and adapt to emerging needs and technologies.",
        ],
      },
      {
        title: "Think Big Picture",
        subtitle: "See Beyond",
        summary: "Understand broader context and align with strategic foresight",
        detail:
          "Understand the broader context, connect the dots, ask 'what if?' questions, encourage innovation, and align actions with strategic foresight to make decisions that create long-term, sustainable impact.",
        archetype: "The Visionary Seer – one who sees beyond the present moment to shape the future.",
        practicalApplication: [
          "We look beyond immediate tasks to the long-term impact of our decisions. Thinking big means creating a bold vision that inspires results. By understanding broader context and strategic objectives, we ensure even day-to-day work supports our mission. This ensures everyone always knows the purpose and how their work contributes to long-term goals.",
          "By seeing beyond the small details, we identify opportunities and future risks others might miss. This enables innovative, large-scale solutions rather than incremental fixes. A big-picture mindset aligns individual decisions with strategic impact and prevents us from getting bogged down in narrow concerns.",
        ],
      },
      {
        title: "Frugality",
        subtitle: "Do More With Less",
        summary: "Optimize resources and deliver efficiently with creativity",
        detail:
          "Optimize resources, eliminate waste, and deliver high-quality results efficiently — by applying creativity and disciplined decision-making, employees use resources wisely, foster innovation, and build a belief that resourcefulness is a form of the organizational and personal wisdom.",
        archetype: "The Resourceful Builder – one who creates enduring value with discipline and creativity.",
        practicalApplication: [
          "We accomplish more with fewer resources by being creative and efficient. Constraints breed resourcefulness. Rather than automatically expanding budget or headcount, we find innovative, cost-effective solutions to problems. Frugality means eliminating waste – every expense or effort must deliver clear value.",
          "Operating frugally drives operational excellence. It forces smart problem-solving (and avoids frugal but stupid decisions). By optimizing resources and focusing on what truly matters, we deliver high-quality results efficiently. This principle ensures we invest only where it yields maximum impact, supporting sustainable growth.",
        ],
      },
    ],
  }

  useEffect(() => {
    const handleGlobalClick = () => {
      if (expandedTile) {
        setExpandedTile(null)
      }
    }

    if (expandedTile) {
      document.addEventListener("click", handleGlobalClick)
    }

    return () => {
      document.removeEventListener("click", handleGlobalClick)
    }
  }, [expandedTile])

  const handleTileClick = (category: string, index: number, e: React.MouseEvent) => {
    e.stopPropagation()

    if (expandedTile?.category === category && expandedTile?.index === index) {
      setExpandedTile(null)
    } else {
      setExpandedTile({ category, index })
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="w-full px-6">
        {/* 1. Our Culture - ICOG Culture Framework */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
              <Award className="h-4 w-4 mr-2" />
              Our Culture
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ICOG Culture Framework
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Timeless Wisdom for Action
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed mb-8">
              At Trivitron Digital.ai, our culture is built on the ICOG value system: Integrity, Collaboration,
              Operational Excellence, and Growth Mindset. These core values are brought to life through leadership
              principles that guide behaviour, decision-making, and outcomes.
            </p>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto font-medium italic mb-6">
              "A leader's true legacy is not in wealth or power but in enduring virtue, trust, and the impact they leave
              for generations."
            </p>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto font-medium">
              <span className="text-purple-600">Integrity</span> keeps us grounded. |{" "}
              <span className="text-blue-600">Collaboration</span> makes us stronger. |{" "}
              <span className="text-teal-600">Operational Excellence</span> drives our results. |{" "}
              <span className="text-green-600">Growth Mindset</span> shapes our future.
            </p>
          </div>

          {Object.entries(icogCulture).map(([category, principles], categoryIndex) => (
            <div key={category} className="mb-16">
              <h3
                className={`text-3xl md:text-4xl font-bold mb-8 text-center ${
                  category === "Integrity"
                    ? "text-purple-600"
                    : category === "Collaboration"
                      ? "text-blue-600"
                      : category === "Operational Excellence"
                        ? "text-teal-600"
                        : "text-green-600"
                }`}
              >
                {category}
              </h3>

              <div className="relative grid grid-cols-2 gap-6 w-full" style={{ minHeight: "500px" }}>
                {principles.map((principle, index) => {
                  const isExpanded = expandedTile?.category === category && expandedTile?.index === index
                  const isSameCategory = expandedTile?.category === category
                  const shouldDim = isSameCategory && !isExpanded
                  const gradientColor =
                    category === "Integrity"
                      ? "from-purple-500 to-purple-600"
                      : category === "Collaboration"
                        ? "from-blue-500 to-blue-600"
                        : category === "Operational Excellence"
                          ? "from-teal-500 to-teal-600"
                          : "from-green-500 to-green-600"

                  return (
                    <div
                      key={index}
                      className={`transition-all duration-300 ${
                        isExpanded ? "absolute inset-0 z-20" : "relative z-10"
                      } ${shouldDim ? "opacity-10" : "opacity-100"}`}
                    >
                      <Card
                        className={`cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300 h-full ${
                          isExpanded ? "ring-4 ring-offset-2" : ""
                        } ${
                          category === "Integrity"
                            ? isExpanded
                              ? "ring-purple-400"
                              : ""
                            : category === "Collaboration"
                              ? isExpanded
                                ? "ring-blue-400"
                                : ""
                              : category === "Operational Excellence"
                                ? isExpanded
                                  ? "ring-teal-400"
                                  : ""
                                : isExpanded
                                  ? "ring-green-400"
                                  : ""
                        }`}
                        onClick={(e) => handleTileClick(category, index, e)}
                      >
                        <CardContent className={`${isExpanded ? "p-6" : "p-5"}`}>
                          {!isExpanded ? (
                            <>
                              <div
                                className={`w-10 h-10 bg-gradient-to-br ${gradientColor} rounded-lg flex items-center justify-center mb-3`}
                              >
                                <Award className="h-5 w-5 text-white" />
                              </div>
                              <h4 className="text-base font-bold text-gray-900 mb-1 leading-tight">
                                {principle.title}
                              </h4>
                              <p className="text-xs font-semibold text-gray-500 mb-2">{principle.subtitle}</p>
                              <p className="text-sm text-gray-600 leading-snug">{principle.summary}</p>
                            </>
                          ) : (
                            <div className="h-full flex flex-col">
                              <div className="flex items-start gap-3 mb-3">
                                <div
                                  className={`w-12 h-12 bg-gradient-to-br ${gradientColor} rounded-xl flex items-center justify-center flex-shrink-0`}
                                >
                                  <Award className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                  <h4 className="text-xl font-bold text-gray-900 leading-tight mb-1">
                                    {principle.title}
                                  </h4>
                                  <p className="text-sm font-semibold text-gray-500">{principle.subtitle}</p>
                                </div>
                              </div>

                              <div className="space-y-2 text-sm">
                                <div>
                                  <h5 className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-1">
                                    Core Principle
                                  </h5>
                                  <p className="text-gray-700 leading-relaxed">{principle.detail}</p>
                                </div>

                                <div>
                                  <h5 className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-1">
                                    Archetype
                                  </h5>
                                  <p className="text-gray-600 italic leading-relaxed">{principle.archetype}</p>
                                </div>

                                <div>
                                  <h5 className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-1">
                                    In Practice
                                  </h5>
                                  <div className="space-y-1.5">
                                    {principle.practicalApplication.map((application, idx) => (
                                      <p key={idx} className="text-gray-600 leading-relaxed">
                                        {application}
                                      </p>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* 2. Leadership Tenets */}
        <div className="bg-gradient-to-r from-purple-900 to-blue-800 rounded-3xl p-8 md:p-16 text-white mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Leadership Tenets</h3>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto">
              Timeless wisdom that guides our actions and decisions every day
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 w-full">
            {[
              "Fail Fast to Succeed – Experiment, learn quickly, and adapt. Failure is a stepping stone, not an endpoint.",
              "Good Intentions Are Not Enough – Actions matter more than intentions. Execution defines impact.",
              "Same Mistake Twice – Repeating an error is not a skill gap but a will issue. Learning must translate into discipline.",
              "Never Justify, Explain – Leaders owe clarity, not excuses. Explanation builds trust; justification erodes it.",
              "Never React, Always Respond – Pause, reflect, and act with composure. Reaction is impulse; response is wisdom.",
              "Duty Above Self – Place purpose and responsibility higher than personal comfort or recognition.",
              "Strength with Compassion – Lead firmly but with empathy, balancing decisiveness with care.",
              "Choose Silence When Needed – Measured silence can carry more weight than hurried words.",
              "Anchor in Principles, Adapt in Tactics – Hold values steady while adjusting strategies to circumstances.",
              "Legacy Thinking – Decisions should create enduring value, not short-lived wins.",
            ].map((tenet, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-300 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-purple-100 leading-relaxed">{tenet}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Our Story */}
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl p-8 md:p-12 mb-20">
          <div className="w-full">
            <div className="text-center mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">
                <Heart className="h-4 w-4 mr-2" />
                Our Story
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Our Story</h3>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              RESOHEALTH is a global HealthTech innovator founded with the strategic backing of Peking University
              Resource Holdings. With established operations across the Middle East (UAE), Asia (India), and Africa
              (Kenya), we possess a unique understanding of diverse healthcare landscapes. We build and deploy localized
              solutions that combine cutting-edge technology with clinical excellence, demonstrated by our DHA-licensed
              operations in Dubai. We are not just a technology provider; we are a strategic partner dedicated to
              architecting the future of healthcare, one population at a time.
            </p>
          </div>
        </div>

        {/* 4. Joint Venture Mission */}
        <div className="bg-gradient-to-r from-blue-900 to-teal-800 rounded-3xl p-8 md:p-16 text-white mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                <Handshake className="h-4 w-4 mr-2" />
                Joint Venture Mission
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Democratizing Advanced Healthcare Technology</h3>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Our joint venture combines Trivitron's proven medical technology leadership with ResoHealth's innovative
                AI capabilities to make advanced healthcare technology accessible and affordable for emerging markets,
                transforming healthcare delivery across India, Africa, and the MENA region.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-300 rounded-full mr-4"></div>
                  <span className="text-blue-100">Combining 30+ years of medical technology expertise</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-300 rounded-full mr-4"></div>
                  <span className="text-blue-100">AI-powered solutions for emerging market challenges</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-300 rounded-full mr-4"></div>
                  <span className="text-blue-100">Comprehensive end-to-end healthcare IT solutions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-300 rounded-full mr-4"></div>
                  <span className="text-blue-100">Focus on India, Africa, and MENA healthcare markets</span>
                </div>
              </div>

              <Button className="mt-8 bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full text-lg">
                Learn About Our Partnership
              </Button>
            </div>

            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <img
                  src="/placeholder.svg?height=400&width=500&text=Joint+Venture+Innovation"
                  alt="Trivitron Digital Joint Venture Innovation"
                  className="rounded-lg w-full"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-500/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* 5. The Power of Partnership */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-8 md:p-12 mb-20">
          <div className="text-center mb-8">
            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">The Power of Partnership</h4>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              By combining Trivitron's proven healthcare technology leadership with ResoHealth's innovative AI
              capabilities, we deliver comprehensive solutions that transform healthcare delivery in emerging markets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h5 className="text-lg font-bold text-gray-900 mb-2">Proven Expertise</h5>
              <p className="text-gray-600 text-sm">
                30+ years of medical technology innovation combined with cutting-edge AI development
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h5 className="text-lg font-bold text-gray-900 mb-2">Global Reach</h5>
              <p className="text-gray-600 text-sm">
                180+ countries coverage with specialized focus on India, Africa, and MENA regions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h5 className="text-lg font-bold text-gray-900 mb-2">Innovation Focus</h5>
              <p className="text-gray-600 text-sm">
                AI-powered solutions designed specifically for emerging market healthcare challenges
              </p>
            </div>
          </div>
        </div>

        {/* 6. Joint Venture Partnership - Our Founding Partners */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <Handshake className="h-4 w-4 mr-2" />
              Joint Venture Partnership
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Founding Partners</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The perfect synergy of established healthcare leadership and innovative digital health technology,
              creating unprecedented value for healthcare providers globally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnerStrengths.map((partner, index) => (
              <Card
                key={index}
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${partner.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Building className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-xl font-bold text-gray-900">{partner.company}</h4>
                        <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          Est. {partner.founded}
                        </span>
                      </div>
                      <h5 className="text-lg font-semibold text-blue-600 mb-3">{partner.strength}</h5>
                      <p className="text-gray-600 mb-4">{partner.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {partner.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 7. Our Integrated Solutions */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Integrated Solutions</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Leveraging the combined strengths of both partners, we deliver comprehensive healthcare technology
              solutions that address every aspect of modern healthcare delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {businessVerticals.map((vertical, index) => (
              <Card
                key={index}
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${vertical.title === "Medical Technology" ? "from-blue-500 to-blue-600" : vertical.title === "Healthcare IT Solutions" ? "from-teal-500 to-teal-600" : vertical.title === "In-Vitro Diagnostics" ? "from-green-500 to-green-600" : "from-purple-500 to-purple-600"} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <vertical.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{vertical.title}</h4>
                      <p className="text-gray-600 mb-4">{vertical.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {vertical.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 8. ResoHealth Innovation - Mission & Vision */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">
              <Heart className="h-4 w-4 mr-2" />
              ResoHealth Innovation
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Engineering the Future of
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                Proactive Healthcare
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
              We are a global HealthTech company leveraging AI and integrated digital platforms to shift healthcare from
              reactive treatment to proactive, value-based wellness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To make proactive, data-driven healthcare accessible and affordable for all, shifting the global focus
                  from treatment to prevention.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To build a world where healthcare is predictive, personalized, and participatory, creating healthier
                  communities and sustainable economies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 9. The RESOHEALTH Difference */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The RESOHEALTH Difference</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              What sets us apart in the global healthcare technology landscape
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                  <Handshake className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Integrated Ecosystem</h4>
                <p className="text-gray-600 leading-relaxed">
                  We are one of the few companies globally that seamlessly merges a digital health platform with our own
                  licensed clinical arm, offering everything from on-site screenings to in-home care.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Data-Driven at the Core</h4>
                <p className="text-gray-600 leading-relaxed">
                  Our solutions are built on a powerful data analytics engine that provides actionable insights for
                  employers, predictive models for insurers, and personalized guidance for individuals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Value-Based Philosophy</h4>
                <p className="text-gray-600 leading-relaxed">
                  Our entire model is designed to create shared value. We succeed when our partners reduce costs and
                  their populations become healthier. We make prevention profitable for the entire ecosystem.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Global Reach, Local Expertise</h4>
                <p className="text-gray-600 leading-relaxed">
                  We combine a global vision for technology with deep, on-the-ground understanding of local regulations,
                  cultures, and healthcare provider networks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 10. Global Recognition */}
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              <Award className="h-4 w-4 mr-2" />
              Global Recognition
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Trusted Partnership, Proven Results</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our joint venture leverages the combined recognition and certifications of both partners, ensuring the
              highest standards of quality and compliance across all our healthcare technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Combined Certifications</h4>
              <p className="text-gray-600 mb-4">
                ISO 13485:2016, ISO 9001:2015, and multiple regulatory approvals from both partner organizations.
              </p>
              <div className="text-sm text-blue-600 font-medium">Quality Assured</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Expanded Reach</h4>
              <p className="text-gray-600 mb-4">
                180+ countries through Trivitron's network plus specialized MENA expertise from ResoHealth.
              </p>
              <div className="text-sm text-teal-600 font-medium">Global + Regional</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Enhanced Impact</h4>
              <p className="text-gray-600 mb-4">
                Serving millions of patients through combined medical technology and AI-powered healthcare solutions.
              </p>
              <div className="text-sm text-green-600 font-medium">Lives Transformed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
