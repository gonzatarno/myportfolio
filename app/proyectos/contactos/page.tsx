import Image from "next/image"
import ProjectDetailLayout from "@/components/project-detail-layout"

export default function ContactosProjectPage() {
  return (
    <ProjectDetailLayout
      title="Agenda de contactos y compañías"
      category="PRODUCT DESIGN & CRM"
      description="Desarrollamos una agenda de contactos integrada para guardar y gestionar contactos y compañías en un solo lugar, mejorando la organización y eficiencia de las comunicaciones empresariales."
      mainImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_Contacts-JE5VZOsKlYpXjnirzjPiSOmOrkFdta.svg"
    >
      <div className="space-y-12">
        {/* Breve introducción */}
        <section>
          <p className="text-gray-300 mb-6">
            Los agentes de soporte y ventas necesitaban una forma eficiente de centralizar y gestionar los contactos provenientes de diferentes canales de comunicación. La falta de una agenda de contactos integrada dificultaba el seguimiento de las conversaciones y la personalización del soporte. El desafío era crear una solución que permitiera visualizar, guardar y gestionar contactos y compañías en un solo lugar, con acceso directo desde chats y tickets.
          </p>
        </section>

        {/* Sección 2: Proceso de diseño */}
        <section>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-6">Proceso de diseño</h2>
              <p className="text-gray-300 mb-4">
                Se realizó un análisis de los flujos de trabajo de los agentes y las necesidades de los usuarios en la gestión de contactos. Se investigaron soluciones de agenda de contactos y se diseñó una interfaz intuitiva y fácil de usar.
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
                <li>Se desarrolló la funcionalidad para visualizar información de contactos directamente desde chats y tickets.</li>
                <li>Se implementó la opción de crear y guardar contactos y compañías con información relevante.</li>
                <li>Se diseñó un sistema de pestañas para facilitar la navegación entre contactos y compañías.</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-square rounded-xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LGe4V2jukIDV346gEomawjylTPMB7g.png"
                  alt="Vista detallada de un contacto con información personal y conversaciones"
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
                <h2 className="text-2xl font-bold mb-6">La solución</h2>
                <p className="text-gray-300 mb-4">Se implementó una agenda de contactos integrada que permite:</p>
              </div>
              <div>
                <ul className="list-disc list-inside text-gray-300 mt-14 space-y-2">
                  <li>Visualizar información de contactos directamente desde chats y tickets.</li>
                  <li>Crear y guardar contactos y compañías con información relevante.</li>
                  <li>Navegar entre contactos y compañías a través de pestañas intuitivas.</li>
                  <li>Acceder a información de contactos desde chats y tickets para generar nuevas conversaciones.</li>
                </ul>
              </div>
            </div>

            {/* Visual Direction Grid */}
            <div className="mt-8">
              {/* Visual Direction Grid - Full width section */}
              <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Row 1 */}
                  <div className="bg-[#231955] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="p-2">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KUvAbGCXYIj3YdRReAM3pZtOj8s3Cu.png"
                        alt="Vista de lista de contactos y detalle"
                        width={800}
                        height={600}
                        className="w-full h-auto object-contain rounded"
                      />
                    </div>
                  </div>
                  <div className="bg-[#231955] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="p-2">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bPiCuujHoQaUo76pVn0jwDcYUWfGnP.png"
                        alt="Vista de contacto con historial de conversaciones"
                        width={800}
                        height={600}
                        className="w-full h-auto object-contain rounded"
                      />
                    </div>
                  </div>
                  <div className="bg-[#231955] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="p-2">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-j5JI0jvRmZFM4kUSNIryqNmFCAFRDg.png"
                        alt="Formulario para crear nuevo contacto"
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
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qOPkZdNCDmwIuol43HcKmN6ByR3Jwy.png"
                        alt="Formulario para editar contacto existente"
                        width={800}
                        height={600}
                        className="w-full h-auto object-contain rounded"
                      />
                    </div>
                  </div>
                  <div className="bg-[#231955] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="p-2">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oSl38oSFPyLxlhhZOW6yqA4jDzstA2.png"
                        alt="Interfaz para combinar contactos duplicados"
                        width={800}
                        height={600}
                        className="w-full h-auto object-contain rounded"
                      />
                    </div>
                  </div>
                  <div className="bg-[#231955] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="p-2">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-M1inZOay2pUi2ZeCIQQMIwIrsxOT06.png"
                        alt="Formulario para crear nueva compañía"
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
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7xlfviuzclZRJUrFvyTepo8Z2LLXIa.png"
                        alt="Interfaz para importar contactos"
                        width={800}
                        height={600}
                        className="w-full h-auto object-contain rounded"
                      />
                    </div>
                  </div>
                  <div className="bg-[#231955] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="p-2">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g5TquE9CClgnGaDHqnSZX1obUhF0nY.png"
                        alt="Mensaje de éxito tras importar contactos"
                        width={800}
                        height={600}
                        className="w-full h-auto object-contain rounded"
                      />
                    </div>
                  </div>
                  <div className="bg-[#231955] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="p-2">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7Pp2KolrjeNauSn8vZeev3ZhpEtKYp.png"
                        alt="Interfaz para gestionar contactos duplicados"
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
          <h2 className="text-2xl font-bold mb-6">Resultados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#2a2259] p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold mb-2 text-[#f8c226]">50%</h3>
              <p className="text-gray-300">Reducción en tiempo de búsqueda de información de contactos</p>
            </div>
            <div className="bg-[#2a2259] p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold mb-2 text-[#f8c226]">35%</h3>
              <p className="text-gray-300">Mejora en la calidad de datos de clientes</p>
            </div>
            <div className="bg-[#2a2259] p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold mb-2 text-[#f8c226]">40%</h3>
              <p className="text-gray-300">Aumento en la eficiencia de seguimiento de clientes</p>
            </div>
          </div>
          <p className="text-gray-300">
            La agenda de contactos se ha convertido en una herramienta fundamental para los usuarios de Botmaker,
            permitiéndoles mantener una base de datos organizada y accesible de sus contactos y compañías. La
            integración con el resto de la plataforma ha creado un ecosistema cohesivo que mejora significativamente la
            gestión de relaciones con clientes.
          </p>
          <p className="text-gray-300 mt-4">
            Los usuarios han destacado especialmente la facilidad para encontrar información relevante y la visibilidad
            completa del historial de interacciones, lo que les permite ofrecer un servicio más personalizado y
            eficiente.
          </p>
        </section>
      </div>
    </ProjectDetailLayout>
  )
}

