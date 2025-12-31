"use server";
import { client } from "@/sanity/lib/client";
import { blogById, blogsQuery, postsQuery } from "../queries/global";

const fetchMedia = async () => {
  const media = await client.fetch(postsQuery);
  //   console.log(media);
  return media;
};

const fetchBlogs = async () => {
  const media = await client.fetch(blogsQuery);

  return media;
};

export async function fetchBlogById(id: string) {
  return client.fetch(blogById, { id });
}

export default fetchMedia;
export { fetchBlogs };
