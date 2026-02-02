"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-green-700 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/matesco_farms.png"
            alt="Matesco Farms Logo"
            width={40}
            height={40}
            priority
          />
          <span className="text-2xl font-bold">Matesco Farms</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-base font-medium">
          <Link href="/" className="hover:text-green-200">
            Home
          </Link>
          <Link href="/about" className="hover:text-green-200">
            About
          </Link>
          <Link href="/gallery" className="hover:text-green-200">
            Gallery
          </Link>
          <Link href="/blog" className="hover:text-green-200">
            Blogs
          </Link>
          <Link href="/contact" className="hover:text-green-200">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-green-600 bg-green-700 px-4 py-4 space-y-3 text-base font-medium">
          <Link href="/" onClick={() => setOpen(false)} className="block">
            Home
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} className="block">
            About
          </Link>
          <Link
            href="/gallery"
            onClick={() => setOpen(false)}
            className="block"
          >
            Gallery
          </Link>
          <Link href="/blog" onClick={() => setOpen(false)} className="block">
            Blogs
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
