"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ProfilePage() {
  const router = useRouter()

  return (
    <>
    <Header />
    <main className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-pink-50 px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <Image
            src="https://via.placeholder.com/150"
            alt="Profile"
            width={150}
            height={150}
            className="rounded-full border-4 border-pink-300"
          />
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-3xl font-bold text-purple-700">Aayush Bhatia</h2>
            <p className="text-gray-600">UI Dev | DSA | Wishlist hoarder 😂</p>
            <div className="flex gap-4 justify-center md:justify-start text-sm text-gray-700">
              <span><strong>Followers:</strong> 140</span>
              <span><strong>Following:</strong> 85</span>
              <span><strong>Friends:</strong> 50</span>
            </div>
          </div>
        </div>

        {/* Sections: Wishlist, Cart, Orders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Wishlist", count: 6, color: "bg-pink-100", link: "/wishlist" },
            { title: "Cart", count: 3, color: "bg-purple-100", link: "/cart" },
            { title: "Orders", count: 12, color: "bg-indigo-100", link: "/orders" },
          ].map((item) => (
            <Card
              key={item.title}
              onClick={() => router.push(item.link)}
              className={`cursor-pointer hover:scale-105 transition p-6 text-center ${item.color}`}
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-2xl font-bold mt-2">{item.count}</p>
            </Card>
          ))}
        </div>

        {/* Address Section */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-purple-700">Shipping Address</h3>
          <div className="p-4 bg-white rounded-lg shadow space-y-1 border border-gray-100">
            <p><strong>Name:</strong> Aayush Bhatia</p>
            <p><strong>Address:</strong> A-23, Sector 62, Noida, Uttar Pradesh</p>
            <p><strong>Pincode:</strong> 201301</p>
            <p><strong>Phone:</strong> +91-9876543210</p>
          </div>
        </div>

        <div className="flex justify-end">
          <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">Edit Profile</Button>
        </div>
      </div>
    </main>
    <Footer />
    </>
  )
}
