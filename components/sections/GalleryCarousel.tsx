"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
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
  const AUTOPLAY_DELAY_MS = 4000; // om de zoveel seconde 1 slide
  const TRANSITION_MS = 650;

  const hiddenKeywords = useMemo(() => {
    // Niet zichtbaar (sr-only), maar wel in de DOM per foto.
    // Amersfoort-varianten iets vaker.
    const terms = [
      "Photobooth huren Amersfoort",
      "Photobooth huren Amersfoort",
      "Photobooth huren Amersfoort",
      "mirrorbooth huren amersfoort",
      "mirrorbooth huren amersfoort",
      "fotobooth huren amersfoort",
      "fotobooth huren amersfoort",
      "Photobooth huren utrecht",
      "Mirrorbooth huren utrecht",
      "fotobooth huren utrecht",
      "Fotobooth huren voor verjaardag",
      "Photobooth huren voor verjaardag",
      "Mirrorbooth huren voor verjaardag",
      "Mirrorbooth huren voor bruiloft",
      "Mirrorbooth huren voor feest",
      "Fotobooth huren voor bruiloft",
      "Fotobooth huren voor feest",
      "Fotobooth huren arnhem",
    ];

    return terms.join(" • ");
  }, []);

  const initialItems = useMemo(() => images, [images]);
  const [items, setItems] = useState<GalleryImage[]>(initialItems);
  const [isAnimating, setIsAnimating] = useState(false);
  const [offsetPx, setOffsetPx] = useState(0);

  const viewportRef = useRef<HTMLDivElement | null>(null);
  const firstSlideRef = useRef<HTMLDivElement | null>(null);
  const slideStepRef = useRef<number>(0);

  // Keep state in sync if parent changes images
  useEffect(() => {
    setItems(images);
    setOffsetPx(0);
    setIsAnimating(false);
  }, [images]);

  const measureStep = useCallback(() => {
    const el = firstSlideRef.current;
    if (!el) return;
    const step = el.getBoundingClientRect().width;
    if (step > 0) slideStepRef.current = step;
  }, []);

  useLayoutEffect(() => {
    measureStep();
  }, [measureStep, items.length]);

  useEffect(() => {
    // Re-measure on resize so spacing stays exact
    const onResize = () => measureStep();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measureStep]);

  const animateNext = useCallback(() => {
    if (isAnimating) return;
    const step = slideStepRef.current;
    if (!step || items.length < 2) return;
    setIsAnimating(true);
    setOffsetPx(-step);
  }, [isAnimating, items.length]);

  const animatePrev = useCallback(() => {
    if (isAnimating) return;
    const step = slideStepRef.current;
    if (!step || items.length < 2) return;

    // Put last item in front instantly, then animate back to 0
    setIsAnimating(true);
    setItems((prev) => {
      const last = prev[prev.length - 1]!;
      const rest = prev.slice(0, -1);
      return [last, ...rest];
    });
    setOffsetPx(-step);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setOffsetPx(0));
    });
  }, [isAnimating, items.length]);

  const scrollPrev = useCallback(() => {
    animatePrev();
  }, [animatePrev]);

  const scrollNext = useCallback(() => {
    animateNext();
  }, [animateNext]);

  useEffect(() => {
    const id = window.setInterval(() => {
      animateNext();
    }, AUTOPLAY_DELAY_MS);
    return () => window.clearInterval(id);
  }, [animateNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      if (e.key === "ArrowLeft") scrollPrev();
      if (e.key === "ArrowRight") scrollNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [scrollPrev, scrollNext]);

  return (
    <div className="relative">
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

      {/* Carousel Viewport */}
      <div className="mx-auto max-w-7xl overflow-hidden" ref={viewportRef}>
        <div
          className="flex -ml-2 md:-ml-3 lg:-ml-4"
          style={{
            transform: `translate3d(${offsetPx}px, 0, 0)`,
            transition: isAnimating ? `transform ${TRANSITION_MS}ms ease-in-out` : "none",
            willChange: "transform",
          }}
          onTransitionEnd={() => {
            const step = slideStepRef.current;
            if (!step) {
              setIsAnimating(false);
              setOffsetPx(0);
              return;
            }

            // If we just moved left by 1 step, rotate items and reset transform to 0.
            if (offsetPx === -step) {
              setItems((prev) => {
                const [first, ...rest] = prev;
                return first ? [...rest, first] : prev;
              });
            }

            setIsAnimating(false);
            setOffsetPx(0);
          }}
        >
          {items.map((image, idx) => (
            <div
              key={`${image.id}-${idx}`}
              ref={idx === 0 ? firstSlideRef : undefined}
              className="flex-[0_0_100%] md:flex-[0_0_380px] lg:flex-[0_0_380px] min-w-0"
            >
              <div className="h-full pl-2 md:pl-3 lg:pl-4">
                <div className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer bg-[#111111]/40 ring-1 ring-[#C8A45B]/15">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
                    style={{ transform: `scale(${image.zoom ?? 1})` }}
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                  <span className="sr-only">{hiddenKeywords}</span>
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
