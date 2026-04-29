"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight, Sparkles } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export default function FeaturedWork() {
  const { language } = useLanguage()

  return (
    <section id="work" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        {/* Section header */}
        <div className="flex items-end justify-between mb-16 md:mb-24 gap-6">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-dim mb-4 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-lime" />
              {language === "es" ? "Trabajo destacado" : "Featured work"}
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-medium tracking-[-0.03em] leading-[1.02] max-w-3xl">
              {language === "es" ? (
                <>Productos en los que <span className="text-fg-dim">creo</span>.</>
              ) : (
                <>Products I <span className="text-fg-dim">believe in</span>.</>
              )}
            </h2>
          </div>
        </div>

        {/* Finy - Hero case */}
        <FinyCase language={language} />

        {/* Botmaker + FitCoach (2-up) */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <BotmakerCase language={language} />
          <FitCoachCase language={language} />
        </div>
      </div>
    </section>
  )
}

function FinyCase({ language }: { language: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60])
  const y2 = useTransform(scrollYProgress, [0, 1], [120, -40])
  const y3 = useTransform(scrollYProgress, [0, 1], [40, -100])

  return (
    <div
      ref={ref}
      className="relative rounded-[28px] overflow-hidden border border-line bg-gradient-to-br from-lime/15 via-lime/5 to-transparent"
    >
      {/* Lime ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-lime/20 blur-[140px]" />
        <div className="absolute -bottom-32 -left-20 w-[400px] h-[400px] rounded-full bg-lime/10 blur-[120px]" />
      </div>

      <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-12 p-8 md:p-12 lg:p-16 items-center">
        {/* Copy */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lime text-bg text-xs font-mono uppercase tracking-[0.15em]">
                <Sparkles className="w-3 h-3" />
                Live
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-dim">
                2025 · Founder · Design + Code
              </span>
            </div>
            <h3 className="font-display text-6xl md:text-7xl font-semibold tracking-[-0.04em] leading-[0.95] mb-6">
              Finy<span className="text-lime">.</span>
            </h3>
            <p className="text-lg text-fg-dim leading-relaxed max-w-md mb-6 text-pretty">
              {language === "es"
                ? "Tu asistente financiero con IA. Cargás un audio, foto o texto y Finy entiende, categoriza y suma a tu flujo en segundos. Diseñé y desarrollé la app entera."
                : "Your AI-powered finance assistant. Drop a voice note, image or text and Finy parses, categorizes and adds it to your cashflow. I designed and built the whole app."}
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono uppercase tracking-[0.15em]">
              {["Product Design", "Mobile UX", "AI UX", "Next.js", "Capacitor"].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-full border border-line text-fg-dim">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.finyapp.io"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-3 bg-fg text-bg rounded-full text-sm font-medium hover:bg-lime transition-colors"
            >
              {language === "es" ? "Visitar Finy" : "Visit Finy"}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <span className="text-xs font-mono text-fg-muted">finyapp.io</span>
          </div>
        </div>

        {/* Mockup principal */}
        <motion.div
          style={{ y: y2 }}
          className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-line/60 shadow-2xl shadow-black/40 max-w-[640px] mx-auto lg:max-w-none"
        >
          <Image
            src="/finy/4_ia_options.png"
            alt="Finy — modos de carga con IA"
            width={1360}
            height={837}
            className="w-full h-auto block"
            priority
          />
        </motion.div>
      </div>

      {/* Inline metrics */}
      <div className="relative grid grid-cols-3 border-t border-line/50 divide-x divide-line/50">
        <Metric value="100%" label={language === "es" ? "Diseñado y construido" : "Designed & built"} />
        <Metric value="3" label={language === "es" ? "Modos de carga IA" : "AI input modes"} />
        <Metric value="∞" label={language === "es" ? "Espacios compartidos" : "Shared spaces"} />
      </div>
    </div>
  )
}


function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-6 py-6 md:py-8">
      <div className="font-display text-3xl md:text-4xl font-medium tracking-tight">{value}</div>
      <div className="mt-1 text-[11px] font-mono uppercase tracking-[0.15em] text-fg-muted">{label}</div>
    </div>
  )
}

function BotmakerCase({ language }: { language: string }) {
  return (
    <a
      href="/proyectos#botmaker"
      className="group relative rounded-[28px] overflow-hidden border border-line bg-bg-elev hover:border-lime/40 transition-colors min-h-[420px] flex flex-col"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-60" />
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-blue-500/15 blur-[100px]" />

      <div className="relative p-8 md:p-10 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-auto">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-dim">
            2023 — {language === "es" ? "Hoy" : "Now"} · Lead Product Designer + AI
          </span>
          <ArrowUpRight className="w-5 h-5 text-fg-dim group-hover:text-lime group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
        </div>

        <div className="mt-16">
          <h3 className="font-display text-4xl md:text-5xl font-medium tracking-[-0.03em] leading-[0.95] mb-4">
            Botmaker
          </h3>
          <p className="text-fg-dim leading-relaxed max-w-md text-pretty">
            {language === "es"
              ? "Lidero el design system y experiencias de IA para una plataforma conversacional usada por miles de empresas en LATAM."
              : "Leading the design system and AI experiences for a conversational platform used by thousands of companies across LATAM."}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2 text-xs font-mono uppercase tracking-[0.15em]">
          {["Design System", "AI", "Enterprise", "5K+ comps"].map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-full border border-line text-fg-dim">
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

function FitCoachCase({ language }: { language: string }) {
  return (
    <div className="relative rounded-[28px] overflow-hidden border border-line bg-bg-elev min-h-[420px] flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-60" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-orange-500/15 blur-[100px]" />

      <div className="relative p-8 md:p-10 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-auto">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-dim">
            2026 · {language === "es" ? "En desarrollo" : "In development"}
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg text-orange-300 text-[10px] font-mono uppercase tracking-[0.15em] border border-orange-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            {language === "es" ? "Próximamente" : "Coming soon"}
          </span>
        </div>

        <div className="mt-16">
          <h3 className="font-display text-4xl md:text-5xl font-medium tracking-[-0.03em] leading-[0.95] mb-4">
            FitCoach
          </h3>
          <p className="text-fg-dim leading-relaxed max-w-md text-pretty">
            {language === "es"
              ? "Tu personal trainer con IA. Genera planes de entrenamiento adaptados al instante, conversa con vos y ajusta sobre la marcha."
              : "Your AI personal trainer. Generates workout plans on the fly, chats with you, and adapts as you go."}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2 text-xs font-mono uppercase tracking-[0.15em]">
          {["AI Coach", "React Native", "Expo", "Claude + Supabase"].map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-full border border-line text-fg-dim">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
