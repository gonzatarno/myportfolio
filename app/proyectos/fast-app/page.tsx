"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import SiteHeader from "@/components/site-header"

export default function FastAppProjectPage() {
  return (
    <main className="min-h-screen bg-[#231955] text-white">
      {/* Header fijo */}
      <SiteHeader />

      {/* Botón de regreso */}
      <div className="mx-auto max-w-[1000px] px-4 pt-24 pb-8">
        <Link href="/proyectos" className="inline-flex items-center text-white hover:text-[#f8c226] transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Volver a proyectos
        </Link>
      </div>

      {/* Contenedor de imágenes */}
      <div className="mx-auto max-w-[1000px] px-4 space-y-12 mb-24">
        {/* Imagen 1: Portada/Concepto */}
        <div className="w-full rounded-xl overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fastapp_01-IyA2gfXwV7g6mkIjhsTiGRpOwvPIMC.png"
            alt="FAST APP - Concepto y descripción del proyecto"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Imagen 2: Branding */}
        <div className="w-full rounded-xl overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fastapp_02-4jNCUSM5X4BvkcvznoEGETwp0ICtNd.png"
            alt="FAST APP - Branding, logo y paleta de colores"
            width={1200}
            height={1600}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Imagen 3: Funcionamiento y wireframes */}
        <div className="w-full rounded-xl overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fastapp_03-v24biEfLofaKkhZWIxb6smqIAEApcw.png"
            alt="FAST APP - Funcionamiento y wireframes"
            width={1200}
            height={1600}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Imagen 4: Prototipo */}
        <div className="w-full rounded-xl overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fastapp_04-G5M505NqKO1Py3yMGcbWDhvgRjIqHs.png"
            alt="FAST APP - Prototipo y funcionalidades"
            width={1200}
            height={1600}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="w-full px-4">
        <footer className="mx-auto max-w-[1000px] py-8 border-t border-purple/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="font-bold text-xl hover:text-purple-light transition-colors">
              GONZA<span className="text-purple">TARNO</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-white hover:text-purple transition-colors">
                Inicio
              </Link>
              <Link href="/experiencia" className="text-white hover:text-purple transition-colors">
                Sobre mí
              </Link>
              <Link href="/proyectos" className="text-white hover:text-purple transition-colors">
                Proyectos
              </Link>
              <Link href="/contacto" className="text-white hover:text-purple transition-colors">
                Contacto
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </main>
  )
}

