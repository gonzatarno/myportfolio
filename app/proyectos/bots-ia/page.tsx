"use client"

import Image from "next/image"
import ProjectDetailLayout from "@/components/project-detail-layout"
import { useLanguage } from "@/contexts/language-context"

export default function BotsIAProjectPage() {
  const { language } = useLanguage()

  // Translations
  const translations = {
    title:
      language === "en"
        ? "Intelligent Bot Generator with Generative AI"
        : "Generador de Bots Inteligentes con IA Generativa",
    category: "PRODUCT DESIGN & AI",
    description:
      language === "en"
        ? "We created a tool that uses generative AI to create bots from prompts, streamlining user workflows and democratizing the creation of conversational experiences."
        : "Creamos una herramienta que usa IA generativa para crear bots desde prompts, agilizando tiempos de los usuarios y democratizando la creación de experiencias conversacionales.",
    challenge: {
      title: language === "en" ? "The Challenge" : "El desafío",
      content:
        language === "en"
          ? "Creating bots from scratch is a complex and time-consuming process, involving the definition of conversational flows, data integration, and interaction customization. Users, especially those without technical experience, faced difficulties creating bots that met their objectives. The challenge was to simplify this process and make bot creation accessible to everyone."
          : "La creación de bots desde cero es un proceso complejo y que requiere mucho tiempo, involucrando la definición de flujos conversacionales, la integración de datos y la personalización de la interacción. Los usuarios, especialmente aquellos sin experiencia técnica, enfrentaban dificultades para crear bots que cumplieran con sus objetivos. El desafío era simplificar este proceso y hacer que la creación de bots fuera accesible para todos.",
    },
    process: {
      title: language === "en" ? "Design Process" : "Proceso de Diseño",
      content:
        language === "en"
          ? "The design process began with comprehensive research to understand user pain points and needs in bot creation. Interviews and usability analysis were conducted to identify key challenges."
          : "El proceso de diseño se inició con una investigación exhaustiva para comprender los puntos de dolor y las necesidades de los usuarios en la creación de bots. Se realizaron entrevistas y análisis de usabilidad para identificar los desafíos clave.",
      items:
        language === "en"
          ? [
              "An intuitive user flow was designed that incorporates a 'prompt creator', allowing users to define the objective and functionalities of their bot using natural language.",
              "Predefined templates were developed to facilitate bot creation for beginner users, providing clear examples and guides.",
              "Functionalities were integrated to add variables, databases, and knowledge bases, allowing the creation of dynamic and personalized bots in a simple way.",
              "User testing and beta testing were conducted with the internal team to validate the usability and effectiveness of the tool, making iterative adjustments based on feedback.",
            ]
          : [
              "Se diseñó un flujo de usuario intuitivo que incorpora un 'prompt creator', permitiendo a los usuarios definir el objetivo y las funcionalidades de su bot mediante lenguaje natural.",
              "Se desarrollaron plantillas predefinidas para facilitar la creación de bots para usuarios principiantes, proporcionando ejemplos y guías claras.",
              "Se integraron funcionalidades para agregar variables, bases de datos y knowledge bases, permitiendo la creación de bots dinámicos y personalizados de manera sencilla.",
              "Se realizaron pruebas de usuario y beta testing con el equipo interno para validar la usabilidad y efectividad de la herramienta, realizando ajustes iterativos en función del feedback.",
            ],
    },
    solution: {
      title: language === "en" ? "The Solution" : "Solución",
      content1:
        language === "en"
          ? "A 'prompt creator' was implemented that uses generative AI to translate user descriptions into functional conversation flows. Users can define the objective and functionalities of their bot using natural language, automatically generating a solid foundation for their bot."
          : "Se implementó un 'prompt creator' que utiliza IA generativa para traducir las descripciones de los usuarios en flujos de conversación funcionales. Los usuarios pueden definir el objetivo y las funcionalidades de su bot mediante lenguaje natural, generando automáticamente una base sólida para su bot.",
      content2:
        language === "en"
          ? "Predefined templates and clear guides are provided to facilitate bot creation for beginner users. Functionalities are integrated to add variables, databases, and knowledge bases, allowing the creation of dynamic and personalized bots in a simple way."
          : "Se proporcionan plantillas predefinidas y guías claras para facilitar la creación de bots para usuarios principiantes. Se integran funcionalidades para agregar variables, bases de datos y knowledge bases, permitiendo la creación de bots dinámicos y personalizados de manera sencilla.",
      visualDirection:
        language === "en"
          ? "Below: The visual direction I created for the different types of structures within the product"
          : "Abajo: La dirección visual que creé para los diferentes tipos de estructuras dentro del producto",
    },
    results: {
      title: language === "en" ? "Results" : "Resultados",
      stat1: language === "en" ? "Reduction in bot creation time" : "Reducción en tiempo de creación de bots",
      stat2:
        language === "en"
          ? "Increase in adoption by non-technical users"
          : "Aumento en adopción por usuarios no técnicos",
      stat3:
        language === "en" ? "User satisfaction with generated bots" : "Satisfacción de usuarios con los bots generados",
      conclusion:
        language === "en"
          ? "The tool has transformed how Botmaker customers create conversational experiences, democratizing access to advanced AI technology and enabling the creation of sophisticated bots in minutes instead of days or weeks."
          : "La herramienta ha transformado la manera en que los clientes de Botmaker crean experiencias conversacionales, democratizando el acceso a tecnología avanzada de IA y permitiendo la creación de bots sofisticados en minutos en lugar de días o semanas.",
    },
  }

  return (
    <ProjectDetailLayout
      title={translations.title}
      category={translations.category}
      description={translations.description}
      mainImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_IA-z8o8mT6hl1blpHkWxKykUrJD4rk8yM.png"
    >
      <div className="space-y-16">
        {/* Sección 1: El desafío */}
        <section>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-6">{translations.challenge.title}</h2>
              <p className="text-gray-300 mb-4">{translations.challenge.content}</p>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-square rounded-xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-k2rJf3JJ89PtVwFSwW8YZPaB03KxWE.png"
                  alt="Interfaz de creación de bots con IA generativa"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sección 2: Proceso de diseño */}
        <section>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-6">{translations.process.title}</h2>
              <p className="text-gray-300 mb-4">{translations.process.content}</p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
                {translations.process.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-square rounded-xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eJURdFGHLUjpvm5usxHmyamy3hy85Q.png"
                  alt="Interfaz de creación de prompts para bots"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sección 3: Solución */}
        <section>
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">{translations.solution.title}</h2>
                <p className="text-gray-300 mb-4">{translations.solution.content1}</p>
              </div>
              <div>
                <p className="text-gray-300 mt-14">{translations.solution.content2}</p>
              </div>
            </div>

            {/* Visual Direction Grid - Full width section */}
            <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Row 1 */}
                <div className="bg-bg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="p-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xt1knW6l5OX3MFpPu5UJX6ogRmLbEI.png"
                      alt="Interfaz de bot con instrucciones para restaurante"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain rounded"
                    />
                  </div>
                </div>
                <div className="bg-bg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="p-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dmHYyiNMY5cUdODurIw7WT23bH6K6t.png"
                      alt="Interfaz con guía para crear instrucciones perfectas"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain rounded"
                    />
                  </div>
                </div>
                <div className="bg-bg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="p-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-391JiwV1Oat9ArJtl7lQ6K8BbXZc26.png"
                      alt="Interfaz con menú de variables y acciones"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain rounded"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="bg-bg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="p-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-isZCS7aVTMDrwAEVdP5HxHWIoQVHTy.png"
                      alt="Interfaz para solicitar datos al usuario"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain rounded"
                    />
                  </div>
                </div>
                <div className="bg-bg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="p-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0WfdZJcYkD4xTuW9L6OTCmMHR5t583.png"
                      alt="Interfaz con consulta a base de datos"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain rounded"
                    />
                  </div>
                </div>
                <div className="bg-bg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="p-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kPkplOUThYniQnXdjWqWSj6XWeaqFJ.png"
                      alt="Interfaz con mensaje de error"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain rounded"
                    />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="bg-bg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="p-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3DRC4HlBmG1neEXlfKYm5lsz63TBRs.png"
                      alt="Interfaz con tour de creación de prompts"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain rounded"
                    />
                  </div>
                </div>
                <div className="bg-bg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="p-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-k2rJf3JJ89PtVwFSwW8YZPaB03KxWE.png"
                      alt="Interfaz de creación de bots"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain rounded"
                    />
                  </div>
                </div>
                <div className="bg-bg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="p-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eJURdFGHLUjpvm5usxHmyamy3hy85Q.png"
                      alt="Interfaz de templates para bots"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 4: Resultados */}
        <section>
          <h2 className="text-2xl font-bold mb-6">{translations.results.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#2a2259] p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold mb-2 text-[#f8c226]">90%</h3>
              <p className="text-gray-300">{translations.results.stat1}</p>
            </div>
            <div className="bg-[#2a2259] p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold mb-2 text-[#f8c226]">70%</h3>
              <p className="text-gray-300">{translations.results.stat2}</p>
            </div>
            <div className="bg-[#2a2259] p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold mb-2 text-[#f8c226]">85%</h3>
              <p className="text-gray-300">{translations.results.stat3}</p>
            </div>
          </div>
          <p className="text-gray-300">{translations.results.conclusion}</p>
        </section>
      </div>
    </ProjectDetailLayout>
  )
}

