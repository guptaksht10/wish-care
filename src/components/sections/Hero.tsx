import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Truck, RotateCcw } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Shop with
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block">
                  Complete Care
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover amazing products with our hassle-free shopping experience. 
                Love it, buy it, return it - we've got you covered every step of the way.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3">
                Start Shopping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-purple-200 text-purple-600 hover:bg-purple-50 px-8 py-3">
                View Collection
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-green-500" />
                <div>
                  <p className="font-semibold text-gray-800">Secure</p>
                  <p className="text-sm text-gray-600">100% Safe</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Truck className="h-8 w-8 text-blue-500" />
                <div>
                  <p className="font-semibold text-gray-800">Fast Delivery</p>
                  <p className="text-sm text-gray-600">2-3 Days</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw className="h-8 w-8 text-purple-500" />
                <div>
                  <p className="font-semibold text-gray-800">Easy Returns</p>
                  <p className="text-sm text-gray-600">30 Days</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl p-8 transform rotate-3 hover:rotate-1 transition-transform duration-300">
              <div className="bg-white rounded-2xl p-6 space-y-4 transform -rotate-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Popular Products</h3>
                  <span className="text-sm text-purple-600 font-medium">View All</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg mx-auto mb-2"></div>
                    <p className="text-sm font-medium">Electronics</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-lg mx-auto mb-2"></div>
                    <p className="text-sm font-medium">Fashion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
