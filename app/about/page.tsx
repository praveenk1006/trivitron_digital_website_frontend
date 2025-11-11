import { About } from "@/components/about"
import { BreadcrumbSchema, AboutPageSchema } from "@/components/structured-data"

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://trivitrondigital.ai/" },
          { name: "About", url: "https://trivitrondigital.ai/about/" }
        ]}
      />
      <AboutPageSchema />
      <About />
    </main>
  )
}
