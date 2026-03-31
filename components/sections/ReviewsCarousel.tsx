"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState, useRef } from "react";

export interface Review {
  stars: number;
  text: string;
  author: string;
  event: string;
  date: string;
  initials: string;
}

interface ReviewsCarouselProps {
  reviews: Review[];
}

export default function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
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
        aria-label="Vorige review"
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
        aria-label="Volgende review"
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
        <div className="flex embla__container">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] md:flex-[0_0_380px] lg:flex-[0_0_380px] min-w-0"
            >
              {/* Padding to create half-visible side cards effect */}
              <div className="h-full pr-2 md:pr-3 lg:pr-4">
                <div className="h-full rounded-2xl bg-[#111111] p-6 md:p-8 border border-[#C8A45B]/20 transition-all hover:shadow-lg hover:border-[#C8A45B]/40">
                  {/* Stars */}
                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex text-[#C8A45B]">
                      {[...Array(review.stars)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-5 w-5 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-[#F5F5F5]/60">
                      {review.event}{review.date ? ` • ${review.date}` : ""}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="mb-6 leading-relaxed text-[#F5F5F5]">
                    "{review.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C8A45B]/30 text-sm font-semibold text-[#F5F5F5]">
                      {review.initials}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#F5F5F5]">
                        {review.author}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
