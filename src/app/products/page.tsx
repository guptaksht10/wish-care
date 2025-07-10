"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart, ShoppingCart, Share2 } from "lucide-react";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner";

const products = [
  {
    id: 1,
    name: "Noise Smartwatch",
    price: "$59.99",
    originalPrice: "$79.99",
    rating: 4.5,
    image: "https://via.placeholder.com/300x300?text=Watch",
    badge: "Trending",
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    price: "$39.99",
    originalPrice: "$59.99",
    rating: 4.2,
    image: "https://via.placeholder.com/300x300?text=Earbuds",
    badge: "Best Seller",
  },
  {
    id: 3,
    name: "Fitness Tracker Band",
    price: "$49.99",
    originalPrice: "$69.99",
    rating: 4.8,
    image: "https://via.placeholder.com/300x300?text=Band",
    badge: "New",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: "$29.99",
    originalPrice: "$49.99",
    rating: 4.4,
    image: "https://via.placeholder.com/300x300?text=Speaker",
    badge: "Budget Pick",
  },
  {
    id: 5,
    name: "Laptop Stand",
    price: "$34.99",
    originalPrice: "$54.99",
    rating: 4.6,
    image: "https://via.placeholder.com/300x300?text=Stand",
    badge: "Recommended",
  },
];

export default function ProductsPage() {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
    const isAlreadyInWishlist = wishlist.includes(id);
    toast.success(
      isAlreadyInWishlist
        ? "Removed from wishlist"
        : "Added to wishlist"
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50 px-6 py-14">
      <section className="max-w-7xl mx-auto space-y-12">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
            Explore Products
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Discover handpicked collections trending among your friends & favorite influencers.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative w-full h-64 rounded-xl bg-gradient-to-r from-purple-200 to-pink-200 flex items-center justify-center shadow-lg">
          <p className="text-xl text-purple-800 font-semibold">
            🎠 Product Carousel Coming Soon
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-4 justify-center">
          {["🔥 Trending", "🎉 New Arrivals", "⭐ Best Rated", "💸 Budget Deals"].map((tag, index) => (
            <span
              key={index}
              className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:bg-pink-100 cursor-pointer transition"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              {/* Hover Icons */}
              <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-all flex gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      className="p-2 bg-white rounded-full shadow hover:bg-pink-100 transition"
                      onClick={() => toggleWishlist(product.id)}
                    >
                      <Heart
                        className={`h-4 w-4 transition ${
                          wishlist.includes(product.id)
                            ? "fill-pink-500 text-pink-500"
                            : "text-pink-500"
                        }`}
                      />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    {wishlist.includes(product.id) ? "Remove" : "Wishlist"}
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="p-2 bg-white rounded-full shadow hover:bg-purple-100 transition">
                      <ShoppingCart className="h-4 w-4 text-purple-500" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>Add to Cart</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="p-2 bg-white rounded-full shadow hover:bg-indigo-100 transition">
                      <Share2 className="h-4 w-4 text-indigo-500" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>Share</TooltipContent>
                </Tooltip>
              </div>

              {/* Card */}
              <Card className="rounded-xl shadow-md hover:shadow-xl transition overflow-hidden border border-gray-100">
                <div className="relative w-full h-48 overflow-hidden bg-gradient-to-tr from-pink-100 to-purple-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <CardContent className="p-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {product.name}
                    </h3>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                      {product.badge}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      <span className="font-semibold text-gray-800">{product.price}</span>{" "}
                      <span className="line-through ml-2 text-gray-400">{product.originalPrice}</span>
                    </div>
                    <div className="flex items-center text-yellow-500 text-sm font-medium">
                      <Star className="w-4 h-4 fill-yellow-400 mr-1" />
                      {product.rating}
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:brightness-110 transition">
                    View Product
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}