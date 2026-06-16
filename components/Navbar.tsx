import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return <nav>
    <Image src="/images/fluxstore-logo.png" alt="Logo" width={100} height={50} />
    <Link href="/">Home</Link>
    <Link href="/products">Products</Link>
    <Link href="/cart">Cart</Link>
    <Link href="/cart">
    <Image src="/images/cart-icon.svg" alt="Cart Icon" width={24} height={24} />
    </Link>

  </nav>;
}
