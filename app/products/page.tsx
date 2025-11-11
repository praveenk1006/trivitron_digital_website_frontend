import { Products } from "@/components/products"
import { BreadcrumbSchema, ProductSchema } from "@/components/structured-data"

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-16">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://trivitrondigital.ai/" },
          { name: "Products", url: "https://trivitrondigital.ai/products/" }
        ]}
      />
      <ProductSchema />
      <Products />
    </main>
  )
}
