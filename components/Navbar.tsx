"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav
      aria-label="Main navigation"
      className="flex items-center justify-between border-b border-border bg-background px-8 py-4"
    >
      <Link href="/">
        <Image
          src="/images/fluxstore-icon.svg"
          alt="FluxStore Logo"
          width={120}
          height={120}
        />
      </Link>

      <ul className="flex gap-8">
        <li>
          <Link
            href="/"
            className="font-medium text-foreground transition hover:text-accent"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/products"
            className="font-medium text-foreground transition hover:text-accent"
          >
            Products
          </Link>
        </li>

        <li>
          <Link
            href="/about"
            className="font-medium text-foreground transition hover:text-accent"
          >
            About
          </Link>
        </li>
      </ul>

      <div className="flex items-center gap-3">
        <ThemeToggle />

        <Link
          href="/cart"
          className="relative"
          aria-label={
            cartCount > 0 ? `Cart, ${cartCount} items` : "Cart, empty"
          }
        >
          <Image
            src="/images/cart-icon.svg"
            alt=""
            width={60}
            height={60}
            aria-hidden="true"
          />
          {cartCount > 0 && (
            <span
              aria-live="polite"
              className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-xs text-white"
            >
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
