"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { GiftCard } from "@/components/GiftCard"
import { categories, gifts } from "@/data/gifts"

export function GiftGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered = gifts.filter((gift) => {
    return (
      activeCategory === "All" ||
      gift.category === activeCategory ||
      (activeCategory.startsWith("Under") && {
        "Under $25": 25,
        "Under $50": 50,
      }[activeCategory]! >= parseInt(gift.price.replace("$", "")))
  )})

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 justify-center items-end">
        {categories.map((cat) => (
          <div key={cat} className="flex flex-col items-center gap-0.5">
            <span
              className="text-[#9c2235] text-base leading-none transition-opacity duration-200"
              style={{ opacity: activeCategory === cat ? 1 : 0 }}
            >
              ★
            </span>
            <motion.button
              onClick={() => setActiveCategory(cat)}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border transition-colors ${
                activeCategory === cat
                  ? "bg-[#9c2235] text-[#f9f6f2] border-[#9c2235]"
                  : "bg-transparent text-[#262626] border-[#262626] hover:bg-[#262626]/5"
              }`}
            >
              {cat}
            </motion.button>
          </div>
        ))}
      </div>

      {filtered.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-muted-foreground py-16"
        >
          No gifts found. Try a different search or category.
        </motion.p>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filtered.map((gift) => (
              <GiftCard key={gift.id} gift={gift} />
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  )
}
