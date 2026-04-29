"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

type Item = {
  title: string
  meta: string
  tags: string[]
  href: string
  image: string
  accent?: string
}

export default function MoreWork() {
  const { language } = useLanguage()

  const items: Item[] = [
    {
      title: language === "es" ? "Tickets" : "Tickets",
      meta: "Botmaker · 2024",
      tags: ["Product", "Enterprise"],
      href: "/proyectos/tickets",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_Tickets-mvIX3rYcmRZ8lkJb7IlJSS5vO7SEUU.png",
    },
    {
      title: language === "es" ? "Bots con IA" : "AI Bots",
      meta: "Botmaker · 2024",
      tags: ["AI", "Product"],
      href: "/proyectos/bots-ia",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_IA-z8o8mT6hl1blpHkWxKykUrJD4rk8yM.png",
    },
    {
      title: "Callbots",
      meta: "Botmaker · 2023",
      tags: ["Voice", "AI"],
      href: "/proyectos/callbots",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_Calls-aBKMaHS1PqfdyH9KnfmXBRmpABD6ti.svg",
    },
    {
      title: "Tierra Ibérica",
      meta: language === "es" ? "Branding · 2022" : "Branding · 2022",
      tags: ["Brand", "Editorial"],
      href: "/proyectos/tierra-iberica",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_TI-WERorf4kjKNGvBkBXqux0Lltaej7rV.png",
    },
    {
      title: "Philip K. Dick",
      meta: language === "es" ? "Editorial · 2021" : "Editorial · 2021",
      tags: ["Editorial", "Illustration"],
      href: "/proyectos/philip-dick",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_dick-VuilMsLOnH4UKzdUJU4HHEyJv3UdXz.png",
    },
    {
      title: "Vinilos",
      meta: language === "es" ? "Diseño · 2021" : "Design · 2021",
      tags: ["Cover", "Print"],
      href: "/proyectos/vinilos",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_Vinilo-8Qi3esSdjVoI4gzAFtyPs0OjHDrH1v.png",
    },
  ]

  return (
    <section className="relative py-24 md:py-36 border-t border-line">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="flex items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-dim mb-4 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-lime" />
              {language === "es" ? "Más trabajo" : "More work"}
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.02] max-w-2xl">
              {language === "es"
                ? "Selección de proyectos."
                : "Selected projects."}
            </h2>
          </div>
          <Link
            href="/proyectos"
            className="group hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm text-fg-dim hover:text-fg border border-line rounded-full transition-colors"
          >
            {language === "es" ? "Ver todos" : "View all"}
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {items.map((it) => (
            <Card key={it.href} item={it} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Card({ item }: { item: Item }) {
  return (
    <Link
      href={item.href}
      className="group relative block rounded-2xl overflow-hidden border border-line bg-bg-elev hover:border-lime/40 transition-colors"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-bg">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-bg/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all">
          <ArrowUpRight className="w-4 h-4 text-lime" />
        </div>
      </div>
      <div className="p-5">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-muted mb-2">
          {item.meta}
        </div>
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-xl font-medium tracking-tight">{item.title}</h3>
          <div className="flex flex-wrap gap-1.5 justify-end">
            {item.tags.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-[0.15em] rounded-full border border-line text-fg-dim"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
