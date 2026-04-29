"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import SiteHeader from "@/components/site-header"

export default function TierraIbericaProjectPage() {
  return (
    <main className="min-h-screen bg-bg text-white">
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
        {/* Imagen 1: Portada/Hero */}
        <div className="w-full rounded-xl overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Behance_editorialII_01.jpg-eS93CoFY6PaY90Uqo8eitoubza16g8.jpeg"
            alt="Tierra Ibérica - Portada y descripción del proyecto"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Imagen 2: Sistema de diseño */}
        <div className="w-full rounded-xl overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Behance_editorialII_02.jpg-OqeqVypxKfwPYPiaqZ4yo1jCrJdVwr.jpeg"
            alt="Tierra Ibérica - Sistema de diseño, tipografía y wireframes"
            width={1200}
            height={1600}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Imagen 3: Micrositios y diseño responsivo */}
        <div className="w-full rounded-xl overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Behance_editorialII_03.jpg-5t6uz5DtCH0x4iYlEBiWAclNUpKpxV.jpeg"
            alt="Tierra Ibérica - Micrositios y diseño responsivo"
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

