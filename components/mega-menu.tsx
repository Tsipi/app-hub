"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Layers, ShoppingCart, Zap, Shield, BarChart, Cloud, Server, Smartphone } from "lucide-react"
import { cn } from "@/lib/utils"

export type ProductCategory = {
  title: string
  items: {
    title: string
    description: string
    href: string
    icon: React.ReactNode
  }[]
}

export const productCategories: ProductCategory[] = [
  {
    title: "Software Solutions",
    items: [
      {
        title: "Analytics Platform",
        description: "Advanced data analytics and visualization tools",
        href: "/products/analytics",
        icon: <BarChart className="h-5 w-5" />,
      },
      {
        title: "E-commerce Suite",
        description: "Complete solution for online stores",
        href: "/products/ecommerce",
        icon: <ShoppingCart className="h-5 w-5" />,
      },
      {
        title: "Security Tools",
        description: "Enterprise-grade security solutions",
        href: "/products/security",
        icon: <Shield className="h-5 w-5" />,
      },
      {
        title: "Integration APIs",
        description: "Connect your systems seamlessly",
        href: "/products/api",
        icon: <Layers className="h-5 w-5" />,
      },
    ],
  },
  {
    title: "Cloud Services",
    items: [
      {
        title: "Cloud Hosting",
        description: "Scalable and reliable cloud infrastructure",
        href: "/products/cloud-hosting",
        icon: <Cloud className="h-5 w-5" />,
      },
      {
        title: "Dedicated Servers",
        description: "High-performance dedicated hardware",
        href: "/products/servers",
        icon: <Server className="h-5 w-5" />,
      },
      {
        title: "Mobile Solutions",
        description: "Cross-platform mobile development tools",
        href: "/products/mobile",
        icon: <Smartphone className="h-5 w-5" />,
      },
      {
        title: "Performance Optimization",
        description: "Speed up your applications",
        href: "/products/performance",
        icon: <Zap className="h-5 w-5" />,
      },
    ],
  },
]

interface MegaMenuProps {
  onClose: () => void
  isOpen: boolean
}

export function MegaMenu({ onClose, isOpen }: MegaMenuProps) {
  const [mounted, setMounted] = useState(false)

  // Delay mounting to allow for animation
  useEffect(() => {
    if (isOpen) {
      setMounted(true)
    } else {
      const timer = setTimeout(() => {
        setMounted(false)
      }, 300) // Match this with the transition duration
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!mounted && !isOpen) return null

  return (
    <div
      className={cn(
        "absolute top-full left-0 w-full bg-background border-b shadow-lg z-50 transition-all duration-300 ease-in-out",
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none",
      )}
      onMouseLeave={onClose}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productCategories.map((category, index) => (
            <div
              key={index}
              className="animate-in fade-in slide-in-from-bottom-2 duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    href={item.href}
                    className="flex items-start p-3 rounded-lg hover:bg-muted transition-colors animate-in fade-in slide-in-from-bottom-1 duration-300"
                    style={{ animationDelay: `${(index * 4 + itemIndex) * 30}ms` }}
                    onClick={onClose}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border bg-background">
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium">{item.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          className="mt-8 text-center animate-in fade-in slide-in-from-bottom-1 duration-300"
          style={{ animationDelay: "200ms" }}
        >
          <Link href="/products" className="text-sm font-medium text-primary hover:underline" onClick={onClose}>
            View all products →
          </Link>
        </div>
      </div>
    </div>
  )
}
