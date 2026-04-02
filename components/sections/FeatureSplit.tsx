"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type FeatureBlock = {
  image?: string;
  videoSrc?: string;
  title: string;
  alt: string;
  bullets: string[];
  paragraphs?: string[];
  closingEmphasis?: { before: string; italic: string };
  closingBold?: string;
  cta?: { href: string; label: string };
  description?: string;
};

const features: FeatureBlock[] = [
  {
    videoSrc: "/images/lv_0_wetransfervid.mp4",
    title: "Onze luxe mirror photobooth",
    alt: "Interactieve mirror photobooth als blikvanger op een bedrijfsfeest of bruiloft",
    paragraphs: [
      "Dé eyecatcher voor elk feest!",
      "Onze luxe spiegel photobooth zorgt voor glamour, plezier en onvergetelijke herinneringen. Perfect voor bruiloften, bedrijfsfeesten, verjaardagen en jubilea.",
      "Laat jouw gasten lachen, poseren en hun foto's direct meenemen naar huis. Inclusief onbeperkt printen, stijlvolle props, rode loper en professionele setup.",
    ],
    closingEmphasis: {
      before: "Maak jullie herinneringen voor altijd tastbaar: ",
      italic: "Let's Make Party Memories!",
    },
    bullets: [],
  },
  {
    image: "/images/lmpm-overons.jpg",
    title: "Over ons",
    alt: "Team achter Let's Make Party Memories bij de luxe mirror photobooth voor feesten",
    paragraphs: [
      "Let's Make Party Memories is ontstaan vanuit een passie voor feesten en het vastleggen van bijzondere momenten.",
      "Wij, Peter & Lisa, geloven dat elk evenement uniek is en een persoonlijke touch verdient. Daarom streven wij ernaar om met onze luxe photobooth een onvergetelijke ervaring te creëren voor jou en jouw gasten.",
      "Kwaliteit, service en een zorgeloze ervaring staat bij ons centraal.",
    ],
    closingBold: "Klaar om jouw feest naar een hoger niveau te tillen?",
    cta: { href: "#contact", label: "Boek jouw photobooth" },
    bullets: [],
  },
];

