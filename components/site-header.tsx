"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import LanguageSwitcher from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"
import { usePathname } from "next/navigation"
import MainMenu from "@/components/main-menu"

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()
  const pathname = usePathname()
  const isProjectSubpage = pathname.includes("/proyectos/") && pathname !== "/proyectos"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 backdrop-blur-xl bg-bg/70 border-b border-line/40" : "py-5 bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <header className="flex justify-between items-center">
          {isProjectSubpage ? (
            <Link href="/proyectos" className="flex items-center text-fg hover:text-lime transition-colors text-sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span>{t("projects.backToProjects") || "Volver a proyectos"}</span>
            </Link>
          ) : (
            <Link href="/" className="group flex items-center gap-2.5">
              <span className="relative inline-block w-2.5 h-2.5 rounded-full bg-lime">
                <span className="absolute inset-0 rounded-full bg-lime animate-ping opacity-60" />
              </span>
              <span className="text-[15px] tracking-tight">
                <span className="font-semibold">gonza</span>
                <span className="text-fg-dim">tarno</span>
              </span>
            </Link>
          )}

          <nav className="hidden md:flex items-center gap-1 text-sm">
            <Link href="/" className="px-3 py-2 text-fg-dim hover:text-fg transition-colors">
              {t("nav.home")}
            </Link>
            <Link href="/proyectos" className="px-3 py-2 text-fg-dim hover:text-fg transition-colors">
              {t("nav.projects")}
            </Link>
            <Link href="/experiencia" className="px-3 py-2 text-fg-dim hover:text-fg transition-colors">
              {t("nav.about")}
            </Link>
            <Link href="/contacto" className="px-3 py-2 text-fg-dim hover:text-fg transition-colors">
              {t("nav.contact")}
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Link
              href="/contacto"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-lime text-bg rounded-full hover:bg-lime-dim transition-colors"
            >
              Hablemos
              <span className="text-base leading-none">→</span>
            </Link>
            <div className="md:hidden">
              <MainMenu />
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}
