"use client";

import { useState } from "react";

const products = [
  {
    name: "Vitamin C Serum",
    price: 799,
    description: "Brightens skin and reduces dullness.",
    image: "/products/serum.jpg",
  },
  {
    name: "Hydrating Face Cream",
    price: 699,
    description: "Keeps your skin soft and moisturized.",
    image: "/products/cream.jpg",
  },
  {
    name: "Sunscreen SPF 50",
    price: 499,
    description: "Protects your skin from harmful UV rays.",
    image: "/products/sunscreen.jpg",
  },
  {
    name: "Lip Balm",
    price: 299,
    description: "Soft and hydrated lips all day.",
    image: "/products/lipbalm.jpg",
  },
];

export default function Home() {
  const [cartItems, setCartItems] = useState<string[]>([]);

  const addToCart = (productName: string) => {
    setCartItems([...cartItems, productName]);
  };

  return (
    <main className="min-h-screen bg-pink-50">
      {/* Navbar */}
      <nav className="bg-pink-600 text-white p-5 shadow-lg flex justify-between items-center">
        <h1 className="text-4xl font-bold">Velora ✨</h1>

        <div className="text-2xl font-semibold">
          🛒 Cart ({cartItems.length})
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16">
        <h2 className="text-6xl font-bold text-pink-700 mb-4">
          Welcome to Velora
        </h2>

        <p className="text-2xl text-gray-700">
          Discover skincare, beauty & self-care essentials 💖
        </p>
      </section>

      {/* Cart Section */}
      <div className="bg-white mx-8 p-6 rounded-2xl shadow-lg mb-8">
        <h2 className="text-2xl font-bold text-pink-700 mb-4">
          Cart Items
        </h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">No products added yet.</p>
        ) : (
          <ul className="space-y-2">
            {cartItems.map((item, index) => (
              <li key={index}>🛍️ {item}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10 pb-12">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold text-pink-700 mb-2">
                {product.name}
              </h3>

              <p className="text-gray-600 mb-4">
                {product.description}
              </p>

              <p className="text-3xl font-bold text-pink-600 mb-4">
                ₹{product.price}
              </p>

              <button
                onClick={() => addToCart(product.name)}
                className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded-xl w-full"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}