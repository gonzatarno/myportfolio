"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import SiteHeader from "@/components/site-header"
import { useLanguage } from "@/contexts/language-context"

export default function ProyectosPage() {
  const graphicDesignRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    // Verificar si hay un hash en la URL
    if (typeof window !== "undefined" && window.location.hash === "#graphic-design") {
      // Usar setTimeout para asegurar que el DOM esté completamente cargado
      setTimeout(() => {
        graphicDesignRef.current?.scrollIntoView({ behavior: "smooth" })
      }, 500)
    }
  }, [])

  return (
    <main className="min-h-screen bg-[#231955] text-white">
      {/* Header fijo */}
      <SiteHeader />

      {/* Espacio para compensar el header fijo */}
      <div className="pt-24"></div>

      {/* Hero Section */}
      <div className="mx-auto max-w-[1000px] px-5 sm:px-6 md:px-8 mb-16">
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-12">{t("projects.myProjects")}</h1>
        </div>
      </div>

      {/* Proyectos Grid */}
      <div className="mx-auto max-w-[1000px] px-5 sm:px-6 md:px-8 mb-24">
        {/* Título de sección Product Design */}
        <div className="mb-12 relative">
          <div className="absolute left-0 w-full h-px bg-gradient-to-r from-purple-light/50 via-purple/80 to-purple-light/50"></div>
          <h2 className="text-3xl font-bold py-4 inline-block relative">
            <span className="bg-[#231955] pr-6 relative z-10">{t("projects.categories.product")}</span>
            <span className="absolute -bottom-1 left-0 w-24 h-1 bg-[#f8c226]"></span>
          </h2>
        </div>

        {/* Primera fila - 2 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Proyecto 1 */}
          <div className="group">
            <Link href="/proyectos/tickets" className="block">
              <div className="bg-[#2a2259] rounded-xl overflow-hidden transition-all duration-300 group-hover:bg-[#413287] group-hover:shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_Tickets-mvIX3rYcmRZ8lkJb7IlJSS5vO7SEUU.png"
                  alt={t("projects.tickets.title")}
                  width={500}
                  height={400}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <h2 className="text-2xl font-bold mb-2 mt-4 transition-colors duration-300 group-hover:text-[#f8c226]">
                {t("projects.tickets.title")}
              </h2>
              <p className="text-gray-300 mb-4">{t("projects.tickets.description")}</p>
              <div className="inline-flex items-center text-white hover:text-[#f8c226] transition-colors">
                {t("projects.viewProject")}{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          </div>

          {/* Proyecto 2 */}
          <div className="group">
            <Link href="/proyectos/bots-ia" className="block">
              <div className="bg-[#2a2259] rounded-xl overflow-hidden transition-all duration-300 group-hover:bg-[#413287] group-hover:shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_IA-z8o8mT6hl1blpHkWxKykUrJD4rk8yM.png"
                  alt={t("projects.bots.title")}
                  width={500}
                  height={400}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <h2 className="text-2xl font-bold mb-2 mt-4 transition-colors duration-300 group-hover:text-[#f8c226]">
                {t("projects.bots.title")}
              </h2>
              <p className="text-gray-300 mb-4">{t("projects.bots.description")}</p>
              <div className="inline-flex items-center text-white hover:text-[#f8c226] transition-colors">
                {t("projects.viewProject")}{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>

        {/* Proyecto 3 - Callbots con texto superpuesto en la esquina superior derecha */}
        <div className="mb-24">
          <Link href="/proyectos/callbots" className="block">
            <div className="relative rounded-xl overflow-hidden group">
              <div className="bg-[#2a2259] rounded-xl overflow-hidden transition-all duration-300 group-hover:bg-[#413287] group-hover:shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_Calls-aBKMaHS1PqfdyH9KnfmXBRmpABD6ti.svg"
                  alt={t("projects.callbots.title")}
                  width={1200}
                  height={600}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>
              <div className="p-6 bg-[#231955] md:absolute md:bottom-0 md:right-0 md:w-2/5 md:rounded-tl-xl transition-all duration-300 group-hover:bg-[#413287]">
                <h2 className="text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#f8c226]">
                  {t("projects.callbots.title")}
                </h2>
                <p className="text-gray-300 mb-4">{t("projects.callbots.description")}</p>
                <div className="inline-flex items-center text-white hover:text-[#f8c226] transition-colors">
                  {t("projects.viewProject")}{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Proyecto 5 - Rediseño de Btrader - Temporalmente en construcción */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 group">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#f8c226]">
              {t("projects.btrader.title")}
            </h2>
            <p className="text-gray-300 mb-4">{t("projects.btrader.description")}</p>
            <div className="relative inline-block">
              <span className="inline-flex items-center text-white opacity-50 cursor-not-allowed">
                {t("projects.viewProject")} <ArrowRight className="ml-2 h-4 w-4" />
              </span>
              <div className="absolute left-0 -bottom-8 bg-[#231955] border border-purple/30 rounded-md p-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Página en construcción
              </div>
            </div>
          </div>
          <div className="block relative group">
            <div className="bg-[#2a2259] rounded-xl overflow-hidden mb-4 transition-all duration-300 group-hover:bg-[#413287] group-hover:shadow-md relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_btrader-ltEoh7hUDbVqlZS7NXuEgLyg45COcM.png"
                alt={t("projects.btrader.title")}
                width={500}
                height={700}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02] group-hover:opacity-30"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-[#231955]/80 px-4 py-2 rounded-md text-white font-medium">Próximamente</div>
              </div>
            </div>
          </div>
        </div>

        {/* Proyecto 6 - DONDE VAMOS con texto superpuesto en el medio */}
        <div className="mb-24">
          <Link href="/proyectos/donde-vamos" className="block">
            <div className="relative rounded-xl overflow-hidden group">
              <div className="bg-[#2a2259] rounded-xl overflow-hidden transition-all duration-300 group-hover:bg-[#413287] group-hover:shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_DondeVamos-QisUgONaAGl7hEV49o0UGVr1gcTg7P.png"
                  alt={t("projects.dondevamos.title")}
                  width={1000}
                  height={600}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>
              <div className="p-6 bg-[#231955] md:absolute md:bottom-0 md:left-1/2 md:transform md:-translate-x-1/2 md:w-2/5 md:rounded-t-xl transition-all duration-300 group-hover:bg-[#413287]">
                <h2 className="text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#f8c226]">
                  {t("projects.dondevamos.title")}
                </h2>
                <p className="text-gray-300 mb-4">{t("projects.dondevamos.description")}</p>
                <div className="inline-flex items-center text-white hover:text-[#f8c226] transition-colors">
                  {t("projects.viewProject")}{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Proyecto 7 - FAST APP */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 group">
          <Link href="/proyectos/fast-app" className="block">
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#f8c226]">
                {t("projects.fastapp.title")}
              </h2>
              <p className="text-gray-300 mb-4">{t("projects.fastapp.description")}</p>
              <div className="inline-flex items-center text-white hover:text-[#f8c226] transition-colors">
                {t("projects.viewProject")}{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
          <Link href="/proyectos/fast-app" className="block">
            <div className="bg-[#2a2259] rounded-xl overflow-hidden mb-4 transition-all duration-300 group-hover:bg-[#413287] group-hover:shadow-md">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_FastApp-siVOrZGWPAFSSYesmEOV0aBH5vWLPD.png"
                alt={t("projects.fastapp.title")}
                width={500}
                height={400}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </Link>
        </div>

        {/* Proyecto 8 - Tierra Ibérica */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 group">
          <Link href="/proyectos/tierra-iberica" className="block">
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#f8c226]">
                {t("projects.tierraiberica.title")}
              </h2>
              <p className="text-gray-300 mb-4">{t("projects.tierraiberica.description")}</p>
              <div className="inline-flex items-center text-white hover:text-[#f8c226] transition-colors">
                {t("projects.viewProject")}{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
          <Link href="/proyectos/tierra-iberica" className="block">
            <div className="bg-[#2a2259] rounded-xl overflow-hidden mb-4 transition-all duration-300 group-hover:bg-[#413287] group-hover:shadow-md">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_TI-WERorf4kjKNGvBkBXqux0Lltaej7rV.png"
                alt={t("projects.tierraiberica.title")}
                width={500}
                height={400}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </Link>
        </div>

        {/* Sección de Proyectos de Diseño Gráfico */}
        <div id="graphic-design" ref={graphicDesignRef} className="mb-24">
          {/* Título de sección Graphic Design */}
          <div className="mb-12 relative">
            <div className="absolute left-0 w-full h-px bg-gradient-to-r from-purple-light/50 via-purple/80 to-purple-light/50"></div>
            <h2 className="text-3xl font-bold py-4 inline-block relative">
              <span className="bg-[#231955] pr-6 relative z-10">{t("projects.categories.graphic")}</span>
              <span className="absolute -bottom-1 left-0 w-24 h-1 bg-[#f8c226]"></span>
            </h2>
          </div>

          {/* Proyecto Vinilos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 items-center group">
            <Link href="/proyectos/vinilos" className="block">
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 transition-colors duration-300 group-hover:text-[#f8c226]">
                  {t("projects.vinilos.title")}
                </h3>
                <p className="text-gray-300 mb-6">{t("projects.vinilos.description")}</p>
                <div className="inline-flex items-center text-white hover:text-[#f8c226] transition-colors">
                  {t("projects.viewProject")}{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
            <Link href="/proyectos/vinilos" className="block">
              <div className="rounded-xl overflow-hidden transition-all duration-300 group-hover:bg-[#413287] group-hover:shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_Vinilo-8Qi3esSdjVoI4gzAFtyPs0OjHDrH1v.png"
                  alt={t("projects.vinilos.title")}
                  width={500}
                  height={400}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </Link>
          </div>

          {/* Proyecto Cartas Creativas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 items-center group">
            <Link href="/proyectos/arco" className="block">
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 transition-colors duration-300 group-hover:text-[#f8c226]">
                  {t("projects.arco.title")}
                </h3>
                <p className="text-gray-300 mb-6">{t("projects.arco.description")}</p>
                <div className="inline-flex items-center text-white hover:text-[#f8c226] transition-colors">
                  {t("projects.viewProject")}{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
            <Link href="/proyectos/arco" className="block">
              <div className="rounded-xl overflow-hidden transition-all duration-300 group-hover:bg-[#413287] group-hover:shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_arco-KH1pb0bNiFDVzmzDoAUuvVFwI9Ch7n.png"
                  alt={t("projects.arco.title")}
                  width={500}
                  height={400}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </Link>
          </div>

          {/* Proyecto Videofono 3D */}
          <div className="mb-24">
            <div className="block relative group">
              <div className="bg-[#2a2259] rounded-xl overflow-hidden transition-all duration-300 group-hover:bg-[#413287] group-hover:shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_videofono-1KCCTFx3XfGJOtp28Qw8w8TvyD0zB9.png"
                  alt={t("projects.videofono.title")}
                  width={500}
                  height={400}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02] group-hover:opacity-30"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-[#231955]/80 px-4 py-2 rounded-md text-white font-medium">Próximamente</div>
                </div>
              </div>
              <div className="p-6 bg-[#231955] md:absolute md:top-1/4 md:right-0 md:w-2/5 md:rounded-l-xl shadow-lg transition-all duration-300 group-hover:bg-[#413287]">
                <h3 className="text-2xl font-bold mb-4 transition-colors duration-300 group-hover:text-[#f8c226]">
                  {t("projects.videofono.title")}
                </h3>
                <p className="text-gray-300 mb-6">{t("projects.videofono.description")}</p>
                <div className="relative inline-block">
                  <span className="inline-flex items-center text-white opacity-50 cursor-not-allowed">
                    {t("projects.viewProject")} <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                  <div className="absolute left-0 -bottom-8 bg-[#231955] border border-purple/30 rounded-md p-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    Página en construcción
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Proyecto 9 - Libros PHILIP K. DICK */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 group">
            <Link href="/proyectos/philip-dick" className="block">
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#f8c226]">
                  {t("projects.philipdick.title")}
                </h2>
                <p className="text-gray-300 mb-4">{t("projects.philipdick.description")}</p>
                <div className="inline-flex items-center text-white hover:text-[#f8c226] transition-colors">
                  {t("projects.viewProject")}{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
            <Link href="/proyectos/philip-dick" className="block">
              <div className="bg-[#2a2259] rounded-xl overflow-hidden mb-4 transition-all duration-300 group-hover:bg-[#413287] group-hover:shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_dick-VuilMsLOnH4UKzdUJU4HHEyJv3UdXz.png"
                  alt={t("projects.philipdick.title")}
                  width={500}
                  height={700}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </Link>
          </div>

          {/* Proyecto 10 - Desifrando amistades */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 group">
            <Link href="/proyectos/descifrando-amistades" className="block">
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#f8c226]">
                  {t("projects.amistades.title")}
                </h2>
                <p className="text-gray-300 mb-4">{t("projects.amistades.description")}</p>
                <div className="inline-flex items-center text-white hover:text-[#f8c226] transition-colors">
                  {t("projects.viewProject")}{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
            <Link href="/proyectos/descifrando-amistades" className="block">
              <div className="bg-[#2a2259] rounded-xl overflow-hidden mb-4 transition-all duration-300 group-hover:bg-[#413287] group-hover:shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_amistades-EIymm8u55escRozi6YOX6AhXAaB0VK.png"
                  alt={t("projects.amistades.title")}
                  width={500}
                  height={700}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </Link>
          </div>

          {/* Proyecto 11 - Proyecto Aniversario FRIENDS */}
          <div className="mb-24">
            <Link href="/proyectos/friends" className="block">
              <div className="relative rounded-xl overflow-hidden group">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_friends-ihXUAc2yUMYCwdbqqad8v6DsaY05Vn.png"
                  alt={t("projects.friends.title")}
                  width={1200}
                  height={600}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.01]"
                />
                <div className="absolute bottom-0 right-0 bg-[#231955] p-8 md:w-2/5 rounded-tl-xl transition-all duration-300 group-hover:bg-[#413287]">
                  <h2 className="text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#f8c226]">
                    {t("projects.friends.title")}
                  </h2>
                  <p className="text-gray-300 mb-4">{t("projects.friends.description")}</p>
                  <div className="inline-flex items-center text-white hover:text-[#f8c226] transition-colors">
                    {t("projects.viewProject")}{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full px-5 sm:px-6 md:px-8">
        <footer className="mx-auto max-w-[1000px] py-8 border-t border-purple/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="font-bold text-xl hover:text-purple-light transition-colors">
              GONZA<span className="text-purple">TARNO</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-white hover:text-purple transition-colors">
                {t("nav.home")}
              </Link>
              <Link href="/experiencia" className="text-white hover:text-purple transition-colors">
                {t("nav.about")}
              </Link>
              <Link href="/proyectos" className="text-white hover:text-purple transition-colors">
                {t("nav.projects")}
              </Link>
              <Link href="/contacto" className="text-white hover:text-purple transition-colors">
                {t("nav.contact")}
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </main>
  )
}

