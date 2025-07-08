'use client'
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  rating: number;
  reviews: number;
  isLiked?: boolean;
}

const ProductCard = ({ id, name, price, originalPrice, image, rating, reviews, isLiked = false }: ProductCardProps) => {
  const [liked, setLiked] = useState(isLiked);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <div className={`w-full h-64 bg-gradient-to-br ${image} transition-transform duration-300 ${isHovered ? 'scale-105' : ''}`}></div>
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-3 right-3 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 ${liked ? 'text-red-500' : 'text-gray-600'}`}
          onClick={() => setLiked(!liked)}
        >
          <Heart className={`h-4 w-4 ${liked ? 'fill-current' : ''}`} />
        </Button>
        
        <div className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <Button className="bg-white text-gray-800 hover:bg-gray-100">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Quick Add
          </Button>
        </div>
      </div>
      
      <div className="p-5 space-y-3">
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
          ))}
          <span className="text-sm text-gray-600">({reviews})</span>
        </div>
        
        <h3 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">{name}</h3>
        
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-purple-600">{price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">{originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
