import { Instagram, MapPin, Clock, Phone, Sparkles } from "lucide-react"

const schedule = [
  { day: "Lunes a Miércoles", hours: "10:30 - 13:00 / 15:30 - 20:00" },
  { day: "Jueves y Viernes", hours: "10:30 - 13:00 / 15:30 - 20:00" },
  { day: "Sábado", hours: "10:30 - 21:30" },
  { day: "Domingo", hours: "Cerrado" },
]

export function Footer() {
  return (
    <footer className="py-16 px-6 md:px-12 lg:px-20 bg-foreground text-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Tagline */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-2xl font-semibold">
              <Sparkles className="h-7 w-7 text-primary" />
              <span>MKM</span>
            </div>
            <p className="text-card/70 text-sm leading-relaxed">
              Profesionales en estética integral. Tu belleza, nuestra pasión.
            </p>
            {/* Phone */}
            <a 
              href="tel:03512382028"
              className="flex items-center gap-2 text-card/80 hover:text-primary transition-colors mt-2"
            >
              <Phone className="h-5 w-5" />
              <span className="font-medium">0351-2382028</span>
            </a>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Ubicación
            </h3>
            <p className="text-card/80 text-sm">
              Bedoya 143<br />
              Barrio Cofico<br />
              Córdoba, Argentina
            </p>
            <a 
              href="https://instagram.com/mkm.estetica" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-card/80 hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span>@mkm.estetica</span>
            </a>
          </div>

          {/* Hours */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Horarios
            </h3>
            <div className="space-y-2 text-sm">
              {schedule.map((item, index) => (
                <div key={index} className="flex justify-between gap-4 text-card/80">
                  <span>{item.day}</span>
                  <span className="text-card/60">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-card/10" />

        {/* Copyright */}
        <div className="text-center text-xs text-card/50">
          <p>© {new Date().getFullYear()} MKM Estética Integral. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
