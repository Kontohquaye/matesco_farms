import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        {/* Icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <SearchX className="h-8 w-8 text-green-700" />
        </div>

        {/* Text */}
        <h1 className="mt-6 text-4xl font-bold text-gray-900">
          Page not found
        </h1>

        <p className="mt-4 text-gray-600">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or may have
          been moved.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-green-700 px-6 py-3 text-white font-medium hover:bg-green-800 transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Go home
          </Link>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-6 py-3 text-gray-700 font-medium hover:bg-gray-50 transition"
          >
            Browse blogs
          </Link>
        </div>

        <p className="mt-10 text-sm text-gray-400">Error code: 404</p>
      </div>
    </main>
  );
}
