"use client"

import Image from "next/image"
import ProjectDetailLayout from "@/components/project-detail-layout"
import { useLanguage } from "@/contexts/language-context"

export default function CallbotsProjectPage() {
  const { language } = useLanguage()

  // Translations
  const translations = {
    title: language === "en" ? "Callbots and Call Management" : "Callbots y atención de llamadas",
    category: "PRODUCT DESIGN & Voice",
    description:
      language === "en"
        ? "We developed integrated callbots and call handling in the platform, facilitating communication with customers through automated voice channels."
        : "Desarrollamos callbots integrados y atención de llamadas en la plataforma Botmaker, facilitando la comunicación con clientes a través de canales de voz automatizados.",
    challenge: {
      title: language === "en" ? "The Challenge" : "El desafío",
      content:
        language === "en"
          ? "Traditional telephone service lacks scalability and hinders fluid communication. Users seek quick answers, while agents need tools that allow them to efficiently manage calls from the same platform. The challenge was to integrate intelligent callbots with the ability to transfer to human calls when necessary, all within a unified environment."
          : "La atención telefónica tradicional carece de escalabilidad y dificulta una comunicación fluida. Los usuarios buscan respuestas rápidas, mientras que los agentes necesitan herramientas que les permitan gestionar las llamadas eficientemente desde la misma plataforma. El desafío era integrar callbots inteligentes con la capacidad de transferir a llamadas humanas cuando fuera necesario, todo dentro de un entorno unificado.",
    },
    process: {
      title: language === "en" ? "Design Process" : "Proceso de diseño",
      content:
        language === "en"
          ? "The telephone service flows were analyzed in detail, prioritizing the integration of bots and human agents."
          : "Se analizaron detalladamente los flujos de atención telefónica, priorizando la integración de bots y agentes humanos.",
      items:
        language === "en"
          ? [
              "Conversational flows were designed for callbots, allowing the resolution of common questions and the transfer to agents when necessary.",
              "The 'Calls' functionality was developed, allowing agents to receive calls directly on the platform with video call and traditional call tools.",
              "Functionalities were integrated to access customer data and previous conversations to provide personalized support.",
              "Internal tests and beta testing were conducted with users to iterate the design and ensure usability.",
            ]
          : [
              "Se diseñaron flujos conversacionales para callbots, permitiendo la resolución de dudas comunes y la transferencia a agentes cuando fuera necesario.",
              "Se desarrolló la funcionalidad 'Calls', permitiendo a los agentes recibir llamadas directamente en la plataforma con herramientas de videollamada y llamada tradicional.",
              "Se integraron funcionalidades para acceder a datos de clientes y conversaciones previas para proporcionar un soporte personalizado.",
              "Se realizaron pruebas internas y beta testing con usuarios para iterar el diseño y garantizar la usabilidad.",
            ],
    },
    solution: {
      title: language === "en" ? "The Solution" : "La solución",
      content1:
        language === "en"
          ? "Intelligent callbots were implemented that answer calls and automatically resolve questions. The 'Calls' functionality allows agents to receive calls with video calls and traditional calls, all from the platform."
          : "Se implementaron callbots inteligentes que atienden llamadas y resuelven dudas automáticamente. La funcionalidad 'Calls' permite a los agentes recibir llamadas con videollamada y llamada tradicional, todo desde la plataforma.",
      content2:
        language === "en"
          ? "The system includes access to customer data and previous conversations to provide personalized support. Additionally, detailed metrics are provided on call duration, conversion rates, and abandonment points."
          : "El sistema incluye acceso a datos de clientes y conversaciones previas para proporcionar un soporte personalizado. Además, se proporcionan métricas detalladas sobre duración de llamadas, tasas de conversión y puntos de abandono.",
    },
    results: {
      title: language === "en" ? "Results" : "Resultados",
      stat1: language === "en" ? "Reduction in customer wait time" : "Reducción en tiempo de espera para clientes",
      stat2:
        language === "en"
          ? "Increase in first-call query resolution"
          : "Aumento en resolución de consultas en primera llamada",
      stat3:
        language === "en"
          ? "Reduction in call center operating costs"
          : "Reducción en costos operativos de call centers",
      conclusion:
        language === "en"
          ? "The integration of callbots into the Botmaker platform has allowed companies to offer a more complete and efficient customer service experience, automating repetitive tasks and allowing human agents to focus on more complex and higher-value interactions."
          : "La integración de callbots en la plataforma Botmaker ha permitido a las empresas ofrecer una experiencia de atención al cliente más completa y eficiente, automatizando tareas repetitivas y permitiendo a los agentes humanos concentrarse en interacciones más complejas y de mayor valor.",
    },
  }

  return (
    <ProjectDetailLayout
      title={translations.title}
      category={translations.category}
      description={translations.description}
      mainImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_Calls-aBKMaHS1PqfdyH9KnfmXBRmpABD6ti.svg"
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-y8VKZuiKrozdWxxOZroTLnLfqLnJTJ.png"
                  alt="Diagrama de flujo de callbots"
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rk3XEbnayTRS6jcyrijPJCfNuH41Qc.png"
                  alt="Interfaz de llamada entrante vía WhatsApp"
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
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vXNE3HLdYdYCaAT6nQ8UXSLCVPcuos.png"
                      alt="Diagrama de flujo completo de callbot"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain rounded"
                    />
                  </div>
                </div>
                <div className="bg-bg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="p-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-egcftnpguwCwFsUyMCihTUgACDWv4x.png"
                      alt="Opciones de configuración de callbot"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain rounded"
                    />
                  </div>
                </div>
                <div className="bg-bg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="p-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Re3FahLevItNnKQE8zBtQMqhBnOQlH.png"
                      alt="Pantalla de bienvenida a Callbots"
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
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lQHuyCKtXX81YwpTDnuOefbW3OZvbS.png"
                      alt="Configuración de bloque de botón"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain rounded"
                    />
                  </div>
                </div>
                <div className="bg-bg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="p-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GzItYMwNX6Kp6mEs8AyZqzLH4UbZUr.png"
                      alt="Configuración de mensaje de audio"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain rounded"
                    />
                  </div>
                </div>
                <div className="bg-bg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="p-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-o6Q3O1t0phARbPJR5K8WFns9HIP63c.png"
                      alt="Asignación de canales a Callbots"
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
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-L7h0nIq5BbBS46W7YR8iBVNSSXCIVt.png"
                      alt="Mensaje de éxito al crear callbot"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain rounded"
                    />
                  </div>
                </div>
                <div className="bg-bg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="p-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jHVlG76XW4aSbshp5TWiqjIFDXyahF.png"
                      alt="Mensaje de error al crear callbot"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain rounded"
                    />
                  </div>
                </div>
                <div className="bg-bg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="p-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dhl9RPXKjLPuAvm7sgo8Jdrev0VOzS.png"
                      alt="Menú de acciones para callbot"
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
              <h3 className="text-3xl font-bold mb-2 text-[#f8c226]">60%</h3>
              <p className="text-gray-300">{translations.results.stat1}</p>
            </div>
            <div className="bg-[#2a2259] p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold mb-2 text-[#f8c226]">45%</h3>
              <p className="text-gray-300">{translations.results.stat2}</p>
            </div>
            <div className="bg-[#2a2259] p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold mb-2 text-[#f8c226]">30%</h3>
              <p className="text-gray-300">{translations.results.stat3}</p>
            </div>
          </div>
          <p className="text-gray-300">{translations.results.conclusion}</p>
          <p className="text-gray-300 mt-4">
            {language === "en"
              ? "The project has been adopted by multiple clients in sectors such as banking, telecommunications, and retail, demonstrating its versatility and effectiveness in different business contexts."
              : "El proyecto ha sido adoptado por múltiples clientes en sectores como banca, telecomunicaciones y retail, demostrando su versatilidad y efectividad en diferentes contextos de negocio."}
          </p>
        </section>
      </div>
    </ProjectDetailLayout>
  )
}

