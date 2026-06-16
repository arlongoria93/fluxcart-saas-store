import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="group rounded-xl border p-4 transition hover:shadow-lg">
        <div className="group rounded-xl border p-4 transition hover:shadow-lg">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
            />
          </div>

          <div className="mt-4">
            <div className="text-sm text-yellow-500">
              {"★".repeat(product.rating)}
            </div>

            <h3 className="mt-2 font-semibold">{product.name}</h3>

            <p className="mt-2 text-lg font-bold">${product.price}</p>

            <button className="mt-4 w-full rounded-lg bg-black py-2 text-white transition hover:bg-gray-800">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
