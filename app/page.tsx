import Image from "next/image"
import { GiftGrid } from "@/components/GiftGrid"
import { HeroLogo } from "@/components/HeroLogo"

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
          <Image
            src="/sticker.png"
            alt="Because finding the right gift shouldn't be hard"
            width={180}
            height={180}
            style={{ mixBlendMode: "multiply" }}
          />
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
