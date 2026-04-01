"use client";

import { motion } from "framer-motion";
import GalleryCarousel, { GalleryImage } from "./GalleryCarousel";

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/gallerij/lmpm-gallerij2.jpg",
    alt: "Photobooth event foto",
    aspect: "aspect-[4/3]",
  },
  {
    id: 2,
    src: "/gallerij/41e46925-52e2-410a-8d95-a633ae63d5b8.jpg",
    alt: "Photobooth event foto",
    aspect: "aspect-[3/4]",
  },
  {
    id: 3,
    src: "/gallerij/9173bc40-1b2d-44dc-9f6e-c5a76cf69c18.jpg",
    alt: "Photobooth event foto",
    aspect: "aspect-[4/3]",
  },
  {
    id: 4,
    src: "/gallerij/986a8d16-e6e0-49ba-aac8-804c097eac62.jpg",
    alt: "Photobooth event foto",
    aspect: "aspect-square",
  },
  {
    id: 5,
    src: "/gallerij/Screenshot_20260306_205612_Gallery.jpg",
    alt: "Photobooth event foto",
    aspect: "aspect-[4/3]",
  },
  {
    id: 6,
    src: "/gallerij/20260116_200321.jpg",
    alt: "Photobooth event foto",
    aspect: "aspect-square",
  },
  {
    id: 7,
    src: "/gallerij/20260208_124156.jpg",
    alt: "Photobooth event foto",
    aspect: "aspect-[4/3]",
  },
  {
    id: 8,
    src: "/gallerij/wetranfer1.jpg",
    alt: "Photobooth event foto",
    aspect: "aspect-square",
  },
];

export default function VideoDemo() {
  return (
    <section className="relative overflow-hidden bg-[#2A2A2A] pt-8 pb-12 md:pt-12 md:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-7xl text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-[#C8A45B] md:text-5xl lg:text-6xl font-serif leading-tight">
            Zo ziet een evenement met onze photobooth{"\u00A0"}eruit
          </h2>
        </motion.div>

        {/* Gallery Carousel */}
        <GalleryCarousel images={galleryImages} />
      </div>
    </section>
  );
}
