"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ChevronDown, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { MegaMenu } from "@/components/mega-menu"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"
import { AuthDialog } from "@/components/auth-dialog"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/lib/language-context"

// Import product categories from mega menu to reuse in mobile menu
import { productCategories } from "@/components/mega-menu"

export default function Navbar() {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [isScrolled, setIsScrolled] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [authDialogOpen, setAuthDialogOpen] = useState(false)
  const [authMode, setAuthMode] = useState<"login" | "signup">("login")
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleOpenAuthDialog = (e: CustomEvent) => {
      const { mode } = e.detail
      openAuthDialog(mode)
    }

    document.addEventListener("open-auth-dialog", handleOpenAuthDialog as EventListener)

    return () => {
      document.removeEventListener("open-auth-dialog", handleOpenAuthDialog as EventListener)
    }
  }, [])

  const closeMegaMenu = () => {
    setMegaMenuOpen(false)
  }

  const openAuthDialog = (mode: "login" | "signup") => {
    setAuthMode(mode)
    setAuthDialogOpen(true)
  }

  const DesktopNavItems = () => (
    <>
      <Link
        href="/about"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/about" ? "text-primary" : "text-muted-foreground",
        )}
      >
        {t.about}
      </Link>
      <div className="relative" onMouseEnter={() => setMegaMenuOpen(true)}>
        <button
          onClick={() => setMegaMenuOpen(!megaMenuOpen)}
          className={cn(
            "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary",
            pathname?.startsWith("/products") || megaMenuOpen ? "text-primary" : "text-muted-foreground",
          )}
        >
          {t.products}
          <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", megaMenuOpen ? "rotate-180" : "")} />
        </button>
      </div>
      <Link
        href="/contact"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/contact" ? "text-primary" : "text-muted-foreground",
        )}
      >
        {t.contact}
      </Link>
    </>
  )

  const MobileNavItems = () => (
    <div className="flex flex-col space-y-4 w-full">
      <Link
        href="/about"
        className={cn(
          "text-base font-medium transition-colors hover:text-primary py-2",
          pathname === "/about" ? "text-primary" : "text-foreground",
        )}
        onClick={() => setMobileMenuOpen(false)}
      >
        {t.about}
      </Link>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="products" className="border-none">
          <AccordionTrigger
            className={cn(
              "text-base font-medium transition-colors hover:text-primary py-2 px-0",
              pathname?.startsWith("/products") ? "text-primary" : "text-foreground",
            )}
          >
            {t.products}
          </AccordionTrigger>
          <AccordionContent>
            <div className="pl-4 pt-2 space-y-6">
              {productCategories.map((category, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-sm font-semibold">{category.title}</h3>
                  <div className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        href={item.href}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border">
                          {item.icon}
                        </div>
                        <span>{item.title}</span>
                        <ChevronRight className="ml-auto h-4 w-4" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <Link
                href="/products"
                className="block text-sm font-medium text-primary hover:underline mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.viewAllProducts}
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Link
        href="/contact"
        className={cn(
          "text-base font-medium transition-colors hover:text-primary py-2",
          pathname === "/contact" ? "text-primary" : "text-foreground",
        )}
        onClick={() => setMobileMenuOpen(false)}
      >
        {t.contact}
      </Link>
    </div>
  )

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur transition-all",
        isScrolled ? "shadow-sm" : "",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center">
            <Logo size={32} />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <DesktopNavItems />
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <ModeToggle />
            <Button variant="outline" size="sm" onClick={() => openAuthDialog("login")}>
              {t.login}
            </Button>
            <Button size="sm" onClick={() => openAuthDialog("signup")}>
              {t.signup}
            </Button>
          </div>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col w-[300px] sm:w-[350px] p-0">
              <div className="flex justify-between items-center p-4 border-b">
                <Logo size={24} />
                <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>
              <div className="flex-1 overflow-auto p-4">
                <MobileNavItems />
              </div>
              <div className="border-t p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <LanguageSwitcher />
                  <ModeToggle />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      setMobileMenuOpen(false)
                      openAuthDialog("login")
                    }}
                  >
                    {t.login}
                  </Button>
                  <Button
                    className="w-full"
                    onClick={() => {
                      setMobileMenuOpen(false)
                      openAuthDialog("signup")
                    }}
                  >
                    {t.signup}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Only show mega menu on desktop */}
      {!isMobile && <MegaMenu onClose={closeMegaMenu} isOpen={megaMenuOpen} />}

      {/* Auth Dialog */}
      <AuthDialog open={authDialogOpen} onOpenChange={setAuthDialogOpen} mode={authMode} onModeChange={setAuthMode} />
    </header>
  )
}
