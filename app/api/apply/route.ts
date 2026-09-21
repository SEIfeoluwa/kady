import { NextResponse } from "next/server";
import { CONTACT_EMAIL, FROM_EMAIL, getResendClient } from "@/lib/resend";
import {
  getClientIp,
  isHoneypotFilled,
  isRateLimited,
  isSubmittedTooFast,
} from "@/lib/spam";

const MAX_RESUME_SIZE_BYTES = 5 * 1024 * 1024;

export async function POST(request: Request) {
  const formData = await request.formData();

  if (isHoneypotFilled(formData) || isSubmittedTooFast(formData)) {
    // Pretend it worked so bots don't adjust their behavior and retry.
    return NextResponse.json({ success: true });
  }

  if (isRateLimited(`apply:${getClientIp(request)}`, { max: 5, windowMs: 60 * 60 * 1000 })) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429 },
    );
  }

  const name = formData.get("name");
  const email = formData.get("email");
  const position = formData.get("position");
  const resume = formData.get("resume");

  if (typeof name !== "string" || !name || typeof email !== "string" || !email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 },
    );
  }

  const attachments = [];
  if (resume instanceof File && resume.size > 0) {
    if (resume.size > MAX_RESUME_SIZE_BYTES) {
      return NextResponse.json(
        { error: "Resume must be smaller than 5MB." },
        { status: 400 },
      );
    }
    attachments.push({
      filename: resume.name,
      content: Buffer.from(await resume.arrayBuffer()),
    });
  }

  try {
    const { error } = await getResendClient().emails.send({
      from: `Kady Group Website <${FROM_EMAIL}>`,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `New job application from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPosition applying for: ${
        typeof position === "string" && position ? position : "Not specified"
      }`,
      attachments,
    });

    if (error) throw error;
  } catch {
    return NextResponse.json(
      { error: "Failed to submit your application. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
