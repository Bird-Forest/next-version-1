import React from "react";
import styles from "../app/page.module.css";
import Link from "next/link";

type Props = {
  posts: any[];
};
// УВАГА  {posts.map((post: any) => (  кругла скобка
export default function Posts({ posts }: Props) {
  return (
    <ul className={styles.posts}>
      {posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`} className={styles.post}>
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
