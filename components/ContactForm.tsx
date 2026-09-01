"use client";

import { useState } from "react";
import type { FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(form),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm text-slate-600">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-sm focus:border-navy focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-slate-600">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-sm focus:border-navy focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-slate-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-sm focus:border-navy focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-fit items-center justify-center rounded-md bg-gold px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send"}
      </button>

      {status === "success" && (
        <p className="text-sm font-semibold text-green-700">
          Thanks for reaching out! We&apos;ll be in touch soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-semibold text-red-600">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}
