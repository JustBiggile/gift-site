"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import type { Gift } from "@/data/gifts"

export function GiftCard({ gift }: { gift: Gift }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      layout
      className="bg-white border border-[#e0d8d0] overflow-hidden flex flex-col group"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <motion.img
          src={gift.image}
          alt={gift.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.35 }}
        />
        <div className="absolute top-3 right-3 bg-[#f9f6f2] px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase text-[#262626]">
          {gift.price}
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#9c2235] mb-1">
          {gift.category}
        </p>
        <h3 className="text-lg text-[#262626] leading-snug mb-2" style={{ fontFamily: "var(--font-provicali)" }}>
          {gift.name}
        </h3>
        <p className="text-sm text-[#7a6f6a] leading-relaxed flex-1">{gift.description}</p>
        <div className="flex flex-wrap gap-1 mt-3 mb-4">
          {gift.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-bold tracking-widest uppercase text-[#7a6f6a] bg-[#f9f6f2] px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>
        <a
          href={gift.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#9c2235] text-[#f9f6f2] text-xs font-bold tracking-widest uppercase transition-opacity hover:opacity-90"
        >
          Shop This Gift <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </motion.div>
  )
}
