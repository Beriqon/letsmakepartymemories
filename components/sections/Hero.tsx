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
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero/WhatsApp%20Video%202026-03-23%20at%2010.10.01.mp4?v=20260323" type="video/mp4" />
        </video>
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2B2B2B]/70 via-[#2B2B2B]/50 to-[#2B2B2B]/70" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen flex-col items-center justify-center py-24 lg:py-32">
          <motion.div
            className="relative z-10 w-full max-w-2xl text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="mb-6 whitespace-normal break-words text-4xl font-bold leading-tight tracking-tight text-white sm:whitespace-nowrap sm:text-5xl lg:text-6xl font-serif"
              variants={itemVariants}
            >
              Let's Make Party Memories
            </motion.h1>

            {/* CTAs */}
            <motion.div
              className="mb-12 flex flex-col gap-5 sm:flex-row sm:justify-center"
              variants={itemVariants}
            >
              <Link
                href="#products"
                className="cta-glass group inline-flex h-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm px-8 text-base font-semibold text-white transition-all hover:bg-white/20 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent border border-white/20"
              >
                Ontdek jouw Mirrorbooth
              </Link>
              <Link
                href="#contact"
                className="cta-gold group inline-flex h-14 items-center justify-center rounded-full bg-[#C8A45B] px-8 text-base font-semibold text-[#0B0B0B] shadow-lg transition-all hover:bg-[#C8A45B] hover:shadow-xl hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-[#C8A45B]/50 focus:ring-offset-2"
              >
                Boek jouw datum
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
