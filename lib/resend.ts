import { Resend } from "resend";

export function getResendClient() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not set");
  }
  return new Resend(process.env.RESEND_API_KEY);
}

export const CONTACT_EMAIL = "admin@kadygroup.com";
export const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
