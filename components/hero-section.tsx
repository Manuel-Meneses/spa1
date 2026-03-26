"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("reservar")
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Imagen inmersiva con overlay sutil */}
      <div className="absolute inset-0 z-0">
        <Image
          // Esta es la ruta a la imagen que acabás de guardar en public/images/
          src="/images/imagen-1.jpg"
          alt="Tratamiento de belleza premium en nuestra clínica de estética avanzada"
          fill
          className="object-cover animate-in fade-in duration-[2000ms] scale-105"
          priority
        />
        {/* Overlay negro al 50% para que el header y el texto blanco sean legibles */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-transparent to-[#0B0F14]/60" />
      </div>

      <div className="relative z-10 w-full px-6 flex flex-col items-center text-center mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl flex flex-col items-center"
        >
          <span className="uppercase tracking-[0.4em] text-[#C6A16B] text-xs font-medium mb-8 block">
            Clínica de Estética Avanzada
          </span>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif text-white mb-8 leading-[1.1] tracking-tight">
            El arte de tu <br className="hidden md:block" />
            <span className="italic text-[#C6A16B] font-light">bienestar absoluto.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl font-light leading-relaxed mb-12">
            Un santuario dedicado a la estética avanzada y la relajación. Elevamos tu esencia con tratamientos de vanguardia y atención hiper-personalizada.
          </p>

          <Button 
            onClick={scrollToBooking}
            size="lg" 
            className="h-14 px-10 text-sm tracking-widest uppercase bg-transparent text-white border border-white/30 hover:bg-white hover:text-black rounded-none transition-all duration-500"
          >
            Agendar Experiencia
          </Button>
        </motion.div>
      </div>
    </section>
  )
}