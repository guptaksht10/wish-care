import { Product } from "./types";

export const searchMatchProducts: Product[] = [
  {
    id: "prod_501",
    name: "Blue Light Blocking Glasses",
    description: "Protects your eyes from screen exposure.",
    price: 499,
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=400&q=80",
    rating: 4.2,
    category: "fashion",
    tags: ["glasses", "blue light", "eye protection"]
  },
  {
    id: "prod_502",
    name: "Laptop Stand",
    description: "Ergonomic and foldable laptop stand.",
    price: 899,
    image: "https://images.unsplash.com/photo-1588345921523-4bc1910f2a38?auto=format&fit=crop&w=400&q=80",
    rating: 4.3,
    category: "electronics",
    tags: ["laptop", "stand", "ergonomic"]
  }
];
