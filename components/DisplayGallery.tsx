"use client";

import Image from "next/image";
import Player from "next-video/player";
import { galleryItems } from "@/data/localdb";
import { Suspense } from "react";
import VideoFallback from "./VideoSKeleton";

export default function DisplayGallery() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Farm Gallery</h2>
          <p className="mt-3 text-gray-600">
            A closer look at life on our mango farm.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative aspect-video overflow-hidden rounded-lg border bg-gray-100"
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt || "Gallery image"}
                  fill
                  className="object-cover"
                />
              ) : (
                <Suspense fallback={<VideoFallback />}>
                  <Player
                    src={item.src}
                    controls
                    className="h-full w-full object-cover"
                  />
                </Suspense>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
