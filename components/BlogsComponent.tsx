"use client";
import { Blog } from "@/app/types/blog";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DisplayBlogs = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <section className="mt-16 space-y-12">
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <article
            key={blog._id}
            className="flex flex-col sm:flex-row gap-6 border-b pb-12"
          >
            {/* Image */}
            <div className="relative w-full sm:w-64 h-40 shrink-0 overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={blog.thumbnail}
                alt={blog.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <p className="text-sm text-gray-500">{blog.read}</p>

              <h2 className="mt-2 text-2xl font-semibold text-gray-900">
                {blog.title}
              </h2>

              <p className="mt-3 text-gray-600 line-clamp-3">{blog.body}</p>

              <Link
                href={`blog/${blog._id}`}
                className="mt-4 inline-block text-green-700 font-medium hover:underline"
              >
                <button className="">
                  Read article <ArrowRight className="h-4 w-4 inline-block" />
                </button>
              </Link>
            </div>
          </article>
        ))
      ) : (
        <p className="text-center text-gray-500">
          No blogs available at the moment.
        </p>
      )}
    </section>
  );
};

export default DisplayBlogs;
