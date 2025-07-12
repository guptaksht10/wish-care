"use client";

import { useParams } from "next/navigation";

export default function CategoryPage() {
  const { slug } = useParams();

  return (
    <main className="min-h-screen flex items-center justify-center bg-purple-50">
      <h1 className="text-3xl font-bold text-purple-700">
        Welcome to {slug} category!
      </h1>
    </main>
  );
}
