import DisplayBlogs from "@/components/BlogsComponent";
import { fetchBlogs } from "../actions/sanity-service";
import type { Blog } from "../types/blog";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function BlogPage() {
  const blogs: Blog[] = await fetchBlogs();

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
        {/* Page Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Insights & Updates
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Stories, updates, and insights from Matesco Farms.
          </p>
        </header>

        {/* Blog List */}
        {!blogs && (
          <div className="mt-16 space-y-12 text-center"> No Blogs Yet</div>
        )}
        {blogs && <DisplayBlogs blogs={blogs} />}
      </div>
    </main>
  );
}
