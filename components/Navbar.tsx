"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useCart } from "@/context/CartContext";

const iconButtonClass =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-foreground transition hover:bg-muted";

export default function Navbar() {
  const { cart } = useCart();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav
      aria-label="Main navigation"
      className="grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-border bg-background px-6 py-3 md:px-8"
    >
      <Link href="/" className="flex shrink-0 items-center">
        <Image
          src="/images/fluxstore-icon.svg"
          alt="FluxStore Logo"
          width={40}
          height={40}
          className="h-10 w-auto"
        />
      </Link>

      <ul className="flex items-center justify-center gap-6 md:gap-8">
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

      <div className="flex items-center justify-end gap-1">
        <ThemeToggle className={iconButtonClass} />

        <Link
          href="/cart"
          aria-label={
            cartCount > 0 ? `Cart, ${cartCount} items` : "Cart, empty"
          }
          className={`relative ${iconButtonClass}`}
        >
          <Image
            src="/images/cart-icon.svg"
            alt=""
            width={20}
            height={20}
            className="h-5 w-5"
            aria-hidden="true"
          />
          {cartCount > 0 && (
            <span
              aria-live="polite"
              className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-destructive px-1 text-[10px] font-medium leading-none text-white"
            >
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
