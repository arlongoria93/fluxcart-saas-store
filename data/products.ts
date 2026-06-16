import { Product } from "@/types/product";

export function getProductById(id: number) {
  return products.find((product) => product.id === id);
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199,
    rating: 5,
    image: "/images/headphones.png",
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 249,
    rating: 4,
    image: "/images/watch.png",
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    price: 129,
    rating: 5,
    image: "/images/keyboard.png",
  },
];