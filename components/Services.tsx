const data = [
  {
    title: "Sustainable Mango Cultivation",
    text: "We cultivate mangoes across approximately 150 acres in Somanya, using environmentally responsible farming methods that promote long-term productivity and soil health.",
  },
  {
    title: "Quality Fruit Production",
    text: "Our mangoes are carefully grown and harvested to ensure superior taste, freshness, and consistency, meeting both local and international quality standards.",
  },
  {
    title: "Quality Control & Food Safety",
    text: "We apply good agricultural practices and strict quality control at every stage of production to deliver mangoes that are safe, healthy, and market-ready.",
  },
  {
    title: "Local & Export Supply",
    text: "Our produce is supplied to leading agro-processing and export companies, as well as local markets across Ghana.",
  },
];
export default function WhatWeDo() {
  return (
    <section className="bg-white py-20 overflow-x-hidden" id="what-we-do">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            What We Do
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            At Matesco Farms, we produce premium mangoes through sustainable
            farming, strict quality standards, and responsible agricultural
            practices that serve both local and international markets.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item) => (
            <div key={item.title} className="rounded-xl border p-6 break-words">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-gray-600">
          Beyond farming, we are committed to community development, job
          creation, and supporting the growth of Ghana’s agricultural sector.
        </p>
      </div>
    </section>
  );
}
