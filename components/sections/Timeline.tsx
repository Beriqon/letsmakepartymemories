"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Datum reserveren",
    description: "Neem contact op via WhatsApp of het formulier om de datum en het tijdstip te reserveren.",
  },
  {
    number: "02",
    title: "Telefonisch overleg",
    description: "We plannen een kort gesprek waarin we het evenement en het design van de fotostrip bespreken.",
  },
  {
    number: "03",
    title: "Ontwerp goedkeuren",
    description: "Uw persoonlijke fotostrip wordt ontworpen en per mail gestuurd zodat u deze kunt controleren.",
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
    <section id="how" className="bg-[#1A1A1A] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-4xl font-bold text-[#C8A45B] md:text-5xl lg:text-6xl font-serif leading-tight">
            Hoe werkt het?
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
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
