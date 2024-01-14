import Link from "next/link";
import React from "react";
import styles from "../app/page.module.css";

export default function TheHeader() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.link}>
        Home
      </Link>
      <Link href="/blog" className={styles.link}>
        Blog
      </Link>
      <Link href="/about" className={styles.link}>
        About
      </Link>
    </header>
  );
}
