"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <Link href={`/products/${product.id}`}>
      <div className="group rounded-xl border border-border bg-card p-4 text-card-foreground transition hover:shadow-lg">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
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

          <button
            onClick={(event) => {
              event.preventDefault();
              addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
              });
            }}
            className="mt-4 w-full rounded-lg bg-primary py-2 text-primary-foreground transition hover:opacity-90"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}
