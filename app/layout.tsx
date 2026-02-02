import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SanityLive } from "@/sanity/lib/live";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matesco Farms",
  description: "Supplier and distributer of mangoes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className}  antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <SanityLive />
      </body>
    </html>
  );
}
