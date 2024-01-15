"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "../app/page.module.css";

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};
export default function Navigation({ navLinks }: Props) {
  const pathname = usePathname();

  return (
    <div>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            href={link.href}
            key={link.label}
            className={isActive ? styles.active : styles.link}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
