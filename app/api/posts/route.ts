import { NextResponse } from "next/server";
import { posts } from "./[id]/posts"

// Можливість в одній функції віддати як усі пости, так і за пошуком по заголовку

// http://localhost:3000/api/posts?q=city
// http://localhost:3000/api/posts

const API_KEY = process.env.OMDB_SECRET

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  const query = searchParams.get('q');

  let currentPosts = posts;

  if (query) {
    currentPosts = posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
  }

  return NextResponse.json(currentPosts)
}

export async function POST(req: Request) {
    const body = await req.json()
    return NextResponse.json({body})
}
// Для прикладу з ключем
// const API_KEY = process.env.OMDB_SECRET
// export async function GET(req: Request) {
//   const API_KEY = process.env.OMDB_SECRET;
//   const query = 'matrix';
//   const movies = await fetch(
//     `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
//   ).then(res => res.json())

//   return NextResponse.json(movies)
// }