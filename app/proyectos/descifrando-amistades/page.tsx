"use client"

import Image from "next/image"
import SiteHeader from "@/components/site-header"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export default function DescifrandoAmistadesProjectPage() {
  const { language } = useLanguage()

  // Contenido en español e inglés (reducido)
  const content = {
    es: {
      title: "Descifrando Amistades",
      subtitle: "Mis contactos en el mundo de la programación",
      category: "Diseño de Información & Visualización de Datos",
      description:
        "Proyecto académico sobre las redes sociales y conexiones humanas en el ámbito de la programación, con una estética inspirada en el mundo hacker y la visualización de datos.",
      concept:
        '"Descifrando Amistades" es un proyecto de visualización de datos que mapea mis conexiones personales en el mundo de la programación, representando visualmente la red de contactos profesionales y amistades que he formado a lo largo de mi carrera.',
      visualization:
        "El mapa de conexiones utiliza una estética cyberpunk con elementos de interfaz de hacker para representar diferentes tipos de relaciones y categorías de contactos.",
      image1: "Mapa completo de conexiones",
      image2: "Información del proyecto",
      image3: "Visualización detallada de la red",
      image4: "Explicación de nodos y conexiones",
      image5: "Vista alternativa del mapa",
      prototypeTitle: "Prototipo Interactivo",
      prototypeDescription: "Interactúa con el prototipo funcional directamente desde esta página",
    },
    en: {
      title: "Deciphering Friendships",
      subtitle: "My contacts in the programming world",
      category: "Information Design & Data Visualization",
      description:
        "Academic project about social networks and human connections in the programming field, with an aesthetic inspired by the hacker world and data visualization.",
      concept:
        '"Deciphering Friendships" is a data visualization project that maps my personal connections in the programming world, visually representing the network of professional contacts and friendships I\'ve formed throughout my career.',
      visualization:
        "The connection map uses a cyberpunk aesthetic with hacker interface elements to represent different types of relationships and contact categories.",
      image1: "Complete connection map",
      image2: "Project information",
      image3: "Detailed network visualization",
      image4: "Explanation of nodes and connections",
      image5: "Alternative view of the map",
      prototypeTitle: "Interactive Prototype",
      prototypeDescription: "Interact with the functional prototype directly from this page",
    },
  }

  // Seleccionar el contenido según el idioma
  const t = content[language === "en" ? "en" : "es"]

  return (
    <main className="min-h-screen bg-[#231955] text-white">
      {/* Header fijo */}
      <SiteHeader />

      {/* Espacio para compensar el header fijo */}
      <div className="pt-24"></div>

      {/* Contenedor principal */}
      <div className="mx-auto max-w-[1000px] px-4 mb-24">
        {/* Encabezado del proyecto */}
        <div className="mb-12">
          <p className="text-[#f8c226] uppercase text-sm font-semibold mb-2">{t.category}</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{t.title}</h1>
          <p className="text-xl text-purple-light mb-4">{t.subtitle}</p>
          <p className="text-gray-300 max-w-3xl">{t.description}</p>
        </div>

        {/* Breve descripción */}
        <div className="mb-12">
          <p className="text-gray-300">{t.concept}</p>
          <p className="text-gray-300 mt-4">{t.visualization}</p>
        </div>

        {/* Galería de imágenes - una debajo de otra */}
        <div className="space-y-12">
          {/* Imagen 1 */}
          <div className="bg-[#2a2259] rounded-xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jYemcU6vFbfjfmgyCuy4kYYSQOa7ra.png"
              alt={t.image1}
              width={1200}
              height={800}
              className="w-full h-auto"
            />
            <div className="p-4">
              <p className="text-center text-gray-300">{t.image1}</p>
            </div>
          </div>

          {/* Imagen 2 */}
          <div className="bg-[#2a2259] rounded-xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rFbnjLB7GRbARuMPEd7b9VuDArdIEw.png"
              alt={t.image2}
              width={1200}
              height={800}
              className="w-full h-auto"
            />
            <div className="p-4">
              <p className="text-center text-gray-300">{t.image2}</p>
            </div>
          </div>

          {/* Imagen 3 */}
          <div className="bg-[#2a2259] rounded-xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-le79MfteYdA99ilwRThDfCQnFbGTVr.png"
              alt={t.image3}
              width={1200}
              height={800}
              className="w-full h-auto"
            />
            <div className="p-4">
              <p className="text-center text-gray-300">{t.image3}</p>
            </div>
          </div>

          {/* Imagen 4 */}
          <div className="bg-[#2a2259] rounded-xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-j0IuEgni7CxvTABVzwjFgEjhdyOZ2d.png"
              alt={t.image4}
              width={1200}
              height={800}
              className="w-full h-auto"
            />
            <div className="p-4">
              <p className="text-center text-gray-300">{t.image4}</p>
            </div>
          </div>

          {/* Imagen 5 */}
          <div className="bg-[#2a2259] rounded-xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YUaaSKiMbeCTEidUMd13ejDtueLr3f.png"
              alt={t.image5}
              width={1200}
              height={800}
              className="w-full h-auto"
            />
            <div className="p-4">
              <p className="text-center text-gray-300">{t.image5}</p>
            </div>
          </div>

          {/* Prototipo de Figma */}
          <div className="w-full space-y-4">
            <h3 className="text-xl font-medium text-center text-white">{t.prototypeTitle}</h3>
            <div className="w-full h-[600px] rounded-xl overflow-hidden bg-[#2a2259] p-2">
              <iframe
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FiMx4xKi89JoBMLDPkgnCXi%2FTP3%3Fpage-id%3D0%253A1%26node-id%3D9-3%26t%3DRE7apGE3YkeHs1h1-1"
                allowFullScreen
                className="w-full h-full rounded-lg"
              />
            </div>
            <p className="text-center text-gray-300 text-sm">{t.prototypeDescription}</p>
          </div>
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
                {language === "es" ? "Inicio" : "Home"}
              </Link>
              <Link href="/experiencia" className="text-white hover:text-purple transition-colors">
                {language === "es" ? "Sobre mí" : "About me"}
              </Link>
              <Link href="/proyectos" className="text-white hover:text-purple transition-colors">
                {language === "es" ? "Proyectos" : "Projects"}
              </Link>
              <Link href="/contacto" className="text-white hover:text-purple transition-colors">
                {language === "es" ? "Contacto" : "Contact"}
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </main>
  )
}

