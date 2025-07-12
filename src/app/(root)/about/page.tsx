"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function AboutPage() {
  return (
    <>
    <Header/>
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-white px-6 py-20">
      <section className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text mb-4">
          About WishCare
        </h1>
        <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
          A revolution in social-commerce — blending reels, trust & shopping in one powerful experience.
        </p>

        {/* 2 Column Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          {/* Description */}
          <div className="space-y-5 text-gray-700">
            <h2 className="text-3xl font-semibold text-gray-800">Why WishCare?</h2>
            <ul className="list-disc list-inside space-y-3 text-base leading-relaxed">
              <li>🎬 Product Reels by influencers and sellers.</li>
              <li>💬 Direct queries to friends who've purchased.</li>
              <li>📦 Group Buy Discounts — shop with your squad.</li>
              <li>👥 Wishlists & recommendations from trusted people.</li>
              <li>🧠 Personalized feed based on social activity.</li>
            </ul>
          </div>

          {/* Avatar Grid */}
          <div className="grid grid-cols-3 gap-4 justify-center">
            {["1", "2", "3", "4", "5", "6"].map((id) => (
              <Avatar key={id} className="w-16 h-16 border shadow-md hover:scale-105 transition-transform">
                <AvatarImage src={`/avatars/${id}.png`} alt={`User ${id}`} />
                <AvatarFallback>U{id}</AvatarFallback>
              </Avatar>
            ))}
          </div>
        </div>

        {/* Vision Box */}
        <div className="relative bg-white/80 border border-purple-200 backdrop-blur-md rounded-xl p-10 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-100 via-purple-100 to-blue-100 opacity-30 blur-2xl -z-10" />
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
            🚀 Our Vision
          </h3>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            To make online shopping as social, real and exciting as browsing Instagram.
            <br />We blend human trust, reels, wishlist love, and commerce into one beautiful experience.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full text-lg shadow-md hover:scale-105 transition">
            Start Exploring
          </Button>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  )
}
