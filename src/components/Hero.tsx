import Image from "next/image";
import { profile } from "@/data/profile";
import Container from "./Container";
import { DownloadIcon, LinkedInIcon, MailIcon } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="bg-navy text-white">
      <Container className="grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            {profile.location}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            {profile.fullName}
          </h1>
          <p className="mt-3 text-xl font-medium text-silver/90">
            {profile.title}
          </p>
          <p className="mt-6 max-w-xl text-base leading-7 text-silver/80">
            {profile.valueProposition}
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-silver/70">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={profile.resumeFile}
              download
              className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold/90"
            >
              <DownloadIcon className="h-4 w-4" />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <MailIcon className="h-4 w-4" />
              Contact
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="justify-self-center">
          <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-white/10 bg-graphite sm:h-72 sm:w-72">
            <Image
              src="/portrait-placeholder.svg"
              alt={`Portrait of ${profile.fullName}`}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
