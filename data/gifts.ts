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
    image: "https://i.imgur.com/QnItnnK.png",
    affiliateUrl: "https://amzn.to/4fJeFNv",
  },
  {
    id: "2",
    name: "Neck Massager with Heat",
    description: "Electric Deep Tissue, 4D Kneading Massage",
    price: "$60",
    category: "For Her",
    tags: ["Massage", "Relaxation", "Self Care"],
    image: "https://i.imgur.com/MizYdhN.png",
    affiliateUrl: "https://amzn.to/4o2qWyL",
  },
  {
    id: "3",
    name: "Nalgene 32 oz Water Bottle",
    description: "Narrow Mouth, BPA Free, Durable & Leak Proof, Lightweight for Hiking & Gym",
    price: "$20",
    category: "For Him, Under $20, Gift Exchange",
    tags: ["Hiking", "Everyday", "Plastic Free"],
    image: "https://i.imgur.com/l3kVmvN.png",
    affiliateUrl: "https://amzn.to/4fdcFNj",
  },
  {
    id: "4",
    name: "Kodak 35mm Disposable Camera",
    description: "The perfect gift if you're going on a trip or about to start summer",
    price: "$35",
    category: "Under $50, For Her, Gift Exchange",
    tags: ["Memories", "Vintage Look", "Photography"],
    image: "https://i.imgur.com/6eeYARW.png",
    affiliateUrl: "https://amzn.to/4dQAecm",
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
