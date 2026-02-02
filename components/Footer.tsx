// ©
const date = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        {/* Main footer content */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Brand & description */}
          <div className="max-w-md">
            <h3 className="text-xl font-semibold">Matesco Farms</h3>
            <p className="mt-3 text-sm text-white/80 wrap-break-word">
              A proudly Ghanaian mango farming company based in Somanya, Eastern
              Region. We are committed to sustainable agriculture, quality fruit
              production, and community impact.
            </p>
          </div>

          {/* Navigation links */}
          <div className="flex flex-col gap-2 text-sm">
            <span className="font-semibold">Company</span>
            <a href="/about" className="text-white/80 hover:text-white">
              About Us
            </a>
            <a href="/#what-we-do" className="text-white/80 hover:text-white">
              What We Do
            </a>
            <a href="/#partners" className="text-white/80 hover:text-white">
              Partners
            </a>
            <a href="/contact" className="text-white/80 hover:text-white">
              Contact
            </a>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-2 text-sm">
            <span className="font-semibold">Contact</span>
            <p className="text-white/80 wrap-break-word">
              Somanya, Eastern Region, Ghana
            </p>
            <p className="text-white/80">Email: info.matescofarms@gmail.com</p>
            <p className="text-white/80">
              Phone: +233 (0)247632111/ (0)556114561/ (0)200943039
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/20" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-3 text-sm text-white/70 md:flex-row md:justify-between">
          <p>&copy; {date} Matesco Farms. All rights reserved.</p>
          <p>Quality • Integrity • Sustainability</p>
        </div>
      </div>
    </footer>
  );
}
