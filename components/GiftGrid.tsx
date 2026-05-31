"use client"

import { useState, useRef, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Plus } from "lucide-react"
import { GiftCard } from "@/components/GiftCard"
import { categories, gifts } from "@/data/gifts"

const mobileDropdown = ["Under $20", "Under $50", "Mother's Day", "Father's Day"]

export function GiftGrid() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const isMobileDropdownActive = mobileDropdown.includes(activeCategory)

  const filtered = gifts.filter((gift) => {
    return (
      activeCategory === "All" ||
      gift.category.split(", ").includes(activeCategory) ||
      (activeCategory.startsWith("Under") && {
        "Under $20": 20,
        "Under $50": 50,
      }[activeCategory]! >= parseInt(gift.price.replace("$", "")))
  )})

  return (
    <div className="space-y-6">
      <div className="flex flex-nowrap sm:flex-wrap gap-1.5 justify-center items-end">
        {categories.map((cat) => (
          <div
            key={cat}
            className={`flex-col items-center gap-0.5 ${mobileDropdown.includes(cat) ? "hidden sm:flex" : "flex"}`}
          >
            <span
              className="text-[#9c2235] text-[10px] leading-none transition-opacity duration-200"
              style={{ opacity: activeCategory === cat ? 0.7 : 0 }}
            >
              ★
            </span>
            <motion.button
              onClick={() => setActiveCategory(cat)}
              whileTap={{ scale: 0.95 }}
              style={{ fontFamily: "var(--font-circular)" }}
              className={`px-2.5 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-wide sm:tracking-widest uppercase border transition-colors whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-[#9c2235] text-[#f9f6f2] border-[#9c2235]"
                  : "bg-transparent text-[#262626] border-[#262626] hover:bg-[#262626]/5"
              }`}
            >
              {cat}
            </motion.button>
          </div>
        ))}

        {/* Mobile-only + dropdown */}
        <div ref={dropdownRef} className="flex sm:hidden flex-col items-center gap-0.5 relative">
          <span
            className="text-[#9c2235] text-[10px] leading-none transition-opacity duration-200"
            style={{ opacity: isMobileDropdownActive ? 0.7 : 0 }}
          >
            ★
          </span>
          <motion.button
            onClick={() => setDropdownOpen((o) => !o)}
            whileTap={{ scale: 0.95 }}
            className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${
              isMobileDropdownActive
                ? "bg-[#9c2235] text-[#f9f6f2] border-[#9c2235]"
                : "bg-transparent text-[#262626] border-[#262626] hover:bg-[#262626]/5"
            }`}
          >
            <Plus className="w-3.5 h-3.5" />
          </motion.button>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.97 }}
                transition={{ duration: 0.15 }}
                className="absolute top-full mt-2 right-0 bg-[#f9f6f2] border border-[#e0d8d0] shadow-md rounded-lg overflow-hidden z-50 min-w-[140px]"
              >
                {mobileDropdown.map((cat) => (
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
