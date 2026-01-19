import { lowestPriceProducts } from "../data/homepage";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Shop Products</h1>
      <div className="grid md:grid-cols-4 gap-6">
        {lowestPriceProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
