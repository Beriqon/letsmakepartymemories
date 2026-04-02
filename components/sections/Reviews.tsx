"use client";

import { motion } from "framer-motion";
import ReviewsCarousel, { Review } from "./ReviewsCarousel";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?sca_esv=80e2d234b7bb7b01&hl=nl-NL&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOV23BWnuIP_3Ii78LsTAkm1Ko7jnEFPqvQmatDXDJBZGYl3_pwF3o4wojmX-FEhk21pvEeGMO0MCnES8yyyfkrJ14i3UMj2NQsGEvRjAoSdw62t26Q%3D%3D&q=Let%27s+Make+Party+Memories+Reviews&sa=X&ved=2ahUKEwidtM772M-TAxX1ywIHHa6kKUgQ0bkNegQINBAH&biw=1536&bih=730&dpr=1.25";

const OVERALL_STARS = 5;

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      />
    </svg>
  );
}

const reviews: Review[] = [
  {
    stars: 5,
    text: "De photobooth was een leuke aanvulling op mijn feestje. Service vanuit Lisa en Peter was top. Na afloop heb ik alle foto's digitaal ontvangen.",
    author: "Angélique Haverkamp",
    event: "Review van Google",
    date: "",
    initials: "AH",
    avatarSrc: "/reviews/angeliquehaverkamp.png",
  },
  {
    stars: 5,
    text: "Ik zou deze Photobooth zonder twijfel aanraden, aan iedereen die zijn feest onvergetelijk wil maken en net dat beetje extra wil geven, dankzij jullie zoveel lol gehad, het was een schot 🎯in de roos‼️",
    author: "Gisèle Flohr",
    event: "Review van Google",
    date: "",
    initials: "GF",
    avatarSrc: "/reviews/giseleflohr.png",
  },
  {
    stars: 5,
    text: "Wij hebben een geweldige ervaring gehad met deze fotobooth verhuur! Lisa zorgt voor super leuke en originele attributen, wat echt een extra dimensie geeft aan de foto’s. Daarnaast is de prijs zeer schappelijk, zeker voor de kwaliteit die je krijgt.\n\nWat vooral opvalt is hoe goed alles geregeld is: je wordt volledig ontzorgd. Van opbouw tot afhandeling, alles wordt voor je uit handen genomen, waardoor je zelf zorgeloos kunt genieten van het moment.\n\nAbsoluut een aanrader voor elk feest of evenement!",
    author: "Etienne Bolhuis",
    event: "Review van Google",
    date: "",
    initials: "EB",
    avatarSrc: "/reviews/ethiennebolhuis.png",
  },
  {
    stars: 5,
    text: "Super ervaring met Let's Make Party Memories! De photobooth was écht een hit op ons feest en zorgde voor hilarische foto's. Hele fijne communicatie, goede fotokwaliteit en alles perfect geregeld. Echt een aanrader!🫶",
    author: "Claire Vedder",
    event: "Review van Google",
    date: "",
    initials: "CV",
  },
  {
    stars: 5,
    text: "Geweldige Photobooth! De Magische Spiegel en alle leuke accessoires zien er alleen al sprankelend uit! Een kers op de taart voor je feest!",
    author: "Priscilla Bitterling",
    event: "Review van Google",
    date: "",
    initials: "PB",
  },
  {
    stars: 5,
    text: "Super ervaring gehad! De photobooth was een groot succes op ons feest. Het zag er niet alleen stijlvol uit, maar al onze gasten genoten er ook enorm van.\n\nDe service was ook echt top: alles werd netjes op tijd opgebouwd en uitgelegd. Zeker een aanrader!",
    author: "Rm Genc",
    event: "Review van Google",
    date: "",
    initials: "RG",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="scroll-mt-24 overflow-hidden bg-[#252525] py-12 md:scroll-mt-28 md:pt-12 md:pb-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-8 text-center md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-5 text-4xl font-bold text-[#C8A45B] md:text-5xl lg:text-6xl font-serif leading-tight">
            Reviews
          </h2>

          <div
            className="mx-auto flex w-fit max-w-full flex-col items-center gap-1.5 rounded-lg border border-[#C8A45B]/15 bg-[#111111]/40 px-4 py-3 sm:flex-row sm:gap-3 sm:px-5 sm:py-2.5"
            aria-labelledby="reviews-overall-score-title"
          >
            <h3 id="reviews-overall-score-title" className="sr-only">
              Gemiddelde beoordeling: 5 van 5 sterren op Google
            </h3>
            <div className="flex gap-0.5 text-[#C8A45B]/90">
              {Array.from({ length: OVERALL_STARS }).map((_, i) => (
                <StarIcon key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              ))}
            </div>
            <div className="hidden h-3 w-px shrink-0 bg-[#F5F5F5]/15 sm:block" aria-hidden />
            <p className="text-sm text-[#F5F5F5]/80">
              <span className="font-semibold tabular-nums text-[#F5F5F5]">
                5,0
              </span>
              <span className="text-[#F5F5F5]/40">/5</span>
              <span className="mx-2 text-[#F5F5F5]/25">·</span>
              <span className="text-xs font-normal text-[#F5F5F5]/45">
                Gemiddelde op Google
              </span>
            </p>
          </div>
          <p className="mt-2 text-xs text-[#F5F5F5]/40">
            Gebaseerd op echte klantreviews
          </p>
        </motion.div>

        <ReviewsCarousel reviews={reviews} />

        <p className="mt-10 text-center text-sm text-[#F5F5F5]/70">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#C8A45B] underline decoration-[#C8A45B]/40 underline-offset-2 transition-colors hover:text-[#d4b06f] hover:decoration-[#C8A45B]"
          >
            Bekijk alle Google-reviews
          </a>
        </p>
      </div>
    </section>
  );
}
