import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b px-8 py-4 bg-white">
      
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
            className="font-medium text-gray-800 hover:text-blue-600"
          >
            Home
          </Link>
        </li>

        <li>
          <Link 
            href="/products"
            className="font-medium text-gray-800 hover:text-blue-600"
          >
            Products
          </Link>
        </li>

        <li>
          <Link 
            href="/about"
            className="font-medium text-gray-800 hover:text-blue-600"
          >
            About
          </Link>
        </li>
      </ul>

    </nav>
  );
}