import { NextResponse } from "next/server";
import { CONTACT_EMAIL, FROM_EMAIL, getResendClient } from "@/lib/resend";

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (typeof name !== "string" || !name || typeof email !== "string" || !email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 },
    );
  }

  try {
    const { error } = await getResendClient().emails.send({
      from: `Kady Group Website <${FROM_EMAIL}>`,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${typeof message === "string" ? message : ""}`,
    });

    if (error) throw error;
  } catch (error) {
    console.error("Failed to send contact form email:", error);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
