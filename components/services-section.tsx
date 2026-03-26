import { Scissors, Sparkles, Heart, Eye, Hand, Footprints, ArrowUpRight } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Cosmetología",
    description: "Tratamientos faciales personalizados, limpiezas profundas y cuidado profesional de tu piel.",
  },
  {
    icon: Footprints,
    title: "Pedicuría",
    description: "Cuidado completo de tus pies con tratamientos profesionales para uñas y piel saludables.",
  },
  {
    icon: Hand,
    title: "Manicura",
    description: "Uñas semipermanentes, esculpidas y nail art personalizado para manos impecables.",
  },
  {
    icon: Scissors,
    title: "Peluquería",
    description: "Cortes modernos, coloración profesional, mechas y tratamientos capilares de vanguardia.",
  },
  {
    icon: Eye,
    title: "Cejas y Pestañas",
    description: "Diseño de cejas, lifting de pestañas y extensiones para darle fuerza y luz a tu mirada.",
  },
  {
    icon: Sparkles,
    title: "Estética Avanzada",
    description: "Tratamientos de última generación para rejuvenecimiento, tonificación y cuidado integral.",
  }
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 px-6 md:px-12 lg:px-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Experiencia MKM
            </span>
            <h2 className="mt-4 text-4xl font-medium text-foreground md:text-5xl tracking-tight text-balance">
              Nuestros Tratamientos
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-balance md:text-right">
            Cada tratamiento es un ritual diseñado para hacerte sentir única, combinando técnica experta y productos de primera línea.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-[2rem] bg-card hover:bg-white transition-all duration-500 shadow-sm hover:shadow-xl border border-border/50 overflow-hidden cursor-pointer"
            >
              {/* Círculo decorativo de fondo */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 flex items-center justify-between">
                  <div className="p-4 rounded-2xl bg-secondary group-hover:bg-primary/10 transition-colors duration-500">
                    <service.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground/30 group-hover:text-primary transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-medium text-foreground mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}