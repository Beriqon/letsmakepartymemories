"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type TimelineStep = {
  number: string;
  title: string;
  description: string;
  cta?: { href: string; label: string };
};

const steps: TimelineStep[] = [
  {
    number: "01",
    title: "Photobooth reserveren",
    description:
      "Neem contact op via de WhatsApp-knop rechtsonder of vul het formulier in via de boekingsknop hieronder om jouw photobooth te boeken.",
    cta: { href: "#contact", label: "Boek jouw photobooth" },
  },
  {
    number: "02",
    title: "Telefonische afspraak",
    description: "We plannen een telefonische afspraak waarin we het evenement en het design van de fotostrip bespreken.",
  },
  {
    number: "03",
    title: "Design persoonlijke fotostrip",
    description:
      "Uw persoonlijke fotostrip wordt door Lisa ontworpen en per mail verstuurd zodat u kunt controleren of deze naar wens is.",
  },
  {
    number: "04",
    title: "Het evenement",
    description:
      "Wij leveren de photobooth en zetten alles op naar wens. Het enige wat nog rest is een spetterend evenement!! Wij komen de photobooth hierna afbouwen en ophalen op het afgesproken tijdstip.",
  },
];

export default function Timeline() {
  return (
    <section id="how" className="bg-[#1A1A1A] pt-12 pb-16 md:pt-12 md:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-4xl font-bold text-[#C8A45B] md:text-5xl lg:text-6xl font-serif leading-tight">
            Hoe het werkt
          </h2>
        </motion.div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="gold-line absolute left-0 right-0 top-12 h-0.5" />

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Number Badge */}
                  <div className="mb-6 flex justify-center">
                    <div className="gold-circle relative flex h-24 w-24 items-center justify-center rounded-full text-2xl font-bold text-[#1A1A1A] z-10">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="mb-4 text-center text-2xl font-semibold text-[#F5F5F5] font-serif">
                    {step.title}
                  </h3>
                  <p className="text-center leading-relaxed text-[#F5F5F5]/80">
                    {step.description}
                  </p>
                  {step.cta && (
                    <div className="mt-4 flex justify-center">
                      <Link
                        href={step.cta.href}
                        className="cta-gold inline-flex h-12 max-w-full items-center justify-center rounded-full bg-[#C8A45B] px-5 text-sm font-semibold text-[#0B0B0B] shadow-lg transition-all hover:bg-[#C8A45B] hover:shadow-xl hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-[#C8A45B]/50 focus:ring-offset-2 focus:ring-offset-[#1A1A1A] sm:px-6 sm:text-base"
                      >
                        {step.cta.label}
                      </Link>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="md:hidden">
          <div className="relative">
            {/* Vertical Line */}
            <div className="gold-line-vertical absolute left-6 top-0 bottom-0 w-0.5" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative pl-20"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  {/* Number Badge */}
                  <div className="gold-circle absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-[#1A1A1A] z-10">
                    {step.number}
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-[#F5F5F5] font-serif">
                    {step.title}
                  </h3>
                  <p className="leading-relaxed text-[#F5F5F5]/80">
                    {step.description}
                  </p>
                  {step.cta && (
                    <Link
                      href={step.cta.href}
                      className="cta-gold mt-4 inline-flex h-12 w-full max-w-xs items-center justify-center rounded-full bg-[#C8A45B] px-5 text-sm font-semibold text-[#0B0B0B] shadow-lg transition-all hover:bg-[#C8A45B] hover:shadow-xl hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-[#C8A45B]/50 focus:ring-offset-2 focus:ring-offset-[#1A1A1A] sm:text-base"
                    >
                      {step.cta.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
