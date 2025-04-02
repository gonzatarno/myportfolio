"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import SiteHeader from "@/components/site-header"

export default function DondeVamosProjectPage() {
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
        {/* Imagen 1: Portada/Hero */}
        <div className="w-full rounded-xl overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-97ywmtDzY27Z9yMZigUiaQ0PmjJpC7.png"
            alt="DONDE VAMOS - Portada"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Imagen 2: Problema y Objetivo */}
        <div className="w-full rounded-xl overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ne3jNAL3Uli9Fvca1CeKPoS3zn8n99.png"
            alt="Problema, objetivo y propuesta"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Imagen 3: Funcionalidades */}
        <div className="w-full rounded-xl overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jNzzlNnrbzPAnJgE09eWYPxdXPmkBZ.png"
            alt="Funcionalidades"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Imagen 4: User Personas */}
        <div className="w-full rounded-xl overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GPNIXS2PtwJcvq91LIjb2c85li1fWl.png"
            alt="Arquetipos de personas"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Imagen 5: Benchmarking */}
        <div className="w-full rounded-xl overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ptS0g4Hz89ePzS73YwCz1aobbsUaqh.png"
            alt="Benchmarking"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Imagen 6: User Flow */}
        <div className="w-full rounded-xl overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-k9MFWKVjbmv82Ln583EmjbXaSzrd7j.png"
            alt="User Flow"
            width={1200}
            height={1200}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Imagen 7: Wireframes */}
        <div className="w-full rounded-xl overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ycIXi4uuWHyK3h0SQmcqNP8HfVixQF.png"
            alt="Wireframes y prototipos"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Imagen 8: Pruebas */}
        <div className="w-full rounded-xl overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bgvrLgun2BMnYDBmuq7ZAJWivDM6jW.png"
            alt="Pruebas de usabilidad"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Imagen 9: Moodboard y Marca */}
        <div className="w-full rounded-xl overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rrhHzCeltGrksGKyfA5GFstWzQXWTg.png"
            alt="Moodboard y marca"
            width={1200}
            height={1600}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Imagen 10: UI Kit */}
        <div className="w-full rounded-xl overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hxrn2XXhfldUVhGC1z2zbbr7RVgpN4.png"
            alt="UI Kit y componentes"
            width={1200}
            height={1600}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Nueva imagen 11: Mockups */}
        <div className="w-full rounded-xl overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bLIb7AhtwAMrcxdaH2zIhApVwzo921.png"
            alt="Mockups de la aplicación"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Prototipo interactivo de Figma */}
        <div className="w-full space-y-4">
          <h3 className="text-xl font-medium text-center text-white">Prototipo Interactivo</h3>
          <div className="w-full h-[600px] rounded-xl overflow-hidden bg-[#2a2259] p-2">
            <iframe
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FpWF7zV0xTrL2Ja3MjcVRrm%2FPROTOTIPO---Gonzalo-Tarnofsky%3Fpage-id%3D7%253A5%26node-id%3D443%253A8948%26viewport%3D241%252C48%252C0.22%26scaling%3Dscale-down%26starting-point-node-id%3D443%253A8916"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          </div>
          <p className="text-center text-gray-300 text-sm">
            Interactúa con el prototipo funcional directamente desde esta página
          </p>
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

