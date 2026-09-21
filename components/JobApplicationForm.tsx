"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function JobApplicationForm({
  positions,
}: {
  positions: string[];
}) {
  const [status, setStatus] = useState<Status>("idle");
  const startedAtRef = useRef(Date.now());

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");

    try {
      const response = await fetch("/api/apply", {
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
    <form onSubmit={handleSubmit} className="mt-14 flex flex-col gap-6 text-left">
      <h3 className="text-xl font-bold text-gold">Apply Here</h3>

      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}
      >
        <label htmlFor="hp_check">Leave this field blank</label>
        <input id="hp_check" name="hp_check" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="ts" value={startedAtRef.current} readOnly />

      <div>
        <label htmlFor="name" className="block text-sm text-slate-600">
          Your Name <span className="text-red-500">*</span>
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
          Your Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-sm focus:border-navy focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="resume" className="block text-sm text-slate-600">
          Upload Resume
        </label>
        <input
          id="resume"
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          className="mt-2 text-sm text-slate-600"
        />
      </div>

      <div>
        <span className="block text-sm text-slate-600">
          Position Applying For:
        </span>
        <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
          {[...positions, "Other"].map((position) => (
            <label
              key={position}
              className="flex items-center gap-2 text-sm text-slate-700"
            >
              <input type="radio" name="position" value={position} />
              {position}
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-fit items-center justify-center rounded-md bg-gold px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting..." : "Send"}
      </button>

      {status === "success" && (
        <p className="text-sm font-semibold text-green-700">
          Thanks for applying! We&apos;ll review your application and be in
          touch.
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
