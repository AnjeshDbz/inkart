import { notFound } from "next/navigation";
import { lowestPriceProducts } from "../../data/homepage";
import Image from "next/image";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = lowestPriceProducts.find((p) => p.id === params.id);
  if (!product) return notFound();

  return (
    <section className="mx-auto max-w-4xl px-4 py-10 grid md:grid-cols-2 gap-6">
      <Image src={product.image} alt={product.title} width={400} height={300} />
      <div>
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="mt-2 text-xl text-brand.primary">₹{product.price}</p>
        <button className="mt-4 bg-brand.secondary text-white px-6 py-3 rounded-md">
          Buy Now
        </button>
      </div>
    </section>
  );
}
