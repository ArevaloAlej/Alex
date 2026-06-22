"use client";

import { FormEvent, useState } from "react";
import { profile } from "@/data/profile";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { LinkedInIcon } from "./icons";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-navy py-20 text-white sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact"
          description="Send a message directly, or connect on LinkedIn. Contact details are never published directly on this page."
        />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-silver">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-1.5 w-full rounded-md border border-white/20 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-silver/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-silver">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-1.5 w-full rounded-md border border-white/20 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-silver/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="text-sm font-medium text-silver">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="mt-1.5 w-full rounded-md border border-white/20 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-silver/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium text-silver">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1.5 w-full rounded-md border border-white/20 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-silver/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold/90 disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Send Message"}
            </button>

            <div role="status" aria-live="polite">
              {status === "success" ? (
                <p className="text-sm font-medium text-emerald-300">
                  Message sent. Thank you for reaching out.
                </p>
              ) : null}
              {status === "error" ? (
                <p className="text-sm font-medium text-rose-300">
                  Something went wrong. Please try again later.
                </p>
              ) : null}
            </div>
          </form>

          <div className="flex flex-col gap-4 rounded-lg border border-white/15 bg-white/5 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gold">
              Connect
            </h3>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-gold"
            >
              <LinkedInIcon className="h-5 w-5" />
              LinkedIn Profile
            </a>
            <p className="text-sm leading-6 text-silver/70">
              {profile.location}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
