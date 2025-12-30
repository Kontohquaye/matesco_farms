import { Suspense } from "react";
import FarmVideo from "../components/FarmMedia";
import Hero from "../components/HeroSection";
import TrustPartners from "../components/Partners";
import WhatWeDo from "../components/Services";
import VideoFallback from "@/components/VideoSKeleton";

export default function Home() {
  return (
    <div className="container w-full max-w-screen">
      <Hero />

      <WhatWeDo />

      <Suspense fallback={<VideoFallback />}>
        <FarmVideo />
      </Suspense>

      <TrustPartners />
    </div>
  );
}
