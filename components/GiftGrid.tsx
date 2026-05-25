"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { GiftCard } from "@/components/GiftCard"
import { categories, gifts } from "@/data/gifts"

export function GiftGrid() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [search, setSearch] = useState("")

  const filtered = gifts.filter((gift) => {
    const matchesCategory =
      activeCategory === "All" ||
      gift.category === activeCategory ||
      (activeCategory.startsWith("Under") && {
        "Under $25": 25,
        "Under $50": 50,
      }[activeCategory]! >= parseInt(gift.price.replace("$", "")))

    const matchesSearch =
      search === "" ||
      gift.name.toLowerCase().includes(search.toLowerCase()) ||
      gift.description.toLowerCase().includes(search.toLowerCase()) ||
      gift.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))

    return matchesCategory && matchesSearch
  })

  return (
    <div className="space-y-6">
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search gifts..."
          className="pl-9"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((cat) => (
          <motion.button
            key={cat}
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
