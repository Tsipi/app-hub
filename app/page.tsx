"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to AppHub
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A modern, responsive SaaS platform for all your application needs.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild>
                <Link href="/products">Explore Products</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Features</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Discover what makes our products stand out from the competition.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
            {/* Feature cards would go here */}
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center space-y-2 rounded-lg border p-6 bg-background">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold">Feature {i + 1}</h3>
                <p className="text-muted-foreground text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to get started?</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Join thousands of satisfied customers using our products.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Button className="w-full" size="lg" asChild>
                <Link
                  href="#signup"
                  onClick={(e) => {
                    e.preventDefault()
                    document.dispatchEvent(new CustomEvent("open-auth-dialog", { detail: { mode: "signup" } }))
                  }}
                >
                  Sign Up Now
                </Link>
              </Button>
              <p className="text-xs text-muted-foreground">No credit card required. Free trial for 14 days.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
