"use client"

import Link from "next/link"
import { Linkedin, Mail, ArrowUpRight } from "lucide-react"
import BehanceIcon from "@/components/behance-icon"
import { useLanguage } from "@/contexts/language-context"

export default function SiteFooter() {
  const { t, language } = useLanguage()

  return (
    <footer className="relative bg-bg border-t border-line">
      {/* Big CTA */}
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 py-24 md:py-36">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-dim mb-8 flex items-center gap-3">
          <span className="inline-block w-8 h-px bg-lime" />
          {language === "es" ? "Contacto" : "Get in touch"}
        </div>
        <h2 className="font-display text-[12vw] md:text-[8vw] lg:text-[120px] leading-[0.92] tracking-[-0.04em] font-medium">
          {language === "es" ? (
            <>
              <span className="text-fg-dim">Te leo</span><br />
              cuando <span className="text-lime">quieras.</span>
            </>
          ) : (
            <>
              <span className="text-fg-dim">Always</span><br />
              up for a <span className="text-lime">chat.</span>
            </>
          )}
        </h2>

        <p className="mt-8 text-lg md:text-xl text-fg-dim leading-relaxed max-w-2xl text-pretty">
          {language === "es"
            ? "Hablemos de diseño, IA, design systems o de lo que estés construyendo. Siempre disfruto conocer gente del rubro."
            : "Happy to talk about design, AI, design systems or whatever you're building. Always glad to meet people in the field."}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="mailto:gonzalotarnofsky@gmail.com"
            className="group inline-flex items-center gap-2 px-6 py-3.5 bg-lime text-bg rounded-full text-[15px] font-medium hover:bg-lime-dim transition-colors"
          >
            gonzalotarnofsky@gmail.com
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="https://linkedin.com/in/gonzalotarnofsky"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3.5 text-[15px] text-fg-dim hover:text-fg transition-colors border border-line rounded-full"
          >
            LinkedIn
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-line">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-lime" />
            <span className="text-sm tracking-tight">
              <span className="font-semibold">gonza</span>
              <span className="text-fg-dim">tarno</span>
            </span>
            <span className="text-xs font-mono text-fg-muted ml-2">
              © {new Date().getFullYear()}
            </span>
          </Link>

          <nav className="flex items-center gap-6 text-sm">
            <Link href="/" className="text-fg-dim hover:text-fg transition-colors">{t("nav.home")}</Link>
            <Link href="/proyectos" className="text-fg-dim hover:text-fg transition-colors">{t("nav.projects")}</Link>
            <Link href="/experiencia" className="text-fg-dim hover:text-fg transition-colors">{t("nav.about")}</Link>
            <Link href="/contacto" className="text-fg-dim hover:text-fg transition-colors">{t("nav.contact")}</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="mailto:gonzalotarnofsky@gmail.com" aria-label="Email" className="text-fg-dim hover:text-lime transition-colors">
              <Mail className="w-4 h-4" />
            </Link>
            <Link href="https://linkedin.com/in/gonzalotarnofsky" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-fg-dim hover:text-lime transition-colors">
              <Linkedin className="w-4 h-4" />
            </Link>
            <Link href="https://behance.net/gonzatarno" target="_blank" rel="noopener noreferrer" aria-label="Behance" className="text-fg-dim hover:text-lime transition-colors">
              <BehanceIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
