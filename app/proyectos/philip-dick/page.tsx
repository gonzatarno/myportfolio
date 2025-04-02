"use client"

import Image from "next/image"
import ProjectDetailLayout from "@/components/project-detail-layout"
import { useLanguage } from "@/contexts/language-context"

export default function PhilipDickProjectPage() {
  const { language } = useLanguage()

  // Contenido en español e inglés
  const content = {
    es: {
      backToProjects: "Volver a proyectos",
      category: "Diseño Gráfico",
      title: "Libros PHILIP K. DICK",
      description:
        "Diseño de portadas para obras de Philip K. Dick, interpretando visualmente sus mundos de ciencia ficción y explorando la estética retrofuturista.",
      challenge: {
        title: "El desafío",
        content:
          "El objetivo de este proyecto fue crear una serie de portadas para las obras más emblemáticas de Philip K. Dick, capturando la esencia de sus historias de ciencia ficción y los temas filosóficos que explora.",
        list: [
          "Representar visualmente conceptos abstractos como la realidad alterada y la percepción",
          "Crear un sistema de diseño coherente que unificara la colección",
          "Equilibrar elementos retrofuturistas con un aspecto contemporáneo",
          "Capturar la esencia de cada obra manteniendo una identidad visual común",
        ],
      },
      process: {
        title: "Proceso de diseño",
        research: {
          title: "Investigación",
          content:
            "Profundicé en las obras de Philip K. Dick, analizando temas recurrentes y elementos visuales que pudieran traducirse a un lenguaje gráfico.",
        },
        exploration: {
          title: "Exploración visual",
          content:
            "Experimenté con diferentes estilos, paletas de colores y composiciones para encontrar la dirección estética adecuada.",
        },
        development: {
          title: "Desarrollo",
          content:
            "Refiné los diseños seleccionados, creando un sistema visual coherente que pudiera aplicarse a toda la colección.",
        },
      },
      solution: {
        title: "La solución",
        content:
          "Desarrollé un sistema de diseño basado en colores vibrantes, ilustraciones minimalistas y una tipografía distintiva que captura la esencia de la ciencia ficción de Philip K. Dick.",
        features: [
          {
            title: "Paleta de colores",
            description:
              "Colores vibrantes y contrastantes que evocan mundos futuristas y estados alterados de conciencia.",
          },
          {
            title: "Ilustraciones conceptuales",
            description: "Elementos visuales que representan los temas centrales de cada obra de manera simbólica.",
          },
          {
            title: "Tipografía expresiva",
            description:
              "Uso de tipografía como elemento visual, jugando con escalas y posiciones para crear dinamismo.",
          },
        ],
      },
      books: {
        androids: "¿Sueñan los androides con ovejas eléctricas?",
        castle: "El hombre en el castillo",
        titan: "Los jugadores de Titán",
        ubik: "Ubik",
        darkness: "Una mirada a la oscuridad",
      },
      results: {
        title: "Resultados",
        content1:
          "La colección de portadas logró capturar la esencia de las obras de Philip K. Dick, creando una identidad visual coherente que respeta la profundidad filosófica de sus historias mientras ofrece un atractivo visual contemporáneo.",
        content2:
          "El proyecto fue reconocido en la muestra anual de diseño de la universidad y seleccionado para formar parte del catálogo de trabajos destacados del año.",
        content3:
          "Esta experiencia me permitió profundizar en la intersección entre literatura y diseño gráfico, explorando cómo los elementos visuales pueden complementar y enriquecer la experiencia narrativa.",
      },
    },
    en: {
      backToProjects: "Back to projects",
      category: "Graphic Design",
      title: "PHILIP K. DICK Books",
      description:
        "Design of covers for Philip K. Dick's works, visually interpreting his science fiction worlds and exploring retrofuturistic aesthetics.",
      challenge: {
        title: "The challenge",
        content:
          "The goal of this project was to create a series of covers for Philip K. Dick's most emblematic works, capturing the essence of his science fiction stories and the philosophical themes he explores.",
        list: [
          "Visually represent abstract concepts such as altered reality and perception",
          "Create a coherent design system that would unify the collection",
          "Balance retrofuturistic elements with a contemporary look",
          "Capture the essence of each work while maintaining a common visual identity",
        ],
      },
      process: {
        title: "Design process",
        research: {
          title: "Research",
          content:
            "I delved into Philip K. Dick's works, analyzing recurring themes and visual elements that could be translated into a graphic language.",
        },
        exploration: {
          title: "Visual exploration",
          content:
            "I experimented with different styles, color palettes, and compositions to find the right aesthetic direction.",
        },
        development: {
          title: "Development",
          content:
            "I refined the selected designs, creating a coherent visual system that could be applied to the entire collection.",
        },
      },
      solution: {
        title: "The solution",
        content:
          "I developed a design system based on vibrant colors, minimalist illustrations, and distinctive typography that captures the essence of Philip K. Dick's science fiction.",
        features: [
          {
            title: "Color palette",
            description:
              "Vibrant and contrasting colors that evoke futuristic worlds and altered states of consciousness.",
          },
          {
            title: "Conceptual illustrations",
            description: "Visual elements that represent the central themes of each work in a symbolic way.",
          },
          {
            title: "Expressive typography",
            description: "Use of typography as a visual element, playing with scales and positions to create dynamism.",
          },
        ],
      },
      books: {
        androids: "Do Androids Dream of Electric Sheep?",
        castle: "The Man in the High Castle",
        titan: "The Game-Players of Titan",
        ubik: "Ubik",
        darkness: "A Scanner Darkly",
      },
      results: {
        title: "Results",
        content1:
          "The collection of covers managed to capture the essence of Philip K. Dick's works, creating a coherent visual identity that respects the philosophical depth of his stories while offering contemporary visual appeal.",
        content2:
          "The project was recognized in the university's annual design exhibition and selected to be part of the catalog of outstanding works of the year.",
        content3:
          "This experience allowed me to delve into the intersection between literature and graphic design, exploring how visual elements can complement and enrich the narrative experience.",
      },
    },
  }

  // Seleccionar el contenido según el idioma
  const t = content[language === "en" ? "en" : "es"]

  return (
    <ProjectDetailLayout
      title={t.title}
      category={t.category}
      description={t.description}
      mainImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_dick-VuilMsLOnH4UKzdUJU4HHEyJv3UdXz.png"
    >
      <div className="space-y-16">
        {/* Sección 1: El desafío */}
        <section>
          <h2 className="text-2xl font-bold mb-6">{t.challenge.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-4">{t.challenge.content}</p>
              <p className="text-gray-300">Los principales desafíos incluían:</p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
                {t.challenge.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-[#2a2259] rounded-xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Androides_02.jpg-jhkzjs6dOFkaYRvVIjYEzX91ZxXTBL.jpeg"
                alt={t.books.androids}
                width={500}
                height={700}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Sección 2: Proceso de diseño */}
        <section>
          <h2 className="text-2xl font-bold mb-6">{t.process.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#2a2259] p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">{t.process.research.title}</h3>
              <p className="text-gray-300">{t.process.research.content}</p>
            </div>
            <div className="bg-[#2a2259] p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">{t.process.exploration.title}</h3>
              <p className="text-gray-300">{t.process.exploration.content}</p>
            </div>
            <div className="bg-[#2a2259] p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">{t.process.development.title}</h3>
              <p className="text-gray-300">{t.process.development.content}</p>
            </div>
          </div>
        </section>

        {/* Sección 3: Solución - Portadas de libros */}
        <section>
          <h2 className="text-2xl font-bold mb-6">{t.solution.title}</h2>
          <p className="text-gray-300 mb-6">{t.solution.content}</p>

          {/* Portadas de libros - Una debajo de otra */}
          <div className="space-y-12 mb-12">
            <div className="bg-[#231955] rounded-xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Androides_02.jpg-jhkzjs6dOFkaYRvVIjYEzX91ZxXTBL.jpeg"
                alt={t.books.androids}
                width={800}
                height={1200}
                className="w-full h-auto"
              />
              <div className="p-4 bg-[#2a2259]">
                <p className="text-center text-white font-medium">{t.books.androids}</p>
              </div>
            </div>

            <div className="bg-[#231955] rounded-xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Castillo_05.jpg-necIOWMdp5xdIfDHovBsC09us30zHh.jpeg"
                alt={t.books.castle}
                width={800}
                height={1200}
                className="w-full h-auto"
              />
              <div className="p-4 bg-[#2a2259]">
                <p className="text-center text-white font-medium">{t.books.castle}</p>
              </div>
            </div>

            <div className="bg-[#231955] rounded-xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dados_03.jpg-ZOGdtXCrIUAprf1Nin9oM0b1DFRcPm.jpeg"
                alt={t.books.titan}
                width={800}
                height={1200}
                className="w-full h-auto"
              />
              <div className="p-4 bg-[#2a2259]">
                <p className="text-center text-white font-medium">{t.books.titan}</p>
              </div>
            </div>

            <div className="bg-[#231955] rounded-xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ubik_01.jpg-MQg8EAdnOzwYkbzyUwxDtGExTi74PL.jpeg"
                alt={t.books.ubik}
                width={800}
                height={1200}
                className="w-full h-auto"
              />
              <div className="p-4 bg-[#2a2259]">
                <p className="text-center text-white font-medium">{t.books.ubik}</p>
              </div>
            </div>

            <div className="bg-[#231955] rounded-xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Oscuridad_04.jpg-U8zADZIanlw2InmRGwPPnAr83Yt06c.jpeg"
                alt={t.books.darkness}
                width={800}
                height={1200}
                className="w-full h-auto"
              />
              <div className="p-4 bg-[#2a2259]">
                <p className="text-center text-white font-medium">{t.books.darkness}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#2a2259] rounded-xl overflow-hidden p-6">
              <h3 className="text-xl font-bold mb-4">Características del diseño</h3>
              <ul className="space-y-4">
                {t.solution.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-purple rounded-full p-2 mr-3 mt-1">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#2a2259] rounded-xl overflow-hidden p-6">
              <h3 className="text-xl font-bold mb-4">Coherencia visual</h3>
              <p className="text-gray-300 mb-4">
                Todas las portadas comparten elementos comunes que crean una identidad de colección:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Fondos espaciales con estrellas y planetas</li>
                <li>Paleta de colores púrpura y magenta</li>
                <li>Ilustraciones minimalistas y simbólicas</li>
                <li>Tipografía expresiva y distintiva</li>
                <li>Marca "PKD" consistente en todas las portadas</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sección 4: Resultados */}
        <section>
          <h2 className="text-2xl font-bold mb-6">{t.results.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-4">{t.results.content1}</p>
              <p className="text-gray-300 mb-4">{t.results.content2}</p>
              <p className="text-gray-300">{t.results.content3}</p>
            </div>
            <div className="bg-[#2a2259] rounded-xl overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Impacto del proyecto</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Reconocimiento en exposición universitaria de diseño</li>
                  <li>Inclusión en catálogo anual de trabajos destacados</li>
                  <li>Desarrollo de habilidades en diseño editorial y tipografía</li>
                  <li>Exploración de la relación entre literatura y representación visual</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ProjectDetailLayout>
  )
}

