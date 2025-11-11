import Script from "next/script"

// Organization Schema - Company Information
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Trivitron Digital.ai",
    "alternateName": "Trivitron Digital",
    "url": "https://trivitrondigital.ai",
    "logo": "https://trivitrondigital.ai/TrivitronDigital_ai_logo.jpeg",
    "description": "A joint venture between Trivitron Healthcare and ResoHealth, democratizing advanced healthcare technology through AI-powered SaaS platforms and IoT smart-hospital devices for emerging markets.",
    "foundingDate": "2024",
    "slogan": "Towards Smarter Healthcare Outcomes",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-44-0000-0000",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+971-4-000-0000",
        "contactType": "customer service",
        "areaServed": "AE",
        "availableLanguage": ["English", "Arabic"]
      }
    ],
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN",
        "streetAddress": "Trivitron Healthcare Campus"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai Healthcare City",
        "addressCountry": "AE",
        "streetAddress": "ResoHealth Office"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/trivitron-digital",
      "https://twitter.com/trivitrondigital"
    ],
    "parentOrganization": [
      {
        "@type": "Organization",
        "name": "Trivitron Healthcare"
      },
      {
        "@type": "Organization",
        "name": "ResoHealth"
      }
    ]
  }

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Website Schema
export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Trivitron Digital.ai",
    "url": "https://trivitrondigital.ai",
    "description": "AI-powered healthcare technology solutions for hospitals and medical facilities",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://trivitrondigital.ai/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Breadcrumb Schema
export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Product Schema for Healthcare Solutions
export function ProductSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Trivitron Digital Healthcare Platform",
    "description": "Comprehensive AI-powered healthcare management system including HIS, LIS, and RIS solutions",
    "brand": {
      "@type": "Brand",
      "name": "Trivitron Digital.ai"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "offerCount": "3"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  }

  return (
    <Script
      id="product-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Software Application Schema
export function SoftwareApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Trivitron Digital Healthcare Suite",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web-based, Cloud",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free consultation and pilot program available"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150"
    },
    "featureList": [
      "Hospital Information System (HIS)",
      "Laboratory Information System (LIS)",
      "Radiology Information System (RIS)",
      "AI-powered diagnostics",
      "IoT smart devices integration",
      "Cloud-based management"
    ]
  }

  return (
    <Script
      id="software-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Local Business Schema for Office Locations
export function LocalBusinessSchema() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Trivitron Digital.ai - Chennai Office",
      "image": "https://trivitrondigital.ai/TrivitronDigital_ai_logo.jpeg",
      "telephone": "+91-44-0000-0000",
      "email": "india@trivitrondigital.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Trivitron Healthcare Campus",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "13.0827",
        "longitude": "80.2707"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "10:00",
          "closes": "16:00"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Trivitron Digital.ai - Dubai Office",
      "image": "https://trivitrondigital.ai/TrivitronDigital_ai_logo.jpeg",
      "telephone": "+971-4-000-0000",
      "email": "mena@trivitrondigital.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ResoHealth Office, Dubai Healthcare City",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.2048",
        "longitude": "55.2708"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "10:00",
          "closes": "16:00"
        }
      ]
    }
  ]

  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={index}
          id={`local-business-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}

// FAQ Schema
export function FAQSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Contact Page Schema
export function ContactPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Trivitron Digital.ai",
    "description": "Get in touch with Trivitron Digital for healthcare technology solutions",
    "url": "https://trivitrondigital.ai/contact"
  }

  return (
    <Script
      id="contact-page-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// About Page Schema
export function AboutPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Trivitron Digital.ai",
    "description": "Learn about Trivitron Digital, a joint venture democratizing healthcare technology",
    "url": "https://trivitrondigital.ai/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Trivitron Digital.ai",
      "description": "Joint venture between Trivitron Healthcare and ResoHealth, providing AI-powered healthcare solutions"
    }
  }

  return (
    <Script
      id="about-page-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
