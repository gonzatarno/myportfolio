"use client"

import Link from "next/link"
import { Linkedin, Mail } from "lucide-react"
import SiteHeader from "@/components/site-header"
import ContactSectionAlt from "@/components/contact-section-alt"
import { useLanguage } from "@/contexts/language-context"
import BehanceIcon from "@/components/behance-icon"

export default function ContactoPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-[#231955] text-white">
      {/* Header fijo */}
      <SiteHeader />

      {/* Espacio para compensar el header fijo */}
      <div className="pt-24"></div>

      <div className="mx-auto max-w-[1000px] px-5 sm:px-6 md:px-8 py-12">
        {/* Encabezado */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("contact.title")}</h1>
        </div>

        {/* Contact Section */}
        <ContactSectionAlt />
      </div>

      {/* Footer */}
      <div className="w-full px-5 sm:px-6 md:px-8">
        <footer className="mx-auto max-w-[1000px] py-8 border-t border-purple/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="font-bold text-xl hover:text-purple-light transition-colors">
              GONZA<span className="text-purple">TARNO</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-white hover:text-[#ff4d94] transition-colors">
                {t("nav.home")}
              </Link>
              <Link href="/experiencia" className="text-white hover:text-[#ff4d94] transition-colors">
                {t("nav.about")}
              </Link>
              <Link href="/proyectos" className="text-white hover:text-[#ff4d94] transition-colors">
                {t("nav.projects")}
              </Link>
              <Link href="/contacto" className="text-white hover:text-[#ff4d94] transition-colors">
                {t("nav.contact")}
              </Link>
            </nav>
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="mailto:gonzalotarnofsky@gmail.com"
                aria-label="Email"
                className="text-white hover:text-[#ff4d94] transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/gonzalotarnofsky"
                aria-label="LinkedIn"
                className="text-white hover:text-[#ff4d94] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://behance.net/gonzatarno"
                aria-label="Behance"
                className="text-white hover:text-[#ff4d94] transition-colors"
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

