export const dynamic = "force-dynamic";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Server = async () => {
  const response = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  const parsedResponse: IProduct[] = await response.json();

  return (
    <div className="bg-gradient-to-r from-teal-500 to-blue-500 min-h-screen ">
      <div className="max-w-6xl mx-auto py-12 px-6">
        <div className="flex justify-center items-center font-extrabold text-5xl my-8 text-white">
          <h1>Products</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {parsedResponse.map((product) => (
            <div
              key={product.id}
              className="border border-gray-700 rounded-xl overflow-hidden shadow-xl bg-gray-800 transform transition-transform duration-500 hover:scale-105"
            >
              <Link href={`/products/${product.id}`}>
                <Image
                  src={product.image}
                  alt={product.title}
                  className="w-full h-60 object-cover"
                  width={500}
                  height={400}
                  priority
                />
              </Link>
              <div className="p-6 space-y-4">
                <h2 className="text-xl font-semibold text-gray-100 hover:text-gray-300 transition duration-300">
                  {product.title}
                </h2>
                <p className="text-gray-300 text-sm">{product.description}</p>
                <p className="text-lg font-bold text-gray-100">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Server;
