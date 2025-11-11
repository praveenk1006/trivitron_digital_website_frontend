import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { BreadcrumbSchema, SoftwareApplicationSchema } from "@/components/structured-data"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://trivitrondigital.ai/" }
        ]}
      />
      <SoftwareApplicationSchema />
      <Hero />
      <Stats />
    </main>
  )
}
