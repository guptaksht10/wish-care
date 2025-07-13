"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function ProfilePage() {
  const router = useRouter();

  const user = {
    name: "Aayush Bhatia",
    bio: "UI Dev | DSA | Wishlist hoarder 😂",
    followers: 140,
    following: 85,
    friends: 50,
    image: "/avatars/1.png",
    address: {
      name: "Aayush Bhatia",
      line: "A-23, Sector 62, Noida, Uttar Pradesh",
      pincode: "201301",
      phone: "+91-9876543210",
    },
  };

  const quickSections = [
    { title: "Wishlist", count: 6, color: "bg-pink-100", link: "/wishlist" },
    { title: "Cart", count: 3, color: "bg-purple-100", link: "/cart" },
    { title: "Orders", count: 12, color: "bg-indigo-100", link: "/orders" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-pink-50 px-6 py-14">
        <div className="max-w-5xl mx-auto space-y-16">

          {/* 🧑 Profile Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center md:items-start gap-8"
          >
            <Image
              src={user.image}
              alt="Profile"
              width={150}
              height={150}
              className="rounded-full border-4 border-pink-400 shadow-md"
            />
            <div className="text-center md:text-left space-y-3">
              <h2 className="text-4xl font-bold text-purple-700">{user.name}</h2>
              <p className="text-gray-600 text-base">{user.bio}</p>
              <div className="flex gap-4 justify-center md:justify-start text-sm text-gray-700">
                <span><strong>Followers:</strong> {user.followers}</span>
                <span><strong>Following:</strong> {user.following}</span>
                {/* ✅ Friends navigation */}
                <span
                  onClick={() => router.push("/friends")}
                  className="cursor-pointer text-purple-600 font-semibold hover:underline"
                >
                  <strong>Friends:</strong> {user.friends}
                </span>
              </div>
              <Button
                variant="outline"
                className="border-pink-300 text-pink-600 hover:bg-pink-100 mt-2"
                onClick={() => router.push("/edit-profile")}
              >
                Edit Profile
              </Button>
            </div>
          </motion.div>

          {/* 🧾 Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {quickSections.map((item) => (
              <Card
                key={item.title}
                onClick={() => router.push(item.link)}
                className={`cursor-pointer hover:scale-105 transition p-6 text-center ${item.color}`}
              >
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-3xl font-bold mt-2 text-purple-700">{item.count}</p>
              </Card>
            ))}
          </div>

          {/* 📦 Shipping Address */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-purple-700">Shipping Address</h3>
            <div className="p-4 bg-white rounded-lg shadow space-y-1 border border-gray-100">
              <p><strong>Name:</strong> {user.address.name}</p>
              <p><strong>Address:</strong> {user.address.line}</p>
              <p><strong>Pincode:</strong> {user.address.pincode}</p>
              <p><strong>Phone:</strong> {user.address.phone}</p>
            </div>
          </div>

          {/* 🚀 CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full text-lg shadow-md hover:scale-105 transition"
              onClick={() => router.push("/")}
            >
              Go to Explore
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
