"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import SiteHeader from "@/components/site-header"
import { useLanguage } from "@/contexts/language-context"

export default function VinilosProjectPage() {
  const { language } = useLanguage()

  // Contenido en español e inglés
  const content = {
    es: {
      backToProjects: "Volver a proyectos",
      category: "Diseño Gráfico & Ilustración",
      title: "VINILOS",
      description:
        "Proyecto académico de diseño de vinilos con temática synthwave, explorando la estética retrofuturista y la creación de piezas visuales que capturan la esencia de este género musical. El desafío consistió en crear portadas de vinilos que evocaran la nostalgia de los años 80 combinada con elementos futuristas.",
      collectionTitle: "Colección Nightdreaming",
      collectionDescription:
        "Esta colección de vinilos explora diferentes facetas de la estética synthwave, desde la nostalgia por los videojuegos arcade hasta la fascinación por los autos deportivos y las noches de neón. Cada vinilo cuenta con un diseño único tanto para la portada (Lado A) como para la contraportada (Lado B), creando una experiencia visual completa.",
      sideA: "Lado A",
      sideB: "Lado B",
      inContext: "Vinilo en contexto de tienda de discos",
      conceptTitle: "Concepto y estética",
      conceptDescription:
        "El proyecto se inspiró en la estética synthwave, un género musical y visual que fusiona elementos nostálgicos de los años 80 con visiones futuristas. Las características principales incluyen:",
      conceptList: [
        "Paleta de colores neón dominada por púrpuras, azules y rosas",
        "Elementos visuales retro como arcades, televisores CRT y autos deportivos",
        "Tipografía brillante y cursiva que evoca los letreros de neón",
        "Gradientes que crean atmósferas nocturnas y futuristas",
        "Referencias a la cultura pop de los 80 (videojuegos, películas, tecnología)",
      ],
      keyElements: "Elementos clave",
      keyElementsDescription: "Cada vinilo explora un aspecto diferente de la cultura synthwave:",
      gameStyleTitle: "Game Style",
      gameStyleDescription: "Homenaje a la cultura arcade y los videojuegos retro",
      overnightTitle: "Overnight Hits",
      overnightDescription: "Evocación de noches de los 80 con tecnología vintage",
      miamiTitle: "Miami Drive",
      miamiDescription: "Inspirado en la estética de Miami Vice y la cultura automovilística",
      resultsTitle: "Resultados y aprendizajes",
      resultsDescription:
        "Este proyecto me permitió explorar a fondo la estética synthwave y desarrollar habilidades en diseño de portadas de álbumes, creación de identidades visuales coherentes y manejo de elementos retro-futuristas. La colección fue presentada como parte del curso de Diseño Gráfico Avanzado, recibiendo reconocimiento por su coherencia estética y la efectiva interpretación del género.",
      learningsTitle: "Principales aprendizajes",
      learningsList1: [
        "Técnicas avanzadas de ilustración digital para crear efectos de neón",
        "Desarrollo de un sistema de diseño coherente para una colección",
        "Aplicación de principios de diseño retro-futurista",
      ],
      learningsList2: [
        "Exploración de la relación entre música y representación visual",
        "Creación de mockups realistas para presentación de productos",
        "Manejo de gradientes y efectos de luz para crear atmósferas",
      ],
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      contact: "Contacto",
    },
    en: {
      backToProjects: "Back to projects",
      category: "Graphic Design & Illustration",
      title: "VINYL RECORDS",
      description:
        "Academic project for vinyl design with a synthwave theme, exploring retrofuturistic aesthetics and creating visual pieces that capture the essence of this musical genre. The challenge was to create vinyl covers that evoked 80s nostalgia combined with futuristic elements.",
      collectionTitle: "Nightdreaming Collection",
      collectionDescription:
        "This vinyl collection explores different facets of synthwave aesthetics, from nostalgia for arcade video games to fascination with sports cars and neon nights. Each vinyl features a unique design for both the front cover (Side A) and back cover (Side B), creating a complete visual experience.",
      sideA: "Side A",
      sideB: "Side B",
      inContext: "Vinyl in record store context",
      conceptTitle: "Concept and aesthetics",
      conceptDescription:
        "The project was inspired by synthwave aesthetics, a musical and visual genre that fuses nostalgic elements from the 80s with futuristic visions. The main characteristics include:",
      conceptList: [
        "Neon color palette dominated by purples, blues and pinks",
        "Retro visual elements such as arcades, CRT televisions and sports cars",
        "Bright, cursive typography that evokes neon signs",
        "Gradients that create nocturnal and futuristic atmospheres",
        "References to 80s pop culture (video games, movies, technology)",
      ],
      keyElements: "Key elements",
      keyElementsDescription: "Each vinyl explores a different aspect of synthwave culture:",
      gameStyleTitle: "Game Style",
      gameStyleDescription: "Tribute to arcade culture and retro video games",
      overnightTitle: "Overnight Hits",
      overnightDescription: "Evocation of 80s nights with vintage technology",
      miamiTitle: "Miami Drive",
      miamiDescription: "Inspired by Miami Vice aesthetics and car culture",
      resultsTitle: "Results and learnings",
      resultsDescription:
        "This project allowed me to thoroughly explore synthwave aesthetics and develop skills in album cover design, creation of coherent visual identities, and handling of retro-futuristic elements. The collection was presented as part of the Advanced Graphic Design course, receiving recognition for its aesthetic coherence and effective interpretation of the genre.",
      learningsTitle: "Main learnings",
      learningsList1: [
        "Advanced digital illustration techniques for creating neon effects",
        "Development of a coherent design system for a collection",
        "Application of retro-futuristic design principles",
      ],
      learningsList2: [
        "Exploration of the relationship between music and visual representation",
        "Creation of realistic mockups for product presentation",
        "Management of gradients and light effects to create atmospheres",
      ],
      home: "Home",
      about: "About me",
      projects: "Projects",
      contact: "Contact",
    },
  }

  // Seleccionar el contenido según el idioma
  const t = content[language === "en" ? "en" : "es"]

  return (
    <main className="min-h-screen bg-bg text-white">
      {/* Header fijo */}
      <SiteHeader />

      {/* Espacio para compensar el header fijo */}
      <div className="pt-24"></div>

      {/* Contenedor principal */}
      <div className="mx-auto max-w-[1000px] px-4 mb-24">
        {/* Botón de regreso */}
        <div className="mb-8">
          <Link
            href="/proyectos"
            className="inline-flex items-center text-white hover:text-[#f8c226] transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> {t.backToProjects}
          </Link>
        </div>

        {/* Encabezado del proyecto */}
        <div className="mb-16">
          <p className="text-[#f8c226] uppercase text-sm font-semibold mb-2">{t.category}</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h1>
          <p className="text-gray-300 max-w-3xl">{t.description}</p>
        </div>

        {/* Galería de imágenes */}
        <div className="space-y-16">
          {/* Sección 1: Introducción al proyecto */}
          <section>
            <h2 className="text-2xl font-bold mb-6">{t.collectionTitle}</h2>
            <p className="text-gray-300 mb-8">{t.collectionDescription}</p>

            {/* Primera fila de imágenes - Nightdreaming Game Style */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-[#2a2259] rounded-xl overflow-hidden p-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-EwNXW19FmHylY6xcz3LTsVIkrRnl0v.jpeg"
                  alt="Nightdreaming Game Style - Front Cover"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-center text-sm text-gray-300 mt-2">Nightdreaming Game Style - {t.sideA}</p>
              </div>
              <div className="bg-[#2a2259] rounded-xl overflow-hidden p-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-7yCznzLFuGrVhINjbd6PPelzPiw8WX.jpeg"
                  alt="Nightdreaming Game Style - Back Cover"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-center text-sm text-gray-300 mt-2">Nightdreaming Game Style - {t.sideB}</p>
              </div>
            </div>

            {/* Imagen contextual */}
            <div className="bg-[#2a2259] rounded-xl overflow-hidden p-4 mb-12">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2%20-%20Vol1%20Contexto.jpg-7UKBWihEvCZMDJFNN0LarQks4EB7T3.jpeg"
                alt="Vinyl in record store context"
                width={1000}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-center text-sm text-gray-300 mt-2">{t.inContext}</p>
            </div>

            {/* Segunda fila de imágenes - Nightdreaming Overnight Hits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-[#2a2259] rounded-xl overflow-hidden p-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20-%20Vol3%20Mockup%20Lado%20A.jpg-PlEkcfJgh5XymfJBlpIhU5gwiWEWGi.jpeg"
                  alt="Nightdreaming Overnight Hits - Front Cover"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-center text-sm text-gray-300 mt-2">Nightdreaming Overnight Hits - {t.sideA}</p>
              </div>
              <div className="bg-[#2a2259] rounded-xl overflow-hidden p-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20-%20Vol3%20%20Mockup%20Lado%20B.jpg-1KGiHhNmULgjSC6MxMDeP124ARSBGP.jpeg"
                  alt="Nightdreaming Overnight Hits - Back Cover"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-center text-sm text-gray-300 mt-2">Nightdreaming Overnight Hits - {t.sideB}</p>
              </div>
            </div>

            {/* Imagen contextual */}
            <div className="bg-[#2a2259] rounded-xl overflow-hidden p-4 mb-12">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2%20-%20Vol3%20Contexto.jpg-owJptCnbJjhWac7tyVuIX3xyLhjgSE.jpeg"
                alt="Vinyl in record store context"
                width={1000}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-center text-sm text-gray-300 mt-2">{t.inContext}</p>
            </div>

            {/* Tercera fila de imágenes - Nightdreaming Miami Drive */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#2a2259] rounded-xl overflow-hidden p-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20-%20Vol2%20Mockup%20Lado%20A.jpg-kmcBGmHv7OKtZDEPdaoxZn6qeyT6gf.jpeg"
                  alt="Nightdreaming Miami Drive - Front Cover"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-center text-sm text-gray-300 mt-2">Nightdreaming Miami Drive - {t.sideA}</p>
              </div>
              <div className="bg-[#2a2259] rounded-xl overflow-hidden p-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20-%20Vol2%20Mockup%20Lado%20B.jpg-t2wd7sHoLKl1L8ivK1T0z6noWsbTqp.jpeg"
                  alt="Nightdreaming Miami Drive - Back Cover"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-center text-sm text-gray-300 mt-2">Nightdreaming Miami Drive - {t.sideB}</p>
              </div>
            </div>
          </section>

          {/* Sección 2: Concepto y estética */}
          <section>
            <h2 className="text-2xl font-bold mb-6">{t.conceptTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 mb-4">{t.conceptDescription}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  {t.conceptList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#2a2259] p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">{t.keyElements}</h3>
                <p className="text-gray-300 mb-4">{t.keyElementsDescription}</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-purple rounded-full p-2 mr-3 mt-1">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{t.gameStyleTitle}</h4>
                      <p className="text-gray-300">{t.gameStyleDescription}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple rounded-full p-2 mr-3 mt-1">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{t.overnightTitle}</h4>
                      <p className="text-gray-300">{t.overnightDescription}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple rounded-full p-2 mr-3 mt-1">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{t.miamiTitle}</h4>
                      <p className="text-gray-300">{t.miamiDescription}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sección 3: Resultados y aprendizajes */}
          <section>
            <h2 className="text-2xl font-bold mb-6">{t.resultsTitle}</h2>
            <p className="text-gray-300 mb-6">{t.resultsDescription}</p>
            <div className="bg-[#2a2259] p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">{t.learningsTitle}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    {t.learningsList1.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    {t.learningsList2.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
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
                {t.home}
              </Link>
              <Link href="/experiencia" className="text-white hover:text-purple transition-colors">
                {t.about}
              </Link>
              <Link href="/proyectos" className="text-white hover:text-purple transition-colors">
                {t.projects}
              </Link>
              <Link href="/contacto" className="text-white hover:text-purple transition-colors">
                {t.contact}
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </main>
  )
}

