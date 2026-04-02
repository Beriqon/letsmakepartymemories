import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.info("[api/booking] POST received");

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("[api/booking] Missing RESEND_API_KEY");
    return Response.json(
      {
        success: false,
        message: "Serverconfiguratie ontbreekt.",
        error: "Serverconfiguratie ontbreekt.",
        code: "MISSING_RESEND_KEY",
      },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    let body: Record<string, unknown>;
    try {
      body = await req.json();
    } catch {
      console.warn("[api/booking] Invalid JSON body");
      return NextResponse.json(
        { error: "Ongeldige aanvraag. Vernieuw de pagina en probeer opnieuw." },
        { status: 400 }
      );
    }

    const {
      naam,
      email,
      datum,
      begintijd,
      eindtijd,
      locatie,
      bericht,
    } = body as {
      naam?: string;
      email?: string;
      datum?: string;
      begintijd?: string;
      eindtijd?: string;
      locatie?: string;
      bericht?: string;
    };

    if (!naam || !email || !datum || !begintijd || !eindtijd || !locatie) {
      console.warn("[api/booking] Validation failed: missing required fields");
      return NextResponse.json(
        { error: "Vul alle verplichte velden in." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Website <no-reply@letsmakepartymemories.nl>",
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
      console.error("[api/booking] Resend API error:", JSON.stringify(error));
      return NextResponse.json(
        {
          error: "Mail versturen mislukt.",
          detail:
            typeof error === "object" && error !== null && "message" in error
              ? String((error as { message: unknown }).message)
              : undefined,
        },
        { status: 500 }
      );
    }

    console.info("[api/booking] Resend success, id:", data?.id ?? "(no id)");
    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("[api/booking] Unexpected error:", err);
    return NextResponse.json(
      { error: "Er ging iets mis bij het verwerken van het formulier." },
      { status: 500 }
    );
  }
}