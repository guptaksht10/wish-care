import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Truck, RotateCcw, Flame } from "lucide-react";
const categories = [
    { label: "Electronics", from: "purple-200", to: "pink-200" },
    { label: "Fashion", from: "blue-200", to: "indigo-200" },
    { label: "Home Decor", from: "yellow-200", to: "orange-200" },
    { label: "Beauty", from: "rose-200", to: "fuchsia-200" },
    { label: "Sports", from: "green-200", to: "teal-200" },
    { label: "More", from: "cyan-200", to: "blue-100" },
]
const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 py-24 px-8">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
                Experience Shopping
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block">
                  Like Never Before
                </span>
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Curated collections, lightning-fast delivery, and a promise of satisfaction. Discover what’s trending and make it yours—today.
              </p>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-purple-200 text-purple-600 hover:bg-purple-100 px-8 py-3">
                Browse Categories
              </Button>
            </div>

            {/* Trust Features */}
            <div className="grid grid-cols-3 gap-6 pt-6">
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
                  <p className="text-sm text-gray-600">2–3 Days</p>
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

            {/* Trending Filter Tags */}
            <div className="flex flex-wrap gap-3 pt-4">
              {["🔥 Trending", "New Arrivals", "Best Sellers", "Budget Deals", "Top Rated"].map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-purple-100 text-purple-700 px-4 py-1 text-sm font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side: Carousel + Product Highlight */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl p-8 transform hover:rotate-1 transition-transform duration-300">
              <div className="bg-white rounded-2xl p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">Top Picks</h3>
                  <span className="text-sm text-purple-600 font-medium cursor-pointer">See All</span>
                </div>

                {/* Carousel Placeholder */}
                <div className="relative overflow-hidden rounded-xl h-48 bg-gray-100 flex items-center justify-center text-gray-400 text-sm italic">
                  {/* Replace this div with Swiper, KeenSlider or any carousel */}
                  Product Carousel Coming Soon
                </div>

                {/* Quick Categories */}
                <div className="grid grid-cols-3 gap-2">
                {/* Category Card */}
                {categories.map((cat, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-2 text-center">
                    <div
                        className={`w-14 h-14 bg-gradient-to-br from-${cat.from} to-${cat.to} rounded-lg mx-auto mb-2`}
                    />
                    <p className="text-sm font-medium">{cat.label}</p>
                    </div>
                ))}
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
