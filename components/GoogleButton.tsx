"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React from "react";
import styles from "../app/page.module.css";

export default function GoogleButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";
  return (
    <div>
      <button
        onClick={() => signIn("google", { callbackUrl })}
        className={styles.btnGoogle}
      >
        Sign in with Google
      </button>
    </div>
  );
}
