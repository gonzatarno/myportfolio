"use client"

import Image from "next/image"
import ProjectDetailLayout from "@/components/project-detail-layout"
import { useLanguage } from "@/contexts/language-context"

export default function TicketsProjectPage() {
  const { language } = useLanguage()

  // English translations
  const translations = {
    title: language === "en" ? "Ticket Management" : "Gestión de Tickets",
    category: "PRODUCT DESIGN",
    description:
      language === "en"
        ? "I designed a multichannel ticket management system in Botmaker, optimizing support and improving the experience for both agents and end users."
        : "Diseñé un sistema para gestionar tickets multicanal en Botmaker, optimizando el soporte y mejorando la experiencia tanto para agentes como para usuarios finales.",
    challenge: {
      title: language === "en" ? "The Challenge" : "El desafío",
      content:
        language === "en"
          ? "Companies with multiple agents faced a significant challenge: managing an increasing volume of conversations from various channels. Often, the same user would contact through different platforms, resulting in duplicate information, loss of follow-up, and a fragmented user experience. The goal was to centralize these interactions in a single system, allowing agents to provide efficient and consistent support."
          : "Las empresas con múltiples agentes enfrentaban un gran desafío: gestionar un volumen creciente de conversaciones provenientes de diversos canales. A menudo, un mismo usuario contactaba a través de diferentes plataformas, lo que generaba duplicidad de información, pérdida de seguimiento y una experiencia de usuario fragmentada. El objetivo era centralizar estas interacciones en un único sistema, permitiendo a los agentes ofrecer un soporte eficiente y consistente.",
    },
    process: {
      title: language === "en" ? "Design Process" : "Proceso de diseño",
      content:
        language === "en"
          ? "The design process began with a deep research phase, analyzing support team workflows and user needs. Interviews and surveys were conducted to understand pain points and opportunities for improvement."
          : "El proceso de diseño se inició con una fase de investigación profunda, donde se analizaron los flujos de trabajo de los equipos de soporte y las necesidades de los usuarios. Se realizaron entrevistas y encuestas para comprender los puntos de dolor y las oportunidades de mejora.",
      items:
        language === "en"
          ? [
              "Based on the research, wireframes and iterative prototypes were designed, focusing on clarity and usability. The priority was to create an intuitive interface that would allow agents to quickly access relevant information and efficiently manage tickets.",
              "User Validation: To ensure the usability and effectiveness of the system, user tests were conducted with support agents during the prototyping stages. These tests helped identify areas for improvement and make design adjustments before final implementation.",
              "Beta Testing: Additionally, a beta testing program was implemented with Botmaker's internal agent team. This provided valuable feedback on functionalities and allowed for iterative improvements before launching to client companies.",
              "Constant collaboration with the development team was essential to ensure technical feasibility and successful implementation of the system.",
            ]
          : [
              "Con base en la investigación, se diseñaron wireframes y prototipos iterativos, enfocados en la claridad y la usabilidad. Se priorizó la creación de una interfaz intuitiva que permitiera a los agentes acceder rápidamente a la información relevante y gestionar los tickets de manera eficiente.",
              "Validación con Usuarios: Para asegurar la usabilidad y efectividad del sistema, se realizaron pruebas de usuario con agentes de soporte durante las etapas de prototipado. Estas pruebas permitieron identificar áreas de mejora y realizar ajustes en el diseño antes de la implementación final.",
              "Beta Testing: Además, se implementó un programa de beta testing con el equipo interno de agentes en Botmaker. Esto permitió recoger feedback valioso sobre las funcionalidades y realizar mejoras iterativas antes del lanzamiento a las empresas clientes.",
              "La colaboración constante con el equipo de desarrollo fue fundamental para asegurar la viabilidad técnica y la implementación exitosa del sistema.",
            ],
    },
    solution: {
      title: language === "en" ? "The Solution" : "La solución",
      content1:
        language === "en"
          ? "A ticket management system was implemented that centralizes conversations from multiple channels into a single platform. Agents can view a list of tickets, filter them by assignment, and access detailed information for each conversation."
          : "Se implementó un sistema de gestión de tickets que centraliza las conversaciones de múltiples canales en una única plataforma. Los agentes pueden visualizar un listado de tickets, filtrarlos por asignación y acceder a información detallada de cada conversación.",
      content2:
        language === "en"
          ? "The system includes features such as SLA (Service Level Agreement) tracking to control response times and ensure efficiency in customer service. Additionally, relevant contextual data is provided for each ticket, facilitating query resolution and personalization of support."
          : "El sistema incluye funcionalidades como el seguimiento de SLA (Acuerdos de Nivel de Servicio) para controlar los tiempos de respuesta y asegurar la eficiencia en la atención al cliente. Además, se proporcionan datos contextuales relevantes para cada ticket, facilitando la resolución de consultas y la personalización del soporte.",
    },
    results: {
      title: language === "en" ? "Results" : "Resultados",
      stat1: language === "en" ? "Reduction in ticket resolution time" : "Reducción en tiempo de resolución de tickets",
      stat2: language === "en" ? "Increase in customer satisfaction" : "Aumento en la satisfacción del cliente",
      stat3: language === "en" ? "Improvement in agent productivity" : "Mejora en la productividad de los agentes",
      conclusion:
        language === "en"
          ? "The ticket management system has become a fundamental tool for Botmaker's support teams, enabling more efficient and personalized service across all communication channels."
          : "El sistema de gestión de tickets se ha convertido en una herramienta fundamental para los equipos de soporte de Botmaker, permitiendo una atención más eficiente y personalizada a través de todos los canales de comunicación.",
    },
  }

  return (
    <ProjectDetailLayout
      title={translations.title}
      category={translations.category}
      description={translations.description}
      mainImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_Tickets-mvIX3rYcmRZ8lkJb7IlJSS5vO7SEUU.png"
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_tickets_02-i6FGL9Xu8UXQNC69Eg1ZVvvpSX9VIG.png"
                  alt="Detalle de ticket en la plataforma"
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_tickets_03-tyKUVehF0l4RZkwsRKs0z0r4GaUniG.png"
                  alt="Listado de tickets en la plataforma"
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
                <div className="bg-[#231955] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="p-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-e78XbAZd69PDIOxPgsReRA3zZxESa5.png"
                      alt="Listado de tickets"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain rounded"
                    />
                  </div>
                </div>
                <div className="bg-[#231955] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="p-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yPlRHVZkevC0l0ZT6VvKN5OmiL3HTl.png"
                      alt="Detalle de ticket"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain rounded"
                    />
                  </div>
                </div>
                <div className="bg-[#231955] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="p-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zBxpykYWBIdjTIY6DXYDJayZyEMqXp.png"
                      alt="Pantalla de inicio de tickets"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain rounded"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="bg-[#231955] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="p-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PxT4YYZGcNVrtqhMFcimLs7ynWJIvC.png"
                      alt="Lista de tickets con detalles"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain rounded"
                    />
                  </div>
                </div>
                <div className="bg-[#231955] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="p-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mj7jo9OaHwdupTa2Uear9kgixcvD8j.png"
                      alt="Creación de nuevo ticket"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain rounded"
                    />
                  </div>
                </div>
                <div className="bg-[#231955] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="p-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tKWKHxHLOcEK5X4SfSp2HKZv72oTWJ.png"
                      alt="Conversación de ticket"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain rounded"
                    />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="bg-[#231955] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="p-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FFTtadQARi6iZcqj9vNIZpBmoMl4Ug.png"
                      alt="Actividad del ticket"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain rounded"
                    />
                  </div>
                </div>
                <div className="bg-[#231955] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="p-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-s3lrMrkh4DuXAkODCtNkveF7GAAO12.png"
                      alt="Notas del ticket"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain rounded"
                    />
                  </div>
                </div>
                <div className="bg-[#231955] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="p-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SAq3WOlqdoOBEtM6W60AMwdBhTByCp.png"
                      alt="SLAs de tickets"
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
              <h3 className="text-3xl font-bold mb-2 text-[#f8c226]">40%</h3>
              <p className="text-gray-300">{translations.results.stat1}</p>
            </div>
            <div className="bg-[#2a2259] p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold mb-2 text-[#f8c226]">25%</h3>
              <p className="text-gray-300">{translations.results.stat2}</p>
            </div>
            <div className="bg-[#2a2259] p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold mb-2 text-[#f8c226]">35%</h3>
              <p className="text-gray-300">{translations.results.stat3}</p>
            </div>
          </div>
          <p className="text-gray-300">{translations.results.conclusion}</p>
        </section>
      </div>
    </ProjectDetailLayout>
  )
}

