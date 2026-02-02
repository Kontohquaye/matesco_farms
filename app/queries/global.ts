import { groq } from "next-sanity";

export const postsQuery = groq`
  *[_type == "media" ]|order(_createdAt desc)`;
export const blogsQuery = groq`
  *[_type == "blog"] | order(_createdAt desc) {
    _id,
    title,
    body,
    read,
    thumbnail,
    author
  }
`;

export const blogById = groq`
  *[_type == "blog" && _id == $id][0]{
    _id,
    title,
    body,
    author,
    read,
    thumbnail,
    _createdAt
  }
`;
