"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    datum: "",
    begintijd: "18:00",
    eindtijd: "22:00",
    locatie: "",
    bericht: "Hi Let's Make Party Memories, ",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
        setStatusMessage("Aanvraag verzonden!");
        setFormData({
          naam: "",
          email: "",
          datum: "",
          begintijd: "18:00",
          eindtijd: "22:00",
          locatie: "",
          bericht: "Hi Let's Make Party Memories, ",
        });
      } else {
        setSubmitted(false);
        setStatusMessage(data.error || "Er ging iets mis.");
      }
    } catch (error) {
      setSubmitted(false);
      setStatusMessage("Er ging iets mis bij het versturen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-[#2A2A2A] py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-4xl font-bold text-[#C8A45B] md:text-5xl lg:text-6xl font-serif leading-tight">
            Boek nú jouw luxe mirror photobooth
          </h2>
        </motion.div>

        <motion.div
          className="rounded-3xl bg-[#111111] p-8 md:p-12 border border-[#C8A45B]/20 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="naam"
                  className="mb-2 block text-sm font-medium text-[#F5F5F5]"
                >
                  Naam
                </label>
                <input
                  type="text"
                  id="naam"
                  name="naam"
                  value={formData.naam}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl bg-[#0B0B0B] px-5 py-4 text-[#F5F5F5] placeholder:text-[#F5F5F5]/50 focus:outline-none focus:ring-2 focus:ring-[#C8A45B]/50 focus:ring-offset-2 border border-[#C8A45B]/30 transition-all"
                  placeholder="Jouw naam"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#F5F5F5]"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl bg-[#0B0B0B] px-5 py-4 text-[#F5F5F5] placeholder:text-[#F5F5F5]/50 focus:outline-none focus:ring-2 focus:ring-[#C8A45B]/50 focus:ring-offset-2 border border-[#C8A45B]/30 transition-all"
                  placeholder="jouw@email.nl"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="datum"
                className="mb-2 block text-sm font-medium text-[#F5F5F5]"
              >
                Datum van het evenement
              </label>
              <input
                type="date"
                id="datum"
                name="datum"
                value={formData.datum}
                onChange={handleChange}
                required
                className="w-full rounded-xl bg-[#0B0B0B] px-5 py-4 text-[#F5F5F5] placeholder:text-[#F5F5F5]/50 focus:outline-none focus:ring-2 focus:ring-[#C8A45B]/50 focus:ring-offset-2 border border-[#C8A45B]/30 transition-all"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="begintijd"
                  className="mb-2 block text-sm font-medium text-[#F5F5F5]"
                >
                  Begintijd
                </label>
                <input
                  type="time"
                  id="begintijd"
                  name="begintijd"
                  value={formData.begintijd}
                  onChange={handleChange}
                  required
                  step="60"
                  className="w-full rounded-xl bg-[#0B0B0B] px-5 py-4 text-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#C8A45B]/50 focus:ring-offset-2 border border-[#C8A45B]/30 transition-all"
                  style={{ colorScheme: "dark" }}
                />
              </div>

              <div>
                <label
                  htmlFor="eindtijd"
                  className="mb-2 block text-sm font-medium text-[#F5F5F5]"
                >
                  Eindtijd
                </label>
                <input
                  type="time"
                  id="eindtijd"
                  name="eindtijd"
                  value={formData.eindtijd}
                  onChange={handleChange}
                  required
                  step="60"
                  className="w-full rounded-xl bg-[#0B0B0B] px-5 py-4 text-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#C8A45B]/50 focus:ring-offset-2 border border-[#C8A45B]/30 transition-all"
                  style={{ colorScheme: "dark" }}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="locatie"
                className="mb-2 block text-sm font-medium text-[#F5F5F5]"
              >
                Waar is het event? (straat, huisnummer, stad)
              </label>
              <input
                type="text"
                id="locatie"
                name="locatie"
                value={formData.locatie}
                onChange={handleChange}
                required
                className="w-full rounded-xl bg-[#0B0B0B] px-5 py-4 text-[#F5F5F5] placeholder:text-[#F5F5F5]/50 focus:outline-none focus:ring-2 focus:ring-[#C8A45B]/50 focus:ring-offset-2 border border-[#C8A45B]/30 transition-all"
                placeholder="Bijv. Hoofdstraat 123, Amsterdam"
              />
            </div>

            <div>
              <label
                htmlFor="bericht"
                className="mb-2 block text-sm font-medium text-[#F5F5F5]"
              >
                Bericht
              </label>
              <textarea
                id="bericht"
                name="bericht"
                value={formData.bericht}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-xl bg-[#0B0B0B] px-5 py-4 text-[#F5F5F5] placeholder:text-[#F5F5F5]/50 focus:outline-none focus:ring-2 focus:ring-[#C8A45B]/50 focus:ring-offset-2 border border-[#C8A45B]/30 transition-all resize-none"
              />
            </div>

            <div className="flex flex-col gap-5">
              <div className="relative inline-flex items-center justify-center w-full">
                <div className="absolute inset-0 rounded-full border-2 border-[#C8A45B]/40 animate-pulse"></div>
                <div className="absolute inset-0 rounded-full border border-[#C8A45B]/60"></div>
                <button
                  type="submit"
                  disabled={loading}
                  className="cta-gold relative w-full inline-flex h-14 items-center justify-center rounded-full bg-[#C8A45B] px-8 text-base font-semibold text-[#0B0B0B] shadow-lg transition-all hover:bg-[#C8A45B] hover:shadow-xl hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-[#C8A45B] focus:ring-offset-2 focus:ring-offset-[#111111] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading
                    ? "Versturen..."
                    : submitted
                    ? "Aanvraag verzonden!"
                    : "Verstuur aanvraag"}
                </button>
              </div>
            </div>

            <p className="text-center text-sm text-[#F5F5F5]">
              Reactie binnen 24 uur.
            </p>

            {statusMessage && (
              <p className="text-center text-sm text-[#F5F5F5]">
                {statusMessage}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}