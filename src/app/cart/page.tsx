"use client";

import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Image from "next/image";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);

  const removeFromCart = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-xl text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item: any) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm transform transition-transform duration-300 hover:scale-105"
              >
                <div className="flex items-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="rounded-md"
                  />
                  <div className="ml-4">
                    <h2 className="font-bold text-gray-800">{item.title}</h2>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800 transition duration-300"
                >
                  <FaTrashAlt className="text-2xl" />
                </button>
              </div>
            ))}
          </div>
        )}
        {cartItems.length > 0 && (
          <div className="mt-6 text-right">
            <button
              onClick={clearCart}
              className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
