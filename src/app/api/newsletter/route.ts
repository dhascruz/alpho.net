import { NextResponse } from "next/server";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email(),
});

export async function POST(request: Request) {
  const body = await request.json();
  const result = newsletterSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  // No email service provider is configured yet — log the signup so it isn't
  // silently dropped. Wire this to a real ESP (e.g. Mailchimp, Resend) before launch.
  console.log("[newsletter] new signup:", result.data.email);

  return NextResponse.json({ ok: true });
}
