import SiteHeader from "@/components/site-header"
import Hero from "@/components/hero"
import MarqueeStack from "@/components/marquee-stack"
import FeaturedWork from "@/components/featured-work"
import MoreWork from "@/components/more-work"
import SiteFooter from "@/components/site-footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg text-fg">
      <SiteHeader />
      <Hero />
      <MarqueeStack />
      <FeaturedWork />
      <MoreWork />
      <SiteFooter />
    </main>
  )
}
