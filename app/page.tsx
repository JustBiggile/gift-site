import { GiftGrid } from "@/components/GiftGrid"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="border-b border-border py-4 px-6">
        <p className="text-center text-xs font-bold tracking-[0.2em] uppercase text-foreground">
          The Gift Forum
        </p>
      </nav>

      {/* Hero */}
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-12 text-center">
        <p className="text-xs font-bold tracking-[0.25em] uppercase text-foreground mb-2">
          You Need
        </p>
        <h1
          className="text-6xl md:text-8xl leading-none mb-1"
          style={{ fontFamily: "var(--font-provicali)", color: "#9c2235" }}
        >
          Gift Ideas
        </h1>
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
