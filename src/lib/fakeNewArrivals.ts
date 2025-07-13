import { Product } from "./types";

export const newArrivalProducts: Product[] = [
  {
    id: "prod_201",
    name: "Glow Boost Sheet Mask",
    description: "Hydrating mask with hyaluronic acid and aloe vera.",
    price: 99,
    image: "https://images.unsplash.com/photo-1588776814546-0c9a882d2e88?auto=format&fit=crop&w=400&q=80",
    rating: 4.2,
    category: "skincare",
    isNew: true,
    tags: ["mask", "hydrating", "aloe"]
  },
  {
    id: "prod_202",
    name: "Smart LED Strip Lights",
    description: "Color-changing lights controlled via app and voice.",
    price: 799,
    image: "https://images.unsplash.com/photo-1607082349566-187332d8e3f4?auto=format&fit=crop&w=400&q=80",
    rating: 4.3,
    category: "electronics",
    isNew: true,
    tags: ["led", "smart", "decor"]
  }
];
