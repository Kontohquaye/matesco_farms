import Player from "next-video/player";

export default function FarmVideo() {
  return (
    <section className="w-full overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 py-16">
        {/* Section heading */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-black">From the Farm</h2>
          <p className="mt-3 text-gray-600">
            A glimpse into how we harvest, and care for our mangoes.
          </p>
        </div>

        {/* Video */}
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          {/* https://files.edgestore.dev/9fafx9jpqygtarv1/MatescoFarms/_public/0119%20.mp4 */}

          <Player src="https://files.edgestore.dev/310n8nblq7pq3vwb/Videos/_public/0119%20(3).mp4" />
        </div>
      </div>
    </section>
  );
}
