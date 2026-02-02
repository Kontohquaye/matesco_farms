const partners = [
  {
    name: "Blue Skies Company Limited",
    logo: "https://files.edgestore.dev/9fafx9jpqygtarv1/MatescoFarms/_public/blueskies.png",
  },
  {
    name: "HPW Ghana",
    logo: "https://files.edgestore.dev/9fafx9jpqygtarv1/MatescoFarms/_public/hpw.png",
  },
  {
    name: "BOMART Company Limited",
    logo: "https://files.edgestore.dev/9fafx9jpqygtarv1/MatescoFarms/_public/bomarts.png",
  },
  {
    name: "Agropal Company Limited",
    logo: "https://files.edgestore.dev/9fafx9jpqygtarv1/MatescoFarms/_public/AGROPAL-LOGO-1024x506.png",
  },
];

import Image from "next/image";

export default function TrustPartners() {
  return (
    <section className="bg-gray-50 mb-3" id="partners">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Trusted by Our Partners
          </h2>
          <p className="mt-4 text-gray-600 break-words">
            Our mango production meets the quality and consistency standards
            required by leading agro-processing and export companies.
          </p>
        </div>

        {/* Logos */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center rounded-lg bg-white p-4 shadow-sm"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={160}
                height={80}
                className="max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
