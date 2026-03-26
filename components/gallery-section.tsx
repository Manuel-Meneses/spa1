"use client"

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const galleryImages = [
  {
    src: "/images/gallery-nails.jpg",
    alt: "Manicura esculpida",
    title: "Nails Art & Cuidado"
  },
  {
    src: "/images/gallery-hair.jpg",
    alt: "Coloración de cabello",
    title: "Colorimetría y Estilo"
  },
  {
    src: "/images/gallery-facial.jpg",
    alt: "Tratamiento facial",
    title: "Skin Care Avanzado"
  },
  {
    src: "/images/gallery-lashes.jpg",
    alt: "Lifting de pestañas",
    title: "Diseño de Miradas"
  }
]

export function GallerySection() {
  return (
    <section id="galeria" className="py-24 px-6 md:px-12 lg:px-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl font-medium text-foreground md:text-5xl text-balance">
            El Arte de Transformar
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            Un vistazo a los detalles y resultados que logramos todos los días en nuestro estudio.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lg border border-border/50">
                    <Image src={image.src} alt={image.alt} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="text-card font-medium text-lg">{image.title}</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-card/80 backdrop-blur-sm border-0 hover:bg-card" />
            <CarouselNext className="right-4 bg-card/80 backdrop-blur-sm border-0 hover:bg-card" />
          </Carousel>
        </div>

        {/* Desktop Staggered Grid (Diseño Editorial Asimétrico) */}
        <div className="hidden md:grid md:grid-cols-4 gap-6 items-start">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              // El secreto del diseño orgánico: Las columnas impares bajan, las pares suben.
              className={`group relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-border/50 ${
                index % 2 === 0 ? "aspect-[3/4] md:translate-y-0" : "aspect-[4/5] md:translate-y-12"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="h-px w-8 bg-primary mb-3 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <span className="text-card font-medium text-lg tracking-wide block">{image.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}