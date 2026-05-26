import Image from "next/image"
import { GiftGrid } from "@/components/GiftGrid"
import { SparklesText } from "@/components/ui/sparkles-text"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="border-b border-border py-4 px-6 flex justify-center">
        <Image
          src="/logo.png"
          alt="The Gift Forum"
          width={320}
          height={80}
          priority
          className="h-14 w-auto"
          style={{ mixBlendMode: "multiply" }}
        />
      </nav>

      {/* Hero */}
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-12 text-center">
        <p className="text-xs font-bold tracking-[0.25em] uppercase text-foreground mb-2">
          You Need
        </p>
        <SparklesText
          text="Gift Ideas"
          colors={{ first: "#9c2235", second: "#9c2235" }}
          sparklesCount={12}
          className="text-6xl md:text-8xl leading-none mb-1 justify-center flex"
          style={{ fontFamily: "var(--font-provicali)", color: "#9c2235", fontWeight: "normal" }}
        />
        <p
          className="text-3xl md:text-4xl"
          style={{ fontFamily: "var(--font-birds)", color: "#262626" }}
        >
          for every person &amp; every budget
        </p>

        <div className="mt-8 inline-flex items-center gap-2 border border-foreground rounded-full px-6 py-2">
          <span className="text-base">✦</span>
          <span className="text-xs font-bold tracking-[0.2em] uppercase">
            The Gift Forum Is Here For You
          </span>
          <span className="text-base">✦</span>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <GiftGrid />
      </div>

      <footer className="border-t border-border py-6 text-center text-xs tracking-wide text-muted-foreground">
        Some links are affiliate links — I may earn a small commission at no extra cost to you.
      </footer>
    </main>
  )
}
