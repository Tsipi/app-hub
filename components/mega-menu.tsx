"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { Layers, ShoppingCart, Zap, Shield, BarChart, Cloud, Server, Smartphone } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"
import type { TranslationKey } from "@/lib/translations"

export type ProductCategory = {
  titleKey: TranslationKey
  items: {
    titleKey: TranslationKey
    descriptionKey: TranslationKey
    href: string
    icon: React.ReactNode
  }[]
}

export const productCategories: ProductCategory[] = [
  {
    titleKey: "softwareSolutions",
    items: [
      {
        titleKey: "analyticsProducts",
        descriptionKey: "analyticsDescription",
        href: "/products/analytics",
        icon: <BarChart className="h-5 w-5" />,
      },
      {
        titleKey: "ecommerceSuite",
        descriptionKey: "ecommerceDescription",
        href: "/products/ecommerce",
        icon: <ShoppingCart className="h-5 w-5" />,
      },
      {
        titleKey: "securityProducts",
        descriptionKey: "securityDescription",
        href: "/products/security",
        icon: <Shield className="h-5 w-5" />,
      },
      {
        titleKey: "integrationApi",
        descriptionKey: "integrationDescription",
        href: "/products/api",
        icon: <Layers className="h-5 w-5" />,
      },
    ],
  },
  {
    titleKey: "cloudServices",
    items: [
      {
        titleKey: "cloudProducts",
        descriptionKey: "cloudDescription",
        href: "/products/cloud-hosting",
        icon: <Cloud className="h-5 w-5" />,
      },
      {
        titleKey: "dedicatedServers",
        descriptionKey: "serversDescription",
        href: "/products/servers",
        icon: <Server className="h-5 w-5" />,
      },
      {
        titleKey: "mobileSolutions",
        descriptionKey: "mobileDescription",
        href: "/products/mobile",
        icon: <Smartphone className="h-5 w-5" />,
      },
      {
        titleKey: "performanceOptimization",
        descriptionKey: "performanceDescription",
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
  const menuRef = useRef<HTMLDivElement>(null)
  const { t, isRTL } = useLanguage()

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!mounted && !isOpen) return null

  return (
    <div
      ref={menuRef}
      className={cn(
        "absolute top-full left-0 w-full bg-background border-b shadow-lg z-50 transition-all duration-300 ease-in-out",
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none",
        isRTL ? "text-right" : "text-left"
      )}
      onMouseLeave={onClose}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8", isRTL && "md:[direction:rtl]")}>
          {productCategories.map((category, index) => (
            <div
              key={index}
              className="animate-in fade-in slide-in-from-bottom-2 duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <h3 className="text-lg font-semibold mb-4">{t[category.titleKey]}</h3>
              <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-4", isRTL && "sm:[direction:rtl]")}>
                {category.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    href={item.href}
                    className={cn(
                      "group flex items-center p-3 rounded-lg hover:bg-muted transition-colors animate-in fade-in slide-in-from-bottom-1 duration-300",
                      isRTL ? "flex-row-reverse" : "flex-row"
                    )}
                    style={{ animationDelay: `${(index * 4 + itemIndex) * 30}ms` }}
                    onClick={onClose}
                  >
                    <div className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-md border bg-background transition-transform duration-200",
                      isRTL ? "group-hover:-translate-x-1" : "group-hover:translate-x-1"
                    )}>
                      {item.icon}
                    </div>
                    <div className={cn("space-y-1 flex-1", isRTL ? "ml-4" : "mr-4")}>
                      <h4 className="text-sm font-medium">{t[item.titleKey]}</h4>
                      <p className="text-xs text-muted-foreground">{t[item.descriptionKey]}</p>
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
            {t.viewAllProducts}
          </Link>
        </div>
      </div>
    </div>
  )
}
