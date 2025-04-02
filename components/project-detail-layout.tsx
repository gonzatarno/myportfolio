"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import SiteHeader from "@/components/site-header"
import { useLanguage } from "@/contexts/language-context"

interface ProjectDetailLayoutProps {
  title: string
  category: string
  description: string
  mainImage: string
  children: React.ReactNode
}

export default function ProjectDetailLayout({
  title,
  category,
  description,
  mainImage,
  children,
}: ProjectDetailLayoutProps) {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-[#231955] text-white">
      {/* Header fijo */}
      <SiteHeader />

      {/* Espacio para compensar el header fijo */}
      <div className="pt-24"></div>

      {/* Contenedor principal */}
      <div className="mx-auto max-w-[1000px] px-5 sm:px-6 md:px-8 mb-24">
        {/* Encabezado del proyecto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="flex flex-col justify-center">
            <p className="text-[#f8c226] uppercase text-sm font-semibold mb-2">{category}</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
            <p className="text-gray-300 mb-6">{description}</p>
          </div>
          <div className="bg-[#2a2259] rounded-xl overflow-hidden">
            <Image
              src={mainImage || "/placeholder.svg"}
              alt={title}
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Contenido del proyecto */}
        <div className="border-t border-purple/20 pt-12">{children}</div>
      </div>

      {/* Footer */}
      <div className="w-full px-5 sm:px-6 md:px-8">
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

