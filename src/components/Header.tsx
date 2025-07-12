"use client"

import { Heart, ShoppingCart, User2, Search, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export default function Header() {
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
              <Link href="/" className="text-gray-700 hover:text-purple-600 transition font-medium">
                Home
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-purple-600 transition font-medium">
                Products
              </Link>

              {/* Dropdown for Categories */}
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Link href="#" className="flex items-center space-x-2 hover:text-purple-600 transition text-gray-700 font-medium">Categories <ChevronDown className="ml-2 h-4 w-4" /></Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[130px]">
                  <DropdownMenuItem >
                    Skincare
                  </DropdownMenuItem>
                  <DropdownMenuItem >
                    Electronics
                  </DropdownMenuItem>
                  <DropdownMenuItem >
                    Fashion
                  </DropdownMenuItem>
                  <DropdownMenuItem >
                    Home Decor
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="/about" className="text-gray-700 hover:text-purple-600 transition font-medium">
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
              <Button variant="ghost" size="icon" className="relative hover:bg-purple-50">
                <Heart className="h-5 w-5 text-pink-500" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </Button>
            </Link>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative hover:bg-purple-50">
              <ShoppingCart className="h-5 w-5 text-purple-500" />
              <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </Button>

            {/* Profile */}
            <Button variant="ghost" size="icon" className="hover:bg-purple-50">
              <User2 className="h-5 w-5 text-gray-700" />
            </Button>

            {/* Dark Mode Toggle Placeholder */}
            <Button variant="ghost" size="icon" className="hover:bg-purple-50">
              <Moon className="h-5 w-5 text-gray-600" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

