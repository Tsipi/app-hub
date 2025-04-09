"use client"

import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

interface LogoProps {
  size?: number
  className?: string
  textClassName?: string
  showText?: boolean
}

export function Logo({ size = 32, className, textClassName, showText = true }: LogoProps) {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  // Dynamic colors based on theme
  const primaryColor = isDark ? "#ffffff" : "#000000"
  const accentColor = "#7c3aed" // Purple accent that works in both themes
  const secondaryColor = isDark ? "#a78bfa" : "#8b5cf6"
  const tertiaryColor = isDark ? "#c4b5fd" : "#a78bfa"

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative" style={{ width: size, height: size }}>
        {/* Base shape */}
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0"
        >
          {/* Main hexagon */}
          <path
            d="M32 4L56.7846 18V46L32 60L7.21539 46V18L32 4Z"
            fill={accentColor}
            className="transition-colors duration-300"
          />

          {/* Inner hexagon */}
          <path
            d="M32 16L45.5885 24V40L32 48L18.4115 40V24L32 16Z"
            fill="white"
            className="transition-colors duration-300"
          />

          {/* Connected nodes - representing multiple apps */}
          <circle cx="32" cy="16" r="4" fill={secondaryColor} className="transition-colors duration-300" />
          <circle cx="45.5885" cy="24" r="4" fill={tertiaryColor} className="transition-colors duration-300" />
          <circle cx="45.5885" cy="40" r="4" fill={secondaryColor} className="transition-colors duration-300" />
          <circle cx="32" cy="48" r="4" fill={tertiaryColor} className="transition-colors duration-300" />
          <circle cx="18.4115" cy="40" r="4" fill={secondaryColor} className="transition-colors duration-300" />
          <circle cx="18.4115" cy="24" r="4" fill={tertiaryColor} className="transition-colors duration-300" />

          {/* Connection lines */}
          <line x1="32" y1="16" x2="45.5885" y2="24" stroke={accentColor} strokeWidth="2" />
          <line x1="45.5885" y1="24" x2="45.5885" y2="40" stroke={accentColor} strokeWidth="2" />
          <line x1="45.5885" y1="40" x2="32" y2="48" stroke={accentColor} strokeWidth="2" />
          <line x1="32" y1="48" x2="18.4115" y2="40" stroke={accentColor} strokeWidth="2" />
          <line x1="18.4115" y1="40" x2="18.4115" y2="24" stroke={accentColor} strokeWidth="2" />
          <line x1="18.4115" y1="24" x2="32" y2="16" stroke={accentColor} strokeWidth="2" />

          {/* Central hub - representing the platform */}
          <circle cx="32" cy="32" r="6" fill={accentColor} className="transition-colors duration-300" />

          {/* Connecting lines to center */}
          <line x1="32" y1="16" x2="32" y2="26" stroke={accentColor} strokeWidth="2" />
          <line x1="45.5885" y1="24" x2="37.1962" y2="28" stroke={accentColor} strokeWidth="2" />
          <line x1="45.5885" y1="40" x2="37.1962" y2="36" stroke={accentColor} strokeWidth="2" />
          <line x1="32" y1="48" x2="32" y2="38" stroke={accentColor} strokeWidth="2" />
          <line x1="18.4115" y1="40" x2="26.8038" y2="36" stroke={accentColor} strokeWidth="2" />
          <line x1="18.4115" y1="24" x2="26.8038" y2="28" stroke={accentColor} strokeWidth="2" />
        </svg>
      </div>

      {showText && <span className={cn("font-bold text-lg tracking-tight", textClassName)}>AppHub</span>}
    </div>
  )
}
