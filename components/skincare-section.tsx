"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingBag, ArrowUpRight, Droplets } from "lucide-react"

const products = [
  {
    name: "Sérum Hialurónico + Vit C",
    brand: "Línea Profesional",
    description: "Ilumina, unifica el tono y protege tu piel del estrés diario.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80",
    tag: "Más vendido"
  },
  {
    name: "Crema Hidratación Profunda",
    brand: "Cuidado Diario",
    description: "Textura ligera que restaura la barrera natural de la piel.",
    image: "/images/Crema-foto-.jpg",
    tag: "Esencial"
  },
  {
    name: "Protector Solar FPS 50+",
    brand: "Defensa Activa",
    description: "Toque seco y acabado mate. El paso que no puede faltar.",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80",
    tag: "Recomendado"
  }
]

export function SkincareSection() {
const handleConsult = (productName: string) => {
    const message = `¡Hola! Me interesa consultar por el producto de skincare: *${productName}*. ¿Tienen stock? ✨`
    // Número ficticio para la plantilla
    window.open(`https://wa.me/5491112345678?text=${encodeURIComponent(message)}`, "_blank")
  } 

  return (
    <section id="skincare" className="py-24 px-6 md:px-12 lg:px-20 bg-background overflow-hidden relative">
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-primary text-sm font-medium mb-6">
              <Droplets className="w-4 h-4" />
              <span>Skincare Boutique</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-foreground tracking-tight text-balance">
              Cuidado en casa, <br className="hidden md:block"/>
              <span className="text-muted-foreground font-light">resultados de salón.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-balance lg:text-right">
            Prolongá los resultados de tus tratamientos con nuestra selección exclusiva de productos de laboratorio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group flex flex-col bg-card rounded-[2rem] border border-border/50 overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              {/* Imagen del producto */}
              <div className="relative aspect-square overflow-hidden bg-secondary/50 p-8 flex items-center justify-center">
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-background/80 backdrop-blur-md rounded-full text-xs font-medium text-foreground">
                    {product.tag}
                  </span>
                </div>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Detalles del producto */}
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  {product.brand}
                </span>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow mb-6">
                  {product.description}
                </p>

                <Button 
                  onClick={() => handleConsult(product.name)}
                  variant="outline" 
                  className="w-full rounded-xl h-12 border-border/50 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group/btn"
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Consultar Stock
                  <ArrowUpRight className="w-4 h-4 ml-auto opacity-50 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}