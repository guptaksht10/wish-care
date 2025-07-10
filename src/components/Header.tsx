
// import { Heart, ShoppingCart, User2, Search } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// const Header = () => {
//   return (
//     <header className="bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50">
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-8">
//             <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//               WishCare
//             </h1>
//             <nav className="hidden md:flex space-x-6">
//               <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
//               <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Products</a>
//               <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Categories</a>
//               <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">About</a>
//             </nav>
//           </div>
          
//           <div className="flex items-center space-x-4">
//             <div className="hidden md:flex items-center space-x-2">
//               <Search className="h-4 w-4 text-gray-400" />
//               <Input placeholder="Search products..." className="w-64" />
//             </div>
            
//             <Button variant="ghost" size="icon" className="relative hover:bg-purple-50">
//               <Heart className="h-5 w-5" />
//               <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
//             </Button>
            
//             <Button variant="ghost" size="icon" className="relative hover:bg-purple-50">
//               <ShoppingCart className="h-5 w-5" />
//               <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
//             </Button>
            
//             <Button variant="ghost" size="icon" className="hover:bg-purple-50">
//               <User2 className="h-5 w-5" />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


"use client"

import { Heart, ShoppingCart, User2, Search, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import Link from "next/link"

const Header = () => {
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
              <Select>
                <SelectTrigger className="w-[130px] text-gray-700 font-medium">
                  <SelectValue placeholder="Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="skincare">Skincare</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="fashion">Fashion</SelectItem>
                  <SelectItem value="home">Home Decor</SelectItem>
                </SelectContent>
              </Select>

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

export default Header
