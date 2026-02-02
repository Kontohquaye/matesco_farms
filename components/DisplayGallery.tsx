"use client";

import Image from "next/image";
import Player from "next-video/player";
import { Suspense, useEffect, useState } from "react";
import VideoFallback from "./VideoSKeleton";
import fetchMedia from "@/app/actions/sanity-service";
import { Media } from "@/app/types/gallery";

export default function DisplayGallery() {
  const [media, setMedia] = useState<Media[]>([]);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const getMedia = async () => {
      const data = await fetchMedia();
      setMedia(data);
      setPending(false);
    };
    getMedia();
  }, []);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Farm Gallery</h2>
          <p className="mt-3 text-gray-600">Live from Matesco Farms😁.</p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
          {pending && !media.length && <VideoFallback />}
          {!pending && !media.length && (
            <div className="message text-center">No media available</div>
          )}

          {media.map((item) => (
            <div
              key={item._id}
              className="mb-4 break-inside-avoid overflow-hidden rounded-lg border bg-gray-100"
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt || "Gallery image"}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              ) : (
                <Suspense fallback={<VideoFallback />}>
                  <Player
                    src={item.src}
                    controls
                    className="w-full h-auto"
                    data-gallery="gallery"
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
