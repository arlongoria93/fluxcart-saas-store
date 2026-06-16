"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useCart } from "@/context/CartContext";

const iconButtonClass =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-foreground transition hover:bg-muted";

function LogoMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="M8 16V8l4 4 4-4v8" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M6 6h15l-1.5 9h-12z" />
      <path d="M6 6 5 3H2" />
      <circle cx="9" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
    </svg>
  );
}

export default function Navbar() {
  const { cart } = useCart();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav
      aria-label="Main navigation"
      className="grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-border bg-background px-6 py-3 md:px-8"
    >
      <Link
        href="/"
        className="flex shrink-0 items-center gap-2 text-foreground transition hover:opacity-80"
      >
        <LogoMark />
        <span className="text-base font-semibold tracking-tight">FluxStore</span>
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
        <Link
          href="/cart"
          aria-label={
            cartCount > 0 ? `Cart, ${cartCount} items` : "Cart, empty"
          }
          className={`relative ${iconButtonClass}`}
        >
          <CartIcon />
          {cartCount > 0 && (
            <span
              aria-live="polite"
              className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-destructive px-1 text-[10px] font-medium leading-none text-white"
            >
              {cartCount}
            </span>
          )}
        </Link>
        <ThemeToggle className={iconButtonClass} />
      </div>
    </nav>
  );
}
