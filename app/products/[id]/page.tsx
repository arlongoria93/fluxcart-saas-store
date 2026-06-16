import { getProductById } from "@/data/products";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = getProductById(Number(id));

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl p-8">
      <h1 className="text-4xl font-bold">{product.name}</h1>

      <p className="mt-4 text-2xl font-semibold">${product.price}</p>
    </main>
  );
}
