import { Product } from "./types";

export const recentlyViewedProducts: Product[] = [
  {
    id: "prod_401",
    name: "Wireless Charging Pad",
    description: "Fast wireless charger compatible with all devices.",
    price: 699,
    image: "https://images.unsplash.com/photo-1589712235274-45c234bfc6b2?auto=format&fit=crop&w=400&q=80",
    rating: 4.1,
    category: "electronics",
    tags: ["wireless", "charging", "pad"]
  },
  {
    id: "prod_402",
    name: "Essential Oil Diffuser",
    description: "Creates a relaxing ambiance with aroma therapy.",
    price: 899,
    image: "https://images.unsplash.com/photo-1616401789166-b27b01303f4c?auto=format&fit=crop&w=400&q=80",
    rating: 4.4,
    category: "home-decor",
    tags: ["oil", "diffuser", "aroma"]
  }
];
