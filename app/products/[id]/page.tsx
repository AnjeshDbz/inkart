"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faStar,
  faPlus,
  faMinus,
  faShoppingCart,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { products as allProducts } from "../../data/products";

/* ------------------ PAGE ------------------ */
export default function ProductDetailsPage() {
  const params = useParams();
  const product = allProducts.find((p) => p.id === params.id);
  const relatedProducts = allProducts.filter(
    (p) => p.category === product?.category && p.id !== product?.id
  ).slice(0, 4);

  const [activeImage] = useState(product?.image);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<"desc" | "info">("desc");

  if (!product) return (
    <div className="p-10 text-center">
      <p>Product not found</p>
      <Link href="/products" className="text-blue-500 hover:underline mt-4 inline-block">
        Back to Products
      </Link>
    </div>
  );

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href="/products"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back to Products
        </Link>

        {/* ------------------ TOP PRODUCT ------------------ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* IMAGE GALLERY */}
          <div>
            <div className="border rounded-xl p-6 flex justify-center">
              <Image
                src={activeImage || product.image}
                alt={product.title}
                width={450}
                height={450}
                className="object-contain"
              />
            </div>
          </div>

          {/* PRODUCT INFO */}
          <div>
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-gray-600 mt-1">{product.brand}</p>
            <p className="text-gray-600 text-sm">{product.category}</p>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} />
                ))}
              </div>
              <span className="text-sm text-gray-500">({product.rating})</span>
              <span className="text-xs text-green-600 ml-auto">{product.stock} in stock</span>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <span className="text-3xl font-bold">₹{product.price}</span>
              <span className="line-through text-gray-400">₹{product.mrp}</span>
              <span className="text-red-500 font-semibold">
                {Math.round(((product.mrp - product.price) / product.mrp) * 100)}% OFF
              </span>
            </div>

            {/* Quantity + Buttons */}
            <div className="mt-6 flex items-center gap-4">
              <div className="flex border rounded">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-2">
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span className="px-4 py-2">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-3 py-2">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>

              <button className="bg-[#FF681A] text-white px-6 py-2 rounded flex items-center gap-2">
                <FontAwesomeIcon icon={faShoppingCart} />
                Add to Cart
              </button>

              <button className="border p-3 rounded">
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
          </div>
        </div>

        {/* ------------------ TABS ------------------ */}
        <div className="mt-12">
          <div className="flex gap-4 border-b">
            <button onClick={() => setTab("desc")} className={`pb-2 ${tab === "desc" ? "border-b-2 border-orange-500 font-semibold" : ""}`}>
              Description
            </button>
            <button onClick={() => setTab("info")} className={`pb-2 ${tab === "info" ? "border-b-2 border-orange-500 font-semibold" : ""}`}>
              Additional Info
            </button>
          </div>

          <div className="mt-4 text-gray-600 text-sm">
            {tab === "desc" && (
              <div>
                <p>{product.description}</p>
                <div className="mt-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Highlights:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {product.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {tab === "info" && (
              <div>
                <p><strong>Brand:</strong> {product.brand}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Stock Available:</strong> {product.stock} units</p>
              </div>
            )}
          </div>
        </div>

        {/* ------------------ RELATED PRODUCTS ------------------ */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Related Products
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((item) => (
                <Link
                  key={item.id}
                  href={`/products/${item.id}`}
                  className="bg-white border rounded-xl p-3 shadow hover:shadow-md transition flex flex-col cursor-pointer"
                >
                  <div className="relative h-45 flex justify-center items-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  <p className="text-sm line-clamp-2 mt-2">{item.title}</p>

                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-bold">₹{item.price}</span>
                    <span className="text-sm line-through text-gray-400">₹{item.mrp}</span>
                  </div>

                  <button
                    onClick={(e) => e.preventDefault()}
                    className="mt-4 bg-[#FF681A] text-white py-2 rounded text-sm hover:opacity-90"
                  >
                    View Details
                  </button>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
