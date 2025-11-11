import { PricingAuth } from "@/components/pricing-auth"
import { BreadcrumbSchema } from "@/components/structured-data"

export default function PricingPage() {
  return (
    <main className="min-h-screen pt-16">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://trivitrondigital.ai/" },
          { name: "Pricing", url: "https://trivitrondigital.ai/pricing/" }
        ]}
      />
      <PricingAuth />
    </main>
  )
}
