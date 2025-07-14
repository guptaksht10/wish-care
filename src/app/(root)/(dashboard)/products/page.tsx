"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart, ShoppingCart, Share2 } from "lucide-react";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Noise Smartwatch",
    price: "$59.99",
    originalPrice: "$79.99",
    rating: 4.5,
    image: "/products/smartwatch.jpg",
    badge: "Trending",
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    price: "$39.99",
    originalPrice: "$59.99",
    rating: 4.2,
    image: "/products/airdopes.jpg",
    badge: "Best Seller",
  },
  {
    id: 3,
    name: "Fitness Tracker Band",
    price: "$49.99",
    originalPrice: "$69.99",
    rating: 4.8,
    image: "/products/fitbit.jpg",
    badge: "New",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: "$29.99",
    originalPrice: "$49.99",
    rating: 4.4,
    image: "/products/boatspeaker.jpg",
    badge: "Budget Pick",
  },
  {
    id: 5,
    name: "Laptop Stand",
    price: "$34.99",
    originalPrice: "$54.99",
    rating: 4.6,
    image: "/products/laptopmac.jpg",
    badge: "Recommended",
  },
];

const carouselImages = [
  "/carousels/carousel1.avif",
  "/carousels/carousel2.jpg",
  "/carousels/carousel3.avif",
];


const ProductCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => { 
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl bg-gray-100">
      <AnimatePresence>
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={carouselImages[current]}
            alt={`Slide ${current + 1}`}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {carouselImages.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}


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
    <>
    <Header/>
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
        <div className="relative w-full h-64">
          <ProductCarousel />
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-4 justify-center">
          {["🔥 Trending", "🎉 New Arrivals", "⭐ Best Rated", "💸 Budget Deals"].map((tag, index) => (
            <Link
              href={`/category/${tag.split(" ").join("").toLowerCase()}`}
              key={index}
              className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:bg-pink-100 cursor-pointer transition "
            >
              {tag}
            </Link>
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
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
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
    <Footer/>
    </>
  );
}