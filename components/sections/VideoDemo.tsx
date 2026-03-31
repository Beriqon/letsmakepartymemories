"use client";

import { motion } from "framer-motion";
import GalleryCarousel, { GalleryImage } from "./GalleryCarousel";

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/gallerij/lmpm-gallerij.jpg",
    alt: "Photobooth event foto",
    aspect: "aspect-square",
    zoom: 1.12,
  },
  {
    id: 2,
    src: "/gallerij/lmpm-gallerij2.jpg",
    alt: "Photobooth event foto",
    aspect: "aspect-[4/3]",
  },
  {
    id: 3,
    src: "/gallerij/41e46925-52e2-410a-8d95-a633ae63d5b8.jpg",
    alt: "Photobooth event foto",
    aspect: "aspect-[3/4]",
  },
  {
    id: 4,
    src: "/gallerij/9173bc40-1b2d-44dc-9f6e-c5a76cf69c18.jpg",
    alt: "Photobooth event foto",
    aspect: "aspect-[4/3]",
  },
  {
    id: 5,
    src: "/gallerij/986a8d16-e6e0-49ba-aac8-804c097eac62.jpg",
    alt: "Photobooth event foto",
    aspect: "aspect-square",
  },
  {
    id: 6,
    src: "/gallerij/Screenshot_20260306_205612_Gallery.jpg",
    alt: "Photobooth event foto",
    aspect: "aspect-[4/3]",
  },
  {
    id: 7,
    src: "/gallerij/20260116_200321.jpg",
    alt: "Photobooth event foto",
    aspect: "aspect-square",
  },
  {
    id: 8,
    src: "/gallerij/20260208_124156.jpg",
    alt: "Photobooth event foto",
    aspect: "aspect-[4/3]",
  },
  {
    id: 9,
    src: "/gallerij/wetranfer1.jpg",
    alt: "Photobooth event foto",
    aspect: "aspect-square",
  },
];

export default function VideoDemo() {
  return (
    <section className="relative overflow-hidden bg-[#2A2A2A] py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-7xl text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6 text-4xl font-bold text-[#F5F5F5] md:text-5xl lg:text-6xl font-serif leading-tight">
            Zo ziet een event met onze photobooth eruit
          </h2>
          <p className="text-xl leading-relaxed text-[#F5F5F5] md:text-2xl">
            Van bruiloften tot verjaardagen – onze photobooth maakt elk moment onvergetelijk.
          </p>
        </motion.div>

        {/* Gallery Carousel */}
        <GalleryCarousel images={galleryImages} />
      </div>
    </section>
  );
}
