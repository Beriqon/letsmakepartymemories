"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export interface Review {
  stars: number;
  text: string;
  author: string;
  event: string;
  date: string;
  initials: string;
  /** Pad onder /public/reviews, bv. /reviews/angeliquehaverkamp.png */
  avatarSrc?: string;
}

interface ReviewsCarouselProps {
  reviews: Review[];
}

const AUTOPLAY_MS = 4000;

export default function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  const reviewCount = reviews.length;

  const loopSlides = useMemo(
    () => [...reviews, ...reviews],
    [reviews]
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: "center",
      containScroll: false,
      skipSnaps: false,
      dragFree: false,
    },
    []
  );

  const [isPlaying, setIsPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const isHoveringRef = useRef(false);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    const idx = emblaApi.selectedScrollSnap();
    if (idx === 0) {
      emblaApi.scrollTo(reviewCount - 1, true);
    } else {
      emblaApi.scrollPrev();
    }
  }, [emblaApi, reviewCount]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || reviewCount === 0) return;

    const snapBackIfNeeded = () => {
      const idx = emblaApi.selectedScrollSnap();
      if (idx >= reviewCount) {
        emblaApi.scrollTo(idx - reviewCount, true);
      }
    };

    emblaApi.on("settle", snapBackIfNeeded);
    return () => {
      emblaApi.off("settle", snapBackIfNeeded);
    };
  }, [emblaApi, reviewCount]);

  useEffect(() => {
    if (!emblaApi || reviewCount === 0) return;

    const tick = () => {
      if (!isPlaying || isDragging || isHoveringRef.current) return;
      const idx = emblaApi.selectedScrollSnap();
      if (idx >= reviewCount) {
        emblaApi.scrollTo(idx - reviewCount, true);
        return;
      }
      emblaApi.scrollNext();
    };

    const id = window.setInterval(tick, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [emblaApi, reviewCount, isPlaying, isDragging]);

  useEffect(() => {
    if (!emblaApi) return;

    const handlePointerDown = () => {
      setIsDragging(true);
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    emblaApi.on("pointerDown", handlePointerDown);
    emblaApi.on("pointerUp", handlePointerUp);

    return () => {
      emblaApi.off("pointerDown", handlePointerDown);
      emblaApi.off("pointerUp", handlePointerUp);
    };
  }, [emblaApi]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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

  const handleMouseEnter = useCallback(() => {
    isHoveringRef.current = true;
    setIsPlaying(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    isHoveringRef.current = false;
    if (!isDragging) {
      setIsPlaying(true);
    }
  }, [isDragging]);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
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
        type="button"
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

      <div className="mx-auto max-w-7xl overflow-hidden" ref={emblaRef}>
        <div className="flex embla__container -ml-2 md:-ml-3 lg:-ml-4">
          {loopSlides.map((review, index) => (
            <div
              key={`${review.author}-${index}`}
              className="min-w-0 flex-[0_0_100%] pl-2 md:pl-3 md:flex-[0_0_380px] lg:flex-[0_0_380px] lg:pl-4"
            >
              <div className="h-full rounded-2xl border border-[#C8A45B]/20 bg-[#111111] p-6 transition-all hover:border-[#C8A45B]/40 hover:shadow-lg md:p-8">
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
                    {review.event}
                    {review.date ? ` • ${review.date}` : ""}
                  </span>
                </div>

                <p className="mb-6 whitespace-pre-line leading-relaxed text-[#F5F5F5]">
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  {review.avatarSrc ? (
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[#C8A45B]/20 ring-1 ring-[#C8A45B]/30">
                      <Image
                        src={review.avatarSrc}
                        alt={review.author}
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C8A45B]/30 text-sm font-semibold text-[#F5F5F5]">
                      {review.initials}
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium text-[#F5F5F5]">
                      {review.author}
                    </p>
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
