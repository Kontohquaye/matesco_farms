export default function HeroSection() {
  return (
    <section className="relative flex min-h-[80vh] w-full items-center overflow-hidden">
      {/* Background image */}
      {/* "url('https://files.edgestore.dev/9fafx9jpqygtarv1/MatescoFarms/_public/banner_matesco.jpg')", */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://files.edgestore.dev/310n8nblq7pq3vwb/myMatesco/_public/background.jpg')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white py-2">
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          Quality Mangoes, Grown the Right Way in Ghana
        </h1>

        <p className="mt-6 text-lg text-white/90 md:text-xl">
          Based in Somanya, Matesco Farms is a Ghanaian mango producer that manages over 150 acres of mango farmland using sustainable and quality-focused agricultural practices
        </p>

        <p className="mt-4 text-sm uppercase tracking-wide text-white/70">
          Trusted by leading agro-processing and export companies
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/about"
            className="rounded-full bg-yellow-400 px-8 py-3 font-semibold text-black hover:bg-yellow-300"
          >
            Learn About Our Farm
          </a>
          <a
            href="/blog"
            className="rounded-full border border-white/70 px-8 py-3 font-semibold text-white hover:bg-white hover:text-black"
          >
            Farm Insights
          </a>
        </div>
      </div>
    </section>
  );
}
