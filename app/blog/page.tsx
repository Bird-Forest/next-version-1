"use client";
// import { Metadata } from "next";
import React, { useEffect, useState } from "react";
import { revalidatePath } from "next/cache";
// import styles from "../page.module.css";
import { getAllPosts } from "@/services/getPosts";
import PostSearch from "@/components/PostSearch";
import Posts from "@/components/Posts";
import Link from "next/link";
import NewPostForm from "@/components/NewPostForm";

// export const metadata: Metadata = {
//   title: " Blog | Next App",
// };

export const revalidate = 10;

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  // console.log(posts);

  return (
    <>
      <h1>Blog page</h1>
      <Link href="/blog/new">Add new post</Link>
      <PostSearch onSearch={setPosts} />
      {loading ? <h3>Loading ...</h3> : <Posts posts={posts} />}
    </>
  );
}
