"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Servicios", href: "#servicios" },
  { name: "Galería", href: "#galeria" },
  { name: "Reservar", href: "#reservar" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-card/95 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Ficticio */}
        <a 
          href="#" 
          className="flex items-center gap-2 text-xl font-semibold text-foreground tracking-widest"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
        >
          <Sparkles className="h-6 w-6 text-primary" />
          <span>AURA<span className="font-light">BEAUTY</span></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </button>
          ))}
          <Button 
            onClick={() => scrollToSection("#reservar")}
            className="rounded-full px-6"
          >
            Reservar Turno
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card/98 backdrop-blur-md shadow-lg">
          <nav className="flex flex-col p-6 gap-4">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-left py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection("#reservar")}
              className="w-full mt-2 rounded-full"
            >
              Reservar Turno
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}