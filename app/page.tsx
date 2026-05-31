import Image from "next/image"
import { GiftGrid } from "@/components/GiftGrid"
import { HeroLogo } from "@/components/HeroLogo"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Announcement bar */}
      <div className="bg-[#9c2235] text-[#f9f6f2] py-3 px-4 text-center">
        <p
          className="text-xs font-black tracking-[0.2em] uppercase"
          style={{ fontFamily: "var(--font-circular)" }}
        >
          We are not selling anything, we just do the searching so you don&apos;t have to
        </p>
      </div>

      {/* Hero */}
      <div className="relative max-w-6xl mx-auto px-8 md:px-16 pt-28 pb-20">
        <div className="absolute top-22 right-0 md:-right-2 z-10 hidden sm:block">
          <Image
            src="/sticker.png"
            alt="Because finding the right gift shouldn't be hard"
            width={140}
            height={140}
            style={{ mixBlendMode: "multiply" }}
          />
        </div>
        <HeroLogo />
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <GiftGrid />
      </div>

    </main>
  )
}
