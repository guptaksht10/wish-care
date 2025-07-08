
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import UserFeatures from "@/components/sections/UserFeatures";
import Footer from "@/components/Footer";
import ProductCard from "@/components/sections/ProductCard";

const FeaturedProducts = () => {
        const products = [
          {
            id: 1,
            name: "Wireless Bluetooth Headphones",
            price: "$129.99",
            originalPrice: "$179.99",
            image: "from-blue-200 to-blue-300",
            rating: 5,
            reviews: 124,
            isLiked: true,
            purchasedBy: ["/avatars/1.png", "/avatars/2.png", "/avatars/3.png"],
            wishlistedBy: ["/avatars/4.png", "/avatars/5.png"]
          },
          {
            id: 2,
            name: "Smart Fitness Watch",
            price: "$199.99",
            originalPrice: "$249.99",
            image: "from-green-200 to-green-300",
            rating: 4,
            reviews: 89,
            purchasedBy: ["/avatars/6.png", "/avatars/7.png"],
            wishlistedBy: ["/avatars/8.png"]
          },
          {
            id: 3,
            name: "Portable Speaker",
            price: "$79.99",
            image: "from-purple-200 to-purple-300",
            rating: 5,
            reviews: 156,
            purchasedBy: ["/avatars/9.png", "/avatars/10.png", "/avatars/11.png"],
            wishlistedBy: ["/avatars/12.png", "/avatars/13.png"]
          },
          {
            id: 4,
            name: "Laptop Stand",
            price: "$49.99",
            originalPrice: "$69.99",
            image: "from-pink-200 to-pink-300",
            rating: 4,
            reviews: 67,
            purchasedBy: ["/avatars/14.png"],
            wishlistedBy: ["/avatars/15.png", "/avatars/16.png"]
          },
          {
            id: 5,
            name: "Wireless Charger",
            price: "$39.99",
            image: "from-indigo-200 to-indigo-300",
            rating: 5,
            reviews: 203,
            isLiked: true,
            purchasedBy: ["/avatars/17.png", "/avatars/18.png"],
            wishlistedBy: ["/avatars/19.png", "/avatars/20.png", "/avatars/21.png"]
          },
          {
            id: 6,
            name: "Smart Home Hub",
            price: "$159.99",
            originalPrice: "$199.99",
            image: "from-orange-200 to-orange-300",
            rating: 4,
            reviews: 91,
            purchasedBy: ["/avatars/22.png", "/avatars/23.png"],
            wishlistedBy: ["/avatars/24.png"]
          }
        ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most loved products, carefully selected for quality and value
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};


export default function dashboard() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedProducts />
      <UserFeatures />
      <Footer />
    </div>
  );
};
