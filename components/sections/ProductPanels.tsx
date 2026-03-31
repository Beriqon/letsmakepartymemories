"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProductPanels() {
  return (
    <section id="products" className="bg-[#1F1F1F] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-14 text-center md:mb-18 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-[#C8A45B] md:text-5xl lg:text-6xl font-serif leading-tight">
            Luxe Mirror Photobooth
          </h2>
          <p className="text-lg text-[#F5F5F5]/80 md:text-xl leading-relaxed">
            Alles wat je nodig hebt voor een onvergetelijk evenement.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 xl:gap-12 items-start">
            {/* LEFT CARD: Pricing Card (Sales Focused) */}
            <motion.div
              className="group relative rounded-[28px] bg-[#111111] p-9 md:p-12 shadow-[0_18px_60px_rgba(0,0,0,0.55)] border border-[#C8A45B]/25 ring-1 ring-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_80px_rgba(0,0,0,0.65)] hover:border-[#C8A45B]/40"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(900px_circle_at_30%_0%,rgba(200,164,91,0.10),transparent_55%)]" />
              {/* Title */}
              <h3 className="mb-5 text-3xl font-bold text-[#C8A45B] md:text-4xl lg:text-[42px] font-serif leading-tight tracking-tight">
                Huur een luxe mirror photobooth
              </h3>

              {/* Price */}
              <div className="mb-7">
                <div className="text-6xl font-bold text-[#F5F5F5] md:text-7xl lg:text-8xl font-serif tracking-tight leading-none drop-shadow-[0_6px_22px_rgba(200,164,91,0.20)]">
                  €345
                </div>
                <div className="text-sm text-[#F5F5F5]/70 mt-2">
                  excl. btw
                </div>
              </div>

              {/* Description */}
              {/* CTA Button */}
              <Link
                href="#contact"
                className="cta-gold relative inline-flex h-16 w-full items-center justify-center rounded-2xl bg-[#C8A45B] px-10 text-base md:text-[17px] font-semibold text-[#0B0B0B] shadow-[0_18px_40px_rgba(200,164,91,0.16)] transition-all duration-300 hover:bg-[#C8A45B] hover:-translate-y-0.5 hover:shadow-[0_22px_58px_rgba(200,164,91,0.22)] active:translate-y-0 active:shadow-[0_16px_34px_rgba(200,164,91,0.14)] focus:outline-none focus:ring-2 focus:ring-[#C8A45B]/55 focus:ring-offset-2 focus:ring-offset-[#111111]"
              >
                Controleer beschikbaarheid
              </Link>
            </motion.div>

            {/* RIGHT CARD: Detailed Information */}
            <motion.div
              className="group relative rounded-[28px] bg-[#111111] p-6 md:p-7 shadow-[0_16px_54px_rgba(0,0,0,0.50)] border border-[#C8A45B]/22 ring-1 ring-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_72px_rgba(0,0,0,0.62)] hover:border-[#C8A45B]/35"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(900px_circle_at_70%_0%,rgba(200,164,91,0.08),transparent_55%)]" />
              <h3 className="mb-5 text-3xl font-bold text-[#C8A45B] md:text-4xl font-serif tracking-tight">
                Wat is inbegrepen
              </h3>

              <div className="grid gap-3.5 sm:grid-cols-2">
                {/* Photobooth Group */}
                <div className="h-full rounded-2xl border border-[#C8A45B]/15 bg-[#0B0B0B]/35 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <h4 className="mb-3 text-lg md:text-xl font-semibold text-[#F5F5F5] font-serif">
                    Luxe Mirror Photobooth
                  </h4>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-3.5">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C8A45B]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-[#F5F5F5]/90 md:text-base leading-relaxed">
                        Groot 60 inch spiegel-touchscreen
                      </span>
                    </li>
                    <li className="flex items-start gap-3.5">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C8A45B]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-[#F5F5F5]/90 md:text-base leading-relaxed">
                        Onbeperkt printen
                      </span>
                    </li>
                    <li className="flex items-start gap-3.5">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C8A45B]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-[#F5F5F5]/90 md:text-base leading-relaxed">
                        Rode loper + luxe paaltjes
                      </span>
                    </li>
                    <li className="flex items-start gap-3.5">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C8A45B]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-[#F5F5F5]/90 md:text-base leading-relaxed">
                        Verschillende props (hoedjes, zonnebrillen etc.)
                      </span>
                    </li>
                    <li className="flex items-start gap-3.5">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C8A45B]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-[#F5F5F5]/90 md:text-base leading-relaxed">
                        Achtergronden beschikbaar
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Personalisatie Group */}
                <div className="h-full rounded-2xl border border-[#C8A45B]/15 bg-[#0B0B0B]/35 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <h4 className="mb-3 text-lg md:text-xl font-semibold text-[#F5F5F5] font-serif">
                    Personalisatie
                  </h4>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-3.5">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C8A45B]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-[#F5F5F5]/90 md:text-base leading-relaxed">
                        Volledig persoonlijk ontwerp van de fotostrip
                      </span>
                    </li>
                    <li className="flex items-start gap-3.5">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C8A45B]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-[#F5F5F5]/90 md:text-base leading-relaxed">
                        Beginschermpassend bij het design van de fotostrip
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Service Group */}
                <div className="h-full rounded-2xl border border-[#C8A45B]/15 bg-[#0B0B0B]/35 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <h4 className="mb-3 text-lg md:text-xl font-semibold text-[#F5F5F5] font-serif">
                    Service
                  </h4>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-3.5">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C8A45B]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-[#F5F5F5]/90 md:text-base leading-relaxed">
                        Geen uur limiet (wel tijdsafspraak)
                      </span>
                    </li>
                    <li className="flex items-start gap-3.5">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C8A45B]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-[#F5F5F5]/90 md:text-base leading-relaxed">
                        Installatie en afbouw door medewerkers
                      </span>
                    </li>
                    <li className="flex items-start gap-3.5">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C8A45B]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-[#F5F5F5]/90 md:text-base leading-relaxed">
                        Installatie en op-en afbouw door Peter & Lisa
                      </span>
                    </li>
                    <li className="flex items-start gap-3.5">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C8A45B]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-[#F5F5F5]/90 md:text-base leading-relaxed">
                        Alle foto's digitaal na afloop op aanvraag
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Levering Group */}
                <div className="h-full rounded-2xl border border-[#C8A45B]/15 bg-[#0B0B0B]/35 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <h4 className="mb-3 text-lg md:text-xl font-semibold text-[#F5F5F5] font-serif">
                    Levering
                  </h4>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-3.5">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C8A45B]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-[#F5F5F5]/90 md:text-base leading-relaxed">
                        Gratis haal- en brengservice binnen een straal van 50 km vanaf Amersfoort
                      </span>
                    </li>
                    <li className="flex items-start gap-3.5">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C8A45B]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-[#F5F5F5]/90 md:text-base leading-relaxed">
                        Buiten de straal van 50 km vanaf Amersfoort rekenen we €0,25 cent per km.
                      </span>
                    </li>
                    <li className="flex items-start gap-3.5">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C8A45B]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-[#F5F5F5]/90 md:text-base leading-relaxed">
                        Opzet en afbouw inbegrepen
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
