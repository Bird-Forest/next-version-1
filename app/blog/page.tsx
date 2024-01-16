"use client";
import { Metadata } from "next";
import React, { useEffect, useState } from "react";
// import styles from "../page.module.css";
import { getAllPosts } from "@/services/getPosts";
import PostSearch from "@/components/PostSearch";
import Posts from "@/components/Posts";

export const metadata: Metadata = {
  title: " Blog | Next App",
};

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
      <PostSearch onSearch={setPosts} />
      {loading ? <h3>Loading ...</h3> : <Posts posts={posts} />}
    </>
  );
}
