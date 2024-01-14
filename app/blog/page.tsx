// "use client"
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import styles from "../page.module.css";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) throw new Error("Unable to fetch posts");
  return response.json();
}

export const metadata: Metadata = {
  title: " Blog | Next App",
};

export default async function Blog() {
  const posts = await getData();
  // console.log(posts);
  // УВАГА  {posts.map((post: any) => (  кругла скобка
  return (
    <>
      <h1>Blog page</h1>
      <ul className={styles.posts}>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`} className={styles.post}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
