import { submitContact } from "../actions/sanity-service.ts";

export default function ContactPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
        {/* Page Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-600 wrap-break-word">
            Get in touch with Matesco Farms for partnerships, supply inquiries,
            or general information.
          </p>
        </header>

        {/* Contact Info */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-900">Our Location</h2>
          <p className="mt-4 text-gray-600 wrap-break-word">
            Matesco Farms is located in Somanya, in the Eastern Region of Ghana.
            We work with partners across Ghana and international markets.
          </p>
        </section>

        {/* Contact Details */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900">
            Contact Details
          </h2>

          <div className="mt-4 space-y-2 text-gray-600 wrap-break-word">
            <p>
              <span className="font-medium text-gray-900">Email:</span>{" "}
              info@matescofarms.com
            </p>
            <p>
              <span className="font-medium text-gray-900">Phone:</span>{" "}
              +233 (0)247632111 / (0)556114561 / (0)200943039
            </p>
            <p>
              <span className="font-medium text-gray-900">Address:</span>{" "}
              Somanya, Eastern Region, Ghana
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-900">
            Send Us a Message
          </h2>

          <form
            action={submitContact}
            className="mt-6 space-y-6 max-w-xl"
          >
            <div>
              <label className="block text-sm font-medium text-gray-900">
                Full Name
              </label>
              <input
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Tell us how we can help you"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center rounded-md bg-green-700 px-6 py-3 text-white font-medium hover:bg-green-800 transition"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
