import { Leadership } from "@/components/leadership"
import { BreadcrumbSchema } from "@/components/structured-data"

export default function LeadershipPage() {
  return (
    <main className="min-h-screen pt-16">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://trivitrondigital.ai/" },
          { name: "Leadership", url: "https://trivitrondigital.ai/leadership/" }
        ]}
      />
      <Leadership />
    </main>
  )
}
