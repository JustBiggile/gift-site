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
    tags: ["Wellness", "Selfcare", "That Girl"],
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
    price: "$210",
    category: "For Him",
    tags: ["Creative", "Building", "Display"],
    image: "https://i.imgur.com/9ZE3AFz.png",
    affiliateUrl: "https://amzn.to/3RANzhO",
  },
  {
    id: "6",
    name: "The Couples Game",
    description: "This is a game for couples that's actually fun",
    price: "$30",
    category: "For Her, For Him",
    tags: ["Board Game", "Couple", "Fun"],
    image: "https://i.imgur.com/jFPUpy4.png",
    affiliateUrl: "https://amzn.to/434Zsio",
  },
  {
    id: "7",
    name: "The Best Portable Charger",
    description: "Ultra slim and lightweight and holds a lot of battery",
    price: "$35",
    category: "For Her, For Him",
    tags: ["Practical", "Travel", "The one who never has battery"],
    image: "https://i.imgur.com/Dym7vd8.png",
    affiliateUrl: "https://amzn.to/4eeuVVC",
  },
  {
    id: "8",
    name: "Indoor Hydroponic Garden",
    description: "The Best Plant Germination Kit Aeroponic Vegetable Growth",
    price: "$73",
    category: "Mother's Day",
    tags: ["Smart Home", "Practical", "Healthy"],
    image: "https://i.imgur.com/ha5zVG5.png",
    affiliateUrl: "https://amzn.to/4wXdCzE",
  },
  {
    id: "9",
    name: "Aperitif - The Cocktail Cabinet",
    description: "The essential recipes every apperitif lovers should know",
    price: "$34",
    category: "For Her, Gift Exchange, Mother's Day",
    tags: ["Cocktails", "For the Foodie", "Entertaining"],
    image: "https://i.imgur.com/0CMfmb7.png",
    affiliateUrl: "https://amzn.to/3RvWCk2",
  },
  {
    id: "12",
    name: "Mocktails - The Cocktail Cabinet",
    description: "The essential recipes every mocktails lovers should know",
    price: "$34",
    category: "For Her, Gift Exchange, Mother's Day",
    tags: ["Cocktails", "For the Foodie", "Entertaining"],
    image: "https://i.imgur.com/mH33rFC.png",
    affiliateUrl: "https://amzn.to/4u6PSqo",
  },
]
