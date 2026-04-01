"use client";

import { motion } from "framer-motion";
import ReviewsCarousel, { Review } from "./ReviewsCarousel";

const reviews: Review[] = [
  {
    stars: 5,
    text: "De mirror photobooth was echt een hit op onze bruiloft. Iedereen bleef foto's maken en de prints waren super kwaliteit. Ook fijn dat alles netjes werd opgezet en weer afgebouwd.",
    author: "L. van Dijk",
    event: "Bruiloft",
    date: "",
    initials: "L",
  },
  {
    stars: 5,
    text: "Super service! De photobooth zag er luxe uit met de rode loper en paaltjes. Onze gasten vonden het geweldig en we kregen alle foto's achteraf digitaal toegestuurd.",
    author: "K. Meijer",
    event: "Verjaardagsfeest",
    date: "",
    initials: "K",
  },
  {
    stars: 5,
    text: "Alles was perfect geregeld. De booth werd op tijd geleverd en werkte de hele avond zonder problemen. De props maakten het extra leuk voor onze gasten.",
    author: "Sanne",
    event: "Bedrijfsfeest",
    date: "",
    initials: "S",
  },
  {
    stars: 5,
    text: "Een echte aanrader! Het grote spiegel touchscreen ziet er super professioneel uit en de foto's worden meteen geprint. Onze gasten hebben er de hele avond plezier van gehad.",
    author: "M. Bosman",
    event: "Bruiloft",
    date: "",
    initials: "M",
  },
  {
    stars: 5,
    text: "De photobooth maakte ons feest compleet. Het was heel makkelijk te gebruiken en de foto's zijn een leuke herinnering voor iedereen.",
    author: "Emma",
    event: "Verjaardag",
    date: "",
    initials: "E",
  },
  {
    stars: 5,
    text: "Top ervaring! Goede communicatie vooraf en alles werd netjes geregeld op locatie. Ook heel leuk dat je de overlay kan aanpassen met namen en thema.",
    author: "D. van Mechelen",
    event: "Jubileumfeest",
    date: "",
    initials: "D",
  },
  {
    stars: 5,
    text: "Onze gasten stonden letterlijk in de rij voor de photobooth. De prints zijn van hoge kwaliteit en het ziet er echt luxe uit op het feest.",
    author: "J. Oosterhout",
    event: "Bruiloft",
    date: "",
    initials: "J",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-[#252525] py-12 md:pt-12 md:pb-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-8 text-center md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-[#C8A45B] md:text-5xl lg:text-6xl font-serif leading-tight">
            Reviews
          </h2>
        </motion.div>

        <ReviewsCarousel reviews={reviews} />
      </div>
    </section>
  );
}
