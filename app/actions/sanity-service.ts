"use server";
import { writeClient } from "@/sanity/lib/client";
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

// contact
export async function submitContact(formData: {
  name: string;
  email: string;
  message: string;
}) {
  const name = String(formData.get("name") ?? "").trim();
const email = String(formData.get("email") ?? "").trim();
const message = String(formData.get("message") ?? "").trim();

  // console.log(formData as string,{name,email,message})

  if (name=="" || email=="" || message=="") {
    throw new Error("Missing fields");
  }

  await writeClient.create({
    _type: "contact",
    fullName: name,
    email,
    message,
  });

  return { success: true };
}


export default fetchMedia;
export { fetchBlogs };
