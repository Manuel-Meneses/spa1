import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { GallerySection } from "@/components/gallery-section"
import { SkincareSection } from "@/components/skincare-section" // <-- Importamos la boutique
import { BookingSection } from "@/components/booking-section"
import { MapSection } from "@/components/map-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      {/* Separador Editorial */}
      <section className="py-16 md:py-24 px-6 text-center max-w-4xl mx-auto flex flex-col items-center">
        <span className="text-primary text-4xl font-serif leading-none mb-4">"</span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground/90 leading-relaxed text-balance">
          No se trata solo de verse bien, sino de encontrar un momento de pausa en la rutina. <span className="italic text-primary font-medium">Un espacio pensado exclusivamente para vos.</span>
        </h2>
      </section>

      <ServicesSection />
      <GallerySection />
      
      {/* Añadimos la sección de productos aquí */}
      <SkincareSection />
      
      <BookingSection />
      <MapSection />
      <Footer />
    </main>
  )
}