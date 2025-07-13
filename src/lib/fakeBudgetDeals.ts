import { Product } from "./types";

export const budgetDealProducts: Product[] = [
  {
    id: "prod_301",
    name: "Reusable Cotton Pads",
    description: "Eco-friendly makeup removal pads.",
    price: 199,
    image: "https://images.unsplash.com/photo-1599464997330-0c969b8e733d?auto=format&fit=crop&w=400&q=80",
    rating: 4.1,
    category: "beauty",
    isBudgetDeal: true,
    tags: ["eco", "makeup", "cotton"]
  },
  {
    id: "prod_302",
    name: "Mini Portable Fan",
    description: "USB powered personal fan for desk or travel.",
    price: 299,
    image: "https://images.unsplash.com/photo-1596642954971-25ab1c2e73b4?auto=format&fit=crop&w=400&q=80",
    rating: 4.0,
    category: "electronics",
    isBudgetDeal: true,
    tags: ["fan", "mini", "portable"]
  }
];
