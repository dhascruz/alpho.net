"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2 } from "lucide-react";
import { services } from "@/data/services";

const requestTypes = [
  { value: "consultation", label: "Free Consultation" },
  { value: "proposal", label: "Request a Proposal" },
  { value: "demo", label: "Schedule a Demo" },
  { value: "audit", label: "Free Technical Audit" },
];

const budgets = ["Under $10k", "$10k – $50k", "$50k – $150k", "$150k+", "Not sure yet"];

export function LeadForm() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") ?? "consultation";
  const initialService = searchParams.get("service") ?? "";

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-surface px-8 py-16 text-center">
        <CheckCircle2 className="size-10 text-brand" />
        <h3 className="text-lg font-semibold text-foreground">Thanks — we&apos;ve got it.</h3>
        <p className="max-w-sm text-sm text-muted">
          We&apos;ll get back to you within one business day. In the meantime,
          feel free to reach us on WhatsApp for anything urgent.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-border bg-white p-6 sm:p-8">
      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">What do you need?</label>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {requestTypes.map((type) => (
            <label key={type.value} className="relative">
              <input
                type="radio"
                name="requestType"
                value={type.value}
                defaultChecked={type.value === initialType}
                className="peer sr-only"
              />
              <span className="block cursor-pointer rounded-xl border border-border px-3 py-2.5 text-center text-xs font-medium text-muted transition-colors peer-checked:border-brand peer-checked:bg-brand-tint peer-checked:text-brand-strong">
                {type.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-xl border border-border px-4 py-2.5 text-sm focus:border-brand focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-border px-4 py-2.5 text-sm focus:border-brand focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-foreground">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="w-full rounded-xl border border-border px-4 py-2.5 text-sm focus:border-brand focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-medium text-foreground">
            Service
          </label>
          <select
            id="service"
            name="service"
            defaultValue={initialService}
            className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm focus:border-brand focus:outline-none"
          >
            <option value="">Not sure yet</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.name}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="budget" className="mb-2 block text-sm font-medium text-foreground">
            Estimated budget
          </label>
          <select
            id="budget"
            name="budget"
            defaultValue=""
            className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm focus:border-brand focus:outline-none"
          >
            <option value="" disabled>
              Select a range
            </option>
            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full rounded-xl border border-border px-4 py-2.5 text-sm focus:border-brand focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-strong disabled:opacity-60"
      >
        {status === "loading" ? <Loader2 className="size-4 animate-spin" /> : null}
        Send request
      </button>
      {status === "error" ? (
        <p className="text-center text-sm text-red-600">
          Something went wrong. Please try again or email cruzconsultancy@gmail.com directly.
        </p>
      ) : null}
    </form>
  );
}
