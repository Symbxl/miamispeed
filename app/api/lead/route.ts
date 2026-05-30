import { NextResponse } from "next/server";

/**
 * Lead capture endpoint for the booking form.
 *
 * It works out of the box (logs the lead server-side and returns success).
 * To start receiving leads by email, add these to `.env.local`:
 *
 *   RESEND_API_KEY=re_xxxxxxxx        # free at resend.com
 *   LEAD_TO_EMAIL=you@yourdomain.com  # where leads should land
 *   LEAD_FROM_EMAIL=leads@yourdomain.com  # a verified Resend sender (optional)
 *
 * No other code changes needed — the email send activates automatically.
 */

type Lead = {
  name?: string;
  phone?: string;
  email?: string;
  rental?: string;
  dates?: string;
  group?: string;
  message?: string;
  company?: string; // honeypot
};

export async function POST(request: Request) {
  let body: Lead;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: silently accept bots without doing anything.
  if (body.company) return NextResponse.json({ ok: true });

  const name = body.name?.trim();
  const phone = body.phone?.trim();
  const rental = body.rental?.trim();

  if (!name || !phone || !rental) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 422 },
    );
  }

  const lead = {
    name,
    phone,
    email: body.email?.trim() || "",
    rental,
    dates: body.dates?.trim() || "",
    group: body.group?.trim() || "",
    message: body.message?.trim() || "",
    receivedAt: new Date().toISOString(),
  };

  // Always record it server-side so nothing is lost before email is wired up.
  console.log("[timeless-autogroup] New lead:", lead);

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL;
  if (apiKey && to) {
    try {
      await sendEmail(apiKey, to, lead);
    } catch (err) {
      // Don't fail the user's submission if email delivery hiccups.
      console.error("[timeless-autogroup] Email send failed:", err);
    }
  }

  return NextResponse.json({ ok: true });
}

async function sendEmail(
  apiKey: string,
  to: string,
  lead: Record<string, string>,
) {
  const from = process.env.LEAD_FROM_EMAIL || "Timeless Autogroup <onboarding@resend.dev>";
  const rows = Object.entries(lead)
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#888;text-transform:capitalize">${k}</td><td style="padding:4px 0"><b>${escapeHtml(v)}</b></td></tr>`)
    .join("");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: lead.email || undefined,
      subject: `New rental request — ${lead.name} (${lead.rental})`,
      html: `<h2>New rental request</h2><table style="font-family:system-ui,sans-serif;font-size:14px">${rows}</table>`,
    }),
  });

  if (!res.ok) throw new Error(`Resend responded ${res.status}`);
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
