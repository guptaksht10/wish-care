import { Product } from "./types";

export const topRatedProducts: Product[] = [
  {
    id: "prod_101",
    name: "Aesthetic Wooden Wall Clock",
    description: "Minimalistic decor piece for modern homes.",
    price: 649,
    image: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=400&q=80",
    rating: 4.7,
    category: "home-decor",
    isTopRated: true,
    tags: ["home", "decor", "clock", "wood"]
  },
  {
    id: "prod_102",
    name: "Vitamin C Foaming Facewash",
    description: "Brightens and detoxifies dull skin naturally.",
    price: 399,
    image: "https://images.unsplash.com/photo-1580906855280-9434c35f5d0b?auto=format&fit=crop&w=400&q=80",
    rating: 4.4,
    category: "skincare",
    isTopRated: true,
    tags: ["facewash", "vitamin c", "brightening"]
  },
  {
    id: "prod_103",
    name: "Ergonomic Office Chair",
    description: "Comfortable chair with lumbar support and wheels.",
    price: 3499,
    image: "https://images.unsplash.com/photo-1606813905336-08f70770a379?auto=format&fit=crop&w=400&q=80",
    rating: 4.8,
    category: "home-decor",
    isTopRated: true,
    tags: ["chair", "office", "comfort"]
  }
];
