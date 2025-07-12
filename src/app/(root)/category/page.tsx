"use client";

import Link from "next/link";

const categories = [
  { name: "Skincare", slug: "skincare" },
  { name: "Electronics", slug: "electronics" },
  { name: "Fashion", slug: "fashion" },
  { name: "Home Decor", slug: "home-decor" },
];

export default function AllCategoriesPage() {
  return (
    <main className="min-h-screen bg-purple-50 px-6 py-14">
      <h1 className="text-3xl font-bold text-purple-700 mb-8">All Categories</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link href={`/category/${cat.slug}`} key={cat.slug}>
            <div className="border bg-white p-6 rounded-lg shadow hover:shadow-md transition cursor-pointer">
              <h2 className="text-xl font-semibold text-purple-600">{cat.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
