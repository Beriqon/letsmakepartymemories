"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Hoeveel ruimte heeft de photobooth nodig?",
    answer: "De mirror photobooth heeft ongeveer 2x2 meter ruimte nodig. We zorgen voor een rode loper en luxe paaltjes, dus reken op een totale oppervlakte van ongeveer 3x3 meter voor de volledige setup.",
  },
  {
    question: "Komen jullie door heel Nederland?",
    answer: "Ja, levering en installatie zijn inbegrepen binnen 50 km van Amersfoort. Buiten dit gebied kunnen we tegen een meerprijs leveren. Neem contact met ons op voor een offerte op maat.",
  },
  {
    question: "Hoe snel krijgen we de digitale foto's?",
    answer: "Na afloop van het event ontvang je alle digitale foto's meestal binnen 48 uur. We zorgen ervoor dat je alle momenten snel kunt bekijken en delen met vrienden en familie.",
  },
  {
    question: "Kunnen we de print aanpassen met namen/logo?",
    answer: "Ja, we kunnen de prints volledig personaliseren met jullie namen, datum, logo of andere tekst. Dit bespreken we tijdens de boeking zodat alles perfect aansluit bij jullie event.",
  },
  {
    question: "Is er begeleiding bij de booth?",
    answer: "Ja, er is professionele begeleiding aanwezig tijdens het hele event. Onze begeleider helpt gasten met het gebruik van de booth en zorgt ervoor dat alles soepel verloopt.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#1A1A1A] py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-4xl font-bold text-[#F5F5F5] md:text-5xl lg:text-6xl font-serif leading-tight">
            Veelgestelde vragen
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-2xl bg-[#111111] border border-[#C8A45B]/20 transition-all hover:border-[#C8A45B]/40 hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-[#C8A45B]/50 focus:ring-inset"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="pr-8 text-lg font-semibold text-[#F5F5F5] md:text-xl font-serif">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <motion.svg
                    className="h-6 w-6 text-[#C8A45B]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="leading-relaxed text-[#F5F5F5]/80">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
