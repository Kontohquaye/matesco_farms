import Image from "next/image";

const blogs = [
  {
    title: "Growing Mangoes Sustainably in Ghana",
    excerpt:
      "An inside look at how sustainable farming practices help us produce high-quality mangoes while protecting the environment.",
    readTime: "4 min read",
  },
  {
    title: "From Blossom to Harvest: Our Mango Journey",
    excerpt:
      "Explore the stages of mango cultivation at Matesco Farms, from flowering to harvesting at peak ripeness.",
    readTime: "5 min read",
  },
  {
    title: "Why Quality Control Matters in Mango Farming",
    excerpt:
      "Learn how strict quality and food safety standards ensure fresh, healthy mangoes for local and international markets.",
    readTime: "3 min read",
  },
  {
    title: "Partnering with Agro-Processors and Exporters",
    excerpt:
      "How strong partnerships with trusted agro-processing companies help us deliver consistent quality year after year.",
    readTime: "6 min read",
  },
  {
    title: "Agriculture as a Tool for Community Growth",
    excerpt:
      "Discover how mango farming supports job creation, skills development, and local economic growth in Somanya.",
    readTime: "4 min read",
  },
];

export default function BlogPage() {
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
        <section className="mt-16 space-y-12">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="flex flex-col sm:flex-row gap-6 border-b pb-12"
            >
              {/* Image */}
              <div className="relative w-full sm:w-64 h-40 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="https://files.edgestore.dev/9fafx9jpqygtarv1/MatescoFarms/_public/AGROPAL-LOGO-1024x506.png"
                  alt="Matesco Farms blog image"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-sm text-gray-500">{blog.readTime}</p>

                <h2 className="mt-2 text-2xl font-semibold text-gray-900">
                  {blog.title}
                </h2>

                <p className="mt-3 text-gray-600 wrap-break-word">
                  {blog.excerpt}
                </p>

                <button className="mt-4 inline-flex text-green-700 font-medium hover:underline">
                  Read article →
                </button>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
