import Image from "next/image"
import ProjectDetailLayout from "@/components/project-detail-layout"

export default function FriendsProjectPage() {
  return (
    <ProjectDetailLayout
      title="Proyecto Aniversario FRIENDS"
      category="Diseño Gráfico & Eventos"
      description="Diseño de cronograma y materiales gráficos para la celebración del 25° aniversario de la mítica serie FRIENDS."
      mainImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_friends-ihXUAc2yUMYCwdbqqad8v6DsaY05Vn.png"
    >
      <div className="space-y-12">
        {/* Breve introducción */}
        <section>
          <p className="text-gray-300 mb-6">
            Con motivo del 25° aniversario de la serie FRIENDS, se diseñó la identidad visual y los materiales gráficos
            para un evento de celebración de tres días que incluiría proyecciones, charlas y actividades interactivas.
          </p>
        </section>

        {/* Imágenes del proyecto - una debajo de otra */}
        <section className="space-y-12">
          <div className="bg-[#2a2259] rounded-xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/INDIVIDUAL_Mesa%20de%20trabajo%201.jpg-R99K26OKUPcH2iZJaF0tF2sSIYpU3Z.jpeg"
              alt="Diseño principal del evento FRIENDS 25° Aniversario"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
            <div className="p-4">
              <p className="text-center text-gray-300">Diseño principal con frases icónicas de la serie</p>
            </div>
          </div>

          <div className="bg-[#2a2259] rounded-xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tapa--crono-01.jpg-SihWgf5B2vY42BlRPhiaYoRBcGLea7.jpeg"
              alt="Cronograma del evento FRIENDS 25° Aniversario"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
            <div className="p-4">
              <p className="text-center text-gray-300">
                Cronograma detallado de actividades para los tres días del evento
              </p>
            </div>
          </div>

          <div className="bg-[#2a2259] rounded-xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grilla-01.jpg-APrnqYCe2UXsuhXWF9F9Ej1RoYhPna.jpeg"
              alt="Versión alternativa del cronograma FRIENDS 25° Aniversario"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
            <div className="p-4">
              <p className="text-center text-gray-300">Versión alternativa del cronograma con fondo azul intenso</p>
            </div>
          </div>
        </section>

        {/* Breve conclusión */}
        <section>
          <p className="text-gray-300">
            El diseño fue implementado con éxito en el evento, recibiendo comentarios positivos tanto de los
            organizadores como de los asistentes. La identidad visual logró capturar la esencia nostálgica de FRIENDS
            mientras ofrecía un aspecto fresco y contemporáneo.
          </p>
        </section>
      </div>
    </ProjectDetailLayout>
  )
}

