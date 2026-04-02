"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProductPanels() {
  return (
    <section id="products" className="bg-[#1F1F1F] pt-12 pb-12 md:pt-12 md:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-14 text-center md:mb-18 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#C8A45B] md:text-5xl lg:text-6xl font-serif leading-tight">
            Tarieven
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            className="group relative rounded-[28px] bg-[#111111] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.55)] border border-[#C8A45B]/25 ring-1 ring-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_80px_rgba(0,0,0,0.65)] hover:border-[#C8A45B]/40 md:p-9 lg:p-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(900px_circle_at_50%_0%,rgba(200,164,91,0.10),transparent_55%)]" />

            <div className="relative">
              <h3 className="mb-5 text-3xl font-bold text-[#C8A45B] md:text-4xl font-serif tracking-tight">
                Wat is inbegrepen
              </h3>

              <div className="grid gap-3.5 sm:grid-cols-2">
                {/* Photobooth Group */}
                <div className="h-full rounded-2xl border border-[#C8A45B]/15 bg-[#0B0B0B]/35 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <h4 className="mb-3 text-lg md:text-xl font-semibold text-[#F5F5F5] font-serif">
                    De luxe mirror photobooth
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
                        60 inch spiegel touchscreen
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
                        {`Onbeperkt printen én digitale foto's`}
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
                        Rode loper + luxe afzetpaaltjes
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
                        Keuze uit stijlvolle achtergronden
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
                        Volledig gepersonaliseerd ontwerp van de fotostrip
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
                        Beginscherm volledig in jouw thema/stijl
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
                        Geen tijdslimiet (in overleg afgestemd)
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
                        Alle foto's na afloop digitaal beschikbaar (op aanvraag)
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
                        Buiten de straal van 50 km vanaf Amersfoort rekenen we €0,25 per km.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative mt-10 border-t border-[#C8A45B]/15 pt-10 md:mt-12 md:pt-12">
              <h3 className="mb-5 text-3xl font-bold text-[#C8A45B] md:text-4xl lg:text-[42px] font-serif leading-tight tracking-tight">
                Prijs
              </h3>
              <div>
                <div className="text-6xl font-bold text-[#F5F5F5] md:text-7xl lg:text-8xl font-serif tracking-tight leading-none drop-shadow-[0_6px_22px_rgba(200,164,91,0.20)]">
                  €345
                </div>
                <div className="text-sm text-[#F5F5F5]/70 mt-2">
                  excl. btw
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-[#C8A45B]/15 pt-10 md:mt-12 md:pt-12">
              <Link
                href="#contact"
                className="cta-gold relative inline-flex h-16 w-full items-center justify-center rounded-2xl bg-[#C8A45B] px-10 text-base md:text-[17px] font-semibold text-[#0B0B0B] shadow-[0_18px_40px_rgba(200,164,91,0.16)] transition-all duration-300 hover:bg-[#C8A45B] hover:-translate-y-0.5 hover:shadow-[0_22px_58px_rgba(200,164,91,0.22)] active:translate-y-0 active:shadow-[0_16px_34px_rgba(200,164,91,0.14)] focus:outline-none focus:ring-2 focus:ring-[#C8A45B]/55 focus:ring-offset-2 focus:ring-offset-[#111111]"
              >
                  Boek jouw photobooth
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
