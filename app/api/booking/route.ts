import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      naam,
      email,
      datum,
      begintijd,
      eindtijd,
      locatie,
      bericht,
    } = body;

    if (!naam || !email || !datum || !begintijd || !eindtijd || !locatie) {
      return NextResponse.json(
        { error: "Vul alle verplichte velden in." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Letsmakeparty <onboarding@resend.dev>",
      to: ["info@letsmakepartymemories.nl"],
      subject: `Nieuwe photobooth aanvraag van ${naam}`,
      replyTo: email,
      html: `
        <h2>Nieuwe aanvraag via de website</h2>
        <p><strong>Naam:</strong> ${naam}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Datum van event:</strong> ${datum}</p>
        <p><strong>Begintijd:</strong> ${begintijd}</p>
        <p><strong>Eindtijd:</strong> ${eindtijd}</p>
        <p><strong>Locatie:</strong> ${locatie}</p>
        <p><strong>Bericht:</strong><br/>${bericht || "-"}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Mail versturen mislukt." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Route error:", err);
    return NextResponse.json(
      { error: "Er ging iets mis bij het verwerken van het formulier." },
      { status: 500 }
    );
  }
}