import Image from "next/image"
import ProjectDetailLayout from "@/components/project-detail-layout"

export default function BtraderProjectPage() {
  return (
    <ProjectDetailLayout
      title="Rediseño de Btrader: Experiencia de Inversión Moderna"
      category="PRODUCT DESIGN & Fintech"
      description="Modernicé la aplicación de inversiones Btrader, incorporando las últimas tendencias de diseño y mejorando la usabilidad para crear una experiencia más intuitiva y atractiva para los inversores."
      mainImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_btrader-ltEoh7hUDbVqlZS7NXuEgLyg45COcM.png"
    >
      <div className="space-y-16">
        {/* Sección 1: El desafío */}
        <section>
          <h2 className="text-2xl font-bold mb-6">El desafío</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-4">
                Btrader, una plataforma de inversiones establecida, necesitaba actualizar su interfaz para atraer a una
                nueva generación de inversores y mejorar la experiencia de sus usuarios actuales, manteniendo la
                robustez y confiabilidad que los caracterizaba.
              </p>
              <p className="text-gray-300">Los principales desafíos incluían:</p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
                <li>Modernizar la interfaz sin alienar a los usuarios existentes</li>
                <li>Simplificar flujos complejos de inversión para hacerlos más accesibles</li>
                <li>Mejorar la visualización de datos financieros y gráficos</li>
                <li>Crear una experiencia coherente entre dispositivos móviles y desktop</li>
              </ul>
            </div>
            <div className="bg-[#2a2259] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Comparativa antes y después"
                width={500}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Sección 2: Proceso de diseño */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Proceso de diseño</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#2a2259] p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Investigación de usuarios</h3>
              <p className="text-gray-300">
                Realizamos entrevistas con inversores de diferentes perfiles y analizamos patrones de uso para
                identificar puntos de dolor y oportunidades.
              </p>
            </div>
            <div className="bg-[#2a2259] p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Benchmarking</h3>
              <p className="text-gray-300">
                Analizamos las mejores prácticas en aplicaciones financieras y de inversión para identificar tendencias
                y estándares de la industria.
              </p>
            </div>
            <div className="bg-[#2a2259] p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Diseño iterativo</h3>
              <p className="text-gray-300">
                Desarrollamos múltiples versiones de las pantallas clave, refinándolas con feedback de usuarios y
                stakeholders.
              </p>
            </div>
          </div>
          <div className="bg-[#2a2259] rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=1000"
              alt="Proceso de diseño de Btrader"
              width={1000}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Sección 3: Solución */}
        <section>
          <h2 className="text-2xl font-bold mb-6">La solución</h2>
          <p className="text-gray-300 mb-6">
            Rediseñamos completamente la interfaz de Btrader, creando una experiencia moderna, intuitiva y visualmente
            atractiva que facilita la toma de decisiones de inversión y mejora la accesibilidad para usuarios de todos
            los niveles.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#2a2259] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Nueva interfaz de Btrader"
                width={500}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-purple rounded-full p-2 mr-3 mt-1">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Dashboard personalizable</h3>
                    <p className="text-gray-300">
                      Pantalla de inicio con widgets configurables que muestran la información más relevante para cada
                      usuario.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple rounded-full p-2 mr-3 mt-1">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Gráficos avanzados</h3>
                    <p className="text-gray-300">
                      Visualizaciones interactivas y personalizables para análisis técnico y seguimiento de rendimiento.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple rounded-full p-2 mr-3 mt-1">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Flujos simplificados</h3>
                    <p className="text-gray-300">
                      Procesos de inversión rediseñados para reducir pasos y mejorar la claridad en cada decisión.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Visual Direction Grid */}
          <div className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Row 1 */}
              <div className="bg-bg rounded-xl overflow-hidden">
                <div className="aspect-[4/3]">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Interfaz de Btrader 1"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-bg rounded-xl overflow-hidden">
                <div className="aspect-[4/3]">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Interfaz de Btrader 2"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-bg rounded-xl overflow-hidden">
                <div className="aspect-[4/3]">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Interfaz de Btrader 3"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="bg-bg rounded-xl overflow-hidden">
                <div className="aspect-[4/3]">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Interfaz de Btrader 4"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-bg rounded-xl overflow-hidden">
                <div className="aspect-[4/3]">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Interfaz de Btrader 5"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-bg rounded-xl overflow-hidden">
                <div className="aspect-[4/3]">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Interfaz de Btrader 6"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="bg-bg rounded-xl overflow-hidden">
                <div className="aspect-[4/3]">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Interfaz de Btrader 7"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-bg rounded-xl overflow-hidden">
                <div className="aspect-[4/3]">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Interfaz de Btrader 8"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-bg rounded-xl overflow-hidden">
                <div className="aspect-[4/3]">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Interfaz de Btrader 9"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
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
              <h3 className="text-3xl font-bold mb-2 text-[#f8c226]">32%</h3>
              <p className="text-gray-300">Aumento en nuevos usuarios registrados</p>
            </div>
            <div className="bg-[#2a2259] p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold mb-2 text-[#f8c226]">45%</h3>
              <p className="text-gray-300">Incremento en tiempo de sesión promedio</p>
            </div>
            <div className="bg-[#2a2259] p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold mb-2 text-[#f8c226]">28%</h3>
              <p className="text-gray-300">Aumento en operaciones completadas</p>
            </div>
          </div>
          <p className="text-gray-300">
            El rediseño de Btrader ha sido recibido con entusiasmo tanto por usuarios nuevos como existentes. La
            plataforma ahora ofrece una experiencia más intuitiva y atractiva que ha resultado en un aumento
            significativo en la adquisición y retención de usuarios.
          </p>
          <p className="text-gray-300 mt-4">
            Los usuarios han destacado especialmente la facilidad para visualizar y analizar datos financieros, así como
            la simplificación de los procesos de inversión, lo que ha contribuido a democratizar el acceso a
            herramientas financieras avanzadas.
          </p>
        </section>
      </div>
    </ProjectDetailLayout>
  )
}

