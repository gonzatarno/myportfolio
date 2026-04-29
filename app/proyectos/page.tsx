"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Sparkles } from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { useLanguage } from "@/contexts/language-context"

type Project = {
  href: string
  title: string
  meta: string
  desc: string
  tags: string[]
  image?: string
  external?: boolean
  badge?: { label: string; tone: "live" | "new" | "soon" }
}

export default function ProyectosPage() {
  const graphicRef = useRef<HTMLDivElement>(null)
  const { t, language } = useLanguage()

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#graphic-design") {
      setTimeout(() => graphicRef.current?.scrollIntoView({ behavior: "smooth" }), 400)
    }
  }, [])

  const product: Project[] = [
    {
      href: "/proyectos/tickets",
      title: t("projects.tickets.title"),
      meta: "Botmaker · 2024",
      desc: t("projects.tickets.description"),
      tags: ["Product", "Enterprise"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_Tickets-mvIX3rYcmRZ8lkJb7IlJSS5vO7SEUU.png",
    },
    {
      href: "/proyectos/bots-ia",
      title: t("projects.bots.title"),
      meta: "Botmaker · 2024",
      desc: t("projects.bots.description"),
      tags: ["AI", "Product"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_IA-z8o8mT6hl1blpHkWxKykUrJD4rk8yM.png",
    },
    {
      href: "/proyectos/callbots",
      title: t("projects.callbots.title"),
      meta: "Botmaker · 2023",
      desc: t("projects.callbots.description"),
      tags: ["Voice", "AI"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_Calls-aBKMaHS1PqfdyH9KnfmXBRmpABD6ti.svg",
    },
    {
      href: "/proyectos/donde-vamos",
      title: t("projects.dondevamos.title"),
      meta: "Personal · 2022",
      desc: t("projects.dondevamos.description"),
      tags: ["Mobile", "Concept"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_DondeVamos-QisUgONaAGl7hEV49o0UGVr1gcTg7P.png",
    },
    {
      href: "/proyectos/fast-app",
      title: t("projects.fastapp.title"),
      meta: "UADE · 2021",
      desc: t("projects.fastapp.description"),
      tags: ["AR", "Accessibility"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_FastApp-siVOrZGWPAFSSYesmEOV0aBH5vWLPD.png",
    },
    {
      href: "/proyectos/tierra-iberica",
      title: t("projects.tierraiberica.title"),
      meta: "Freelance · 2022",
      desc: t("projects.tierraiberica.description"),
      tags: ["Web", "E-commerce"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_TI-WERorf4kjKNGvBkBXqux0Lltaej7rV.png",
    },
  ]

  const graphic: Project[] = [
    {
      href: "/proyectos/vinilos",
      title: t("projects.vinilos.title"),
      meta: language === "es" ? "Editorial · 2021" : "Editorial · 2021",
      desc: t("projects.vinilos.description"),
      tags: ["Cover", "Print"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_Vinilo-8Qi3esSdjVoI4gzAFtyPs0OjHDrH1v.png",
    },
    {
      href: "/proyectos/arco",
      title: t("projects.arco.title"),
      meta: language === "es" ? "Conceptual · 2020" : "Conceptual · 2020",
      desc: t("projects.arco.description"),
      tags: ["Concept", "Print"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_arco-KH1pb0bNiFDVzmzDoAUuvVFwI9Ch7n.png",
    },
    {
      href: "/proyectos/videofono",
      title: t("projects.videofono.title"),
      meta: "UADE · 2021",
      desc: t("projects.videofono.description"),
      tags: ["3D", "Cyberpunk"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_videofono-1KCCTFx3XfGJOtp28Qw8w8TvyD0zB9.png",
    },
    {
      href: "/proyectos/philip-dick",
      title: t("projects.philipdick.title"),
      meta: language === "es" ? "Editorial · 2021" : "Editorial · 2021",
      desc: t("projects.philipdick.description"),
      tags: ["Editorial", "Illustration"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_dick-VuilMsLOnH4UKzdUJU4HHEyJv3UdXz.png",
    },
    {
      href: "/proyectos/descifrando-amistades",
      title: t("projects.amistades.title"),
      meta: "UADE · 2020",
      desc: t("projects.amistades.description"),
      tags: ["Concept", "Branding"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_amistades-EIymm8u55escRozi6YOX6AhXAaB0VK.png",
    },
    {
      href: "/proyectos/friends",
      title: t("projects.friends.title"),
      meta: language === "es" ? "Evento · 2019" : "Event · 2019",
      desc: t("projects.friends.description"),
      tags: ["Event", "Branding"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_friends-ihXUAc2yUMYCwdbqqad8v6DsaY05Vn.png",
    },
  ]

  return (
    <main className="relative min-h-screen bg-bg text-fg">
      <SiteHeader />

      {/* HERO */}
      <section className="relative bg-spotlight pt-32 pb-16 md:pt-44 md:pb-20">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-dim mb-8 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-lime" />
            {language === "es" ? "Proyectos" : "Projects"}
          </div>
          <h1 className="font-display text-[12vw] md:text-[8vw] lg:text-[120px] leading-[0.92] tracking-[-0.04em] font-medium max-w-5xl">
            {language === "es" ? <>Lo que <span className="text-fg-dim">construí.</span></> : <>What I've <span className="text-fg-dim">built.</span></>}
          </h1>
        </div>
      </section>

      {/* FEATURED — Finy + Prototipo Botmaker */}
      <section className="relative py-12 md:py-20">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 grid md:grid-cols-2 gap-4 md:gap-6">
          {/* FINY */}
          <Link href="https://www.finyapp.io" target="_blank" rel="noopener noreferrer" className="group relative rounded-[28px] overflow-hidden border border-line bg-gradient-to-br from-lime/10 via-transparent to-transparent hover:border-lime/40 transition-colors">
            <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-lime/15 blur-[120px]" />
            <div className="relative p-8 md:p-10">
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lime text-bg text-[10px] font-mono uppercase tracking-[0.15em]">
                  <Sparkles className="w-3 h-3" /> Live
                </span>
                <ArrowUpRight className="w-5 h-5 text-fg-dim group-hover:text-lime group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h2 className="font-display text-5xl md:text-6xl font-semibold tracking-[-0.04em] leading-[0.95] mb-4">
                Finy<span className="text-lime">.</span>
              </h2>
              <p className="text-fg-dim leading-relaxed text-pretty max-w-md mb-6">
                {language === "es" ? "Asistente financiero con IA. Diseñé y desarrollé la app entera." : "AI finance assistant. I designed and built the whole app."}
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] font-mono uppercase tracking-[0.15em]">
                {["Founder", "Design + Code", "AI UX"].map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full border border-line text-fg-dim">{t}</span>
                ))}
              </div>
            </div>
            <div className="relative px-8 md:px-10 pb-8 md:pb-10">
              <div className="rounded-2xl overflow-hidden border border-line/60">
                <Image src="/finy/4_ia_options.png" alt="Finy" width={1360} height={837} className="w-full h-auto" />
              </div>
            </div>
          </Link>

          {/* PROTOTIPO BOTMAKER */}
          <Link href="/proyectos/prototipo-botmaker" className="group relative rounded-[28px] overflow-hidden border border-line bg-bg-elev hover:border-lime/40 transition-colors flex flex-col">
            <div className="absolute -bottom-32 -left-20 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[120px]" />
            <div className="relative p-8 md:p-10">
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg text-blue-300 text-[10px] font-mono uppercase tracking-[0.15em] border border-blue-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  {language === "es" ? "Interactivo" : "Interactive"}
                </span>
                <ArrowUpRight className="w-5 h-5 text-fg-dim group-hover:text-lime group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h2 className="font-display text-5xl md:text-6xl font-semibold tracking-[-0.04em] leading-[0.95] mb-4">
                {language === "es" ? "Automation Canvas" : "Automation Canvas"}
              </h2>
              <p className="text-fg-dim leading-relaxed text-pretty max-w-md mb-6">
                {language === "es" ? "Prototipo navegable para Botmaker. Agentes de IA, orquestador y canvas de automatizaciones — todo interactivo." : "Navigable prototype for Botmaker. AI agents, orchestrator and automation canvas — all interactive."}
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] font-mono uppercase tracking-[0.15em]">
                {["Prototype", "React Flow", "AI Agents"].map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full border border-line text-fg-dim">{t}</span>
                ))}
              </div>
            </div>
            {/* Pseudo-canvas preview */}
            <div className="relative mt-auto mx-8 md:mx-10 mb-8 md:mb-10 rounded-2xl border border-line/60 bg-bg overflow-hidden h-[260px]">
              <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)", backgroundSize: "20px 20px" }} />
              <div className="absolute top-6 left-6 px-3 py-2 rounded-lg bg-bg-elev border border-line text-xs font-mono">
                <span className="text-lime">●</span> trigger.message
              </div>
              <div className="absolute top-24 left-1/2 -translate-x-1/2 px-3 py-2 rounded-lg bg-bg-elev border border-lime/40 text-xs font-mono">
                <span className="text-lime">◆</span> agent.classify
              </div>
              <div className="absolute bottom-6 right-6 px-3 py-2 rounded-lg bg-bg-elev border border-line text-xs font-mono">
                <span className="text-blue-400">▸</span> integration.sheets
              </div>
              <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                <line x1="20%" y1="22%" x2="50%" y2="38%" stroke="rgba(197,247,60,0.4)" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="50%" y1="50%" x2="85%" y2="78%" stroke="rgba(96,165,250,0.4)" strokeWidth="1" strokeDasharray="3 3" />
              </svg>
              <div className="absolute bottom-3 right-3 text-[10px] font-mono uppercase tracking-[0.2em] text-fg-muted">
                ↗ {language === "es" ? "Click para abrir" : "Click to open"}
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* PRODUCT DESIGN GRID */}
      <section className="relative py-20 md:py-28 border-t border-line">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="flex items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-dim mb-4 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-lime" />
                {t("projects.categories.product")}
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-medium tracking-[-0.03em]">
                {language === "es" ? "Product Design" : "Product Design"}
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {product.map((p) => <ProjectCard key={p.href} p={p} />)}
          </div>
        </div>
      </section>

      {/* GRAPHIC DESIGN GRID */}
      <section ref={graphicRef} id="graphic-design" className="relative py-20 md:py-28 border-t border-line">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="flex items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-dim mb-4 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-lime" />
                {t("projects.categories.graphic")}
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-medium tracking-[-0.03em]">
                {language === "es" ? "Graphic Design" : "Graphic Design"}
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {graphic.map((p) => <ProjectCard key={p.href} p={p} />)}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={p.href} className="group block rounded-2xl overflow-hidden border border-line bg-bg-elev hover:border-lime/40 transition-colors h-full">
        {p.image ? (
          <div className="relative aspect-[4/3] overflow-hidden bg-bg">
            <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-bg/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all">
              <ArrowUpRight className="w-4 h-4 text-lime" />
            </div>
          </div>
        ) : null}
        <div className="p-5">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-muted mb-2">{p.meta}</div>
          <h3 className="font-display text-xl font-medium tracking-tight mb-2">{p.title}</h3>
          <p className="text-sm text-fg-dim leading-relaxed line-clamp-2 mb-4">{p.desc}</p>
          <div className="flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <span key={t} className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-[0.15em] rounded-full border border-line text-fg-dim">{t}</span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
