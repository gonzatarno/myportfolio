"use client"

const items = [
  "Product Design",
  "Design Systems",
  "Figma",
  "AI / LLM UX",
  "Prototyping",
  "Next.js",
  "Tailwind",
  "Motion",
  "User Research",
  "Mobile-first",
]

export default function MarqueeStack() {
  const loop = [...items, ...items]
  return (
    <section className="relative py-10 border-y border-line bg-bg-elev/40 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {loop.map((it, i) => (
          <span key={i} className="flex items-center gap-8 px-8 font-mono text-sm text-fg-dim uppercase tracking-[0.15em]">
            {it}
            <span className="text-lime">✦</span>
          </span>
        ))}
      </div>
    </section>
  )
}
