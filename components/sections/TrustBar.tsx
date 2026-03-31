"use client";

import { motion } from "framer-motion";
import { MapPin, Sparkles, Palette, Download } from "lucide-react";

const trustItems = [
  {
    icon: MapPin,
    text: "Op locatie geleverd & opgezet",
  },
  {
    icon: Sparkles,
    text: "inclusief rode loper + luxe paaltjes",
  },
  {
    icon: Palette,
    text: "Inclusief verschillende props en backdrops",
  },
  {
    icon: Download,
    text: "Alle foto's digitaal na afloop op aanvraag",
  },
];

export default function TrustBar() {
  return (
    <section className="relative z-10 -mt-16 bg-[#1F1F1F]/95 backdrop-blur-sm border-y border-[#C8A45B]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 py-8 md:grid-cols-4 md:gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-3 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <item.icon className="h-5 w-5 text-[#C8A45B]" />
              <p className="text-sm font-medium text-[#F5F5F5] md:text-base">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
