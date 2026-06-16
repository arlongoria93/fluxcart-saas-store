import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/images/fluxstore-icon.svg"
          alt="FluxStore Logo"
          width={120}
          height={120}
        />
      </Link>

      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/products">Products</Link>
        </li>

        <li>
          <Link href="/about">About</Link>
        </li>

        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
