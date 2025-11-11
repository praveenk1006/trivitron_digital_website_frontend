"use client"

import { useEffect, useState } from "react"

export function Stats() {
  const [counts, setCounts] = useState({
    countries: 0,
    years: 0,
    solutions: 0,
    efficiency: 0,
  })

  useEffect(() => {
    const targets = {
      countries: 180,
      years: 25,
      solutions: 50,
      efficiency: 40,
    }

    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps

      setCounts({
        countries: Math.floor(targets.countries * progress),
        years: Math.floor(targets.years * progress),
        solutions: Math.floor(targets.solutions * progress),
        efficiency: Math.floor(targets.efficiency * progress),
      })

      if (step >= steps) {
        clearInterval(timer)
        setCounts(targets)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{counts.countries}+</div>
            <div className="text-gray-300">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">{counts.years}+</div>
            <div className="text-gray-300">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">{counts.solutions}+</div>
            <div className="text-gray-300">Healthcare Solutions</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">{counts.efficiency}%</div>
            <div className="text-gray-300">Efficiency Improvement</div>
          </div>
        </div>
      </div>
    </section>
  )
}
