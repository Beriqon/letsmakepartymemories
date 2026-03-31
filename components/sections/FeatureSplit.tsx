"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    image: "/images/lmpm-overons.jpg",
    title: "✨Let's Make Party Memories ✨",
    description: "Let's Make Party Memories is ontstaan uit een passie voor feesten en het vastleggen van mooie momenten. Wij, Peter & Lisa, geloven dat elk evenement uniek is en een persoonlijke touch verdient. Daarom streven wij ernaar om met onze photoboot een onvergetelijke ervaring te creëren voor jou en jouw gasten. Wij zijn gedreven door respect voor kwaliteit en een oprechte wens om verwachtingen te overtreffen. Klaar om jouw feest naar een hoger niveau te tillen?",
    bullets: [],
  },
  {
    image: "/images/callmemaybe-videoboek.avif",
    title: "Dé eyecatcher voor elk feest!",
    description: "Onze mirror photobooth zorgt voor glamour, plezier en onvergetelijke herinneringen. Het is de perfecte toevoeging voor bedrijfsevents, bruiloften, jubilea, verjaardagen en meer!",
    description2: "Laat jouw gasten foto's maken met onze luxe spiegel photobooth. Onbeperkt printen, rode loper, props en alles professioneel opgezet.",
    bullets: [],
  },
];

export default function FeatureSplit() {
  return (
    <section id="what" className="bg-[#252525] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-24 md:space-y-28">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            
            // Special grid layout for first feature (Beeld & geluid)
            if (index === 0) {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="grid items-start gap-10 lg:gap-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
                    {/* LEFT: IMAGE */}
                    <div className="relative h-[380px] w-full overflow-hidden rounded-3xl bg-[#1c1c1c] shadow-[0_20px_50px_rgba(0,0,0,0.45)] ring-1 ring-[#C8A45B]/25 sm:h-[420px] lg:h-[440px]">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-contain object-center"
                        sizes="(max-width: 1024px) 100vw, 46vw"
                        priority
                      />
                    </div>

                    {/* RIGHT: TEXT */}
                    <div>
                      <h3 className="mb-4 whitespace-normal md:whitespace-nowrap text-2xl font-semibold text-[#C8A45B] sm:text-3xl md:text-4xl font-serif leading-tight">
                        {feature.title}
                      </h3>
                      <p className="mb-6 text-lg leading-relaxed text-[#F5F5F5]/80 md:text-xl">
                        {feature.description}
                      </p>
                      <ul className="space-y-3">
                        {feature.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="flex items-start gap-3 text-[#F5F5F5]">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#C8A45B]" />
                            <span className="text-base md:text-lg">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            }
            
            // Special grid layout for second feature (Onbeperkt foto's printen)
            if (index === 1) {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="grid items-start gap-10 lg:gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
                    {/* LEFT: TEXT */}
                    <div>
                      <h3 className="mb-4 text-3xl font-semibold text-[#C8A45B] md:text-4xl font-serif leading-tight">
                        {feature.title}
                      </h3>
                      <p className="mb-6 text-lg leading-relaxed text-[#F5F5F5]/80 md:text-xl">
                        {feature.description}
                      </p>
                      {(feature as any).description2 && (
                        <p className="mb-6 text-lg leading-relaxed text-[#F5F5F5]/80 md:text-xl">
                          {(feature as any).description2}
                        </p>
                      )}
                      <ul className="space-y-3">
                        {feature.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="flex items-start gap-3 text-[#F5F5F5]">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#C8A45B]" />
                            <span className="text-base md:text-lg">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* RIGHT: IMAGE */}
                    <div className="relative h-[380px] w-full overflow-hidden rounded-3xl bg-[#1c1c1c] shadow-[0_20px_50px_rgba(0,0,0,0.45)] ring-1 ring-[#C8A45B]/25 sm:h-[420px] lg:h-[440px]">
                      <Image
                        src="/gallerij/lmpm-gallerij.jpg"
                        alt={feature.title}
                        fill
                        className="object-contain object-center"
                        sizes="(max-width: 1024px) 100vw, 46vw"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            }
            
            // Original layout for other features (should not be reached now)
            return (
              <motion.div
                key={index}
                className={`flex flex-col gap-12 md:flex-row md:items-center md:gap-16 ${
                  !isEven ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
              >
                {/* Image Column */}
                <div className="relative h-[420px] w-full overflow-hidden rounded-2xl md:w-1/2">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized={feature.image === "/images/callmemaybe-hero.jpg"}
                    priority={index === 0}
                  />
                </div>

                {/* Text Column */}
                <div className="flex flex-col justify-center md:w-1/2">
                  <h3 className="mb-4 text-3xl font-semibold text-[#F5F5F5] md:text-4xl font-serif leading-tight">
                    {feature.title}
                  </h3>
                  <p className="mb-6 text-lg leading-relaxed text-[#F5F5F5]/80 md:text-xl">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3 text-[#F5F5F5]">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#C8A45B]" />
                        <span className="text-base md:text-lg">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
