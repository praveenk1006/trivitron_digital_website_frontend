import { Contact } from "@/components/contact"
import { BreadcrumbSchema, ContactPageSchema, LocalBusinessSchema } from "@/components/structured-data"

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-16">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://trivitrondigital.ai/" },
          { name: "Contact", url: "https://trivitrondigital.ai/contact/" }
        ]}
      />
      <ContactPageSchema />
      <LocalBusinessSchema />
      <Contact />
    </main>
  )
}
