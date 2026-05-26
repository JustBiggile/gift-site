export type Gift = {
  id: string
  name: string
  description: string
  price: string
  category: string
  tags: string[]
  image: string
  affiliateUrl: string
}

export const categories = ["All", "For Her", "For Him", "Under $20", "Under $50", "Gift Exchange", "For the Foodie"]
export const extraCategories = ["Mother's Day", "Father's Day", "Boo Basket", "Brrr Basket", "The One Who Has Everything"]

export const gifts: Gift[] = [
  {
    id: "1",
    name: "Cozy Knit Blanket",
    description: "Ultra-soft chunky knit throw perfect for chilly evenings. Comes in 12 colors.",
    price: "$45",
    category: "For Her",
    tags: ["cozy", "home", "winter"],
    image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=400&h=300&fit=crop",
    affiliateUrl: "https://example.com/affiliate/blanket",
  },
  {
    id: "2",
    name: "Leather Wallet",
    description: "Slim minimalist wallet with RFID blocking. Holds up to 8 cards.",
    price: "$35",
    category: "For Him",
    tags: ["accessories", "everyday", "practical"],
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=300&fit=crop",
    affiliateUrl: "https://example.com/affiliate/wallet",
  },
  {
    id: "3",
    name: "Wireless Earbuds",
    description: "Active noise cancelling with 30-hour battery life. Great for commuters and gym-goers.",
    price: "$79",
    category: "Tech",
    tags: ["audio", "wireless", "gift"],
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop",
    affiliateUrl: "https://example.com/affiliate/earbuds",
  },
  {
    id: "4",
    name: "Bath Bomb Set",
    description: "Set of 12 handcrafted bath bombs with essential oils and dried flowers.",
    price: "$22",
    category: "Self Care",
    tags: ["relaxation", "spa", "self care"],
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=300&fit=crop",
    affiliateUrl: "https://example.com/affiliate/bath-bombs",
  },
  {
    id: "5",
    name: "LEGO Architecture Set",
    description: "Build iconic skylines. A fun challenge for ages 12+. Great for desk display when done.",
    price: "$49",
    category: "For Kids",
    tags: ["creative", "building", "display"],
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=300&fit=crop",
    affiliateUrl: "https://example.com/affiliate/lego",
  },
  {
    id: "6",
    name: "Smart Diffuser",
    description: "App-controlled essential oil diffuser with color-changing LED and auto shutoff.",
    price: "$38",
    category: "Home",
    tags: ["smart home", "wellness", "home"],
    image: "https://images.unsplash.com/photo-1602928309266-c4dc51a3a6a0?w=400&h=300&fit=crop",
    affiliateUrl: "https://example.com/affiliate/diffuser",
  },
]
