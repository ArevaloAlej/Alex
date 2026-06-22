import { profile } from "@/data/profile";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { DownloadIcon } from "./icons";

export default function Resume() {
  return (
    <section id="resume" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Resume" title="Download Resume" />

        <div className="flex flex-col items-start gap-6 rounded-lg border border-silver bg-light-gray p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-navy">{profile.fullName} — Resume</p>
            <p className="mt-1 text-sm text-graphite/70">
              Last updated {profile.resumeVersionDate}
            </p>
          </div>

          <a
            href={profile.resumeFile}
            download
            className="inline-flex items-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-charcoal"
          >
            <DownloadIcon className="h-4 w-4" />
            Download PDF
          </a>
        </div>
      </Container>
    </section>
  );
}
