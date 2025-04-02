import Image from "next/image"
import ProjectDetailLayout from "@/components/project-detail-layout"

export default function VidefonoProjectPage() {
  return (
    <ProjectDetailLayout
      title="Videofono 3D"
      category="Diseño 3D & Cyberpunk"
      description="Trabajo realizado para la materia Innovación y Diseño 3D de UADE. Explora el aprendizaje del Diseño 3D basado en el estilo Cyberpunk, creando un dispositivo de comunicación futurista."
      mainImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_videofono-1KCCTFx3XfGJOtp28Qw8w8TvyD0zB9.png"
    >
      <div className="space-y-16">
        {/* Sección 1: El concepto */}
        <section>
          <h2 className="text-2xl font-bold mb-6">El concepto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-4">
                El Videofono 3D es un proyecto que explora la estética cyberpunk a través del diseño de un dispositivo
                de comunicación futurista. Inspirado en obras como Blade Runner, Ghost in the Shell y Neuromancer, este
                trabajo busca materializar la visión de un futuro distópico donde la tecnología y lo humano se
                entrelazan.
              </p>
              <p className="text-gray-300">Los objetivos principales del proyecto incluían:</p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
                <li>Dominar técnicas de modelado 3D para crear objetos con alto nivel de detalle</li>
                <li>Explorar la estética cyberpunk y sus elementos visuales característicos</li>
                <li>Desarrollar materiales y texturas que evocaran tecnología avanzada pero desgastada</li>
                <li>Crear un objeto que pareciera funcional y coherente dentro de un universo cyberpunk</li>
              </ul>
            </div>
            <div className="bg-[#2a2259] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Moodboard de inspiración cyberpunk"
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
              <h3 className="text-xl font-bold mb-3">Investigación</h3>
              <p className="text-gray-300">
                Exploré referencias visuales del género cyberpunk, analizando películas, videojuegos y arte conceptual
                para identificar elementos clave de esta estética.
              </p>
            </div>
            <div className="bg-[#2a2259] p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Modelado 3D</h3>
              <p className="text-gray-300">
                Desarrollé el modelo utilizando Blender, comenzando con formas básicas y añadiendo progresivamente
                detalles, cables, pantallas y elementos mecánicos.
              </p>
            </div>
            <div className="bg-[#2a2259] p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Texturizado y renderizado</h3>
              <p className="text-gray-300">
                Creé materiales personalizados para cada componente, aplicando texturas que simulaban metal desgastado,
                plástico envejecido y pantallas holográficas.
              </p>
            </div>
          </div>
          <div className="bg-[#2a2259] rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=1000"
              alt="Proceso de modelado 3D del videofono"
              width={1000}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Sección 3: Solución */}
        <section>
          <h2 className="text-2xl font-bold mb-6">El resultado</h2>
          <p className="text-gray-300 mb-6">
            El Videofono 3D es un dispositivo de comunicación que combina elementos retro-futuristas con tecnología
            avanzada, presentando una estética desgastada pero funcional característica del cyberpunk. El diseño
            incorpora múltiples pantallas, cables expuestos y una interfaz holográfica.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#2a2259] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Detalles del videofono 3D"
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
                    <h3 className="font-bold text-white">Interfaz holográfica</h3>
                    <p className="text-gray-300">
                      Pantalla principal con proyección holográfica que muestra información y controles virtuales.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple rounded-full p-2 mr-3 mt-1">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Componentes expuestos</h3>
                    <p className="text-gray-300">
                      Cables, circuitos y piezas mecánicas visibles que reflejan la estética "high tech, low life" del
                      cyberpunk.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple rounded-full p-2 mr-3 mt-1">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Iluminación neón</h3>
                    <p className="text-gray-300">
                      Elementos luminosos en tonos azules y violetas que contrastan con la estructura metálica
                      desgastada.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#2a2259] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Vista frontal del videofono"
                width={300}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="bg-[#2a2259] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Vista lateral del videofono"
                width={300}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="bg-[#2a2259] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Vista detallada del videofono"
                width={300}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Sección 4: Resultados */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Resultados y aprendizajes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-4">
                El proyecto fue presentado como trabajo final para la materia Innovación y Diseño 3D, recibiendo una
                calificación sobresaliente por su nivel de detalle, coherencia estética y dominio técnico. El Videofono
                3D demuestra una comprensión profunda de la estética cyberpunk y las posibilidades del diseño
                tridimensional.
              </p>
              <p className="text-gray-300 mb-4">Los principales aprendizajes del proyecto incluyeron:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Técnicas avanzadas de modelado 3D en Blender</li>
                <li>Creación de materiales y texturas realistas con efectos de desgaste</li>
                <li>Iluminación para destacar elementos clave y crear atmósfera</li>
                <li>Composición y renderizado para presentar el modelo de manera efectiva</li>
              </ul>
            </div>
            <div className="bg-[#2a2259] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Presentación final del videofono"
                width={500}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
      </div>
    </ProjectDetailLayout>
  )
}

