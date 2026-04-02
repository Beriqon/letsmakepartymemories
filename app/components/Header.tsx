"use client";

import { useState, useEffect } from "react";

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
    { href: "#products", label: "Photobooth" },
    { href: "#how", label: "Hoe het werkt" },
    { href: "#reviews", label: "Reviews" },
    { href: "#footer", label: "Contact" },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
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

          {/* Middle: Navigation Links (Desktop) */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#F5F5F5] transition-colors hover:text-[#C8A45B] font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: Primary Button (Desktop) */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="cta-gold group inline-flex h-12 items-center justify-center rounded-full bg-[#C8A45B] px-8 text-base font-semibold text-[#0B0B0B] shadow-md transition-all hover:bg-[#C8A45B] hover:shadow-xl hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-[#C8A45B]/50 focus:ring-offset-2 focus:ring-offset-[#111111]"
            >
              Boek jouw photobooth
            </a>
          </div>

          {/* Mobile: Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex flex-col gap-1.5 p-2 md:hidden"
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

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          } bg-[#111111]/80 backdrop-blur-xl border-t border-[#C8A45B]/20`}
        >
          <div className="flex flex-col gap-3 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="rounded-lg px-2 py-3 text-[#F5F5F5] transition-colors hover:text-[#C8A45B] font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
