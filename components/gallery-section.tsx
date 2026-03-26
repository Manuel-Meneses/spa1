"use client"

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { motion } from "framer-motion"

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

      <div className="hidden md:grid md:grid-cols-4 gap-6 items-start px-4">
          {galleryImages.map((image, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              // Magia aquí: Arcos (rounded-t-full) y asimetría
              className={`group relative overflow-hidden shadow-2xl transition-all duration-700 cursor-pointer ${
                index % 2 === 0 
                  ? "aspect-[1/1.5] rounded-t-full rounded-b-xl md:translate-y-0" 
                  : "aspect-[1/1.6] rounded-t-full rounded-b-xl md:translate-y-16"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/90 via-[#0B0F14]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out text-center">
                <span className="text-white font-serif italic text-2xl block">{image.title}</span>
              </div>
            </motion.div>
          ))}
        </div> 
      </div>
    </section>
  )
}