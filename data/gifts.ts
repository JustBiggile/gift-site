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
    name: "Nuda Self Tan Kit",
    description: "Includes Self Tanner Mitt, 50mL Dark BronzeFoam Tanning Mousse, & 5mL CloudMist Face Tanner",
    price: "$37",
    category: "For Her, Under $50",
    tags: ["wellness", "selfcare", "that girl"],
    image: "https://m.media-amazon.com/images/I/71S8baGCFiL._AC_SL1500_.jpg",
    affiliateUrl: "https://amzn.to/4fJeFNv",
  },
  {
    id: "2",
    name: "Neck Massager with Heat",
    description: "Electric Deep Tissue, 4D Kneading Massage",
    price: "$60",
    category: "For Her",
    tags: ["Massage", "Relaxation", "Self Care"],
    image: "https://m.media-amazon.com/images/I/71l2P6p3gxL._AC_SL1426_.jpg",
    affiliateUrl: "https://amzn.to/4o2qWyL",
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
