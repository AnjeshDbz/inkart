import Image from "next/image";
import Link from "next/link";
import { Product } from "../data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="min-w-60 bg-white rounded-card shadow-card p-4 snap-start">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.image}
          alt={product.title}
          width={240}
          height={200}
          className="rounded-md"
        />
        <h3 className="mt-2 font-semibold">{product.title}</h3>
        <p className="text-sm text-gray-500">{product.brand}</p>
        <div className="flex items-center gap-2">
          <span className="font-bold text-brand.primary">₹{product.price}</span>
          <span className="line-through text-sm text-gray-400">₹{product.mrp}</span>
        </div>
        <button className="mt-3 w-full bg-brand.secondary text-white py-2 rounded-md">
          Buy Now
        </button>
      </Link>
    </div>
  );
}
