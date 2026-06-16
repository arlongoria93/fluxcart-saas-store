import { products } from "@/data/products";
import ProductCard from "./ProductCard";


export default function FeaturedProducts() {
  return (
    <section className="px-8 py-16">

      <h2 className="text-3xl font-bold">
        Featured Products
      </h2>


      <div className="mt-8 grid gap-6 md:grid-cols-3">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}