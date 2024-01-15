import Link from "next/link";
import React from "react";
import styles from "../app/page.module.css";
import Navigation from "./Navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function TheHeader() {
  return (
    <header className={styles.header}>
      <Navigation navLinks={navItems} />
    </header>
  );
}

//  <Link href="/" className={styles.link}>
//       Home
//     </Link>
//     <Link href="/blog" className={styles.link}>
//       Blog
//     </Link>
//     <Link href="/about" className={styles.link}>
//       About
//     </Link>
