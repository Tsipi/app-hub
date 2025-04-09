"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { translations } from "./translations"

type Language = "en" | "fr" | "es" | "de" | "he"

interface LanguageContextType {
  currentLang: Language
  setCurrentLang: (lang: Language) => void
  t: typeof translations.en
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const [currentLang, setCurrentLang] = useState<Language>("en")

  // Handle hydration and persistence
  useEffect(() => {
    // Get saved language from localStorage
    const savedLang = localStorage.getItem("language") as Language | null
    if (savedLang && translations[savedLang]) {
      setCurrentLang(savedLang)
    }
    setMounted(true)
  }, [])

  // Save language preference and update document direction
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("language", currentLang)
      document.documentElement.lang = currentLang
      document.documentElement.dir = currentLang === "he" ? "rtl" : "ltr"
    }
  }, [currentLang, mounted])

  const value = {
    currentLang,
    setCurrentLang,
    t: translations[currentLang],
    isRTL: currentLang === "he"
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return null
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
} 