import { Product } from "./types";

export const trendingProducts: Product[] = [
  {
    id: "prod_001",
    name: "Herbal Glow Face Serum",
    description: "Boosts radiance, repairs skin barrier, and hydrates deeply.",
    price: 499,
    image: "https://images.unsplash.com/photo-1611078489935-0cb964f9cf3f?auto=format&fit=crop&w=400&q=80",
    rating: 4.5,
    category: "skincare",
    isTrending: true,
    isNew: true,
    tags: ["serum", "glow", "hydration", "vitamin-c"]
  },
  {
    id: "prod_002",
    name: "TrueBass Wireless Earbuds",
    description: "Crystal clear sound with long battery life and touch controls.",
    price: 1299,
    image: "https://images.unsplash.com/photo-1612837017391-f04ba22aafe2?auto=format&fit=crop&w=400&q=80",
    rating: 4.3,
    category: "electronics",
    isTrending: true,
    isBestSeller: true,
    tags: ["earbuds", "audio", "wireless", "bluetooth"]
  },
  {
    id: "prod_003",
    name: "Classic Round Sunglasses",
    description: "Stylish UV-protected shades for men & women.",
    price: 899,
    image: "https://images.unsplash.com/photo-1584270354949-7ef1d5e58d1a?auto=format&fit=crop&w=400&q=80",
    rating: 4.2,
    category: "fashion",
    isTrending: true,
    isBudgetDeal: true,
    tags: ["sunglasses", "fashion", "shades"]
  },
  {
    id: "prod_004",
    name: "Aesthetic Wooden Wall Clock",
    description: "Minimalistic decor piece for modern homes.",
    price: 649,
    image: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=400&q=80",
    rating: 4.7,
    category: "home-decor",
    isTrending: true,
    isTopRated: true,
    tags: ["home", "decor", "clock", "wood"]
  },
  {
    id: "prod_005",
    name: "Vitamin C Foaming Facewash",
    description: "Brightens and detoxifies dull skin naturally.",
    price: 399,
    image: "https://images.unsplash.com/photo-1580906855280-9434c35f5d0b?auto=format&fit=crop&w=400&q=80",
    rating: 4.4,
    category: "skincare",
    isTrending: true,
    isBestSeller: true,
    isTopRated: true,
    tags: ["facewash", "vitamin c", "brightening"]
  },
];
