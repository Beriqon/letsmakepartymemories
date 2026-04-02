"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero/20260321_003712.mp4?v=20260321" type="video/mp4" />
        </video>
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2B2B2B]/70 via-[#2B2B2B]/50 to-[#2B2B2B]/70" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen w-full flex-col items-center justify-center py-24 lg:py-32">
          <motion.div
            className="relative z-10 mx-auto flex w-full max-w-[min(100%,56rem)] flex-col items-center text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="mb-3 text-center text-2xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl font-serif"
              variants={itemVariants}
            >
              {"Let's Make Party Memories"}
            </motion.h1>

            <motion.p
              className="mb-10 max-w-xl text-center text-base font-medium tracking-wide text-white/90 sm:text-lg md:mb-12 [text-shadow:0_1px_12px_rgba(0,0,0,0.45)]"
              variants={itemVariants}
            >
              Luxe mirror photobooth verhuur
            </motion.p>

            <motion.div
              className="mb-12 flex justify-center"
              variants={itemVariants}
            >
              <Link
                href="#contact"
                className="cta-gold group inline-flex h-14 items-center justify-center rounded-full bg-[#C8A45B] px-8 text-base font-semibold text-[#0B0B0B] shadow-lg transition-all hover:bg-[#C8A45B] hover:shadow-xl hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-[#C8A45B]/50 focus:ring-offset-2"
              >
                Boek jouw photobooth
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
