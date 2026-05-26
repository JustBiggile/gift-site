"use client"

import { useState, useRef, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { GiftCard } from "@/components/GiftCard"
import { categories, extraCategories, gifts } from "@/data/gifts"

export function GiftGrid() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const isExtraActive = extraCategories.includes(activeCategory)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

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
              style={{ fontFamily: "var(--font-circular)" }}
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

        {/* More dropdown */}
        <div ref={dropdownRef} className="flex flex-col items-center gap-0.5 relative">
          <span
            className="text-[#9c2235] text-base leading-none transition-opacity duration-200"
            style={{ opacity: isExtraActive ? 1 : 0 }}
          >
            ★
          </span>
          <motion.button
            onClick={() => setDropdownOpen((o) => !o)}
            whileTap={{ scale: 0.95 }}
            style={{ fontFamily: "var(--font-circular)" }}
            className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border transition-colors ${
              isExtraActive
                ? "bg-[#9c2235] text-[#f9f6f2] border-[#9c2235]"
                : "bg-transparent text-[#262626] border-[#262626] hover:bg-[#262626]/5"
            }`}
          >
            More
            <motion.span
              animate={{ rotate: dropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center"
            >
              <ChevronDown className="w-3 h-3" />
            </motion.span>
          </motion.button>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.97 }}
                transition={{ duration: 0.15 }}
                className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-[#f9f6f2] border border-[#e0d8d0] shadow-md rounded-lg overflow-hidden z-50 min-w-[140px]"
              >
                {extraCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => { setActiveCategory(cat); setDropdownOpen(false) }}
                    style={{ fontFamily: "var(--font-circular)" }}
                    className={`w-full text-left px-4 py-2.5 text-xs font-bold tracking-widest uppercase transition-colors ${
                      activeCategory === cat
                        ? "bg-[#9c2235] text-[#f9f6f2]"
                        : "text-[#262626] hover:bg-[#ede8e2]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
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
