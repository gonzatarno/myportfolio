"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import SiteHeader from "@/components/site-header"
import { useLanguage } from "@/contexts/language-context"

export default function ArcoProjectPage() {
  const { language } = useLanguage()

  // Contenido en español e inglés
  const content = {
    es: {
      backToProjects: "Volver a proyectos",
      category: "Diseño Gráfico & Tipografía",
      title: 'Cartas Creativas: Inspiración desde "ARCO"',
      description:
        "Creé una serie de cartas personalizadas utilizando la palabra 'ARCO' como hilo conductor, explorando la conexión con personajes y conceptos como Juana de Arco y el Arco de Triunfo.",
      collectionTitle: "Colección ARCO: Postales Arbitrarias",
      collectionDescription:
        "Esta colección explora diferentes interpretaciones visuales y conceptuales de la palabra 'ARCO', creando un conjunto de postales que conectan elementos históricos, culturales y simbólicos. Cada postal presenta una interpretación única, desde monumentos arquitectónicos hasta figuras históricas y conceptos abstractos.",
      conceptTitle: "Concepto y enfoque",
      conceptDescription:
        "El proyecto nació de la idea de explorar cómo una sola palabra puede generar múltiples interpretaciones visuales y narrativas. Utilizando 'ARCO' como punto de partida, desarrollé una serie de postales que exploran:",
      conceptList: [
        "Monumentos históricos como el Arco del Triunfo",
        "Figuras históricas como Juana de Arco",
        "Conceptos abstractos como el arco iris y el arco como forma geométrica",
        "Elementos simbólicos como el arco en la medicina (corazón) y el deporte",
        "Conexiones culturales y artísticas a través de diferentes épocas y contextos",
      ],
      processTitle: "Proceso creativo",
      processDescription: "El desarrollo de esta colección siguió varias etapas clave:",
      processList: [
        "Investigación histórica y cultural sobre los diferentes significados y referencias de 'ARCO'",
        "Exploración de estilos visuales que pudieran unificar piezas conceptualmente diversas",
        "Desarrollo de una estética oscura y dramática que permitiera destacar elementos clave",
        "Creación de composiciones que combinan fotografía, ilustración y elementos tipográficos",
        "Diseño de un sistema de empaque que complementara la estética de las postales",
      ],
      cardsTitle: "Las postales",
      cardsDescription:
        "La colección incluye nueve postales únicas, cada una explorando una faceta diferente del concepto 'ARCO':",
      card1: "Arco del Triunfo: Monumento histórico de París",
      card2: "Juana de Arco: Figura histórica y símbolo de resistencia",
      card3: "Arco Anatómico: El corazón humano y sus ritmos",
      card4: "Arco Deportivo: La trayectoria del balón en el fútbol",
      card5: "Arco Cromático: El arco iris como fenómeno natural y símbolo",
      card6: "Arco Literario: La narrativa y escritura como arco conceptual",
      card7: "Arco Matemático: Precisión y medida en la geometría",
      card8: "Arco Tecnológico: La evolución de la innovación",
      card9: "Arco Mitológico: Figuras y leyendas a través del tiempo",
      packagingTitle: "Diseño de empaque",
      packagingDescription:
        "Para complementar las postales, diseñé un empaque especial que refleja la estética oscura y misteriosa de la colección, con un acabado texturizado y etiquetas envejecidas que evocan documentos históricos.",
      resultsTitle: "Resultados y aprendizajes",
      resultsDescription:
        "Este proyecto me permitió explorar la versatilidad del diseño conceptual y cómo un solo elemento puede generar múltiples interpretaciones visuales. La colección fue presentada como parte del curso de Diseño Tipográfico, recibiendo reconocimiento por su coherencia estética y profundidad conceptual.",
      learningsTitle: "Principales aprendizajes",
      learningsList1: [
        "Desarrollo de conceptos visuales a partir de un punto de partida limitado",
        "Técnicas para mantener coherencia visual en una colección con temas diversos",
        "Integración efectiva de tipografía como elemento expresivo y narrativo",
      ],
      learningsList2: [
        "Exploración de la relación entre significado y representación visual",
        "Creación de sistemas de diseño que permiten variedad dentro de una identidad unificada",
        "Presentación y empaque de productos de diseño para maximizar su impacto",
      ],
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      contact: "Contacto",
    },
    en: {
      backToProjects: "Back to projects",
      category: "Graphic Design & Typography",
      title: 'Creative Cards: Inspiration from "ARCO"',
      description:
        "I created a series of custom cards using the word 'ARCO' as a common thread, exploring the connection with characters and concepts like Joan of Arc and the Arc de Triomphe.",
      collectionTitle: "ARCO Collection: Arbitrary Postcards",
      collectionDescription:
        "This collection explores different visual and conceptual interpretations of the word 'ARCO' (Arc), creating a set of postcards that connect historical, cultural, and symbolic elements. Each postcard presents a unique interpretation, from architectural monuments to historical figures and abstract concepts.",
      conceptTitle: "Concept and approach",
      conceptDescription:
        "The project was born from the idea of exploring how a single word can generate multiple visual and narrative interpretations. Using 'ARCO' as a starting point, I developed a series of postcards that explore:",
      conceptList: [
        "Historical monuments like the Arc de Triomphe",
        "Historical figures like Joan of Arc",
        "Abstract concepts like the rainbow (arcoiris) and the arc as a geometric shape",
        "Symbolic elements like the arc in medicine (heart) and sports",
        "Cultural and artistic connections across different eras and contexts",
      ],
      processTitle: "Creative process",
      processDescription: "The development of this collection followed several key stages:",
      processList: [
        "Historical and cultural research on the different meanings and references of 'ARCO'",
        "Exploration of visual styles that could unify conceptually diverse pieces",
        "Development of a dark and dramatic aesthetic that would highlight key elements",
        "Creation of compositions that combine photography, illustration, and typographic elements",
        "Design of a packaging system that complemented the aesthetics of the postcards",
      ],
      cardsTitle: "The postcards",
      cardsDescription:
        "The collection includes nine unique postcards, each exploring a different facet of the 'ARCO' concept:",
      card1: "Arc de Triomphe: Historical monument in Paris",
      card2: "Joan of Arc: Historical figure and symbol of resistance",
      card3: "Anatomical Arc: The human heart and its rhythms",
      card4: "Sports Arc: The trajectory of the ball in soccer",
      card5: "Chromatic Arc: The rainbow as a natural phenomenon and symbol",
      card6: "Literary Arc: Narrative and writing as a conceptual arc",
      card7: "Mathematical Arc: Precision and measurement in geometry",
      card8: "Technological Arc: The evolution of innovation",
      card9: "Mythological Arc: Figures and legends through time",
      packagingTitle: "Packaging design",
      packagingDescription:
        "To complement the postcards, I designed a special package that reflects the dark and mysterious aesthetic of the collection, with a textured finish and aged labels that evoke historical documents.",
      resultsTitle: "Results and learnings",
      resultsDescription:
        "This project allowed me to explore the versatility of conceptual design and how a single element can generate multiple visual interpretations. The collection was presented as part of the Typography Design course, receiving recognition for its aesthetic coherence and conceptual depth.",
      learningsTitle: "Main learnings",
      learningsList1: [
        "Development of visual concepts from a limited starting point",
        "Techniques for maintaining visual coherence in a collection with diverse themes",
        "Effective integration of typography as an expressive and narrative element",
      ],
      learningsList2: [
        "Exploration of the relationship between meaning and visual representation",
        "Creation of design systems that allow variety within a unified identity",
        "Presentation and packaging of design products to maximize their impact",
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

            {/* Imagen principal - Grid de postales */}
            <div className="bg-[#2a2259] rounded-xl overflow-hidden p-4 mb-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9021ff72-7315-4786-88c7-c1893f8c2bc5.jpg-x4j66q42CmhvesJWHeiF8VYrtiqkFL.jpeg"
                alt="ARCO - Colección completa de postales arbitrarias"
                width={1000}
                height={1200}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-center text-sm text-gray-300 mt-2">{t.cardsDescription}</p>
            </div>

            {/* Arco del Triunfo - Postal frontal y trasera */}
            <div className="bg-[#2a2259] rounded-xl overflow-hidden p-4 mb-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a971978e-93dd-45a5-bea2-2e6ea954b885.jpg-qI0V8DMiIUi3OoJLMZkYVr4gddAl0H.jpeg"
                alt="Arco del Triunfo - Postal frontal y trasera"
                width={600}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-center text-sm text-gray-300 mt-2">{t.card1}</p>
            </div>

            {/* Selección de postales */}
            <div className="bg-[#2a2259] rounded-xl overflow-hidden p-4 mb-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6b29761d-08e3-4aa7-ba69-3b95501c9326.jpg-ed0ejVD5QxBCxRBivV1Cl7JHMCtnbv.jpeg"
                alt="Selección de postales ARCO"
                width={600}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-center text-sm text-gray-300 mt-2">{t.cardsTitle}</p>
            </div>

            {/* Empaque */}
            <div className="bg-[#2a2259] rounded-xl overflow-hidden p-4 mb-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6660082b-906e-4ebe-b6b6-3961bcb32dfc.jpg-e4gAjyon16ZOW9qdTAQ1hvsXHJbL2p.jpeg"
                alt="Empaque de la colección ARCO"
                width={1000}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-center text-sm text-gray-300 mt-2">{t.packagingTitle}</p>
            </div>
          </section>

          {/* Sección 2: Concepto y enfoque */}
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
                <h3 className="text-xl font-bold mb-3">{t.processTitle}</h3>
                <p className="text-gray-300 mb-4">{t.processDescription}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {t.processList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
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

