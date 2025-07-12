"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
// import { useTheme } from "next-themes";
//changed to useState for testing

import {
  Heart,
  ShoppingCart,
  User2,
  Search,
  Moon,
  Sun,
  ChevronDown,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Brand + Nav */}
          <div className="flex items-center space-x-8">
            <Link href="/">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                WishCare
              </h1>
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="/"
                className="text-gray-700 hover:text-purple-600 transition font-medium"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-gray-700 hover:text-purple-600 transition font-medium"
              >
                Products
              </Link>

              {/* Dropdown for Categories */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-gray-700 font-medium px-2 py-1 hover:text-purple-600">
                    Categories <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[160px]">
                  <DropdownMenuItem asChild>
                    <Link href="/category/skincare">Skincare</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/category/electronics">Electronics</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/category/fashion">Fashion</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/category/home-decor">Home Decor</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                href="/about"
                className="text-gray-700 hover:text-purple-600 transition font-medium"
              >
                About
              </Link>
            </nav>
          </div>

          {/* Search + Icons */}
          <div className="flex items-center space-x-3">
            {/* Search Box */}
            <div className="hidden md:flex items-center space-x-2">
              <Search className="h-4 w-4 text-gray-400" />
              <Input placeholder="Search products..." className="w-64 text-sm" />
            </div>

            {/* Wishlist */}
            <Link href="/wishlist">
              <Button
                variant="ghost"
                size="icon"
                className="relative hover:bg-purple-50"
              >
                <Heart className="h-5 w-5 text-pink-500" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </Button>
            </Link>

            {/* Cart */}
            <Link href="/cart">
              <Button
                variant="ghost"
                size="icon"
                className="relative hover:bg-purple-50"
              >
                <ShoppingCart className="h-5 w-5 text-purple-500" />
                <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                  2
                </span>
              </Button>
            </Link>

            {/* Profile */}
            <Link href="/profile">
              <Button variant="ghost" size="icon" className="hover:bg-purple-50">
                <User2 className="h-5 w-5 text-gray-700" />
              </Button>
            </Link>

            {/* Dark Mode Toggle */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="hover:bg-purple-50"
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5 text-gray-600" />
                ) : (
                  <Sun className="h-5 w-5 text-yellow-500" />
                )}
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
