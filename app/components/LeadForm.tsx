"use client";

import { useState } from "react";
import { site } from "./site-config";
import { ArrowRight, Check, Instagram } from "./icons";

type Status = "idle" | "submitting" | "success" | "error";

const categoryOptions = [
  "Car Rental (self-drive)",
  "Chauffeur Service",
  "Wedding / Event",
  "Photo / Video Shoot",
  "Airport Transfer",
  "Not sure yet / other",
];

export default function LeadForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot — bots fill hidden fields, humans don't.
    if (data.company) return;

    if (!data.name || !data.phone || !data.rental) {
      setError("Please add your name, phone and a category.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setError("Something went wrong. Please DM us on Instagram and we'll sort it fast.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="form-panel p-7 sm:p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-[3px] bg-blue/15 text-blue">
          <Check className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold">Request received 🔑</h3>
        <p className="mt-2 text-sm text-muted">
          We&apos;ll reply fast with availability and an all-in quote. For the
          quickest answer, slide into our DMs.
        </p>
        <a
          href={site.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-5 w-full"
        >
          <Instagram className="h-[18px] w-[18px]" />
          Message us on Instagram
        </a>
        <button
          onClick={() => setStatus("idle")}
          className="mt-3 text-xs font-medium text-muted underline-offset-4 hover:text-cream hover:underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="form-panel p-6 sm:p-7"
      aria-labelledby="quote-form-title"
      noValidate
    >
      <div className="mb-5">
        <p className="eyebrow">Free quote · No obligation</p>
        <h2
          id="quote-form-title"
          className="mt-2 text-2xl font-bold tracking-tight"
        >
          Lock in your dream car
        </h2>
        <p className="mt-1 text-sm text-muted">
          Tell us what and when — we reply with a clear price, fast.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Field label="Name" htmlFor="lf-name">
          <input id="lf-name" name="name" className="field" placeholder="Your name" autoComplete="name" required />
        </Field>
        <Field label="Phone / WhatsApp" htmlFor="lf-phone">
          <input id="lf-phone" name="phone" type="tel" className="field" placeholder="(212) 000-0000" autoComplete="tel" required />
        </Field>

        <Field label="Email" htmlFor="lf-email" optional className={compact ? "sm:col-span-2" : ""}>
          <input id="lf-email" name="email" type="email" className="field" placeholder="you@email.com" autoComplete="email" />
        </Field>
        <Field label="Select a category" htmlFor="lf-rental">
          <select id="lf-rental" name="rental" className="field" defaultValue="" required>
            <option value="" disabled>Choose…</option>
            {categoryOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </Field>

        <Field label="Dates" htmlFor="lf-dates" optional>
          <input id="lf-dates" name="dates" className="field" placeholder="e.g. Aug 14–16" />
        </Field>
        <Field label="Group size" htmlFor="lf-group" optional>
          <input id="lf-group" name="group" type="number" min={1} className="field" placeholder="2" />
        </Field>

        {!compact && (
          <Field label="Anything else" htmlFor="lf-msg" optional className="sm:col-span-2">
            <textarea id="lf-msg" name="message" rows={2} className="field resize-none" placeholder="Delivery to a Midtown hotel, weekend in the Hamptons…" />
          </Field>
        )}
      </div>

      {/* Honeypot */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      {status === "error" && (
        <p className="mt-3 text-sm text-pink-soft" role="alert">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn btn-primary mt-5 w-full text-base disabled:opacity-70"
      >
        {status === "submitting" ? "Sending…" : "Get my free quote"}
        {status !== "submitting" && <ArrowRight className="h-[18px] w-[18px]" />}
      </button>
      <p className="mt-3 text-center text-xs text-muted">
        Fully insured · We never share your info · Reply usually same day
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  optional,
  className = "",
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className={`block ${className}`}>
      <span className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-muted">
        {label}
        {optional && <span className="text-[0.65rem] uppercase tracking-wider opacity-60">optional</span>}
      </span>
      {children}
    </label>
  );
}
