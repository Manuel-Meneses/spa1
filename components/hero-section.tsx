"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("reservar")
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-spa.jpg"
          alt="Tratamiento de belleza en nuestro exclusivo salón"
          fill
          className="object-cover scale-105 animate-in fade-in duration-1000 slide-in-from-bottom-2"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
      </div>

      <div className="relative z-10 w-full px-6 py-20 md:px-12 lg:px-20 mt-10">
        <div className="max-w-2xl animate-in fade-in slide-in-from-left-8 duration-1000 delay-150 fill-mode-both">
          
          <div className="inline-flex items-center gap-2 rounded-full bg-background/50 backdrop-blur-sm border border-primary/20 px-4 py-2 text-sm font-medium text-primary mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>Atención personalizada en nuestro exclusivo salón</span>
          </div>

          <h1 className="text-5xl font-medium leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
            El tiempo que te dedicás, <span className="text-primary italic font-light">elevado al máximo.</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground md:text-xl leading-relaxed max-w-lg font-light">
            Cosmetología, pedicuría, cejas y estética avanzada. Vení a relajarte, nosotras nos encargamos de resaltar tu mejor versión.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button 
              onClick={scrollToBooking}
              size="lg" 
              className="h-14 px-8 text-base font-medium rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group w-full sm:w-auto"
            >
              Reservar mi turno
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <a href="#servicios" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2 hidden sm:block">
              Descubrir tratamientos
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}