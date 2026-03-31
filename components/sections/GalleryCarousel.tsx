"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState, useRef } from "react";
import Image from "next/image";

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  aspect: string;
  zoom?: number;
}

interface GalleryCarouselProps {
  images: GalleryImage[];
}

export default function GalleryCarousel({ images }: GalleryCarouselProps) {
  const autoplayRef = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      containScroll: "trimSnaps",
      skipSnaps: false,
      dragFree: false,
    },
    [autoplayRef.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    // Pause autoplay during drag
    const handlePointerDown = () => {
      setIsDragging(true);
      autoplayRef.current.stop();
    };

    const handlePointerUp = () => {
      setIsDragging(false);
      if (isPlaying) {
        autoplayRef.current.play();
      }
    };

    emblaApi.on("pointerDown", handlePointerDown);
    emblaApi.on("pointerUp", handlePointerUp);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("pointerDown", handlePointerDown);
      emblaApi.off("pointerUp", handlePointerUp);
    };
  }, [emblaApi, onSelect, isPlaying]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle if not typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      if (e.key === "ArrowLeft") {
        scrollPrev();
      } else if (e.key === "ArrowRight") {
        scrollNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [scrollPrev, scrollNext]);

  // Pause on hover
  const handleMouseEnter = useCallback(() => {
    autoplayRef.current.stop();
    setIsPlaying(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!isDragging) {
      autoplayRef.current.play();
      setIsPlaying(true);
    }
  }, [isDragging]);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        aria-label="Vorige foto"
        className="absolute left-2 md:left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[#111111]/90 p-2 md:p-3 shadow-lg transition-all hover:bg-[#111111] hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#C8A45B] focus:ring-offset-2"
      >
        <svg
          className="h-5 w-5 md:h-6 md:w-6 text-[#F5F5F5]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={scrollNext}
        aria-label="Volgende foto"
        className="absolute right-2 md:right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[#111111]/90 p-2 md:p-3 shadow-lg transition-all hover:bg-[#111111] hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#C8A45B] focus:ring-offset-2"
      >
        <svg
          className="h-5 w-5 md:h-6 md:w-6 text-[#F5F5F5]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Carousel Viewport - Center mode with clipped side cards */}
      <div className="overflow-hidden mx-auto max-w-7xl" ref={emblaRef}>
        <div className="flex embla__container gap-2 md:gap-3 lg:gap-4">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="flex-[0_0_100%] md:flex-[0_0_380px] lg:flex-[0_0_380px] min-w-0"
            >
              <div className="h-full">
                <div className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer bg-[#111111]/40 ring-1 ring-[#C8A45B]/15">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
                    style={{ transform: `scale(${image.zoom ?? 1})` }}
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#C8A45B]/0 group-hover:bg-[#C8A45B]/10 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
