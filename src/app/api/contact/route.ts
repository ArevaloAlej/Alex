import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function isValidPayload(value: unknown): value is ContactPayload {
  if (typeof value !== "object" || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.name === "string" &&
    v.name.trim().length > 0 &&
    typeof v.email === "string" &&
    /\S+@\S+\.\S+/.test(v.email) &&
    typeof v.subject === "string" &&
    v.subject.trim().length > 0 &&
    typeof v.message === "string" &&
    v.message.trim().length > 0
  );
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!isValidPayload(body)) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const contactToEmail = process.env.CONTACT_TO_EMAIL;

  if (resendApiKey && contactToEmail) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: contactToEmail,
        reply_to: body.email,
        subject: `[Portfolio] ${body.subject}`,
        text: `From: ${body.name} <${body.email}>\n\n${body.message}`,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  }

  // No email provider configured yet. Set RESEND_API_KEY and CONTACT_TO_EMAIL
  // env vars to enable real delivery. For now, submissions are logged only.
  console.warn(
    "Contact form submission received but no email provider is configured:",
    body
  );
  return NextResponse.json({ ok: true, delivered: false });
}
