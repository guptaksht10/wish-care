"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sparkles, Rocket, Star, Truck, Users } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-100 via-white to-pink-100 text-gray-800">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-xl space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-purple-700">
            Shop Smarter with <span className="text-pink-600">WishCare</span>
          </h1>
          <p className="text-lg text-gray-700">
            Discover quality products, smart recommendations, and a delightful shopping experience all in one place.
          </p>
          <Button className="text-lg px-6 py-5">Explore Now</Button>
        </div>
        <div className="w-full max-w-md animate-fade-in-up">
          <Image
            src="/images/landing-image.png" // ✅ Add this image in public/images/
            alt="Shopping Illustration"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-12">Why Choose WishCare?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard icon={<Sparkles />} title="Smart Recommendations" desc="AI-powered suggestions tailored to your taste." />
          <FeatureCard icon={<Truck />} title="Fast Delivery" desc="Lightning-fast and secure doorstep delivery." />
          <FeatureCard icon={<Star />} title="Wishlist & Cart" desc="Save what you love and buy anytime." />
          <FeatureCard icon={<Users />} title="Social Shopping" desc="See what your friends are buying & loving." />
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-pink-50 py-16 px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-12">Explore Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {["Electronics", "Fashion", "Beauty", "Home", "Fitness", "Books", "Toys", "Grocery"].map(cat => (
            <div key={cat} className="bg-white shadow-md rounded-lg p-6 text-center hover:scale-105 transition-transform">
              <p className="text-lg font-semibold text-purple-700">{cat}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pink-400 to-purple-600 py-20 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Start Your Smart Shopping Journey Today</h2>
        <p className="text-lg mb-8">Sign up now and experience the new era of ecommerce with WishCare.</p>
        <Button variant="secondary" className="bg-white text-purple-700 hover:bg-gray-100 px-6 py-4 text-lg">
          Create your account
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-6 md:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <h3 className="font-bold text-lg mb-2">WishCare</h3>
            <p>Smarter Shopping. Better Living.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>Contact</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Categories</h4>
            <ul className="space-y-1">
              <li>Electronics</li>
              <li>Fashion</li>
              <li>Home</li>
              <li>Fitness</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <ul className="space-y-1">
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <p className="text-center text-xs mt-10 text-gray-400">&copy; 2025 WishCare. All rights reserved.</p>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-purple-50 rounded-xl shadow-sm p-6 hover:shadow-lg transition">
      <div className="text-purple-700 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}
