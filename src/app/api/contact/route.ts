import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  requestType: z.string().optional(),
  message: z.string().min(1),
});

export async function POST(request: Request) {
  const body = await request.json();
  const result = contactSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  // No CRM/email provider is configured yet — log the lead server-side so it
  // isn't silently dropped. Wire this to a real ESP/CRM before launch.
  console.log("[contact] new lead:", result.data);

  return NextResponse.json({ ok: true });
}
