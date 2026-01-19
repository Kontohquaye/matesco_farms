import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { fetchBlogById } from "@/app/actions/sanity-service";
import { ArrowRight } from "lucide-react";
import NotFound from "@/components/NotFound";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function BlogDetailsPage({ params }: PageProps) {
  const blog = await fetchBlogById((await params).id);

  if (!blog) {
    return <NotFound />;
  }

  return (
    <main className="bg-white">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
        {/* Header */}
        <header className="mb-10">
          <p className="text-sm text-gray-500">
            {blog.read} · By {blog.author}
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-900">
            {blog.title}
          </h1>
        </header>

        {/* Thumbnail */}
        {blog.thumbnail && (
          <div className="relative mb-10 h-64 w-full overflow-hidden rounded-lg">
            <Image
              src={blog.thumbnail}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Markdown Body */}
        <div className="prose prose-lg max-w-none prose-green">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({ href, children }) => {
                if (
                  href &&
                  /\.(mp4|mov|webm)$/i.test(href.replace(/\)$/, ""))
                ) {
                  const cleanHref = href.replace(/\)$/, "");

                  const type = cleanHref.toLowerCase().endsWith(".mov")
                    ? "video/quicktime"
                    : cleanHref.toLowerCase().endsWith(".webm")
                      ? "video/webm"
                      : "video/mp4";

                  return (
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      className="my-6 w-full max-h-[320px] rounded-lg object-contain bg-black"
                    >
                      <source src={cleanHref} type={type} />
                    </video>
                  );
                }

                return (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 underline"
                  >
                    {children}
                  </a>
                );
              },
            }}
          >
            {blog.body}
          </ReactMarkdown>
        </div>

        {/* Footer */}
        <footer className="mt-16 border-t pt-8">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-green-700 font-medium hover:underline"
          >
            Back to blogs
            <ArrowRight className="h-4 w-4 rotate-180" />
          </a>
        </footer>
      </article>
    </main>
  );
}
