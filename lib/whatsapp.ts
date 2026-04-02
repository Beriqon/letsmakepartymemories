const WHATSAPP_PHONE = "31641081087";

/** Vooraf ingevuld bericht; gebruiker vult de datum zelf in na de dubbele punt. */
export const WHATSAPP_PREFILL_MESSAGE =
  "Hi Let's Make Party Memories, is de volgende datum nog beschikbaar voor de huur van de photobooth: ";

export function getWhatsAppHref(): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_PREFILL_MESSAGE)}`;
}
