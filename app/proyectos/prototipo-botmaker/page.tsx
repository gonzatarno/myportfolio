"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Maximize2, Minimize2, Workflow, Bot, GitBranch } from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { useLanguage } from "@/contexts/language-context"

export default function PrototipoBotmakerPage() {
  const { language } = useLanguage()
  const [fullscreen, setFullscreen] = useState(false)

  return (
    <main className="relative min-h-screen bg-bg text-fg">
      <SiteHeader />

      {/* HERO */}
      <section className="relative bg-spotlight pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 text-sm text-fg-dim hover:text-lime transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            {language === "es" ? "Volver a proyectos" : "Back to projects"}
          </Link>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-8">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-dim mb-6 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-lime" />
                Botmaker · 2025 · {language === "es" ? "Prototipo navegable" : "Navigable prototype"}
              </div>
              <h1 className="font-display text-5xl md:text-7xl lg:text-[88px] font-medium tracking-[-0.04em] leading-[0.95] mb-6">
                {language === "es" ? <>Automation <span className="text-lime">Canvas</span>.</> : <>Automation <span className="text-lime">Canvas</span>.</>}
              </h1>
              <p className="text-lg md:text-xl text-fg-dim leading-relaxed text-pretty max-w-2xl">
                {language === "es"
                  ? "Un prototipo navegable de la próxima gen de Botmaker: agentes de IA, orquestador, automatizaciones visuales y kanban — todo en un solo lugar."
                  : "A navigable prototype for Botmaker's next gen: AI agents, an orchestrator, visual automations and a kanban — all in one place."}
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end">
              {["React", "React Flow", "TypeScript", "AI Agents"].map((t) => (
                <span key={t} className="px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.15em] rounded-full border border-line text-fg-dim">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IFRAME */}
      <section className="relative pb-12 md:pb-16">
        <div className={fullscreen ? "" : "mx-auto max-w-[1440px] px-5 sm:px-8"}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={`relative ${fullscreen ? "fixed inset-0 z-[60] bg-bg" : "rounded-2xl border border-line bg-bg-elev overflow-hidden"}`}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between gap-4 px-4 md:px-6 py-3 border-b border-line bg-bg/80 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-lime" />
                <span className="ml-3 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-dim">
                  prototipo.botmaker.com
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/prototipo-botmaker/index.html?path=/agente/mcps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-xs text-fg-dim hover:text-lime border border-line rounded-full transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  {language === "es" ? "Abrir en pestaña" : "Open in tab"}
                </a>
                <button
                  onClick={() => setFullscreen(!fullscreen)}
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-xs text-fg-dim hover:text-lime border border-line rounded-full transition-colors"
                >
                  {fullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                  {fullscreen
                    ? (language === "es" ? "Salir" : "Exit")
                    : (language === "es" ? "Pantalla completa" : "Fullscreen")}
                </button>
              </div>
            </div>

            <iframe
              src="/prototipo-botmaker/index.html?path=/agente/mcps&embed=1"
              title="Botmaker Agents — MCPs"
              className={`w-full block bg-white ${fullscreen ? "h-[calc(100vh-49px)]" : "h-[700px] md:h-[820px]"}`}
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
            />
          </motion.div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="relative py-20 md:py-28 border-t border-line">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-dim mb-6 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-lime" />
            {language === "es" ? "Qué incluye" : "Highlights"}
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.02] mb-16 max-w-3xl">
            {language === "es" ? "Tres vistas, un solo flujo." : "Three views, one flow."}
          </h2>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <Highlight
              icon={Bot}
              title={language === "es" ? "Agentes con IA" : "AI Agents"}
              desc={language === "es"
                ? "Agentes que clasifican, escriben y orquestan flujos. Cada uno con prompt, herramientas y memoria."
                : "Agents that classify, write and orchestrate flows. Each with prompt, tools and memory."}
            />
            <Highlight
              icon={Workflow}
              title={language === "es" ? "Canvas de automatización" : "Automation canvas"}
              desc={language === "es"
                ? "Constructor visual con instrucciones, condiciones, loops e integraciones — drag & drop sobre React Flow."
                : "Visual builder with instructions, conditions, loops and integrations — drag & drop on React Flow."}
            />
            <Highlight
              icon={GitBranch}
              title={language === "es" ? "Orquestador" : "Orchestrator"}
              desc={language === "es"
                ? "Coordina múltiples agentes y maneja transferencias entre ellos según el contexto del usuario."
                : "Coordinates multiple agents and manages handoffs between them based on user context."}
            />
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="relative py-20 md:py-28 border-t border-line">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-dim mb-6 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-lime" />
                {language === "es" ? "Contexto" : "Context"}
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-medium tracking-[-0.03em]">
                {language === "es" ? "Por qué este prototipo." : "Why this prototype."}
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-fg-dim leading-relaxed text-pretty">
              <p>
                {language === "es"
                  ? "Botmaker es la plataforma conversacional con IA que uso día a día. Pero el norte hacia donde la industria empuja —agentes autónomos, orquestación, automatizaciones visuales— no estaba mapeado en el producto."
                  : "Botmaker is the conversational AI platform I use every day. But the direction the industry is heading — autonomous agents, orchestration, visual automation — wasn't mapped in the product yet."}
              </p>
              <p>
                {language === "es"
                  ? "Diseñé y construí este prototipo navegable como punto de partida para discutir con product, ingeniería y stakeholders. No son mockups: es código real, interactuable, que funciona en el browser."
                  : "I designed and built this navigable prototype as a starting point to discuss with product, engineering and stakeholders. These aren't mockups: it's real, interactive code running in the browser."}
              </p>
              <p>
                {language === "es"
                  ? "El prototipo cubre tres áreas: el hub de agentes con su detalle, el canvas de automatización con nodos drag & drop, y el orquestador que coordina múltiples agents."
                  : "The prototype covers three areas: the agents hub with detail views, the automation canvas with drag & drop nodes, and the orchestrator that coordinates multiple agents."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

function Highlight({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="group relative rounded-2xl p-7 border border-line bg-bg-elev hover:border-lime/40 transition-colors">
      <div className="w-10 h-10 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center mb-6 group-hover:bg-lime group-hover:border-lime transition-colors">
        <Icon className="w-4 h-4 text-lime group-hover:text-bg transition-colors" />
      </div>
      <h3 className="font-display text-2xl font-medium tracking-tight mb-3">{title}</h3>
      <p className="text-sm text-fg-dim leading-relaxed text-pretty">{desc}</p>
    </div>
  )
}
