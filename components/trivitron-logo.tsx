"use client"

import Image from "next/image"

interface TrivitronLogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "full" | "compact" | "text-only" | "hero" | "header-with-tagline"
  theme?: "light" | "dark"
  className?: string
}

export function TrivitronLogo({ size = "md", variant = "full", theme = "light", className = "" }: TrivitronLogoProps) {
  // Size configurations for the logo image
  const sizeConfig = {
    sm: {
      width: 160,
      height: 45,
      taglineText: "text-[10px]",
    },
    md: {
      width: 220,
      height: 60,
      taglineText: "text-xs",
    },
    lg: {
      width: 320,
      height: 90,
      taglineText: "text-sm",
    },
    xl: {
      width: 420,
      height: 120,
      taglineText: "text-base",
    },
  }

  const currentSize = sizeConfig[size]

  const taglineColor = theme === "light" ? "#666666" : "#CCCCCC"
  const separatorColor = theme === "light" ? "#999999" : "#666666"

  // Base logo image component
  const LogoImage = () => (
    <Image
      src="/TrivitronDigital_ai_logo.jpeg"
      alt="Trivitron Digital.ai Logo"
      width={currentSize.width}
      height={currentSize.height}
      priority
      className="object-contain w-auto h-auto"
      style={{ maxWidth: currentSize.width, maxHeight: currentSize.height }}
    />
  )

  if (variant === "text-only" || variant === "compact") {
    return (
      <div className={`${className}`}>
        <LogoImage />
      </div>
    )
  }

  if (variant === "hero") {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        <LogoImage />

        {/* Horizontal separator line */}
        <div className="w-full h-px my-4" style={{ backgroundColor: separatorColor }}></div>

        {/* Tagline */}
        <div
          className={`${currentSize.taglineText} leading-tight tracking-wide text-center`}
          style={{
            color: taglineColor,
            letterSpacing: "0.05em",
          }}
        >
          towards smarter healthcare outcomes
        </div>
      </div>
    )
  }

  if (variant === "header-with-tagline") {
    return (
      <div className={`flex flex-col items-start ${className}`}>
        <LogoImage />

        {/* Tagline directly under logo for header */}
        <div
          className={`${currentSize.taglineText} leading-tight tracking-wide mt-0.5`}
          style={{
            color: taglineColor,
            letterSpacing: "0.05em",
          }}
        >
          towards smarter healthcare outcomes
        </div>
      </div>
    )
  }

  // Full variant
  return (
    <div className={`flex flex-col items-start ${className}`}>
      <LogoImage />

      {/* Horizontal separator line */}
      <div className="w-full h-px my-4" style={{ backgroundColor: separatorColor }}></div>

      {/* Tagline */}
      <div
        className={`${currentSize.taglineText} leading-tight tracking-wide`}
        style={{
          color: taglineColor,
          letterSpacing: "0.05em",
        }}
      >
        towards smarter healthcare outcomes
      </div>
    </div>
  )
}

// Specialized components for different contexts
export function HeaderLogo() {
  return <TrivitronLogo size="md" variant="header-with-tagline" theme="light" />
}

export function FooterLogo() {
  return <TrivitronLogo size="md" variant="compact" theme="dark" />
}

export function HeroLogo() {
  return <TrivitronLogo size="lg" variant="hero" theme="light" />
}

export function MobileLogo() {
  return <TrivitronLogo size="sm" variant="text-only" theme="light" />
}
