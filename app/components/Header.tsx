"use client";

import { Fragment, useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#mirror-photobooth", label: "Onze photobooth" },
    { href: "#over-ons", label: "Over ons" },
    { href: "#products", label: "Tarieven" },
    { href: "#how", label: "Hoe het werkt" },
    { href: "#galerij", label: "Galerij" },
    { href: "#reviews", label: "Reviews" },
    { href: "#footer-contact", label: "Contact" },
  ];

  /** Alleen hamburger (onder xl): Boeken naar #contact tussen Reviews en Contact */
  const mobileNavLinks = [
    ...navLinks.slice(0, -1),
    { href: "#contact", label: "Boeken" },
    ...navLinks.slice(-1),
  ];

  const handleLinkClick = () => {
    // Sluit het menu net na de hash-scroll zodat de scrollpositie klopt op mobiel.
    window.setTimeout(() => setIsMobileMenuOpen(false), 50);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "h-16 border-b border-[#C8A45B]/20 bg-[#111111]/70 backdrop-blur-xl shadow-lg"
          : "h-20 border-b border-transparent bg-[#111111]/50 backdrop-blur-md"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ${
          isScrolled ? "h-16" : "h-20"
        }`}>
          {/* Left: Text */}
          <a
            href="#hero"
            className="transition-opacity hover:opacity-80"
          >
            <span className="text-xl font-semibold text-[#F5F5F5] font-serif">
              Let's Make Party Memories
            </span>
          </a>

          {/* Middle: Navigation Links (wide screens — veel items) */}
          <div className="hidden max-w-[min(100%,56rem)] flex-1 flex-wrap items-center justify-center gap-y-2 px-2 text-sm xl:flex 2xl:text-base">
            {navLinks.map((link, i) => (
              <Fragment key={link.href}>
                {i > 0 ? (
                  <span
                    className="mx-1.5 h-3.5 w-px shrink-0 bg-gradient-to-b from-transparent via-[#C8A45B]/45 to-transparent 2xl:mx-2.5"
                    aria-hidden
                  />
                ) : null}
                <a
                  href={link.href}
                  className="shrink-0 px-0.5 text-center text-[#F5F5F5] font-medium transition-colors hover:text-[#C8A45B]"
                >
                  {link.label}
                </a>
              </Fragment>
            ))}
          </div>

          {/* Right: Primary Button (Desktop) */}
          <div className="hidden shrink-0 md:block">
            <a
              href="#contact"
              className="cta-gold group inline-flex h-12 items-center justify-center rounded-full bg-[#C8A45B] px-8 text-base font-semibold text-[#0B0B0B] shadow-md transition-all hover:bg-[#C8A45B] hover:shadow-xl hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-[#C8A45B]/50 focus:ring-offset-2 focus:ring-offset-[#111111]"
            >
              Boek jouw photobooth
            </a>
          </div>

          {/* Tablet / mobiel: hamburger (volledige menu met alle items) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex flex-col gap-1.5 p-2 xl:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-6 bg-[#F5F5F5] transition-all ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-[#F5F5F5] transition-all ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-[#F5F5F5] transition-all ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Uitklapmenu: desktop-links + extra Boeken (alleen hier) */}
        <div
          className={`xl:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-[min(85vh,30rem)] overflow-y-auto pb-4" : "max-h-0"
          } bg-[#111111]/80 backdrop-blur-xl border-t border-[#C8A45B]/20`}
        >
          <div className="flex flex-col pt-1">
            {mobileNavLinks.map((link, i) => (
              <Fragment key={`${link.href}-${link.label}`}>
                {i > 0 ? (
                  <div
                    className="mx-1.5 h-px shrink-0 bg-gradient-to-r from-transparent via-[#C8A45B]/25 to-transparent"
                    aria-hidden
                  />
                ) : null}
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="rounded-lg px-2 py-3 text-[#F5F5F5] font-medium transition-colors hover:text-[#C8A45B]"
                >
                  {link.label}
                </a>
              </Fragment>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
