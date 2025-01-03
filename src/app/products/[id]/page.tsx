"use client";

import React from "react";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { ClipLoader } from 'react-spinners';

const ProductPage = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = React.useState<any>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
      const productData = await res.json();
      setProduct(productData);
    };

    fetchData();
  }, [params.id]);

  const addToCart = (product: any) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="text-center">
          <ClipLoader color="#00BFFF" size={50} />
          <p className="mt-4 text-white text-xl">Loading...</p>
        </div>
      </div>
    );}

  return (
    <div className="bg-gradient-to-r from-teal-400 to-blue-500 min-h-screen py-10">
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="flex-1 max-w-md mx-auto">
            <Image
              src={product.image}
              alt={product.title}
              width={600}
              height={600}
              className="rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="flex-1 space-y-5">
            <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight hover:text-gray-600 transition duration-300">
              {product.title}
            </h1>
            <p className="text-lg text-gray-600">{product.description}</p>
            <p className="text-xl font-semibold text-blue-600">Price: ${product.price}</p>
            <div className="flex gap-4">
              <p className="text-md text-gray-500">
                <strong>Category:</strong> {product.category}
              </p>
              <p className="text-md text-gray-500">
                <strong>Rating:</strong> {product.rating.rate} ⭐ ({product.rating.count} reviews)
              </p>
            </div>
            <button
              onClick={() => addToCart(product)}
              className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md transform transition duration-300 hover:bg-teal-700 hover:scale-105 active:scale-95"
            >
              <FaShoppingCart className="inline-block mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
