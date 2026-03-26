"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar, MessageCircle, HeartHandshake } from "lucide-react"

const services = [
  { value: "cosmetologia", label: "Cosmetología" },
  { value: "pedicuria", label: "Pedicuría" },
  { value: "manicura", label: "Manicura" },
  { value: "peluqueria", label: "Peluquería" },
  { value: "cejas-pestanas", label: "Cejas / Pestañas" },
  { value: "estetica-avanzada", label: "Estética Avanzada" },
  { value: "otro", label: "Otro / Consulta general" },
]

export function BookingSection() {
  const [formData, setFormData] = useState({ name: "", phone: "", service: "", date: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `¡Hola! Quiero reservar un turno 💅✨\n\n*Nombre:* ${formData.name}\n*Teléfono:* ${formData.phone}\n*Servicio:* ${services.find(s => s.value === formData.service)?.label || formData.service}\n*Fecha preferida:* ${formData.date}\n${formData.message ? `*Comentarios:* ${formData.message}` : ""}`
    
    // Número ficticio para la plantilla
    const whatsappNumber = "5491112345678"
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank")
  }

  return (
    <section id="reservar" className="py-24 px-6 md:px-12 lg:px-20 bg-secondary/50 relative overflow-hidden">
      
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado Izquierdo: Copywriting humano y cálido */}
          <div className="max-w-xl">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-6 text-primary">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-foreground tracking-tight text-balance mb-6">
              Vení a relajarte.<br/>
              <span className="text-muted-foreground font-light">Nosotras nos encargamos del resto.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Dejanos tus datos y el servicio que estás buscando. Nos vamos a comunicar por WhatsApp para confirmar el horario que mejor se adapte a tu día.
            </p>
            
            <div className="hidden lg:flex flex-col gap-4 border-l-2 border-primary/20 pl-6">
              <p className="text-sm font-medium text-foreground">✓ Trato 100% personalizado</p>
              <p className="text-sm font-medium text-foreground">✓ Productos de primera calidad</p>
              <p className="text-sm font-medium text-foreground">✓ Asesoramiento sin cargo</p>
            </div>
          </div>

          {/* Lado Derecho: Formulario Estilizado */}
          <Card className="border border-border/50 shadow-2xl rounded-[2.5rem] bg-card relative z-10">
            <CardContent className="p-8 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground/80">Tu nombre</Label>
                    <Input id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="h-12 rounded-2xl bg-secondary/30 focus:bg-card border-border/50" placeholder="Ej. Camila" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-foreground/80">Celular</Label>
                    <Input id="phone" type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="h-12 rounded-2xl bg-secondary/30 focus:bg-card border-border/50" placeholder="Ej. 351 123 4567" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-sm font-medium text-foreground/80">¿Qué servicio buscás?</Label>
                  <Select required value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                    <SelectTrigger className="h-12 rounded-2xl bg-secondary/30 focus:bg-card border-border/50">
                      <SelectValue placeholder="Elegí una opción" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      {services.map((service) => (
                        <SelectItem key={service.value} value={service.value} className="rounded-lg">{service.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date" className="text-sm font-medium text-foreground/80">¿Cuándo te gustaría venir?</Label>
                  <div className="relative">
                    <Input id="date" type="date" required value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="h-12 rounded-2xl bg-secondary/30 focus:bg-card border-border/50 px-4" />
                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-foreground/80">¿Algún detalle extra? (opcional)</Label>
                  <Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="min-h-[100px] rounded-2xl bg-secondary/30 focus:bg-card border-border/50 resize-none p-4" placeholder="Contanos qué tenés en mente..." />
                </div>

                <Button type="submit" className="w-full h-14 text-base font-semibold rounded-2xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 mt-2 bg-foreground text-background hover:bg-foreground/90">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Solicitar Turno por WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
          
        </div>
      </div>
    </section>
  )
}