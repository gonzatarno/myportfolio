"use client"

import { useState, useEffect } from "react"
import MainMenu from "@/components/main-menu"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import LanguageSwitcher from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"
import { usePathname } from "next/navigation"

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()
  const pathname = usePathname()

  // Verificar si estamos en una subpágina de proyecto
  const isProjectSubpage = pathname.includes("/proyectos/") && pathname !== "/proyectos"

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 shadow-lg bg-[#231955]" : "py-6 bg-[#231955]/0"
      }`}
    >
      <div className="w-full px-5 sm:px-6 md:px-8">
        <header className="mx-auto max-w-[1000px] flex justify-between items-center">
          {isProjectSubpage ? (
            // Botón de regreso a proyectos
            <Link href="/proyectos" className="flex items-center text-white hover:text-purple-light transition-colors">
              <ArrowLeft className="mr-2 h-5 w-5" />
              <span>{t("projects.backToProjects") || "Volver a proyectos"}</span>
            </Link>
          ) : (
            // Logo normal
            <Link href="/" className="text-xl text-white hover:text-purple-light transition-colors">
              <span className="font-bold">GONZA</span>
              <span className="text-white font-light">TARNO</span>
            </Link>
          )}

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <MainMenu />
          </div>
        </header>
      </div>
    </div>
  )
}

