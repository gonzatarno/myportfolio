"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Magnetic from "@/components/magnetic"

const wordsEs = ["Hola,", "soy", "Gonza"]
const wordsEn = ["Hi,", "I'm", "Gonza"]

export default function Hero() {
  const { language, t } = useLanguage()
  const words = language === "es" ? wordsEs : wordsEn

  const scrollToWork = () => {
    const el = document.getElementById("work")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative bg-spotlight pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-lime/10 blur-[120px]" />
        <div className="absolute bottom-1/4 -left-32 w-72 h-72 rounded-full bg-lime/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-10 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-dim"
        >
          <span className="inline-block w-8 h-px bg-lime" />
          <span>Product Designer · Buenos Aires</span>
          <span className="inline-flex items-center gap-1.5 ml-2 px-2 py-1 rounded-full bg-lime/10 text-lime border border-lime/20">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
            {language === "es" ? "Hablemos" : "Let's chat"}
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-display font-medium text-[14vw] md:text-[10vw] lg:text-[148px] leading-[0.92] tracking-[-0.04em] mb-8">
          {words.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.18em]">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.08 }}
                className="inline-block"
              >
                {w}
              </motion.span>
            </span>
          ))}
          <span className="inline-block overflow-hidden align-bottom">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.36 }}
              className="inline-block text-lime"
            >
              .
            </motion.span>
          </span>
        </h1>

        <div className="grid md:grid-cols-12 gap-8 items-end">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 text-lg md:text-xl text-fg-dim leading-relaxed text-pretty max-w-xl"
          >
            {language === "es"
              ? "Licenciado en Diseño Multimedia e Interacción con 4 años de experiencia como Product Designer. Convierto ideas complejas en experiencias humanas e intuitivas."
              : "Multimedia & Interaction Design grad with 4 years of experience as a Product Designer. I turn complex ideas into human, intuitive experiences."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 flex flex-col sm:flex-row md:flex-col md:items-end gap-3"
          >
            <Magnetic strength={0.25}>
              <button
                onClick={scrollToWork}
                className="group inline-flex items-center gap-3 px-6 py-3.5 bg-lime text-bg rounded-full text-[15px] font-medium hover:bg-lime-dim transition-colors"
              >
                Ver mi trabajo
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>
            </Magnetic>
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-2 px-6 py-3.5 text-[15px] text-fg-dim hover:text-fg transition-colors"
            >
              {t("contact.title") || "Conectémonos"}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 pt-10 border-t border-line"
        >
          <Stat n="5+" label={language === "es" ? "Años de experiencia" : "Years experience"} />
          <Stat n="20+" label={language === "es" ? "Productos lanzados" : "Products shipped"} />
          <Stat n="5K+" label={language === "es" ? "Componentes diseñados" : "Components designed"} />
          <Stat n="∞" label={language === "es" ? "Café consumido" : "Coffee consumed"} />
        </motion.div>
      </div>
    </section>
  )
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-4xl md:text-5xl font-medium tracking-tight">{n}</div>
      <div className="mt-2 text-xs font-mono uppercase tracking-[0.15em] text-fg-muted">{label}</div>
    </div>
  )
}
