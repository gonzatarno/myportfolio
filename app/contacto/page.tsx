"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Copy, Mail, Linkedin, Check, MessageSquare, Coffee, Briefcase } from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import BehanceIcon from "@/components/behance-icon"
import { useLanguage } from "@/contexts/language-context"

const EMAIL = "gonzalotarnofsky@gmail.com"
const LINKEDIN = "https://www.linkedin.com/in/gonzalotarnofsky/"
const BEHANCE = "https://www.behance.net/gonzatarno"

export default function ContactoPage() {
  const { language } = useLanguage()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  const reasons = [
    {
      icon: Briefcase,
      title: language === "es" ? "Una oportunidad" : "An opportunity",
      desc: language === "es"
        ? "Si tu equipo busca un Lead Product Designer con foco en IA o design systems, contame."
        : "If your team is looking for a Lead Product Designer with AI or design systems focus, tell me.",
    },
    {
      icon: MessageSquare,
      title: language === "es" ? "Un proyecto" : "A project",
      desc: language === "es"
        ? "Tenés algo entre manos, querés rebotar ideas o necesitás una segunda mirada. Soy todo oídos."
        : "You have something brewing, want to bounce ideas or need a second pair of eyes. I'm all ears.",
    },
    {
      icon: Coffee,
      title: language === "es" ? "Un café" : "A coffee",
      desc: language === "es"
        ? "Charlar de diseño, producto, IA, lo que sea. Networking del bueno, sin agenda."
        : "Talk about design, product, AI, anything. Good networking, no agenda.",
    },
  ]

  return (
    <main className="relative min-h-screen bg-bg text-fg">
      <SiteHeader />

      {/* HERO */}
      <section className="relative bg-spotlight pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-lime/8 blur-[140px]" />
          <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-lime/5 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-dim mb-10 flex items-center gap-3"
          >
            <span className="inline-block w-8 h-px bg-lime" />
            {language === "es" ? "Contacto" : "Get in touch"}
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <h1 className="font-display font-medium text-[14vw] md:text-[10vw] lg:text-[140px] leading-[0.92] tracking-[-0.04em] mb-8">
                <span className="inline-block overflow-hidden align-bottom">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    className="inline-block"
                  >
                    {language === "es" ? "Hablemos" : "Let's talk"}
                  </motion.span>
                </span>
                <span className="inline-block overflow-hidden align-bottom">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="inline-block text-lime"
                  >
                    .
                  </motion.span>
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="text-lg md:text-xl text-fg-dim leading-relaxed text-pretty max-w-xl"
              >
                {language === "es"
                  ? "Mi puerta siempre está abierta. Escribime por el medio que más te guste — respondo rápido."
                  : "My door is always open. Reach out through whatever channel you prefer — I'm fast at replying."}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mt-10 flex flex-wrap gap-2"
              >
                {[
                  language === "es" ? "Respondo en menos de 24h" : "I reply within 24h",
                  "Buenos Aires · GMT-3",
                  "ES · EN",
                ].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 text-xs font-mono uppercase tracking-[0.15em] rounded-full border border-line text-fg-dim">
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative flex justify-center"
            >
              <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[28px] overflow-hidden border border-line bg-gradient-to-br from-lime/8 via-transparent to-transparent">
                <Image
                  src="/images/gonza-toy-figure.png"
                  alt="Gonza Funko"
                  fill
                  className="object-contain p-8"
                  priority
                />
                <div className="absolute top-5 left-5 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-lime bg-bg/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-lime/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
                    {language === "es" ? "En línea" : "Online"}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CHANNELS */}
      <section className="relative py-16 md:py-24 border-t border-line">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-dim mb-6 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-lime" />
            {language === "es" ? "Canales" : "Channels"}
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.02] mb-12 max-w-3xl">
            {language === "es" ? "Elegí tu favorito." : "Pick your favorite."}
          </h2>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {/* Email */}
            <button
              type="button"
              onClick={copyEmail}
              className="group relative text-left rounded-2xl p-7 border border-line bg-bg-elev hover:border-lime/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center mb-6 group-hover:bg-lime group-hover:border-lime transition-colors">
                <Mail className="w-4 h-4 text-lime group-hover:text-bg transition-colors" />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-muted mb-2">Email</div>
              <h3 className="font-display text-lg md:text-xl font-medium tracking-tight mb-3 truncate">
                {EMAIL}
              </h3>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.15em] text-fg-dim group-hover:text-lime transition-colors">
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    {language === "es" ? "Copiado" : "Copied"}
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    {language === "es" ? "Copiar" : "Copy"}
                  </>
                )}
              </div>
            </button>

            {/* LinkedIn */}
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl p-7 border border-line bg-bg-elev hover:border-lime/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center mb-6 group-hover:bg-lime group-hover:border-lime transition-colors">
                <Linkedin className="w-4 h-4 text-lime group-hover:text-bg transition-colors" />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-muted mb-2">LinkedIn</div>
              <h3 className="font-display text-lg md:text-xl font-medium tracking-tight mb-3 truncate">
                /gonzalotarnofsky
              </h3>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.15em] text-fg-dim group-hover:text-lime transition-colors">
                {language === "es" ? "Conectar" : "Connect"} →
              </div>
            </a>

            {/* Behance */}
            <a
              href={BEHANCE}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl p-7 border border-line bg-bg-elev hover:border-lime/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center mb-6 group-hover:bg-lime group-hover:border-lime transition-colors">
                <BehanceIcon className="w-4 h-4 text-lime group-hover:text-bg transition-colors" />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-muted mb-2">Behance</div>
              <h3 className="font-display text-lg md:text-xl font-medium tracking-tight mb-3 truncate">
                /gonzatarno
              </h3>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.15em] text-fg-dim group-hover:text-lime transition-colors">
                {language === "es" ? "Ver portfolio gráfico" : "View graphic portfolio"} →
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* WHY REACH OUT */}
      <section className="relative py-20 md:py-28 border-t border-line">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-dim mb-6 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-lime" />
            {language === "es" ? "De qué hablar" : "What about"}
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.02] mb-16 max-w-3xl">
            {language === "es" ? (
              <>Cualquier excusa <span className="text-fg-dim">es buena.</span></>
            ) : (
              <>Any excuse <span className="text-fg-dim">works.</span></>
            )}
          </h2>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-2xl p-7 border border-line bg-bg-elev hover:border-lime/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center mb-6 group-hover:bg-lime group-hover:border-lime transition-colors">
                  <r.icon className="w-4 h-4 text-lime group-hover:text-bg transition-colors" />
                </div>
                <h3 className="font-display text-2xl font-medium tracking-tight mb-3">{r.title}</h3>
                <p className="text-sm text-fg-dim leading-relaxed text-pretty">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
