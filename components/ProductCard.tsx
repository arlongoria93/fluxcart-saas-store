type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};


export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  return (
    <div className="rounded-xl border p-4">

      <div className="h-64 rounded-lg bg-gray-100">
        Image
      </div>

      <h3 className="mt-4 font-semibold">
        {product.name}
      </h3>

      <p className="mt-2 text-gray-600">
        ${product.price}
      </p>

    </div>
  );
}