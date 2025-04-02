"use client"

import { useRef } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import TypewriterGreeting from "@/components/typewriter-greeting"
import ProjectsSection from "@/components/projects-section"
import SiteHeader from "@/components/site-header"
import { Linkedin, Mail } from "lucide-react"
import BehanceIcon from "@/components/behance-icon"
import { useLanguage } from "@/contexts/language-context"
import { useAudience } from "@/contexts/audience-context"
import AudienceSelector from "@/components/audience-selector"
import ContactSectionAlt from "@/components/contact-section-alt"

export default function Home() {
  const { t } = useLanguage()
  const { getIntroText, audience } = useAudience()
  const taglineRef = useRef<HTMLElement>(null)

  const scrollToTagline = () => {
    if (taglineRef.current) {
      window.scrollTo({
        top: taglineRef.current.offsetTop,
        behavior: "smooth",
      })
    }
  }

  // Determinar qué imagen mostrar según la audiencia seleccionada
  const profileImage = audience === "designers" ? "/images/designers.png" : "/images/recruiters.png"

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#231955] text-white">
      {/* Header fijo */}
      <SiteHeader />

      {/* Espacio para compensar el header fijo */}
      <div className="pt-24" style={{ position: "relative", zIndex: 10 }}></div>

      {/* Content with max-width 1000px */}
      <div className="mx-auto max-w-[1000px] px-5 sm:px-6 md:px-8" style={{ position: "relative", zIndex: 10 }}>
        {/* Hero Section */}
        <section
          className="py-16 md:py-24 flex flex-col md:flex-row items-center justify-between"
          style={{ position: "relative", zIndex: 10 }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
            <div
              className="absolute w-64 h-64 rounded-full bg-pink-500/20 blur-xl"
              style={{
                top: "20%",
                right: "10%",
                animation: "float 6s ease-in-out infinite, pulse 4s ease-in-out infinite alternate",
              }}
            ></div>
            <div
              className="absolute w-40 h-40 rounded-full bg-pink-400/10 blur-xl"
              style={{
                bottom: "15%",
                left: "5%",
                animation: "float 8s ease-in-out infinite 1s, pulse 5s ease-in-out infinite alternate",
              }}
            ></div>
          </div>
          <div className="md:w-3/4 space-y-6" style={{ position: "relative", zIndex: 10 }}>
            {/* Audience Selector - now positioned above the greeting */}
            <AudienceSelector />

            <TypewriterGreeting audience={audience} />

            {/* Dynamic intro text based on audience */}
            <p className="text-base md:text-lg max-w-md text-white">{getIntroText()}</p>

            <Button
              className="bg-purple hover:bg-purple-dark text-white flex items-center gap-2"
              onClick={scrollToTagline}
            >
              {t("home.cta")}
              <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <div
            className="mt-10 md:mt-0 flex justify-center md:justify-end"
            style={{ position: "relative", zIndex: 10 }}
          >
            <img
              src={profileImage || "/placeholder.svg"}
              alt="Foto de perfil"
              className="max-w-full h-auto w-[90%] md:w-[60%]"
            />
          </div>
        </section>

        {/* Resto del contenido con z-index aumentado */}
        <section ref={taglineRef} className="py-16 text-center" style={{ position: "relative", zIndex: 10 }}>
          <h2 className="text-2xl md:text-3xl font-semibold text-white">{t("home.tagline")}</h2>
        </section>

        <section className="py-16" style={{ position: "relative", zIndex: 10 }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Service Cards... */}
            <div
              className="bg-purple-dark rounded-xl overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-300 flex flex-col"
              style={{ position: "relative", zIndex: 10 }}
            >
              <Link href="/proyectos#product-design" className="block flex-1">
                <div className="p-4 flex-1">
                  <div className="uppercase text-sm font-semibold text-[#f8c226]">{t("card.product.title")}</div>
                  <h3 className="text-xl font-bold text-white mt-1">{t("card.product.desc")}</h3>
                  <div className="inline-block text-sm text-white mt-1">{t("card.viewProjects")} →</div>
                </div>
                <div className="mt-2">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home_Product.jpg-dDLmrY78TjYRRiGXctQ9Z8rEVy8Gu5.jpeg"
                    alt="Product Design"
                    className="w-full"
                  />
                </div>
              </Link>
            </div>

            <div
              className="bg-purple rounded-xl overflow-hidden transform hover:-rotate-1 transition-transform duration-300 flex flex-col"
              style={{ position: "relative", zIndex: 10 }}
            >
              <Link href="/proyectos#graphic-design" className="block flex-1">
                <div className="p-4 flex-1">
                  <div className="uppercase text-sm font-semibold text-[#f8c226]">{t("card.graphic.title")}</div>
                  <h3 className="text-xl font-bold text-white mt-1">{t("card.graphic.desc")}</h3>
                  <div className="inline-block text-sm text-white mt-1">{t("card.viewProjects")} →</div>
                </div>
                <div className="mt-2">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home_Graphic.png-ntsT6fbu0IGURH7XNGydKv4zUWONLL.jpeg"
                    alt="Graphic Design"
                    className="w-full"
                  />
                </div>
              </Link>
            </div>

            <div
              className="bg-purple-darker rounded-xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-300 flex flex-col"
              style={{ position: "relative", zIndex: 10 }}
            >
              <Link href="/proyectos#design-systems" className="block flex-1">
                <div className="p-4 flex-1">
                  <div className="uppercase text-sm font-semibold text-[#f8c226]">{t("card.systems.title")}</div>
                  <h3 className="text-xl font-bold text-white mt-1">{t("card.systems.desc")}</h3>
                </div>
                <div className="mt-2">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home_DesignSystem-AD4izgqpFeADy7fk2aAV2ubeRexmVa.svg"
                    alt="Design Systems"
                    className="w-full"
                  />
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section id="proyectos" style={{ position: "relative", zIndex: 10 }}>
          <ProjectsSection />
        </section>
      </div>

      {/* Contact Section - Full width container with centered content */}
      <section id="contacto" className="py-16" style={{ position: "relative", zIndex: 10 }}>
        <div className="mx-auto max-w-[1000px] px-5 sm:px-6 md:px-8">
          <ContactSectionAlt />
        </div>
      </section>

      {/* Footer - Limitado a 1000px */}
      <div className="w-full px-5 sm:px-6 md:px-8" style={{ position: "relative", zIndex: 10 }}>
        <footer className="mx-auto max-w-[1000px] py-8 border-t border-purple/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="text-xl text-white hover:text-purple transition-colors">
              <span className="font-bold">GONZA</span>
              <span className="font-light">TARNO</span>
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
            <div className="hidden md:flex items-center gap-4">
              <Link href="mailto:gonzalotarnofsky@gmail.com" aria-label="Email">
                <Mail className="w-5 h-5 text-white" />
              </Link>
              <Link
                href="https://linkedin.com/in/gonzalotarnofsky"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </Link>
              <Link
                href="https://behance.net/gonzatarno"
                aria-label="Behance"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BehanceIcon />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}

