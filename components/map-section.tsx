"use client"

import { MapPin, Navigation } from "lucide-react"

export function MapSection() {
  return (
    <section className="relative w-full h-[500px] lg:h-[600px] overflow-hidden bg-secondary/30">
      {/* Iframe de Google Maps con filtro estético */}
      <iframe 
        // Coordenadas aproximadas de Bedoya 143, Cofico, Córdoba
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.419086390886!2d-64.1857997!3d-31.3998399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432986427d14d9b%3A0xc35fc4ea10874e0e!2sBedoya%20143%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar" 
        width="100%" 
        height="100%" 
        style={{ 
          border: 0, 
          filter: 'grayscale(0.5) contrast(1.1) opacity(0.9)' // Suaviza los colores para verse más premium
        }} 
        allowFullScreen={false} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 pointer-events-none md:pointer-events-auto"
      />
      
      {/* Tarjeta Flotante con la Dirección */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:top-1/2 md:left-12 lg:left-20 md:-translate-y-1/2 md:w-auto md:p-0 z-10 flex items-end md:items-center">
        <div className="bg-card/95 backdrop-blur-md shadow-2xl p-6 md:p-8 rounded-[2rem] border border-border/50 max-w-sm w-full">
          <div className="flex items-start gap-5">
            <div className="p-3 bg-primary/10 rounded-2xl shrink-0">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Visitanos</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Bedoya 143, Barrio Cofico<br/>
                Córdoba, Argentina
              </p>
              <a 
                href="https://maps.google.com/?q=Bedoya+143,+Cordoba,+Argentina" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
              >
                <Navigation className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Cómo llegar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}