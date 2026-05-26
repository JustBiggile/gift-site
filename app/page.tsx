import { GiftGrid } from "@/components/GiftGrid"
import { HeroLogo } from "@/components/HeroLogo"

function StarburstBadge() {
  return (
    <div className="relative w-36 h-36 flex items-center justify-center">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <polygon
          points="50,2 60,12 74,8 78,22 92,26 89,40 98,50 89,60 92,74 78,78 74,92 60,88 50,98 40,88 26,92 22,78 8,74 11,60 2,50 11,40 8,26 22,22 26,8 40,12"
          fill="#f2ede6"
          stroke="#c4a882"
          strokeWidth="0.5"
        />
      </svg>
      <p
        className="relative z-10 text-center text-[9px] uppercase text-[#9c2235] leading-tight px-5 tracking-wide"
        style={{ fontFamily: "var(--font-provicali)" }}
      >
        Because finding the right gift shouldn&apos;t be hard
      </p>
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Announcement bar */}
      <div className="bg-[#9c2235] text-[#f9f6f2] py-3 px-4 text-center">
        <p
          className="text-xs font-bold tracking-[0.2em] uppercase"
          style={{ fontFamily: "var(--font-circular)" }}
        >
          We do the searching so you don&apos;t have to!
        </p>
      </div>

      {/* Hero */}
      <div className="relative max-w-6xl mx-auto px-8 md:px-16 pt-40 pb-32">
        <div className="absolute top-40 right-4 md:right-10 z-10">
          <StarburstBadge />
        </div>
        <HeroLogo />
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