export default function FeatureSplit() {
  return (
    <section className="bg-[#252525] pt-10 pb-12 md:pt-14 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 md:space-y-28">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            
            // Special grid layout for first feature (Beeld & geluid)
            if (index === 0) {
              return (
                <motion.div
                  key={index}
                  id="mirror-photobooth"
                  className="scroll-mt-24 md:scroll-mt-28"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="grid items-start gap-5 md:gap-10 lg:items-center lg:gap-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
                    {/* IMAGE: links op lg; op mobiel onder de tekst (order) */}
                    <div className="relative order-2 h-[380px] w-full overflow-hidden rounded-3xl bg-[#1c1c1c] shadow-[0_20px_50px_rgba(0,0,0,0.45)] ring-1 ring-[#C8A45B]/25 sm:h-[420px] lg:order-1 lg:h-[440px]">
                      {feature.videoSrc ? (
                        <video
                          className="absolute inset-0 h-full w-full object-contain object-center"
                          autoPlay
                          muted
                          loop
                          playsInline
                          aria-label={feature.alt}
                        >
                          <source src={feature.videoSrc} type="video/mp4" />
                        </video>
                      ) : feature.image ? (
                        <Image
                          src={feature.image}
                          alt={feature.alt}
                          fill
                          className="object-contain object-center"
                          sizes="(max-width: 1024px) 100vw, 46vw"
                          priority
                        />
                      ) : null}
                    </div>

                    {/* TEKST: op mobiel eerst; op lg rechts van de foto */}
                    <div className="order-1 lg:order-2">
                      <h3 className="mb-4 text-3xl font-semibold text-[#C8A45B] md:text-4xl font-serif leading-tight">
                        {feature.title}
                      </h3>
                      {"paragraphs" in feature && feature.paragraphs ? (
                        <div className="mb-6 text-lg leading-relaxed text-[#F5F5F5]/80 md:text-xl">
                          {index === 0 &&
                          feature.paragraphs.length >= 3 &&
                          "closingEmphasis" in feature &&
                          feature.closingEmphasis ? (
                            <div className="flex flex-col gap-4">
                              <div className="flex flex-col gap-0">
                                <p>{feature.paragraphs[0]}</p>
                                <p>{feature.paragraphs[1]}</p>
                              </div>
                              <div className="flex flex-col gap-0">
                                <p>{feature.paragraphs[2]}</p>
                                <p>
                                  {feature.closingEmphasis.before}
                                  <em className="whitespace-nowrap italic text-[#F5F5F5]/90">
                                    {feature.closingEmphasis.italic}
                                  </em>
                                </p>
                              </div>
                            </div>
                          ) : (
                            <div className="space-y-4">
                              {feature.paragraphs.map((para, pi) => (
                                <p key={pi}>{para}</p>
                              ))}
                              {"closingEmphasis" in feature &&
                                feature.closingEmphasis && (
                                  <p>
                                    {feature.closingEmphasis.before}
                                    <em className="whitespace-nowrap italic text-[#F5F5F5]/90">
                                      {feature.closingEmphasis.italic}
                                    </em>
                                  </p>
                                )}
                            </div>
                          )}
                        </div>
                      ) : feature.description ? (
                        <p className="mb-6 text-lg leading-relaxed text-[#F5F5F5]/80 md:text-xl">
                          {feature.description}
                        </p>
                      ) : null}
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
                  id="over-ons"
                  className="scroll-mt-24 md:scroll-mt-28"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="grid items-start gap-5 md:gap-10 lg:items-center lg:gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
                    {/* LEFT: TEXT */}
                    <div className="min-w-0">
                      <h3 className="mb-4 text-3xl font-semibold text-[#C8A45B] md:text-4xl font-serif leading-tight">
                        {feature.title}
                      </h3>
                      {"paragraphs" in feature && feature.paragraphs ? (
                        <div className="mb-6 text-lg leading-relaxed text-[#F5F5F5]/80 md:text-xl">
                          {"closingBold" in feature &&
                          feature.closingBold &&
                          feature.paragraphs.length > 0 ? (
                            <div className="space-y-4">
                              {feature.paragraphs.slice(0, -1).map((para, pi) => (
                                <p key={pi}>{para}</p>
                              ))}
                              <div className="flex flex-col gap-0">
                                <p>
                                  {
                                    feature.paragraphs[
                                      feature.paragraphs.length - 1
                                    ]
                                  }
                                </p>
                                <p className="font-bold text-[#F5F5F5]">
                                  {feature.closingBold}
                                </p>
                              </div>
                            </div>
                          ) : (
                            <div className="space-y-4">
                              {feature.paragraphs.map((para, pi) => (
                                <p key={pi}>{para}</p>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : feature.description ? (
                        <p className="mb-4 md:mb-6 text-lg leading-relaxed text-[#F5F5F5]/80 md:text-xl">
                          {feature.description}
                        </p>
                      ) : null}
                      {"cta" in feature && feature.cta && (
                        <Link
                          href={feature.cta.href}
                          className="cta-gold group mb-6 inline-flex h-14 items-center justify-center rounded-full bg-[#C8A45B] px-8 text-base font-semibold text-[#0B0B0B] shadow-lg transition-all hover:bg-[#C8A45B] hover:shadow-xl hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-[#C8A45B]/50 focus:ring-offset-2 focus:ring-offset-[#252525]"
                        >
                          {feature.cta.label}
                        </Link>
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
                      {feature.image ? (
                        <Image
                          src={feature.image}
                          alt={feature.alt}
                          fill
                          className="object-contain object-center"
                          sizes="(max-width: 1024px) 100vw, 46vw"
                        />
                      ) : null}
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
                  {feature.image ? (
                    <Image
                      src={feature.image}
                      alt={feature.alt ?? feature.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      unoptimized={feature.image === "/images/callmemaybe-hero.jpg"}
                      priority={index === 0}
                    />
                  ) : null}
                </div>

                {/* Text Column */}
                <div className="flex flex-col justify-center md:w-1/2">
                  <h3 className="mb-4 text-3xl font-semibold text-[#F5F5F5] md:text-4xl font-serif leading-tight">
                    {feature.title}
                  </h3>
                  {feature.description ? (
                    <p className="mb-6 text-lg leading-relaxed text-[#F5F5F5]/80 md:text-xl">
                      {feature.description}
                    </p>
                  ) : null}
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
