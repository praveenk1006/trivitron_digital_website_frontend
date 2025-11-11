import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { OrganizationSchema, WebsiteSchema } from "@/components/structured-data"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Trivitron Digital.ai - Towards Smarter Healthcare Outcomes",
  description:
    "A joint venture between Trivitron Healthcare and ResoHealth, democratizing advanced healthcare technology through AI-powered SaaS platforms and IoT smart-hospital devices for emerging markets.",
  keywords:
    "Trivitron Digital, healthcare technology, AI diagnostics, IoT medical devices, hospital management, digital health, emerging markets, smarter healthcare outcomes",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <OrganizationSchema />
        <WebsiteSchema />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
