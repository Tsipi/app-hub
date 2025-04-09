import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Noto_Sans_Hebrew } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { LanguageProvider } from "@/lib/language-context"

const inter = Inter({ subsets: ["latin"] })
const notoSansHebrew = Noto_Sans_Hebrew({ subsets: ["hebrew"] })

export const metadata: Metadata = {
  title: "Your Website",
  description: "A modern website with responsive design",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${notoSansHebrew.className}`}>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <div className="flex min-h-screen flex-col [&>*]:rtl:font-['Noto_Sans_Hebrew']">
              <Navbar />
              <main className="flex-1 w-full rtl:text-right ltr:text-left">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </LanguageProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}


import './globals.css'