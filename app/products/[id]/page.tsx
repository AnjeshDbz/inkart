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

// ✅ FIXED IMPORT PATH
import { products as allProducts } from "../../data/products";

export default function ProductDetailsPage() {
  const params = useParams();

  // ✅ FIXED PARAM TYPE ISSUE (important for Vercel build)
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const product = allProducts.find((p) => p.id === id);

  const relatedProducts = allProducts
    .filter((p) => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  const [activeImage, setActiveImage] = useState<string | undefined>(
    product?.image,
  );
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<"desc" | "info" | "review">("desc");


  if (!product) {
    return (
      <div className="p-10 text-center">
        <p>Product not found</p>
        <Link
          href="/products"
          className="text-blue-500 hover:underline mt-4 inline-block"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-white">
      <div className="py-8">
        <div className="max-w-10xl mx-auto px-2 md:px-8">
          {/* Back Button */}
          <Link
            href="/products"
            className="flex items-center gap-2 text-primary hover:text-secondary mb-0"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Back to Products
          </Link>
        </div>

        {/* ================= TOP PRODUCT ================= */}
        <div className="max-w-10xl mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 px-2 md:px-8">
          {/* LEFT: Image + Thumbnails */}
          <div>
            <div className="border  p-2 flex justify-center">
              <Image
                src={activeImage || product.image}
                alt={product.title}
                width={420}
                height={420}
                className="object-contain"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 mt-4">
              {[product.image, product.image, product.image, product.image].map(
                (img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(img)}
                    className=" rounded   ring-primary"
                  >
                    <Image src={img} alt="thumb" width={60} height={60} />
                  </button>
                ),
              )}
            </div>
          </div>

          {/* RIGHT: Product Info */}
          <div>
            <h1 className="text-2xl font-bold">{product.title}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-2">
              <div className="flex text-secondary">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} />
                ))}
              </div>
              <span className="text-sm text-gray-500">{product.rating}</span>
            </div>

            <p className="text-sm text-gray-500 mt-1">460gm</p>

            {/* Price */}
            <div className="mt-3 flex items-center gap-3">
              <span className="text-3xl font-bold">₹{product.price}</span>
              <span className="line-through text-gray-400">₹{product.mrp}</span>
            </div>

            {/* Variant Buttons */}
            <div className="mt-4 flex gap-3">
              {["Single", "Small", "Large"].map((v) => (
                <button
                  key={v}
                  className={`px-4 py-1 border rounded text-sm ${
                    v === "Small"
                      ? "bg-primary text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>

            {/* Description bullets */}
            <ul className="mt-5 text-sm text-gray-600 space-y-1 list-disc ml-4">
              <li>Texture: Crispy cookie exterior with gooey molten center</li>
              <li>Flavor: Rich, velvety, chocolate</li>
              <li>Brand: Sunfeast</li>
              <li>Occasion: Snacks, dessert, midnight cravings</li>
            </ul>

            {/* Subscription box */}
            <div className="mt-6 rounded-xl p-4 space-y-3 bg-[#FAFAFA] shadow">
              <div className="flex justify-between">
                <label className="flex items-center gap-2">
                  <input type="radio" defaultChecked />
                  One-time Purchase
                </label>
                <span className="font-semibold">₹{product.price}</span>
              </div>
              <hr />
              <div className="flex justify-between">
                <label className="flex items-center gap-2">
                  <input type="radio" />
                  Subscribe and Save!
                </label>
                <span className="font-semibold text-green-600">
                  ₹{(product.price * 0.93).toFixed(1)}
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-2">
              Only {product.stock} items left in stock!
            </p>

            {/* Quantity + Buttons */}
            <div className="mt-5 flex items-center gap-3">
              {/* Quantity Box */}
              <div className="relative border-2 border-black rounded-md w-[70px] h-[48px] flex items-center justify-center font-semibold">
                <input
                  type="number"
                  value={qty}
                  min={1}
                  onChange={(e) => setQty(+e.target.value)}
                  className="w-full h-full text-center outline-none appearance-none"
                />
              </div>

              {/* Add to Cart Button */}
              <button className="flex items-center justify-center gap-2 bg-secondary hover:bg-primary text-white px-8 h-[48px] rounded-md font-medium">
                <FontAwesomeIcon icon={faShoppingCart} />
                Add To Cart
              </button>

              {/* Wishlist */}
              <button className="h-[48px] w-[48px] border rounded-md flex items-center justify-center hover:bg-gray-100">
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>

            {/* Pincode */}
            <div className="mt-6">
              <p className="font-semibold mb-2">Check Pincode</p>
              <div className="flex gap-2">
                <input
                  placeholder="Enter pincode"
                  className="border rounded px-3 py-2 flex-1"
                />
                <button className="bg-primary text-white px-4 rounded">
                  Check
                </button>
              </div>
            </div>

            {/* Offers */}
            <div className="mt-6 border rounded-xl p-4">
              <p className="font-semibold mb-2">Buy more, save more!</p>

              <div className="border p-3 rounded flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">
                    Buy 5 items & Get extra 5% off
                  </p>
                  <p className="text-xs text-gray-500">Free Shipping</p>
                </div>
                <button className="border px-3 py-1 rounded text-sm">
                  Grab Deal
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="w-full bg-[#efeeff] py-8 px-2 md:px-8">
          <div className="max-w-10xl  mx-auto ">
            {/* Tab Buttons */}
            <div className="flex gap-3 bg-primary p-2 rounded-xl w-fit">
              {[
                { key: "desc", label: "Description" },
                { key: "info", label: "Additional Info" },
                { key: "review", label: "Review" },
              ].map((t) => (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key as any)}
                  className={`px-5 py-2 rounded-lg text-sm font-medium transition
          ${
            tab === t.key
              ? "bg-white text-secondary shadow"
              : "text-white hover:text-secondary"
          }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="mt-8 text-sm text-gray-700 leading-relaxed">
              {/* Description */}
              {tab === "desc" && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-black">
                    {product.title}
                  </h2>

                  <p>{product.description}</p>

                  
                </div>
              )}

              {/* Additional Info */}
              {tab === "info" && (
                <div className="space-y-2">
                  <p>
                    <strong>Brand:</strong> {product.brand}
                  </p>
                  <p>
                    <strong>Category:</strong> {product.category}
                  </p>
                  <p>
                    <strong>Stock:</strong> {product.stock}
                  </p>
                  <p>
                    <strong>Rating:</strong> {product.rating}
                  </p>
                </div>
              )}

              {/* Review */}
              {tab === "review" && (
                <div className="text-gray-500">
                  <p>No reviews yet.</p>
                  <p className="mt-2">Be the first to review this product.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 px-2 md:px-8 max-w-10xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Related Products
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((item) => (
                <Link
                  key={item.id}
                  href={`/products/${item.id}`}
                  className="bg-white rounded-xl border border-gray-300 shadow-sm hover:shadow-md transition p-2 md:p-3 flex flex-col cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative w-full h-[200px] overflow-hidden rounded-lg bg-white flex items-center justify-center">
                    {/* Heart */}
                    <div className="absolute top-2 right-2 z-10">
                      <button
                        onClick={(e) => e.preventDefault()}
                        className="w-8 h-8 rounded-full bg-white border border-[#d5d5d5] text-primary hover:text-secondary transition flex items-center justify-center"
                      >
                        <FontAwesomeIcon icon={faHeart} />
                      </button>
                    </div>

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  {/* Title */}
                  <p className="text-sm text-gray-700 line-clamp-2 mt-2">
                    {item.title}
                  </p>

                  {/* Brand */}
                  <p className="text-xs text-gray-500">{item.brand}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mt-1">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} size="xs" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">
                      ({item.rating})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mt-2 flex items-center gap-2">
                    <span className="font-bold text-md">₹{item.price}</span>
                    <span className="text-sm line-through text-gray-400">
                      ₹{item.mrp}
                    </span>
                    <span className="text-xs text-red-500 font-medium">
                      {Math.round(((item.mrp - item.price) / item.mrp) * 100)}%
                      OFF
                    </span>
                  </div>

                  {/* Stock */}
                  <p className="text-xs text-green-600 mt-1">
                    {item.stock} in stock
                  </p>

                  {/* Buttons */}
                  <div className="mt-auto flex items-center gap-2 pt-3">
                    <button
                      onClick={(e) => e.preventDefault()}
                      className="flex-1 bg-[#FF681A] hover:bg-primary text-white py-2 rounded-md text-sm font-medium"
                    >
                      Buy Now
                    </button>

                    <button
                      onClick={(e) => e.preventDefault()}
                      className="w-10 h-10 border rounded-md flex items-center justify-center text-[#000958] hover:bg-gray-100"
                    >
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
