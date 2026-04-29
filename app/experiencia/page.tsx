"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, Sparkles, Layers, Cpu, PenTool } from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { useLanguage } from "@/contexts/language-context"

export default function ExperienciaPage() {
  const { t, language } = useLanguage()

  const now = language === "es" ? "Hoy" : "Now"
  const work = [
    {
      year: `2026 — ${now}`,
      role: language === "es" ? "Lead Product Designer + AI" : "Lead Product Designer + AI",
      company: "Botmaker",
      desc: language === "es"
        ? "Lidero el design system y las experiencias con IA en la plataforma. Diseño copilotos, agentes y flujos generativos para clientes enterprise."
        : "Leading the design system and AI experiences across the platform. Designing copilots, agents and generative flows for enterprise clients.",
    },
    {
      year: "2023 — 2025",
      role: t("experience.work.position1"),
      company: "Botmaker",
      desc: t("experience.work.desc1"),
    },
    { year: "2022 — 2023", role: t("experience.work.position2"), company: "Poncenot Tech Studio", desc: t("experience.work.desc2") },
    { year: "2021 — 2022", role: t("experience.work.position3"), company: "Paradigma", desc: t("experience.work.desc3") },
    { year: "2020", role: t("experience.work.position4"), company: "Infinidad Marketing", desc: t("experience.work.desc4") },
    { year: "2017 — 2021", role: t("experience.work.position5"), company: "Macabi", desc: t("experience.work.desc5") },
  ]

  const education = [
    { period: "2025 — 2026", title: t("experience.education.degree1"), inst: t("experience.education.institution1") },
    { period: "2018 — 2024", title: t("experience.education.degree2"), inst: t("experience.education.institution2") },
    { period: "2023", title: t("experience.education.degree3"), inst: t("experience.education.institution3") },
    { period: "2021", title: t("experience.education.degree4"), inst: t("experience.education.institution4") },
    { period: "2021", title: t("experience.education.degree5"), inst: t("experience.education.institution5") },
    { period: "2011 — 2017", title: t("experience.education.degree6"), inst: t("experience.education.institution6") },
  ]

  const capabilities = [
    {
      icon: Layers,
      title: language === "es" ? "Product Design" : "Product Design",
      desc: language === "es"
        ? "Investigación, prototipado e iteración. Pienso en flujos antes que en pixels."
        : "Research, prototyping & iteration. Flows before pixels.",
    },
    {
      icon: Cpu,
      title: language === "es" ? "AI / LLM UX" : "AI / LLM UX",
      desc: language === "es"
        ? "Diseño experiencias con LLMs: copilotos, agentes y flujos generativos."
        : "I design with LLMs: copilots, agents and generative flows.",
    },
    {
      icon: PenTool,
      title: language === "es" ? "Design Systems" : "Design Systems",
      desc: language === "es"
        ? "Construyo y mantengo sistemas de 5K+ componentes con foco en consistencia."
        : "I build and maintain 5K+ component libraries with consistency in mind.",
    },
  ]

  return (
    <main className="relative min-h-screen bg-bg text-fg">
      <SiteHeader />

      {/* HERO */}
      <section className="relative bg-spotlight pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-lime/8 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-dim mb-10 flex items-center gap-3"
          >
            <span className="inline-block w-8 h-px bg-lime" />
            {language === "es" ? "Sobre mí" : "About me"}
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <h1 className="font-display font-medium text-[14vw] md:text-[10vw] lg:text-[120px] leading-[0.92] tracking-[-0.04em] mb-8">
                <span className="inline-block overflow-hidden align-bottom">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    className="inline-block"
                  >
                    {language === "es" ? "¡Buenas!" : "Hey there!"}
                  </motion.span>
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-lg md:text-xl text-fg-dim leading-relaxed text-pretty max-w-2xl"
              >
                {language === "es" ? (
                  <>
                    Soy Gonza, Product Designer con <span className="text-fg">5+ años</span> diseñando productos digitales.
                    Mi enfoque combina <span className="text-fg">research, system thinking</span> y obsesión por el detalle.
                    Hoy lidero el design system y experiencias de IA en <span className="text-lime">Botmaker</span>, y construyo mis propios productos como <span className="text-lime">Finy</span>.
                  </>
                ) : (
                  <>
                    I'm Gonza, a Product Designer with <span className="text-fg">5+ years</span> shipping digital products.
                    I combine <span className="text-fg">research, system thinking</span> and an obsession with detail.
                    I currently lead the design system and AI experiences at <span className="text-lime">Botmaker</span>, while building my own products like <span className="text-lime">Finy</span>.
                  </>
                )}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="mt-10 flex flex-wrap gap-2"
              >
                {[
                  "Buenos Aires, AR",
                  "Botmaker · Lead Product Designer",
                  "ES · EN",
                ].map((t) => (
                  <span key={t} className="px-3 py-1.5 text-xs font-mono uppercase tracking-[0.15em] rounded-full border border-line text-fg-dim">
                    {t}
                  </span>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden border border-line">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BI7ZMCqn2O88bnlQFUA7PqHfb0Crv4.png"
                  alt="Gonza Tarno"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-dim bg-bg/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-line/60">
                    Gonzalo Tarnofsky
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-lime bg-bg/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-lime/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
                    Open
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 pt-10 border-t border-line"
          >
            <Stat n="5+" label={language === "es" ? "Años de experiencia" : "Years experience"} />
            <Stat n="20+" label={language === "es" ? "Productos lanzados" : "Products shipped"} />
            <Stat n="5K+" label={language === "es" ? "Componentes diseñados" : "Components designed"} />
            <Stat n="2" label={language === "es" ? "Productos propios" : "Own products"} />
          </motion.div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="relative py-24 md:py-32 border-t border-line">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-dim mb-6 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-lime" />
            {language === "es" ? "Qué hago" : "What I do"}
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-medium tracking-[-0.03em] leading-[1.02] mb-16 max-w-3xl">
            {language === "es" ? (
              <>Diseño donde la <span className="text-fg-dim">complejidad</span> se siente simple.</>
            ) : (
              <>Design where <span className="text-fg-dim">complexity</span> feels simple.</>
            )}
          </h2>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-2xl p-7 border border-line bg-bg-elev hover:border-lime/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center mb-6 group-hover:bg-lime group-hover:border-lime transition-colors">
                  <c.icon className="w-4 h-4 text-lime group-hover:text-bg transition-colors" />
                </div>
                <h3 className="font-display text-2xl font-medium tracking-tight mb-3">{c.title}</h3>
                <p className="text-sm text-fg-dim leading-relaxed text-pretty">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE — WORK */}
      <section className="relative py-24 md:py-32 border-t border-line">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-dim mb-6 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-lime" />
                {language === "es" ? "Trayectoria" : "Career"}
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-medium tracking-[-0.03em] leading-[1.02] mb-6">
                {language === "es" ? "Experiencia laboral." : "Work experience."}
              </h2>
              <p className="text-fg-dim text-pretty">
                {language === "es"
                  ? "Una década pasando por agencia, in-house, freelance y producto propio. Cada parada me dio algo distinto."
                  : "A decade across agency, in-house, freelance and my own products. Every stop taught me something different."}
              </p>
            </div>

            <ol className="lg:col-span-8 relative">
              {work.map((j, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative grid grid-cols-12 gap-6 py-8 border-t border-line first:border-t-0 hover:bg-bg-elev/40 transition-colors px-4 -mx-4 rounded-xl"
                >
                  <div className="col-span-12 md:col-span-3 font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted pt-1">
                    {j.year}
                  </div>
                  <div className="col-span-12 md:col-span-9">
                    <div className="flex items-baseline justify-between gap-4 mb-2">
                      <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight">
                        {j.role}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-fg-muted opacity-0 group-hover:opacity-100 group-hover:text-lime group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <div className="text-lime mb-3 text-sm font-mono uppercase tracking-[0.15em]">{j.company}</div>
                    <p className="text-fg-dim leading-relaxed text-pretty max-w-2xl">{j.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* TIMELINE — EDUCATION */}
      <section className="relative py-24 md:py-32 border-t border-line">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-dim mb-6 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-lime" />
                {language === "es" ? "Formación" : "Education"}
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-medium tracking-[-0.03em] leading-[1.02] mb-6">
                {language === "es" ? "Educación." : "Education."}
              </h2>
              <p className="text-fg-dim text-pretty">
                {language === "es"
                  ? "Sigo aprendiendo. UX, IA, código — el aprendizaje no se termina."
                  : "Always learning. UX, AI, code — the journey doesn't end."}
              </p>
            </div>

            <ol className="lg:col-span-8">
              {education.map((e, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className="grid grid-cols-12 gap-6 py-7 border-t border-line first:border-t-0"
                >
                  <div className="col-span-12 md:col-span-3 font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted pt-1">
                    {e.period}
                  </div>
                  <div className="col-span-12 md:col-span-9">
                    <h3 className="font-display text-xl md:text-2xl font-medium tracking-tight mb-1">{e.title}</h3>
                    <div className="text-fg-dim text-sm">{e.inst}</div>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
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
